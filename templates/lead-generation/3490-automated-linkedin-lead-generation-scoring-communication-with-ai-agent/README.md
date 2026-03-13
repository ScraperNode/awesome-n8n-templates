# 🎣 Automated LinkedIn lead generation, scoring & communication with AI-Agent

> ⚡ **16,706 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

![Screenshot 20250411 at 00.36.29.png](fileId:1103)

**⚠️ DISCLAIMER:** This workflow uses the AnySite LinkedIn community node, which is only available on self-hosted n8n instances. It will not work on n8n.cloud.

## Overview

This workflow automates the entire LinkedIn lead generation process from finding prospects that match your Ideal Customer Profile (ICP) to sending personalized messages. It uses AI to analyze lead data, score potential clients, and prioritize your outreach efforts.

## Key Features

- **AI-Driven Lead Generation**: Convert ICP descriptions into LinkedIn search parameters
- **Comprehensive Data Enrichment**: Analyze company websites, LinkedIn posts, and news
- **Intelligent Lead Scoring**: Prioritize leads based on AI analysis of intent signals
- **Automated Outreach**: Connect with prospects and send personalized messages

## Requirements

1. Self-hosted n8n instance with the  AnySite LinkedIn community node installed
2. OpenAI API access (for GPT-4o)
3. Google Sheets access
4. AnySite API key (available at [anysite.io](https://AnySite.io))
5. LinkedIn account

## Setup Instructions

### 1. Install Required Nodes

- Ensure the AnySite LinkedIn community node is installed on your n8n instance
- Command: `npm install n8n-nodes-hdw`
(or use this [instruction](https://www.npmjs.com/package/n8n-nodes-hdw))

### 2. Configure Credentials

- **OpenAI**: Add your OpenAI API key
- **Google Sheets**: [Set up](https://docs.n8n.io/integrations/builtin/credentials/google/) Google account access
- **AnySite LinkedIn**: [Configure](https://www.npmjs.com/package/n8n-nodes-hdw) your API key from AnySite.io

### 3. Set Up Google Sheet

- Create a new Google Sheet with the following columns (or copy [template](https://docs.google.com/spreadsheets/d/18w5jT_Gx20bhW_UfU8IiUkEO0xMioD7XZZC2sShQItA/edit?usp=sharing)):
  - Name, URN, URL, Headline, Location, Current company, Industry, etc.
  - The workflow will populate these columns automatically

### 4. Customize Your ICP

- Use chat to provide the AI Agent with your Ideal Customer Profile
- Example: "Target marketing directors at SaaS companies with 50-200 employees"

### 5. Adjust Scoring Criteria

- Modify the lead scoring prompt in the "Company Score Analysis" node to match your specific product/service
- Tune the evaluation criteria based on your unique business needs

### 6. Configure Message Templates

- Update the AnySite LinkedIn Send Message node with your custom message

## How It Works

1. **ICP Translation**: AI converts your ICP description into LinkedIn search parameters
2. **Lead Discovery**: Workflow searches LinkedIn using these parameters
3. **Data Collection**: Results are saved to Google Sheets
4. **Enrichment**: System collects additional data about each lead:
   - Company website analysis
   - Lead's LinkedIn posts
   - Company's LinkedIn posts
   - Recent company news
5. **Intent Analysis**: AI analyzes all data to identify buying signals
6. **Lead Scoring**: Leads are scored on a 1-10 scale based on likelihood of interest
7. **Connection Requests**: Top-scoring leads receive connection requests
8. **Follow-Up**: When connections are accepted, automated messages are sent

## Customization

- **Search Parameters**: Adjust the AI Agent prompt to refine your target audience
- **Scoring Criteria**: Modify scoring prompts to highlight indicators relevant to your product
- **Message Content**: Update message templates for personalized outreach
- **Schedule**: Configure when connection requests and messages are sent

## Rate Limits & Best Practices

- LinkedIn has connection request limits (approximately 100-200 per week)
- The workflow includes safeguards to avoid exceeding these limits
- Consider spacing your outreach for better response rates

**Note**: Always use automation tools responsibly and in accordance with LinkedIn's terms of service.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, AI Agent, Basic LLM Chain, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
