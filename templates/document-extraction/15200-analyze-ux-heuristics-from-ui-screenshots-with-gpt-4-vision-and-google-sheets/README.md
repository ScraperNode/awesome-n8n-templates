# 🔬 Analyze UX heuristics from UI screenshots with GPT-4 Vision and Google Sheets

> ⚡ **168 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow evaluates website or app screenshots against established UX best practices (Nielsen's 10 Heuristics, WCAG accessibility guidelines, and mobile usability standards) and delivers prioritized, actionable improvement suggestions with severity ratings.

### Who's it for
• UX designers seeking automated design audits
• Product managers reviewing UI quality pre-launch
• Agencies conducting client UX audits at scale
• Developers wanting accessibility compliance checks
• Startups running lean without a dedicated UX team

### How it works / What it does
1. Accepts screenshot(s) via webhook upload crawl
2. Classifies the UI type (web app, mobile, landing page, dashboard, e-commerce)
3. Encodes image and sends to vision AI for heuristic analysis
4. Evaluates against 10 Nielsen heuristics + WCAG + mobile standards
5. Scores each heuristic category (0–10) and calculates overall UX score
6. Generates prioritized, actionable improvement suggestions per finding
7. Delivers a structured report via email and logs results to Google Sheets

### How to set up
1. Import this workflow
2. Configure credentials (OpenAI with vision, SendGrid, Google Sheets)
3. Set your brand/product context in the Set UX Config node
4. Activate and submit screenshots via the webhook endpoint

### Requirements
• OpenAI API key with GPT-4 Vision access
• Google Sheets (for audit log)
• SendGrid or Gmail (for report delivery)
• Screenshot files (PNG/JPG) or publicly accessible URLs

### How to customize the workflow
• Add or remove heuristic categories in the AI prompt node
• Adjust severity thresholds in the Set UX Config node
• Extend the Google Sheet columns to include client or project metadata
• Chain multiple screenshots for full-flow UX audits

Want to improve productivity with a custom-built workflow? Our specialists can deliver it fast—[Get in touch with our team](https://www.oneclickitsolution.com/contact-us/)

## 🔗 Nodes Used

HTTP Request, Webhook, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
