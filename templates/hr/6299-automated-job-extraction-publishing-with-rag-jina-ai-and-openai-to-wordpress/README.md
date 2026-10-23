# 👥 Automated job extraction & publishing with RAG, Jina AI and OpenAI to WordPress

> ⚡ **733 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Fresh job posts without the manual grind. Auto Repost Job with RAG extracts, processes, and publishes job listings from monitored sources using Google Drive, OpenAI, Supabase, and WordPress. Job data gets extracted, categories mapped accurately, media handled, and posts published. All automatically.

*Last updated: September 2026.*

## Why Use Auto Repost Job with RAG?

**Automated Publishing:** Job post extraction and publication run themselves, freeing hours every week.

**Error-Resistant Workflow:** Smart validation checks that all necessary fields are ready before anything goes live.

**Consistent Content Quality:** Formatting, SEO, and style stay consistent with AI-driven article regeneration following your guidelines.

**Competitive Edge:** Fresh jobs go live faster, without extra effort.

## Perfect For

**Recruiters & HR Teams:** A faster, error-free job posting funnel.

**Content Managers:** Job boards that stay fresh with AI-enriched, standardized listings.

**Digital Marketers:** Content flows on autopilot to boost SEO and engagement.

## How It Works

* **Trigger:** Job link inputs via Telegram.
* **Process:** Auto-download of job documents, data extraction using Jina AI and OpenAI's GPT-4 model to parse content and metadata.
* **Smart Logic:** AI agent regenerates articles under strict RAG dataset rules; category and job type IDs mapped to match WordPress taxonomy; fallback attempts with default images for missing logos.
* **Output:** Job posts formatted and published to WordPress; success or failure updates sent back via Telegram notifications.
* **Storage:** Supabase vector store for document embedding and retrieval related to formatting rules and job data.

## Quick Setup

1. Import the provided JSON workflow into your [n8n instances](https://n8n.partnerlinks.io/creator-khmuhtadin)
2. **Add credentials:** Google Drive OAuth, OpenAI API, Supabase API ([docs](https://supabase.com/docs)), Telegram API, WordPress API
3. **Customize:** Set your Google Drive folder ID, WordPress endpoints, and Telegram chat IDs
4. **Update:** Confirm default logo URLs and fallback settings as needed
5. **Test:** Submit a new job link via Telegram or add a file to the watched Drive folder

## You'll Need

- Active [n8n instances](https://n8n.partnerlinks.io/creator-khmuhtadin)
- Google Drive Account with OAuth2 credentials
- OpenAI API access for GPT-4 processing
- Supabase account configured for vector storage
- WordPress API credentials for job listing publishing
- Telegram Bot for notifications and job link inputs

## Level Up Ideas

- Integrate Slack, Gmail or Teams notifications for teams visibility
- Add a sentiment analysis step to prioritize certain jobs
- Automate social media posting of new job listings for wider reach

### Quick Answers
**How do I submit a job?**  
Drop a job link in Telegram or add a file to the watched Google Drive folder.  
**Where does it publish?**  
WordPress, with categories and types mapped to your taxonomy. Telegram confirms success or failure.  
**What if a logo is missing?**  
Fallback logic inserts default images so posts still go live complete.  

---

**Made by:** [khmuhtadin](https://khmuhtadin.com)  
**Tags:** automation, job-posting, AI, OpenAI, Google Drive, WordPress  
**Category:** content automation  
**Need custom work?** [Contact me](https://khmuhtadin.com/contact)

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Google Drive, Google Drive Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
