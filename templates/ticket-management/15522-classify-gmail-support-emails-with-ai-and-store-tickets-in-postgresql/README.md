# 🎫 Classify Gmail support emails with AI and store tickets in PostgreSQL

> ⚡ **34 views** · 🎫 [Ticket Management & Triage](../)

## Description

This workflow automatically converts incoming Gmail messages into structured support tickets using AI classification. It assigns categories, generates a unique ticket ID, stores data in PostgreSQL, assigns a support agent based on workload, and sends an automated email reply to the customer.

⚙️ How it works
Fetch email from Gmail AI classifies ticket (Payment, Login, Fraud, etc.) Generates unique ticket ID Stores ticket in PostgreSQL Assigns available support agent Logs assignment Sends email confirmation to customer

📦 Requirements
1. n8n (latest version)
2. Gmail OAuth2 credentials
3. PostgreSQL database
4. AI model (Ollama or compatible LLM)
5. Support tables:
6. tickets
7. support_persons
8. ticket_assignment_logs

## 🔗 Nodes Used

Postgres, Gmail, Gmail Trigger, Ollama Model, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
