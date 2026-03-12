# 📱 Generate and schedule AI discussion posts for Reddit with GPT-4 and Airtable

> ⚡ **448 views** · 📱 [Social Media & Email Marketing](../)

## Description

### How the sequence works:
1. A "Schedule Trigger" node activates the automation at a defined schedule.
2. An "[Airtable](https://airtable.com)" node will search for previously posted questions in your question database.
	1. Airtable Base Template: [here](https://airtable.com/app6wzQqegKIJOiOg/shrzy7L9yv8BFRQdY)
3. An "Aggregate" node will take all the questions from Airtable and compress them to a single output.
4. ChatGPT, or a model of your choice, will generate a discussion question based on the options in the system prompt.
5. The discussion question will be posted to the subreddit of your choice by the "Reddit" node.
	1. You can choose between a text, image, or link post!
6. The recently-posted discussion question will then be uploaded to your Airtable base using the "Airtable" node. This will be used to prevent ChatGPT from creating duplicate questions.

### Setup Steps
The setup process will take about 5 minutes. An Airtable base template is also pre-made for you here: [https://airtable.com/app6wzQqegKIJOiOg/shrzy7L9yv8BFRQdY](https://airtable.com/app6wzQqegKIJOiOg/shrzy7L9yv8BFRQdY)

1. Set the recurrence in the "Schedule" node
2. Create an Airtable account, you can use the link [here](https://airtable.com/invite/r/zhjTCrgs).
3. Get an Airtable personal access token [here](https://airtable.com/create/tokens).
4. Configure the "Get Previous Discussions" Airtable node.
5. Configure the options in brackets in the "Generate New Discussion"  node.
6. Set the desired subreddit to post to and the post type(text, image, or link) in the "Post Discussion" node.
7. Configure the "Create Archived Discussion" node to map to the Airtable base(required) and specific subreddit(optional).

## 🔗 Nodes Used

Airtable, Reddit, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
