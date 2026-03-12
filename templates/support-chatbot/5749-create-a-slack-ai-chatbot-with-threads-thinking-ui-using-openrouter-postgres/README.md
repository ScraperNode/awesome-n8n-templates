# 💬 Create a Slack AI chatbot with threads & thinking UI using OpenRouter & Postgres

> ⚡ **3,533 views** · 💬 [Support Chatbots](../)

## Description

## Overview

Slack quietly released an update to their API that allows developers to build "AI Apps & Agents", which is a special classification of apps that have access to several special capabilities including:
- Multiple simultaneous chat threads with one user 
- Loading "three dots" UI while your agent is thinking
- Option for users to pin your app to their top bar for quick chat access

This workflow demonstrates how to build a Slack agent that takes advantage of all of these features.

For a full video walkthrough of this workflow, watch [this YouTube tutorial](https://youtu.be/2DptBvZPKRs).

## Setup Instructions

All of the below steps are **required** for this workflow to function properly unless otherwise noted.

### Create a Slack App
1. Visit [api.slack.com](https://api.slack.com/) and click "Your Apps"
2. Create a new app from scratch and follow the setup instructions
3. In the **Agents & AI Apps** tab, enable the toggle and give your app a brief description
4. In the **OAuth & Permissions** tab, enable the following bot token scopes:
	1. `assistant:write`
	2. `chat:write`
	3. `channels:read`
	4. `im:history`
5. Install the app into your workspace and grant the requested permissions
6. In your Slack workspace, right click your app's name in the sidebar, click "View app details", and make note of your apps **Channel ID** - you'll need this later.
7. Copy your app's **Bot User OAuth Token** - you'll need that to create your n8n credentials
8. In the **Event Subscriptions** tab, enable events and paste the workflows **PRODUCTION** webhook url (from this workflow's trigger node) into the input.
9. In the same tab under "Susbcribe to bot events", select `message.im`

### Create a Postgres database
In order to save the chat history and give your agent a working memory, you'll need your own Postgres database. You can use Supabase, Neon, or any other Postgres database provider. Once you've added your database's credentials to n8n, you can select those credentials in the *Postgres Chat Memory* node. This worklow saves all chat history in a table called *chat_histories*, but you name the table whatever you want.

### Create n8n Credentials
You'll need to create the following credentials:
1. **Slack API**. Use your Bot User OAuth Token referenced above.
2. **Bearer Auth**. Use the same Bot User OAuth Token. 
3. **Postgres**. Use the connection string or config from your database provider.
4. **OpenRouter** (or any other LLM model for the agent's model node)

### Wire Everything Up
Now that you've created your Slack app, have your Postgres database, and have created credentials, follow these steps to wire up your workflow:
1. In the "On Message Received" trigger, use your Slack API credential and enter your apps Channel ID in the "Channel To Watch" field.
2. In the "Set Thinking Status" node, use your Bearer Auth credential.
3. In the "Postgres Chat Memory" node, use your Postgres credential.
4. In the "Send Reply" node, use your Slack API credential.


## Using the Chatbot
Once you've completed the setup process and added in your credentials, you'll have a fully functional Slack chatbot complete with threads, loading UI, and the ability to pin your app to your workspace's top bar. 

## Taking the Next Steps
Now that this skeleton app is in place, it's up to you to add horsepower to the AI agent at the center of it all. Customize the prompts and add whatever tools you'd like. The sky is the limit!

If you have any questions or feedback about this workflow, or would like me to build custom workflows for your business, email me at n8n@paperjam.agency.

## 🔗 Nodes Used

HTTP Request, Slack, AI Agent, Slack Trigger, Postgres Chat Memory, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
