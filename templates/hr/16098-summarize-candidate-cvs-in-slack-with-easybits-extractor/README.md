# 👥 Summarize candidate CVs in Slack with easybits Extractor

> ⚡ **11 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow listens for CV uploads in a Slack channel, downloads the attached file, extracts key candidate details using easybits Extractor, and replies in the same thread with a formatted summary plus an interactive action card posted via the Slack Web API.

## How it works
1. Triggers when a new message is posted in the selected Slack channel.
2. Ignores messages posted by the bot itself and skips any messages that do not include a file attachment.
3. Validates that the uploaded file is a supported type (PDF, PNG, or JPEG) and replies in-thread with an error message if not.
4. Downloads the private Slack file using a bearer token and passes the binary to easybits Extractor.
5. Extracts structured CV fields (name, location, years of experience, skills, recent roles, education, salary expectations, and LinkedIn URL) and formats them into a Slack-ready markdown summary and Block Kit buttons payload.
6. Posts the candidate summary as a threaded reply in Slack and sends a second threaded message with an action card (for example, “Save to Sheet” or “Dismiss”) via Slack’s chat.postMessage API.

## Setup
1. Create and install a Slack app with Event Subscriptions enabled for channel messages, grant scopes such as chat:write and files:read, install it to your workspace, and invite the bot to the target channel.
2. Add Slack OAuth credentials for the Slack trigger/posting and add a bearer token Header Auth credential (Authorization: Bearer xoxb-...) for downloading files and calling Slack’s chat.postMessage API.
3. Install the community node package @easybits/n8n-nodes-extractor, create an easybits Extractor API credential, and ensure your Extractor is configured to return the CV fields used by the workflow.
4. Set the Slack channel ID in the trigger, replace UYOURBOTID with your bot’s Slack user ID, and activate the workflow then paste the trigger Production URL into your Slack app’s Event Subscriptions Request URL.

## 🔗 Nodes Used

HTTP Request, Slack, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
