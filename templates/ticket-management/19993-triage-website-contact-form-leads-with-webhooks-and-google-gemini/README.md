# 🎫 Triage website contact form leads with webhooks and Google Gemini

> ⚡ **1 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
Rate every website inquiry the moment it arrives. Google Gemini classifies each contact form submission as urgent, high, normal or planned, adds a short summary and a next step, and returns the result to your website instantly.

## How it works
1. Receives a website form submission via an n8n webhook endpoint.
2. Validates the request body, blocks spam using a honeypot field, and enforces per-hour and per-day limits using n8n static workflow data.
3. If the submission is valid, sends the inquiry details to the Google Gemini API and requests a strict JSON classification.
4. Parses and validates Gemini’s JSON response to extract priority, priority text, summary bullets, and the suggested next step.
5. Returns either the AI classification or a rejection/error reason back to the website as JSON.

## Setup
1. Add a Google Gemini (PaLM) API credential and select it for the HTTP request that calls the Gemini generateContent endpoint.
2. Update the business context, service map, and rate limits (BUSINESS, SERVICES, MAX_PER_HOUR, MAX_PER_DAY) in the validation code.
3. Set the webhook Allowed Origins to your website domain and configure your form to POST to the workflow’s production webhook URL.
4. Ensure your form sends the expected fields (service, answers object, message, contactPreference, and an empty honeypot field such as website).

## Requirements
- Google Gemini API key (free tier works for testing) from aistudio.google.com
- A website form that can send a POST request with JSON

## Customization
- Change the priority rules in the system prompt to match your industry
- Add an email, Slack or Google Sheets node after "Parse AI result" to notify your team or log every lead

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
