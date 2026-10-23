# ⚒️ Generate HTTP API requests from natural language with GPT-4.1 Mini

> ⚡ **27 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This n8n workflow turns plain-English requests into live HTTP API calls. An AI agent (GPT-4.1 Mini) reads your request, decides the method, URL, headers, query parameters, and body, then executes it via the HTTP request tool and returns the full response—no manual API configuration needed.

## How it works
1. Runs when you manually execute the workflow.
2. Reads your natural-language request describing the target API call (endpoint, intent, and any provided parameters).
3. Uses an OpenAI chat model to interpret the request and decide the HTTP method, URL, headers, query parameters, and JSON body.
4. Executes the generated request using n8n’s HTTP Request tool and captures the full response (status, headers, and body).
5. Outputs the API response data for you to review or use in downstream steps.

## Setup
1. Add an OpenAI API credential for the chat model used by the AI Agent.
2. Update the text in the User Request step with the API request you want to run, including any required IDs, tokens, or auth details your target API needs.
3. If the target API requires authentication, ensure you provide valid credentials in the request description or adapt the workflow to source them securely (for example from n8n credentials or environment variables).

## Requirements
- n8n instance with LangChain nodes enabled
- OpenAI API key/credential
- Target API's own credentials (key/token), supplied by the user per request

## Customization
- Swap gpt-4.1-mini for any other chat model supported by n8n's AI Agent node

## Additional info
The HTTP Request tool node uses JSON.stringify() wrapping on query/header/body fields to avoid n8n's object-serialization bug with $fromAI() outputs

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
