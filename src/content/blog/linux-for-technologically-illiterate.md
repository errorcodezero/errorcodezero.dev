---
title: "Linux for the Technologically Illiterate"
description: "How I set up a Linux laptop for someone who's technologically illiterate"
pubDate: "May 10 2024"
---

I recently had to set up a laptop for someone who didn't know how to use technology. The only tech devices they were remotely familiar with were an ipad and a chromebook. I had an old laptop laying around and I wanted to give it them and have it set up and I had a few options I could do:

- MacOS - The laptop I had was an [old macbook](/blog/new-laptop) and this would have been my easiest option. The issue is that it no longer supports the latest mac version and is pretty sluggish overall with it installed.
- Windows - I could have had macos in a little partition and have run bootcamp to get windows. This would have been just as slow if not slower and the last thing I want is their first real computer to be windows.
- ChromeOS Flex - This is basically just cros but you can install it on other systems. This could have worked but I don't want the first taste of a real computer to be using cros.
- Linux? - I wasn't sure about this idea since I didn't know how well they would fare on linux. The application support would be less but it wouldn't be an issue since all they really need is a web browser and maybe a document suite.

# Searching for Linux Distros!

Now that I decided on using linux for this, I wanted to figure out what distro I should use. Immediately, I had a few ideas:

- Fedora - This is what I've been using on my laptop and it has been working great. It has the advantage of being pretty new meaning that software will be slightly more in date and it's still very stable.
- Debian - I haven't used this for a desktop but I have used this on my servers before and it is resilient. I have never been able to break debian before since it's insanely stable. It is a bit more out of date but I don't think the software on it is archaic by any means. It also will probably mean I won't have to touch the laptop much after I set it up which is nice.
- Linux Mint - Mint is an interesting distro for me. It uses ubuntu as a base and its own repo on top of that which adds additional software. I've not used mint very much other than just trying out the live iso but it seemed to be pretty nice. It was also extremely lightweight(especially the xfce version) which was good since I wanted the computer to be somewhat snappy. I considered trying out Linux Mint Debian Edition since it uses debian as a base instead of ubuntu which would have been ideal. Unfortunately, LMDE doesn't have an xfce version which would have meant I would need to manually install xfce and remove the default cinnamon apps. I felt like this would sacrifice some of the stability of LMDE so I didn't do this option.

# Driver Issues...

Right away, I experienced driver issues. I've tried to use the old laptop with linux and it has a lot of cons. The biggest one I can think of is the broadcom chip in the laptop. You need to installed this broadcom-wl driver which I've always had to fight with. I tried Fedora first and it installed fine. When I tried to install the driver however, thats when I ran into problems. The driver didn't let me connect to wifi. I couldn't even see the networks? I was confused and after trying a few things to troubleshoot, I eventually just gave up and tried Debian.

Debian worked a lot better but then I ran into a small issue. The software was a little too old. What would have been fine for a server is a lot harder to justify for a user. I figured that something a little bit newer would be a good idea so I dropped debian.

Finally, I gave linux mint a shot. The installer went off without a hitch and after the install, I used the really nice built-in driver management tool to install the broadcom-wl driver. Somehow, it worked flawlessly. I restarted the computer and I was able to see all the wifi networks. I managed to connect successfully and the system worked! The xfce version of mint is themed really nicely and I it's pretty easy for anyone to use.

# Next steps

After mint was installed, I created them an account on the system and installed chromium(they're more familiar with that than firefox). In addition, I also pinned a few useful apps to the bottom panel which I think they might find useful. I'm really glad how this computer turned out to be honest. I've given them the computer and so far its been a few days and no issues have happened so far. They've used it for many everyday computer tasks and its holding up.

I think that my next goals are gonna be to teach them about the computer. I'm gonna show how to do some common tasks on it(eg: setting up an email client), how to update it, and how to remain safe on the internet. I'm glad that my old laptop is being put to good use and hope that this article inspired you to try to help a non tech-savvy person. I will probably post an update to this blog in a month and I'll see how well mint is going to hold up.
