---
title: "Building my first Rust Project"
description: "Talking about my first rust project and how I made it."
pubDate: "Jan 25 2025"
updatedDate: "Feb 5 2025"
categories: ["rust", "snake", "fediverse", "mastodon", "devlog"]
---

Project Link: [github.com/errorcodezero/mastodon-plays-snake-rs](https://github.com/errorcodezero/mastodon-plays-snake-rs)

Bot Link: [@snake@mastodon.world](https://mastodon.world/@snake)

I've wanted to learn rust for a very long time. I had been attracted by features such as it being a good low level language where I wouldn't have to worry about manual memory management or too much about memory safety. But I had put off making a project for a while since I never thought I had the skills to make it. A few days ago as I was progressing through [the great rust book](https://doc.rust-lang.org/book/) I figured to actually try and put my knowledge to the test. I'm not really the kind of person who can learn programming just through seeing it. I prefer to play around with the concepts and to try to use it in my own code to get a better idea of it.

I was considering what to build with rust when I heard that some great first rust applications are CLI apps. I didn't really have an idea of what CLI to build so I ended up scrapping that. That's when I thought about rebuilding one of my older projects to work with rust. This led me to consider two different possibilities:

- [Lazer](https://github.com/errorcodezero/lazer-new) - An old discord bot which I had created with javascript
- [Mastodon Plays Snake](https://github.com/errorcodezero/mastodon-plays-snake) - A mastodon bot which allowed users to collaborate on a game of snake

I decided to go with the snake bot as it is a lot simpler and I enjoyed making it a lot more.

# Working with rust

From school, I have good experience with object oriented programming and I grew to like classes, objects, constructors, etc. I think rust takes a good approach to this. They have their own sort of spin on top of object oriented programming which initially was a bit confusing but made sense as I went on. For one, they aren't called classes. They are structs which are similar to interfaces from typescript. However, you can implement methods for them just like a class. Actually in rust, you can implement methods on what feels like anything(eg: Enums).

So I began by creating a struct called `game`.

```rs
pub struct Game {
    grid: [[Block; 5]; 5],
    // Snake vector is reversed where the head is the last element and the rest of the elements
    // comprise of the body.
    snake: Vec<(usize, usize)>,
    food: (usize, usize),
    score: u8,
    direction: Option<Direction>,
}
```

First, grid was a 2d array of the game. It would use the `Block` enum for each element in order to store it's current state.

```rs
#[derive(Copy, Clone, PartialEq, Eq)]
pub enum Block {
    SnakeBody,
    SnakeHead,
    Empty,
    Food,
}
```

Enums in rust are really powerful and way better compared to typescript enums. If I had a variable which is an enum, I can use a match statement in order to conditionally do something based on it's state.

```rs
impl Game {
    // ...
    pub fn to_string(&self) -> String {
        let mut string = String::from("");
        for row in &self.grid {
            for block in row {
                match block {
                    Block::SnakeHead => string += "🟢",
                    Block::SnakeBody => string += "🟩",
                    Block::Empty => string += "⬛",
                    Block::Food => string += "🍎",
                }
            }
            string += "\n";
        }
        string
    }
    // ...
}
```

For example, in my `to_string()` function, I use a match statement in order to pattern match the different values of the `block` variable to the different states of the `Block` enum. The best part about match statements is that they give you an error if you forget a state of the enum so that all states can be handled.

The implementation of this bot I created here is functionally identical to the previous implementation I made in typescript. To see that go to the [previous article](/blog/building-snake-for-mastodon).

# Crates I Used

My tech stack decisions for this project were pretty simple. First, I needed a mastodon client for rust. Looking on the [mastodon api guide](https://docs.joinmastodon.org/client/libraries/#rust), there appeared to be two listed:

- [megalodon-rs](https://docs.rs/megalodon/latest/megalodon/)
- [mastodon-async](https://docs.rs/mastodon-async/latest/mastodon_async/)

Megalodon appeared to be the better choice since it seemed to still be actively in development while its counterpart appeared to be abandoned.

Much of the project relied on random generation so I used the [rand](https://docs.rs/rand/latest/rand/). Not much to say here other than its a great crate.

Much of megalodon's functionality relied on async functions so I used [tokio](https://docs.rs/tokio/latest/tokio/) in order to create an async main function. Tokio is a very useful crate with so many different utilities but I only really needed it for the async main function as well as their async sleep.

# Conclusion

I really enjoyed building this project and I certainly am going to work on continually improving it. My first experience was rust was a pretty great one and I highly would recommend this language to other programmers. Perhaps not as a first language as it can be difficult for new-comers. This was my first serious foray into a low level programming language and I'm glad I chose it for this project. I will be sure to use and learn more about it in the future!
