# 🔧 Rss feed for ARD Audiothek podcasts

> ⚡ **1,773 views** · 🔧 [Miscellaneous](../)

## Description

This workflow builds a valid RSS feed (which is an XML feed under the hood) for ARD Audiothek podcasts. This allows you to subscribe to such podcasts using your favourite podcatcher without using the ARD Audiothek app.

The example builds a feed for Kalk & Welk, but the workflow can be easily adjusted by providing another podcast URL on the *Get overview page* HTTP Request node.

To subscribe to the feed, active your n8n workflow and then use the **Production URL** from the intitial Feed Webhook node in your podcatcher.

I've tested the resulting feed using [Pocket Casts](https://pocketcasts.com/)...
![grafik.png](fileId:677)

...and [Miniflux](https://miniflux.app/):
![grafik.png](fileId:678)

When using Miniflux, you can add your feed via [this page](https://pocketcasts.com/submit/) to your account. Make sure you select **Private** when doing so to avoid sharing your n8n instance with the world.

The resulting feed passes the [W3C Feed Validation Service](https://validator.w3.org/feed/):

![grafik.png](fileId:675)

The workflow can also be used as a foundation to free other podcasts from propriertary big media platforms, though not all of them will be as simple to deal with as the ARD Audiothek.

## 🔗 Nodes Used

Function, HTTP Request, Start, Webhook, HTML Extract

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
