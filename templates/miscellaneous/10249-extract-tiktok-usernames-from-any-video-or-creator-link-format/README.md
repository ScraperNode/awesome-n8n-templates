# 🔧 Extract TikTok usernames from any video or creator link format

> ⚡ **271 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## What's the problem?

Imagine you want to **automate a task** where, based on a TikTok video link, **you must retrieve the username of the creator of that video**.

Many people may think that it's enough to get the "@" part of the link but that's not the case always. TikTok's iOS and Android app have **specific link formats** that are easier to share with others but, at the same time, it makes our task of retrieving creators way harder.

## Our solution:

**In solution to this problem, this simple workflow** makes a HTTP protocol request to retrieve the original link of the video hosted on _www.tiktok.com_ instead of the default mobile app's subdomain _vm.tiktok.com_. Then, we can in fact remove the attributes of the link and extract the handle correctly.

## Good things to know:

**Note that we extract the username** (and not the profile's nickname) **without the "@"**.

Once we have our username, we can simply access to their profile from then on using _"https://www.tiktok.com/@{{ $json.username }}"_.

## 🔗 Nodes Used

HTTP Request, Stop and Error, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
