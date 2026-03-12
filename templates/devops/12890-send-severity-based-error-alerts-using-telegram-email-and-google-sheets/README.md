# ⚙️ Send severity-based error alerts using Telegram, email and Google Sheets

> ⚡ **22 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Who this template is for

This template is designed for n8n users running workflows in production
who need **reliable and structured error monitoring**, not just basic alerts.

It’s especially useful for:
- Automation engineers and developers
- Teams running business-critical workflows
- Anyone who wants smarter alerting with reduced noise

---

## What this workflow does

This workflow acts as a **global, severity-based error monitoring system** for n8n.

When a linked workflow fails, it automatically:
- Classifies the error by severity (Critical, High, Normal)
- Routes alerts based on severity level
- Sends notifications via Telegram and Email
- Logs critical errors for auditing and troubleshooting

This ensures important issues are escalated properly,
while avoiding unnecessary alert fatigue.

---

## How it works

1. An **Error Trigger** captures execution failures from linked workflows.
2. A **Code node** analyzes the error and assigns a severity level.
3. Alerts are routed based on severity:
   - 🔴 Critical → Email + Telegram + Logging
   - 🟠 High → Telegram alert
   - 🟡 Normal → Telegram alert
4. All alerts include rich context such as workflow name, failed node,
   execution time, and execution URL.

The workflow only runs when an error occurs.

---

## How to set up

1. Configure the required credentials (Telegram, Email, optional Google Sheets).
2. Replace placeholder values such as:
   - `YOUR_TELEGRAM_CHAT_ID`
   - `YOUR_ALERT_EMAIL`
3. Activate this workflow.
4. Open any workflow you want to monitor.
5. In **Workflow Settings**, set **Error Workflow** to this workflow.
6. Save and test by triggering an error.

---

## Requirements

- An active n8n instance (cloud or self-hosted)
- Telegram Bot credentials
- Email credentials (for critical alerts)
- Optional: Google Sheets credentials for logging

---

## How to customize the workflow

You can extend this workflow by:
- Adding more alert channels (Slack, Discord, etc.)
- Adjusting severity classification logic
- Implementing rate-limiting or noise reduction
- Logging errors to databases or external monitoring tools

Detailed instructions and explanations are included
inside the workflow using sticky notes.

## 🔗 Nodes Used

Google Sheets, Telegram, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
