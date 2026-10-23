# 🎣 Route contact form leads to HighLevel CRM and Slack with JEV AI

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/dmzbxqZRGxs

This workflow captures submissions from an n8n form, syncs the contact to GoHighLevel (GHL), uses BeatAPI (JEV model) to route the lead to sales or partnerships, creates a new GHL opportunity when needed, and notifies the selected team in Slack.

## How it works
1. Receives a new submission from an n8n form that collects name, email, phone number, and the inquiry reason.
2. If an email address is provided, looks up the contact in GoHighLevel by email and creates/updates the contact when no existing contact is found.
3. Sends the lead name and reason to BeatAPI (JEV) to classify the submission as “sales team”, “partnership team”, or “ignore”.
4. For sales or partnership routes, fetches existing GoHighLevel opportunities matching the submitted email and matches them back to the contact by contact ID, phone, or email.
5. If no existing opportunity is found for the routed contact, creates a new GoHighLevel opportunity in the corresponding pipeline and stage.
6. Formats a route-specific Slack message including lead details, classification confidence, and GHL record IDs, then posts it to the appropriate Slack channel.

## Setup
1. Connect your GoHighLevel OAuth2 credentials and update the pipelineId and stageId values to match your sales and partnership pipelines.
2. Add an HTTP Header Auth credential for BeatAPI and ensure the request URL and model name are correct for your account.
3. Connect your Slack credentials and set the correct channel IDs for your sales and partnership notifications.
4. Publish the n8n form and share the form URL with users who will submit inquiries.

## 🔗 Nodes Used

HTTP Request, Slack, HighLevel, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
