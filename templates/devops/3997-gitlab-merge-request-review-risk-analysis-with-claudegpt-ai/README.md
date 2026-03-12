# ⚙️ GitLab merge request review & risk analysis with Claude/GPT AI

> ⚡ **12,155 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Trigger

The workflow runs when a GitLab Merge Request (MR) is created or updated.

## Extract & Analyze

It retrieves the code diff and sends it to Claude AI or GPT-4o for risk assessment and issue detection.

## Generate Report

AI produces a structured summary with:
- Risk levels
- Identified issues
- Recommendations
- Test cases

## Notify Developers

The report is:
- Emailed to developers and QA teams
- Posted as a comment on the GitLab MR

## Setup Guide

### Connect GitLab
- Add GitLab API credentials
- Select repositories to track

### Configure AI Analysis
- Enter Anthropic (Claude) or OpenAI (GPT-4o) API key

### Set Up Notifications
- Add Gmail credentials
- Update the email distribution list

### Test & Automate
- Create a test MR to verify analysis and email delivery

## Key Benefits

- **Automated Code Review** – AI-driven risk assessment and recommendations
- **Security & Compliance** – Identifies vulnerabilities before code is merged
- **Integration with GitLab CI/CD** – Works within existing DevOps workflows
- **Improved Collaboration** – Keeps developers and QA teams informed

---

**Developed by Quantana**, an AI-powered automation and software development company.

## 🔗 Nodes Used

HTTP Request, GitLab Trigger, Gmail, AI Agent, Anthropic Chat Model, Auto-fixing Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
