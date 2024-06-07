---
title: "Building Snake for Mastodon"
description: "How and why I built snake for mastodon."
pubDate: "June 6 2024"
updatedDate: "June 7 2024"
categories: ["snake", "fediverse", "mastodon", "typescript", "devlog"]
---

On May 26th, I stumbled upon an old [polymars video](https://www.youtube.com/watch?v=cREl1kB6hRs) in which he built a bot for x which let users collab in a game of snake. The bot was great while it lasted but unfortunately its been offline for the past 3 years.

<blockquote><p lang="en" dir="ltr">😴🟨🟨🟨🟨🟡<br><br>snake is resting while it waits for a new update</p>&mdash; Twitter Plays Snake (@SnakeGameBot) <a href="https://twitter.com/SnakeGameBot/status/1361312107455795201">February 15, 2021</a></blockquote>

I liked the concept of the bot and thought that using likes and retweets was a pretty smart option for movement. I wanted to make a version of this for the fediverse. Looking through his project, it prohibited rehosting the project in its entirety. However, writing my own code and hosting it on a different(albeit similar) platform wouldn't infringe upon the license. So I figured to try hosting it on a mastodon instance.

## Finding a suitable mastodon instance

I wanted an instance which would work for bots and I eventually stumbled upon [botsin.space](https://botsin.space). They allowed bots as long as bots wouldn't spam the instance. This seems great to me so I signed up for an account and set up an application.

## Language and Libraries?

I wanted to build this in typescript since I have a lot of experience with it. I wanted to use a wrapper library for the mastodon api rather than directly interfacing with it. to solve this, I used [masto.js](https://github.com/neet/masto.js/) which is a really great library. It has amazing documentation and works really good with typescript.

## How does this work?
Imagine a 6x6 grid. The position of the snake head and the food is randomly added within the grid. The coordinates the snake takes up are stored within an array. Pretty simple so far, right?

As for movement, first, based on the direction that the snake should move, a new element is added to the start of the array which takes the old index 0 element and adds the direction to it. Then, the last element of the array is removed. It would look something like this:
- `[[0, 1], [0, 2]]` - Initial
- `[[0, 0], [0, 1], [0, 2]]` - Moving in a direction
- `[[0, 0], [0, 1]]` - Removing the last element

Now when the snake eats some food, it is expected to grow. For this, we can check if the snake's head is on the same point as some food and if so skip the last step of removing the last element.

Now things aren't that simple unfortunately. 2d arrays are really weird in accessing coordinates. For example, if I wanted to access the coordinate `(3,2)`, then I would use `grid[2][3]`. It's reversed!. The direction of movement also changes then. To move up, I need to decrease the y and its vice-versa for moving down. Left and right seem to work normally. After figuring out these quirks, I managed to get movement to work great.

To get the grid to be displayed for mastodon, I made a simple function which looped over the 2d array and for each element, depending on what it was, it would use an emoji placed within a string:
- Empty Space - 🟦
- Snake Head - 🟢
- Snake Body - 🟩
- Food - 🍎

After that, I just set the bot up to make a post every ~~hour~~thirty minutes with a poll that would close in ~~an hour~~thirty minutes. Based on the results of the poll, the snake would move in that direction and a new post would be made with the snake in the new coordinates and a new poll.

I set up a function to automatically generate options for the poll based on the state of the snake. For example, if the current direction of the snake is left, the snake should be able to continue left, go up, and go down. It shouldn't be able to go right since it would just immediately collide with itself.

From this, the bot was ready to use and try out.

## Extra features that might come soon.
- ~~High Score System(I'm thinking of using the mastodon extra fields to store it)~~ Implemented (6/7/24)
- Cool snake modes(Like what polymars implemented)
- Randomly generated style(The food could be a different emoji every time after its eaten such as perhaps a 🍔, the color of the background could change, etc)

## Code and Link
[GitHub Repo](https://github.com/errorcodezero/mastodon-plays-snake)

[Bot Link(@snake@botsin.space)](https://botsin.space/@snake)
