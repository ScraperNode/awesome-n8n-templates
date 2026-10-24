# 💬 Guide home-service sales calls with GoHighLevel, Housecall Pro, and OpenAI

> ⚡ **6 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow receives step-based form submissions for a guided home-services sales call, then syncs contacts and opportunities to GoHighLevel, calculates a dynamic price range, and generates closing phrases with OpenAI, optionally creating won customers in Housecall Pro and returning JSON to the front end.

## How it works
1. Receives a POST webhook request containing form data for the current call step and normalizes the fields into a consistent structure.
2. Routes the request by `step_type` to handle customer info, service selection, pricing, AI closing language, or the final outcome.
3. For `customer_info`, creates or updates the contact in GoHighLevel with the customer’s details and property/service custom fields.
4. For `service_selection`, branches by service type and returns a list of next questions to ask, including a driveway-size prompt when pressure washing surfaces include a driveway.
5. For `pricing_request`, calculates a min/max price estimate in code using service type and property details, then formats it into a display-ready price range string.
6. For `ai_closing`, sends the call context to OpenAI and parses the response into a structured set of 2–3 closing phrases plus brief reasoning.
7. For `final_outcome`, creates the corresponding GoHighLevel pipeline opportunity (won/thinking/lost) and, if won, also creates the customer in Housecall Pro before returning the result as JSON.

## Setup
1. Add API credentials for GoHighLevel and Housecall Pro, and an OpenAI API key/credential for the chat model used to generate closing phrases.
2. Replace the `YOUR_*` placeholders for GoHighLevel location ID, pipeline ID, and the won/thinking/lost stage IDs, plus the API keys used in the HTTP requests.
3. Configure your CSR front end (or form tool) to POST to the webhook URL and include a `step_type` value of `customer_info`, `service_selection`, `pricing_request`, `ai_closing`, or `final_outcome` along with the expected fields (for example `service_type`, `property_sqft`, and `call_outcome`).

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
