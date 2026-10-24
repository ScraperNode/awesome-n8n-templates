# 👥 Screen resumes with OpenAI GPT‑4.1 and route candidates via Gmail, Slack and Sheets

> ⚡ **52 views** · 👥 [HR & Recruitment](../)

## Description

## Overview
This workflow automates the resume screening process using AI, enabling faster and more consistent candidate evaluation. It analyzes uploaded resumes, scores candidates based on job fit, and automatically routes them into acceptance, rejection, or manual review flows.

By combining AI scoring, decision logic, and automated communication, this workflow helps HR teams save time, reduce bias, and streamline hiring operations.

---

## How It Works

1. **Webhook Trigger**
   - Receives resume uploads along with candidate details.

2. **Workflow Configuration**
   - Defines:
     - Target job role
     - Acceptance threshold
     - Borderline threshold

3. **Resume Extraction**
   - Extracts text from uploaded PDF resumes.

4. **Data Preparation**
   - Structures candidate name, email, and resume content.

5. **AI Resume Scoring**
   - AI evaluates candidate based on:
     - Skills match (40%)
     - Experience (35%)
     - Education (15%)
     - Overall fit (10%)
   - Returns:
     - Score (0–100)
     - Decision (accept / reject / borderline)
     - Reason

6. **Decision Routing**
   - Accept → proceed to acceptance flow  
   - Borderline → escalate for review  
   - Reject → send rejection  

7. **Action Flows**
   - **Accepted Candidates**
     - Send acceptance email
     - Log to Google Sheets

   - **Rejected Candidates**
     - Send rejection email
     - Log to Google Sheets

   - **Borderline Candidates**
     - Notify HR via Slack
     - Log as escalated in Google Sheets

---

## Setup Instructions

1. **Webhook Setup**
   - Configure the webhook endpoint (`resume-upload`)
   - Connect it to your application or form

2. **OpenAI Credentials**
   - Add API credentials for resume scoring

3. **Gmail Integration**
   - Connect Gmail account for sending emails

4. **Slack Setup**
   - Configure Slack credentials
   - Set HR review channel

5. **Google Sheets**
   - Connect your Google account
   - Create a sheet for candidate tracking

6. **Customize Parameters**
   - Set job role
   - Adjust:
     - Acceptance threshold (e.g., 75)
     - Borderline threshold (e.g., 50)

---

## Use Cases

- Automated resume screening for HR teams  
- High-volume hiring pipelines  
- Startup hiring automation  
- Candidate pre-filtering before interviews  
- AI-assisted recruitment workflows  

---

## Requirements

- OpenAI API key  
- Gmail account  
- Slack workspace (optional)  
- Google Sheets account  
- n8n instance  

---

## Key Features

- AI-powered resume evaluation  
- Structured scoring and decision output  
- Automated candidate communication  
- Slack-based human review escalation  
- Centralized tracking in Google Sheets  
- Configurable thresholds and job roles  

---

## Summary

A complete AI-driven hiring assistant that evaluates resumes, scores candidates, and automates decision-making workflows. It reduces manual screening effort while ensuring consistent and scalable recruitment processes.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
