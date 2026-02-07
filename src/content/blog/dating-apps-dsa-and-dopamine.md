---
title: "Dating Apps, Data Structures, and Dopamine"
description: "A tale of app building."
pubDate: "Feb 6 2026"
updatedDate: "Feb 6 2026"
categories: ["storytelling"]
draft: true
---

This story is an attempt at creative writing and by no means reality.
The views and actions reflected in this piece do not represent my own.

```txt
We are sophisticated creatures indeed.
Moving across the world upon our noble steeds.
But even if we've left the wild behind,
traces still lurk in every part of our being.
```

> "You are probably going to be a very successful computer person.
> But you're going to go through life thinking that girls
> don't like you because you're a nerd. And I want you to know, from
> the bottom of my heart, that that won't be true. It'll be because
> you're an a\*\*hole."
>
> \
> —Erica Albright from _The Social Network_ (2010)

That quote has always been one that's ripped through my flesh every time
I hear it. For while I'm not the intended recipient, I've felt the burn of it
nonetheless. No movie will ever have more of a lasting impact on my psyche than
_The Social Network_ and I strongly believe it's one of the greatest
computer science movies of all time. It's based on the true story of
the founding of Facebook and is a tale of stolen ideas,
Silicon Valley culture, and the betrayal of a co-founder who
couldn't keep up with it all. The iconic tagline bears a permanent engraving
in my mind.

> "You don't get 500 million friends without making a few enemies"

It's very clear that the movie was intended to paint Mark Zuckerberg
as a villain, who stole, lied, and cheated to get to precisely where he was.
Clearly, nobody should look up to this story as inspiring or something they
should see themselves in. If anything, that would hint at them having problems
—and we wouldn't want that would we?

