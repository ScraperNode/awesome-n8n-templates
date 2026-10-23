# 📊 Send a daily paid acquisition and website intelligence report with Databox, GPT-4o and Gmail

> ⚡ **146 views** · 📊 [Market Research & Insights](../)

## Description

Your paid ads and website analytics live in separate tools. This workflow bridges both via Databox MCP, runs three specialized AI agents in sequence, and emails a daily intelligence report with a correlation layer that surfaces insights neither dataset could show alone.

## Who's it for

- **Performance marketers** who want to understand how ads influence website quality
- **Growth teams** looking for daily cross-channel signals without building custom dashboards
- **Marketing managers** who need one morning briefing covering paid spend and website behavior

## How it works

1. Schedule Trigger fires every day at 8 AM
2. Agent 1 fetches website performance from Databox: sessions, bounce rate, goal completions, conversion rate
3. Agent 2 fetches paid channel data from Databox: spend, CPC, CTR, ROAS per platform
4. Agent 3 synthesizes both outputs - ranks channel efficiency, estimates cost per quality visit, and writes 3 actionable recommendations
5. A styled HTML email report is delivered to your inbox

## Requirements

- **[Databox account](https://databox.com/?ref=n8n)** with website analytics and at least one paid ads platform connected (free plan works)
- OpenAI API key (or Anthropic)
- Gmail account

## How to set up

1. Click each **Databox MCP Tool** node - set Authentication to OAuth2 and authorize
2. Add your **OpenAI API key** to each of the three Chat Model nodes
3. Connect **Gmail** and set the recipient address in the Send Email node
4. Activate - your first report arrives tomorrow at 8 AM

## 🔗 Nodes Used

Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
