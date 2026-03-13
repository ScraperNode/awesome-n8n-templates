# 📱 Automate social media content with AI for Instagram, Facebook, LinkedIn & X

> ⚡ **15,023 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# AI Social Media Content Automation – n8n Workflow

This workflow is built for creators, solopreneurs, SaaS founders, and agencies looking to automate their social media content process from idea to publication. It combines the power of OpenAI, Google Sheets, and official APIs for Instagram, Facebook, X (Twitter), and LinkedIn to deliver fully automated, brand-consistent social media posts — including text, images, hashtags, CTAs, and scheduling.

No more switching tools, rewriting content, or forgetting to post. Just set it up once and let your brand grow automatically.

## 🔧 What the Workflow Does
- Generates platform-specific post ideas based on your brand tone.
- Selects the best idea (or lets you manually input one).
- Writes tailored posts for Instagram, Facebook, X, and LinkedIn.
- Auto-generates platform-specific visuals using OpenAI (DALL·E) and uploads to Cloudinary.
- Publishes content directly using official platform APIs.
- Logs all actions to Google Sheets and optionally sends a summary email via Gmail.

## ⚙️ How It Works
1. Trigger the workflow manually, on a schedule, or from a chatbot.
2. AI generates multiple post ideas and filters the best one.
3. Based on the selected idea, it generates full posts for each platform.
4. Custom visuals are created using OpenAI and uploaded to Cloudinary.
5. Final post content is merged and sent to Instagram, Facebook, X, and LinkedIn.
6. Logs and optional reports are created in Google Sheets and Gmail.

## 🛠️ Setup Steps
- Set up your accounts and credentials: OpenAI, Cloudinary, Gmail, Meta, LinkedIn, X, and Google Sheets.
- Import the workflow and subworkflow (Get Brand Brief) into n8n.
- Replace all placeholders (sheet IDs, access tokens, profile/page IDs, brand brief URLs).
- Optionally personalize prompts and output templates to match your brand voice.
- Setup time: ~30–45 minutes (including credentials and testing).

Detailed configuration notes are included in sticky nodes throughout the workflow.

## 📦 Included in Your Package
- JSON workflow file (main flow + brand brief subflow)
- Google Sheets templates for history logging
- Setup documentation (Markdown & PDF)
- Placeholder reference sheet

## 🔗 Nodes Used

Google Sheets, HTTP Request, Execute Sub-workflow, Facebook Graph API, X (Formerly Twitter), Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
