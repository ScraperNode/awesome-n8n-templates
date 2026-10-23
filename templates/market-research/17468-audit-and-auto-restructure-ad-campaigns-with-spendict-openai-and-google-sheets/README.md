# 📊 Audit and auto-restructure ad campaigns with Spendict, OpenAI, and Google Sheets

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow collects an ad campaign build brief via an n8n form, audits the structure with Spendict, and automatically rewrites failing builds with OpenAI before re-auditing, then logs the outcome to Google Sheets and posts the verdict to Slack.

## How it works
1. Receives a campaign build brief through an n8n form submission (platform, objective, and free-text campaign structure).
2. Sends the brief to Spendict’s audit API to score the structure and return a launch recommendation with prioritized fixes.
3. Routes the flow based on Spendict’s launch recommendation, passing “sound” builds through as-is.
4. For builds that need changes, sends Spendict’s prioritized fixes to the OpenAI Chat Completions API to generate a revised campaign structure in JSON.
5. Parses the revised structure and re-audits it with Spendict to produce an updated score and verdict.
6. Appends the final result (original or auto-restructured) to Google Sheets and posts a summary message to Slack via an incoming webhook.

## Setup
1. Add a Spendict API key via HTTP Header Auth (Authorization: Bearer …) and apply it to both Spendict HTTP requests.
2. Add an OpenAI API key via HTTP Header Auth (Authorization: Bearer …) for the OpenAI Chat Completions request.
3. Connect Google Sheets credentials and select the target spreadsheet and sheet in the append step.
4. Create a Slack Incoming Webhook and replace the placeholder webhook URL in the Slack request.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
