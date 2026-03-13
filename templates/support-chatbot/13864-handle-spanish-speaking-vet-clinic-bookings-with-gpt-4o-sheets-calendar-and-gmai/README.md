# 💬 Handle Spanish-speaking vet clinic bookings with GPT-4o, Sheets, Calendar and Gmail

> ⚡ **307 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Overview
Meet Maria, a sophisticated AI Booking Agent designed for Veterinary Clinics (but easily adaptable to any service business). This workflow transforms a simple chat interface into a full-scale administrative assistant that handles client lookups, lead generation, and scheduling without human intervention.

Key Features
Intelligent CRM Lookup: Automatically checks Google Sheets to see if a customer is a "New" or "Existing" client.

Automated Lead Capture: If the client doesn't exist, the agent collects their details and creates a new entry in real-time.

Full Calendar Management: Maria can Get, Create, Reschedule, and Delete appointments directly in Google Calendar.

Smart Escalation: Uses a "Human-in-the-loop" logic; if a query is medical or complex, Maria triggers a Gmail notification to alert the professional staff.

Dual-Model Reliability: Powered by OpenRouter, utilizing GPT-4o for complex reasoning with built-in fallback support.

How it works
Normalization: Incoming phone numbers are cleaned to ensure database consistency.

The Brain: The AI Agent uses a Window Buffer Memory to maintain context throughout the conversation.

Tooling: Maria is equipped with custom tools for Google Sheets (Database), Google Calendar (Booking), and Gmail (Escalation).

Confirmation: No appointment is finalized until the agent confirms the date and time with the user in natural language.

Setup Instructions
Credentials: Connect your Google Sheets, Calendar, and Gmail accounts.

API: Add your OpenRouter API key to the AI Agent node.

Sheet ID: Update the Google Sheets nodes to point to your specific Spreadsheet.

Timezone: Ensure your n8n Workflow settings match your local clinic's timezone.

## 🔗 Nodes Used

Gmail, AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
