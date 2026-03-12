# 👥 Automate HR candidate shortlisting with Sheets, Gmail, ClickUp & Calendly

> ⚡ **228 views** · 👥 [HR & Recruitment](../)

## Description

## 📝 Description
This n8n workflow automates the candidate shortlisting process by integrating Google Sheets, Gmail, ClickUp, and Calendly. It fetches candidate records, filters high-scoring profiles, sends personalized advancement emails, and creates screening tasks for your HR team—all with a single manual trigger.

## 🚀 What It Does

**Fetch All Candidate Records**
- Retrieves complete candidate data (names, scores, contact info, summaries) from the ‘Resume store’ Google Sheet (Sheet2).
- Efficiently loads all rows for batch analysis.

**Filter High-Score Candidates**
- Applies a threshold filter (default: score &gt; 70) to identify strong-fit candidates.
- Only qualified profiles advance; threshold is customizable per role.

**Send Congratulations Email**
- Sends personalized emails to qualified candidates using Gmail.
- Includes a dynamic Calendly scheduling link for interview booking.
- Maintains a positive candidate experience with professional messaging.

**Create Screening Task in ClickUp**
- Automatically generates screening tasks for each qualified candidate in ClickUp.
- Assigns tasks to a designated team member and organizes them in specified project folders.
- Ensures accountability and seamless follow-up.

## 📈 Key Benefits
- Speed: Instantly advances qualified candidates—no manual sorting.
- Consistency: Standardized criteria and communications for every role.
- Organization: Auto-creates ClickUp tasks so nothing slips through.
- Experience: Timely, professional communication enhances candidate journey.
- Efficiency: Reduces HR workload and error risk.

## ⚙️ Customization & Integration
- Score Threshold: Set to 70 by default; adjust for different roles or seniority.
- Email Template: Editable subject, body, and CTA (Calendly link).
- ClickUp Integration: Uses configurable Team, Space, Folder, List, and Assignee IDs.
- Systems Supported: Google Sheets (data), Gmail (email), ClickUp (tasks), Calendly (scheduling).
- 🔧 Setup Requirements
- n8n instance (self-hosted or cloud).
- Google Sheets access for ‘Resume store’ (Sheet2).
- Gmail credentials for candidate notifications.
- ClickUp API token and IDs for task creation.
- Calendly link for interview scheduling.

## 👥 Target Audience
- HR teams, recruiters, staffing agencies.
- Operations managing high-volume candidate pipelines.
- Startups/SMBs seeking standardized hiring automation.

## 🛠️ Maintenance Tips
- Update email templates seasonally.
- Review scoring thresholds monthly.
- Monitor ClickUp task completion rates.
- Ensure Calendly links remain active.

## 📋 Step-by-Step Usage
- Connect Google Sheets, Gmail, and ClickUp credentials in n8n.
- Import the workflow; configure threshold, email, and ClickUp settings.
- Edit the email node with your Calendly link and branding.
- Trigger “Execute workflow” after new candidate scores are added.
- Review logs and results for successful candidate progression.

## 🔗 Nodes Used

Google Sheets, ClickUp, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
