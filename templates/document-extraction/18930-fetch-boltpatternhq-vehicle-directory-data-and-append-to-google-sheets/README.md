# 🔬 Fetch BoltPatternHQ vehicle directory data and append to Google Sheets

> ⚡ **16 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow downloads public vehicle directory JSON from [BoltPatternHQ - The Automotive Fitment Database](https://boltpatternhq.com/) for use in your own processing.

## How it works
1. Starts when you manually execute the workflow in n8n.
2. Sends an HTTP request to BoltPatternHQ’s public `search_index.json` endpoint to fetch the full vehicle directory data.
3. Returns the downloaded JSON in the workflow output for inspection or downstream use. This is very useful for anyone who wants to build automation around car modifications or auto parts e-commerce. You can easily integrate this public dataset into your own pipeline without worrying about authentication or API keys.

## Setup
1. Ensure your n8n instance can reach https://boltpatternhq.com/static/js/search_index.json (network/proxy/firewall settings as needed).
2. Update the request URL if BoltPatternHQ changes the endpoint or if you want to point to a different dataset. No API keys or authentication headers are needed. Just make sure you have internet access to reach the public domain. This simple setup ensures that you can test the vehicle directory data immediately and build further downstream automation tasks seamlessly.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
