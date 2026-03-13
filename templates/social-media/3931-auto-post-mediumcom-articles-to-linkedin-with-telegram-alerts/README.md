# 📱 Auto-post Medium.com articles to LinkedIn with Telegram alerts

> ⚡ **1,242 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

**🧠 Problem This Solves**
Manually sharing Medium articles to LinkedIn daily can be repetitive and time-consuming. This automation:

Fetches the latest Medium articles based on a tag (e.g., android)

Posts them on LinkedIn twice daily

Uses Airtable to prevent duplicates

Sends a confirmation to Telegram once posted

Stay consistently active on LinkedIn without lifting a finger.

**👥 Who This Template Is For**
Developers who write or follow Medium content

Tech creators or founders looking to grow an audience

Community or page managers needing regular curated posts

Busy professionals who want hands-free LinkedIn engagement

**⚙️ Workflow Breakdown**
This automation runs at 9:00 AM and 7:00 PM daily and performs these steps:

Fetch articles from MediumAPI.com by tag

Check Airtable to prevent reposting the same article

Post on LinkedIn if it’s new

Store the article ID in Airtable

Send a Telegram message after successful posting

**🧾 Step-by-Step Setup Instructions**

✅ 1. Airtable Configuration
Create a base with:

Table Name: PostedArticles

Column: ArticleID (Single line text – to track posted articles)

🔗 2. MediumAPI Setup
Go to https://mediumapi.com

Sign up and generate your API key from the dashboard

Use this API endpoint in an HTTP node:

GET https://mediumapi.com/api/tag/YOUR_TAG/latest

Headers:
  Authorization: Bearer YOUR_API_KEY
Replace YOUR_TAG with a topic like android, ai, webdev, etc.

💬 3. Telegram Bot Setup
Go to @BotFather and create a new bot

Save the bot token

Use @userinfobot to get your Telegram chat ID

Add a Telegram node in n8n with the token + chat ID

🔗 4. LinkedIn Setup
Create a LinkedIn Developer App

Connect it via OAuth2 in n8n

Choose to post on your profile or company page

🧱 5. n8n Workflow Structure
Node Type	Description
Cron	Triggers the flow twice a day
HTTP Request	Fetches articles from MediumAPI.com
Airtable Search	Checks if article ID already exists
IF Node	Skips duplicates
LinkedIn Post	Publishes to your LinkedIn profile/page
Airtable Create	Stores posted article ID
Telegram Node	Sends success notification

🛠️ Customization Tips
Change the tag in the API URL to match your niche

Add hashtags or personal comments to the LinkedIn message

Schedule different posting times in the Cron node

Filter Medium posts based on length or title keywords (optional)

## 🔗 Nodes Used

Airtable, HTTP Request, Telegram, LinkedIn, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
