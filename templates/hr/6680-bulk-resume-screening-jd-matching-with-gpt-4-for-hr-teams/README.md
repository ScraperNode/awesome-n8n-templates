# 👥 Bulk resume screening & JD matching with GPT-4 for HR teams

> ⚡ **3,217 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.

## Description

# TalentFlow AI – Bulk Resume Screening with JD Matching
[![Watch the video](https://s3.ap-southeast-1.amazonaws.com/automatewith.me/resume-screening-automation-workflow.jpg)](https://www.youtube.com/watch?v=MD1krFvVKdU)
Automatically extract, evaluate, and shortlist multiple resumes against a selected job description using GPT-4. This smart, scalable n8n workflow helps HR/TA teams streamline hiring decisions while keeping results structured, auditable, and easy to share.

---

## 👤 Who’s it for

This workflow is designed for:
- HR or Talent Acquisition (TA) teams handling **multiple candidates** per role
- Recruiters who want **AI-assisted resume screening** to save time and reduce bias
- Organizations that want to **automatically log evaluations** and keep stakeholders updated in real-time via Slack or Sheets

---

## ⚙️ How it works / What it does

1. HR/TA uploads multiple candidate resumes and selects a job role
2. Each resume is:
   - Uploaded to Google Drive
   - Parsed with GPT-4 to extract structured profile data
3. The job description for the selected role is:
   - Retrieved from Google Sheets
   - Downloaded from Drive and parsed
4. The profile + JD are sent to an AI agent to generate:
   - Fit score
   - Strengths & gaps
   - Final recommendation
5. Results are:
   - Appended to the evaluation tracking sheet
   - Optionally shared with the hiring team on Slack
   - Used to trigger emails to qualified or unqualified candidates

---

## 🛠️ How to set up

1. **Clone or import the workflow** into your n8n instance
2. **Connect your integrations**:
   - Google Sheets (positions & evaluation form)
   - Google Drive (CV & JD folders)
   - OpenAI API (GPT-4)
   - Slack (for notifications)
   - (Optional) SendGrid or SMTP for email notifications
3. **Update Google Sheets structure**:
   - `Positions` sheet: maps Job Role → JD file link
   - `Evaluation form`: stores evaluation results
4. **Prepare Drive folders**:
   - `/cv` folder for uploaded resumes
   - `/jd` folder for job description PDFs

---

## 📋 Requirements

- ✅ n8n (hosted or self-hosted)
- ✅ OpenAI GPT-4 account (used in Profile & JD evaluator agents)
- ✅ Google Drive + Google Sheets access
- ✅ Slack workspace + bot token
- (Optional) SendGrid or email credentials for candidate follow-up

---

## 🎨 How to customize the workflow

- Change the **fit score threshold** in the `Candidate qualified?` node
- Edit Slack message content/formatting to match your company tone
- Add additional candidate metadata to Sheets or Slack messages
- Use a webhook trigger to integrate with your ATS or job board
- Swap GPT-4 with Claude or Gemini if you prefer other AI services
- Expand to include multi-position batch screening logic

---

Happy Hiring! 🚀  
_Automated with love using [n8n](https://n8n.io)_

## 🔗 Nodes Used

Google Sheets, Slack, Google Drive, SendGrid, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
