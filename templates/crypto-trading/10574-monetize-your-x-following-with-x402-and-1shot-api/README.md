# 📈 Monetize your X following with x402 and 1Shot API

> ⚡ **185 views** · 📈 [Crypto Trading & Stock Market](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
>
> <a href="https://scrapernode.com/twitter"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![image.png](fileId:3484)

# Get Paid in Stablecoins for Reposting from your X Account

The [x402](https://x402.org) payment standard is growing in popularity and has enabled new monetization opportunities for internet resources. This workflow lets you automate the monetization of your followers on X by receiving payment in the form of stablecoins in return for reposting content from your X account via the X API node. 

Selling impressions can be good business, its whats powered the largest internet companies in the world so far. This workflow gives you a starting point to sell impressions from your social media following you worked hard to build over time.

## Setup

### 1Shot API
1. Create a free [1Shot API](https://1shotapi.com) account, provision a wallet on your target network and fund it will some gas tokens.
2. Import into your 1Shot API account the stablecoin you want to get paid in. Use the 1Shot Prompts tab to find x402 compatible tokens. 
3. Configure the x402 Gateway node in the workflow to use the stablecoin you imported from step 2. 
4. Configure the refund nodes to point to the `transfer` function of the stablecoin you selected.

### X API 
1. Create a [X Developer](https://docs.x.com/x-api/introduction) account and generate an API Key and Secret.
2. Use the key and secret to authenticate the X node in the workflow

### Telegram
1. Create a Telegram Bot and use its API key to authenticate the Telegram nodes in the workflow. 
2. Get the Chat ID with your bot and put input it into the telegram nodes so that you can receive moderation requests.

## 🔗 Nodes Used

Telegram, X (Formerly Twitter)

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
