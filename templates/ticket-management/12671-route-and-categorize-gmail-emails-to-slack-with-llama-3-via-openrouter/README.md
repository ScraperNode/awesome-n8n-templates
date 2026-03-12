# 🎫 Route and categorize Gmail emails to Slack with Llama 3 via OpenRouter

> ⚡ **13 views** · 🎫 [Ticket Management & Triage](../)

## Description

This n8n template from [Intuz](https://www.intuz.com/) provides a complete and automated solution to transform your team's inbox management. 

It acts as an intelligent agent that reads incoming Gmail messages, uses AI to determine their category, and automatically routes them to the correct Slack channel—even creating new channels on the fly for new topics.

## Who's this workflow for?
- Customer Support Teams
- Sales & Lead Management Teams
- Operations & Project Management Teams
- Any team that uses Slack as a central hub for communication and triaging tasks.

## How it works
**1. Monitor New Emails:**
The workflow continuously checks a specified Gmail account for new, unread emails. It automatically filters out spam, drafts, and duplicates.

**2. AI Categorization:** 
Each new email's subject and body are sent to an AI model (like Llama 3 via OpenRouter). The AI analyzes the content and assigns a category based on a predefined list (e.g., sales, marketing, accounts, internal).

**3. Find or Create Slack Channel:** 
The workflow then checks your Slack workspace to see if a channel corresponding to the AI's category already exists (e.g., #sales).

**4. Route the Email:**
- If the channel exists: The workflow posts a formatted summary of the email, a link to the original message in Gmail, and a "Reply" button directly into the existing channel.
- If the channel does NOT exist: The workflow automatically creates a new public channel (e.g., #new-category), invites a designated user, and then posts the email summary.

## Key Requirements to Use This Template

**1. n8n Instance & Required Nodes:**
- An active n8n account (Cloud or self-hosted).
- This workflow uses the official n8n LangChain integration (@n8n/n8n-nodes-langchain). If you are using a self-hosted version of n8n, please ensure this package is installed.

**2. Gmail Account:** 
An active Gmail account with API access enabled.

**3. Slack Workspace & App:**
- A Slack workspace where you have permission to install apps.
- A Slack App with a Bot Token that has the following scopes: channels:read, channels:manage, chat:write, groups:write, and users:read.

**4. OpenRouter Account:** 
An account with OpenRouter to access various AI models like Llama 3. You will need an API key.

## Setup Instructions
**1. Gmail Configuration:**
- In the "Capture Gmail Event" (Gmail Trigger) node, connect your Gmail account using OAuth2 credentials.

**2. OpenRouter AI Configuration:**
- In the "OpenRouter Chat Model" node, create a new credential and add your OpenRouter API key.

**3. Slack Configuration:**
- Create a Slack App: Go to api.slack.com/apps, create a new app, and install it to your workspace.
- Set Permissions: In your app's "OAuth & Permissions" settings, add the following Bot
- Token Scopes: channels:read, channels:manage, chat:write, groups:write, users:read. Reinstall the app to your workspace after adding them.
- Get Bot Token: Copy the "Bot User OAuth Token" (it starts with xoxb-).
- Connect in n8n: In all Slack nodes in the workflow, create a new credential and paste this Bot Token.
- Set User to Invite: In the "Invite a user to a channel" node, replace the placeholder User ID (U0A6ULM7CGK) with the Slack Member ID of the user you want to be automatically invited to new channels.

**4. Activate the Workflow:**
Save the workflow and toggle the "Active" switch to ON. Your intelligent email routing system is now live!

## Support
If you need help setting up this workflow or require a custom version tailored to your specific use case, please feel free to reach out to the template author:

- Website: https://www.intuz.com/n8n-workflow-automation-templates
- Email: getstarted@intuz.com
- LinkedIn: https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz

## For Custom Worflow Automation
Click here- [Get Started](https://www.intuz.com/get-started)

## 🔗 Nodes Used

Slack, Gmail Trigger, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
