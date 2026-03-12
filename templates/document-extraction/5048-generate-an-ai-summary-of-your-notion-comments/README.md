# 🔬 Generate an AI summary of your Notion comments

> ⚡ **932 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Use case

This automation is for teams working in Notion. When you have a lot of back and forth in the comment section, it’s easy to lose track of what is going on in the conversation. This automation relies on AI to generate a summary of the comment section. 

![](https://lh3.googleusercontent.com/d/1Zi9LqhFG1iU3q4YAM1v2DN-V7xl-eJjo)

## How it works

Every hour (the trigger can be adapted to your need and usecase), the automation checks if new comments have been added to the pages of your Notion database. If there are new comments, the comments are sent to an AI model to write a summary. The summary is then added to a predefined page property. The automation also updates a “Last execution” property. This prevents to re-generate the AI summary when no new comments have been received. 

## Setup

- Define your Notion variables: Notion database, property that will hold the AI summary, property that will hold the last execution date of the automation.
- Set up your Notion credentials.
- Set up your AI model credentials (API key).

## How to adjust it to your needs

- Use the LLM model of your choice. In this template, I used Gemini but you can easily replace it by ChatGPT, Claude, etc.
- Adapt the prompt to your use case to get better summaries: specify the maximum number of characters, give an example, etc.
- Adapt the trigger to your needs. You could use Notion webhooks as trigger in order to run the automation only when a new comment is added (this setup is advised if you’re on n8n cloud version).

## 🔗 Nodes Used

HTTP Request, Notion, Schedule Trigger, Filter, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
