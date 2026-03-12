# 👥 Monitor daily HR risks and standup summaries with Monday.com and GPT-4o-mini

> ⚡ **118 views** · 👥 [HR & Recruitment](../)

## Description

## 📊 Description
This workflow automates the daily HR standup by continuously monitoring active hiring and HR tasks, identifying risks and blockers, and generating an intelligent, action-oriented summary using AI.
Every morning, HR and leadership teams receive a clear overview of priorities, overdue items, and potential risks — without any manual preparation. By combining structured task data with AI-driven analysis, the workflow ensures teams start the day aligned, informed, and ready to act.
The automation is designed for real-world HR operations, scaling seamlessly as task volume grows while maintaining concise and consistent reporting.

## 🔁 What this automation does
- Automatically triggers every morning using a scheduled Cron trigger.
- Retrieves all HR and hiring-related tasks from a Monday.com board.
- Filters out completed items to focus only on active and relevant work.
- Aggregates all remaining tasks into a single structured dataset.
- Analyzes task status, ownership, and due dates to identify blockers and risks.
- Uses AI (GPT-4o-mini) to generate a concise, structured daily standup report.
- Delivers the final standup update to HR via email for immediate visibility.

## 🧠 Key design decisions
- Uses a scheduled trigger to ensure consistent, hands-free execution
- Applies task filtering via a Code node to overcome API limitations
- Aggregates all tasks to produce a single, consolidated standup report
- Leverages AI for insight generation, not raw data repetition
- Excludes completed tasks to reduce noise and improve signal quality
- Prioritizes concise, actionable output suitable for leadership review

## ⭐ Key benefits
- Eliminates manual standup preparation
- Ensures overdue tasks and blockers are surfaced early
- Improves visibility and accountability across HR operations
- Saves daily operational time for HR and managers
- Produces consistent, professional summaries every day
- Scales efficiently as teams and task volume increase
- 🛠️ Tools & services used
- n8n – Workflow orchestration and automation
- Monday.com – HR and hiring task management
- OpenAI (GPT-4o-mini) – Intelligent analysis and summarization
- Gmail – Delivery of daily standup reports
- Cron – Scheduled execution

## 🔐 Requirements
- Monday.com OAuth credentials
- OpenAI API key
- Gmail OAuth credentials
- n8n (cloud or self-hosted)
- HR board with status and due date columns

## 🎯 Target audience
- HR and Talent Acquisition teams
- Hiring managers
- Operations and RevOps teams
- Startups and scaling organizations
- Automation teams building internal HR tooling

## 🔗 Nodes Used

Monday.com, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
