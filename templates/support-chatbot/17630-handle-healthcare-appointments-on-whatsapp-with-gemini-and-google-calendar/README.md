# 💬 Handle healthcare appointments on WhatsApp with Gemini and Google Calendar

> ⚡ **356 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow uses the WhatsApp Cloud API, Google Gemini, Google Calendar, PostgreSQL, Redis, and Google Sheets to run an AI appointment assistant that answers scheduling questions, checks availability, books/reschedules/cancels appointments, and escalates conversations to a human when required.

## How it works
1. Triggers when a new WhatsApp message update is received.
2. Accepts only text messages, validates the WhatsApp profile name, and generates a consistent conversation identifier from the sender’s WhatsApp ID.
3. Checks Redis to see whether the conversation is currently escalated to a human and stops automated handling if an escalation record exists.
4. Uses Google Gemini with PostgreSQL chat memory to interpret the request and decide whether to answer a question, check availability, book, reschedule, cancel, or escalate.
5. When scheduling actions are needed, the agent reads clinic/FAQ data from Google Sheets and uses Google Calendar to retrieve availability, create events, update events, or delete events.
6. Sends the agent’s final reply back to the patient via WhatsApp.

## Setup
1. Connect WhatsApp Cloud API credentials for both the WhatsApp Trigger and WhatsApp send nodes, and set your Phone Number ID for sending messages.
2. Add a Google Gemini (PaLM) API credential and select the models used by the primary and fallback chat models.
3. Connect a Google Calendar account and choose the target calendar(s) in the availability and event create/update/delete actions.
4. Set up PostgreSQL credentials for chat memory storage and ensure the database is reachable from n8n.
5. Set up Redis credentials for escalation locking, and update the “Create A Link” step with your instance base URL used to generate the human-resolution link.
6. Connect Google Sheets OAuth credentials and update the spreadsheet ID/sheet tab used as the workflow’s structured knowledge source.

## Requirements
- WhatsApp Business Account
- WhatsApp Cloud API
- Google Gemini API
- Google Calendar
- PostgreSQL
- Redis

## Customization
- Business name
- Working hours
- Available services
- AI system prompt
- Google Calendar
- Human escalation rules

## Additional info
Designed by Ciphernutz IT Services, this production-ready template demonstrates AI-powered conversational automation, persistent memory, and real-world appointment scheduling workflows. It can be adapted for healthcare clinics, dental practices, salons, and consulting businesses.

Ciphernutz builds AI agents, intelligent workflow automations, and custom software solutions that help businesses streamline operations and scale efficiently.

Explore our solutions and services: https://ciphernutz.com/

## 🔗 Nodes Used

Redis, WhatsApp Business Cloud, Execute Workflow Trigger, AI Agent, Code Tool, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
