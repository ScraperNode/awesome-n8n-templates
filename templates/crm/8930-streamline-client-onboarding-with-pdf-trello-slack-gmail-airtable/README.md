# 🤝 Streamline client onboarding with PDF, Trello, Slack, Gmail & Airtable

> ⚡ **229 views** · 🤝 [CRM & Sales Operations](../)

## Description

# Automated Client Onboarding Workflow

This n8n workflow automates the **end-to-end client onboarding process**: capturing client details, validating emails, assigning tiers, generating welcome packs, creating tasks, notifying teams, archiving records, and sending weekly reports.

---

## Who’s It For
- **B2B SaaS companies** onboarding new customers  
- **Agencies** handling structured client setups  
- **Sales & customer success teams** needing automation  
- **Consulting firms** aiming for error-free onboarding  

---

## ⚙️ How It Works
1. **Capture client details** through a Webhook (connected to forms).  
2. **Validate client’s email** using Verifi Email.  
3. **Log onboarding data** into Google Sheets.  
4. **Assign tier logic** (Basic/Pro/Enterprise) via Function node.  
5. **Create a Trello task card** with onboarding steps.  
6. **Generate a personalized Welcome Pack PDF** with client details.  
7. **Send Slack notification** to internal team with client details.  
8. **Download and attach PDF**, then **send personalized welcome email** to the client.  
9. **Archive structured onboarding data** in Airtable.  
10. **Weekly scheduled report**:
   - Collects Airtable onboarding data  
   - Processes weekly stats (plans, tiers, counts)  
   - Sends onboarding summary via email to the manager  

---

## 🛠️ How to Set Up
1. **Webhook Setup**  
```POST → https://[your-n8n-url]/webhook/client-onboarding ```
2. **Install & configure credentials:**  
- Verifi Email key  
- Google Sheets OAuth2  
- Airtable OAuth2  
- Gmail OAuth2  
- Slack OAuth2  
- Trello API  
3. **Optional:** Customize the Welcome PDF template (HTML/CSS).  
4. **Edit tier assignment logic** inside the `Assign Tier Logic` node.  
5. **Modify Slack & email templates** to match your branding.  
6. **Adjust schedule** for weekly reports (default: Monday 9 AM IST).  
7. **Test with sample payload:**  
```json
{
  "name": "Jane Doe",
  "email": "jane@acme.com",
  "company": "Acme Corp",
  "plan": "Pro"
}
```
## 📋 Requirements
- Self-hosted or Cloud n8n  
- Credentials: Verifi Email, Google Sheets, Airtable, Gmail, Slack, Trello 
- Optional: API for company enrichment 

⚠️ **Note:** The `HTML/CSS to PDF` node (used for report generation) has a **limit of 10 free requests**. For production usage, you’ll need an API plan.  

## ⭐ Core Features
- **Email Validation**: Blocks fake/spam signups - **Tier Assignment**: Auto-classifies clients into Basic/Pro/Enterprise 
- **Task Management**: Trello cards for onboarding checklist
- **Welcome PDF Pack**: Branded, client-personalized PDF attachment 
- **Slack Notifications**: Real-time internal updates 
- **Airtable Archiving**: Permanent record-keeping 
- **Weekly Reports**: Automated onboarding summaries for managers 

---

## 📈 Use Cases & Applications
- **B2B SaaS**: Scale client onboarding without hiring more staff  
- **Agencies**: Deliver smooth onboarding experiences  
- **Sales Teams**: Reduce delays in CRM entry  
- **Customer Success**: Focus on relationship-building instead of admin  

---

## ✅ Key Benefits
- Saves 5–6 hours of manual onboarding per client  
- Ensures error-free onboarding with email validation 
- Provides a professional, branded experience 
-  Improves collaboration with Slack + Trello integration 
- Scales seamlessly as client volume grows

---

## 🔧 Customization Options
- Modify **tier logic** (e.g., budget, plan, company size) 
- Customize **Slack channel** or **Trello list** for task routing 
- Update **PDF branding** (logo, theme, styling) 
- Add extra onboarding steps (e.g., Calendly call scheduling) 
- Extend weekly reports (e.g., include ROI or CSM notes) 

---

## ⚠️ Important Disclaimers
- For educational & automation purposes 
- Ensure compliance with **GDPR/CCPA** before storing client data 
- Always test workflow with dummy data before production

---

## Workflow Components

- **Webhook Trigger** → Captures client form submissions
- **Verifi Email** → Validates client email
- **Google Sheets** → Logs onboarding entries
- **Code Node** → Assigns tier & priority
- **Trello** → Creates task card for CSM
- **HTML/CSS to PDF** → Generates Welcome Pack PDF
- **Slack** → Notifies team about new client
- **Gmail** → Sends welcome email with PDF
- **Airtable** → Archives full onboarding record
- **Schedule Trigger** + **Report** → Weekly summary to management

## 🔗 Nodes Used

Airtable, Google Sheets, HTTP Request, Slack, Trello, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
