# 🔬 Generate medical reports from emails with Gemini AI & Google Workspace

> ⚡ **871 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# **📝 Description:** 
This template is designed for healthcare providers, sales reps, and medical tourism companies who need to process diagnosis emails efficiently. It automates the full flow from email to report delivery.

When a new diagnosis email arrives:

The email content is captured and parsed by an AI agent (Gemini or any customizable LLM).

Patient and medical data is extracted into structured fields (e.g., name, phone, diagnosis).

Data is logged into a Google Sheet for records.

A Google Docs medical report is generated using a predefined template.

The report is exported as PDF and emailed to stakeholders (e.g., managers or sales team).

This template supports custom AI models, customizable Google Docs templates, and flexible filtering based on sender email.

## 🛠️ Features
Gmail email trigger (customizable sender filter)

AI-powered diagnosis parsing using Gemini (easily switchable to OpenAI or others)

Google Sheets log

Google Docs templated report (auto-filled)

PDF export and email sending

Full flexibility & customization

## 🔧 Requirements
Before using this template, you'll need:

A connected Gmail account (to receive diagnosis emails)

A valid Google Sheets integration (create your own sheet with the desired columns)

A Google Docs template document that includes placeholder tags like {{patient_name}}, {{date}}, etc.

A Gemini or OpenAI API connection for the AI agent (fully customizable)

Note: You must replace all Google Drive, Docs, and Sheets references with your own documents. This template does not grant access to the original creator's files.

## ⚙️ Customization Tips
In the Gmail Trigger node, change the sender filter to match the doctor’s email you want to process.

Modify the AI prompt if your use case needs different extracted fields.

Replace the Google Docs template link with your own file and customize its structure and variables.

Change recipient email addresses in the final Gmail node to notify the correct team members.

Optional: Add fallback flows or error branches for when AI fails or input is malformed.

## 🧠 Use Case Examples
Medical tourism agencies auto-generating patient reports for incoming diagnosis summaries

Clinics storing structured data from messy email inputs

Sales teams instantly notified of new leads with completed medical summaries

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, Google Docs, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
