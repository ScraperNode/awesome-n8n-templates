# 🔧 Triage failing workflows with Bright Data, OpenAI GPT-5.6 and Slack

> ⚡ **0 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This error workflow triggers when any other n8n workflow fails, checks the failing URL from an external IP via Bright Data and consults the vendor’s Statuspage summary, then uses OpenAI to generate a brief verdict and posts the result to different Slack channels.

## How it works
1. Triggers when another n8n workflow execution fails via the Error Trigger.
2. Extracts the failing node, error message, HTTP code, and the URL/host involved, and classifies the failure (for example auth, rate limit, connectivity, server error, or internal code).
3. If the failure involves an external (non-owned) host, calls Bright Data Web Unlocker to fetch the same URL from an external IP and derives the vendor’s Statuspage summary URL.
4. Fetches the vendor’s `/api/v2/summary.json` through Bright Data and detects whether the vendor has declared an active incident.
5. Combines the available evidence to decide whether the issue is a vendor outage, a rate limit, or your own bug.
6. Uses OpenAI (GPT-5.6) to produce a two-sentence, evidence-based explanation of what broke and what action to take next.
7. Posts the explanation, evidence, and execution link to Slack, routing the message to an incidents, ops, or dev channel based on the verdict.

## Setup
1. Add a Bright Data HTTP Header Auth credential for the `https://api.brightdata.com/request` endpoint and set the Bright Data zone name used by Web Unlocker.
2. Add an OpenAI credential and ensure the chat model referenced in the workflow (gpt-5.6-terra) is available in your OpenAI account.
3. Add a Slack OAuth credential and set the three target channel names/IDs for outage, rate limit, and bug notifications.
4. Update the list of `your_own_domains` so calls to your own services are always classified as internal issues.
5. Activate this workflow, then set it as the Error Workflow in each workflow you want to monitor (Workflow settings → Error Workflow) so n8n routes failures to it.

## 🔗 Nodes Used

HTTP Request, Slack, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
