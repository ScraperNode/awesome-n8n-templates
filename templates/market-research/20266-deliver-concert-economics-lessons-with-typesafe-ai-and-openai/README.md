# 📊 Deliver concert economics lessons with TypeSafe AI and OpenAI

> ⚡ **7 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Turn concert planning into an interactive economics lesson. This workflow powers a companion website where learners adjust ticket prices, explore costs and demand, compare outcomes, and ask questions. Deterministic calculations supply the numbers; TypeSafe AI and OpenAI guide explanations. A second webhook provides simulated or researched competing events.

## How it works
1. Receives a POST request to the “Lesson request” webhook and validates the payload, normalizes inputs, and calculates concert metrics (attendance, revenue, costs, profit, ROI) from the provided scenario.
2. Classifies the learner’s question intent with TypeSafe AI and determines whether the intent is supported with sufficient confidence.
3. If the intent is supported, sends a structured request to the OpenAI Responses API to select 1–3 approved, prewritten paragraph IDs and a scene focus for the explanation.
4. Validates the OpenAI response and falls back to a prebuilt explanation if the response is missing or invalid.
5. Returns the interactive lesson JSON (calculation results, explanation text, scene actions, and metadata) to the webhook caller, or returns a 400 error describing how to correct invalid input.
6. Receives a POST request to the “Event research request” webhook, validates the city/date/time window, and builds a research query for listings.
7. If simulation mode is selected, returns clearly labeled fictional event listings; otherwise uses the OpenAI Responses API web search tool and then verifies geography, date ranges, and duplicates before returning up to eight events.

## Setup
1. Create Header Auth credentials (header name `X-Lesson-Key`) and select them on both webhook nodes, then store the same secret in any calling app.
2. Add an OpenAI API credential and select it for both OpenAI HTTP Request nodes (lesson explanation selection and event research retrieval).
3. Install the `@typesafe-ai/n8n-nodes-typesafe-ai` community node and add TypeSafe AI credentials for the intent classification step.
4. Publish the workflow and copy both production webhook URLs, then configure your client app/server to call the correct endpoint (`economics-concert-v1` and `concert-events-v1`).
5. If the webhook paths already exist in your n8n instance, change the webhook paths and update any external callers accordingly.

## Requirements
- An n8n instance supporting the TypeSafe AI community node; TypeSafe AI and OpenAI credentials; and an HTTPS deployment of the companion Node.js website. ElevenLabs credentials are optional for spoken replies. Provider and hosting charges may apply.

## Additional info
Created by Alicia Graham for The Economics of Everything.

Live demonstration:
https://web-production-af12a.up.railway.app

Walkthrough video:
https://youtu.be/JP_wxRAzGkc

Source code:
https://github.com/Empower21/economics-of-everything-flow4gold

Complete setup instructions:
https://github.com/Empower21/economics-of-everything-flow4gold/blob/main/submission/TEMPLATE-SETUP.txt

The public demonstration uses the creator’s backend. Independent users deploy their own website and connect their own n8n workflow.

Financial assumptions and simulation listings are fictional teaching data, not forecasts. AI-assisted live listings require independent confirmation.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
