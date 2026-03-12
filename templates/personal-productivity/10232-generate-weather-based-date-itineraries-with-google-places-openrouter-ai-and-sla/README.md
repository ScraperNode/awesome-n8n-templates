# ⚡ Generate Weather-Based Date Itineraries with Google Places, OpenRouter AI, and Slack

> ⚡ **56 views** · ⚡ [Personal Productivity](../)

## Description

🧩 What this template does

This workflow builds a 120-minute local date course around your starting point by querying Google Places for nearby spots, selecting the top candidates, fetching real-time weather data, letting an AI generate a matching emoji, and drafting a friendly itinerary summary with an LLM in both English and Japanese.
It then posts the full bilingual plan with a walking route link and weather emoji to Slack.

👥 Who it’s for

Makers and teams who want a plug-and-play bilingual local itinerary generator with weather awareness — no custom code required.

⚙️ How it works

Trigger – Manual (or schedule/webhook).

Discovery – Google Places nearby search within a configurable radius.

Selection – Rank by rating and pick the top 3.

Weather – Fetch current weather (via OpenWeatherMap).

Emoji – Use an AI model to match the weather with an emoji 🌤️.

Planning – An LLM writes the itinerary in Markdown (JP + EN).

Route – Compose a Google Maps walking route URL.

Share – Post the bilingual itinerary, route link, and weather emoji to Slack.

🧰 Requirements

n8n (Cloud or self-hosted)

Google Maps Platform (Places API)

OpenWeatherMap API key

Slack Bot (chat:write)

LLM provider (e.g., OpenRouter or DeepL for translation)

🚀 Setup (quick)

Open Set → Fields: Config and fill in coords/radius/time limit.

Connect Credentials for Google, OpenWeatherMap, Slack, and your LLM.

Test the workflow and confirm the bilingual plan + weather emoji appear in Slack.

🛠 Customize

Adjust ranking filters (type, min rating).

Modify translation settings (target language or tone).

Change output layout (side-by-side vs separated).

Tune emoji logic or travel mode.

Add error handling, retries, or logging for production use.

## 🔗 Nodes Used

Function, HTTP Request, OpenWeatherMap, Slack, DeepL, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
