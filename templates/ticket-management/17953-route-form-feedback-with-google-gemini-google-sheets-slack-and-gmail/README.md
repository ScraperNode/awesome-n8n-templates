# 🎫 Route form feedback with Google Gemini, Google Sheets, Slack and Gmail

> ⚡ **4 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow collects feedback via an n8n Form, uses Google Gemini to classify each message (Bug, Feature, Praise, or Other), then routes it to Google Sheets and Slack; for bugs it also generates an acknowledgement with Gemini and replies via Gmail.

## How it works
1. Receives a feedback submission through an n8n Form that captures the sender’s email address and message.
2. Classifies the feedback text into Bug, Feature, Praise, or Other using the Google Gemini model, with “other” as a fallback category.
3. For Bug reports, appends the submission to a Google Sheets “Bugs” tab, posts an alert to a Slack #bugs channel, generates a short acknowledgement with Google Gemini, and emails the reply to the reporter via Gmail.
4. For Feature requests, appends the submission to a Google Sheets “Feature Ideas” tab.
5. For Praise, posts the message to a Slack #kudos channel.
6. For Other feedback, appends the submission to a Google Sheets “Other” tab for later review.

## Setup
1. Add credentials for Google Gemini (PaLM) API, Google Sheets OAuth2, Slack OAuth2, and Gmail OAuth2.
2. Select your target Google Sheets spreadsheet and ensure it has tabs named (or mapped to) “Bugs”, “Feature Ideas”, and “Other” for the append actions.
3. Choose the Slack channels to receive bug alerts and praise (for example, #bugs and #kudos).
4. Publish the n8n Form and share its URL so users can submit feedback.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Basic LLM Chain, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
