# 👥 Automate CV screening and applicant scoring from Gmail to Airtable with AI

> ⚡ **760 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### How It Works
1. **Trigger**
   Watches for new emails with attachments in a Gmail label.
2. **Extract Data**
   * Extracts job code from the email subject (e.g., `FN-001`)
   * Extracts raw text from the attached CV (PDF)
3. **AI Parsing**
   Uses Google Gemini to parse the CV and extract:
   * Name
   * Email
   * Years of experience
   * Skills
4. **Job Lookup**
   Uses the extracted job code to retrieve job details from Airtable.
5. **AI Scoring**
   * Compares applicant data with job requirements
   * Scores from 1–100
   * Generates a brief reasoning summary (in Bahasa Indonesia)
6. **Log to Airtable**
   Saves applicant data, score, and AI notes to the "Applications" table.

### Setup Instructions
1. **Prepare Airtable Base**
   * **Job Posts Table**
     * Columns: Job Code, Job Title, Required Skills, Minimum Experience, Job Description
   * **Applications Table**
     * Columns: Applicant Name, Email, Score, Notes
     * Include a linked field to the Job Posts table
2. **Add Credentials in n8n**
   * Gmail
   * Google AI (Gemini)
   * Airtable
3. **Configure Nodes**
   * **Trigger**: Set Gmail filter (e.g., `label:job-applications`)
   * **Extract Job Code**: Verify regex format, default is `([A-Z]{2}-\d{3})`
   * **Airtable Nodes**: Select your base and table in:
     * "Find Job Post..."
     * "Save Applicant..."
4. **Activate Workflow**
   * Save and enable the workflow
   * New applications will be processed automatically

## 🔗 Nodes Used

Airtable, Gmail Trigger, Basic LLM Chain, Structured Output Parser, Extract from File, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
