# ⚡ Weekly Notion journal & task summarization with GPT-4.1 to Discord

> ⚡ **515 views** · ⚡ [Personal Productivity](../)

## Description

## Notion Weekly Journal AI Summary
This workflow will run on a weekly schedule and retrieve your Notion Daily Journal pages for the past week and aggregate them into a ChatGPT generated concise summary. It will save that weekly summary back to your Notion as a new Note in addition to posting to a personal Discord channel.

Additionally it will also retrieve all of the Tasks you've completed in the past week and provide a quick total with a congratulatory message to a Discord channel as well.

### Requirements/Setup:
- You need Notion setup w/ a Notes database
  - If you want the Discord messages, setup a Discord webhook for your channel as well, or simply delete the Discord nodes.
- One of the properties for the Notes db should be `Type` with a value of `Journal`
- The contents of your daily Journal pages can be whatever you want
  - I've found what works best for me is the format of "What was a highlight of the day?", "What was a low point of the day?", and "What decisions did I delegate, delay, or dodge?"
- You should also create an additional `Type` for your Weekly summary page that gets created - in this case I used simply `Weekly`
- Automate this to run weekly on your day of choice. I tend to only journal on weekdays so I've set mine up to run every Friday retrieving the past week's Journal entries.


### Options:
- You don't have to use Discord, feel free to swap out with Slack or remove altogether.
- You also don't need to use the Tasks summary bottom half, simply remove that if you don't want it or need it.
- You can easily reuse this workflow to aggregate your Weekly Summary notes (that this workflow auto generates/saves) to generate a Quarterly or even Yearly summary!

## 🔗 Nodes Used

Discord, Notion, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
