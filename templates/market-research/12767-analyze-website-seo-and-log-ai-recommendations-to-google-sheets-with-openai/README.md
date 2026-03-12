# 📊 Analyze website SEO and log AI recommendations to Google Sheets with OpenAI

> ⚡ **133 views** · 📊 [Market Research & Insights](../)

## Description

**Analyze website SEO issues and generate optimization actions with AI**

**Author:** Hyrum Hurst, AI Automation Engineer at QuarterSmart  
**Contact:** hyrum@quartersmart.com  

This workflow provides a fully automated, AI-powered SEO analysis system designed to turn any website URL into a structured set of **clear, actionable optimization recommendations**. Instead of relying on manual audits, browser extensions, or generic SEO tools, this automation programmatically inspects a page’s core on-page elements and uses AI to translate raw data into practical next steps.

The workflow is built for **repeatability, scale, and operational use** inside agencies, internal marketing teams, and consulting environments. Results are logged, scored, and routed automatically so teams can focus on execution rather than analysis.

---

## What this workflow does

When a URL is submitted, the workflow:

- Fetches the full HTML content of the page
- Extracts critical SEO-relevant elements such as:
  - Page title
  - Meta description
  - Heading hierarchy (H1–H6)
  - Internal and external links
  - Image tags and alt text
- Sends the extracted data to an AI model for structured analysis
- Generates **specific, prioritized SEO recommendations**, including:
  - Keyword optimization opportunities
  - Title and meta description improvements
  - Heading structure fixes
  - Internal linking suggestions
  - Content clarity and relevance improvements
- Assigns an overall optimization score to the page
- Logs all results to Google Sheets for tracking, reporting, and comparison over time
- Sends summaries or alerts to Slack or email when critical issues are detected

This creates a hands-off SEO assistant that can be run on demand, scheduled, or integrated into larger automation systems.

---

## How it works (high level)

1. A URL is submitted via a Manual Trigger or Webhook  
2. An HTTP Request node fetches the page HTML  
3. HTML parsing nodes extract structured on-page elements  
4. An AI model analyzes the extracted content and generates recommendations  
5. A Set node formats the output into clean, readable fields  
6. Google Sheets stores the audit results for reporting and history  
7. A Switch node routes results based on severity or score  
8. Slack and/or email nodes notify stakeholders when action is required  

The workflow is modular and can easily be extended with additional checks, scoring logic, or integrations.

---

## Use cases

This template is applicable across many industries and workflows, including:

- **Digital marketing agencies**  
  Run fast, consistent SEO audits for client websites and landing pages.

- **SEO consultants and freelancers**  
  Automate recurring audits and deliver structured recommendations at scale.

- **Ecommerce businesses**  
  Analyze product pages and category pages for discoverability improvements.

- **SaaS companies**  
  Optimize landing pages, feature pages, and pricing pages for search traffic.

- **Content teams and bloggers**  
  Improve on-page SEO without manual checklists or tooling overhead.

- **Web development agencies**  
  Validate SEO readiness before site launches or migrations.

- **Local businesses**  
  Continuously monitor service pages for SEO health and optimization gaps.

- **Real estate, travel, and hospitality websites**  
  Improve visibility of listings, booking pages, and informational content.

---

## Why this workflow is useful

- Eliminates repetitive manual SEO checks  
- Produces standardized, actionable output  
- Works across unlimited URLs and clients  
- Easy to customize for different SEO frameworks  
- Ideal for automation-first teams and agencies  

This workflow is designed to act as a **practical SEO operations layer**, not just an analysis tool.

---

For setup support, customization, or help integrating this workflow into your agency or internal systems, contact **Hyrum Hurst**, AI Automation Engineer at **QuarterSmart**, at **hyrum@quartersmart.com**.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
