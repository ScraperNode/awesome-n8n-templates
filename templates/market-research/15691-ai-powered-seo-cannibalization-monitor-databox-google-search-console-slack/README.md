# 📊 AI-Powered SEO Cannibalization Monitor: Databox, Google Search Console & Slack

> ⚡ **1,596 views** · 📊 [Market Research & Insights](../)

## Description

# AI-Powered SEO Cannibalization Monitor: Databox, Google Search Console & Slack

This workflow runs weekly and checks multiple client websites for potential SEO cannibalization issues using Google Search Console data from Databox.

It pulls page-level **impressions** and **average position** data, prepares the data, analyzes it with AI, and sends SEO risk reports to Slack.

## Who’s it for

* SEO agencies managing multiple clients
* Client success or account managers who need weekly SEO visibility
* SEO leads who want a high-level view of client risks

## How it works

* A weekly trigger starts the workflow.
* The first Code node contains the client list and Databox metric setup.
* The loop processes each client one by one.
* Databox pulls Google Search Console impressions and average position data.
* The data is merged, cleaned, and filtered to remove low-traffic pages.
* The first AI agent checks each client for possible SEO cannibalization.
* A Slack alert is sent with the client-level findings.
* After all clients are processed, a second AI agent creates a combined leadership summary.
* The final cross-client report is sent to Slack.

## How to set up

1. Connect the **Databox MCP Client Tool** with your endpoint and authentication headers.
2. Add your clients in the first **Code** node, including:
   * Client name
   * Google Search Console data source ID
   * Impressions metric key
   * Average position metric key
3. Connect your **OpenAI** credentials.
4. Connect the **Slack** nodes to the right channels.
5. Adjust the weekly schedule if needed.

You can ask **Databox Genie** to provide the correct data source IDs and metric keys for each client, then format them in the same structure as the example Code node.

## Requirements

* n8n 1.0+
* Databox MCP access
* Google Search Console data available in Databox
* OpenAI credentials
* Slack workspace

## Output

The workflow sends two reports:

* **Client-level report:** highlights possible cannibalization issues for each client.
* **Leadership report:** summarizes SEO risks across all processed clients.

## 🔗 Nodes Used

Slack, Schedule Trigger, AI Agent, OpenAI Chat Model, MCP Client

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
