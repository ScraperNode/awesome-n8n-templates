# 💬 Generate AI voice receptionists for local businesses with Claude, VAPI and Google Maps

> ⚡ **315 views** · 💬 [Support Chatbots](../)

## Description

## Generate AI voice receptionist agents for local businesses using VAPI

Automate the creation of personalized AI phone receptionists for local businesses by scraping Google Maps, analyzing websites, and deploying voice agents to VAPI.

## Who is this for?

- **Agencies** offering AI voice solutions to local businesses
- **Consultants** helping SMBs modernize their phone systems
- **Developers** building lead generation tools for voice AI services
- **Entrepreneurs** launching AI receptionist services at scale

## What this workflow does

This workflow automates the entire process of creating customized AI voice agents:

1. Collects business criteria through a form (city, keywords, quantity)
2. Scrapes Google Maps for matching local businesses using Apify
3. Fetches and analyzes each business website
4. Generates tailored voice agent prompts using Claude AI
5. Automatically provisions voice assistants via VAPI API
6. Logs all created agents to Google Sheets for tracking

The AI adapts prompts based on business type (salon, restaurant, dentist, spa) with appropriate tone, services, and booking workflows.

## Setup requirements

- **Apify account** with Google Maps Scraper actor access
- **Anthropic API key** for prompt generation
- **OpenRouter API key** for website analysis
- **VAPI account** with API access
- **Google Sheets** connected via OAuth

## How to set up

1. Import the workflow template
2. Add your Apify credentials to the scraping node
3. Configure Anthropic and OpenRouter API keys
4. Replace `YOUR_VAPI_API_KEY` in the HTTP Request node header
5. Connect your Google Sheets account
6. Create a Google Sheet with columns: Business Name, Category, Address, Phone, Agent ID, Agent URL
7. Update the Sheet URL in both Google Sheets nodes
8. Activate the workflow and submit the form

## Customization options

- **Business templates**: Edit the prompt in "Generate Agent Messages" to add new business categories
- **Voice settings**: Modify ElevenLabs voice parameters (stability, similarity boost)
- **LLM model**: Switch between GPT-4, Claude, or other models via OpenRouter
- **Output format**: Customize the results page HTML in the final Form node

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger, Information Extractor, n8n Form, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
