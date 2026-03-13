# 🎣 Qualify & enrich leads with GPT-4 and LinkedIn data for intelligent routing

> ⚡ **184 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# AI-Powered Lead Qualification & Enrichment Pipeline

## 🎯 Who is this for?

This template is perfect for:
- **Marketing Teams** looking to automatically qualify inbound leads from campaigns
- **Sales Teams** wanting to prioritize high-value prospects instantly  
- **Agencies** offering lead qualification as a service to clients
- **SaaS Companies** routing trial signups to appropriate nurture sequences
- **B2B Service Providers** scoring and enriching leads from multiple sources

## 💡 What problem does it solve?

Manual lead qualification is slow, inconsistent, and expensive. Sales teams waste hours on unqualified leads while hot prospects go cold. This workflow:

- **Eliminates manual research** - Automatically enriches company data via LinkedIn
- **Scores leads instantly** - AI analyzes 15+ data points to score 0-100
- **Routes intelligently** - Hot leads get instant alerts, warm leads enter nurture
- **Personalizes outreach** - AI generates custom emails based on company context

## ⚡ What this workflow does

### 1. Lead Capture & Validation
- Captures leads via built-in n8n Form (embeddable on any website)
- Validates email format and detects business vs personal emails
- Normalizes data from various field naming conventions

### 2. Company Enrichment via Apify
- Uses Google Search to find company's LinkedIn profile
- Scrapes LinkedIn for industry, size, description, specialties, and more
- Gracefully skips enrichment for personal emails (Gmail, Yahoo, etc.)

### 3. AI Lead Qualification (GPT-4.1)
- Scores leads 0-100 based on buying signals
- Assigns tier: Hot (80+), Warm (60-79), Cold (40-59), Disqualified (&lt;40)
- Identifies buyer persona (Decision Maker, Influencer, Champion, etc.)
- Generates personalized talking points and risk factors

### 4. Intelligent Routing & Actions
- **Hot Leads**: Instant Slack alert + AI-generated personalized email + HubSpot contact
- **Warm Leads**: Slack notification for nurture sequence
- **Cold Leads**: Logged for future reference
- **All Leads**: Recorded to Google Sheets with full qualification data

## 🔧 Setup

### Required Credentials
| Service | Purpose |
|---------|---------|
| OpenAI | AI qualification & email generation |
| Apify | Google Search + LinkedIn scraping |

### Optional Credentials
| Service | Purpose |
|---------|---------|
| Slack | Lead alerts and notifications |
| HubSpot | CRM contact creation |
| Gmail | Sending personalized emails |
| Google Sheets | Lead database logging |

### Apify Setup
1. Create account at [apify.com](https://apify.com)
2. Get API token from Settings → Integrations
3. Open the Apify HTTP nodes and replace YOUR_API_KEY with the API token obtained in the above step

### Apify Actors Used
- **Google Search Scraper PPR** (Actor ID: `G9PR1B1upfS0mRvp0`) - ~$0.004/search
- **LinkedIn Company Scraper PPR** (Actor ID: `G9y3V8J1hXYJTf1Ho`) - ~$0.02/company

**Total cost**: ~$0.02-0.03 per enriched lead

## 📊 Lead Scoring Criteria

| Score | Tier | What it means |
|-------|------|---------------|
| 80-100 | 🔥 Hot | Strong buying signals, budget confirmed, urgent timeline |
| 60-79 | 🌡️ Warm | Good fit, some buying signals, needs nurturing |
| 40-59 | ❄️ Cold | Potential fit but unclear intent |
| 0-39 | ⛔ Disqualified | Poor fit, spam, or invalid |

## 🎨 Customization

### Modify Form Fields
Edit the "Lead Capture Form" node to add/remove fields for your use case.

### Adjust AI Scoring
Edit the system prompt in "AI Lead Qualification" to customize:
- Score thresholds for your industry
- Buyer persona definitions
- Custom qualification criteria

### Add Integrations
Easily extend with:
- Pipedrive, Salesforce, or other CRMs
- Email sequences (Mailchimp, ActiveCampaign)
- SMS notifications (Twilio)
- Calendar booking (Calendly)

## 📈 Example Output

```json
{
  "qualification": {
    "score": 85,
    "tier": "Hot",
    "buyerPersona": "Decision Maker",
    "urgencyLevel": "High"
  },
  "insights": {
    "keyInsights": [
      "VP-level with direct budget authority",
      "Company in growth phase (51-200 employees)",
      "Industry aligned with our ICP"
    ],
    "talkingPoints": [
      "Reference their sustainability focus",
      "Highlight ROI for mid-market companies"
    ]
  }
}
```

## 🙋 Need Help?

- Check the sticky notes in the workflow for section-by-section guidance
- Ensure Apify credentials are properly configured
- Test with a business email (not Gmail/Yahoo) to see full enrichment

---

**Created by [Agentical AI](https://agenticalai.com)** - AI Automation Agency specializing in workflow automation and AI solutions.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, HubSpot, Gmail, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
