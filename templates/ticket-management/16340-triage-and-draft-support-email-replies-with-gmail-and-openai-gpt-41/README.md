# 🎫 Triage and draft support email replies with Gmail and OpenAI GPT-4.1

> ⚡ **162 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow monitors a Gmail inbox for unread support emails, uses OpenAI-powered multi-agent triage to route each message to a billing, technical, or account specialist, and then creates a drafted reply back in the same Gmail thread for human review.

## How it works
1. Triggers every minute when a new unread email arrives in Gmail.
2. Extracts and normalizes the sender email address, subject line, plain-text body, and Gmail thread ID.
3. Sends the email content to an OpenAI-based orchestrator that assigns priority and routes the request to exactly one specialist (Billing, Technical, or Account).
4. The selected specialist uses OpenAI to draft a domain-appropriate customer reply, while the orchestrator returns a structured result including category, priority, draft_reply, and whether human handling is needed.
5. Creates a Gmail draft reply using the generated text and attaches it to the original thread with a “Re:” subject for review before sending.

## Setup
1. Connect a Gmail OAuth2 credential for both the Gmail Trigger (reading unread emails) and Gmail node that creates the draft reply.
2. Add an OpenAI API credential for the orchestrator model and each specialist model.
3. (Optional) Adjust the Gmail Trigger filters (for example, restrict to a specific support label) to control which emails are triaged.

## 🔗 Nodes Used

Gmail, Gmail Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser, AI Agent Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
