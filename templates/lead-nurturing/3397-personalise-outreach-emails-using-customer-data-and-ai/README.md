# 💬 Personalise outreach emails using customer data and AI

> ⚡ **3,177 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

### This n8n template uses existing emails from customers as context to customise and "finetune" outreach emails to them using AI.

By now, it should be common knowledge that we can leverage AI to generate unique emails but in a way, they can remain generic as the AI lacks the customer context to be truly personalised. One way to solve this is by pulling in a source of customer data - and what better way then by using existing email correspondence.

### How it works
* Customers to target are pulled from Hubspot and each customer is then run in a loop. We're using a loop as the retrieved emails for each customer become separate items and a loop helps with item reference.
* We connect to our Gmail account to pull all emails recieved from the customer.
* The contents of the email will be suitable to build a short persona of the customer. We use the Information Extractor to get our AI model to pull out the key attributes of this persona such as decision making style and communication preferences.
* With this persona, we can now pass this to our AI model to generate a personalised outreach email specifically for our customer.
* Finally, a draft email is created for human review before sending. If you would rather send the email straight away, this is also possible.

### How to use
* Define the topic of the outreach email in the "variables" node. This directs the AI on what outreach email to generate.
* Ensure the emails are pulled from the right account. If emails may contain sensitive data, adjust the filters and text parsing to ensure these are not leaked to the AI (which might then leak into the generated email).

### Requirements
* Hubspot for Contacts List
* OpenAI for LLM
* Gmail for Existing Emails and Sending Emails

### Customising this workflow
* Not using Hubspot? Any CRM would work just as well or even a simple text csv!
* If you have customer past deals or engagements in your CRM, consider using this as additional context for the AI to use.

## 🔗 Nodes Used

HubSpot, Gmail, Google Gemini Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
