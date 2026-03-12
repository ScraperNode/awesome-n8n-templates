# 👥 Provision new hires in Google Workspace, Slack, Notion, Gmail and Sheets with AI

> ⚡ **28 views** · 👥 [HR & Recruitment](../)

## Description

## Employee Onboarding Automation with Multi-System Provisioning

### What this workflow does

This workflow automates the end-to-end employee onboarding process by provisioning new hires across multiple internal systems and delivering a personalized welcome experience.

Upon receiving new employee data via a webhook or form submission, it creates user accounts in Google Workspace, invites the employee to Slack, sets up a Notion onboarding page, generates an AI-powered welcome package, and notifies relevant stakeholders. All onboarding activities are logged for tracking and audit purposes.

This template helps HR and People Operations teams reduce manual work, ensure consistency, and deliver a smooth onboarding experience from day one.

---

### How it works

1. **Employee data intake**
   - Triggered by a webhook or form submission.
   - Collects employee details such as name, email, department, role, start date, and manager.

2. **Data preparation**
   - Generates a company email address.
   - Assigns a unique onboarding ID.
   - Standardizes employee information for downstream systems.

3. **Parallel account provisioning**
   - Creates a Google Workspace user account.
   - Sends an invitation to the Slack workspace.
   - Creates a dedicated Notion onboarding page.
   - Executes these steps in parallel to minimize onboarding time.

4. **Provisioning result compilation**
   - Consolidates account creation statuses.
   - Produces a single onboarding summary object.

5. **AI-powered welcome package**
   - Generates:
     - A personalized welcome message
     - A suggested first-week schedule
     - Practical tips for success in the role
   - Formats content for email delivery.

6. **Notifications & communication**
   - Sends a welcome email to the employee (if a personal email is provided).
   - Notifies HR or People Ops via Slack.
   - Logs onboarding details to Google Sheets.

7. **Webhook response**
   - Returns a structured JSON response confirming onboarding initiation.

---

### Setup requirements

Before activating this workflow, ensure the following are configured:

- Enable the webhook endpoint and connect it to your form or HR system.
- Configure Google Workspace Admin API access.
- Set up Slack workspace permissions for user invitations.
- Define a parent Notion page for onboarding content.
- Prepare Google Sheets for onboarding logs.
- Customize email templates, departments, and org unit paths as needed.

---

### Required credentials

This workflow requires the following credentials to be configured in n8n:

- **Google API** (Google Workspace user provisioning)
- **Slack** (workspace invitations and HR notifications)
- **Notion** (onboarding page creation)
- **OpenAI** (AI-generated welcome content)
- **Gmail** (sending welcome emails)
- **Google Sheets** (onboarding tracking and logs)

---

### Customization ideas

- Add role-based access provisioning (VPN, GitHub, Jira, etc.).
- Delay account creation until a specific start date.
- Generate localized onboarding content by region or language.
- Integrate with HRIS tools such as BambooHR or Workday.
- Add approval steps for managers or IT before provisioning.

---

### Who this is for

- HR & People Operations teams  
- IT & Identity management teams  
- Startups and scaling organizations  
- Companies seeking consistent, automated onboarding  

---

This template provides a scalable, repeatable onboarding foundation that connects HR systems, IT provisioning, and AI-driven communication into a single automated workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
