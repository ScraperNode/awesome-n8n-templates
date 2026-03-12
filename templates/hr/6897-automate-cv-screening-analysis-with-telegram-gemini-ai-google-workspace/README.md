# 👥 Automate CV screening & analysis with Telegram, Gemini AI & Google Workspace

> ⚡ **670 views** · 👥 [HR & Recruitment](../)

## Description

## 🧩 What Problem Does It Solve?
Manually reviewing CVs from Telegram job applicants is slow, error-prone, and often inconsistent. This workflow automates the collection, analysis, and storage of CVs — saving HR teams hours while ensuring structured, high-quality candidate data for fast decision-making.

## 📝 Description
This workflow is built to help HR teams collect and qualify CVs sent over Telegram. It verifies that a candidate submits a valid PDF, stores the file securely, extracts key information using AI, and logs everything neatly in Google Sheets.

## 🎯 Key Advantages for HR Teams
✅ Automatically filters out non-PDF and invalid messages
✅ Uses AI to extract clean, structured candidate data
✅ Links CV files to Google Sheets for easy HR access
✅ Eliminates manual data entry from physical CVs
✅ Provides a scalable CV pipeline via Telegram

## 🛠️ Features
Telegram bot for CV collection

MIME-type PDF validation

Google Drive integration for secure storage

Text extraction from PDFs

Gemini AI-powered CV parsing

Google Sheets integration for candidate logging

Merge logic to synchronize multiple streams

JSON-safe parsing for AI output

Automatic job title and experience categorization

Duplicate prevention through name-based matching

## 🔧 Requirements
A Telegram bot token

Google Drive API credentials

Google Sheets API credentials

Gemini API key (or another LLM)

n8n instance with relevant credentials configured

Candidates sending CVs in PDF format

## 🧠 Use Case Examples
Recruitment Agencies: Automate pre-screening and reduce manual effort

Small Startups: Collect high-quality CVs without paying for an ATS

Internship Programs: Quickly categorize applicants by experience

Remote Hiring: Accept global CVs via Telegram from mobile users

Freelancer Portals: Auto-log contractor profiles from incoming resumes

## ⚙️ Configuration Tips
 1-Set up Telegram Bot API credentials
 2-Configure Google Drive API access
 3-Configure Google Sheets API access
 4-Configure Google Gemini/PaLM API access
 5-Replace all placeholder IDs with your actual values

If you need any help [Get in Touch](https://www.linkedin.com/in/abdallaelshikh0/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Google Drive, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
