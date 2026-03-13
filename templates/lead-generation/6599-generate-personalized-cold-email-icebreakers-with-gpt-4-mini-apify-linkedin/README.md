# 🎣 Generate personalized cold email icebreakers with GPT-4 Mini, Apify & LinkedIn

> ⚡ **975 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# This n8n workflow scrapes LinkedIn data for your leads, feeds it into a GPT-4 AI agent, and generates laser-targeted, personalized icebreakers you can drop into your cold email campaigns.
 
It automates the personalization process at scale — saving you hours of research while sounding human and thoughtful.


## Step-by-Step Setup (Beginner Friendly)
### Step 1: Prepare Your Leads (Input Sheet)
- Get your lead list based on your industry and niche from Apollo (free)
- Copy the entire link
- Go to Apify and use [this](https://apify.com/code_crafter/apollo-io-scraper/) Apollo Scraper to scrape the leads. 
- Download the result as CSV and upload the CSV to Google Sheets
- Add a column at the end of the Sheet. Name this column as "status". Mark the entire column (every row) as "un-enriched" (this is important)
- Connect your Google Sheets account to n8n
- The workflow will pull leads from this sheet where status = un-enriched

### Step 2: Set Your Credentials
- Google Sheets: Connect your account to n8n using OAuth2
- OpenAI: Add your OpenAI API credentials
- Apify: Visit [Apify Console](https://console.apify.com/settings/integrations) to get your Apify API key
- Use [this Apify LinkedIn Profile Scraper](https://console.apify.com/actors/2SyF0bVxmgGr8IVCZ/) and copy the actorID --&gt; get it from the URL : https://console.apify.com/:actorID/input
- Paste both Apify API Key and ActorID into the “Set Apify Tokens” node

### Step 3: Customize the AI Agent
- In the node “Generate Personalized Icebreaker”, adjust the system prompt.
- Update it with your own niche, offer, tone, and insights
- Keep the JSON output format exactly as shown. The rest of the workflow depends on it

### Step 4: Run the Workflow
- Click "Execute Workflow"
- The system will:
-- Pull all unenriched leads
-- Filter out entries without email
-- Scrape LinkedIn profiles using Apify
-- Use GPT-4 to write a short, personalized icebreaker
-- Save the result to a separate “Enriched” sheet
-- Mark those leads as “enriched” in your original sheet

## How It Works Behind the Scenes
- Manual Trigger starts the workflow
- Get Raw Leads from a Google Sheet (filter = un-enriched)
- Filter for Valid Emails (hasEmail?)
- Loop Over Leads
- Set Apify API credentials
- Call Apify’s LinkedIn Scraper using each lead's LinkedIn URL
- Aggregate the scraped data
- Simplify fields for AI prompt
- Call OpenAI GPT-4.1 Mini with structured, data-rich prompt to generate icebreaker
- Append results to Enriched Sheet
- Update original list’s status to prevent reprocessing
- Loop continues to the next lead

## Best Practices for Successful Use
- Clean your leads: Remove unnecessary columns from your Google Sheet raw lead list
- Throttle large batches: The Apify actor and OpenAI calls may hit rate limits. Process in small batches.
- Customize prompt deeply: The better your AI instructions, the more believable your icebreakers will sound.
- Use shortened company names and local slang: The system prompt already does this — keep it.
- Avoid fluff: Keep the tone Spartan, specific, and real.

## Ideal Use Cases
- Cold email campaigns for SMB SaaS, agency offers, B2B sales
- Personalized intros for LinkedIn DMs
- Data enrichment for lead gen automation
- Integrating with tools like Instantly.ai, Smartlead, or Mailshake

## Demo Link
Watch the full walkthrough and see it in action:
👉 [Watch me build this LIVE on YouTube](https://youtu.be/sU-Y1Aes7CE)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
