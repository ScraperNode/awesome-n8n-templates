# 👥 Automate resume screening & candidate routing with Gemini AI and Google Sheets

> ⚡ **500 views** · 👥 [HR & Recruitment](../)

## Description

Streamline your recruitment process with AI-powered resume analysis that goes beyond keyword matching.

## Overview
This workflow revolutionizes hiring by using specialized AI agents to intelligently analyze resumes for different positions. Unlike traditional ATS systems that rely on keyword matching, this solution provides deep, contextual analysis of candidate qualifications and automatically manages the entire screening process from application to response.
### How it works

Application Submission - Candidates complete a form with personal details, select their desired position (ICT, Customer Care, Accounting, or HR), and upload their resume
Secure Storage - Resumes are automatically saved to Google Drive for permanent record-keeping
Intelligent Routing - A switch node classifies applications by position and routes them to specialized AI agents
AI Analysis - Position-specific agents (each with customized prompts and guardrails) extract text from PDFs and rate candidates on a 1-10 scale with detailed commentary
CRM Integration - All data (timestamp, candidate info, position, score, AI comments, resume link) flows into Google Sheets for easy tracking
Automated Response - A secondary workflow sends interview invitations to high-scoring candidates (7-10) and professional rejection emails to others (below 7)

### Key Benefits
✅ Contextual Analysis - AI understands skills and experience, not just keywords
✅ Faster Hiring - Close applications once you have enough qualified candidates
✅ No Expertise Required - HR teams don't need technical knowledge in every field
✅ Fully Automated - From submission to interview invitation without manual intervention
✅ Customizable - Adjust AI prompts and scoring criteria for each position
✅ Transparent - All AI reasoning is logged for review
Set up steps
Time to set up: ~30-45 minutes
Prerequisites:

n8n instance (cloud or self-hosted)
Google Drive account
Google Sheets account
AI provider credentials (OpenAI, Anthropic, or compatible API)
Email service (Gmail, SMTP, or other n8n-supported service)

**Quick Setup:**

Import the workflow into your n8n instance
Connect your Google Drive and Google Sheets accounts
Configure your AI provider credentials in the agent nodes
Customize AI prompts for each position in the respective agent nodes (detailed instructions in sticky notes)
Set up your email service credentials
Customize email templates for invitations and rejections
Test with sample resumes for each position
Deploy your application form and share the link

Detailed configuration instructions are included in sticky notes within the workflow.
Use Cases

Startups scaling their team quickly
HR departments handling high application volumes
Agencies managing recruitment for multiple clients
Companies hiring for specialized technical roles

### Customization Options

Adjust scoring thresholds for each position
Modify AI evaluation criteria via prompts
Add additional positions with dedicated agents
Integrate with your existing HRIS or ATS
Add SMS notifications for candidates


**Note:** This workflow includes two separate flows - the main screening workflow and an automated response workflow. Both are included in the download.

## 🔗 Nodes Used

Send Email, Google Sheets, Google Drive, Google Sheets Trigger, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
