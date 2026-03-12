# 👥 AI-powered HR screening automation via Jotform

> ⚡ **510 views** · 👥 [HR & Recruitment](../)

## Description

## Who's it for

- HR professionals and recruitment teams handling high application volumes
- Startup founders and hiring managers seeking to scale hiring efficiently
- Companies wanting consistent, objective candidate evaluation
- Teams spending 20+ hours per week on manual resume screening

## What it does

- Receives job applications automatically via Jotform webhook
- Downloads and parses resume PDFs using LlamaParse AI extraction
- Analyzes candidate qualifications with OpenAI GPT-4 (compatibility score, strengths, concerns, technical skills)
- Routes candidates into three categories based on AI score (1-10 scale)
- Sends personalized HTML emails: interview invitations for strong candidates (7-10), status updates for moderate (5-6), respectful rejections for weak matches (1-4)
- Generates detailed HR briefing emails for top candidates with interview questions and focus areas
- Completes full screening process in under 2 minutes per application

## How it works

- Jotform trigger captures new submissions with resume attachments
- HTTP requests fetch submission data and download PDF files
- LlamaParse extracts text from resume PDFs with status checking loop
- OpenAI AI Agent analyzes resume and cover letter, outputs structured JSON assessment
- JavaScript code parses AI output into usable data fields
- Switch node routes candidates to appropriate email path based on score
- Gmail nodes send customized HTML emails to candidates and HR team
- All processing happens automatically without manual intervention

## Set up requirements

- **Jotform account** with API key (form fields: name, email, phone, position, start date, interview preference, cover letter, resume upload)
- **LlamaCloud account** with API key for PDF parsing
- **OpenAI API key** with GPT-4o-mini access
- **Gmail OAuth2** credentials for sending emails
- Estimated setup time: 25-30 minutes
- Cost: ~$0.05-0.10 per application processed

## How to customize

- **Email templates**: Replace all placeholders (company name, HR manager, contact details, interview format, social links)
- **AI evaluation**: Edit AI Agent prompt to match your job requirements and scoring criteria
- **Score thresholds**: Adjust Switch node conditions to change candidate category ranges (default: 7+ strong, 5-6 moderate, &lt;5 weak)
- **Additional features**: Add Google Sheets logging, Slack notifications, calendar booking, or ATS integration
- **Branding**: Update HTML email colors, fonts, and styling to match company brand
- **HR notifications**: Change recipient email from default to your HR manager's address

## 🔗 Nodes Used

HTTP Request, Jotform Trigger, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
