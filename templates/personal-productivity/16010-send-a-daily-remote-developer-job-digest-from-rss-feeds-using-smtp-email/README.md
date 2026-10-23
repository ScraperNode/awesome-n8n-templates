# ⚡ Send a daily remote developer job digest from RSS feeds using SMTP email

> ⚡ **56 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow runs daily at 8 AM, reads multiple remote job RSS feeds (RemoteOK, WeWorkRemotely, and Himalayas), filters postings by keyword and age, deduplicates jobs across runs, and sends an HTML digest email via SMTP.

## How it works
1. Runs every day at 8:00 AM based on your n8n server time zone.
2. Loads the configuration, including RSS feed URLs, keywords, max age, sender, and recipient, then iterates through each RSS feed URL.
3. Retrieves jobs from each RSS feed and logs any errors while continuing with other sources.
4. Standardizes job listings into a uniform format and filters them to retain only those that match your keywords and were posted within the last specified number of hours.
5. Removes jobs with URLs that have already been processed in previous runs using consistent workflow data.
6. Consolidates all newly discovered jobs and, if any are present, creates a styled HTML email digest and sends it via SMTP.
7. If there are no new job matches, the workflow omits sending an email and provides a status message.

## Setup
1. Create and configure SMTP credentials, including host, port, username, password, and TLS/SSL settings for email sending.
2. Update the configuration values for `recipientEmail` and `senderEmail` to the desired addresses.
3. Edit the `jobBoards`, `keywords`, and `maxAgeHours` settings to align with your desired RSS sources and filtering time frame.
4. If needed, adjust the schedule time in the daily trigger to align with your preferred sending time and time zone.

## 🔗 Nodes Used

Send Email, RSS Read, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
