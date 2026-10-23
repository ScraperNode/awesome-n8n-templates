# 🔒 Collect SOC 2 AWS IAM evidence to Google Sheets with Gmail alerts

> ⚡ **103 views** · 🔒 [SecOps & Security Automation](../)

## Description

**Your automated compliance assistant that pulls, formats, and logs AWS infrastructure evidence to Google Sheets on a recurring schedule.**

Stop manually exporting IAM user lists and CloudTrail logs for your auditors. This workflow orchestrates the collection of critical infrastructure evidence, validates the data integrity, and appends it to your compliance source of truth automatically. You maintain the cloud; it maintains the proof.

This is not a generic "checklist" template. It is a functional operational pipeline designed to generate empirical evidence for Trust Services Criteria (TSC) compliance.

---

## How the workflow works
The workflow executes in four strategic stages:

1.  **Initialize & Schedule**: The workflow runs on a quarterly cron schedule (or manual trigger). It initializes the audit metadata, including a precise collection timestamp and the specific Trust Services Criteria (TSC) category being addressed.
2.  **Native AWS Extraction**: Using the native AWS IAM node, the workflow queries your global identity directory. It fetches the "Get Many" user list, ensuring a clean capture of every active identity currently possessing access to your infrastructure.
3.  **Data Normalization**: A specialized code node parses the raw AWS response. It extracts critical auditor data—including Usernames, ARNs, and Account Creation Dates—and injects a "Review Required" status to facilitate human-in-the-loop compliance verification.
4.  **Evidence Logging & Reporting**: 
    * **Success Path**: Evidence is appended to your master Google Sheet. A summarizer node calculates the total user count and fires a professional HTML Executive Summary to your inbox.
    * **Failure Path**: If authentication fails (e.g., Signature Mismatch) or the directory is empty, a high-priority warning email is sent with specific troubleshooting steps to ensure you never miss a compliance window.

---

## Benefits
* **Auditor-Ready Structure**: Does not just dump data; it organizes it by ARN and Creation Date with a built-in "Review Status" column for your compliance team.
* **Self-Healing Logic**: Built-in `SignatureDoesNotMatch` detection. If the AWS connection drops, you get a detailed troubleshooting alert instead of a silent failure.
* **Zero Data Loss**: Uses n8n's native credential encryption to securely handle AKIA keys, ensuring your most sensitive infrastructure metadata is never exposed in logs.
* **Eliminates "Audit Panic"**: By running on a quarterly schedule, you build a continuous trail of evidence, avoiding the 40-hour "last-minute scramble" before the auditor arrives.
* **Executive Visibility**: Every run generates a formatted HTML report. You don't have to check a spreadsheet to know you're compliant; you'll see the green "Success" header in your inbox.

---

## Target Audience
* **CTOs & DevOps Leads** at startups preparing for their first SOC 2 Type I or Type II audit.
* **Compliance Officers** who need an automated "System of Record" for identity access.
* **Security Engineers** looking to replace manual AWS exports with immutable, timestamped logs.
* **Managed Service Providers (MSPs)** managing compliance for multiple client AWS accounts.

---

## Required APIs
* **AWS IAM Credentials**: Access Key (AKIA) and Secret Key with `iam:ListUsers` permissions. 
    * **Note**: Set region to `us-east-1` in n8n credentials.
* **Google Sheets OAuth2**: To append evidence to your master compliance spreadsheet.
* **Gmail OAuth2**: To deliver the Executive Summary and Failure Alert reports.

---

## Easy Customization
* **Adjust Cadence**: Change the Cron expression in the Schedule node to run weekly or monthly for higher-fidelity evidence.
* **Notification Channels**: Swap Gmail for Slack, Discord, or Microsoft Teams to fit your team's communication stack.
* **Output Destination**: Easily replace Google Sheets with Airtable, PostgreSQL, or Supabase for enterprise-grade data handling.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, AWS IAM

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
