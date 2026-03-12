# 👥 Send automated recruitment rejection email at end-of-day (Google Sheets | Gmail)

> ⚡ **386 views** · 👥 [HR & Recruitment](../)

## Description

# Send Automated Recruitment Rejection Emails with Google Sheets and Gmail at End-of-Day.

Automatically reads a “Candidate Status” tab in Google Sheets every day at 18:00 Asia/Kolkata, filters rows with exact (case-sensitive) rejection statuses and sends one personalized rejection email per candidate via SMTP (Gmail). It rate-limits sends, supports DRY\_RUN previews and writes a timestamp back to `rejection_sent_at` to avoid duplicates.

## Who’s it for

* Recruiters needing consistent, respectful closure at day end.
* Teams tracking hiring outcomes in Google Sheets.
* Coordinators who prefer a scheduled, hands-off workflow with safeguards.

## How it works

1. **Cron (18:00 IST)** triggers daily
2. **Google Sheets Read** → loads **Candidate Status** tab
3. **Filter** → keep rows where `status` `REJECT_STATUS_CSV` (exact match), with valid `candidate_email` and empty `rejection_sent_at`
4. **DRY\RUN?** If true → output preview only; if false → proceed
5. **Rate limit** → wait `RATE_LIMIT_SECONDS` (default 10s) between emails
6. **SMTP (Gmail)** → send personalized email per row using templates
7. **Mark as sent** → write current timestamp to `rejection_sent_at`

## How to set up

* **Sheet & Columns**: Create “Candidate Status” tab with:
`candidate_name, candidate_email, role, status, recruiter_name, recruiter_email, company_name, interview_feedback (optional), template_variant (optional), language (optional), rejection_sent_at`
* **Credentials**: Connect **Google Sheets (OAuth)** and **SMTP (Gmail)** in n8n (use App Password if 2FA)
* **Config (Set node)**:
	* `SPREADSHEET_ID`
	* `SOURCE_SHEET` = `Candidate Status`
	* `TIMEZONE` = `Asia/Kolkata`
	* `REJECT_STATUS_CSV` = e.g., `Rejected`
	* `SMTP_FROM` = e.g., `careers@company.com`
	* `SUBJECT_TEMPLATE` = `Regarding your application for {{role}} at {{company_name}}`
	* `HTML_TEMPLATE` / `TEXT_TEMPLATE`
	* `RATE_LIMIT_SECONDS` = `10`
	* `INCLUDE_WEEKENDS` = `true`
	* `DRY_RUN` = `false`
* **Activate**: Enable the workflow

## Requirements

* Google Sheet with the “Candidate Status” tab and columns above.
* SMTP (Gmail) account for sending.
* n8n (cloud or self-hosted) with Google Sheets + SMTP credentials.

## How to customize

* **Statuses**: `REJECT_STATUS_CSV` supports comma-separated exact values (e.g., `Rejected,Not Selected`)
* **Templates**: Edit `SUBJECT_TEMPLATE`, `HTML_TEMPLATE`, `TEXT_TEMPLATE`

* **Variables:** `{{candidate_name}}`, `{{role}}`, `{{company_name}}`, `{{recruiter_name}}`, and optional `{{feedback_text}}`/`{{feedback_html}}` from `interview_feedback`
* **Schedule**: Change Cron time from 18:00 to your preferred hour
* **Rate limit**: Tune `RATE_LIMIT_SECONDS` for SMTP policy
* **Preview**: Set `DRY_RUN=true` for a safe, no-send preview

## Add-ons

* **Dynamic Reply-To** per `recruiter_email`
* **Localization/Variants** via `language` or `template_variant` columns
* **Daily summary** email: sent/skip/error counts
* **Validation & logging**: log invalid emails to another tab
* **Gmail API**: swap SMTP with Gmail nodes if preferred

## Use Case Examples

* **Daily round-up**: 18:00 IST closure emails for all candidates marked `Rejected` today
* **Multi-brand hiring**: Switch `company_name` per row and personalize subject lines
* **Compliance/logging**: DRY\RUN each afternoon, review, then flip to live sends

## Common troubleshooting

* **No emails sent**: Ensure `status` exactly matches `REJECT_STATUS_CSV` (case-sensitive) and `candidate_email` is present
* **Duplicates**: Verify `rejection_sent_at` is blank before run; workflow sets it after sending
* **Blank variables**: Fill `candidate_name`, `role`, `company_name`, `recruiter_name` in the sheet
* **SMTP errors**: Check credentials, sender permissions, and daily limits
* **Timing**: Confirm workflow timezone `Asia/Kolkata` and Cron = 18:00

### Need Help?

Want us to tailor the template, add a summary report or wire up company-based variants? Contact our [n8n automation engineers](https://www.weblineindia.com/hire-n8n-developers/) at WeblineIndia and we’ll plug it in.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
