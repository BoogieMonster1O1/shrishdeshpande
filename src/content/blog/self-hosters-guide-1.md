---
slug: self-hosters-guide-1
title: DRAFT The Self Hoster's Guide to the Galaxy - Part 1
description: Building your server
date: 2024-08-10
---

*This is the first part in my series on self hosting. [Check out the preface](/blog/self-hosters-guide-preface)!*

The key to making a server actually *serve* is its ability to stay online, at all times. It doesn't take much to turn an old computer into a server, but there are two main factors that can limit its effectiveness - power and internet connectivity.

If there’s a power outage, your server will likely shut down, cutting off your access. And even if the server remains up and running, a problem with your internet connection will still leave you disconnected from it. That’s why it’s very important to carefully manage these two aspects. This will ensure your server is accessible at all times.

Obviously, staying connected isn’t the *only* thing a server needs. The right operating system is crucial, as it can make your life much easier. Linux is often the go-to choice for many self-hosters. With the right Linux distribution, you can take full control of your server and customize your setup to fit your exact needs, without having to do excessive system administration. You could use Windows too, but I'll be covering Linux henceforth.

## Power

The 10 watts of power your server needs is the difference between staying connected and going offline. Unfortunately, there’s not much you can do if the power goes out. If you’re using a laptop, you might be able to rely on the battery to keep things running for a short while, but that’s only a temporary solution.

Unless you’re ready to invest in a UPS, power stability is largely out of your control. But one thing you can control is making sure your server automatically restarts after a power failure. If your server shuts down abruptly and power is restored, you can set it up to automatically switch back on.

Most laptops and computers come with this feature built in. This will ensure that your server will automatically reboot after a power failure, keeping downtime to a minimum. The exact method to enable it varies depending on the device, but it’s usually found in the firmware settings. On Apple computers, you can enable it with a simple terminal command:

```
sudo systemsetup -setrestartfreeze on
```

## Internet Connectivity

Unlike power, you have a lot more control when it comes to internet connectivity. However, power still plays a crucial role here because your router needs power to stay connected to the internet. Without a router UPS, power outages will remain a concern, even if your server is running on a laptop battery.

One way to improve your server’s reliability is by bypassing Wi-Fi altogether. Wired connections are generally more stable and faster than Wi-Fi, so if your server has an Ethernet port, make sure you’re using it! In my case, I had Ethernet cables running through the walls of my home. I made my own Ethernet cables and connected my servers directly to the wall sockets.

Making your own Ethernet cables can be a smart move. RJ-45 connectors and Category-6 cables are quite cheap, and while you’ll need to invest in an Ethernet crimper, it can save you money in the long run if you’re setting up several connections. Plus, it gives you the flexibility to customize the length of the cable to fit your specific setup.

![Ethernet Crimper](/images/crimper.jpeg)

## Choosing the right Operating System

Loosely speaking, you can classify Linux distributions into two main categories: those with bleeding-edge updates and those with more stable, infrequent updates. On the bleeding-edge side, you have distributions like Arch Linux, Gentoo, and openSUSE Tumbleweed, which provide the latest software versions and features but may require more frequent updates and maintenance. 

On the more stable side, you'll find distributions such as Red Hat Enterprise Linux (RHEL), Ubuntu, and openSUSE Leap, which focus on providing a reliable and consistent experience with less frequent updates, albeit with generally older software versions. It's generally recommended that you opt for one of these when running a server. These prioritize reliability. They're ideal for server environments.

But the best strategy is to just pick a distro that you're comfortable with. It's perfectly fine to run Arch Linux on your server. If it works, it works. If you think about it, the specific distribution you're running is really just a minor detail.

If you're new to Linux, I'd recommend starting out with RHEL or Fedora Server. They're pretty easy to install and ship with a wide variety of graphical tools to aid you.
