# 🎬 Create high-converting sales copy with Hormozi Framework, LangChain & Google Docs

> ⚡ **674 views** · 🎬 [Content Creation & Video](../)

## Description

**Note:** This workflow assumes you already have your product’s Amazon reviews saved in a Google Sheet. If you still need those reviews, run my **Amazon Reviews Scraper** workflow first, then plug the resulting spreadsheet into this template.

**What it does**
Transforms any draft Google Doc into multiple high-converting sales pages. It blends Alex Hormozi’s value-stacking tactics with persona targeting based on Maslow’s Hierarchy of Needs, using your own customer reviews for proof and voice of customer (VOC).

**Perfect for**
• Growth and creative strategists
• Freelance copywriters and agencies
• Founders sharpening offers and funnels

**Apps used**
Google Sheets, Google Docs, LangChain OpenRouter LLM

**How it works**

1. Form Trigger collects Drive folder IDs, base copy URL and options.
2. Workflow fetches the draft copy and product feature doc.
3. It samples reviews, extracts VOC insights and maps them to Maslow needs.
4. LLM drafts headlines and hooks following Hormozi’s \$100M Offers principles.
5. Personas drive tone, objections and urgency in each copy variant.
6. Loop writes one Google Doc per variant in your chosen folder.
7. Customer analysis docs are saved to a second folder for reuse.

**Setup**

1. Share two Drive folders, copy the IDs (text after `folders/`).
2. Paste each ID into **Customer Analysis Folder ID** and **Advertorial Copy Folder ID**.
3. Provide **File Name**, **Base copy (Google Docs URL)** and **Product Feature/USPs Doc**.
4. Optional: **Reviews Sheet URL**, **Number of reviews to use**, **Target City**.
5. Set **Number of Copies** you need (1–20).
6. Add Google Docs OAuth2 and Google Sheets OAuth2 credentials in n8n.

**If you have any questions in running the workflow, feel free to reach out to me at my youtube channel:**
https://www.youtube.com/@lifeofhunyao

## 🔗 Nodes Used

Google Sheets, Google Docs, AI Agent, Structured Output Parser, n8n Form Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
