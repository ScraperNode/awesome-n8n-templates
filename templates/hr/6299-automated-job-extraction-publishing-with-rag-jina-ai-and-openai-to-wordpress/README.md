# 👥 Automated job extraction & publishing with RAG, Jina AI and OpenAI to WordPress

> ⚡ **674 views** · 👥 [HR & Recruitment](../)

## Description

Auto repost job with RAG is a workflow designed to automatically extract, process, and publish job listings from monitored sources using Google Drive, OpenAI, Supabase, and WordPress. This integration streamlines job reposting by intelligently extracting relevant job data, mapping categories and types accurately, managing media assets, and publishing posts seamlessly.

## 💡 Why Use Auto repost job with RAG?

**Automated Publishing:** Slash manual entry time by automating job post extraction and publication, freeing hours every week.

**Error-Resistant Workflow:** Avoid incomplete job posts with smart validation checks to ensure all necessary fields are ready before publishing.

**Consistent Content Quality:** Maintain formatting, SEO, and style consistency backed by AI-driven article regeneration adhering strictly to your guidelines.

**Competitive Edge:** Get fresh jobs live faster than your competitors without lifting more than a finger—because robots don't take coffee breaks!

## ⚡ Perfect For

**Recruiters & HR Teams:** Accelerate your job posting funnel with error-free automation.

**Content Managers:** Keep your job boards fresh with AI-enriched standardized listings.

**Digital Marketers:** Automate content flows to boost SEO and engagement without the headache.

## 🔧 How It Works

**⏱ Trigger:** Job link inputs via Telegram.

**📎 Process:** Auto-download of job documents, data extraction using Jina AI and OpenAI's GPT-4 model to parse content and metadata.

**🤖 Smart Logic:** AI agent regenerates articles based on strict RAG dataset rules; category & job type IDs mapped to match WordPress taxonomy; fallback attempts with default images for missing logos.

**💌 Output:** Job posts formatted and published to WordPress; success or failure updates sent back via Telegram notifications.

**🗂 Storage:** Uses Supabase vector store for document embedding and retrieval related to formatting rules and job data.

## 🔐 Quick Setup

1. Import the provided JSON workflow into your [n8n instances](https://n8n.partnerlinks.io/khmuhtadin)
2. **Add credentials:** Google Drive OAuth, OpenAI API, Supabase API, Telegram API, WordPress API
3. **Customize:** Set your Google Drive folder ID, WordPress endpoints, and Telegram chat IDs
4. **Update:** Confirm default logo URLs and fallback settings as needed
5. **Test:** Submit a new job link via Telegram or add a file to the watched Drive folder

## 🧩 You'll Need

- Active [n8n instances](https://n8n.partnerlinks.io/khmuhtadin)
- Google Drive Account with OAuth2 credentials
- OpenAI API access for GPT-4 processing
- Supabase account configured for vector storage
- WordPress API credentials for job listing publishing
- Telegram Bot for notifications and job link inputs

## 🛠️ Level Up Ideas

- Integrate Slack, Gmail or Teams notifications for teams visibility
- Add a sentiment analysis step to prioritize certain jobs
- Automate social media posting of new job listings for wider reach

---

**Made by:** [Khmuhtadin](https://khmuhtadin.com)  
**Tags:** automation, job-posting, AI, OpenAI, Google Drive, WordPress  
**Category:** content automation  
**Need custom work?** [Contact me](https://khmuhtadin.com/contact)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Google Drive, Google Drive Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
