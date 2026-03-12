# 🤝 Sync Gmail sent email contacts with Odoo mailing lists

> ⚡ **62 views** · 🤝 [CRM & Sales Operations](../)

## Description

# Email Contacts Sync from Sent Mailbox to Odoo
This workflow automatically extracts recipient email addresses from previously sent emails, validates and cleans the data, and synchronizes only deliverable contacts into the internal Odoo Mailing List. It also monitors replies and bounce signals to support follow-up and engagement tracking.
## 📌Who is this for?
- Marketing team (Email campaigns)
- CRM / Odoo administrators
- Sales team (follow-up & customer engagement)
- Operations / Automation engineers (n8n workflows)

## 📌The problem
- Customer emails are scattered across sent mail history instead of a centralized list.
- Manually copying recipients into Odoo is slow and error-prone.
- Sent emails may include invalid or bounced addresses.
- Duplicate contacts appear frequently.
- Hard to know which recipients have replied or not for follow-up.


This leads to:
- messy contact database
- high bounce rate
- missed follow-ups
- inefficient manual work

## 📌How it works
- The system calculates the target date and queries the Gmail API to retrieve emails sent within the last X days.
- For each sent email:
         - Extract recipients from the To/Cc fields
         - Normalize data (trim, lowercase, remove duplicates)
         - Check the email thread to detect replies or bounce/system responses

- Each recipient is then classified into one of the following lists:
         - deliverableEmails
         - repliedEmails
         - bounceEmails
         - autoReplies
         - noResponse

- Push the list of deliverable emails to the internal Odoo system as Mailing List Contacts.
- Add emails from the bounce list to Blacklisted Email Addresses in Odoo to prevent future sending.
- (Optional) Log all processing results into Google Sheets for tracking and auditing.

## 📌Quick setup
Required information:
- N8n Version 2.4.6
- Gmail OAuth2 API
- Odoo API-KEY


Google Sheets will be used to log all notified events.

## 📌Results
- Automatically build contact list from real sent emails
- No manual data entry
- Only valid emails stored in Odoo
- Reduced bounce rate
- No duplicates
- Easy follow-up tracking
- Better CRM hygiene and campaign performance

## 📌Take it further
- Auto follow-up if no reply after X days
- Auto-remove hard bounces
- Engagement scoring
- Reply analytics dashboard
- Sync with Loyalty/CRM systems
- Scheduled daily sync

## 📌Need help customizing?
Contact me for consulting and support:
[Linkedin](https://www.linkedin.com/company/bac-ha-software/posts/?feedView=all) / [Website](https://bachasoftware.com/bhsoft-contacts)

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
