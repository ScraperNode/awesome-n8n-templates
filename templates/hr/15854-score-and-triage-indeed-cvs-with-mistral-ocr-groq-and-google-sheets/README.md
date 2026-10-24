# 👥 Score and triage Indeed CVs with Mistral OCR, Groq, and Google Sheets

> ⚡ **80 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is it for

This template is for **HR teams, recruitment agencies, and startups** that receive job applications via Indeed and want to eliminate manual CV screening. If you're spending hours reading CVs before deciding who to call, this workflow automates that first-pass evaluation entirely.

## What it does

Every time a candidate applies through Indeed, this workflow:

1. Picks up the application email via IMAP and extracts the CV attachment
2. Uploads the CV to a dedicated Google Drive folder (organized by job position)
3. Runs OCR on the PDF using Mistral AI to extract clean text
4. Sends the CV text to Groq (Llama 3.3 70B) for structured analysis
5. Validates the AI output and enforces score/recommendation consistency
6. Appends every candidate to a Google Sheets HR dashboard
7. Sends a formatted HTML email to the recruiter — but only for candidates scoring ≥ 75

Each candidate receives a score from 0 to 100 and one of four recommendations: `REJECT`, `REVIEW`, `INTERVIEW`, or `STRONG_HIRE`. The AI also extracts key skills, years of experience, languages, education, strengths, and weaknesses.

Estimated cost: **~€0.005 per CV** (OCR + LLM combined).

## How to set up

1. Import the workflow into your n8n instance
2. Open the **⚙️ Configuration** node and fill in your values:
   - Google Drive root folder ID
   - Google Sheets ID
   - Recruiter and ops email addresses
   - Score threshold for notifications (default: 75)
   - IMAP subject filter: set it to `Nuova candidatura per` (the subject prefix Indeed uses for Italian accounts — adapt it to your language, e.g. `New application for` for English)
3. Connect your credentials: IMAP, Google Drive OAuth2, Google Sheets OAuth2, Mistral AI, Groq, SMTP
4. Set up a dedicated mailbox to receive Indeed applications
5. Activate the workflow

## Requirements

- n8n (cloud or self-hosted)
- **Mistral AI** API key — used for PDF OCR (`mistral-ocr-latest`)
- **Groq** API key — used for LLM analysis (free tier: 30 RPM)
- Google Drive and Google Sheets OAuth2 credentials
- An IMAP mailbox configured to receive Indeed application emails
- SMTP credentials for outgoing notifications

&gt; For high-volume hiring, a self-hosted n8n instance with queue mode (Redis + PostgreSQL) is recommended to handle parallel CV processing.

## How to customize

- **Change the AI model**: swap the Groq model in the `Groq Chat Model` node (e.g. `mixtral-8x7b`)
- **Adjust the scoring threshold**: update `SCORE_THRESHOLD` in the Configuration node
- **Extend the output**: add Slack or Telegram notifications, auto-create tasks in Asana/Trello, or trigger a rejection email for scores below 30
- **Use a different OCR**: for text-only CVs, replace Mistral OCR with the free `Extract from File` node
- **Change the destination**: Google Sheets can be replaced with Notion, Airtable, Baserow, or a direct PostgreSQL insert

## How Indeed email notifications work

Indeed does **not** offer a public API or webhooks for receiving applications in real time. Instead, every time a candidate applies to one of your job postings, Indeed automatically sends an email notification to your registered employer address — with the CV attached as a PDF.

The subject line follows the format:
&gt; `Nuova candidatura per [Job Title] - [Candidate Name]` (Italian)
&gt; `New application for [Job Title] - [Candidate Name]` (English)

This workflow connects to that mailbox via IMAP, polls it every minute for unseen emails matching that subject prefix, downloads the CV attachment, and kicks off the automation. No manual steps required.

&gt; **Tip:** use a dedicated mailbox (e.g. `applications@yourcompany.com`) forwarded from your Indeed account to keep things clean and avoid false positives.

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, Google Sheets, HTTP Request, Google Drive, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
