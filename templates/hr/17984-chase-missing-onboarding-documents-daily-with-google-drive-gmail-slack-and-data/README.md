# 👥 Chase missing onboarding documents daily with Google Drive, Gmail, Slack, and Data Tables

> ⚡ **1 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow runs daily at 08:00 to check each new hire’s Google Drive intake folder against a role-based requirements matrix stored in n8n Data Tables, emails missing onboarding documents via Gmail with blank form templates attached, and posts a daily overdue rollup to Slack.

## How it works
1. Runs every day at 08:00 on a schedule.
2. Loads configuration values (Google Drive templates folder ID, Slack escalation channel ID, and Gmail reply-to address) and lists all blank form templates in the configured Google Drive folder.
3. Reads the paperwork requirement matrix and the onboarding roster of people whose documents are not marked complete from n8n Data Tables.
4. For each person, lists files in their Google Drive intake folder and compares filenames to required document slugs to determine what is missing and when each item is due.
5. Calculates a chase stage (gentle, firm, overdue, complete) and suppresses repeat chases based on the person’s last chased date.
6. When a chase is due, downloads matching blank form templates from Google Drive, bundles them into one email, and sends a tailored reminder via Gmail.
7. Updates the person’s roster record with the current chase stage, last chased date, missing list, and completion flag, then posts a single Slack message summarizing only the people who are overdue.

## Setup
1. Add credentials for Google Drive OAuth2, Gmail OAuth2, and Slack.
2. Replace the placeholders in the configuration step with your Google Drive templates folder ID, Slack channel ID for escalations, and the reply-to email address.
3. Create and populate the n8n Data Tables named “Paperwork Requirement Matrix” (role, doc_slug, doc_label, due_offset_days) and “Paperwork Chase Roster” (name, email, role, start_date, drive_folder_id, plus tracking fields like last_chased and docs_complete).
4. Ensure each required doc_slug appears in a blank form template filename in the templates folder and that uploaded intake files include the same slug in their filename.
5. Keep each person’s intake folder flat (no subfolders) and allow Drive listings to return all files to avoid missing documents due to truncated results.

## Requirements
- A Google Drive account that can read both the blank templates folder and every person's intake folder. Access stays read only in practice: the workflow lists and downloads, it never creates, moves or writes anything in Drive.
- The mailbox behind the Gmail credential is the visible sender. Only reply to is configurable, there is no send as or alias parameter, so chases arrive from that mailbox's own address.
- A Slack app that is already a member of the escalation channel, since the post targets a channel ID and there is no join step in the flow.
- Data Tables enabled on your n8n instance, with both tables sitting in the same project as this workflow, because they are referenced by name rather than by ID.
- An intake folder that already exists for each person with its ID stored in drive_folder_id, since nothing in the flow creates folders or resolves them by name.
- Role values that match between the roster and the matrix exactly once lowercased. There is no trimming or fuzzy matching, and start_date has to be ISO parseable because every due date is an offset from it.
- docs_complete stored as a boolean column, because the roster read filters on it being false or empty.

## Customization
- Run time is triggerAtHour on Daily 08:00 Chase Trigger. Running more often than daily is safe: the cooldown compares calendar days, so a person already emailed today will not get a second email.
- The tier thresholds and the per tier cooldown object ({ gentle: 3, firm: 2, overdue: 1 }) both sit near the top of Compute Chase Tier And Gaps. Raising a cooldown cuts email volume without changing when someone first gets chased.
- Tone lives in the three subject and body blocks at the bottom of that same Code node. Send Chase Email is set to plain text, so switch emailType to html if you want formatted mail.
- Both slug matchers in Compute Chase Tier And Gaps use a lowercase includes test, one against uploaded file names and one against template file names. Swap them for startsWith or a regex if your slugs are short.
- To widen the Slack roll up, change the is_overdue filter in Collect Overdue Escalations to also accept the firm stage, at the cost of a longer daily message.
- Post Overdue Escalation To Slack consumes one prebuilt escalation_text string, so replacing it with email, Teams or Discord needs no upstream changes.
- Disabling Download Blank Form PDF stops attaching forms; Bundle Forms Into One Email then falls through to its plain text checklist, which suits teams whose forms live in a portal.

## Additional info
Nothing inspects file contents: a document counts as received the moment a file name in the intake folder contains its slug, so an empty, unsigned or wrong version upload passes, and a short slug can match an unrelated file. Both Drive listings continue on error, so a folder ID that is wrong or not shared with the credential reads as an empty folder and that person gets chased for documents they may have already uploaded. The Gmail send also continues on error and the roster row is written either way, so a failed send still advances last_chased and nothing retries until that tier's cooldown expires. Completion is one way: once docs_complete is true the roster read skips the row, so a file deleted later never resurfaces. A roster role with no matching matrix rows produces zero requirements, which parks that person in the waiting stage permanently, never chased and never marked complete, while a blank or unparseable start_date makes every document due today and lands the person in the firm tier. The reconcile code reads one roster row per loop pass, so raising the batch size on Loop People One by One would skip everyone after the first person in each batch. There is no throttling beyond the sequential loop, so Gmail's own daily send quota is the practical ceiling on roster size.

## 🔗 Nodes Used

Slack, Google Drive, Gmail, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
