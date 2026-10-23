# 📊 Find press release pickups with Bright Data, GPT-5.6, Gmail and Slack

> ⚡ **4 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow takes a press release URL from an n8n form, uses Bright Data (Web Unlocker and SERP API) to find pages that republish distinctive sentences from the release, analyzes each page with GPT-5.6, posts a Slack summary, and creates Gmail drafts for unlinked pickups.

## How it works
1. Receives a form submission with the press release URL, your brand name, and your domain.
2. Fetches the press release content via Bright Data Web Unlocker and extracts a small set of distinctive “fingerprint” phrases to search.
3. Searches each fingerprint phrase on Google in quotes via Bright Data SERP API, discards phrases that behave like boilerplate, and compiles a capped list of matching result pages.
4. Fetches each candidate page via Bright Data Web Unlocker and measures how much wording overlaps with the original release and whether the page links to your domain.
5. Uses OpenAI (GPT-5.6) to summarize the outlet’s angle, what they cut, and to draft a short follow-up message only when the page does not link back.
6. Creates Gmail drafts (with no recipient) for pages that reused your wording, named your brand, and did not link, then posts a Slack summary and shows an HTML report back in the form completion screen.

## Setup
1. Create a Bright Data Header Auth credential and provide zones for both SERP API and Web Unlocker (matching the zone names used in the workflow settings).
2. Add an OpenAI credential for the GPT-5.6 chat model used to analyze articles and generate follow-up copy.
3. Add Gmail credentials with permission to create drafts in the mailbox you want to use.
4. Add Slack credentials and set the target channel name in the workflow settings (default is #comms).

## 🔗 Nodes Used

HTTP Request, Slack, Gmail, Filter, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
