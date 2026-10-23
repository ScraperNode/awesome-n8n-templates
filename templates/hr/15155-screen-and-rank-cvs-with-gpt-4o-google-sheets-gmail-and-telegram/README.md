# 👥 Screen and rank CVs with GPT-4o, Google Sheets, Gmail and Telegram

> ⚡ **32 views** · 👥 [HR & Recruitment](../)

## Description

## How it works
- Candidate submits CV via web form (PDF or DOCX)
- Workflow extracts and prepares CV text automatically
- GPT-4o scores the CV against configurable job requirements
- Ranked shortlist generated — HR notified via Telegram
- Full audit trail saved automatically in Google Sheets

## Set up steps
- Import all 3 workflow JSON files into n8n (10 min)
- Add credentials: OpenAI, Google Sheets, Telegram
- Configure job requirements in the settings node
- Submit a test CV via webhook URL

## Requirements
- n8n instance (cloud or self-hosted)
- OpenAI API key
- Google account
- Telegram bot token
- ## Part of the CV Screening Agent system

- 👉 CV Screening — Comparative Report: https://n8n.io/workflows/15288

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Gmail, Extract from File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
