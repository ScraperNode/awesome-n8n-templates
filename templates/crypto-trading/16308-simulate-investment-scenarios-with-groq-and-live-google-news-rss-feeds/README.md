# 📈 Simulate investment scenarios with Groq and live Google News RSS feeds

> ⚡ **52 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick Overview
This workflow receives investment inputs via a webhook, calculates projected returns and a risk profile, pulls matching Google News RSS headlines for market context, and uses Groq (LangChain agent) to generate a structured JSON analysis with three investment suggestions returned in the webhook response.

## How it works
1. Receives a POST webhook request with investment principal, expected annual return rate, and time horizon.
2. Validates the inputs and immediately returns a JSON error response if the amount is below 1000, the rate is outside 0–50%, or the time horizon is under 1 year.
3. Calculates compound-growth projections (future value and profit) and assigns a Low/Medium/High risk level based on the expected return.
4. Fetches Google News RSS results using a risk-specific query, sorts them by newest first, and keeps the top five headlines.
5. Sends the investment inputs, projections, risk level, and curated headlines to a Groq chat model to produce a strict-JSON summary, realism insight, and exactly three suggestions (low/medium/high risk).
6. Wraps the AI output together with the original inputs and projection details into a final JSON object and returns it to the webhook caller.

## Setup
1. Activate the Webhook trigger and copy the test/production webhook URL into the app or client that will POST the investment payload.
2. Add Groq API credentials for the Groq chat model used by the AI analysis step.
3. Ensure your webhook request body includes `principal`, `rate`, and `time` fields that match the workflow’s validation rules and calculations.
4. Optionally edit the Google News RSS query URLs to match your preferred market keywords for each risk level.

## 🔗 Nodes Used

RSS Read, Webhook, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
