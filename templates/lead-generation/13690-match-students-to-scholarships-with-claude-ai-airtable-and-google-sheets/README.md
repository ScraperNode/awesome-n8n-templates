# 🎣 Match students to scholarships with Claude AI, Airtable, and Google Sheets

> ⚡ **56 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow ingests student profiles from a form submission or CRM, loads the active scholarship catalogue, uses Claude AI to score each student's eligibility against every available scholarship, filters strong matches, and automatically notifies eligible candidates with personalised application guidance.

### How it works

1. **Trigger** — Form submission webhook or nightly scheduled batch run
2. **Load Student Profile** — Fetches or normalises the student's academic and personal data
3. **Load Scholarship Catalogue** — Pulls active scholarships from Airtable / Google Sheets
4. **Pair Students × Scholarships** — Builds evaluation pairs for AI scoring
5. **AI Eligibility Scoring** — Claude AI scores fit, flags eligibility, ranks scholarships
6. **Parse & Rank Results** — Extracts structured scores, sorts by match strength
7. **Filter Qualified Matches** — Keeps scholarships above configurable match threshold
8. **Check Deadline Urgency** — Flags scholarships closing within 14 days
9. **Personalise Notification** — Builds tailored email per student with top matches
10. **Send Student Email** — Dispatches personalised scholarship digest
11. **Notify Advisor on Slack** — Alerts academic advisor for high-value matches
12. **Update CRM Record** — Writes matched scholarships back to Airtable student record
13. **Log to Audit Sheet** — Appends full match report to Google Sheets
14. **Return API Response** — Returns structured match results to caller

### Setup Steps

1. Import workflow into n8n
2. Configure credentials:
   - **Anthropic API** — Claude AI for eligibility scoring
   - **Airtable** — Student profiles and scholarship catalogue
   - **Google Sheets** — Audit and match history log
   - **Slack OAuth** — Academic advisor notifications
   - **SendGrid / SMTP** — Student notification emails
3. Set your Airtable base ID and table names for students and scholarships
4. Configure match threshold (default: 70) in filter node
5. Set urgency window (default: 14 days) in deadline check node
6. Add your Slack advisor channel ID
7. Activate the workflow

### Sample Webhook Payload
```json
{
  "studentId": "STU-2025-4821",
  "firstName": "Priya",
  "lastName": "Sharma",
  "email": "priya.sharma@university.edu",
  "gpa": 3.8,
  "major": "Computer Science",
  "yearOfStudy": 2,
  "nationality": "Indian",
  "residencyStatus": "International",
  "financialNeed": true,
  "extracurriculars": ["Robotics Club", "Volunteer Tutor"],
  "achievements": ["Dean's List 2024", "Hackathon Winner"],
  "intendedCareer": "AI Research",
  "disabilities": false,
  "firstGenStudent": true
}
```

### Scholarship Criteria Evaluated by Claude AI
- **Academic Merit** — GPA, honours, academic awards
- **Field of Study** — Major/discipline alignment
- **Financial Need** — Demonstrated need indicators
- **Demographic Eligibility** — Nationality, residency, gender, Indigenous status
- **Year of Study** — Undergraduate, postgraduate, PhD level
- **Extracurricular Profile** — Leadership, community service, sports
- **Career Alignment** — Intended career path vs scholarship mission
- **Special Circumstances** — First-gen, disability support, regional background

### Features
- Batch processing of entire student cohort nightly
- AI-powered multi-criteria eligibility scoring (0–100)
- Deadline urgency detection and priority flagging
- Personalised email with ranked scholarship list and tips
- Academic advisor Slack digest for high-value matches
- Full audit trail in Google Sheets
- Airtable CRM auto-update with matched scholarships


**Explore More Automation:**  
[Contact us](https://www.oneclickitsolution.com/contact-us/) to design AI-powered content engagement, and multi-platform reply workflows tailored to your growth strategy.

## 🔗 Nodes Used

Airtable, Send Email, Google Sheets, HTTP Request, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
