# 💬 Qualify and personalize sales leads with GetProspect, DeepSeek, and Instantly

> ⚡ **36 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow runs every 6 hours to pull unprocessed contacts from GetProspect, uses DeepSeek via an n8n AI Agent to qualify targets and generate a personalized email hook, updates the contact in GetProspect, and pushes qualified leads into an Instantly campaign.

## How it works
1. Runs every 6 hours on a schedule.
2. Searches GetProspect for contacts where the custom “processed” field is not set to “Yes”, then loads full details for each contact.
3. Normalizes the contact and company fields and sends them to a DeepSeek-powered AI Agent to decide whether the contact is a target based on title and company size.
4. Parses the AI output as JSON, updates the contact in GetProspect with “processed”, “is_target”, and “reasoning”, and categorizes results based on target status and email verification status.
5. For qualified targets with a valid email, sends the profile summary and/or company description to DeepSeek to generate a one-sentence personalization hook.
6. Parses the hook output as JSON and creates/updates the lead in Instantly by adding it to the specified campaign with the generated personalization.

## Setup
1. Add your GetProspect API key in the GetProspect HTTP Request nodes and ensure your contacts schema includes the “processed”, “is_target”, and “reasoning” properties.
2. Add your DeepSeek API credentials in the DeepSeek Chat Model node.
3. Add your Instantly API key in the Instantly HTTP Request node and replace UPDATE_YOUR_CAMPAIGN_ID with your target Instantly campaign ID.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, DeepSeek Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
