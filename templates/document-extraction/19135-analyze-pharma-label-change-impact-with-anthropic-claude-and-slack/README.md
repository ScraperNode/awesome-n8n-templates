# 🔬 Analyze pharma label change impact with Anthropic Claude and Slack

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs on a schedule (or manually) to detect drug label updates via HTTP, uses Anthropic Claude to analyze the differences and assess impact, and then routes reviews through Slack and a sign-off step before updating product master data, logging a compliance record, and notifying Regulatory and Quality.

## How it works
1. Runs on a schedule or via a manual trigger and loads the configured product, label source URL, and notification settings.
2. Fetches the current label text from the configured regulatory source over HTTP and compares it to the last stored baseline to determine whether anything changed.
3. If the label is unchanged, the workflow ends without calling Anthropic Claude.
4. If the label changed, it fetches the related product/process/batch details from your product master system and sends the previous and new label text plus product context to Anthropic Claude for impact analysis.
5. Parses Claude’s JSON output to capture a change summary, changed sections, severity (Critical/Major/Minor), and required actions for Regulatory and Quality.
6. Routes Critical changes to a blocking sign-off step and routes Major/Minor changes to a Slack review alert while continuing.
7. When the change is approved (or for Major/Minor), it updates the product master record, logs the change to a compliance/audit API, posts notifications to Regulatory and Quality Slack channels, emails a summary, and saves the new label as the baseline for future comparisons.

## Setup
1. Add HTTP header authentication credentials for your label source API, product master data API, and compliance log API, and update the base URLs in the configuration step.
2. Add an Anthropic credential for the Claude chat model used by the AI agent.
3. Add a Slack credential and confirm the configured channel names exist for review, Regulatory, and Quality notifications.
4. Configure an SMTP/email credential and set the “to” and “from” addresses used for the summary email.
5. For Critical-change approvals, use the Wait node’s resume webhook in your approval tool to send a payload that includes a boolean (or string) field named signOffApproved.

## 🔗 Nodes Used

Send Email, HTTP Request, Slack, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
