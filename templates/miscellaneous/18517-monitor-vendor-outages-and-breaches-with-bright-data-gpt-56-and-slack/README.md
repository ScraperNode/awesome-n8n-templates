# 🔧 Monitor vendor outages and breaches with Bright Data, GPT-5.6 and Slack

> ⚡ **12 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow monitors the third-party vendors your website depends on by fetching your homepage via Bright Data, checking each vendor’s Statuspage API and recent news, comparing results against a stored baseline, and sending change-based alerts to Slack and Gmail with an OpenAI-generated impact brief.

## How it works
1. Runs every morning on a schedule or on demand via an n8n form submission.
2. Fetches your website homepage through Bright Data Web Unlocker and extracts a ranked list of third-party vendor domains, optionally adding any extra domains you provide.
3. Checks each vendor’s Statuspage summary JSON (via Bright Data) to detect incidents, component degradations, and upcoming maintenance.
4. For selected vendors, searches Google News via Bright Data SERP and classifies matching headlines into signals like outage, breach, acquisition, shutdown, layoffs, or pricing.
5. Merges status and news signals, compares them to the prior run stored in an n8n Data Table, and flags only vendors whose indicator/incidents/news signals changed.
6. Uses OpenAI (GPT-5.6) to write a concise “what it means” and “do now” assessment for each flagged vendor based on the collected evidence.
7. Posts the brief to Slack and, for critical findings, also sends an email via Gmail, while quietly logging non-actionable results.

## Setup
1. Add a Bright Data credential (HTTP Header Auth) and set the Web Unlocker zone and SERP zone names in the Settings values.
2. Add an OpenAI credential for the GPT-5.6 chat model used to generate the impact assessments.
3. Add Slack credentials and set the target channel (for example, #alerts) used for posting reports.
4. Add Gmail credentials and set the alert recipient email address in the Settings value.
5. Create an n8n Data Table named `vendor_stack_state` with columns `vendor`, `indicator`, `incident_id`, `news_key`, and `last_change`, and set your website domain (and any `also_watch` vendors) in the workflow inputs.

## 🔗 Nodes Used

HTTP Request, Slack, Gmail, Schedule Trigger, Filter, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
