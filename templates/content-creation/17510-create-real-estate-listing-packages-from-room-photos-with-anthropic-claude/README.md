# 🎬 Create real estate listing packages from room photos with Anthropic Claude

> ⚡ **36 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects an empty-room photo and property details via an n8n form, calls a virtual staging API and a real-estate comps API, uses Anthropic Claude to generate listing copy and a price, and emails a ready-to-publish listing package to an agent.

## How it works
1. Receives a form submission with an empty-room photo plus address, property type, beds, baths, and square footage.
2. Sends the photo to a virtual staging/3D-rendering API and, in parallel, queries a comps/market-data API for comparable listings near the submitted address.
3. Combines both API responses and calculates comp-based averages (price and price-per-square-foot) plus a suggested price range.
4. Waits briefly and then prompts Anthropic Claude to return JSON containing a listing title, description, key selling points, and a single suggested list price.
5. Parses the AI JSON output and falls back to a simple rule-based listing format if parsing fails.
6. Assembles a final text package including staged image and 3D walkthrough links, comps pricing summary, and listing copy, and sends it via SMTP email.

## Setup
1. Provide an Anthropic API credential for the Claude model used by the listing-generation step.
2. Replace `YOUR_STAGING_API_KEY` and ensure your virtual staging API endpoint returns a staged image URL and 3D walkthrough URL compatible with the workflow.
3. Replace `YOUR_COMPS_API_KEY` and ensure your comps/market-data API endpoint returns comparable records with price and square-footage fields.
4. Configure SMTP credentials and update the From/To email addresses for the delivery email.
5. Activate the workflow and use the generated n8n form URL to submit room photos and property details.

## 🔗 Nodes Used

Send Email, HTTP Request, AI Agent, Anthropic Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
