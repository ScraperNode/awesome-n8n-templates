# 🎣 Automate B2B sales research & email personalization with Sona and GPT-4

> ⚡ **204 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Sona-Powered AI Sales Research & Personalized Email Automation

## 🎯 Overview

Automatically research B2B leads and generate personalized outreach emails by reading prospects from Google Sheets, enriching with company data from Sona Enrich, analyzing insights with AI, and creating custom emails — so you can scale personalized outreach to target accounts.

You'll be able to automatically enrich company data for target accounts, use AI to identify pain points and opportunities, generate personalized email copy, and sync everything back to your sheet with ready-to-send Gmail compose links.

## ✨ What This Workflow Does

1. **Smart Lead Processing** - Reads leads from Google Sheets and filters unprocessed contacts
2. **Deep Company Intelligence** - Enriches each lead using Sona's API (industry, tech stack, revenue, employee count, social profiles)
3. **AI-Powered Research** - GPT-4 analyzes company data to identify pain points, growth opportunities, and personalization hooks
4. **Email Generation** - Creates 120-150 word personalized emails with curiosity-driven subject lines
5. **Automated Sync** - Updates Google Sheets with research insights and one-click Gmail compose links

## 🔥 Key Features

- **Structured AI Output** - Consistent, high-quality research and copy generation
- **Zero Manual Work** - Processes 20-50 leads per hour completely hands-free
- **Email Generation - Creates 120-150 word personalized emails with curiosity-driven subject lines
- **Gmail Integration** - Pre-filled send links for instant outreach
- **Progress Tracking** - Real-time status updates in Google Sheets

## 💼 Perfect For

- Sales teams doing cold outreach
- SDRs needing personalized emails at scale
- Agencies managing client prospecting
- Founders building their pipeline

## 📋 What You'll Need

### 1. Sona API Key
- Get yours at [sonalabs.com](https://sonalabs.com)
- Provides company data enrichment
- Add to HTTP Request node header: `x-api-key: YOUR_KEY`

### 2. OpenAI API Key
- Get from [platform.openai.com](https://platform.openai.com)
- Uses GPT-4.1-mini for research and email generation
- Add credentials in n8n

### 3. Google Sheets Setup
Create a spreadsheet with these columns:
- **Input columns:** `Website Domain`, `Company Name`, `Contact Name`, `Email`, `Industry`
- **Status column:** `Research Status` (leave empty for new leads)
- **Auto-populated:** `Pain Points`, `Key Insight`, `Email Subject`, `Email Body`, `Send Email Link`, `Generated Date`, `Sent Status`

### 4. Google Sheets API
- Enable in Google Cloud Console
- Set up OAuth2 with spreadsheets permission
- Add your spreadsheet ID to workflow nodes

## 🚀 Setup Instructions

1. **Import workflow** into n8n
2. **Add credentials:**
   - Sona API key (HTTP Request node)
   - OpenAI API credentials
   - Google Sheets OAuth2
3. **Update spreadsheet ID** in all Google Sheets nodes
4. **Customize AI prompts** (optional) to match your offering
5. **Test with 2-3 leads** before running full list
6. **Execute workflow** - it processes leads automatically in batches

## 📊 Expected Output

Each processed lead gets:
- **Pain points** (3-5 identified challenges)
- **Growth opportunities** (2-3 actionable insights)
- **Personalization hooks** (3-4 talking points)
- **Email subject line** (max 8 words, curiosity-driven)
- **Email body** (120-150 words, consultative tone)
- **Gmail compose link** (one-click to send)
- **Fit score** (High/Medium/Low)

**Processing time:** 30-60 seconds per lead

## 🎓 How It Works

### Step 1: Data Input & Filtering
Reads all leads from Google Sheets and filters out already-processed leads (those with a value in "Research Status" column).

### Step 2: Company Data Enrichment
- Updates status to "Pending" in Google Sheets
- Searches Sona database using domain or email
- 5-tier smart matching algorithm finds best company match
- Retrieves firmographic data and technology stack

### Step 3: AI Company Research
GPT-4.1-mini analyzes company data to generate:
- Specific pain points based on industry, size, tech stack
- Growth opportunities and market positioning
- Personalization hooks from company description
- Recommended outreach tone and CTA
- One-liner insight for email opening

### Step 4: Personalized Email Generation
AI crafts cold email following best practices:
- Curiosity-driven subject line (max 8 words)
- Opens with personalization hook showing research
- References ONE specific pain point
- Focuses on tangible outcomes (not product features)
- Natural CTA without being pushy
- Professional but conversational tone

### Step 5: Data Output & Loop
- Formats all data for Google Sheets
- Creates Gmail compose link with pre-filled content
- Updates sheet with complete results
- Sets status to "Completed"
- Waits 2 seconds, then processes next lead

## ⚡ Pro Tips

- **Start small:** Test with 5-10 leads to validate personalization quality
- **Review first emails:** Adjust AI prompts if tone needs calibration
- **Clean your data:** Better input domains = better Sona matches
- **Monitor fit scores:** Focus manual review on High/Medium fits
- **Use status column:** Easily re-run workflow for new leads only
- **Connect CRM:** Use webhooks to push data to Salesforce/HubSpot

## 🎯 Use Cases

### Sales Team Automation
Process 100+ leads overnight with personalized research and emails ready by morning.

### Agency Client Work
Deliver custom prospecting campaigns with unique emails for each client's target accounts.

### Founder Outreach
Build pipeline systematically with AI-researched, personalized emails at scale.

### SDR Productivity
Give SDRs pre-researched talking points and draft emails to speed up their workflow 10x.

## 📈 Expected Results

- **Email personalization:** 10x better than templates
- **Time saved:** 5-10 minutes per lead → 30 seconds automated
- **Response rates:** 2-3x higher with AI-researched insights
- **Scalability:** Process 50-100 leads per day hands-free

## 🔧 Customization Options

- **Change AI model:** Swap GPT-4.1-mini for GPT-4 or other models
- **Adjust email length:** Modify prompt to generate shorter/longer emails
- **Add more enrichment:** Chain additional API calls (Clearbit, Apollo, etc.)
- **Multi-language:** Update prompts for outreach in other languages
- **Custom tone:** Adjust system prompts for industry-specific voice
- **Webhook triggers:** Replace manual trigger with scheduled runs or form submissions

## 🐛 Troubleshooting

**No Sona data found?**
- Verify API key is correct
- Check domain format (remove http://, trailing slashes)
- Fallback uses first search result if no exact match

**AI output not formatted correctly?**
- Structured Output Parser ensures valid JSON
- Check OpenAI API key and model availability

**Google Sheets not updating?**
- Verify OAuth2 credentials are connected
- Check spreadsheet ID matches your sheet
- Ensure column names match exactly (case-sensitive)

**Rate limits?**
- Sona: 3 second delay between requests (built-in)
- OpenAI: Adjust batch size or add longer waits
- Google Sheets: No limit for standard usage

## 📝 Template Information

- **Category:** Sales & Marketing
- **Difficulty:** Intermediate
- **Setup Time:** 5-10 minutes
- **Run Time:** 30-60 seconds per lead
- **Cost:** Pay-per-use (Sona API + OpenAI tokens)
- **Updated:** December 2025

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
