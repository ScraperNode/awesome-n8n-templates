# 🎣 Automate lead generation with Apollo, AI scoring and Brevo email outreach

> ⚡ **1,819 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# AI Scoring, Personalized Email Creation and Outreach

## Overview

This comprehensive automation flow helps you scale your outreach to potential customers through intelligent personalized email campaigns. The system combines web scraping, AI-powered lead scoring, and automated email sequences to maximize your conversion rates.

### Key Features
- **Intelligent Website Analysis** with automated scraping
- **AI-Powered Lead Scoring** for prioritization
- **Personalized Email Generation** using AI
- **Automated Email Outreach** with tracking
- **Real-time Event Monitoring** via Brevo webhooks
- **Centralized Data Management** with NocoDB

### System Architecture
The workflow integrates multiple platforms to create a seamless lead generation pipeline:
- **NocoDB** - Central database and CRM
- **Crawl4AI** - Website content analysis
- **OpenAI** - Lead scoring and email personalization
- **Brevo** - Email delivery and tracking

---

## Setup Requirements

### Prerequisites
Before starting, ensure you have accounts for the following services:
1. **NocoDB** (Database & CRM)
2. **Apify** (Web scraping platform)
3. **OpenAI** (AI processing)
4. **Brevo** (Email delivery service)

&gt; **💡 Pro Tip:** For advanced users, consider self-hosting NocoDB and Crawl4AI to significantly reduce operational costs.

---

## Step-by-Step Setup

### 1. NocoDB Database Configuration

#### Create Your NocoDB Account
1. Sign up at [nocodb.com](https://nocodb.com)
2. Create a new workspace
3. Set up your first base (database)

#### Database Schema Setup
Create a new table with the following field structure:

| Field Name | Field Type | Configuration |
|------------|------------|---------------|
| `first_name` | Single Line Text | - |
| `last_name` | Single Line Text | - |
| `email` | Email | - |
| `headline` | Single Line Text | - |
| `linkedin_url` | URL | - |
| `industry` | Single Line Text | - |
| `organization_name` | Single Line Text | - |
| `organization_website` | URL | - |
| `organization_size` | Number | - |
| `organization_linkedin_url` | URL | - |
| `organization_facebook_url` | URL | - |
| `market_cap` | Single Line Text | - |
| `job_title` | Single Line Text | - |
| `country` | Single Line Text | - |
| `city` | Single Line Text | - |
| `lead_status` | Single Select | Options: `entered`(make it default!), `processed`, `email_created`, `contacted`, `trash`, `failed_to_process`, `opened_email`, `warm` | Default Value: `entered`
| `website_summary` | Long Text | - |
| `score` | Number | Default: 0 |
| `organization_description` | Long Text | - |
| `primary_phone` | Phone Number | - |
| `keywords` | Single Line Text | - |
| `email_subject` | Single Line Text | - |
| `email_body` | Long Text | - |
| `email_opened_times` | Number | Default: 0 |
| `personal_email` | Single Line Text | - |

### 2. External Service Setup

#### Apify Configuration
1. Create account at [apify.com](https://apify.com)
2. Navigate to **Settings** → **API tokens**
3. Generate new API token
4. Save token securely for automation setup

#### OpenAI API Setup
1. Visit [platform.openai.com](https://platform.openai.com)
2. Go to **API Keys** section
3. Create new secret key
4. Store API key securely
5. Ensure billing is configured for API usage

#### Brevo Email Service
1. Sign up at [brevo.com](https://brevo.com)
2. Complete account verification
3. Navigate to **SMTP & API** settings
4. Generate API key for integration
5. Configure sender authentication (SPF/DKIM)

---

## Workflow Process

### Phase 1: Lead Discovery & Data Collection
1. **Data Import** - Populate NocoDB with lead information
2. **Status Update** - Mark leads as `entered`

### Phase 2: Website Analysis & Lead Scoring
1. **Website Scraping** - Analyze company websites using Crawl4AI
2. **Content Processing** - Extract key business information
3. **AI Scoring** - Evaluate lead quality using OpenAI
4. **Database Update** - Store analysis results and scores

### Phase 3: Email Personalization & Outreach
1. **Content Generation** - Create personalized email content
2. **Email Preparation** - Format messages for delivery
3. **Automated Sending** - Deploy via Brevo
4. **Status Tracking** - Monitor delivery and engagement

### Phase 4: Performance Monitoring
1. **Webhook Processing** - Capture Brevo email events
2. **Engagement Tracking** - Update open/click metrics
3. **Lead Qualification** - Adjust lead status based on engagement
4. **Pipeline Management** - Maintain lead progression

---

## Lead Status Workflow

```
entered → processed → email_created → contacted → opened_email → warm
    ↓
failed_to_process / trash (for low-quality leads)
```

### Status Definitions
- **entered**: Initial lead data captured
- **processed**: Website analyzed and scored
- **email_created**: Personalized email generated
- **contacted**: Email successfully sent
- **opened_email**: Recipient opened the email
- **warm**: High engagement, ready for follow-up
- **failed_to_process**: Technical issues during processing
- **trash**: Low-quality lead, removed from active pipeline

---

## Best Practices

### Data Quality
- Regularly clean and deduplicate your lead database
- Monitor lead scores to refine your targeting criteria
- Archive or remove inactive leads to maintain performance

### Email Deliverability
- Warm up your sending domain before high-volume campaigns
- Monitor bounce rates and adjust list quality
- Implement proper SPF, DKIM, and DMARC records

### Compliance
- Ensure GDPR/CAN-SPAM compliance in all communications
- Provide clear unsubscribe mechanisms
- Respect recipient preferences and opt-outs

### Performance Optimization
- A/B test email subject lines and content
- Analyze open rates and adjust sending times
- Segment leads based on engagement levels for targeted follow-up

---

## Next Steps

Once your setup is complete, you'll have a powerful, automated lead generation system that can:
- Process hundreds of leads simultaneously
- Provide intelligent lead prioritization
- Generate personalized outreach at scale
- Track and optimize campaign performance

Ready to transform your lead generation process? Start with the NocoDB setup and work through each integration step by step.

## 🔗 Nodes Used

HTTP Request, NocoDB, Brevo, Brevo Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
