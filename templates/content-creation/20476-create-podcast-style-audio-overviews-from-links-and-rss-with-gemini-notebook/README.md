# 🎬 Create podcast-style audio overviews from links and RSS with Gemini Notebook

> ⚡ **2 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow uses an n8n form or an RSS feed plus the useapi.net Gemini Notebook (NotebookLM) API to create a new notebook from web/YouTube sources, generate an Audio Overview, and either show an in-browser player with download link or output the .m4a file for downstream steps.

## How it works
1. Starts when a user submits the “Make a podcast” form (or when the optional scheduled trigger runs to read an RSS feed and pick recent posts).
2. Normalizes the input into an episode title, up to 50 source URLs, and the requested format, length, language, optional focus, and optional Google account email.
3. Creates a new Gemini Notebook (NotebookLM) notebook via the useapi.net Gemini Notebook API.
4. Adds the URLs as notebook sources, falling back to adding links one-by-one if Google refuses a batch, then polls the notebook until sources are readable and records which sources were skipped.
5. Displays a “sources” review page for form runs, then starts an asynchronous Audio Overview generation job through the useapi.net API.
6. Polls the job until it completes and either shows a result page with an embedded audio player and download link (form flow) or downloads the .m4a and outputs it as binary data for the next node (scheduled flow).

## Setup
1. Create a useapi.net account, connect at least one Google account for Gemini Notebook (NotebookLM), and copy your useapi.net API token.
2. In n8n, create an HTTP Header Auth credential with `Authorization: Bearer <token>` and select it on all useapi.net HTTP Request steps.
3. Activate the workflow and open the published “Make a podcast” form URL to submit links (and optionally provide a connected Google account email to target a specific account).
4. To use the RSS mode, update the feed URL and settings in the workflow and enable the disabled weekly schedule trigger.

## Requirements
- A useapi.net API token (https://useapi.net/docs/start-here/setup-useapi?utm_source=n8n&utm_medium=referral&utm_campaign=notebooklm-podcast-app) and at least one Google account connected for NotebookLM (Gemini Notebook), free or paid (https://useapi.net/docs/start-here/setup-gemini-notebook?utm_source=n8n&utm_medium=referral&utm_campaign=notebooklm-podcast-app). Core n8n nodes only, tested on self-hosted n8n 2.41.

## Customization
- Change the default format, length or language on the form, add a Google Drive, S3, Telegram or podcast-host node after Episode to publish the weekly episodes, change the schedule (and lookbackDays to match), or connect more Google accounts and leave the email empty to spread episodes across them.

## Additional info
Full walkthrough with screenshots: https://useapi.net/docs/articles/notebooklm-n8n-podcast?utm_source=n8n&utm_medium=referral&utm_campaign=notebooklm-podcast-app . Source and minimal versions on GitHub (MIT): https://github.com/useapi/notebooklm-api/tree/main/n8n . Disclosure: I work on useapi.net, a third-party API that drives your own Google account. It is not affiliated with Google. Google's own NotebookLM API is Enterprise-only (Google Cloud licenses).

## 🔗 Nodes Used

HTTP Request, RSS Read, Webhook, Stop and Error, Schedule Trigger, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
