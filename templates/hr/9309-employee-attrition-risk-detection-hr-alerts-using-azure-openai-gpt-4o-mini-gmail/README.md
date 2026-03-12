# 👥 Employee attrition risk detection & HR alerts using Azure OpenAI GPT-4o-mini & Gmail

> ⚡ **185 views** · 👥 [HR & Recruitment](../)

## Description

## Description 
Automatically ingests new employee data, extracts relevant signals, scores attrition risk, and notifies HR/managers with structured insights and recommended actions. Built on Azure OpenAI Chat with Structured Output Parser and true/false routing for escalation.

## What This Template Does 
- Trigger for new data: Starts when a new profile, survey, or report file is added.
- Download & extract: Retrieves the file and converts PDFs/text into analyzable content.
- Analyze signals: Uses Azure OpenAI Chat to interpret sentiment, workload, performance notes, feedback, and changes (role, compensation, manager, location).
- Structured parsing: Maps to fields like risk_score, risk_level, key_drivers, recommended_interventions, escalation_required.
- Logic routing: Applies thresholds (e.g., risk_score ≥ 0.7) and flags for urgent follow-up.
- Email alerts: Drafts and sends tailored notifications to HR/manager with action steps.

## Key Signals Considered 
- Sentiment & language: Negative tone, burnout cues, disengagement in feedback.
- Activity trends: Drop in participation, delayed responses, meeting absenteeism.
- Performance & goals: Recent rating changes, missed OKRs, quality issues.
- Role & compensation: Lateral moves, pay gaps vs. market, stalled progression.
- Managerial context: Team churn, conflict mentions, low recognition frequency.

## Features 
- Azure OpenAI Chat: Interprets unstructured text into consistent risk fields.
- Structured Output Parser: Guarantees schema for downstream decisions.
- Conditional Logic (true/false): Threshold checks for escalation.
- Memory: Maintains context across multiple files per employee for trend-aware scoring.
- Calculate avg span: Computes tenure or recency metrics used in risk scoring.
- Email Composer & Sender: Generates and dispatches HR-ready alerts.

## Requirements 
- n8n instance with access to employee data sources (Drive, Inbox, HR folder).
- Extract From PDF configured for clean text output.
- Azure OpenAI credentials (e.g., GPT‑4o‑mini) connected to Chat Model.
- Email service (Gmail/SMTP) set in n8n Credentials.
- Parser schema aligned to your People Analytics fields (risk_score, drivers, actions).

## 🔗 Nodes Used

Google Drive, Gmail, Google Drive Trigger, AI Agent, Structured Output Parser, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
