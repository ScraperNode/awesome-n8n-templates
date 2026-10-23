# 📊 Compute verified campaign statistics with Amazon Bedrock AgentCore and Slack

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow receives a webhook payload of numeric campaign values, computes descriptive statistics using Amazon Bedrock AgentCore with the Code Interpreter tool, verifies the results in n8n, and posts a formatted summary to a Slack channel.

## How it works
1. Receives an HTTP POST request on a webhook with a JSON body containing a `values` array and an optional `label`.
2. Normalizes the incoming payload and sets defaults such as the agent name, Slack channel, label, and values list.
3. Sends the label and values to an Amazon Bedrock AgentCore agent configured to run Python via Code Interpreter and return strict JSON statistics.
4. Parses the agent response, recomputes the mean and count locally, and flags the output as verified only if it matches within a small tolerance.
5. Posts the verified (or unverified) statistics summary to the configured Slack channel.

## Setup
1. Create and select an Amazon Bedrock AgentCore API credential for the agent step.
2. Create a Slack credential and set the target channel name (or update/remove the Slack posting step if you don’t want notifications).
3. Activate the workflow, copy the webhook URL, and send POST requests to it with a JSON body that includes `values` (and optionally `label`).

## 🔗 Nodes Used

Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
