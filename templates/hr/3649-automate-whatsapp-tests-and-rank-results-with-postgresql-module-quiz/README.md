# 👥 Automate WhatsApp tests and rank results with PostgreSQL (Module "Quiz")

> ⚡ **471 views** · 👥 [HR & Recruitment](../)

## Description

### Who is this for?

This workflow is designed for educators, HR teams, or anyone who needs to create and distribute quizzes or tests via WhatsApp and automatically store and analyze responses in a PostgreSQL database.

### What problem is this workflow solving?

Managing tests or quizzes manually across platforms can be time-consuming and error-prone. This workflow automates the entire process — from test creation to distribution and result collection — providing an efficient way to manage assessments at scale.

### What this workflow does

- Adds test content (including questions and answers) to a PostgreSQL database.
- Allows users to take the test directly via WhatsApp.
- Displays a final ranking to test takers upon completion.

### Setup

#### 1. Create tables in PostgreSQL
- Open the SQL script provided in the workflow.
- Replace `n8n` with your actual database schema name.
- Run the script to set up the required tables.

#### 2. Add required credentials
- **WhatsApp**: Set up OAuth and connect your WhatsApp account.
- **PostgreSQL**: Add your Postgres DB credentials to n8n.

### How to customize this workflow to your needs

- Update the test questions and answers directly in the database.
- Modify the bot flow to suit your test structure or messaging preferences.
- Extend the ranking logic based on specific grading criteria or scoring rules.

## 🔗 Nodes Used

Postgres, WhatsApp Business Cloud, Summarize, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
