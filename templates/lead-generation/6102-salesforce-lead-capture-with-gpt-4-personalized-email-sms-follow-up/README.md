# 🎣 Salesforce lead capture with GPT-4 personalized email & SMS follow-up

> ⚡ **2,143 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## How It Works
This workflow transforms n8n into a smart Web Lead Form alternative to Salesforce's traditional Web-to-Lead, capturing leads, creating Salesforce records, and sending AI-personalized responses via email or SMS.

- **Capture Submission**: User submits form data (name, email, phone, description, preference) via n8n's hosted form.
- **Create Lead**: Maps data to a new Salesforce Lead.
- **Personalize Message**: Uses OpenAI to generate a tailored welcome based on description and preference (detailed for email, concise for SMS).
- **Route Outreach**: Branches to send via Twilio SMS or SMTP email depending on preference.

## Set Up Steps
Setup takes about 15-30 minutes if you have credentials ready. Focus on connecting services; detailed configs are in workflow sticky notes.

- Duplicate this template in n8n.
- Add your Salesforce, OpenAI, Twilio, and SMTP credentials (no hardcoding—use n8n's credential manager).
- Customize form fields if needed and test with sample data.
- Activate and share the form URL on your site.

[n8n Web to Lead Form.json](https://drive.google.com/file/d/1puZgYLD2aKcuyhyTF_C-s_1kCWBwNnLQ/view?usp=sharing)

## 🔗 Nodes Used

Send Email, Twilio, Salesforce, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
