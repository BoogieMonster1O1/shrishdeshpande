---
slug: self-hosters-guide-1
title: The Self Hoster's Guide to the Galaxy - Part 1
description: Building your server
date: 2024-08-10
---

*This is the first part in my series on self hosting. [Check out the preface](/blog/self-hosters-guide-preface)!*

The key to making a server actually *serve* is its ability to stay online, at all times. It doesn't take much to turn an old computer into a server, but there are two main factors that can limit its effectiveness - power and internet connectivity.

If there’s a power outage, your server will likely shut down, cutting off your access. And even if the server remains up and running, a problem with your internet connection will still leave you disconnected from it. That’s why it’s very important to carefully manage these two aspects. This will ensure your server is accessible at all times.

Now obviously, staying connected isn’t the *only* thing a server needs. The right operating system is crucial, as it can make your life much easier. Linux is often the go-to choice for many self-hosters. With the right Linux distribution, you can take full control of your server and customize your setup to fit your exact needs, without having to do excessive system administration. You could use Windows too, but I'll be covering Linux henceforth.

By the end of this post, you should be able to set up your own server and remotely connect to it.

## Power

The 10 watts of power your server needs is the difference between staying connected and going offline. Unfortunately, there’s not much you can do if there's a power outage. If you’re using a laptop, you might be able to rely on the battery to keep things running for a short while, but that’s only a temporary solution.

Unless you’re ready to invest in a UPS, power stability is largely out of your control. Just hope that there won't be any power outages. But one thing you can control is making sure your server automatically restarts after a power failure. If your server shuts down abruptly and power is restored, you can set it up to automatically switch back on.

Most laptops and computers come with this feature built in. This will ensure that your server will automatically reboot after a power failure, keeping downtime to a minimum. The exact method to enable it varies depending on the device, but it’s usually found in the firmware settings. On Apple computers, you can enable it with a simple terminal command:

```
sudo systemsetup -setrestartfreeze on
```

## Internet Connectivity

You have a lot more control when it comes to internet connectivity, unlike power. However, power still plays a crucial role here because your router needs power to stay connected to the internet. Without a router UPS, power outages will remain a concern, even if your server is running on a laptop battery.

One way to improve your server’s reliability is by bypassing Wi-Fi altogether. Wired connections are generally more stable and faster than Wi-Fi, so if your server has an Ethernet port, make sure you’re using it! In my case, I had Ethernet cables running through the walls of my home. I made my own Ethernet cables and connected my servers directly to the wall sockets.

Making your own Ethernet cables can be a smart move. RJ-45 connectors and Category-6 cables are quite cheap, and while you’ll need to invest in an Ethernet crimper, it can save you money in the long run if you’re setting up several connections. Plus, it gives you the flexibility to customize the length of the cable to fit your specific setup.

![Ethernet Crimper](/images/crimper.jpeg)

It's relatively easy to do, and you can become an expert at it in no time.

## Choosing the right Operating System

Loosely speaking, you can classify Linux distributions into two main categories: those with bleeding-edge updates and those with more stable, infrequent updates. On the bleeding-edge side, you have distributions like Arch Linux, Gentoo, and openSUSE Tumbleweed, which provide the latest software versions and features but may require more frequent updates and maintenance. 

On the more stable side, you'll find distributions such as Red Hat Enterprise Linux (RHEL), Ubuntu, and openSUSE Leap, which focus on providing a reliable and consistent experience with less frequent updates, albeit with generally older software versions. It's generally recommended that you opt for one of these when running a server. These prioritize reliability. They're ideal for servers.

But the best strategy is to just pick a distro that you're comfortable with. It's perfectly fine to run Arch Linux on your server. In fact, [nearly all of Arch Linux' server infrastructure runs Arch Linux](https://wiki.archlinux.org/title/Frequently_asked_questions#Is_Arch_designed_to_be_used_as_a_server?_A_desktop?_A_workstation?). If it works, it works. The specific distribution you're running is really just a minor detail.

If you're new to Linux, I'd recommend starting out with RHEL or Fedora Server. They're pretty easy to install and ship with a wide variety of graphical tools to aid you. Personally, I'm using RHEL 9 on one server and openSUSE Leap 15.6 on the other.

## Putting it  all together

Now that you’ve ensured stable power and internet connectivity and chosen the right operating system, it’s time to set it up. The location of your server is crucial. Choose a space that is well-ventilated, away from direct sunlight, and ideally has a stable temperature to prevent overheating. If its near a window, make sure it won't get wet from rain.

If you're not using a laptop, keep a monitor handy. Try to organize your power and Ethernet cables to prevent tangling and make troubleshooting easier. You can use cable ties or clips to keep everything neat, and even label your cables if you have multiple devices.

As for installing the operating system, you'll need a pen drive with the installer. Download the installation image for your preferred distribution and write it onto the pen drive (using a tool like dd or Rufus). Plug it in to your computer, boot into it, and follow the installation instructions. The installation process is generally the same for all distributions. I've linked a few resources below if you're interested in checking out the specifics.

- [Installing Red Hat Enterprise Linux](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/7/html/installation_guide/index)
- [Installing Fedora Server](https://docs.fedoraproject.org/en-US/fedora-server/installation/)
- [Installing openSUSE Leap / Tumbleweed](https://en.opensuse.org/Portal:Installation)
- [Installing Ubuntu](https://help.ubuntu.com/community/Installation)
- [Installing Arch Linux](https://wiki.archlinux.org/title/Installation_guide)
- [Installing Gentoo](https://wiki.gentoo.org/wiki/Handbook:AMD64)

Most installers allow you to skip installing a GUI. Since you won't be using the server directly, the GUI is pretty useless here. Needless to say, knowing your way around Linux and the terminal will go a long way here.

Lastly, make sure the installed operating system the default boot option in your server. I'll let you figure this one out because the instructions vary very widely based on the computer. You should do this so that when there's a power failure it'll automatically boot into what you installed and not any other operating system that may also be there. In the case of my Mac Mini, that would be macOS.

## Remote Access Using SSH

Ideally, you shouldn't need to interact with your server physically at all. Your server can simply sit in a corner, and all management can be done remotely! This is where SSH (Secure Shell) comes into play. It allows you to securely connect to your server from another computer, giving you command-line access without being physically present.

RHEL, Fedora Server, and openSUSE Leap, come with an SSH server installed and enabled by default. If you’re using Ubuntu for your server, check out [this guide on setting up SSH](https://ubuntu.com/server/docs/openssh-server). Once your server has an SSH server running, you should be able to connect to it. If its set up properly, you can run `ssh localhost`, it should not show that the connection is refused.

![No SSH server](/images/nossh.png)

![SSH server](/images/yesssh.png)

To connect to your server using SSH, you'll first need to find out its IP address. The easiest way to find this is by accessing your server directly and running `ip addr` in the terminal. Alternatively, you can scan your local IP address range using a tool like [Angry IP Scanner](https://angryip.org/) or `nmap`. Make sure both the server and your computer are on the same network!

Most macOS and Linux distributions come with an SSH client pre-installed. To connect to your server, run the following command in your terminal:

```
ssh <username>@<ip address>
```

Replace `<username>` with your server's username and `<ip address>` with the server's IP address. Once connected, you’ll have full command-line access to your server.

And that's about it! You should now have a server connected to your network, with remote access enabled. In the next article, I'll be breaking down some core networking concepts that are essential to running a server.
