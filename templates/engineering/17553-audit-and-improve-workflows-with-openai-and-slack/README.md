# ⚒️ Audit and improve workflows with OpenAI and Slack

> ⚡ **6 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow runs weekly to audit your n8n workflows with OpenAI, posts improvement reports to Slack, and stores per-workflow scan preferences in an n8n Data Table that users can toggle by reacting with :x: in Slack.

## How it works
1. Runs weekly on a schedule, retrieves all workflows via the n8n API, and merges them with an n8n Data Table list of workflows that are excluded from scanning.
2. Iterates through the workflows that should be scanned and prepares a cleaned representation of each workflow (nodes, connections, and AI sub-node relationships) for analysis.
3. Uses OpenAI to group the workflow canvas into logical sections and generates a structured overview, then creates and collision-resolves sticky notes to document the workflow before exporting the updated workflow JSON.
4. Parses the exported workflow and uses OpenAI to produce a scored audit report with workflow-level and node-level improvement suggestions.
5. Sends the audit summary, scores, and issues to a Slack channel as a rich block message and adds an :x: reaction to the posted message.
6. Waits briefly and then upserts the workflow’s ID, name, scan flag, and Slack message timestamp into the n8n Data Table for tracking and future runs.
7. Listens for Slack reaction events, and when a user adds or removes an :x: reaction on a report message, updates the Data Table to disable or re-enable scanning for the associated workflow and posts a confirmation to Slack.

## Setup
1. Create an n8n API key credential and ensure the instance has permission to list workflows.
2. Add OpenAI API credentials for the OpenAI Chat Model nodes.
3. Add Slack OAuth credentials for both the Slack action nodes and the Slack Trigger, and set the target channel where reports and reactions are handled.
4. Run the manual trigger once to create the “AI Workflow Improvements” n8n Data Table and confirm the workflow uses the correct table ID in the Data Table nodes.
5. In Slack, enable event subscriptions for the Slack Trigger and configure the generated webhook so reaction_added and reaction_removed events are delivered for the selected channel.

## Requirements
- OpenAI API Key, Slack Account

## Additional info
Need help? Contact us [here](https://sailingbyte.com/contact/) or visit [sailingbyte.com](https://sailingbyte.com)!
 
Happy auditing!

## 🔗 Nodes Used

Slack, n8n, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
