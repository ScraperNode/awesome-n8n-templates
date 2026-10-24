# 📱 Draft Discord announcements with Google Gemini, approve in Slack, and log to Google Sheets

> ⚡ **1 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick Overview
This workflow collects an update and tone via an n8n form, uses Google Gemini to draft a short Discord announcement, sends it to Slack for approval, and then either posts it to Discord via webhook and logs it to Google Sheets or logs it as discarded.

## How it works
1. Receives an announcement request from an n8n form submission with the update text and selected tone.
2. Uses Google Gemini to generate a Discord-ready announcement (max 90 words) based on the provided update and tone.
3. Sends the draft to a Slack channel with “Post it” and “Discard” approval buttons and waits for a decision.
4. If approved, posts the announcement to Discord using the channel’s webhook URL.
5. Appends a “Posted” entry to a Google Sheets worksheet, or if posting to Discord fails, alerts the same Slack channel.
6. If disapproved, appends a “Discarded” entry to the Google Sheets worksheet without posting anything to Discord.

## Setup
1. Add credentials for Google Gemini (PaLM) API, Slack OAuth2, and Google Sheets OAuth2.
2. Create a Discord channel webhook and paste its URL into the Discord webhook HTTP request step.
3. Select the Slack channel used for approvals (for example, #social-approvals).
4. Select the target Google Sheets document and the worksheet (for example, “Announcements”) to store the posted/discarded log.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Basic LLM Chain, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
