# ⚡ Daily podcast summary

> ⚡ **15,897 views** · ⚡ [Personal Productivity](../)

## Description

**What this workflow does**
- Downloads the daily top podcasts of a selected genre
- Summarizes the content of each podcast in a few paragraphs
- Sends the summaries and the direct link to each podcast in a formatted email

**Setup**
 1. Create a free API key on Taddy here: https://taddy.org/signup/developers
 2. Input your user number and API key into the `TaddyTopDaily` node in the header parameters X-USER-ID and X-API-KEY respectively.
 3. Create access credentials for your Gmail as described here: https://developers.google.com/workspace/guides/create-credentials. Use the credentials from your *client_secret.json* in the `Gmail` node.
 4. In the `Genre` node, set the genre of podcasts you want a summary for. Valid values are: TECHNOLOGY, NEWS, ARTS, COMEDY, SPORTS, FICTION, etc. Look at api.taddy.org for the full list (they will be displayed in the help docs as PODCASTSERIES_TECHNOLOGY, PODCASTSERIES_NEWS, etc.)
 5. Enter your email address in the `Gmail` node.
 6. Change the schedule time for sending email from `Schedule` to whichever time you want to receive the email.

## Test:
- Hit Test Workflow.
- Check your email for the results.

*That's it! It should take less than 5 minutes total.*

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
