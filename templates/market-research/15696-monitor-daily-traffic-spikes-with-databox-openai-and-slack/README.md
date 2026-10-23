# 📊 Monitor daily traffic spikes with Databox, OpenAI and Slack

> ⚡ **29 views** · 📊 [Market Research & Insights](../)

## Description

# Autonomous Traffic Spike Reporting: Databox, AI & Slack

This workflow gives PPC agencies and performance teams a daily traffic and performance check across multiple clients using Databox data.

It pulls yesterday’s and day-before-yesterday’s data for key metrics, compares changes, analyzes the results with AI, and sends both client-level and cross-client reports to Slack.

## Who’s it for

* PPC agencies managing multiple client accounts
* Performance marketing teams tracking daily traffic changes
* Account managers who need fast visibility into client performance
* Operations leads who want a daily cross-client summary

## How it works

* A daily trigger starts the workflow.
* The first Code node stores the client list and Databox metric setup.
* The loop processes each client one by one.
* Databox pulls yesterday and day-before-yesterday data for:
  * Sessions
  * New users
  * Ad cost
  * Clicks
* The workflow merges and formats the metric data.
* AI checks for traffic spikes, drops, and unusual performance changes.
* A client-level Slack report is sent for each client.
* After all clients are processed, a second AI agent creates a leadership summary across all clients.
* The final cross-client report is sent to Slack.

## How to set up

1. Connect the **Databox MCP Client Tool** with your endpoint and authentication headers.
2. Add your clients in the first **Code** node, including:
   * Client name
   * Databox data source IDs
   * Metric keys for sessions, new users, ad cost, and clicks
3. Connect your **OpenAI** credentials.
4. Connect the **Slack** nodes to the right channels.
5. Adjust the daily schedule if needed.

You can ask **Databox Genie** to provide the correct data source IDs and metric keys for each client, then format them in the same structure as the example Code node.

## Requirements

* n8n 1.0+
* Databox MCP access
* Metrics available in Databox for each client
* OpenAI credentials
* Slack workspace

## Output

The workflow sends two reports:

* **Client-level report:** highlights daily traffic spikes, drops, and metric changes for each client.
* **Leadership report:** summarizes performance changes and priority risks across all processed clients.

## 🔗 Nodes Used

Slack, Schedule Trigger, AI Agent, OpenAI Chat Model, MCP Client

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
