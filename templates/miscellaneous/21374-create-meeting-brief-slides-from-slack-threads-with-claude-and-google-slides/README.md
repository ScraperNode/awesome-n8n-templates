# 🔧 Create meeting brief slides from Slack threads with Claude and Google Slides

> ⚡ **19 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow turns a pasted conversation or a Slack thread into a meeting-brief Google Slides deck by summarizing it with Anthropic Claude and filling a copied Google Slides template, then returning a link via a Slack thread reply or an n8n form completion page.

## How it works
1. Triggers either when someone submits the n8n form with a pasted conversation or when the workflow is @mentioned in a Slack thread.
2. For Slack mentions, verifies the requester is on an allowed user list, fetches the thread replies from Slack, and looks up participant display names via the Slack API.
3. Normalizes the conversation into a numbered transcript (optionally including Slack timestamps in the configured time zone) and stops if there are fewer than two messages.
4. Sends the transcript and slide purpose to Anthropic Claude (Haiku) to generate a JSON brief containing a title plus background, discussion points, decisions needed, and next steps with quoted sources.
5. Validates the AI output by checking that quoted sources exist in the conversation and that any numbers/dates and owners are supported by the cited messages, dropping unsupported items.
6. Copies a Google Slides template in Google Drive and uses the Google Slides API to replace {{placeholders}} with the validated brief content and a sources section.
7. Posts the Slides link (and any dropped items/reasons) back to the originating Slack thread or displays the result in the form completion page.

## Setup
1. Add credentials for Slack (bot token), Anthropic, Google Drive, and Google Slides (OAuth2).
2. Create a Google Slides template deck containing the required {{placeholders}} and paste its file ID into the workflow configuration.
3. Configure your Slack app with Event Subscriptions for app_mention pointing to the Slack trigger webhook URL and grant scopes app_mentions:read, channels:history, chat:write, and users:read.
4. Update the allowed Slack user IDs list (and optionally max items, max messages, and time zone) in the workflow configuration.

## 🔗 Nodes Used

HTTP Request, Slack, Google Drive, Basic LLM Chain, Anthropic Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
