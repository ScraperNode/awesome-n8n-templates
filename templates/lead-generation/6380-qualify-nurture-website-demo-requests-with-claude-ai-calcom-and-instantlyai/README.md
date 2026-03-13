# 🎣 Qualify & nurture website demo requests with Claude AI, Cal.com and Instantly.ai

> ⚡ **658 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**An intelligent automation workflow that processes website demo requests, qualifies leads using AI-powered analysis, and automatically nurtures prospects through personalized follow-up sequences to maximize conversion rates.**

## Overview

This workflow transforms raw website leads into qualified prospects through intelligent filtering, enrichment, and personalized nurturing. It combines AI-powered qualification with automated follow-up to ensure high-quality leads receive immediate attention while nurturing those needing additional touchpoints.

---

## 🔄 Workflow Process

### 1. Entry Point - Webhook
**Website form submission capture**
- Receives demo requests from website forms in real-time
- Captures lead data including LinkedIn URL, email, use case, and referral source

### 2. Initial Routing Filter
**Source-based lead classification**
- Filters out low-quality leads from "lead_capture_box" sources
- Routes qualified submissions to enrichment process

### 3. Lead Enrichment
**Comprehensive data enhancement**
- Enriches LinkedIn profile data via Trigify API
- Gathers additional company and professional intelligence

### 4. AI Qualification Engine
**Intelligent prospect evaluation**
- Uses Claude AI to assess lead quality across multiple criteria:
  - B2B company validation
  - Geographic filtering (US, UK, Europe, Australia)
  - Senior-level job titles or strategic keywords
  - Current employment verification

### 5. Booking Verification Check
**Conversion status validation**
- Checks Cal.com API to verify demo scheduling
- Routes booked leads to completion, non-booked to nurturing

### 6. AI-Powered Follow-up Research
**Personalized nurturing preparation**
- Researches prospect's company using AI and web search
- Generates personalized follow-up messaging based on use case and company context

### 7. Email Campaign Integration
**Automated nurturing execution**
- Adds qualified, non-booking leads to Instantly.ai email campaigns
- Includes personalized research for tailored outreach

---

## 🛠️ Technology Stack

- **n8n**: Workflow orchestration
- **Trigify API**: Lead enrichment
- **Claude AI**: Qualification and personalized research
- **Clay**: CRM integration
- **Cal.com API**: Booking verification
- **Instantly.ai**: Email campaign automation

---

## ✨ Key Features

- Real-time lead processing and AI-powered qualification
- Geographic and demographic filtering for market focus
- Automated booking verification and conversion tracking
- Personalized follow-up research and content generation
- Multi-platform integration for seamless lead management

---

## 🎯 Ideal Use Cases

**Perfect for B2B companies with demo-driven sales processes:**

- SaaS companies requiring product demonstrations
- B2B service providers needing qualified prospect identification
- Sales teams managing high-volume inbound lead qualification
- Organizations with international markets requiring geographic focus

---

## 📈 Business Impact

**Transform website visitors into qualified sales opportunities:**

- **Lead Quality Enhancement**: AI filtering ensures only qualified prospects reach sales
- **Conversion Optimization**: Systematic follow-up increases demo booking rates
- **Sales Efficiency**: Automated qualification frees teams for high-value activities
- **Personalized Engagement**: Research-driven follow-up increases response rates

---

## 💡 Strategic Advantage

This workflow creates a sophisticated qualification funnel that combines automation with personalization. By using AI-powered assessment and research-driven follow-up, it ensures qualified prospects receive appropriate attention while preventing resource waste on unqualified leads.

The system maximizes the value extracted from every website visitor by focusing sales efforts on highest-probability opportunities while automatically nurturing prospects who need additional touchpoints to convert.

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Anthropic Chat Model, Structured Output Parser, HTTP Request Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
