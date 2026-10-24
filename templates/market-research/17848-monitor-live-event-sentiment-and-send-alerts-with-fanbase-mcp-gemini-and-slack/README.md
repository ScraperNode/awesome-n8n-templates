# 📊 Monitor live event sentiment and send alerts with Fanbase MCP, Gemini, and Slack

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow monitors a time-boxed event by pulling live activity across your social media from Fanbase MCP every 15 minutes, analyzing each interval with Google Gemini, storing results in n8n Data Tables, and posting rolling reports plus urgent alerts and a final post-event summary to Slack.

## How it works
1. Receives an event configuration submitted through an n8n form (event name, UTC start/end, and comma-separated keywords) and stores it as an active record in an n8n Data Table.
2. Runs every 15 minutes on a schedule, loads all active events from an n8n Data Table, scans your social media and determines for each one whether to collect an interval update or finalize the event when the end time has passed.
3. For events in the monitoring window, loads previously seen record IDs from an n8n Data Table, fetches recent activity from Fanbase MCP (query_activity), filters it to the current interval window, and deduplicates it.
4. Applies keyword relevance plus intent/complaint heuristics, builds interval metrics (volume, breakdowns, notable fans, and actionable messages with reply links), and sends a sample of messages to Google Gemini for structured sentiment, topics, issues, and recommended actions.
5. Merges the AI analysis with the computed metrics, stores the interval (and message shortlist) in an n8n Data Table, marks newly fetched records as seen in another n8n Data Table, and posts a rolling interval report to Slack.
6. If the interval is flagged as urgent, posts a separate urgent alert to Slack with the key reasons and top messages to reply to.
7. When an event has ended, loads all saved intervals for that event, compiles a post-event report, posts it to Slack, and marks the event as completed in the config table.

## Setup
1. Create three n8n Data Tables and connect them to the workflow: event_monitor_config (config/state), event_monitor_seen (dedup record IDs), and event_monitor_intervals (per-interval metrics and stored messages).
2. To connect socials add a Fanbase MCP OAuth2 credential for the MCP client node and confirm the endpoint URL is set to https://api.copilot.fanbase.gg/mcp.
3. Add a Google Gemini (Google PaLM) API credential for the analysis step.
4. Add a Slack credential and set the target channel in the Slack nodes used for rolling reports, urgent alerts, and the post-event report.
5. Run the form once to create an active event (all times are UTC), then enable the 15-minute schedule trigger to start monitoring.

## Requirements
- Social Media account
- FanBase MCP
- LLM API key
- Slack

## Additional info
In this example I used instagram as the source to monitor, FanBase MCP makes it easy to connect to your socials without the need to maintain API keys, or go through complex setup

## 🔗 Nodes Used

Slack, Schedule Trigger, n8n Form Trigger, Google Gemini, Data table, MCP Client

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
