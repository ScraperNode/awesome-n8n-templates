# 👥 Automate Resume Analysis & Candidate Screening with JotForm, Azure OCR, GPT-4.1, Zoho CRM

> ⚡ **139 views** · 👥 [HR & Recruitment](../)

## Description

## Who’s It For
This workflow is ideal for HR professionals, recruiters, and small businesses looking to streamline resume screening with AI-powered analysis and CRM integration.

## What It Does
This template automates resume processing by:
- Capturing resume submissions (name, email, PDF) via JotForm.
- Converting PDFs to images using PDF.co API.
- Extracting text with Azure Vision OCR.
- Analyzing resumes with GPT-4.1 for strengths, improvements, and a score (1–100).
- Storing submission data in PostgreSQL.
- Adding high-scoring resumes (&gt;85) to Zoho CRM and sending congratulatory emails.
- Sending feedback emails for lower-scoring resumes.

## How to Set Up
1. **Configure JotForm Trigger**: Add your JotForm API key and form ID (e.g., 252434958811059).
2. **Set Up PostgreSQL**: Create a `resume` table with columns: `id` (SERIAL PRIMARY KEY), `given_name` (VARCHAR), `given_email` (VARCHAR), `resume_loc` (VARCHAR).
3. **Add Credentials**: Store API keys for PDF.co, Azure Vision OCR, OpenAI, Zoho CRM, and Gmail in n8n’s credential system.
4. **Test the Workflow**: Submit a test resume via JotForm and verify data flow through each node.

## Requirements
- n8n instance (cloud or self-hosted).
- Accounts with JotForm, PDF.co, Azure Vision, OpenAI, Zoho CRM, and Gmail.
- PostgreSQL database.

## How to Customize
- Adjust the GPT-4.1 prompt for specific job roles.
- Modify the score threshold (currently 85) in the "if score &gt; 58?" node.
- Update email templates for personalized messaging.

## PostgreSQL Table Structure
&gt; Node to create table included in workflow.

## 🔗 Nodes Used

HTTP Request, Postgres, Jotform Trigger, Gmail, OpenAI Chat Model, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
