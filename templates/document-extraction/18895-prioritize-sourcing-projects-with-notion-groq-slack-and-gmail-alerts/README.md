# 🔬 Prioritize sourcing projects with Notion, Groq, Slack, and Gmail alerts

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow runs every Monday morning to pull unscored sourcing initiatives from a Notion database, calculate a risk-weighted priority score, optionally generate a Groq-based AI rationale for higher-priority items, write results back to Notion, post a ranked report to Slack, and email an alert for critical scores.

## How it works
1. Runs weekly on Monday at 08:00.
2. Retrieves all Notion database pages where the “Priority Score” property is empty and maps the key project metrics into a clean structure.
3. Calculates a priority score for each initiative using value, urgency, supplier risk, business impact, and effort.
4. Uses Groq to generate a 2-sentence procurement rationale only for items with a priority score of 20 or higher, and assigns a default rationale for lower-scored items.
5. Sorts the initiatives by priority score (highest first) and updates each Notion page with the computed “Priority Score” and “AI Rationale.”
6. Compiles a single “Weekly Sourcing Priority Report” message and posts it to a Slack channel.
7. Checks the highest score in the batch and sends a Gmail alert email if it exceeds 50.

## Setup
1. Connect your Notion credentials and select the target database ID, ensuring it has properties for Project Name, Value, Urgency, Supplier Risk, Business Impact, Effort, Priority Score, and AI Rationale.
2. Add a Groq API credential (Chat Model) to enable AI rationale generation for items scoring 20 or higher.
3. Add Slack credentials and set the destination channel (currently #social) for the weekly report.
4. Add Gmail credentials and replace RECEIVER_MAIL_HERE with the alert recipient email address.
5. Adjust the score thresholds (20 for AI rationale, 50 for email escalation) if your scoring scale differs.

## 🔗 Nodes Used

Slack, Gmail, Notion, Schedule Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
