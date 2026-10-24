# 🎫 Triage and route AI-powered support tickets with Google Gemini, Trello, and Gmail

> ⚡ **27 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
Automate support ticket triage with Google Gemini, Trello, Gmail, and Google Sheets. The workflow validates ticket scope, classifies and prioritizes requests with AI, looks up customer data, creates Trello cards, and requires human approval before sending the final response to the customer.

## How it works
1. Receives a new support request submitted via an n8n form.
2. Uses Google Gemini guardrails to detect jailbreak or out-of-scope submissions and stops processing when the request is not a valid support ticket.
3. Uses a Google Gemini AI agent to look up the customer by email in Google Sheets, classify the ticket (category/priority/team), and draft an HTML response in a structured JSON format.
4. Creates a Trello card for the ticket in the New Tickets list and applies a priority label based on the AI classification.
5. Sends an approval email via Gmail with the AI summary and proposed HTML reply, and waits for an approve/reject decision.
6. If approved, sends the AI-generated response to the customer via Gmail and moves the Trello card to Resolved by AI.
7. If rejected, moves the Trello card to Manual Review for a human follow-up.

## Setup
1. Add credentials for Google Gemini, Trello, Google Sheets, and Gmail in n8n.
2. Update the Google Sheets document ID/sheet reference in the customer lookup tool and ensure your sheet has an "email" column and a plan/tier column the AI can use.
3. Replace the Trello placeholders with your board ID, list IDs (New Tickets, Resolved by AI, Manual Review), and label IDs for critical/high/medium/low priorities.
4. Replace the approver email address in the Gmail approval step and optionally adjust the sender name used for the customer reply.
5. Customize the AI agent system message (for example, replace “[Your Company Name]” and adjust categories, priorities, teams, or language behavior).

## 🔗 Nodes Used

Trello, Gmail, AI Agent, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
