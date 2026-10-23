# 🔬 Send a daily digest of stale Inistate approvals via email

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs every morning to find Inistate entries stuck in a specific approval state for longer than a set number of days, then emails an HTML digest of the stale items via SMTP.

## How it works
1. Runs every morning at 9:00 on a schedule.
2. Reads configuration values for the target Inistate state name, stale-day threshold, and email recipients.
3. Queries Inistate for entries in the configured state that have not been updated since the calculated cutoff date.
4. Aggregates the returned entries into a single list.
5. Builds an email subject and an HTML table summarizing each stale entry (ID, last updated, updated by, and assignees).
6. Sends the digest email via SMTP to the configured recipients.

## Setup
1. Add an Inistate credential, then select the target workspace, module, and (if needed) a listing the account can access in the Inistate node.
2. Update the Settings values for the exact approval state name, the number of days that counts as stale, the recipient email address, and the from address.
3. Add an SMTP email credential in the email-sending node and verify your mail server allows the chosen from address.

## 🔗 Nodes Used

Send Email, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
