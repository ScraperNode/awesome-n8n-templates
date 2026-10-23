# 🔧 Catch lookalike domains with Bright Data, GPT-5.6 and Slack

> ⚡ **0 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow runs every morning to generate likely typosquat domains for your brand, discovers additional candidates via Bright Data SERP search, fetches each site through Bright Data Web Unlocker, uses OpenAI GPT-5.6 to judge live pages, stores results in an n8n Data Table, and posts only meaningful changes to Slack.

## How it works
1. Runs every day at 07:00 on a schedule.
2. Generates a capped list of lookalike domain candidates from your brand name (typos, homoglyphs, hyphens, keyword suffixes, and alternate TLDs) and builds a Google query to find additional brand-like domains.
3. Uses Bright Data SERP to retrieve Google search results, filters out major platforms and non-brand-like hosts, and appends any new candidate domains to the generated list.
4. Reads the previous sweep from an n8n Data Table, adds your real domain as a reference row, and prepares each candidate with its prior state and verdict.
5. Fetches your real domain and every candidate via Bright Data Web Unlocker, classifies each domain as unregistered, parked, live, or “serving your own pages” based on response size and content similarity.
6. Sends only live, non-mirroring pages to OpenAI (GPT-5.6) to extract an evidence-backed verdict, then compares the new verdicts to the prior sweep and upserts the latest results into the Data Table.
7. Builds a single Slack message summarizing impersonating domains, mirror-like domains, and cleared cases, and posts it only when there is something worth reporting.

## Setup
1. Create a Bright Data Header Auth credential and provide zones for both Web Unlocker and SERP, then set the zone names and search country in the workflow settings.
2. Add an OpenAI credential (for the GPT-5.6 chat model) and a Slack credential with permission to post messages.
3. Create an n8n Data Table named `domain_watch` with columns `domain`, `state`, `verdict`, `evidence`, and `checked_at`.
4. Update the Settings values for `brand_name`, `your_domain`, optional `domains_you_own`, and the target `slack_channel`, and adjust `max_candidates` to control Bright Data request volume.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, OpenAI Chat Model, Information Extractor, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
