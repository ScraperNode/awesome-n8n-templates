# 🎣 Enrich and score B2B company leads with Clearbit, Hunter.io, and Gemini AI

> ⚡ **9 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Enrich and score company leads with Clearbit, Hunter.io, and Gemini AI

## Who is this for?

Sales teams and B2B marketers who spend hours researching leads manually. If you've looked at Clay but didn't want the $149/month price tag, this workflow does the same job as a one-time n8n template.

## What problem does this solve?

Researching a single lead — finding the right contact, checking the company's reputation, figuring out their tech stack — takes 15-30 minutes per company. Multiply that by 20 leads a day and you've lost your whole afternoon.

This workflow takes a company domain and automatically pulls data from 5 sources, scores the lead with AI, and alerts your team when something promising comes through. What used to take 30 minutes now takes about 15 seconds.

## How it works

1. **Web form** — A sales rep submits a company domain, picks the industry, and sets a priority level
2. **Clearbit enrichment** — Pulls company firmographics: industry, employee count, revenue range, tech stack, social profiles, and location
3. **Hunter.io lookup** — Finds up to 5 verified email contacts at the company and identifies decision-makers (CEO, VP, Director) by seniority
4. **Google Maps check** — Fetches the company's Google rating, review count, and business status
5. **Website scrape** — Hits the company homepage and extracts phone numbers, detects tech stack usage (11 technologies), checks for hiring pages and pricing pages, and pulls social media links
6. **Gemini AI analysis** — Takes all collected data, scores the lead 0–100, assesses ICP fit, writes a personalized outreach opener, and recommends the next action
7. **Google Sheets** — Saves the complete lead record (35+ fields) for pipeline tracking
8. **Slack alert** — If the lead scores 75 or higher, sends an instant notification with the full intelligence report

## What's in the workflow

- **17 nodes** across 8 services: Form trigger, Clearbit (HTTP), Hunter.io (HTTP), Google Maps (HTTP), website scraper (HTTP), code nodes for data processing, Google Gemini AI for scoring, Google Sheets for storage, filter node for hot leads, and Slack for alerts
- **8 sticky notes** documenting each stage of the pipeline
- **5 code nodes** handling: company data parsing and size classification, contact ranking by seniority, reputation scoring, website HTML analysis (phone/tech/hiring/pricing extraction), and final data merging with AI response parsing
- **Trust score system** — 120-point weighted score across domain presence, contacts, revenue data, reputation, and web signals
- **Error handling** — Website scrape continues on failure; AI parsing has fallback defaults

## Setup

1. Add **Clearbit** credentials (Header Auth with Bearer token)
2. Add **Hunter.io** credentials (Query Auth with `api_key`)
3. Add **Google Maps** API key (Places API enabled)
4. Connect **Google Sheets** (OAuth2) and point to your spreadsheet
5. Connect your **Slack** workspace and pick the alert channel
6. Set your **Google Gemini** API key
7. Activate and share the form URL with your sales team

## Key details

- Company size is classified automatically: Startup / SMB / Mid-Market / Enterprise
- The contact finder prioritizes C-level and VP-level contacts by confidence score
- Website tech detection covers: AWS, GCP, Azure, React, Next.js, Python, AI/ML, Kubernetes, SaaS, API, Blockchain
- Hiring signals (careers page, "we're hiring") indicate growth and budget availability
- Pricing page detection suggests the company sells a product — useful for partnership or vendor qualification
- The hot lead threshold (75) is adjustable in the filter node
- Gemini temperature is set to 0.3 for consistent scoring across leads

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Filter, Basic LLM Chain, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
