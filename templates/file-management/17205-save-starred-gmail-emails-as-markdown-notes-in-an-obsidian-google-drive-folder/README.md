# 📁 Save starred Gmail emails as Markdown notes in an Obsidian Google Drive folder

> ⚡ **24 views** · 📁 [File Management](../)

## Description

## Quick overview
This workflow runs daily, finds starred Gmail emails that are not yet labeled as saved, converts each email into a Markdown note with YAML frontmatter, uploads the note to a Google Drive folder synced with your Obsidian vault, and then labels the email to prevent duplicates.

## How it works
1. Runs every day at 7am on a schedule trigger.
2. Searches Gmail for emails matching your query (default: starred) while excluding messages already labeled `obsidian-saved`.
3. Converts each matching email into a Markdown file with YAML frontmatter (title, from, date, tags) and the email body, using a date-prefixed, filesystem-safe filename.
4. Processes emails one at a time to avoid rate limits and ensure reliable saves.
5. Creates a `.md` file in the selected Google Drive folder using the generated filename and Markdown content.
6. Adds the `obsidian-saved` label to the original Gmail message so it is skipped in future runs.

## Setup
1. Add Gmail OAuth credentials and ensure your account has access to read messages and apply labels.
2. Add Google Drive OAuth credentials and select the destination Drive and folder ID where your Obsidian vault syncs (for example, a folder inside your vault).
3. Create a Gmail label named `obsidian-saved` and select it in the step that adds labels to messages.
4. (Optional) Update the Gmail search query and note tag in the settings step to change which emails are captured and how notes are tagged.

## Additional info
Need help getting this into production? Vault in a different cloud folder (Dropbox, OneDrive), a self-hosted n8n writing to a local vault, or labels instead of stars? We adapt it to your setup and test the round-trip before you rely on it. From $100 fixed. https://43sunsets.com/#work

## 🔗 Nodes Used

Google Drive, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
