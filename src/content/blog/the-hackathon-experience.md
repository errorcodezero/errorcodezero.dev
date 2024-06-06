---
title: "The Hackathon Experience"
description: "I went to a 24 hour hackathon yesterday and here was my experience as well as what I learned."
pubDate: "April 15 2024"
categories: ["hackathon", "typescript"]
---

On April 7 2024, I went to my first "hackathon" hackathon(the ones I've been to before have been 6 hours or 3 hours and weren't this long). This hackathon had funding from companies, a bunch of events planned, and most importantly, laptop stickers. I gotta say that it was an experience that I really enjoyed. I worked on [the project](https://github.com/rrcoder0167/chomp) with my friend Riddhiman(check out [his website](https://rrcoder0167.is-a.dev/)). While I wasn't going into this hackathon with zero experience, I made a lot of mistakes which I surely hope I won't do again. Here's the story of what happened.

...

It was a day before the hackathon and we're both planning our project. The decision is to make an app for diabetic people. Essentially you can scan a food nutrition label, get the details from it, and the app will tell you whether you should eat the food or not. When deciding what tech stack we were going to use, we decided to use the [t3 stack](https://create.t3.gg). There came our first mistake.

## Mistake 1: Code Linting, Type Checking, etc

The t3 stack is a great stack and I have used it for a few personal projects before. It's a nice typesafe stack which uses a really good set of tools built on top of next.js. The problems started happening with typescript. To be frank, typescript slowed down the development tenfold. In normal circumstances, it would be good since it makes sure that all of our code is safe and works how we expect it to. However, in a hackathon, the time is too short to experience the positives of typescript, meaning that rather than building out the features of our app, I was busy messing around with typescript just to get rid of red squiggly lines. I had similar issues with eslint.

I did eventually disable typescript and eslint from breaking our builds but by then it was too little, too late.

## Mistake 2: Too little planning

We didn't have the best idea of all the pages that were going to do. We attempted to make a plan of all the pages in the app and how they would link to each other, functions, etc but we frequently changed things around. In the middle of the hackathon, we decided to try to add an onboarding screen as well as a table of past foods eaten. Since there was a lot less planning for these pages, we ended up just having some hard coded values into the past foods page as well as a sort of janky onboarding screen. I think a better thing would have been to only focus on the scanning feature and pushing everything else to later.

Not to mention, that we didn't do anything related to project management such as setting up milestones, S.M.A.R.T goals, or deadlines. If we did this, we would be able to manage our time better.

## Mistake 3: Bad Presentation to Judges

To say we had a bad presentation is an understatement. Our code decided to break at the absolute best possible time and we were busy restarting the dev server while the judge was watching. Not to mention, we didn't keep things concise and didn't choose which topics to talk about. We just tried to talk about everything our app did within 3 minutes even if it didn't affect the functionality and just sounded cool. Instead, we should have kept our presentation to a few points and have made sure that our app was working beforehand.

We didn't do a powerpoint which probably would have been a good idea in retrospect. It would have taken 15 minutes to set up and look nice.

## Results?

We didn't win anything unfortunately. To be fair we were facing against people who brought apple vision pros, people who made literal billion dollar corporations, and people who had an iq of 200 at least. But it was more or less the experience. I think the hackathon experience is really great. Now that I know what mistakes I made this time, I will be better prepared for next time.
