# ⚡ Smart travel package finder: Search flights & hotels with Skyscanner-Booking.com

> ⚡ **1,614 views** · ⚡ [Personal Productivity](../)

## Description

## Introduction
Automates travel itinerary creation by searching flights and hotels via APIs, then uses AI to generate personalized recommendations delivered as HTML emails through Gmail.
## How It Works
Webhook receives travel requests, searches Skyscanner and Booking.com APIs in parallel, merges results, uses AI to create optimized itineraries, formats as HTML email, sends via Gmail.
## Workflow Template
Webhook → Parse & Validate → Parallel Searches (Flights: Skyscanner | Hotels: Booking.com) → Merge Data → AI Generate Itinerary → Format HTML Email → Send Gmail → Webhook Response
## Workflow Steps
1. Trigger & Validate: Webhook receives request, extracts destination/dates/budget/preferences, validates data, converts to API parameters.
2. Parallel Search: Skyscanner fetches flights with price/duration/airline. Booking.com retrieves hotels with ratings/pricing. Merge combines both into single JSON object.
3. AI Generation: AI analyzes merged data, evaluates by price/duration/rating, creates itinerary with daily schedule, pairings, costs, and rankings.
4. Delivery: Converts JSON to HTML email with tables and booking links. Gmail sends email. Webhook confirms success.
## Setup Instructions
1. API Configuration: Add Skyscanner and Booking.com API credentials in n8n.
2. Gmail Setup: Configure OAuth2 authentication.
3. Customization: Copy webhook URL, adjust validation rules, modify AI prompts and HTML template.
## Prerequisites
- Skyscanner API key
- Booking.com API credentials
- Gmail with OAuth2
- n8n instance
## Use Cases
- Personal vacation planning
- Business travel arrangements
## Customization
- Add APIs (Kiwi, Expedia)
- Filter by budget, Modify email design
## Benefits
- Saves 2-3 hours per trip
- Real-time pricing comparison

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
