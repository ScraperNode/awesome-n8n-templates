# 👥 Screen and score job candidates with GPT-4o, Gmail and Google Calendar

> ⚡ **9 views** · 👥 [HR & Recruitment](../)

## Description

## How It Works
This workflow automates end-to-end candidate evaluation for HR teams and recruiters overwhelmed by high-volume hiring. Designed for talent acquisition professionals, hiring managers, and HR operations, it solves the challenge of manually screening resumes, validating qualifications, and coordinating interview feedback across multiple stakeholders. The system triggers on new applications, extracts CV content, prepares structured candidate data, and deploys specialized AI agents for comprehensive evaluation: Signal Agent validates credentials, CV Verification Agent confirms qualifications, Trust Assessment Agent evaluates cultural fit, and Experience Agent analyzes career trajectory. The Orchestrator Agent synthesizes insights, checks validation results, and routes decisions—sending approval emails for qualified candidates, rejection notices for mismatches, and logging all outcomes to Google Calendar and Sheets. By automating screening with multi-dimensional AI analysis, organizations reduce time-to-hire by 70%, eliminate bias, ensure consistent evaluation criteria, and free recruiters to focus on relationship-building with top talent.

## Setup Steps
1. Connect **webhook/form trigger** to applicant tracking system or career portal
2. Configure **CV extraction** node with document parsing API credentials
3. Add **OpenAI API keys** to all AI agent nodes 
4. Define **evaluation criteria** in each agent's prompt 
5. Link **Gmail** credentials for approval and rejection email templates
6. Connect **Google Calendar** API for interview scheduling automation

## Prerequisites
ATS integration or career portal webhook access, OpenAI API account
## Use Cases
High-volume recruitment screening, technical role qualification validation
## Customization
Modify agent prompts for role-specific criteria, adjust scoring thresholds for pass/fail decisions
## Benefits
Reduces screening time by 70%, eliminates unconscious bias through standardized evaluation

## 🔗 Nodes Used

Send Email, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
