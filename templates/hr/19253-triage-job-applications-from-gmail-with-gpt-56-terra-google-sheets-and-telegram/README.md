# 👥 Triage job applications from Gmail with gpt-5.6-terra, Google Sheets, and Telegram

> ⚡ **18 views** · 👥 [HR & Recruitment](../)

## Description

Job applications that sort themselves. This workflow watches a Gmail label for candidate emails, uses OpenAI (gpt-5.6-terra) to classify each message and draft a reply, logs every thread in Google Sheets, and routes applications to your hiring manager for approval while sending urgent and failure alerts to Telegram.

*Last updated: September 2026.*

## Quick Overview
This workflow watches a Gmail label for candidate emails, uses OpenAI (gpt-5.6-terra) to classify the message and draft a reply, logs each thread to Google Sheets, routes applications to a manager approval email, and sends urgent/failed-flow alerts to Telegram.

## How it works
1. Triggers every minute when a new Gmail message arrives under the specified label.
2. Extracts and normalizes key email fields (thread ID, sender, subject, snippet) and skips automated senders like no-reply/notifications.
3. Looks up the thread ID in a Google Sheets applicant_log to avoid processing duplicate threads.
4. Uses OpenAI (LangChain agent) to classify the email (application/question/other), assess sentiment, and generate a short draft reply and suggested subject, and alerts Telegram if the AI output is malformed.
5. Generates an approval token, builds an approval link, and appends the email details, AI results, and status to Google Sheets.
6. Sends applications to the hiring manager by email with the draft reply and approval link, while non-applications get an automatic email reply to the sender.
7. Sends a Telegram alert if an application is marked negative or urgent, and notifies Telegram if the workflow errors.

## Setup
1. Connect Gmail Trigger credentials, create a Gmail label for incoming applications, and paste the label ID into the trigger filter.
2. Create a Google Sheet with an applicant_log tab (thread_id, sender, subject, category, sentiment, draft_reply, status, approval_id, received_at) and set RECRUITMENT_LOG_URL in your [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) environment.
3. Add an OpenAI credential for the LangChain chat model and select the model you want to use.
4. Configure an SMTP/Email Send credential and set COMPANY_EMAIL and MANAGER_EMAIL environment variables for outbound messages.
5. Create a Telegram bot and chat, add Telegram credentials, and set TELEGRAM_CHAT_ID (and APPROVAL_BASE_URL for the approval link).

### Quick Answers
**How fast does it pick up new applications?**
The Gmail trigger checks every minute for new messages under the configured label.

**What does the AI actually do?**
It classifies each email (application, question, or other), assesses sentiment, and drafts a short reply with a suggested subject.

**How are duplicates avoided?**
Each thread ID is looked up in the Google Sheets applicant_log before processing, so the same thread is not handled twice.

**Where do applications end up?**
Applications are sent to the hiring manager by email with an approval link, while non-applications get an automatic email reply to the sender.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Send Email, Google Sheets, Telegram, Gmail Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
