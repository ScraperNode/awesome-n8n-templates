# 👥 Automate HR Q&A sessions with AI question clustering and Google Calendar integration

> ⚡ **1,958 views** · 👥 [HR & Recruitment](../)

## Description

This workflow helps HR teams run smoother **monthly Q\&A sessions** with employees.

* **Who’s it for**
  HR teams and managers who want to centralize employee questions, avoid duplicates, and keep meetings focused.

* **How it works**

1. Employees submit questions through a styled form.
2. Questions are stored in a database.
3. HR selects a date range to review collected questions.
4. An AI Agent deduplicates and clusters similar questions, then generates a **meeting script** in Markdown format.
5. The Agent automatically creates a **Google Calendar event** (with a Google Meet link) on the **last Friday of the current month at 16:00–17:00**.
6. The script is returned as a downloadable `.txt` file for HR to guide the session.

* **Requirements**

  * MySQL (or compatible DB) for storing questions
  * Google Calendar credentials
  * OpenAI (or another supported LLM provider)

* **How to customize**

  * Adjust meeting day/time in the `Set` node expressions
  * Change database/table name in MySQL nodes
  * Modify clustering logic in the AI Agent prompt
  * Replace the form styling with your company’s branding

This template ensures **no repeated questions**, keeps HR **better prepared with a structured script**, and **automates meeting scheduling** in just one click.

## 🔗 Nodes Used

MySQL, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
