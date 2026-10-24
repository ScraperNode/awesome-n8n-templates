# 🎣 Qualify website leads with OpenAI and HubSpot and notify via Gmail

> ⚡ **119 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Qualify website leads with OpenAI in HubSpot

## Who’s it for

This workflow is for agencies, consultants, SaaS teams, and service-based businesses that receive inbound leads through a website form and want to qualify them before following up.

It helps you automatically score leads, understand fit and urgency, create or reuse HubSpot contacts, create HubSpot deals, and send an internal Gmail notification with the AI analysis.

## How it works

A webhook receives a website form submission with the lead’s name, email, service, budget, and message.

The workflow prepares the lead data, sends it to OpenAI, and asks the model to return structured JSON with a lead score, fit level, urgency, service category, summary, reason for the score, recommended next step, and suggested follow-up email.

The workflow then checks HubSpot to see if a contact already exists with the submitted email address.

If the contact already exists, it reuses that HubSpot contact. If no contact is found, it creates a new HubSpot contact.

After that, the workflow creates a HubSpot deal, associates it with the contact, sends an internal Gmail notification with the AI qualification summary, optionally applies a Gmail label to the notification email, and returns a success response to the original webhook request.

## How to set up

### 1. Add the required environment variables

This workflow uses environment variables so sensitive values are not hardcoded inside the public workflow JSON.

Add these variables to your n8n environment:

```env
N8N_BLOCK_ENV_ACCESS_IN_NODE=false
HUBSPOT_ACCESS_TOKEN=your_hubspot_private_app_access_token

GMAIL_CLIENT_ID=your_google_oauth_client_id
GMAIL_CLIENT_SECRET=your_google_oauth_client_secret
```

`N8N_BLOCK_ENV_ACCESS_IN_NODE=false` allows this workflow to access environment variables inside nodes.

`HUBSPOT_ACCESS_TOKEN` is your HubSpot private app access token. The workflow uses it in the HubSpot HTTP Request nodes.

`GMAIL_CLIENT_ID` and `GMAIL_CLIENT_SECRET` are used when creating the Gmail OAuth2 credential in n8n.

If you are running n8n with Docker, add these values to your `.env` file or Docker Compose environment config, then restart your n8n container.

### 2. Create a HubSpot private app

In HubSpot, create a private app and give it the required CRM permissions for contacts and deals.

The workflow needs permission to:

- search contacts
- create contacts
- create deals
- associate deals with contacts

After creating the private app, copy the access token and add it to your n8n environment as:

```env
HUBSPOT_ACCESS_TOKEN=your_hubspot_private_app_access_token
```

Do not paste the real token directly into the HTTP Request nodes.

### 3. Connect your OpenAI credential

Open the node named:

```txt
Message a model
```

Then select your own OpenAI credential in n8n.

The workflow uses n8n’s OpenAI credential system, so the actual OpenAI API key is not stored directly inside the workflow JSON.

The template uses:

```txt
gpt-4o-mini
```

You can keep this model or change it to another supported OpenAI model.

### 4. Create and connect your Gmail OAuth2 credential

The Gmail nodes use n8n’s Gmail OAuth2 credential system.

To connect Gmail, create a Google OAuth client in Google Cloud Console, then use the client ID and client secret to create a Gmail OAuth2 credential in n8n.

Use these environment variables for your Google OAuth values:

```env
GMAIL_CLIENT_ID=your_google_oauth_client_id
GMAIL_CLIENT_SECRET=your_google_oauth_client_secret
```

Then connect the Gmail OAuth2 credential to these workflow nodes:

```txt
Send a message
Add label to message
```

The workflow uses n8n credentials, so Gmail OAuth tokens are not stored directly inside the workflow JSON.

### 5. Update the Gmail notification recipient

Open the node named:

```txt
Send a message
```

Replace the recipient email with the email address that should receive the internal lead notification.

The email includes the HubSpot deal summary, AI lead score, fit level, urgency, project details, recommended next step, and suggested follow-up email.

### 6. Update or remove the Gmail label step

The workflow includes an optional Gmail label step.

Open the node named:

```txt
Add label to message
```

Select the Gmail label you want to apply to the notification email.

The original template is designed around a label named:

```txt
Deals
```

You can create a Gmail label named `Deals`, choose a different label, or remove the label step entirely.

If you do not want to use Gmail labels, delete the `Add label to message` node and connect `Send a message` directly to `Respond to Webhook`.

