# 🎬 Create personalized Loom video scripts from Upwork jobs with Claude AI

> ⚡ **133 views** · 🎬 [Content Creation & Video](../)

## Description

This n8n template transforms Upwork job postings into personalized Loom video outreach assets in under 60 seconds. Paste a job description and get a complete outreach package: video script, before/after comparison, automation flow diagram, and proposal snippet.

Use cases include: AI/Automation agencies doing Upwork cold outreach, freelancers who personalize proposals with Loom videos, or anyone wanting to scale video prospecting with AI-generated scripts.

## Good to know

- Each job processed costs approximately **$0.02-0.04 USD** in Claude API fees (two API calls per job)
- Processing time is ~45-60 seconds per job
- The workflow uses Claude Sonnet for optimal cost/quality balance
- Generated scripts are starting points - review and personalize before recording

## How it works

- Submit an Upwork job via the built-in form (title, description, optional client name and URL)
- Claude AI analyzes the job to extract: industry classification, pain points, tools mentioned, budget/urgency signals, and competition level
- A second Claude call generates the complete outreach package based on the analysis
- All assets are saved to a Google Doc named by prospect
- Lead data is logged to Google Sheets for tracking
- Slack notification delivers the doc link and key insights

**What you get for each job:**
- 90-120 second Loom video script (hook, credibility, walkthrough, CTA)
- Before/After process comparison with ROI calculations
- Automation flow diagram structure
- Upwork proposal opening snippet
- Visual prompts for Whimsical/Figma diagrams
- Quick reference card with pricing guidance

## How to use

- The form trigger creates a URL at `your-n8n-instance/form/upwork-loom-generator`
- Paste the full job description for best results - more context = better analysis
- Add the client name if visible for personalized script openings
- After generation, review the Google Doc and customize the script to your voice
- Use the visual prompts to create diagrams before recording your Loom

## Requirements

- **Anthropic account** for Claude API access
- **Google account** with Docs and Sheets enabled
- **Slack workspace** for notifications

## Set up steps

1. **Anthropic credential** - Create HTTP Header Auth credential with your API key (header name: `x-api-key`)
2. **Google credentials** - Connect Google Docs and Google Sheets OAuth2 credentials
3. **Slack credential** - Add Slack API credential with `chat:write` scope
4. **Update placeholders in nodes:**
   - `Create Google Doc` → Set your Google Drive folder ID
   - `Log to Google Sheets` → Set your spreadsheet ID
   - Both Slack nodes → Set your channel ID
5. **Create tracking sheet** with columns: Timestamp, Prospect Name, Industry, Business Function, Pain Point, Tokens Used, Google Doc Link, Version

## Customising this workflow

- Edit the "MY BACKGROUND" section in the `Claude - Generate Loom Assets` node to match your experience and services
- Adjust industry-specific hourly rates and time savings in the prompt to match your market
- Modify the Loom script CTA to your preferred next step (calendar link, reply, etc.)
- Add additional integrations: Notion database, CRM, or calendar booking
- Swap Slack for Discord, Teams, or email notifications

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Google Docs, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
