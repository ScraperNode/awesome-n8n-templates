# 📊 AI-powered automatic analysis of YouTube product reviews with Apify + GPT

> ⚡ **49 views** · 📊 [Market Research & Insights](../)

## Description

# AI-Powered Automatic Analysis of YouTube Product Reviews With Apify

This **n8n** workflow automates the process of searching, transcribing, and analyzing product reviews extracted from YouTube videos, generating a clear, ready-to-use report in **HTML format and/or email**.

---

## 📌 Usage and How It Works
1. **Enter the product name** (via webhook or manually).
2. The workflow **searches YouTube videos** related to the product using **Apify**.
3. **Extracts the text** (transcription) from the selected videos.
4. **Merges and separates** each video's content to maintain context.
5. Analyzes the texts with **GPT-4o-mini** to obtain:
   - **Strengths** (pros, advantages, what users value most).
   - **Weaknesses** (cons, problems, criticisms).
   - Other relevant points mentioned in the reviews.
6. Returns an **HTML report** (via email or webhook), ready for reading or presentation.

The entire process is **fully automated** and multi-language (language configured in the `LANG` node).

---

## 💡 Why Buy This Workflow
- **Save hours of work** searching and manually analyzing reviews.
- **Reliable results**: the analysis is based only on what is said in the videos, without inventing data.
- **Complete integration**: scraping, transcription, processing, and delivery, all in a single flow.
- **Multi-language** configurable in seconds.
- **Low cost per use** (see below).
- **Configurable**: Designed to be easy to set up and adapt.

---

## 🎯 Who It’s For
- **E-commerce and online stores** wanting to know product pros/cons before selling.
- **Marketing and SEO agencies** looking for real user insights.
- **Brands** seeking genuine feedback on their products.
- **Market researchers** needing aggregated opinions.
- **n8n enthusiasts** wanting to see a practical and complete example of advanced automation.

---

## 💰 Usage Costs
- **Approximate cost:** $0.03 USD per report *(GPT-4o-mini + Apify)*.
- **Apify** offers **$5 free without a credit card**, which equals **~130 free reports** before incurring any costs.
- After that, you only pay for what you use.

---

## 🔧 Technologies Used
- **Apify** for video search and transcript extraction.
- **OpenAI GPT-4o-mini** for text analysis and report generation.

---

## 📬 Basic Support
For questions or basic support, email: **oriolrotllant3@gmail.com**

---

## Example result
![Example result screenshot png](https://i.ibb.co/NgT0pMKx/workflow.png)

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail, Stop and Error, Markdown, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
