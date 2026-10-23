# 🎣 Match brands with influencers using GPT‑4.1, Google Sheets and SendGrid

> ⚡ **52 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow automatically matches brands with high-converting influencers by analyzing audience insights, engagement patterns, niche alignment, and historical conversion metrics — then delivers a ranked shortlist with detailed match rationale.

### Who's it for
• Brand managers launching influencer campaigns
• Marketing agencies managing multiple brand clients
• Growth teams running performance-driven influencer programs

### How it works / What it does
1. Accepts brand requirements via webhook (industry, audience, budget, KPIs)
2. Pulls influencer data from CRM / database or a Google Sheet roster
3. AI analyzes niche alignment, audience overlap, and engagement quality
4. Python scoring engine ranks influencers by conversion probability
5. Filters are applied based on brand budget and minimum thresholds
6. AI generates match rationale and performance predictions
7. Delivers ranked report via email and logs results to Google Sheets

### How to set up
1. Import this workflow
2. Configure credentials (Gmail/SendGrid, Google Sheets, OpenAI/Anthropic)
3. Populate your influencer data source (Google Sheet or CRM webhook)
4. Activate workflow and POST brand requirements to the webhook URL

### Requirements
• Webhook endpoint (or manual trigger for testing)
• Google Sheets (influencer roster + results tracker)
• OpenAI / Anthropic / Grok API key
• SendGrid or Gmail for delivery

### How to customize
• Adjust scoring weights in the Python node
• Change AI tone/output format in the AI nodes
• Add more filter criteria in the Filter node
• Extend the Google Sheet schema with additional columns

Want a custom workflow designed for your business? Our specialists can build it for you in no time—[Get in touch with our team](https://www.oneclickitsolution.com/contact-us/)

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
