---
slug: self-hosters-guide-2
title: DRAFT The Self Hoster's Guide to the Galaxy - Part 2
description: Networking and more
date: 2024-08-10
---

*This is the second part in my series on self hosting. [Check out Part 1](/blog/self-hosters-guide-1)!*

In this part I'll be covering how to connect your server to the Internet. Last part, I discussed how you could set up your server and remotely connect to it from your local network. But what if you want to access your server from outside your home network? That's where networking comes in.

Let me start with a brief history of the Internet. In its early days, we used classful networking, where each 'class' of IP addresses corresponded to a specific network, and each device was assigned its own unique IP address. Take MIT, for example. Until recently, they had [the entire 18.0.0.0/8 IP range to themselves](https://superuser.com/questions/1152954/why-does-mit-have-a-8-ipv4-block), totaling nearly 17 million IP addresses. Each of their computers was assigned its own IP address within that range.

But as the 1990s came around, the Internet was no longer limited to the US military and universities. Internet connectivity became a commodity, and it became clear that we will run out of available IP addresses. The original design of the Internet assumed a small number of networks with a large number of devices. In reality, the opposite was occurring: we had a large number of networks, each with a small number of devices.

To address this issue, classful addressing was abandoned in favor of dynamic, classless addressing. Networks began to receive only a single, dynamic, public IP address, while local IP addresses were assigned to individual devices through a technique known as Network Address Translation (NAT). The original IP address protocol, IPv4, only supported 3.7 billion IP addresses. That number wasn't nearly enough to cover everyone who needed one.

Now you might ask — alright, if I’ve got a single public IP address, how is that a problem? The truth is, you might not have a public IP address at all. As a self-hoster, you rely on ports being forwarded to your server so that outside traffic can reach it. If you’re trying to self-host on an organization's network, good luck with that — port forwarding is unlikely to happen.

Even if you’re self-hosting at home, you'll probably find yourself behind a Carrier-Grade NAT (CGNAT). So your neighbours are probably sharing the same public IP address as you. And CGNATs block incoming connections are blocked by default.

## IPv6, Your new friend

The lack of IPv4 addresses directly correlates to the pain you'll face when trying to self-host. The Internet is running out of IPv4 addresses, and it's only going to get worse.

But there's a solution to this problem: IPv6. It's designed to replace IPv4. It has a much larger address space, allowing for 340 undecillion unique IP addresses. That's 340 trillion trillion trillion addresses! Every device can have its own unique IPv6 address, and so you won't have to worry about NAT or port forwarding.

Your mobile network most definitely supports IPv6. But your home network might not. If you're lucky, your ISP might have already rolled out IPv6 support. Try contacting them to see if they can enable it for you! Here's how you can check if your network supports IPv6 - [test-ipv6.com](https://test-ipv6.com/). You could also run `ip addr` on your server to see if it has an IPv6 address. If you see an 'inet6' followed by a 'scope global' address, you're good to go!

![IPv6 address ip addr](/images/ipv6-address.png)

Sadly your organization's network probably won't support IPv6. IPv6 is sadly not as widely adopted as it should be. There is a way around that, though. I'll be covering that in a later section.

Now if you have IPv6, you already have global access to your server. You can access it from anywhere in the world - well at least in theory. Try it out! Run `ssh [your IPv6 address]` from a device on a different network. Maybe your laptop on your phone's hotspot. If it works, congratulations! If it doesn't, you've got some work to do ;)

## Firewall, The gatekeeper

If you tried accessing your server from a different network, it probably didn't work. If it did, the firewall already has rules to allow that connection. But if it didn't, you'll need to set up some rules to allow incoming connections.

Firewalls are crucial for securing your server. They act as a barrier between your server and the outside world, filtering out unwanted traffic. They can block malicious traffic and prevent unauthorized access. After all, you might be exposing your entire home network to the Internet. You don't want just anyone to be able to access your server.

`firewalld` is the default firewall on most Linux distributions. It's a front-end for `iptables`, which is the actual underlying firewall tool. You can use `firewall-cmd` to manage your firewall. Here's how you can allow incoming SSH connections:

```
sudo firewall-cmd --add-service=ssh --zone=public --permanent
sudo firewall-cmd --reload
```

This command adds the SSH service to the public zone, which is the default zone. The `--permanent` flag makes the rule persistent across reboots. The `--reload` command reloads the firewall configuration, applying the new rule.

Here's the kicker, **don't expose services to the Internet unless you absolutely need to**. If you're running a web server, you'll need to expose port 80 and 443. But if you're running a personal Jellyfin instance, you don't need to expose it to the Internet. You can access it from your local network, through a VPN (which I'll be covering in Part 4), or through a secure tunnel.

And even though you just did it, **don't expose SSH to the Internet**. Its a massive security risk. You're just asking to be hacked. Its time to disable that. You should still be able to access it from your local network. Here's how to do that:

```
sudo firewall-cmd --add-service=ssh --zone=home
sudo firewall-cmd --add-source=<your local network range> --zone=home
sudo firewall-cmd --remove-service=ssh --zone=public
sudo firewall-cmd --runtime-to-permanent
```

Replace `<your local network range>` with your local network range. It's usually something like `192.168.1.0/24`, but it can vary. The above commands add the SSH service to the home zone, which is a custom zone. It then adds your local network range to the home zone. It then removes the SSH service from the public zone.

If you ever accidentally lock yourself out of remote access to your server, you can always access it physically, and change the firewall rules.

If you're a developer, try writing a simple web server and run it on port 80. Now try accessing it from a different network. It probably didn't work. Add the `http` service to the public or home zone and try again. It should work now!

## DNS

DNS is the system that translates domain names to IP addresses. You can access your server using its IP address, but that's not very user-friendly. You can set up a domain name for your server, so you can access it using a name instead of an IP address.

If you have a domain, add an AAAA record to your domain's DNS settings pointing to your server's IPv6 address. But you probably don't have IPv6. And even if you do, its probably dynamic. There's tools that can help you with that, but for now let's see how we can entirely bypass the need for a public IP address using Cloudflare.

## So what's Cloudflare?

Remember how I said you could still self-host, even if you don't have IPv6? That's where Cloudflare comes in. Cloudflare is a company that offers a variety of services, including DDoS protection, a content delivery network, and a tunnel. It's the tunnel that we're interested in.

Cloudflare Tunnel allows you to expose your local server to the Internet without needing a public IP address. It works by creating a secure connection between your server and Cloudflare's network. Cloudflare then routes traffic from the Internet to your server through this connection.

With Cloudflare Tunnel, you won't have to deal with IPv6, DNS, firewalls, or port forwarding. It's a great way to self-host without the hassle of networking. The catch is that you need to own a domain name. I'll assume you already have one. And unfortunately, Cloudflare Tunnel only works with HTTP, HTTPS and SSH traffic. 

## Exposing SSH with Cloudflare Tunnel

Let's get back to SSH. You disabled it earlier, remember? You can re-enable it, but now you'll be using Cloudflare Tunnel to access it. First, [create a remotely managed tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-remote-tunnel/) on Cloudflare. A remotely managed tunnel will allow you to expose your server to the Internet without needing to physically access it.

In the tunnel, add SSH as a public hostname. This will allow you to access your server using `ssh <subdomain>.<yourdomain>.com`. [This guide](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/use-cases/ssh/#connect-to-ssh-server-with-cloudflared-access) perfectly sums up how to do it, including how to access your server using Cloudflare Tunnel. Do note that you'll need to install `cloudflared` on the computer you're using to access your server.

Cloudflare Tunnel also gives you Cloudflare Access, which allows you to restrict access to your server. You can require users to authenticate with their email before accessing your server. This is a great way to secure your server, especially if you're exposing it to the Internet.

Cloudflare Access also gives you SSH browser rendering - so you can access SSH from your browser. That requires a tad bit more setup. I won't be covering that here, but you can check out [this guide](https://developers.cloudflare.com/cloudflare-one/applications/non-http/#enable-browser-rendering) for using SSH straight from your browser.

You can also expose your web server using Cloudflare Tunnel. Try it out with that HTTP server you wrote earlier. It should work!

## What else?
One thing I found useful is setting a static local IP address for your server. You can set a DHCP reservation on your router to achieve this. This way, your server will always have the same IP address on your local network. In my case, I've set my two servers to always have 10.0.0.2 and 10.0.0.3 as their local IP addresses.

Knowing networking fundamentals goes a long way. You can troubleshoot issues, set up complex networks, and secure your server. I hope this guide has helped you understand how to properly expose your server to the Internet. In the next part, I'll be covering how to administer your server more effectively. 
