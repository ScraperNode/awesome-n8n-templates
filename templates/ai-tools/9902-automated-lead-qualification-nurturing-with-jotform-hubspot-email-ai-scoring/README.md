# 🎯 Automated lead qualification & nurturing with JotForm, HubSpot, Email & AI scoring

> ⚡ **189 views** · 🎯 [AI Summarization & Classification](../)

## Description

![image.png](fileId:3016)

## How it Works

This workflow automates the entire lead qualification process from form submission to personalized follow-up. When a prospect fills out your [JotForm](https://www.jotform.com/), the workflow instantly captures their information, runs it through an intelligent scoring algorithm that evaluates email domain, company size, budget, and timeline to assign a lead score (0-100 points). Based on the score, leads are automatically categorized as Hot (75+), Warm (50-74), or Cold (0-49) and routed accordingly.

Hot leads trigger immediate notifications to your sales team via [Slack](https://slack.com/) with full contact details and qualification notes, while warm and cold leads are routed to marketing for nurture campaigns. All leads are simultaneously logged to HubSpot CRM with custom properties and Google Sheets for tracking and reporting. The workflow then generates personalized follow-up emails based on the lead tier—urgent, action-oriented messages for hot leads and educational, resource-focused content for others—and sends them automatically via SMTP.

The entire process takes seconds from form submission to follow-up, eliminating manual data entry and ensuring no lead falls through the cracks.

---

## Who is this for?

- Sales and marketing teams drowning in manual lead qualification and data entry
- Startups and SMBs needing to respond to leads instantly without a large sales team
- Revenue operations professionals looking to improve lead routing and response times
- Anyone using JotForm for lead generation who wants automated CRM integration

---

## Setup Steps

- Setup time: Approx. 20-30 minutes (credential configuration, field mapping, template customization)
- Requirements:
    - JotForm account with an active lead capture form
    - HubSpot CRM account
    - Google account with a tracking spreadsheet
    - Slack workspace
    - SMTP email provider (Gmail, SendGrid, etc.)

- Configure your JotForm to collect: Name, Email, Company, Phone, Company Size, Budget Range, and Implementation Timeline.
- Set up these nodes:
    - **JotForm Trigger:** Connect your JotForm account and select your lead capture form.
    - **Extract & Format Lead Data:** Map your JotForm field names to workflow variables.
    - **AI Lead Scoring:** Review and adjust scoring weights if needed (optional).
    - **Route by Lead Quality:** Automatically splits leads based on score thresholds.
    - **Add to HubSpot CRM:** Connect HubSpot and create required custom properties (lead_score, lead_tier, budget_range, company_size, timeline).
    - **Log to Google Sheets:** Connect Google account, select spreadsheet, and ensure column headers match.
    - **Slack Notifications:** Connect workspace and select channels for hot leads (sales) and warm/cold leads (marketing).
    - **Generate Personalized Email:** Customize email templates for each lead tier.
    - **Send Email:** Configure SMTP credentials and sender information.

- Credentials must be entered into their respective nodes for successful execution.

---

## Customization Guidance

- **Scoring Algorithm:** Adjust point values for email domain (25), company size (30), budget (25), and timeline (20) in the AI Lead Scoring node based on your priorities.
- **Lead Tier Thresholds:** Modify the 75-point hot lead threshold and 50-point warm lead threshold to match your lead quality distribution.
- **Email Templates:** Edit the JavaScript in the Generate Personalized Email node to include your calendar links, case studies, and value propositions.
- **Field Mapping:** Update the Extract & Format Lead Data node if your JotForm uses different field names.
- **CRM Customization:** Replace HubSpot with Salesforce, Pipedrive, or any other CRM that n8n supports.
- **Notification Channels:** Add additional Slack channels, Microsoft Teams, or SMS notifications via Twilio for different routing scenarios.
- **Additional Enrichment:** Insert data enrichment nodes (Clearbit, Hunter.io) between scoring and CRM creation for enhanced lead profiles.

---

Once configured, this workflow will automatically qualify, score, route, and follow up with every lead—reducing response time from hours to seconds and eliminating manual data entry entirely.

---

**Built by Daniel Shashko**  
[Connect on LinkedIn](https://www.linkedin.com/in/daniel-shashko/)

## 🔗 Nodes Used

Send Email, Google Sheets, Slack, HubSpot, Jotform Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
