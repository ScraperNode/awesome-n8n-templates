# ⚙️ Automated error notifications with optional GPT-4o diagnostics via email

> ⚡ **983 views** · ⚙️ [DevOps & CI/CD](../)

## Description

**++Who’s it for++**

This template is ideal for anyone who needs reliable, real-time visibility into failed executions in n8n. Whether you’re a developer, operator, founder, or part of a small team, this workflow helps you detect issues quickly without digging through execution logs. It’s especially useful for users who want the flexibility to enable AI-powered diagnostics when needed.

**++What it does++**

The workflow sends an automated email alert whenever any workflow in your n8n instance encounters an error. It captures key details such as workflow name, timestamp, node name, and error message. If you enable AI analysis, the alert also includes a Severity Level and a Quick Resolution—giving you an instant, actionable understanding of the problem. If AI is disabled, you receive a clean, minimal error notification.

**++How it works++**

**1.** Error Trigger activates when any workflow fails.
**2.** Config — Set Fields stores your SMTP settings and the AnalyzeErrorWithAI toggle.
**3.** Use AI Analysis? decides whether to run the AI node.
**4.** If enabled, Analyze Error with AI generates structured recommendations.
**5.** Format Email Body builds the message based on the selected mode.
**6.** Send Email delivers the notification.

**++Requirements++**

**1.** SMTP credentials
**2.** A valid sender & recipient email
**3.** Optional: OpenAI credentials if using AI analysis

**++How to set up++**

**1.** Open the Config node and fill in email settings and the AI toggle.
**2.** Add your SMTP and (optional) OpenAI credentials.
**3.** Save, activate, and test the workflow.

## 🔗 Nodes Used

Send Email, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
