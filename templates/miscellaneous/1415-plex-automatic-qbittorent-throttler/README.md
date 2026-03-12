# 🔧 Plex automatic QBittorent throttler

> ⚡ **1,645 views** · 🔧 [Miscellaneous](../)

## Description

Have you ever wanted to throttle Plex when connecting remotely to your server? Well here is the script for you! The instructions to deploy are below:

You will need: 
- A plex server with Plex Pass (for webhooks)
- n8n running locally (either in docker on via the desktop app)
- Qbittorent with WebUI enabled

1. Begin by installing n8n by visiting n8n.io. You can install the desktop version or the docker version, whichever works best for your but I'm doing this on my desktop version of n8n. 
2. Copy the code from this page into your n8n install canvas. You should see the script appear before your eyes. ![workflow-screenshot](fileId:596)
3. From there, you Double click on the Webhook node at the beginning of the script. Copy both the Test and Production URLs that appear there. ![Screen Shot 20220128 at 9.13.13 PM.png](fileId:595)
4. Now make your way to Plex and visit your settings. On the left, you should see the webhooks option if you have Plex Pass. ![Screen Shot 20220128 at 9.15.20 PM.png](fileId:597)This will setup your triggers.
5. Next visit your qBitTorrent instance and enable WebUI. Notate your Username, Password, and Port. You will also need to know the IP of the machine that qbittorent is running on. If you have an iPhone you can connect to the same wireless network as your computer and use the Fing app to scan the network for the IP.
6. Open up the script and edit the Global Variables to reflect the values you copied. ![Screen Shot 20220128 at 9.20.14 PM.png](fileId:598)
7. Hit save at the top right, and then activate the script. 
8. Enjoy!!

## 🔗 Nodes Used

HTTP Request, Start, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
