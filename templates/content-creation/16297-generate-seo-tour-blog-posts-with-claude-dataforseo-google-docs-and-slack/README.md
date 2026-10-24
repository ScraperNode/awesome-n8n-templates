# 🎬 Generate SEO tour blog posts with Claude, DataForSEO, Google Docs, and Slack

> ⚡ **23 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow collects tour details via an n8n form, analyzes your website’s brand voice with Anthropic Claude, researches real SEO keywords and Google “People Also Ask” questions with DataForSEO, then writes a structured long-form article, saves it as a Google Doc, and posts the doc link to Slack.

## How it works
1. Receives tour and SEO targeting details from an n8n form submission.
2. Uses Anthropic Claude to crawl your website and extract brand tone, style rules, banned phrases, and an ideal traveller profile.
3. Uses Anthropic Claude to generate seed keywords, then calls DataForSEO to fetch keyword suggestions and search volumes and selects a primary keyword plus secondary keywords.
4. Calls DataForSEO SERP API to pull top organic result titles and Google People Also Ask questions for the primary keyword.
5. Uses Anthropic Claude to write eight article sections (title/meta, introduction, inclusions, itinerary, pricing, audience fit, best time, and an FAQ sourced from PAA questions) while enforcing accuracy rules from your form data.
6. Compiles the sections into an HTML document, generates FAQPage JSON-LD from the FAQ answers, and uploads it as a formatted Google Doc in Google Drive.
7. Sends a Slack message with the tour details, chosen keywords, and a direct link to the created Google Doc.

## Setup
1. Add an Anthropic API credential for the Claude chat nodes used to analyze brand voice and write keywords/sections.
2. Create a DataForSEO account and add an HTTP Basic Auth credential (email:password) for the keyword volume and SERP/PAA requests.
3. Connect a Google Drive OAuth2 credential and ensure the Google Drive API is enabled so the workflow can create Google Docs.
4. Connect a Slack credential and set your target channel ID in the configuration field `slack_channel_id`.
5. Review and adjust the defaults in the configuration (tone, style rules, banned phrases, and data integrity rule) to match your requirements if the website analysis cannot be fetched.

## 🔗 Nodes Used

HTTP Request, Slack, AI Agent, Anthropic Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
