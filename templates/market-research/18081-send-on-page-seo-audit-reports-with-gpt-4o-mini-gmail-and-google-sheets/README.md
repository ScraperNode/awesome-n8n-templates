# 📊 Send on-page SEO audit reports with GPT-4o-mini, Gmail, and Google Sheets

> ⚡ **24 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Submit any URL through a form and get a scored on-page SEO audit in your inbox. Twelve deterministic checks (title and meta lengths, H1s, alt text, canonical, robots.txt, sitemap) compute a real baseline score — then AI writes the consultant narrative, rewrites and five quick wins on top.

## How it works
1. Anyone pastes a URL and their email into a shareable form.
2. The workflow fetches the page's real HTML — and if the site is down or blocks the request, the requester gets a polite failure email instead of silence.
3. It extracts the signals that matter (title, meta description, headings, image alt text, canonical URL, body copy) and checks robots.txt for a declared sitemap.
4. Twelve deterministic checks run in plain code first, producing a pass/warn/fail table and a baseline score out of 100 that can't be hallucinated.
5. AI writes the consultant-grade narrative on top of the verified numbers: rewritten title and meta, heading and content review, and the five highest-impact quick wins.
6. The report lands as clean HTML email, and every delivered audit is appended to a Google Sheets history.

## Setup
1. Connect an OpenAI (or compatible) credential in SEO Audit AI Model.
2. Connect your Gmail account in Email the Audit Report and Email the Failure Notice — one click each on n8n Cloud.
3. Create a spreadsheet with columns Date, Page URL, Score, Failed checks, Sent to and select it in Log the Audit History.
4. Activate the workflow, open Request an SEO Audit → Test URL, and submit a page with the email address the report should go to.

## Requirements
- OpenAI (or compatible) API key; Gmail account; a Google Sheet for the audit history with columns Date, Page URL, Score, Failed checks, Sent to.

## Customization
- The twelve checks live in one Code node — add Open Graph, structured-data or agency-framework checks and the score adapts; add your branding to the report; batch-audit a URL list from Sheets; deliver to Slack instead of email.

## Additional info
The score can't be hallucinated — lengths and counts are computed in code and the AI is instructed to trust the table, not re-count. Unreachable sites email the requester a failure notice, and every audit is logged to a Sheets history. The form is shareable — embed it as a lead magnet and every submission captures an email address.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Markdown, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
