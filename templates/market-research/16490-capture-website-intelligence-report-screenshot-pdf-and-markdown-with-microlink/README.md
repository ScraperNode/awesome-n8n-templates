# 📊 Capture website intelligence report, screenshot, PDF and markdown with Microlink

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs manually to capture a screenshot and extract a Markdown representation of a webpage using Microlink. It also can convert any url into PDF, extract logos, color palette and more...

## How it works
1. Runs when you manually execute the workflow in n8n.
2. Calls the Microlink API to generate a JSON screenshot response for https://apple.com.
3. Calls the Microlink API again to fetch a Markdown version of the same page and returns it as text. Plus, it calls another url to get the pdf version of it.

## Setup
1. Add your Microlink API credentials in n8n. They're optional, you can use the free endpoint.
2. Update the target URL in both Microlink steps if you want to capture a different webpage.
3. Choose where to send or store the screenshot/Markdown output if you want to use the results outside the workflow execution data.

## Additional info
Read the https://microlink.io/docs to see all the options the API can return from and url.

## 🔗 Nodes Used

Google Sheets, Slack

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
