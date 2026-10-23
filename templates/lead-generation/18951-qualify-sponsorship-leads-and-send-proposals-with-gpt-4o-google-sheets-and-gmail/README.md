# 🎣 Qualify sponsorship leads and send proposals with GPT-4o, Google Sheets and Gmail

> ⚡ **2 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives sponsorship inquiries via a webhook, uses OpenAI GPT-4o to qualify sponsor fit and draft a proposal opening, logs the lead to Google Sheets, then sends follow-up emails via Gmail and alerts your sales lead in Telegram for high-fit prospects.

## How it works
1. Receives a sponsorship inquiry form submission as a POST request via an n8n webhook.
2. Normalizes the incoming fields (company, contact, email, budget, industry, and event interest) and adds a submission timestamp.
3. Uses OpenAI (GPT-4o) to classify the lead as high/medium/low fit against defined sponsorship tiers and generates a structured result including a matched level, proposal opening, and reasoning.
4. Logs the qualified lead details (including fit tier and reasoning) to a Google Sheets “Sponsorship Leads” worksheet.
5. Routes the lead based on fit tier, sending high-fit prospects a personalized proposal-style Gmail reply and medium-fit prospects a standard Gmail info-pack reply.
6. Sends a Telegram message to a configured chat to alert the sales lead when a high-fit sponsor is detected.

## Setup
1. Add credentials for OpenAI, Gmail OAuth2, Google Sheets OAuth2, and a Telegram bot.
2. Replace the Google Sheets document ID with your spreadsheet ID and ensure a “Sponsorship Leads” sheet exists with columns to store the mapped fields.
3. Set your Telegram chat ID in the Telegram node to the destination user/group/channel for high-fit alerts.
4. Copy the webhook URL from the trigger and configure your sponsorship inquiry form to POST to it with fields like companyName, contactName, email, budgetRange, industry, and eventInterest.
5. Review and adjust the sponsorship tier definitions in the OpenAI qualification prompt to match your actual pricing and packages.

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
