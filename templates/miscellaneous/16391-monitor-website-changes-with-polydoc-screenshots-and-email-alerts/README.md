# 🔧 Monitor website changes with PolyDoc screenshots and email alerts

> ⚡ **20 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow checks a website URL every 6 hours, detects content changes by hashing the normalized HTML, and when a change is found it uses PolyDoc to capture a full-page screenshot and emails the PNG as an attachment.

## How it works
1. Runs every 6 hours on a schedule.
2. Sets the target URL to monitor and fetches the page HTML with an HTTP request.
3. Normalizes the HTML (removing scripts/styles/comments), hashes it, and compares it with the previous run stored in workflow static data.
4. If the hash changed, PolyDoc captures a full-page PNG screenshot of the URL.
5. Sends an email with the screenshot attached and the monitored URL in the subject and body.

## Setup
1. Update the monitored website URL in the Settings step.
2. Add your PolyDoc API credentials to the PolyDoc screenshot step.
3. Configure an SMTP email credential and set the to/from email addresses in the email step.

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
