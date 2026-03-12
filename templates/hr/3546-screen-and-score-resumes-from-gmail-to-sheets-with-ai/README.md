# 👥 Screen and score resumes from Gmail to Sheets with AI

> ⚡ **6,932 views** · 👥 [HR & Recruitment](../)

## Description

## Description

This intelligent n8n automation streamlines the process of collecting, extracting, and scoring resumes sent to a Gmail inbox—making it an ideal solution for recruiters who regularly receive hundreds of applications. The workflow scans incoming emails with attachments, extracts relevant candidate information from resumes using AI, evaluates each candidate based on customizable criteria, and logs their scores alongside contact details in a connected Google Sheet.

## Who Is This For?

- **Recruiters & Hiring Managers**: Automate the resume screening process and save hours of manual work.
- **HR Teams at Startups & SMBs**: Quickly evaluate talent without needing large HR ops infrastructure.
- **Agencies & Talent Acquisition Firms**: Screen large volumes of resumes efficiently and with consistent criteria.
- **Solo Founders Hiring for Roles**: Use AI to help score and shortlist top candidates from email applications.

## What Problem Does This Workflow Solve?

Manually reviewing resumes is time-consuming, error-prone, and inconsistent. This workflow solves these challenges by:

- Automatically detecting and extracting resumes from Gmail attachments.
- Using OpenAI to intelligently extract candidate info from unstructured PDFs.
- Scoring resumes using customizable evaluation criteria (e.g., relevant experience, skills, education).
- Logging all candidate data (Name, Email, LinkedIn, Score) in a centralized, filterable Google Sheet.
- Enabling faster, fairer, and more efficient candidate screening.

## How It Works

### 1. Gmail Trigger
- Runs on a scheduled interval (e.g., every 6 or 24 hours).
- Scans a connected Gmail inbox (using OAuth credentials) for unread emails that contain PDF attachments.

### 2. Extract Attachments
- Downloads the attached resumes from matching emails.

### 3. Parse Resume Text
- Sends the PDF file to OpenAI's API (via GPT-4 or GPT-3.5 with file support or via base64 + PDF-to-text tool).
- Prompts GPT with a structured format to extract fields like Name, Email, LinkedIn, Skills, and Education.

### 4. Score Resume
- Evaluates the resume on predefined scoring logic using AI or logic inside the workflow (e.g., "Has X skill = +10 points").

### 5. Log to Google Sheets
- Appends a new row in a connected Google Sheet, including:
  - Candidate Name
  - Email Address
  - LinkedIn URL
  - Resume Score

## Setup

### Accounts & API Keys
You’ll need accounts and credentials for:

- **n8n** (hosted or self-hosted)
- **Google Cloud Platform** (for Gmail, Drive, and Sheets APIs)
- **OpenAI** (for GPT model access)

### Google Sheet
- Make a Google Sheet and connect it via Google Sheets node in n8n. Columns should include:
  - Name
  - Email
  - LinkedIn
  - Score

## Configuration

### Google Cloud:
- Enable Gmail API and Google Sheets API.
- Set up OAuth 2.0 Credentials in Google Console.
- Connect n8n Gmail, Drive, and Sheets nodes to these credentials.

### OpenAI:
- Generate an API Key.
- Use the HTTP Request node or official OpenAI node to send prompt requests.

### n8n Workflow:
- Add Gmail Trigger.
- Add extraction logic (e.g., filter PDFs).
- Add OpenAI prompt for resume parsing and scoring.
- Connect structured output to a Google Sheets node.

## Requirements

### Accounts:
- **n8n**
- **Google** (Gmail, Sheets, Drive, Cloud Console)
- **OpenAI**

### API Keys & Credentials:
- OpenAI API Key
- Google Cloud OAuth Credentials
- Gmail Access Scopes (for reading attachments)
- Configured Google Sheet
- OpenAI usage (after free tier)
- Google Cloud API usage (if exceeding free quota)

## 🔗 Nodes Used

Google Sheets, Gmail Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
