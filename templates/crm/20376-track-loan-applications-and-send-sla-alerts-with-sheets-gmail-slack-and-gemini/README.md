# 🤝 Track loan applications and send SLA alerts with Sheets, Gmail, Slack and Gemini

> ⚡ **2 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow monitors a Google Sheets loan application tracker, alerts the team in Slack for SLA breaches, escalates high-value loans by Gmail, sends Gemini-generated status update emails to applicants, and emails a Gemini-written daily management digest on weekdays.

## How it works
1. Runs every 30 minutes, reads the “Application Tracker” Google Sheet, and selects applications whose current status changed since the last notification while flagging SLA breaches (under_review for more than 3 days) and high-value loans (over 2,000,000).
2. If an SLA alert is due, posts an SLA breach message to a Slack channel and updates the tracker row’s timestamp.
3. Combines the remaining changed applications and escalates any high-value applications to a manager via Gmail.
4. For each changed application, uses Google Gemini to generate a short, status-specific email body and sends it to the applicant via Gmail.
5. If an applicant email send fails, waits 5 minutes and retries up to three times, then appends the failure details to a Google Sheets “Log Failed Email to Sheet” tab.
6. After a successful applicant email, updates the application row in Google Sheets (including last_notified_status and last_updated) and continues processing the next application.
7. Runs at 6 PM every weekday, reads all tracker rows, aggregates pipeline counts and SLA breaches, uses Google Gemini to draft a management digest, and emails it to the manager via Gmail.

## Setup
1. Connect Google Sheets credentials and update the spreadsheet ID and sheet tabs for “Application Tracker” and “Log Failed Email to Sheet.”
2. Connect Gmail credentials and set an n8n variable named MANAGER_EMAIL for manager escalations and daily reports.
3. Connect Slack OAuth2 credentials, ensure the target channel (for example, #loan-alerts) exists, and update the channel selection if needed.
4. Connect a Google Gemini (PaLM/AI Studio) API credential for both applicant emails and the daily management digest.
5. Ensure your tracker sheet includes the fields used by the workflow (for example application_id, applicant_name, applicant_email, loan_type, loan_amount, current_status, last_notified_status, last_updated, and last_sla_alert_sent if you want daily SLA throttling).
6. Adjust the SLA window (3 days) and high-value threshold (2,000,000) in the workflow code if your policy differs.

## Additional info
## Use Case Examples

### 1. Home Loan Processing at a Bank Branch

A bank branch managing home loan applications across multiple stages can use this workflow to automatically notify applicants every time their file moves from `submitted` to `docs_verified` to `under_review`. The loan officer no longer needs to send individual status emails, and the branch manager receives a daily pipeline digest every evening without requesting a manual report.

### 2. NBFC Personal Loan Operations

A non-banking financial company handling high volumes of personal loan applications can configure the ₹2,000,000 threshold to flag large-ticket applications for senior underwriter review. The Slack alert ensures the `#loan-alerts` channel is immediately notified when any file has sat in review too long, keeping the operations team responsive without micromanagement.

### 3. Auto Financing Company Workflow

An auto financing team can track applications from submission through final approval, with each status change triggering a warm, professionally worded applicant email customized to the loan type and amount. The retry logic ensures email delivery is resilient even during temporary Gmail outages.

### 4. Mortgage Broker Application Management

A mortgage broker managing applications across multiple lenders can maintain a single Google Sheets tracker and use this workflow to keep applicants informed at every stage, while the manager receives daily summaries of the entire pipeline without needing direct access to the spreadsheet.

### 5. Microfinance or Rural Lending Operations

A microfinance institution serving rural applicants can use the workflow to automate communication in a high-volume, low-staff environment where writing individual status emails is not operationally feasible. The Gemini-generated emails maintain a warm, human tone even when the communication is fully automated.

These five cases represent just a few of the ways this workflow can be put to work. Any lending or financial services operation that tracks applications through defined stages, communicates with applicants at each milestone, and needs management visibility into the pipeline can benefit from adapting this workflow to its specific process.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|---|---|---|
| No applicant emails are sent even though statuses changed | `current_status` and `last_notified_status` have the same value in the sheet | Update `last_notified_status` to a different value than `current_status` in at least one row and re-trigger |
| All applications are skipped on every run | `last_notified_status` is always in sync with `current_status` because it was updated after a previous run | Confirm the `Update Last Notified Status` node is only running after a successful email send, not unconditionally |
| Slack SLA alert is not firing | The application has not been in `under_review` for more than 3 days, or `sla_alert_due` is false because an alert was sent within the last 24 hours | Check the `last_sla_alert_sent` value in the sheet and verify the `last_updated` timestamp is older than the SLA threshold |
| Manager escalation email is not sent for high-value loans | `loan_amount` contains currency symbols or commas that are not being stripped correctly | Make sure the `loan_amount` field in the sheet contains a value that can be parsed by `parseFloat` after stripping non-numeric characters |
| `MANAGER_EMAIL` variable is not resolving | The variable has not been created in n8n | Go to **Settings → Variables** and add `MANAGER_EMAIL` with the correct email address |
| Gemini email body is empty or returns an error | Gemini credential is not connected or the model name is incorrect | Reconnect the Google Gemini credential on both LLM nodes and confirm the model is set to `models/gemini-3.5-flash-lite` |
| Daily digest email is not being sent at 6 PM | The cron expression does not match the n8n instance's configured timezone | Check your n8n instance timezone setting and adjust the cron expression to match the desired local time |
| Failed emails are not appearing in the failure log sheet | The `Log Failed Email to Sheet` sheet name or column structure does not match what the node expects | Confirm the sheet is named exactly `Log Failed Email to Sheet` and contains the required columns |
| The retry loop runs more than 3 times | The `Retry Count < 3?` node is comparing against the wrong counter value | Make sure the `Increment Retry Counter` node is correctly referencing `$('Process Applications').item.json.retry_count` and not a stale value |
| Google Sheets update fails after email send | Matching column `application_id` is missing or misspelled in the sheet | Confirm the `Application Tracker` sheet has an `application_id` column and that the matching key in the `Update Last Notified Status` node is set to `application_id` |
| Applicant receives duplicate emails | `last_notified_status` is not being updated correctly after the first notification | Verify the `Update Last Notified Status` node runs successfully after each email and that the matching column is `application_id` |
| High-value flag triggers for every application | `loan_amount` values in the sheet are formatted in a way that always exceeds the threshold after parsing | Review the `loan_amount` column values and make sure the threshold comparison is working against the intended numeric value |
| Workflow is active but nothing runs | The workflow triggers are schedule-based and are only active when the workflow is activated in n8n | Confirm the workflow is marked active in n8n and that the schedule trigger is not paused |


## Need Help?

Setting up automation workflows for loan processing involves multiple systems working together, and getting the details right — credential connections, sheet structures, threshold logic, Gemini prompt tuning, and Slack integration — takes time and care.

If you need help with any part of this workflow, we are here to assist. We can support you with:

- **Full workflow setup and configuration** from scratch.
- **Google Sheets structure design** to match your existing application data.
- **Customizing SLA thresholds, high-value flags, and escalation rules** to fit your lending policy.
- **Gemini prompt engineering** to match your brand voice and communication standards.
- **Adding add-ons** such as WhatsApp notifications, CRM sync, multi-product sheet support, or a self-service applicant status portal.
- **Building similar automation workflows** for other lending or financial services use cases — collections, disbursement tracking, document management, and more.
- **Troubleshooting** any execution errors or configuration issues you encounter.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
