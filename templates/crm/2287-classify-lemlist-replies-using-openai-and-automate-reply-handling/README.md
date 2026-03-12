# 🤝 Classify lemlist replies using OpenAI and automate reply handling

> ⚡ **2,462 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Who this is for
This workflow is for sales people who want to quickly and efficiently follow up with their leads

## What this workflow does
This workflow starts every time a new reply is received in lemlist. It then classifies the response using openAI and creates the correct follow up task. The follow-up tasks currently include:
- Slack alerts when a lead for each new replies
- Tag interested leads in lemlist
- Unsubscription of leads when they request it

The Slack alerts include: 
- Lead email address
- Sender email address
- Reply type (positive, not interested...etc)
- A preview of the reply

## Setup
To set this template up, simply follow the stickies steps in it

## How to customize this workflow to your needs
- Adjust the follow up tasks to your needs
- Change the Slack notification to your needs
- ...

## 🔗 Nodes Used

HTTP Request, Slack, Lemlist, Lemlist Trigger, Markdown, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
