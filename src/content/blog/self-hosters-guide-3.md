---
slug: self-hosters-guide-3
title: DRAFT The Self Hoster's Guide to the Galaxy - Part 3
description: Administrating your server
date: 2024-08-12
---

*This is the third part in my series on self hosting. [Check out Part 2](/blog/self-hosters-guide-2)!*

Running a server isn't just about remotely hosting your own services. It's also about remotely *managing* it. In the sense that you should be able to monitor the server's health, manage users, and services, and keep it secure. SSH gives you access to all the tools you need to manage your server, but it's not always the most user-friendly way to do it. That's where administration tools come in.

SSHing into your server just to edit the firewall rules every single time isn't fun. Administration tools are designed to make your life easier by providing a graphical interface to manage your server, for example, to manage your firewall rules, users, and services.

## Cockpit

One very common and noteworthy tool is [Cockpit](https://cockpit-project.org/). It's a web-based server management tool that allows you to manage your server from your browser. Some server distributions even come with cockpit pre-installed. It's a great tool to monitor your server's health, manage services, and users. It also has a terminal feature, so you can run commands on your server without having to SSH into it. It can replace your need for Cloudflare's SSH browser terminal.

RHEL ships Cockpit by default. By default, you can access it by visiting `https://your-server-ip:9090` in your browser. For installing it, I've attached a few resources below, based on your distribution.

- [Cockpit on RHEL](https://cockpit-project.org/running.html#rhel)
- [Cockpit on Fedora](https://cockpit-project.org/running.html#fedora)
- [Cockpit on openSUSE Leap](https://cockpit-project.org/running.html#tumbleweed)
- [Cockpit on Ubuntu](https://cockpit-project.org/running.html#ubuntu)
- [Cockpit on Arch Linux](https://cockpit-project.org/running.html#archlinux)

If you've installed it and the service is enabled, but it's not working, you might need to open the port in your firewall. You can do this by running the following command:

```
sudo firewall-cmd --zone=home --add-service=cockpit --permanent
sudo firewall-cmd --reload
```

![Cockpit Rhelyeah](/images/cockpit-rhelyeah.png)

![Cockpit Soosuh](/images/cockpit-soosuh.png)

Visit `https://your-server-ip:9090` in your browser to access Cockpit. Since it uses a self-signed certificate, you might get a warning for the first you visit it. Just proceed to the site. You should see a login screen, to which you can log in with your server's username and password.

![Cockpit Homepage](/images/cockpit-homepage.png)

Already, you can see the server's health, the services running, and the system logs. You can also manage users, storage, and networking. It's a very powerful tool that can make managing your server very straightforward. 

Cockpit also has a [variety of extensions](https://cockpit-project.org/applications) that you can install to add more functionality to it. For example, you can install [Cockpit Podman](https://github.com/cockpit-project/cockpit-podman) to manage your Podman containers.

To modify the firewall rules, you can go to the networking tab and click on the firewall section. You'll need to get administrative access. You can then add or remove rules as you see fit.

![Cockpit Firewall](/images/cockpit-firewall.png)

If you scroll down the sidebar you'll find the terminal.

![Cockpit Terminal](/images/cockpit-terminal.png)

It's a good idea to also expose Cockpit to the internet using Cloudflare Tunnel. Make sure to secure it with a strong password, and for extra security, use Cloudflare Access to restrict access to only authorized users.


