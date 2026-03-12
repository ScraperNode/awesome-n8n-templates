# 👥 Automated HR Service System with WhatsApp, GPT-4 Classification & Google Workspace

> ⚡ **17,865 views** · 👥 [HR & Recruitment](../)

## Description

Who is this for?
This workflow is ideal for HR teams, startups, and enterprises that want to handle employee interactions through WhatsApp and automate responses using LLM (OpenAI) and intelligent routing.

What problem is this workflow solving?
Managing WhatsApp messages manually can be time-consuming and error-prone. This workflow solves that by:

Auto-classifying messages using LLM

Routing them to the right AI-powered agent

Automating leave approvals, attendance, HR FAQs, complaints, and candidate shortlisting

Delivering final responses interactively via WhatsApp

What this workflow does
WhatsApp Trigger captures incoming messages

LLM Classification analyzes message intent and outputs category (1–5)

Switch Node routes the message to the correct agent:

1 → Leave Agent

2 → HR FAQ Chatbot

3 → Attendance Agent

4 → Complaint/Request Agent

5 → Shortlisting Agent

Each agent performs specific tasks using tools like:

Google Sheets (fetch dept head emails, JD/applicants, logs)

Google Calendar (schedule meetings)

Vector Search (for policy embeddings)

OpenAI (transcription, classification, chatbot)

Final WhatsApp Response node sends updates and interactive options to the user

Setup
Connect WhatsApp API (e.g., via Twilio or WhatsApp Business Cloud API)

Configure OpenAI credentials

Set up Google Sheets with:

Employee data

JD and applicants info

Policy documents (for embedding)

Prepare Google Calendar access

Create a vector store with embedded company policy docs

How to customize this workflow to your needs
Update the LLM prompt to suit your company’s categories or expand to more intents

Replace sample sheets with your organization’s actual data

Train your own policy embeddings if needed

Add/modify agents (e.g., Payroll Bot, IT Support Bot) by cloning an existing pattern

Adjust the Switch Node if you add more classifications

With this modular and intelligent setup, you can turn your WhatsApp into a smart HR & operations assistant powered by AI, accessible 24/7.

## 🔗 Nodes Used

Google Sheets, HTTP Request, WhatsApp Business Cloud, AI Agent, Basic LLM Chain, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
