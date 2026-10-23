# 💬 Recover lost GoHighLevel deals with OpenAI, Gmail, and Google Sheets

> ⚡ **2 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow runs daily to pull recently lost opportunities from GoHighLevel, evaluates timing/engagement/objection signals, and uses OpenAI to choose a recovery action. It then sends a winback email via Gmail, logs outcomes to Google Sheets, or escalates uncertain cases to a manager.

## How it works
1. Runs every morning on a schedule.
2. Queries the GoHighLevel (LeadConnector) Opportunities Search API for lost opportunities in a specific location and pipeline, then keeps only those whose status changed within the last 24 hours.
3. Calculates three signals per deal: how long the deal was open (timing), whether the contact shows engagement or opt-out tags (engagement), and whether a lost reason is present (objection).
4. Sends the deal details and signals to an OpenAI chat model to select one recovery action and, when appropriate, generate a short winback email.
5. Sends the winback email to the contact via Gmail when the selected action is SEND_WINBACK_OFFER.
6. Appends the deal, chosen action, reasoning, and an optional follow-up date to a Google Sheets recovery log for follow-ups and do-not-contact outcomes.
7. Emails a manager via Gmail with the deal context and AI reasoning when the selected action is ESCALATE_TO_MANAGER.

## Setup
1. Create a GoHighLevel Private Integration token and configure the HTTP header auth as `Authorization: Bearer <token>`, then set your `location_id` and `pipeline_id` query values.
2. Add OpenAI credentials for the Chat Model used by the AI agent.
3. Connect a Gmail account for sending the winback and manager escalation emails, and update the sender name and manager email address in the email steps.
4. Connect Google Sheets credentials, select the target spreadsheet and sheet, and ensure the sheet has columns for Date, Deal ID, Deal Name, Contact, Email, Action, Follow Up Date, and Reasoning.
5. Update the engagement tag values (for “still warm” and “opted out”) to match the tags used in your GoHighLevel account.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
