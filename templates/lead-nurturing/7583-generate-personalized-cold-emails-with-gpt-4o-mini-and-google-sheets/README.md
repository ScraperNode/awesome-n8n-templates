# 💬 Generate personalized cold emails with GPT-4o-mini and Google Sheets

> ⚡ **965 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

Google Email Ice Breaker Workflow
Description
This n8n workflow automates the creation of personalized cold emails for dental clinics to promote an AI chatbot service. It retrieves verified email data from a Google Sheet, generates tailored email subject lines and bodies using OpenAI’s GPT-4o-mini model, processes the output, and updates the Google Sheet with the results. Designed for dental clinics or marketers, it streamlines outreach by crafting engaging, seemingly hand-researched emails that drive appointment bookings through an AI chatbot integration.
Key Features

Data-Driven Outreach: Pulls verified emails, company names, descriptions, and websites from a Google Sheet to create targeted emails.
AI-Powered Email Generation: Uses OpenAI’s GPT-4o-mini to craft concise, persuasive, and personalized cold email content.
Personalization: Shortens company names and locations (e.g., "San Fran" instead of "San Francisco") and references specific business details for a tailored feel.
Batch Processing: Handles multiple prospects efficiently using a looping mechanism.
Google Sheet Integration: Updates the sheet with generated email subjects, bodies, and a status marker for tracking.
Customizable Prompts: Easily modify the AI prompt to adapt the tone or service offering for different industries.

Requirements

Credentials: Google Sheets OAuth2 API (for data access) and OpenAI API (for email generation).
Setup: Configure a Google Sheet with columns for "EMAIL verified", "companyName", "description", "website", "category", "email subject", "body", and "email created". Ensure the sheet is accessible via your Google account.
Dependencies: No external packages required; uses n8n’s built-in Google Sheets, OpenAI, and Code nodes.

How It Works

Trigger & Input: Starts manually (e.g., via "Test workflow") and retrieves data from a Google Sheet, filtering for rows where "category" is "Good" and "email created" is "no".
Batch Processing: Loops over filtered rows to process each prospect individually.
Email Generation: OpenAI generates a JSON output with a subject and body, personalized using the prospect’s company name, description, and website.
Content Processing: A Code node cleans and parses the AI output, extracting the subject and body.
Sheet Update: Updates the Google Sheet with the generated subject, body, and sets "email created" to "yes".
Looping: Continues processing until all prospects are handled.

Benefits

Time Efficiency: Automates cold email creation, reducing manual effort from hours to minutes.
Personalized Outreach: Crafts emails that feel deeply researched, increasing engagement rates.
Scalability: Processes large lists of prospects in batches, ideal for high-volume campaigns.
Tracking: Updates the Google Sheet to track which emails have been generated.
Versatility: Adaptable for other industries by modifying the AI prompt or Google Sheet structure.

Potential Customizations

Prompt Adjustments: Tweak the OpenAI prompt to target different services (e.g., marketing tools, SaaS products) or industries.
Filter Modifications: Change Google Sheet filters to target specific prospect categories or regions.
Output Expansion: Add nodes to send emails directly or integrate with CRMs like HubSpot.
Notifications: Include email or Slack notifications when the workflow completes.

## 🔗 Nodes Used

Google Sheets, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
