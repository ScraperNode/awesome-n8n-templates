# 🔧 Count and validate parcel requests with HTTP webhooks

> ⚡ **81 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This starter workflow fetches your personal Challenge 05 parcel-request dataset from n8n’s Community Weekly Challenge API and provides placeholders to calculate three request counts (needs correction, express ready, standard ready) and optionally validate each answer via the challenge check endpoint.

## How it works
1. Runs manually when you click the manual trigger.
2. Stores your forum username, participant key, and the challenge base URL used for API calls.
3. Sends an HTTP GET request to the Community Weekly Challenge endpoint to fetch your “requests” data file for your username.
4. Splits the returned JSON into 30 individual request items from the `rows` array.
5. Lets you add your own routing/validation and counting logic, then place the three resulting counts into the Stage 1, Stage 2, and Stage 3 answer fields.
6. Optionally posts each stage’s answer to the `/check` endpoint to validate it (the check steps are disabled by default).

## Setup
1. Register for Challenge 05 and enter your forum username and participant key in the Settings values.
2. Keep the provided base URL and ensure the HTTP request authentication is set to None so the key is only sent in the `x-participant-key` header.
3. Build the missing validation/routing and summarization logic after the request-splitting step, and map the final counts into `b1`, `b2`, and `b3` (as numbers) before enabling any optional check requests.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
