# 🎬 Generate digital product launch content with OpenAI GPT-4o-mini and Google Sheets

> ⚡ **51 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow generates a multi-channel digital product launch content pack from product details, using OpenAI to create a blog intro, LinkedIn post, X post, Instagram caption, and launch email, and can optionally append the results to Google Sheets.

## How it works
1. Runs manually when you execute the workflow.
2. Loads sample product details such as name, tagline, price, URL, target audience, and brand tone.
3. Sends the product details to OpenAI (GPT-4o-mini) with instructions to return a JSON content pack for blog, LinkedIn, X, Instagram, and email.
4. Normalizes and validates the returned JSON, ensuring all five content fields are present and formatted as plain text.
5. Optionally appends the generated content fields as a new row in Google Sheets (when the Google Sheets step is enabled).

## Setup
1. Add an OpenAI API credential and select it in the OpenAI Chat Model configuration.
2. Replace the sample product fields (especially productURL and brandTone) with your own product data or connect a real data source.
3. (Optional) Enable the Google Sheets step, add Google Sheets OAuth2 credentials, and set the target spreadsheet ID and sheet name.

## Requirements
- n8n instance (cloud or self-hosted)
- OpenAI API key

## Customization
- Swap the sample product data for your own product details
- Enable the Google Sheets node to log every generated content pack

## Additional info
Every node in this workflow was discovered and validated with n8n-mcp (a free, open-source MCP server), not guessed — see the project's GOTCHAS.md for the real bugs hit and fixed during testing.

## 🔗 Nodes Used

Google Sheets, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
