# 📱 Generate social media captions for product images with Gemini AI and Telegram approval

> ⚡ **350 views** · 📱 [Social Media & Email Marketing](../)

## Description

This n8n template demonstrates a complete AI-driven content pipeline for social media. It automatically generates captions and hashtags for new product images, collects human approval via Telegram, and publishes approved content to Twitter. It’s ideal for marketers, e-commerce businesses, and creators who want to speed up content creation while keeping human oversight.

## How it works

**Trigger**: The workflow starts when a new file is added to a specific Google Drive folder.

**File Analysis:** The image is processed to extract product information.

**AI Captioning:** Gemini generates a caption and five relevant hashtags based on the product.

**Telegram Approval:** The image, caption, and hashtags are sent to the user for approval.

✅ If approved → The content is posted to Twitter and a confirmation is sent back via Telegram.

🔄 If regenerate → Gemini creates a new caption and hashtags, and the approval loop repeats.

❌ If discard → A message is sent on Telegram and the workflow ends.

## Requirements

- Google Drive account

- Gemini API credentials for captioning and hashtags

- Telegram bot for approvals

- Twitter Developer Account with API credentials

## Customising this workflow

- Swap Google Drive with Dropbox, Notion, or Airtable as the content source.

- Extend publishing to LinkedIn, Instagram, or multiple platforms.

- Add multi-user approval flows in Telegram for team-based decisions.

## 🔗 Nodes Used

HTTP Request, Telegram, Google Drive, X (Formerly Twitter), Google Drive Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
