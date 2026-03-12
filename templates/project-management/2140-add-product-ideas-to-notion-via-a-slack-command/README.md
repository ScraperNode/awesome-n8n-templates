# 📋 Add product ideas to Notion via a Slack command

> ⚡ **1,504 views** · 📋 [Project Management](../)

## Description

## Use Case
In most companies, employees have a lot of great ideas. That was the same for us at n8n. We wanted to make it as easy as possible to allow everyone to add their ideas to some formatted database - it should be somewhere where everyone is all the time and could add a new idea without much extra effort. Since we're using Slack, this seemed to be the perfect place to easily add ideas and collect them in Notion.
## What this workflow does
This workflow waits for a webhook call within Slack, that gets fired when users use the `/idea` command on a bot that you will create as part of this template. It then checks the command, adds the idea to Notion, and notifies the user about the newly added idea as you can see below:

![image 16.png](fileId:751)
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
1. Add a Database in Notion with the columns `Name` and `Creator`
2. Add your Notion credentials and add the integration to your Notion page.
3. Fill the setup node below
4. Create your Slack app (*see other sticky*)
5. Click `Test` workflow and use the `/idea` comment in Slack
6. Activate the workflow and exchange the Request URL with the production URL from the webhook
## How to adjust it to your needs
- You can adjust the table in Notion and for example, add different types of ideas or areas that they impact
- You might wanna add different templates in Notion to make it easier for users to fill their ideas with details
- Rename the Slack command as it works best for you
## How to enhance this workflow
At n8n we use this workflow in combination with some others. E.g. we have the following things on top:
- We additionally have a `/bug` Slack command that adds a new bug to Linear. Here we're using AI to classify the bugs and move it to the right team. (see this template and this template)
- We also added other types, like `/pain` to be less solution-driven
- To make it easier for everyone to give input, we added a `Votes` column that allows everyone to vote on ideas/pain points in the list
- We're also running a workflow once a week that highlights the most popular new ideas and the most active voters (see here)

## 🔗 Nodes Used

HTTP Request, Webhook, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
