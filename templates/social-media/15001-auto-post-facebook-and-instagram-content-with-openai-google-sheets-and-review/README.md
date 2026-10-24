# 📱 Auto-post Facebook and Instagram content with OpenAI, Google Sheets and review

> ⚡ **1,512 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**Who is this for?**
This workflow is designed for social media managers, marketing agencies, and business owners who want to automate their Facebook and Instagram posting without losing quality control. It is perfect if you manage content in Google Sheets and want AI to write your captions, but you still need a human to review the final post before it goes live to your audience.

**What this workflow does**
This workflow acts as a complete social media auto-poster. It reads your product inventory from Google Sheets, finds items that haven't been promoted recently, and uses OpenAI to write a professional, engaging caption. Before publishing, the workflow pauses and sends you a simple web form. Once you click "Approve," it automatically publishes the post to Facebook and Instagram, then logs the successful post back in your Google Sheet.

**Key Features**
* **Smart Google Sheets Tracking:** Uses your spreadsheet as an inventory tracker to ensure you never over-promote the same product twice.
* **AI Copywriting:** Automatically drafts platform-optimized, emoji-free captions based on your product data.
* **Approval Gate:** Pauses the automation to let you manually review and approve the AI-generated content via an n8n web form.
* **Multi-Platform Auto-Posting:** Connects directly to the Facebook Graph API to publish to your Facebook Page and Instagram Business Account.

**How it works**
1. **Trigger:** Open the n8n form and choose to promote a specific product or a general agency pitch.
2. **Selection:** The workflow scans your Google Sheet and picks the item with the lowest "Times Posted" count.
3. **Generation:** OpenAI writes a tailored caption for the selected item.
4. **Review:** You receive an interactive prompt to review the text and image URL.
5. **Publishing:** Upon approval, it posts instantly to Meta (Facebook/Instagram) and increments the post count in your Google Sheet.

**Set up steps**
*Estimated time: 10 minutes*

1. **Google Sheets:** Connect your Google credential to the Sheets nodes and add your Spreadsheet ID.
2. **OpenAI Key:** Add your API key to the "AI Copywriter" node.
3. **Meta API:** Connect your Facebook Graph API credentials to the FB/IG nodes and ensure your Page ID is correct.
4. **Run:** Click "Test URL" on the Pixril Dispatcher form to trigger your first post!

**About the Creator**
Built by Pixril. We specialize in building advanced, production-ready AI workflows and automation templates for n8n.

Find more professional workflows in our shop: **https://pixril.etsy.com**

## 🔗 Nodes Used

Google Sheets, Facebook Graph API, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
