# 🎬 Generate fun fact HTML pages from a webhook with Mistral Cloud

> ⚡ **28 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow exposes a webhook that fetches a random fun fact from uselessfacts.jsph.pl, uses Mistral Cloud to generate a self-contained HTML webpage themed around the fact, and returns the page directly as the webhook response, or a JSON error if something fails.

## How it works
1. Receives a request on a webhook endpoint.
2. Calls the Useless Facts API to fetch a random English fun fact.
3. Sends the fact, source, and source URL to Mistral Cloud to generate a complete standalone HTML page with inline styling.
4. Returns the generated HTML as the webhook response with a text/html content type.
5. If fetching the fact or generating the page fails, returns a 502 JSON error response instead.

## Setup
1. Add a Mistral Cloud credential for the Mistral chat model used to generate the HTML.
2. Activate the workflow and copy the production webhook URL from the webhook trigger.
3. Open the webhook URL in a browser (or call it from another app) to render the generated HTML page, and refresh to get a new fun-fact site each time.

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Mistral Cloud Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
