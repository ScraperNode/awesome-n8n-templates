# 🤝 Generate client quotes from call transcripts with Claude/GPT, Google Drive, and PandaDoc

> ⚡ **53 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

**Who is this for?**
Agencies, consultants, and service providers who conduct discovery calls and need to quickly turn conversations into professional proposals.

**What it does:**
This workflow transforms meeting transcripts into complete, professional quotes using a sophisticated multi-agent AI architecture. It handles the entire quote lifecycle: from transcript analysis to client signature and onboarding.

**How it works:**
1. **Trigger**: Google Drive detects a new VTT/transcript file in a designated folder
2. **Extraction**: The transcript is cleaned and parsed, then matched with calendar data to identify the client
3. **AI Analysis**: A main orchestrator agent analyzes the call and delegates tasks to specialized sub-agents:
   - **SOW Agent**: Generates problems, solutions, and action items
   - **Pricing Agent**: Creates competitive pricing based on service catalog and market research
4. **Document Creation**: PandaDoc API creates the quote with all tokens populated
5. **Review & Approval**: Quote is sent to Slack for human review with approve/reject buttons
6. **Delivery**: Approved quotes are sent via Gmail with custom HTML templates
7. **Post-Signature**: Webhook triggers CRM update and welcome email upon signature

**Key Features:**
- Multi-agent architecture with specialized AI agents
- Automatic pricing calculation with 80%+ margin targeting
- Market research integration via Perplexity API
- Human-in-the-loop approval via Slack
- Professional HTML email templates
- CRM integration (Notion) for client status tracking

### Requirements
- Google Drive account (for transcript storage)
- Google Calendar (for meeting context)
- PandaDoc account (for quote generation)
- OpenRouter API (for LLM access - Claude/GPT models)
- Perplexity API (for market research)
- Slack workspace (for approval workflow)
- Gmail account (for client communication)
- Notion database (for CRM)

### Setup Instructions
1. Configure Google Drive trigger folder
2. Set up PandaDoc template with required tokens
3. Add API credentials for OpenRouter and Perplexity
4. Connect Slack workspace for approval notifications
5. Configure Gmail for outbound emails
6. Set up Notion CRM database with required properties

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Google Drive, Google Calendar, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
