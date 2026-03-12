# 💬 Automated KlickTipp to Gmail: send transactional emails

> ⚡ **119 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

![Screenshot 20250909 at 18.53.30.png](fileId:2334)
**Community Node Disclaimer**: This workflow uses KlickTipp community nodes.


### How It Works

**Automate transactional emails from KlickTipp to Gmail**  
This workflow receives contact data from a KlickTipp Outbound rule, generates a personalized HTML email, and sends it via Gmail. Key fields (e.g., first name, company, website, phone, or other custom fields) are dynamically mapped into the body. After sending, the workflow saves the email’s HTML content and writes back an Email delivery status (“Sent” or “Failed”) to the contact in KlickTipp for clear visibility.

### Key Features

**KlickTipp Outbound Trigger**
- Starts when a KlickTipp Outbound rule calls the webhook (e.g., after a tag is applied).
- Accepts payload with recipient email and optional custom fields (first name, company, website, phone, etc.).
- Easy to adapt for confirmations, updates, welcomes, and announcements.

**HTML Email Composer**
- Builds a clean, brandable HTML template with safe fallbacks.
- Supports per-contact personalization via mapped fields.

**Gmail Delivery**
- Sends via Gmail (OAuth) with From/Reply-To, Subject, and HTML body.
- Supports CC/BCC and attachments if needed.

**Delivery Status Write-Back**
- On success: updates a KlickTipp custom field (e.g., **Email delivery status = Sent**).
- On error: updates the same field to **Failed** (error details available in execution logs).

### Setup Instructions

**Install and Configure Nodes**
- Add/enable KlickTipp community nodes and authenticate with valid API credentials.
- Create/authorize a **Gmail** credential (OAuth) and select it in the **Send an email** node.
- Paste/import your HTML into the **Generate HTML template** node.
- Activate the workflow.

### Workflow Logic
1. **Trigger from KlickTipp:** Outbound sends contact data to the workflow.
2. **Generate HTML:** Build personalized HTML (and optional plain-text).
3. **Send via Gmail:** Deliver the message with the Gmail node.
4. **On Success:** Update KlickTipp contact → **Email delivery status: Sent**.
5. **On Error:** Update KlickTipp contact → **Email delivery status: Failed** (see logs for details).

### Benefits
- **Immediate, personalized communication** without manual steps.
- **Consistent branding** with reusable HTML templates.
- **Clear observability** by writing back delivery status to KlickTipp.
- **Flexible & extensible** for many message types beyond payments.

### Testing and Deployment
- Tag a test contact in KlickTipp to trigger the Outbound rule.
- Verify the Gmail email arrives with correct personalization.
- Confirm the **Email delivery status** field updates to **Sent** (or **Failed** for negative tests).
- Review execution logs and adjust field mappings if necessary.

### Notes
- **Customization:** Swap templates, add CC/BCC, attachments, or a plain-text part for deliverability.

## 🔗 Nodes Used

Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
