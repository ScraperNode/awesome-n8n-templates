# 🔒 Monitor Jamf policy integrity and send Slack alerts for changes

> ⚡ **62 views** · 🔒 [SecOps & Security Automation](../)

## Description

🛡️ Jamf Policy Integrity Monitor

🎯 Overview

A security-focused n8n workflow that monitors Jamf Pro policies for any unauthorized or accidental modification. It delivers configuration integrity and real-time visibility across managed Apple environments.

⚙️ Setup Instructions

Add your Jamf Pro and Slack credentials in n8n.

Import the workflow template.

Configure your preferred schedule and alert channel.

No coding required. The setup takes minutes.

🔍 How It Works

The workflow connects to Jamf Pro API, detects configuration changes, and sends instant alerts to Slack.
It maintains awareness of policy integrity while minimizing manual checks.
The logic runs automatically in the background for continuous monitoring.

📢 Slack Notification Example

:warning: Policy: Uninstall EDR modified
:calendar: DateTime: Oct 5, 2025, 10:23:27 AM

✅ Why It Matters

Jamf provides no built-in alerts when policies are modified.
This workflow closes that visibility gap and gives your team instant awareness of policy changes without manual auditing.
Ideal for security engineers, Jamf administrators, and compliance teams focused on operational assurance.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
