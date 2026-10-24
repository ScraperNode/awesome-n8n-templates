# 👥 Onboard frontline workers via Telegram using DeepSeek and Notion

> ⚡ **2 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow automates onboarding of hourly and frontline staff entirely through Telegram.Employees submit ID documents, which AI reads and verifies automatically. Notion tracks status as a live HR dashboard. Handles policy acknowledgment, manager notifications, and daily reminders for anyone stuck mid-onboarding, no manual document checking or HR login required.

## How it works
1. Triggers on every incoming Telegram message and routes it based on whether the message is /start, a document/photo upload, the word AGREE, or something else.
2. For /start, it searches a Notion database by the sender’s Telegram chat ID and either creates a new onboarding record and sends a document checklist, or sends a “welcome back” message with the current status.
3. For a document or photo, it downloads the file from Telegram and branches based on whether it is a PDF or an image.
4. It extracts text from PDFs or base64-encodes images, then sends the content to DeepSeek (chat/completions) to return structured JSON with document details and a readability verdict.
5. It updates the worker’s Notion record with the extracted summary and sets the status to Docs Verified or Docs Submitted, then uploads and attaches the original file to the Notion page via Notion’s file upload API.
6. It replies in Telegram with a policy summary and prompts the worker to respond with AGREE to continue.
7. For AGREE, it updates the Notion status to Policy Acknowledged, sends the worker a shift schedule message, and notifies the manager in Telegram.
8. Runs daily at 9am, fetches Notion records still in Started or Docs Submitted for more than 48 hours, then nudges the worker and alerts the manager in Telegram.

## Setup
1. Create and connect a Telegram bot credential in n8n, and update the manager Telegram chat ID used in the manager notification messages.
2. Create a Notion integration and connect it in n8n, then point the Notion nodes at your database ID and ensure it has the required properties (ChatId, Status, OnboardingDate, DocsSubmittedAt, Notes, and Name).
3. Add an HTTP Header Auth credential for Notion (using the same integration secret) for the file upload API requests.
4. Add an HTTP Header Auth credential for DeepSeek and ensure the API key is sent to https://api.deepseek.com/chat/completions.
5. Replace placeholders in the Telegram messages (for example, the shift details, manager name, and manager contact) to match your onboarding process.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Notion, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
