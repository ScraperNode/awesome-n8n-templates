# 📈 FinnHub API and Slack template

> ⚡ **539 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Daily Company News Bot
### This n8n template demonstrates how to use Free FinnHub API to retrieve the company news from a list stock tickers and post messages in Slack channel with a pre-scheduled time.

### How it works
* We firstly define the list of stock tickers you are interested
* Loop over items to call FinnHub API to get the latest company news for the ticker
* Then we format the company news as a markdown text content which could be sent to Slack
* Post a new message in Slack channel
* Wait for 5 seconds, then move to the next ticker

### How to use
* Simply setup a scheduler trigger to automatically trigger the workflow

### Requirements
* FinnHub API Key
* Slack channel webhook


### Need Help?
Contact me via [My Blog](https://fans-ai-lab.com/contact) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
