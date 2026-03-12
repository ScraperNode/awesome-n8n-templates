# 🎬 Daily RSS feed summarizer with Gemini AI to Slack with X sharing option

> ⚡ **298 views** · 🎬 [Content Creation & Video](../)

## Description

## How it works

This workflow fetches RSS feeds daily and sends a notification to Slack if new topics are found.

Since standard RSS snippets are often insufficient, the AI visits the source links to summarize the full articles and sends the summaries to Slack.
You can then share interesting topics directly to X from Slack using the button.

## How to use

* Open the **Gemini Chat Model** node (attached to the AI Agent) and set up the Credential.
  * You can obtain an API key from [Google AI Studio](https://aistudio.google.com/api-keys).
* Open the `Slack` node and set up the Credential to allow sending messages.
  * You can create a new Slack App [here](https://api.slack.com/apps).
* Finally, open the `Config` node and update the `rssUrls` parameter with the RSS feed URLs you want to follow.

## Customizing this workflow

* You can adjust the number of topics fetched per RSS feed by modifying the `takeCount` parameter in the `Config` node.

## 🔗 Nodes Used

RSS Read, Slack, Execute Sub-workflow, Execute Workflow Trigger, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
