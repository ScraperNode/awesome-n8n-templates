# 📊 Create & send GA4 report with insights via email

> ⚡ **1,002 views** · 📊 [Market Research & Insights](../)

## Description

## Who’s it for
Marketing, growth, and analytics teams who want a **decision-ready GA4 summary**—automatically calculated, clearly color-coded, and emailed as a polished HTML report.

## How it works / What it does
- **Get Client (Form Trigger)** collects **GA4 Property ID (“Account ID”)**, **Key Event**, **date ranges (current & previous)**, **Client Name**, and **recipient email**.
- **Overall Metrics This Period / Previous Period (GA4 Data API)** pull sessions, users, engagement, bounce rate, and more for each range.
- **Form Submits This Period / Previous Period (GA4 Data API)** fetch key-event counts for conversion comparisons.
- **Code** normalizes form dates for API requests.
- **AI Agent** builds a **valid HTML email**:  
  - Calculates % deltas, applies **green for positive** (`#10B981`) and **red for negative** (`#EF4444`) changes.
  - Writes summary and recommendations.
  - Produces the **final HTML only**.
- **Send a message (Gmail)** sends the formatted HTML report to the specified email address with a contextual subject.

## How to set up
1) Add credentials: **Google Analytics OAuth2**, **OpenAI** (Chat), **Gmail OAuth2**.  
2) Ensure the form fields match your GA4 property and event names; **“Account ID” = GA4 Property ID**. 
Property ID - https://take.ms/vO2MG
Key event - https://take.ms/hxwQi
3) Publish the form URL and run a test submission.

## Requirements
GA4 property access (Viewer/Analyst) • OpenAI API key • Gmail account with send permission.

## Resources
Google OAuth2 (GA4) – https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic/  
OpenAI credentials – https://docs.n8n.io/integrations/builtin/credentials/openai/  
Gmail OAuth2 – https://docs.n8n.io/integrations/builtin/credentials/google/  
GA4 Data API overview – https://developers.google.com/analytics/devguides/reporting/data/v1

## 🔗 Nodes Used

HTTP Request, Gmail, AI Agent, OpenAI Chat Model, Calculator, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
