# 👥 Automated course registration evaluation with AI, Gmail, and Google Sheets

> ⚡ **181 views** · 👥 [HR & Recruitment](../)

## Description

📌 Description

Automate your course enrollment process with this workflow that handles student submissions, evaluates eligibility, and sends acceptance or rejection emails — all without manual effort. It's perfect for instructors managing multi-week technical courses who want to streamline onboarding and communication.

⚙️ How It Works

📥 Captures student registration data via an n8n Form Trigger

📊 Evaluates responses (e.g., checks programming background & availability)

📤 Sends automated, personalized acceptance or rejection emails based on criteria

📝 Logs submission outcomes for review

📨 Optionally stores records in Google Sheets, Airtable, or a database (customizable)

🛠️ Set Up Steps

🔗 Connect Gmail (or your preferred email service)

✅ Add your course filtering logic to the decision node (simple JSON rules)

📄 Customize email templates (plain or HTML)

🧪 Test the flow with sample submissions

⏱️ Setup Time: 10–15 minutes (depending on integrations)

🔐 Notes

No hardcoded API keys used – all credentials must be set up using the n8n credential system

Sticky notes inside the workflow provide detailed setup and customization tips

Easily extendable to add payment links, WhatsApp alerts, or CRM integration

## 🔗 Nodes Used

Google Sheets, Google Drive, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
