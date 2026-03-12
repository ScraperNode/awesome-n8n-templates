# 🎣 Create Leads in SuiteCRM, synchronize with Brevo and notify in NextCloud

> ⚡ **1,833 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Who is this template for?
This workflow template is designed for **Marketing** and pre-**Sales** to get prospects from a form like Tally, decline data in the famous opensource CRM (SuiteCRM), synchronize contact in Brevo with linking the id from CRM, and then notify in NextCloud.

Bonus : validate email with ++CaptainVerify++ and notify in NextCloud depending on response

## How it works
For each submission in the form, a webhook is triggered.
A check of the email is done with CaptainVerify. Depending on the response, and if it is ok, then a Lead is created in SuiteCRM. Else, a message in your selected discussion is sent.
As the lead has been created, we can create a contact in Brevo (for future campain), ank link this contact with the lead_id from the CRM in a dedicated field.
Finaly, a message in your selected discussion in NextCloud informs you about the lead.

## Set up instructions
Complete the Set up credentials step when you first open the workflow. You'll need a CaptainVerify account (Api Key), a dedicated SuiteCRM user with Oauth, a Brevo account (Api Key) and a Nextcloud account.
Set up the Webhook in the form's tool of your choice (why not Tally ?).
Set each node with the explanations in sticky Notes.
Enjoy !

Template was created in n8n **v1.44.1**

## 🔗 Nodes Used

HTTP Request, Brevo, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
