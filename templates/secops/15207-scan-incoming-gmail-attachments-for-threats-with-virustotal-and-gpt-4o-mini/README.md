# 🔒 Scan incoming Gmail attachments for threats with VirusTotal and GPT-4o-mini

> ⚡ **145 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Who's it for

Small teams, solo operators, and security-conscious individuals who receive email attachments from external senders. Useful for freelancers, agencies, HR teams, and anyone handling CVs, invoices, or documents from unknown sources.

## How it works

Every minute, the workflow polls Gmail for new unread emails with attachments. For each attachment, it calculates the SHA256 hash and queries VirusTotal for known-malware matches. In parallel, an AI model analyzes the email subject and body for phishing patterns. A rule-based scorer combines both signals into three threat levels: Danger (VirusTotal malicious count &gt;= 3 OR AI detects phishing) triggers a Gmail quarantine label plus a Slack alert. Suspicious (partial hits) logs to a human review queue in Google Sheets. Safe saves the attachment to Google Drive. AI is used only for text classification — the final quarantine decision is always rule-based.

## Set up steps

1. Get a free VirusTotal API key at virustotal.com
2. Create a Google Sheet named suspicious_queue with columns: timestamp, email_from, email_subject, attachment, malicious_count, ai_verdict
3. Create a Gmail label called QUARANTINE and a Google Drive folder for safe attachments
4. Open Set Configuration and fill in the Sheet ID, Drive folder ID, Slack channel, and label name
5. Connect Gmail, Sheets, Drive, Slack, OpenAI, and VirusTotal (Header Auth with x-apikey) credentials
6. Activate the workflow

## How to customize

Adjust thresholds in the Code node, swap Slack for Discord or Teams, or add SPF and DKIM header checks before scanning.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Google Drive, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
