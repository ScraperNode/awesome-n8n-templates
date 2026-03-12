# ⚡ AI-generated weather analysis with NWS alerts, radar imagery, and Home Assistant

> ⚡ **4,332 views** · ⚡ [Personal Productivity](../)

## Description

# Overview

This n8n template demonstrates how you can generate an AI-produced weather analysis of your local radar loop and home assistant precipitation sensor(s) to keep your family informed of National Weather Service Alerts.

With as crazy as things have been lately in the open world, how will you and your family know when a severe or extreme alert impacts your area?

## How it Works

- This workflow is triggered by a webhook which takes a latitude and longitude json payload to identify the area for monitoring.
- Then, it fetches the National Weather Service Alerts and filters them down to alerts which are currently active and their severity.
- Next, it fetches the local precipitation value from your Home Assistant instance (a value like "Light Rain" or "No Rain", etc) coupled with your respective weather.gov radar loop image.
- It then submits this data to OpenAI and produces an output regarding the image analysis.
- Finally, it takes this analysis and uses OpenAI to again generate a short summary.

## How to Use

- Import the workflow into your n8n instance
- Update the credentials in the problematic nodes
- Make sure you adjust the radar loop image that is being used

## Requirements

- A Home Assistant Instance (you could remove this data if you wanted)
- An OpenAI account for LLM and image analysis

## 🔗 Nodes Used

HTTP Request, Webhook, Home Assistant, Filter, Summarization Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
