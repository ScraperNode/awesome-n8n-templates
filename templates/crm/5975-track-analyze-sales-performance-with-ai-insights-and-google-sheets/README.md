# 🤝 Track & analyze sales performance with AI insights and Google Sheets

> ⚡ **1,030 views** · 🤝 [CRM & Sales Operations](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically tracks individual sales rep performance—calls, emails, meetings, quota attainment—and surfaces coaching insights. Free your managers from manual report building and focus on improvement.

## Overview

On a daily schedule, the workflow queries CRM and telephony/email logs, aggregating activity metrics per rep. OpenAI analyzes patterns, flags underperformance or standout achievements, and suggests tailored coaching tips. Results are delivered as a nicely formatted Slack message and stored in Airtable.

## Tools Used

- **n8n** – Automation backbone
- **CRM + Telephony APIs** – Provide activity data
- **OpenAI** – Generates insights and coaching tips
- **Slack** – Sends manager digest
- **Airtable** – Maintains historical performance records

## How to Install

1. **Import the Workflow** into n8n.
2. **Connect Data Sources**: Add CRM, VoIP, and email API keys.
3. **Set Up OpenAI**: Enter your API key.
4. **Authorize Slack & Airtable**.
5. **Customize Metrics**: Modify the aggregation node to focus on your KPIs.

## Use Cases

- **Sales Coaching**: Provide reps with daily feedback.
- **Performance Management**: Quickly identify top and low performers.
- **Incentive Programs**: Track achievements for rewards.
- **Revenue Operations**: Unify activity data into one source.

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #salesperformance #openai #salescoaching #n8nworkflow #nocode #revenueops

## 🔗 Nodes Used

Google Sheets, AI Agent, OpenAI Chat Model, Auto-fixing Output Parser, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
