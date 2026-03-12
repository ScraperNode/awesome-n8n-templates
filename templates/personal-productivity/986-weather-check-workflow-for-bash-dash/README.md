# ⚡ Weather check workflow for bash-dash

> ⚡ **1,451 views** · ⚡ [Personal Productivity](../)

## Description

This workflow returns the current weather at a predefined or given city and returns it so that it can be displayed with [bash-dash](https://github.com/n8n-io/bash-dash).

![workflow-screenshot](fileId:444)[](Link)

By default does it return the weather in Berlin if no city got defined. That default can be changed in the "Set City" node.

**Example usage:**
\- weather london

**Example bash-dash config:**
commands[weather]="http://localhost:5678/webhook/weather"

## 🔗 Nodes Used

OpenWeatherMap, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
