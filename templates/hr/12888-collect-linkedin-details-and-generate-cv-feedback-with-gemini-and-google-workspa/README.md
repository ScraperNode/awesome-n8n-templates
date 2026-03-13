# 👥 Collect LinkedIn details and generate CV feedback with Gemini and Google Workspace

> ⚡ **53 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

This workflow helps HR teams, career coaches, and training programs collect candidate data and automatically generate CV improvement recommendations and a cover letter draft. Candidates submit their LinkedIn profile URL, contact details, and an optional CV PDF using an n8n Form. The workflow logs submissions, processes the uploaded CV, and generates structured outputs in Google Docs using Gemini, then sends the candidate an email with the results.

## How it works

**Collect candidate data**
An n8n Form captures LinkedIn URL, name, email, phone number, and optional CV upload.

**Store submission**
The workflow appends the submission to Google Sheets for tracking and follow-up.

**Extract CV text**
If a CV PDF is uploaded, it’s processed to extract readable text.

**Generate recommendations**
Gemini creates structured CV/LinkedIn improvement notes and formats them into a Google Doc.

**Draft cover letter + notify**
A second AI step drafts a cover letter and the workflow sends the candidate an email with the generated document link.

**Setup steps**
1. Customize the n8n Form fields (and required/optional fields)
2. Connect Google Sheets for logging submissions
3. Connect Google Drive + Google Docs for file storage and document output
4. Add Gemini API credentials for generation
5. Connect Gmail to send the results email

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, AI Agent, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
