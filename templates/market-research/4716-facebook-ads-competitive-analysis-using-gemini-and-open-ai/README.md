# 📊 Facebook ads competitive analysis using Gemini and Open AI

> ⚡ **694 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.

## Description

**How it works**
- User submits a keyword through a form to trigger the workflow.
- Ads matching the keyword are scraped from Facebook Ads Library.
- Ads are filtered by media type (image or video).
- Images are analyzed using an AI model to describe visuals and text.
- Videos are downloaded, processed, and sent to Gemini for visual and spoken content analysis.
- Text, URLs, and media descriptions are compiled.
- All ad insights are saved into a Google Sheet for easy viewing.

**Set up steps**
- **Requires** Apify and Gemini API credentials, Google Sheets access, and OpenAI key.
- **Import** the workflow into n8n and connect accounts to form, HTTP, and Sheets nodes.
- Provide form trigger URL for user input; **no advanced config needed**.
- **Estimated setup time:** ~15–20 minutes for a user familiar with n8n.
- **Sticky notes** inside the workflow provide helpful guidance per section.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger, Extract from File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
