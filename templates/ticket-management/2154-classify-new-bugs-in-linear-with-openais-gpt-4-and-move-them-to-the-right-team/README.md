# 🎫 Classify new bugs in Linear with OpenAI's GPT-4 and move them to the right team

> ⚡ **2,161 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Use case
When working with multiple teams, bugs must get in front of the right team as quickly as possible to be resolved. Normally this includes a manual grooming of new bugs that have arrived in your ticketing system (in our case Linear). We found this way too time-consuming. That's why we built this workflow.

## What this workflow does
This workflow triggers every time a Linear issue is created or updated within a certain team. For us at n8n, we created one general team called Engineering where all bugs get added in the beginning. The workflow then checks if the issue meets the criteria to be auto-moved to a certain team. In our case, that means that the description is filled, that it has the bug label, and that it's in the `Triage` state. The workflow then classifies the bug using OpenAI's GPT-4 model before updating the team property of the Linear issue. If the AI fails to classify a team, the workflow sends an alert to Slack.

## Setup
1. Add your Linear and OpenAi credentials
2. Change the team in the `Linear Trigger` to match your needs
3. Customize your teams and their areas of responsibility in the `Set me up` node. Please use the format `[Teamname][Description/Areas of responsibility]`. Also, make sure that the team names match the names in Linear exactly.
4. Change the Slack channel in the `Set me up` node to your Slack channel of choice.

## How to adjust it to your needs
- Play around with the context that you're giving to OpenAI, to make sure the model has enough knowledge about your teams and their areas of responsibility
- Adjust the handling of AI failures to your needs

## How to enhance this workflow
At n8n we use this workflow in combination with some others. E.g. we have the following things on top:
- We're using an automation that enables everyone to add new bugs easily with the right data via a `/bug` command in Slack (check out [this template](https://n8n.io/workflows/2153-add-a-bug-to-linear-via-slack-command) if that's interesting to you)

This workflow was built using n8n version 1.30.0

## 🔗 Nodes Used

HTTP Request, Slack, Linear Trigger, Linear, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
