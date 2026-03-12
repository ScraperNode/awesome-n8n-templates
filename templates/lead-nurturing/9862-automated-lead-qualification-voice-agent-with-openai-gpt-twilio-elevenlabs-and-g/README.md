# 💬 Automated lead qualification voice agent with OpenAI GPT, Twilio, Elevenlabs and Gmail

> ⚡ **1,172 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## What is this?

### This workflow is a Lead Qualification Voice Agent automation template built in n8n. It automates the process of qualifying leads by initiating outbound calls, analyzing call transcripts, updating lead data, and sending follow-up emails. The workflow integrates Google Sheets, OpenAI, and Twilio (via ElevenLabs API) to streamline lead management for sales or customer success teams.

## 1. Initiate Call
### Purpose: This step starts the lead qualification process by detecting new leads and preparing to contact them.
### How it works:
- The workflow is triggered when a new lead is added to your data source (such as a new row in Google Sheets, using the “Google Sheets Trigger” node).
- The trigger node captures essential lead information (e.g., name, phone number, service of interest) from the new entry.
- The workflow then prepares a personalized call script or opener, often using an AI node (like OpenAI) to generate a friendly and relevant introduction based on the lead’s details.
- An outbound call is initiated to the lead’s phone number using a telephony integration node (such as HTTP Request to ElevenLabs or Twilio).
### Note:
- Ensure your trigger node is correctly set up to monitor the right data source and columns.
- Configure the telephony node with valid API credentials and the correct phone number field.
- Optionally, customize the AI prompt to tailor the call opener to your business context.

## 2. Fetch Client Data
### Purpose: This step retrieves detailed information about the lead from your data source (such as a CRM, database, or Google Sheets).
### How it works:
- The workflow uses a data retrieval node (such as Google Sheets, HTTP Request, or a database node) to fetch client details based on a unique identifier (like phone number or email) captured in the trigger step.
- The node is configured to query the data source for all relevant fields, such as the lead’s name, company, previous interactions, and any custom attributes important for your qualification process.
- The fetched data is then made available to subsequent nodes, allowing for dynamic personalization of the call script and follow-up actions.
### Note:
- Ensure your data source is up-to-date and contains all necessary fields for lead qualification.

## 3. Outbound Call Processing
### Purpose: To manage the workflow after the outbound call is initiated, including handling call results, analyzing transcripts, and updating lead status.
### How it works:
- After the call is placed (using a telephony integration node), the workflow waits for the call to complete. This can be achieved using a webhook node (if your provider supports callbacks) or a polling node to check call status.
- Once the call is finished, the workflow retrieves the call outcome (e.g., answered, voicemail, failed) and, if available, the call transcript.
- The transcript can be sent to an AI node (like OpenAI) for analysis—such as extracting intent, sentiment, or key information discussed during the call.
- Based on the analysis, the workflow updates the lead’s status in your data source (e.g., marking as “Qualified,” “Needs Follow-up,” or “Unreachable”).
- Optionally, the workflow can trigger additional actions, such as sending a follow-up email, notifying a sales rep, or logging the interaction in your CRM.

### Note:
- Use webhook nodes for real-time call result processing if your telephony provider supports it.
- Log all call results and analysis for future reference and reporting.

## Prerequisities
- OpenAI
- Google Sheets
- Twilio
- Elevenlabs: 
  - Import the twilio number into Elevenlabs
  - Set up an agent in Elevenlabs
  - Set up prompt into Elevenlabs
  - Set up webhooks for fetch client initiation data and post call data


## Customization
- Change Data Source: Swap the Google Sheets node for another data source (e.g., Airtable, MySQL) as needed.
- Modify Call Script: Edit the OpenAI prompt to generate different call openers or scripts based on your use case.
- Adjust Call Logic: Modify the outbound call node to use a different telephony provider or to handle call scheduling.
- Notification Options: Integrate with email, chat, or notification services to alert your team of qualified leads.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Google Sheets Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
