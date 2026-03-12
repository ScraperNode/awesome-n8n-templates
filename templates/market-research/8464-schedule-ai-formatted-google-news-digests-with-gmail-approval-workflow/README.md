# 📊 Schedule AI-formatted Google News digests with Gmail approval workflow

> ⚡ **70 views** · 📊 [Market Research & Insights](../)

## Description

# Automate Google News Digests with AI & Gmail Approval Workflow in n8n
<img src="https://massimobensi.com/shared/main-img.png">

## Overview

This n8n automation template shows how to automatically collect and format daily Google News digests on your chosen topics, send them to your Gmail inbox for quick approval, and—if declined—generate the next set of curated news articles until you approve.

==⚠️ Disclaimer: This workflow template uses community nodes and works only on n8n self-hosted instances. ==

## Use case 

Streamline content curation for social media, newsletters, or blog posts by scheduling an AI-formatted Google News workflow that saves time in finding trending stories.

## How to use

⏰ Schedule the automation to run at your preferred time.

🔎 Fetch the latest trending Google News on your selected topic with SerpApi integration.

🤖 Send articles in batches of 10 to an AI content formatter that generates clean HTML output.

📧 Receive an approval email in your Gmail inbox with the AI-formatted news digest.

❌ Decline the digest to trigger the next batch of 10 curated news articles until you approve.

📊 Workflow logic uses AirTable counters and a custom Code node to manage batching.

## Setup instructions

- Connect your SerpApi, AirTable, OpenAI, and Gmail accounts. In the Gmail node, set the variable $env.EMAIL_ADDRESS_ME or replace the “To” field with your email.

- In AirTable, create a free-tier base with two columns: WorkflowID and Counter. The workflow will manage row creation and deletion automatically.

- Define your news topic or keyword in the SerpApi “Search Query (q)” field.

- Run the workflow and check your Gmail inbox for your curated AI-powered news digest.

## Requirements

- AirTable account
- Gmail account
- SerpApi account
- OpenAI account

## Customising this workflow

⏱ Adjust the schedule in the “Schedule Trigger” node for daily, weekly, or custom timing.

🔑 Enter your niche news keyword in the “Search Query (q)” field of the SerpApi node.

📦 Change the batch size (default 10) inside the Code node “Extract Details.”

🎨 Personalize the Gmail approval email template inside the AI Agent node “Prepare Content Review Email” for branding or formatting preferences.

## 🔗 Nodes Used

Airtable, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
