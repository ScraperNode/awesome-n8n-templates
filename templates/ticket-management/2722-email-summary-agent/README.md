# 🎫 Email summary agent

> ⚡ **81,514 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Problem
Teams often struggle with email overload, leading to missed actions and inefficient meeting preparation.

## Solution
This workflow automates email management using n8n and AI. It fetches emails, summarizes key points and actions, and sends two concise updates—one in the morning and one at night.

## How It Works

- Triggers at 7 AM and 9 PM: Automates the process to summarize emails received during specific time blocks.

- Fetches Emails: Retrieves emails from the last 24 hours or after a specific time.

- Summarizes with AI: Uses OpenAI to process the email content into actionable summaries.
Sends Team Updates: Compiles the summaries into a concise, formatted email and sends it to the team.

## Expected Results
Significant reduction in missed actions and follow-ups. 

## Customizations
Adjust timings, filters, and recipients to suit your team’s needs.

## 🔗 Nodes Used

Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
