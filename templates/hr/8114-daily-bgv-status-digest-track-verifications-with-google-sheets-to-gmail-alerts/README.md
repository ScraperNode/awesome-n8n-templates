# 👥 Daily BGV status digest: Track verifications with Google Sheets to Gmail alerts

> ⚡ **62 views** · 👥 [HR & Recruitment](../)

## Description

# Background Verification Executive Digest Automation: Track Completed & Pending Verifications via Email (from Google Sheets)

This automation sends a daily late-night email summary to each Background Verification (BGV) executive — straight out of your “BGV Tracker” Google Sheet. Each executive gets their own digest listing candidates whose background checks were **completed today** and which ones are still **pending**, complete with clear “stale” alerts for overdue follow-ups. The workflow runs reliably via n8n, auto-grouping entries and packaging the results in a user-friendly tabular email, every day at 23:00 IST.

## Who’s it for

- **BGV team leads & vendors** who want automatic updates on their queue.
- **HR managers** looking to automate candidate tracking without manual report compilation.
- **Ops teams** with Google Sheets-based BGV tracking wanting digest emails for each owner.
- Any organization managing candidate checks across multiple owners/executives.

## How it works

1. **Schedule Trigger:** Runs every night at 23:00 IST (Asia/Kolkata), weekends OFF by default.
2. **Google Sheets:** Reads all rows from your “BGV Tracker” (tab), using columns:
	- `candidate_name`, `previous_company`, `prevco_hr_name`, `prevco_hr_email`
	- `bgv_status`, `last_follow_up`, `bgv_completion_date`, `bgv_executive`, `bgv_exe_email`
3. **Code Node #1 (“Normalize & Parse”):**
	- Cleans and lower-cases all column names for consistency.
	- Parses `last_follow_up` & `bgv_completion_date` from multiple local date formats.
	- Adds helper flags: `isCompletedToday`, `isStale` (pending and last-follow-up ≥ 3 days).
4. **Code Node #2 (“Group & Filter”):**
	- Groups rows by `bgv_exe_email` (executive).
	- Within each group: Segregates “Completed Today” and “Pending” items.
5. **Code Node #3 (“Format Digest”):**
	- Generates a personalized HTML email per executive, with two tables:
	- **Completed Today** (with candidate/prevco info)
	- **Pending** (with “stale” ⚠️ flags)
	- Builds the subject line showing per-executive summary counts.
6. **Gmail Node:**
	- Sends the formatted email to each executive automatically.
	- Can be customized for preview/test mode, CC or CSV attachments.

# How to set up
1. **Prepare Google Sheet:**
	- Create “BGV Tracker” tab (case-insensitive column names).
	- Fill columns:
	- `candidate_name`, `previous_company`, `prevco_hr_name`, `prevco_hr_email`, `bgv_status`, `last_follow_up`, `bgv_completion_date`, `bgv_executive`, `bgv_exe_email`
2. **n8n Configuration:**
	- Authenticate Google Sheets node (OAuth).
	- Authenticate Gmail node (App Password recommended).
	- Import workflow JSON and adjust credentials and sheet IDs.
3. **Test run (optional):**
	- Fill sample data in the sheet.
	- Start workflow and review “dry run” outputs (optional).
4. **Activate workflow** for daily auto-emails.

## Requirements
- A Google Sheet tab called **“BGV Tracker”** with supported columns.
- Gmail (SMTP or OAuth) credentials with permissions to send.
- n8n cloud or self-hosted, with Google and Gmail creds configured.


## How to customize
- **Change run time:** Modify the Schedule Trigger for different hours/days.
- **Weekend handling:** Add condition to skip Sat/Sun.
- **Stale threshold:** Adjust the “&gt;= 3 days” flag logic in code node.
- **Email template:** Edit HTML layout, subject, header/footer as needed.
- **Digest content:** Add/remove columns in the email tables within the code node.
- **Preview/test mode:** Add a DRY_RUN variable and IF node for safe previewing before going live.
- **Attachment/CC:** Add extra nodes to attach CSV, send summary to managers or post to Slack.


## Add‑ons
- **Manager summary:** Aggregate all digests and send to HR head or ops manager.
- **CSV exports:** Automatically attach filtered candidate lists per executive.
- **Slack reminders:** DM executives with only their stale pending items.
- **Auto-writeback:** Update next follow-up date in Sheet for stale cases.


## Use Case Examples
- **BGV vendor:** Nightly queue email lets each checker focus on fresh items to close first.
- **Recruiter audit:** HRBP gets an easy, nightly record of outstanding verifications, with overdue flags for fast escalation.
- **Multi-client projects:** Divide the worksheet, send only relevant candidates to each exec, boosting clarity and compliance.

## Common Troubleshooting

| Issue | Possible Cause | Solution |
|-------------------------------|-------------------------------------------------|----------------------------------------------|
| No emails sent | SMTP/Gmail credentials missing or expired | Re-authenticate Gmail node; check permissions|
| Some candidates missing | Sheet has missing/invalid `bgv_exe_email` | Ensure every row has valid executive email |
| Completed items not listed | Wrong/combo date formats in completion column | Use supported date format; ensure status="Completed" |
| Pending doesn’t show stale | Last follow-up date out of expected format | Use supported date format & review data |
| Workflow runs on weekends | Schedule misconfigured (or missed weekend filter)| Add/exclude Sat/Sun via config/node logic |
| Pending pool includes “To be Sent” | Status filter in code not precise | Adjust code node filter to exclude explicitly|
| Emails not delivered | Gmail sending limit exceeded | Add rate limit (wait node), check quota |


## Need Help?

If you need a hand setting up, customizing or want to add more integrations (Slack, CSVs, approvals, etc.) reach out to us at WeblineIndia anytime.

**We can setup error handling, advanced templates and even help connect your flows to external systems!**

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
