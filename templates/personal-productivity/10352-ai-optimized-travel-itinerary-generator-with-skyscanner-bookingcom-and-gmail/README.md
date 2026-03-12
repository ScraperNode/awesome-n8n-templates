# ⚡ Ai-optimized travel itinerary generator with Skyscanner, Booking.com and Gmail

> ⚡ **1,260 views** · ⚡ [Personal Productivity](../)

## Description

## Introduction
Automates travel planning by aggregating flights, hotels, activities, and weather via APIs, then uses AI to generate professional itineraries delivered through Gmail and Slack.

## How It Works
Webhook receives requests, searches APIs (Skyscanner, Booking.com, Kiwi, Viator, weather), merges data, AI builds itineraries, scores options, generates HTML emails, delivers via Gmail/Slack.

## Workflow Template
Webhook → Extract → Parallel Searches (Flights/Hotels/Activities/Weather) → Merge → Build Itinerary → AI Processing → Score → Generate HTML → Gmail → Slack → Response

## Workflow Steps
1. Trigger & Extract: Receives destination, dates, preferences, extracts parameters.
2. Data Gathering: Parallel APIs fetch flights, hotels, activities, weather, merges responses.
3. AI Processing: Analyzes data, creates itinerary, ranks recommendations.
4. Delivery: Generates HTML email, sends via Gmail/Slack, confirms completion.

## Setup Instructions
1. API Configuration: Add keys for Skyscanner, Booking.com, Kiwi, Viator, OpenWeatherMap, OpenRouter.
2. Communication: Connect Gmail OAuth2, Slack webhook.
3. Customization: Adjust endpoints, AI prompts, HTML template, scoring criteria.

## Prerequisites
- API keys: Skyscanner, Booking.com, Kiwi, Viator, OpenWeatherMap, OpenRouter
- Gmail account
- Slack workspace
- n8n instance

## Use Cases
- Corporate travel planning
- Vacation itinerary generation
- Group trip coordination

## Customization
- Add sources (Airbnb, TripAdvisor)
- Filter by budget preferences
- Add PDF generation
- Customize Slack format

## Benefits
- Saves 3-5 hours per trip
- Real-time pricing aggregation
- AI-powered personalization
- Automated multi-channel delivery

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Gmail, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
