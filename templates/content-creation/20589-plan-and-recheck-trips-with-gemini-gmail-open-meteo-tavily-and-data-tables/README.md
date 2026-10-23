# 🎬 Plan and recheck trips with Gemini, Gmail, Open-Meteo, Tavily and Data Tables

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow uses n8n Forms, Google Gemini, Tavily web search, Google Maps Routes API, and Gmail to collect traveler preferences and trip details, verify feasibility with evidence-backed research, generate a day-by-day itinerary, store it in n8n Data Tables, and run a scheduled pre-trip recheck.

## How it works
1. Starts from an n8n Form where the traveler selects a language, then collects travel style, interests, food/stay preferences, and special considerations with validation and correction screens.
2. Saves the normalized traveler profile to an n8n Data Table for reuse.
3. Collects trip basics and trip-specific preferences (dates, origin/destinations, transport preference, accommodation status, budget, and must-visit notes) and validates the inputs.
4. Uses Google Gemini to determine which real-world feasibility checks are required, then performs targeted research using Tavily and driving-time lookups via the Google Maps Routes API.
5. Verifies and synthesizes research findings and asks Google Gemini to decide whether itinerary generation can proceed and what conditions or rechecks to carry forward.
6. Generates a structured multi-day itinerary with Google Gemini, stores the itinerary and recheck plan in an n8n Data Table, renders an HTML view, and emails the plan to the traveler via Gmail.
7. Runs daily on a schedule to find upcoming planned trips, rechecks weather (Open-Meteo), transport/facility/traffic conditions (Tavily + Google Gemini analysis), and either sends a status email or rebuilds and re-saves the itinerary when changes are required.

## Setup
1. Add credentials for Google Gemini (Google PaLM) and update the workflow to use your Gemini project/connection.
2. Add a Tavily API credential for web search.
3. Add a Google Maps Routes API key via HTTP Header Auth and ensure the Routes API is enabled in your Google Cloud project.
4. Add a Gmail OAuth2 credential and verify the sender account that should deliver the itinerary and recheck emails.
5. Create (or select) the two n8n Data Tables used for storage (travel_profiles and travel_trip_records) and update the Data Table node IDs if they differ in your workspace.

## Requirements
- Google Gemini API access, Tavily API access, Google Maps Routes API enabled in Google Cloud, a Gmail account with OAuth2 configured, and n8n Data Tables for traveler profiles and trip records.

## Customization
- Adjust the form fields, supported languages, itinerary prompts, feasibility rules, pre-trip recheck timing, email content, and research criteria to match your travel-planning use case. You can also change the Data Tables, Gemini models, and external research services.

## Additional info
The workflow contains two coordinated automation paths: an interactive trip-planning flow and a scheduled pre-trip recheck flow. The recheck uses the stored itinerary and recheck plan to research only relevant conditions and rebuilds the itinerary only when verified changes materially affect the existing plan.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, Basic LLM Chain, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