But I was obsessed with his character. It felt almost like the view
of Satan which [Romantics](https://en.wikipedia.org/wiki/Romanticism)
interpret from John Milton's _Paradise Lost_. Milton's
Satan was unlike any Satan which came before him as he was given an almost sympathetic
cause. He seemed less like the embodiment of evil and misfortune and more like a
rebel who wished to have autonomy rather than be subservient to the will of God.
The famous quote from _Paradise Lost_ being:

> "Better to reign in Hell than to serve in Heaven"

And it was this almost poetic cause which I saw in Zuckerberg.
Clearly, he's the villain of the story, but who wouldn't do the same in his position?
After all, Saverin clearly couldn't keep up with the company; he just wasn't fast
enough for Zuckerberg's liking. Saverin wanted to monetize when obviously
growth still needed to be done. This was Silicon Valley after all, not your
father's retirement fund. If you can't gamble a bit, you never had a chance
of success in this world. Don't hate the player, hate the game.

## Good Evening, Mr. Rockefeller

```txt
For where the actions of men have fallen short of grace,
there lurks few consequences for those who run the race.
It takes us all to hold those to atone.
But at least history shall keep their actions in stone.
```

<!-- > "The ability to deal with people is as purchasable a commodity as sugar or coffee. -->
<!-- > And I will pay more for that ability than for any other under the sun." -->
<!-- > -->
<!-- > \ -->
<!-- > —John D. Rockefeller (1839-1937) -->

Watching _The Social Network_ made me embody the true mentality of a capitalist,
one Zuckerberg followed just as Rockefeller did before him. You have
to do anything to get what you want—whether that be the [railroad rebates
of Standard Oil](https://en.wikipedia.org/wiki/Standard_Oil) or the
[buy-or-bury tactics of Meta](https://www.ftc.gov/news-events/news/press-releases/2021/08/ftc-alleges-facebook-resorted-illegal-buy-or-bury-scheme-crush-competition-after-string-failed).
Do you really want something if you're not willing to do anything for it?
I gave the robber baron mindset a warm embrace and began to ponder what my
enterprise might be. After all, I was just a high school freshman who
hardly had an idea of how the world worked.

Then, it hit me. At launch, Facebook was exclusively for Harvard students—a decision
gave them some initial credibility while also allowing for a smaller area to test
ideas. Harvard certainly boasted a large student population but it's definitely
smaller than the whole world. It made perfect sense to set my sights on a little
target before expanding to everyone else.

But what would my idea be? I thought back to earlier in the movie where Zuckerberg
built a "hot or not" style app called [Facemash](https://en.wikipedia.org/wiki/History_of_Facebook).
It would show two Harvard women on screen and allow people to pick one over the
other in order to rank them. The app went viral on the campus extremely quickly
before it was taken down and he was summoned before the administrative board.

I still remember hearing his witty answers to all their questions—a bit of hubris
that like John Milton's Satan, made him all the more sympathetic. His near-defiance
of the admin board almost led to his expulsion, yet he walked away with only six
months of academic probation.

While in no way did I support the idea behind Facemash, I couldn't deny that its
execution was rather brilliant. The app went viral within hours of its launch—so
much so that it crashed the college networks ([at least in the movie](https://archive.blogs.harvard.edu/dlarochelle/2010/11/16/how-the-social-network-gets-it-wrong-facemash-and-the-dangerous-propagation-of-the-myth-of-network-scarcity/)).
Not to mention, an app which relied on the human feelings of attraction was
interesting to me. What if I could make something based off a similar principle?
The sacred nature of attraction—something so biologically innate and intimate—made
it all the more fascinating to me.

I finally had an idea and my fate was set in stone.

## Romanticizing Romance

```txt
Toiling labor finally brought alive:
A product of years taken from his life.
Yet forsaken boundaries leading to strife,
would later be his own demise.
```

<!-- > "What can stop the determined heart and resolved will of man?" -->
<!-- > -->
<!-- > \ -->
<!-- > —Robert Walton (_Frankenstein_ (1818) by Mary Shelley (1797-1851)) -->

The irony of building a dating app to commercialize romance is that it seems like
the very thing that Romantics would be against. After all, Romantic literature—say
_Frankenstein_ by Mary Shelley—typically portrayed the negatives of human innovation.

In _Frankenstein_, we hear the story of Victor Frankenstein: a scientist who created
a monster fashioned from the remains of corpses and had to deal with the consequences.
And yes, Frankenstein is the name of the scientist rather than the monster as Halloween
propaganda would like you to believe.

I felt much like Victor when I began work on the project; however, I
remained blissfully unaware that my creation would begin to mirror his
in far more ways than in its development.

But never mind that, for I had an idea to build. Before I could get to building,
however, I needed to refine my idea down to exactly what features I wished to develop.

The primary idea was simple: the app would operate like Tinder in which you
could swipe left or right based on your preference for a given profile. If you
accepted a profile, that person would then be available to chat with—thereafter,
the progression would be entirely up to you. A very basic take on the concept
of a dating app.

Beyond just the core functionality however, I also needed to address the
administrative aspects—such as how I would prevent people who aren't students
in my school from using the service. Zuckerberg initially made Facebook
exclusive by requiring [harvard.edu](https://harvard.edu) email addresses for users.
I felt a bit doubtful however that my school would have been quite so gracious
as to allow their students to sign up for a dating app using their school email.

So rather, I decided to think a bit outside the box. What if I could still make
use of the student emails? What if the students emailed me? With that line of thinking,
I came up with my brilliant scheme to verify students without the school catching
me: On sign up, I would give a student a special set of code words for verification
(an example might be "`apple banana coffee monkey zoo`"). Now all they would need
to do is simply email this phrase from their school email to my school email address
to which I set up a mail client to act as a silent sentinel, constantly scanning
my inbox for these incoming phrases. Upon receiving the correct phrase, it would
finally grant entry on the website.

With the verification problem solved, I laid the foundation of what would be necessary
to proceed. Now, I had to work on implementing the remaining features.

I was able to quickly implement a bare-bones prototype—one which I will spare you
the details of. At this point in time, I knew I had progressed far as I had
completed nearly every necessary step for the project. Crucially however, I ignored
the most vital and elusive component of my enterprise: the algorithm—the brain
for my creature.

## Algorithmic Adventure

```txt
The final touch needed inside,
For this great beast to come alive.
Yet should I take this final stride?
Or stop it now should havoc arise.
```

By this point, I had been consistently working the project for about two
weeks—a lifetime compared to the smaller ventures I whipped up over weekends. I
was about through with all the little housekeeping items needed for the project
and finally ready to take on the biggest challenge of the development. I began
to grow obsessed with the project and found that refining every aspect of it
started to eat into much of my time. I often daydreamed about being the leader
of organized crime—the dating don if you will.

I vividly remember one scene I played out in my head. I was sitting in class
as any good mob boss would, smoking an expensive cuban cigar the thickness of
my finger. This magical cigar and its smoke were completely invisible to the class
as its existence was purely for projecting gravitas. On my wrist was a handcrafted
watch beautifully decorated in white gold and diamonds—a piece worth over double
your father's retirement fund.

As I puffed on my cigar—paying little attention to the math lesson that was being
taught—the school public announcement system crackled with a request for my presence
in the administrator's office. I sighed and ashed the remains of my cigar onto
the desk, blackening the wood. I got up from my seat and walked to the office as
calm and collected as could be.
