# 📊 Detect Meta Pixel flatlines with Claude and Gmail alerts

> ⚡ **4 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow checks Meta (Facebook) ad account pixels for inactivity using the Meta Marketing API, flags pixels that have stopped firing beyond a defined threshold, asks Anthropic Claude to suggest likely causes and first checks, and emails a readable flatline report via Gmail.

## How it works
1. Runs manually (or can be switched to a schedule) to start a pixel health check.
2. Fetches all Meta ad pixels and their `last_fired_time` from the Meta Marketing API.
3. Calculates how many hours each pixel has been quiet and flags pixels as OK, warning, flatlined, or never fired based on your thresholds.
4. Sends the flatlined (and optionally never-fired) pixel list to Anthropic Claude to generate a concise JSON diagnosis with a likely cause and first check per pixel.
5. Formats the AI output into a human-readable “Meta Pixel Flatline Report” including counts, threshold, and per-pixel diagnostics.
6. Emails the report using Gmail.

## Setup
1. Set environment variables for `META_ACCESS_TOKEN`, `META_AD_ACCOUNT_ID`, and optionally `META_API_VERSION` to allow the workflow to call the Meta Marketing API.
2. Set the `ANTHROPIC_API_KEY` environment variable to enable the Claude diagnosis request.
3. Add a Gmail credential and configure the Gmail node’s recipients/subject as needed for where the report should be sent.
4. Adjust `FLATLINE_HOURS`, `WARN_HOURS`, and `IGNORE_NEVER_FIRED` in the configuration step to match your pixel traffic expectations.

## 🔗 Nodes Used

HTTP Request, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
