# ⚒️ Turn support tickets into developer insights with OpenAI, Postgres, Slack and Jira

> ⚡ **150 views** · ⚒️ [Engineering](../)

## Description

## Overview
This workflow transforms raw support tickets into actionable developer insights using AI and data processing. It automatically detects recurring issues, identifies root causes, ranks severity, and generates a structured engineering report.

By combining embeddings, clustering, and AI analysis, it helps teams prioritize bugs, understand user pain points, and take data-driven product decisions.

---

## How It Works

1. **Scheduled Trigger**
   - Runs automatically at a defined time (e.g., daily).

2. **Workflow Configuration**
   - Defines time window, similarity threshold, scoring weights, and delivery options.

3. **Fetch Feedback Data**
   - Retrieves recent support tickets (bugs and feature requests) from Postgres.

4. **Preprocessing**
   - Cleans, normalizes, and removes duplicate messages.

5. **Embedding & Clustering**
   - Generates embeddings using OpenAI.
   - Groups similar tickets using cosine similarity.

6. **Cluster Aggregation**
   - Combines related tickets into structured clusters.

7. **Root Cause Analysis**
   - AI agent analyzes clusters to identify:
     - Root cause
     - Impacted module
     - Severity
     - Debug steps
     - Fix direction

8. **Severity Scoring**
   - Calculates weighted score based on:
     - Frequency
     - Sentiment
     - Churn risk
     - Enterprise impact

9. **Report Generation**
   - Generates a developer-focused report including:
     - Executive summary
     - Ranked bugs
     - Feature requests
     - Risk analysis
     - Sprint priorities

10. **Delivery**
   - Sends report to Slack
   - Optionally creates Jira issues
   - Optional email delivery

---

## Setup Instructions

1. **Database Setup**
   - Configure Postgres credentials
   - Ensure `support_tickets` table exists with required fields

2. **OpenAI Configuration**
   - Add API key for:
     - Embeddings (text-embedding-3-small)
     - AI analysis agents

3. **Slack Integration**
   - Add Slack credentials
   - Set channel ID

4. **Email Setup (Optional)**
   - Configure SMTP or email service

5. **Jira Integration (Optional)**
   - Add Jira credentials
   - Set project key and issue type

6. **Customize Parameters**
   - Adjust:
     - Similarity threshold
     - Scoring weights
     - Time window

7. **Schedule Configuration**
   - Modify trigger timing as needed

---

## Use Cases

- Product teams analyzing user feedback at scale  
- Engineering teams prioritizing bug fixes  
- SaaS companies tracking churn-related issues  
- Customer support insights automation  
- AI-driven product intelligence dashboards  

---

## Requirements

- OpenAI API key  
- Postgres database with support ticket data  
- Slack (optional)  
- Email service (optional)  
- Jira account (optional)  
- n8n instance  

---

## Key Features

- Automated feedback clustering using embeddings  
- AI-driven root cause analysis  
- Weighted severity scoring system  
- Developer-ready intelligence reports  
- Multi-channel delivery (Slack, Email, Jira)  
- Fully customizable scoring and thresholds  

---

## Summary

A powerful AI-driven workflow that converts raw support tickets into structured developer intelligence. It automates clustering, root cause detection, prioritization, and reporting helping teams fix the right problems faster and build better products.

## 🔗 Nodes Used

Send Email, Postgres, Slack, Jira Software, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
