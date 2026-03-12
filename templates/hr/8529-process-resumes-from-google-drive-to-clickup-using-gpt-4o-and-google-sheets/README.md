# 👥 Process resumes from Google Drive to ClickUp using GPT-4o and Google Sheets

> ⚡ **209 views** · 👥 [HR & Recruitment](../)

## Description

## Description
Process new resumes from Google Drive, extract structured candidate data with AI, save to Google Sheets, and auto-create a ClickUp hiring task. Gain a centralized, searchable candidate database and instant task kickoff—no manual data entry. 🚀

## What This Template Does
- Watches a Google Drive folder for new resume PDFs and triggers the workflow. 📂
- Downloads the file and converts the PDF to clean, readable text. 📄
- Analyzes resume text with an AI Resume Analyzer to extract structured candidate info (name, email, phone, experience, skills, education). 🤖
- Cleans and validates the AI JSON output for reliability. 🧹
- Appends or updates a candidate row in Google Sheets and creates a ClickUp hiring task. ✅

## Key Benefits
- Save hours with end-to-end, hands-off resume processing. ⏱️
- Never miss a candidate—every upload triggers automatically. 🔔
- Keep a single source of truth in Sheets, always up-to-date. 📊
- Kickstart hiring instantly with auto-created ClickUp tasks. 🗂
- Works with varied resume formats using AI extraction. 🧠

## Features
- Google Drive “Watch for New Resumes” trigger (every minute). ⏲
- PDF-to-text extraction optimized for text-based PDFs. 📘
- AI-powered resume parsing into standardized JSON fields. 🧩
- JSON cleanup and validation for safe storage. 🧰
- Google Sheets append-or-update for a central candidate database. 📑
- ClickUp task creation with candidate-specific titles and assignment. 🎯

## Requirements
- n8n instance (cloud or self-hosted); recommended n8n version 1.106.3 or higher. 🔧
- Google Drive access to a dedicated resumes folder (PDF resumes recommended). 📂
- Google Sheets credential with edit access to the candidate database sheet. 📈
- ClickUp workspace/project access to create tasks for hiring. 📌
- AI service credentials for the Resume Analyzer step (add in n8n Credentials). 🤖

## Target Audience
- HR and Talent Acquisition teams needing faster screening. 👥
- Recruiters and staffing agencies handling high volumes. 🏢
- Startups and ops teams standardizing candidate intake. 🚀
- No-code/low-code builders automating hiring workflows. 🧩

## Step-by-Step Setup Instructions
- Connect Google Drive, Google Sheets, ClickUp, and your AI service in n8n Credentials. 🔐
- Set the Google Drive “watched” folder (e.g., Resume_store). 📁
- Import the workflow, assign credentials to all nodes, and map your Sheets columns. 🗂️
- Adjust the ClickUp task details (title pattern, assignee, list). 📝
- Run once with a sample PDF to test, then enable scheduling (every 1 minute). ▶️
- Optionally rename the email/task nodes for clarity (e.g., “Create Hiring Task in ClickUp”). ✍️

## 🔗 Nodes Used

Google Sheets, Google Drive, ClickUp, Google Drive Trigger, AI Agent, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
