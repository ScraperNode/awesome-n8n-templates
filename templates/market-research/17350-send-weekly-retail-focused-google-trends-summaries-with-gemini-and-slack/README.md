# 📊 Send weekly retail-focused Google Trends summaries with Gemini and Slack

> ⚡ **37 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Video: https://www.youtube.com/shorts/6_wRN6BO_DU

This workflow runs weekly, fetches US Google Trends data via an HTTP request, filters and aggregates active trends, uses the Google Gemini Chat Model to identify items relevant to physical retail and logistics, then formats and posts a concise summary to a Slack channel.

## How it works
1. Runs every week on a schedule trigger.
2. Requests the Google Trends trending page for the US and parses the embedded callback data into structured trend items.
3. Filters the results to keep only trends that are still active (no end time).
4. Aggregates the remaining trend queries into a single comma-separated list and sends it to a Google Gemini Chat Model agent that returns structured JSON matches.
5. Builds a Slack-ready message by pairing the AI-selected terms back to the original trend metrics (search volume and trend score) and creates a fallback message if nothing matches.
6. Posts the formatted summary message to the selected Slack channel.

## Setup
1. Add a Google Gemini (PaLM) API credential for the Gemini Chat Model node.
2. Add a Slack OAuth credential and select the target Slack channel in the message posting step.
3. Adjust the schedule interval and, if needed, update the Google Trends URL parameters (geo, language, and hours window) to match your monitoring needs.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
