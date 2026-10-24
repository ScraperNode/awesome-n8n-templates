# 📊 Aggregate SAP news, score with OpenAI, and post summaries to Microsoft Teams

> ⚡ **313 views** · 📊 [Market Research & Insights](../)

## Description

## SAP news aggregator with AI-based scoring and Teams connection

### How it works

1. Triggers to initiate workflow from various sources.
2. Configures settings and prepares feed list for processing.
3. Iterates through feeds and fetches RSS content.
4. Processes fetched content, tags and accumulates data.
5. Normalizes, deduplicates, and filters the data.
6. Evaluates data presence, scores with AI, and generates reports for Microsoft Teams.

### Setup steps

- [ ] Configure n8n credentials for Microsoft Teams.
- [ ] Set up OpenAI API keys for AI scoring.
- [ ] Ensure RSS feed URLs are up to date in the feed list.

### Customization

Modify feed sources in the Build-Feed-List node to change news input.

## 🔗 Nodes Used

RSS Read, Microsoft Teams, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
