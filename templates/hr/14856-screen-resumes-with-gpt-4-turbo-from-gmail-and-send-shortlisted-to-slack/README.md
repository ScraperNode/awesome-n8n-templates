# 👥 Screen resumes with GPT-4 Turbo from Gmail and send shortlisted to Slack

> ⚡ **27 views** · 👥 [HR & Recruitment](../)

## Description

# AI Resume Screening Workflow using Gmail, OpenAI (GPT-4 Turbo) & Slack

This workflow automatically fetches resumes from Gmail, extracts text from PDF attachments, analyzes candidate profiles using AI, and shortlists qualified candidates by sending their details to Slack. It significantly reduces manual effort in resume screening and speeds up hiring decisions.

### Quick Implementation Steps

1. Connect your Gmail account in n8n
2. Connect your OpenAI API (GPT-4 Turbo)
3. Connect your Slack account
4. Ensure resumes are received as PDF attachments in Gmail
5. Update job requirements inside the AI Resume Analyzer node
6. Run the workflow manually or activate it  


## What It Does

This workflow automates the resume screening process by integrating Gmail, AI, and Slack into a seamless pipeline. It starts by fetching emails containing resume attachments, then processes and validates these files to ensure only PDF resumes are analyzed.

Once validated, the workflow extracts text from each resume and sends it to an AI model. The AI evaluates candidate details such as skills, experience, and contact information, and calculates a match score based on predefined job requirements.

Finally, the workflow determines whether a candidate should be shortlisted or rejected. Shortlisted candidates are instantly shared on Slack with complete details, enabling faster hiring decisions and reducing manual screening effort.


## Who’s It For

- HR teams and recruiters
- Hiring managers
- Startups handling large volumes of applications
- Recruitment agencies
- Businesses looking to automate candidate screening  


## Requirements to Use This Workflow

- n8n (self-hosted or cloud)
- Gmail account (OAuth connected)
- OpenAI API key (GPT-4 Turbo access)
- Slack account (with channel access)
- Resumes in PDF format
- Basic understanding of n8n workflows  


## How It Works & Set Up

### Setup Instructions

1. **Manual Trigger Setup**

Use the *Start Workflow Manually* node to initiate the workflow.

2. **Gmail Configuration**

Connect your Gmail account in the *Fetch Gmail* node. Ensure emails contain resume attachments.

3. **Attachment Processing**

The workflow formats and checks attachments. Only emails with attachments proceed further.

4. **PDF Validation**

Ensure resumes are in PDF format. Non-PDF files are ignored automatically.

5. **Text Extraction**

The *Extract Resume Text* node converts PDF resumes into plain text.

6. **AI Configuration**

Add your OpenAI credentials in the *OpenAI Chat Model* node. Customize job requirements inside the *AI Resume Analyzer* node prompt.

7. **Evaluation Logic**

Candidates are scored based on:     
- Skills (50%)
- Experience (30%)
- Location (20%)

8. **Output Handling**

If score ≥ 70 → Sent to Slack as shortlisted. Else → Marked as rejected  

9. **Activate Workflow**

Run manually or activate for continuous use.


## How To Customize Nodes

- **AI Resume Analyzer**  - Modify job requirements (skills, experience, location). Adjust scoring logic or threshold

- **Evaluate Candidate Score**  - Change minimum score (default: 70)

- **Slack Node**  - Customize message format. Change Slack channel

- **Gmail Node**  - Add filters (labels, subjects, senders)

- **Extract Resume Text**  - Extend for other file formats if needed


## 1.8 Add-ons (Enhancements)

- Store shortlisted candidates in Google Sheets or database
- Send rejection emails automatically
- Add ATS (Applicant Tracking System) integration
- Include resume ranking system
- Add duplicate candidate detection
- Enable multi-role job matching  


## 1.9 Use Case Examples

- Automating resume screening for tech hiring
- Filtering candidates for specific skill sets (e.g., React Native developers)
- Handling bulk job applications efficiently
- Shortlisting candidates for remote roles
- Pre-screening candidates before interviews  

There can be many more use cases depending on hiring workflows and business needs.


## 1.10 Troubleshooting Guide

| Issue                     | Possible Cause                                      | Solution                                                   |
|---------------------------|-----------------------------------------------------|------------------------------------------------------------|
| No emails fetched         | Gmail not connected or incorrect filters           | Reconnect Gmail and check filters                          |
| Attachments not processed | Emails don’t contain attachments                   | Ensure resumes are attached                                |
| PDF not detected          | Incorrect file type                                | Ensure resumes are in PDF format                           |
| AI response parsing error | Invalid JSON from AI                               | Check prompt and enforce strict JSON                       |
| No Slack message          | Slack credentials or channel issue                 | Verify Slack connection and channel ID                     |
| Low-quality matches       | Incorrect job requirements                         | Update AI prompt with accurate criteria                    |


## Need Help?

If you need assistance setting up this workflow or customizing it for your business needs, we’re here to help.

Whether you want to:
- Extend this workflow with advanced features
- Integrate it with your existing systems
- Build similar automation solutions  

Feel free to reach out to our [n8n workflow development](https://www.weblineindia.com/n8n-automation/) experts at **WeblineIndia** for expert support and tailored workflow development.

👉 Let us help you automate smarter and scale faster.

## 🔗 Nodes Used

Function, Slack, Gmail, AI Agent, OpenAI Chat Model, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
