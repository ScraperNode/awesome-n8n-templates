# 📊 Brand visibility & sentiment analysis across AI search tools (OpenAI, Perplexity, ChatGPT)

> ⚡ **935 views** · 📊 [Market Research & Insights](../)

## Description

This n8n template demonstrates how to audit your brand’s visibility across multiple AI systems and automatically log the results to Google Sheets. It sends the same prompt to OpenAI, Perplexity, and (optionally) a ChatGPT web actor, then runs sentiment and brand-hierarchy analysis on the responses. 

Use cases are many: benchmark how often (and how positively) your brand appears in AI answers, compare responses across models, and build a repeatable “AI visibility” report for marketing and comms teams.

## 💡 Good to know
- You’ll bring your own API keys for OpenAI and Perplexity. Usage costs depend on your providers’ pricing.
- The optional APIfy actor automates the ChatGPT web UI and may violate terms of service. Use strictly at your own risk.

## ⁉ How it works
- A Manual Trigger starts the workflow (you can replace it with any trigger).
- Input prompts are read from a Google Sheet (or you can use the included “manual input” node).
- The prompt is sent to three tools:
-- OpenAI (via API) to check baseline LLM knowledge.
-- Perplexity (API) to retrieve an answer with citations.
-- Optionally, an APIfy actor that scrapes a ChatGPT response (web interface).
- Responses are normalized and mapped (including citations where available).
- An LLM-powered sentiment pass classifies each response into:
-- Basic Polarity: Positive, Neutral, or Negative
-- Emotion Category: Joy, Sadness, Anger, Fear, Disgust, or Surprise
-- Brand Hierarchy: ordered list such as Nike&gt;Adidas&gt;Puma
- The consolidated record (Prompt, LLM, Response, Brand mentioned flag, Brand Hierarchy, Basic Polarity, Emotion Category, Source 1–3/4) is appended to your “Output many models” Google Sheet.
- A simplified branch shows how to take a single response and push it to a separate sheet.

## 🗺️ How to use
- Connect your Google Sheets OAuth and create two tabs:
-- Input: a single “Prompt” column
-- Output: columns for Prompt, LLM, Response, Brand mentioned, Brand Hierarchy, Basic Polarity, Emotion Category, Source 1, Source 2, Source 3, Source 4
- Add your OpenAI and Perplexity credentials.
- (Optional) Add an APIfy credential (Query Auth with token) if you want the ChatGPT web actor path.
- Run the Manual Trigger to process prompts in batches and write results to Sheets.
- Adjust the included “Limit for testing” node or remove it to process more rows.


## ⚒️ Requirements
- OpenAI API access (e.g., GPT-4.1-mini / GPT-5 as configured in the template)
- Perplexity API access (model: sonar)
- Google Sheets account with OAuth connected in n8n
- (Optional) APIfy account/token for the ChatGPT web actor


## 🎨 Customising this workflow
- Swap the Manual Trigger for a webhook or schedule to run audits automatically.
- Extend the sentiment analyzer instructions to include brand-specific rules or compliance checks.
- Track more sources (e.g., additional models or vertical search tools) by duplicating the request→map→append pattern.
- Add scoring (e.g., “visibility score” per prompt) and charts by pointing the output sheet into Looker Studio or a BI tool.

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
