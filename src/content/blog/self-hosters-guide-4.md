---
slug: self-hosters-guide-4
title: DRAFT The Self Hoster's Guide to the Galaxy - Part 4
description: Best Security Practices
date: 2024-09-22
---

*This is the fourth part in my series on self hosting. [Check out Part 3](/blog/self-hosters-guide-3)!*

Running a server at home is quite risky. You're exposing your entire network to the internet, and if you're not careful, you might end up leaking sensitive information. In this post, I'll be talking about some security practices that you should be following to keep your server and network secure.

## SSH Security

SSH is the most common way to access your server remotely. It's a secure protocol, but it's also a common target for attackers. You're probably using password authentication to log in, but that's not the most secure way to do it. Passwords can be brute-forced, and if you're using a weak password, you're at risk.

Key-based authentication solves this problem. Instead of using a password, you use a pair of keys: a public key and a private key. The public key is stored on the server, and the private key is stored on your computer. When you try to log in, the server sends a challenge to your computer, which you sign with your private key. If the server can verify the signature using the public key, you're granted access.

### Adding a new SSH key

To add a new SSH key, you need to generate a new key pair. You can do this by running the following command on your computer:

```bash
ssh-keygen
```

This will generate a new key pair in `~/.ssh/id_rsa` and `~/.ssh/id_rsa.pub`. The public key is what you need to add to your server. You can do this by running the following command:

```bash
ssh-copy-id <user>@<server_ip>
```

You can also add the key manually by copying the contents of `~/.ssh/id_rsa.pub` (on your local machine) to `~/.ssh/authorized_keys` (on the server).

Cockpit allows adding authorized keys through the web interface too. You can go to the user section and add the public key there.

![Cockpit SSH user](/images/cockpit-ssh-user.png)

Click on 'Add Key' and paste the contents of `~/.ssh/id_rsa.pub` in the text box. I currently have two keys added to my user.

### Disabling password authentication

Once you've added your key, you can disable password authentication. This will prevent anyone from logging in with a password, so make sure you've added your key first. You can do this by editing the SSH configuration file:

```bash
sudo nano /etc/ssh/sshd_config
```

Find the line that says `PasswordAuthentication yes` and change it to `PasswordAuthentication no`. Save the file and restart the SSH service:

```bash
sudo systemctl restart sshd
```

## Firewall

Assuming you've read the previous post, you should have firewalld set up. It's important to keep your firewall rules up to date. You should only allow traffic that you need, and block everything else. This is called the principle of least privilege.

I'll be specifically talking about firewalld here, but the same principles apply to other firewalls too.
