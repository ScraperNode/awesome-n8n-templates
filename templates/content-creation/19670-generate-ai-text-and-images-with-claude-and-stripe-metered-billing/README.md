# 🎬 Generate AI text and images with Claude and Stripe metered billing

> ⚡ **14 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow exposes a POST webhook that authenticates requests against Stripe customer metadata, checks an active subscription and metered usage limits, generates text with Anthropic Claude or images via an external image API, records Stripe usage, and returns a synchronous JSON response.

## How it works
1. Receives a POST webhook request containing an apiKey, contentType (text or image), a prompt, and optional generation parameters.
2. Searches Stripe for a customer whose metadata.apiKey matches the incoming key and returns a 401 JSON error if no customer is found.
3. Fetches the customer’s active Stripe subscription, reads the metered subscription item, and pulls current-period usage summaries for that item.
4. Compares current usage to a per-plan monthly limit (based on the subscription’s Stripe price ID) and returns a 402 JSON error if there is no active subscription or the limit is exceeded.
5. Generates content by calling the Anthropic Messages API for text requests or by calling a configured image-generation HTTP endpoint for image requests.
6. Records a usage increment on the Stripe subscription item and returns a success JSON payload containing the generated content and updated usage counters.

## Setup
1. Add Stripe API credentials with access to Customers, Subscriptions, Subscription Items, and Usage Records.
2. Add an Anthropic API key as HTTP Header Auth and ensure the request includes x-api-key, anthropic-version, and content-type headers.
3. Store each user’s API key in Stripe customer metadata under apiKey, or replace the customer lookup step with your own key store.
4. Update the configuration values for your Anthropic model, your metered Stripe Price ID, and the planLimits map (Stripe price ID → monthly generation limit).
5. If you support image generation, set imageGenEndpoint and provide credentials/headers required by your image-generation API.
6. Copy the webhook URL after activation and configure your client app to POST requests to the /ai-saas/generate endpoint.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
