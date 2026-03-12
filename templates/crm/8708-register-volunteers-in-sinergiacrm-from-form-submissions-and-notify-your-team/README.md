# 🤝 Register volunteers in SinergiaCRM from form submissions and notify your team

> ⚡ **45 views** · 🤝 [CRM & Sales Operations](../)

## Description

Automatically register new volunteers in SinergiaCRM when they submit a form, creating or updating contacts and relationships, and sending a confirmation email to your team.

### Who is this workflow for?
This workflow is ideal for nonprofit organizations that manage volunteer registrations and use **SinergiaCRM** as their CRM system. It helps automate the data entry process, ensuring volunteers are quickly added and tracked in the CRM.

### What it does / How it works
- Triggers when a new volunteer submits a form.
- Checks if the volunteer already exists in SinergiaCRM (matched by NIF).
- If found: adds a “volunteer” relationship to the existing contact.
- If not found: creates the contact and then adds the relationship.
- Sends an email notification to your team with the volunteer’s information.

### Requirements
- A working **SinergiaCRM** instance with the following modules enabled:
  - `Contacts`
  - `stic_Contacts_Relationships`
- The field `stic_identification_number_c` must exist and be used to identify contacts by NIF.
- Active Gmail (or other email provider) integration in n8n.
- Valid OAuth credentials for SinergiaCRM and your email provider.

### How to set up
1. Connect your SinergiaCRM account using OAuth in the credentials section.  
2. Update the recipient email address in the Gmail node.  
3. Ensure your CRM contains the field `stic_identification_number_c`.  
4. Optionally adjust the value of `assigned_user_id` to reflect your CRM configuration.

### How to customize the workflow
- Modify the form fields in the **Form Trigger** node to match your registration form.
- Customize the volunteer relationship parameters (e.g. type or assigned user).
- Change the email content in the **Gmail** node to fit your organization’s tone.
- Replace Gmail with another email node (Outlook, SMTP, etc.) if needed.

📌 Category: **CRM & Customer Management**  
📘 [Learn more about SinergiaCRM](https://sinergiacrm.org)

## 🔗 Nodes Used

Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
