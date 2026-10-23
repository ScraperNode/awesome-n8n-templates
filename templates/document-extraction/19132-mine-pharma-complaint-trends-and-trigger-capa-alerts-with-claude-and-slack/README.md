# 🔬 Mine pharma complaint trends and trigger CAPA alerts with Claude and Slack

> ⚡ **7 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow polls a complaint-source API on a schedule, uses Anthropic Claude to extract structured defect signals from complaint narratives, clusters complaints by product and defect category, detects statistically unusual spikes against a rolling baseline, and escalates anomalies by creating a CAPA ticket and sending a Slack alert.

## How it works
1. Runs on a schedule (or manually) to start a new complaint-mining cycle.
2. Fetches recently logged complaints from a complaint system API and removes complaints already processed using workflow static data.
3. If no new complaints are found, ends the run without calling Anthropic.
4. Sends each new complaint narrative to an Anthropic Claude agent to extract product, batch/lot, defect category, and severity, and falls back to safe defaults if parsing fails.
5. Aggregates extracted complaints into clusters keyed by product and defect category, then compares each cluster’s volume to its rolling historical mean using a z-score and updates the stored baseline.
6. For clusters flagged as statistical anomalies, creates a CAPA escalation via an HTTP API and posts an alert to a Slack channel.
7. Logs every cluster (escalated and non-escalated) to a trend-store API for ongoing tracking.

## Setup
1. Configure HTTP Header Auth credentials for the complaint-source API, CAPA ticketing API, and trend-store API used by the three HTTP Request steps.
2. Add an Anthropic (Claude) API credential/connection for the AI Agent’s language model.
3. Add a Slack credential and ensure the target channels exist (for example, the default #quality-capa-escalations).
4. Update the endpoint URLs, Slack channel names, and the z-score/baseline settings in the configuration step to match your systems and desired sensitivity.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
