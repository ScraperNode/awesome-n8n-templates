# 📋 Post a daily project health standup to Slack with Notion and Groq

> ⚡ **6 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow runs every morning, reads yesterday’s standup and today’s active projects from Notion, uses Groq (OpenAI-compatible chat completions) to generate a red/yellow/green project health standup, posts it to Slack, and saves the new standup back to Notion for tomorrow.

## How it works
1. Runs every day at 7:30 AM on a schedule.
2. Reads the previous standup digest from a Notion “memory” database row and fetches all “Active” projects from a Notion projects database.
3. Builds a prompt that includes yesterday’s digest plus today’s project notes, last update dates, and next milestone dates.
4. If there are no active projects, posts an “All quiet” message to a Slack channel.
5. If there are active projects, sends the prompt to Groq’s chat completions endpoint to score projects as Red/Yellow/Green and list changes since yesterday.
6. Posts the generated standup text to Slack and updates the Notion memory row with today’s digest and timestamp.

## Setup
1. Add a Notion credential and set the database IDs for your Projects database and the single-row Memory database used to store the daily digest.
2. Create a Groq API header-auth credential (Authorization: Bearer <your key>) for the Groq chat completions request.
3. Add a Slack OAuth credential and select the target channel in both Slack message steps (standup and “All quiet”).
4. Ensure the Notion projects database includes fields that match the workflow mapping (Status, Project/Name, Update notes, Last update, Next milestone) and the memory database has a Digest rich text property and an Updated date property.

## Requirements
- An n8n instance, cloud or self-hosted.
- A Notion account with two databases: a Projects database and a single-row Memory database, both shared with your Notion integration.
- A Groq API key, free at console.groq.com/keys, added as a Header Auth credential.
- A Slack workspace, a channel to post in, and a Slack credential.

## Customization
- Change the schedule time (default 7:30 AM), or run it more than once a day.
- Edit the Red, Yellow, and Green thresholds in the scoring prompt to match your own risk rules.
- Swap Groq for any OpenAI-compatible chat endpoint, or change the model (default llama-3.3-70b-versatile).
- Point the Slack steps at a different channel, or adjust the standup layout in the prompt.

## Additional info
Yesterday's standup is stored in a single-row Notion memory database instead of n8n's workflow static data, so the overnight-change comparison still works on manual test runs and you can read the saved digest yourself. Groq's free tier covers this comfortably, since one run scores every active project in a single request. The workflow also includes an all-quiet guard that posts a short note rather than an empty standup when nothing is active, and it pairs with a small companion error-alert workflow you can set as the n8n Error Workflow so a failed morning run pings Slack instead of going unnoticed.

## 🔗 Nodes Used

HTTP Request, Slack, Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
