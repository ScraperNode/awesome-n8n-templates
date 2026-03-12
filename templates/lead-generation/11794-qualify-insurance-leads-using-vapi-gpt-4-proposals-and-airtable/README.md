# 🎣 Qualify insurance leads using Vapi, GPT-4 proposals and Airtable

> ⚡ **343 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Overview 
This workflow automates the "speed-to-lead" process for insurance agencies. It instantly triggers an AI voice call when a new lead comes in, qualifies their needs via conversation, and automatically generates and emails a personalized insurance proposal (Blueprint) using GPT-4.

## Who’s it for
-Insurance Brokers & Agencies who want to automate the initial outreach and qualification of inbound leads.
-Applicable to any type of Insurance (Life, Health, Home, Auto or bundling )
-Sales Teams who want to filter out unqualified leads and receive detailed call summaries for qualified prospects.
-Any business willing to have a 24/7 virtual assistant that want to qualify potential customers intent and draft proposals.

## How it works
Lead Ingestion: The workflow starts when a potential client submits an n8n web form (Name, Email, Phone Number).
CRM Logging: The lead is immediately created in Airtable .
AI Voice Call: The workflow triggers Vapi.ai to call the lead immediately. The AI agent acts as a representative to gather requirements.
Analysis & Logic:
Once the call ends, Vapi sends the call analysis and transcript back to n8n via a webhook. 
The workflow checks the "Success Evaluation" and ensures a "Type of Insurance" was identified.
Path A: Qualified Lead gets a an insurance blueprint: OpenAI (GPT-4) generates a professional "Insurance Blueprint" email based on the call transcript and client needs (type of insurance the client is seeking).
Email Dispatch: The proposal is sent directly to the client via Gmail.
CRM Update: The Airtable record is updated to "Qualify" with the call summary.
Error Handling: If the email fails to send, a Slack alert is sent to the team with the proposal text for manual follow-up.
Path B: Unqualified Lead
Notification: The team is alerted via Slack with the reason for disqualification.
CRM Update: The Airtable record is updated to "Unqualified." with the call summary.

## Requirements
Vapi.ai Account: For the AI voice telephony (requires a configured Assistant and Phone Number).
OpenAI Account: For GPT-4  or any LLM model of your choice analysis used for proposals writing. Make sure to have enough tokens.
Airtable Account: For lead management.
Gmail Account: To send the proposals.
Slack Account: For internal team notifications.

## How to set up
1. Configure External Services
Airtable: Create a base with a table with a name of your choice. Ensure it has the following columns: Name (Single text), Email (Email), Phone number (Phone/Text), Status (Single Select: Qualify, Unqualified), Type of Insurance (Text), and Call summary (Long Text).
Vapi: Create an Assistant in Vapi. Give the assistant a system prompt according to what you want it to say during the call. Ensure you enable the "Server URL" in the Vapi dashboard to point to the Production URL of the Post call Webhook node in this workflow.
2. Configure Credentials in n8n
Add credentials for Airtable, OpenAI, Gmail, and Slack.
In the Vapi call node, use your credentials or add your Vapi Private API Key to the header (Authorization: Bearer &lt;YOUR_KEY&gt;).
3. Update Node Parameters 
Airtable Nodes: Select your specific Base and Table in both the "Create a record" and "Update record" nodes.
Vapi Call Node: Input your assistantId, phoneNumberId in the JSON body with the actual IDs from your Vapi dashboard and change the  international dialing code.
Slack Nodes: Select the channel where you want notifications sent.

## How to customize the workflow
Change the Persona: Open the Prepare Blueprint (OpenAI) node. Edit the System Message to change the agent's name and Insurance or agency name, tone, or the formatting of the email proposal.
Adjust Qualification Logic: Open the Is Qualified? (If) node. 
You can modify the data Collection by adding   more fields to the Form Trigger (e.g., "State," "Age") and map them through to the Airtable nodes and the Vapi assistant prompt context.
Switch Communication Channels: Replace the Slack  and Gmail nodes with other nodes (e.g., Microsoft Teams, Outlook) depending on your tech stack preferences.

## 🔗 Nodes Used

Airtable, HTTP Request, Slack, Webhook, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
