# 🔬 Check Japanese ad copy compliance with Google Gemini, Sheets, Slack and Gmail

> ⚡ **15 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow runs daily to review Japanese ad copy in Google Sheets using Google Gemini, writes compliance risk results back to the sheet, and alerts the right team in Slack (and drafts a Gmail revision request) based on high/medium/low risk.

## How it works
1. Runs every day at 9:00 on a schedule.
2. Reads ad copy rows from Google Sheets to find items that still need a compliance check.
3. Sends each copy item to Google Gemini with the configured product category, target laws, and extra rules to generate a risk level, violations, and a compliant rewrite.
4. Parses and normalizes the Gemini output into fields like risk level, violation count, and safe rewrite, and posts a Slack alert if the AI check fails.
5. Updates the corresponding Google Sheets row with the compliance results to keep a record of the review.
6. Routes the item by risk level and posts to Slack for legal blocking (high), marketing review (medium), publish-ready notification (low), or manual review when the result is inconclusive.
7. For high-risk copy, also creates a Gmail draft requesting the author to revise the copy using the suggested compliant rewrite.

## Setup
1. Add credentials for Google Sheets, Google Gemini (PaLM) API, Slack (OAuth2), and Gmail (OAuth2).
2. Select your Google Sheets document and “Ad Copy” sheet in both the read and update steps, and ensure it contains columns like “Copy ID” and “Copy.”
3. Ensure your sheet has a way to identify unchecked vs checked rows (for example a Status column that the workflow can mark after processing).
4. Set the product category, target laws, and extra compliance rules in the review-policy configuration step.
5. Choose the Slack channels to use for legal review and marketing notifications, and set the Gmail draft’s recipients as needed.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
