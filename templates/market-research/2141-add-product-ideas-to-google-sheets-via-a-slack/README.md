# 📊 Add product ideas to Google Sheets via a Slack

> ⚡ **1,406 views** · 📊 [Market Research & Insights](../)

## Description

## Use Case
This workflow is a slight variation of a workflow we're using at n8n. In most companies, employees have a lot of great ideas. That was the same for us at n8n. We wanted to make it as easy as possible to allow everyone to add their ideas to some formatted database - it should be somewhere where everyone is all the time and could add a new idea without much extra effort. Since we're using Slack, this seemed to be the perfect place to easily add ideas. In this example, we're adding the ideas to Google Sheets instead of Notion, like we do.
## What this workflow does
This workflow waits for a webhook call within Slack, that gets fired when users use the `/idea` command on a bot that you will create as part of this template. It then checks the command, adds the idea to Google Sheets and notifies the user about the newly added idea as you can see below:

![image 16.png](fileId:752)
## Creating your Slack bot
1. Visit https://api.slack.com/apps, click on `New App` and choose a name and workspace.
2. Click on `OAuth & Permissions` and scroll down to Scopes -&gt; Bot token Scopes
3. Add the `chat:write` scope
4. Head over to `Slash Commands` and click on `Create New Command`
5. Use `/idea` as the command
6. Copy the test URL from the **Webhook** node into `Request URL`
7. Add whatever feels best to the description and usage hint
8. Go to `Install app` and click install
## Setup
1. Create a Google Sheets document with the columns `Name` and `Creator`
2. Add your Google credentials
3. Fill the `Set me up` node. 
4. Create your Slack app (*see other sticky*)
5. Click `Test` workflow and use the `/idea` comment in Slack
6. Activate the workflow and exchange the Request URL with the production URL from the webhook
## How to adjust it to your needs
- You can adjust the table in Google Sheets and for example, add different types of ideas or areas that they impact
- Rename the Slack command as it works best for you
## How to enhance this workflow
At n8n we use this workflow in combination with some others. E.g. we have the following things on top:
- We additionally have a `/bug` Slack command that adds a new bug to Linear. Here we're using AI to classify the bugs and move it to the right team. ([Bug command workflow](https://n8n.io/workflows/2153-add-a-bug-to-linear-via-slack-command) and [Ai Classifier workflow](https://n8n.io/workflows/2154-classify-new-bugs-in-linear-with-openais-gpt-4-and-move-them-to-the-right-team))
- We also added other types, like `/pain` to be less solution-driven
- To make it easier for everyone to give input, we added a `Votes` column that allows everyone to vote on ideas/pain points in the list
- We're also running a workflow once a week that highlights the most popular new ideas and the most active voters

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
