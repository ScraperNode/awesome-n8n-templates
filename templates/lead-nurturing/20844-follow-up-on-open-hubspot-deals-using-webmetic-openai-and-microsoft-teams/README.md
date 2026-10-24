# 💬 Follow up on open HubSpot deals using Webmetic, OpenAI and Microsoft Teams

> ⚡ **1 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow runs hourly to detect returning companies from Webmetic, checks HubSpot for an open deal by domain, uses OpenAI to generate a follow-up suggestion, then creates a HubSpot task for the deal owner and posts an alert to Microsoft Teams.

## How it works
1. Runs every hour on a scheduled trigger.
2. Pulls companies with at least two website visits in the last 7 days from Webmetic and deduplicates them to notify only once per company per day.
3. Searches HubSpot Companies by the visiting company’s domain and continues only if the company has one or more open deals.
4. Searches HubSpot Deals to find the most recently updated open deal associated with that company.
5. Sends the deal and visit/page context to OpenAI to generate a short HTML follow-up recommendation.
6. Creates a HubSpot task associated with the deal, company, and deal owner containing the AI suggestion, then posts a summary notification to a Microsoft Teams channel.

## Setup
1. Add credentials for Webmetic (Visitor Intelligence API key), HubSpot (private app token/app token), OpenAI, and Microsoft Teams.
2. In the Settings values, set your website domain, company name, what you sell, and preferred output language.
3. In the Microsoft Teams step, select the target Team and Channel where notifications should be posted.

## 🔗 Nodes Used

HTTP Request, HubSpot, Microsoft Teams, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
