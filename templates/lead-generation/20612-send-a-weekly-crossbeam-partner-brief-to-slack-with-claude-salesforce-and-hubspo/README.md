# 🎣 Send a weekly Crossbeam partner brief to Slack with Claude, Salesforce and HubSpot

> ⚡ **5 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow runs weekly and pulls overlap changes, net-new accounts, and partner suggestions from Crossbeam via MCP, uses Anthropic Claude to prioritize actions against your ICP, posts a Block Kit brief to Slack, and (after Slack approval) creates selected companies in Salesforce or HubSpot.

## How it works
1. Runs every hour on a schedule and continues only at the configured weekday/hour (or when manually triggered).
2. Queries Crossbeam MCP for recent overlap changes, net-new accounts, and partner suggestions, then deduplicates and filters results using stored history.
3. Uses Anthropic Claude (optionally with read-only Crossbeam MCP lookups) to rank weekly priorities, score ICP fit for net-new accounts, and add rationale for partner suggestions.
4. Formats the results into a single Slack Block Kit message (including partner invite buttons) and posts the weekly brief to the configured Slack channel.
5. Saves the current overlap state and partner-suggestion state to n8n Data Tables so next week’s run reports only meaningful changes and enforces the re-nudge window.
6. If net-new accounts are available, sends a Slack form in the thread to select which ones to create and waits up to the configured approval window.
7. Creates only the approved records in Salesforce (Account or Lead) or HubSpot (Company), records outcomes to a Data Table, and replies in the Slack thread with results and record links.

## Setup
1. Create and select credentials for Crossbeam MCP (OAuth2), Anthropic (Claude), and Slack (OAuth2), and invite the Slack bot to the target channel.
2. Enable Slack Interactivity for your Slack app using n8n’s webhook URL so the approval form button can submit responses.
3. Create three n8n Data Tables for overlap history, partner suggestion history, and net-new/CRM outcomes, then select the correct table IDs in the Data Table nodes.
4. In the Configure step, set your timezone, brief schedule, Slack channel ID, ICP description, and Crossbeam list/settings (pages, segments, lookback, and ignore lists).
5. Configure CRM settings by choosing Salesforce or HubSpot, setting Salesforce Account vs Lead (and Salesforce base URL or HubSpot portal ID), then test with dry_run enabled before turning dry_run off to allow record creation.

## Requirements
- Crossbeam with MCP access (credit metered: one call per page and per agent lookup, all capped in Configure me)
- Anthropic API key (Claude)
- Slack app with chat:write and interactivity for the selection form
- Salesforce or HubSpot (only used for the accounts you approve)

## Customization
- Filter net-new accounts by size, country and industry with employee_ranges, countries, industries_to_include and industries_to_exclude.
- Describe your ideal customer profile in plain words in icp_description; Claude scores fit against it.
- Change the brief day and hour, page counts, item caps and the re-nudge window for partner suggestions.
- Set crm_choice to hubspot to create HubSpot companies instead of Salesforce records.

## Additional info
Crossbeam AI Agents and List Notifications send partner alerts one by one, and Crossbeam's native CRM push only enriches records that already exist. This template gives one weekly, prioritised view across overlaps, net-new accounts and partner suggestions, and a safe way to create only the accounts you choose. Nothing is created while dry_run is true. Partner invites stay in Crossbeam: each suggestion links to Crossbeam's own invite page.

Next steps: add Claude to the channel (Claude in Slack) to draft partner intros, or enrich new accounts with Clay before creating them.

Setup guide: Crossbeam MCP server https://help.crossbeam.com/en/articles/12601327-crossbeam-mcp-server-limited-availability

## 🔗 Nodes Used

Slack, HubSpot, Salesforce, Stop and Error, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