### 7. Update the HubSpot deal stage

Open the node named:

```txt
Prepare HUBSPOT deal payload
```

Find this field in the code:

```js
dealstage: "5030000846"
```

Replace the value with a valid deal stage ID from your own HubSpot pipeline.

This value is account-specific, so the sample value may not work in your HubSpot account.

### 8. Create or rename the HubSpot custom properties

The workflow creates a HubSpot deal with AI qualification data.

It uses these HubSpot deal property names:

```txt
ai_fit_level
ai_followup_email_draft
ai_lead_score
ai_summary
ai_urgency
service_interested_in
recommended_next_step
```

You have two options:

Option 1: Create these custom deal properties in HubSpot.

Option 2: Rename the property names inside the workflow to match custom properties you already have in HubSpot.

These fields are used in the node named:

```txt
Create HUBSPOT deal
```

If these properties do not exist in your HubSpot account, the deal creation request may fail or HubSpot may reject the unknown fields.

### 9. Connect your website form to the webhook

The workflow starts with a webhook.

Send a POST request to the webhook URL with this body format:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "service": "AI Automations",
  "budget": "$10-20K",
  "message": "We want to automate lead qualification and CRM updates for our sales team."
}
```

The workflow expects these field names:

```txt
name
email
service
budget
message
```

If your website form uses different names, update the node named:

```txt
Edit Fields
```

For example, if your form sends `full_name` instead of `name`, update the `fullName` field mapping in the Edit Fields node.

### 10. Test the workflow

Before activating the workflow, test it with a sample webhook request.

Confirm that:

- OpenAI returns valid JSON
- HubSpot finds or creates the contact
- HubSpot creates the deal
- the deal is associated with the correct contact
- Gmail sends the internal notification
- the optional Gmail label works, or the label node is removed
- the webhook returns a success response

## Values you must update after import

After importing the workflow, review and update these values for your own account:

```txt
OpenAI credential
Gmail credential
Gmail notification recipient
Gmail label
HubSpot deal stage ID
HubSpot custom deal properties
Website form webhook URL
Website form field mappings
```

Some exported n8n workflows include internal IDs, credential references, webhook IDs, label IDs, and instance metadata so the workflow remains structurally valid when imported. These are not the same as API keys or access tokens, but you should still update the account-specific values after import.

## Environment variables you must add

```env
N8N_BLOCK_ENV_ACCESS_IN_NODE=false
HUBSPOT_ACCESS_TOKEN=your_hubspot_private_app_access_token

GMAIL_CLIENT_ID=your_google_oauth_client_id
GMAIL_CLIENT_SECRET=your_google_oauth_client_secret
```

## Requirements

- n8n
- OpenAI account
- OpenAI credential connected in n8n
- HubSpot account
- HubSpot private app access token
- HubSpot CRM contacts and deals enabled
- Gmail account
- Google OAuth client ID and client secret
- Gmail OAuth2 credential connected in n8n
- Website form or app that can send POST requests to the n8n webhook

## Security notes

This workflow is designed so sensitive API values are not hardcoded directly into the public workflow JSON.

The HubSpot private app token should be stored as an environment variable:

```env
HUBSPOT_ACCESS_TOKEN=your_hubspot_private_app_access_token
```

The Google OAuth client ID and client secret should be stored as environment variables:

```env
GMAIL_CLIENT_ID=your_google_oauth_client_id
GMAIL_CLIENT_SECRET=your_google_oauth_client_secret
```

The OpenAI API key and Gmail OAuth tokens should be stored inside n8n credentials, not pasted directly into workflow nodes.

Before publishing or sharing your own modified version, search the JSON for private values such as:

```txt
token
secret
apikey
api_key
client_secret
Authorization
Bearer
refresh_token
access_token
password
private_key
```

Account-specific references like credential IDs, webhook IDs, label IDs, deal stage IDs, and instance IDs may appear in exported n8n workflows. These are generally not direct secrets, but users importing the workflow should replace the relevant credentials, labels, recipients, and HubSpot stage values with their own.

## How to customize the workflow

You can customize the AI prompt, scoring rules, service categories, budget ranges, fit level definitions, urgency rules, HubSpot pipeline, HubSpot deal stage, HubSpot custom properties, Gmail notification recipient, and Gmail label behavior.

You can also extend the workflow by adding Slack alerts, sales team task creation, lead routing rules, or automated follow-up sequences for qualified leads.

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
