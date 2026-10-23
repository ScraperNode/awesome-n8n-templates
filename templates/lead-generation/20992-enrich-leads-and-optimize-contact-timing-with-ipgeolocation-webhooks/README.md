# 🎣 Enrich leads and optimize contact timing with IPGeolocation webhooks

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This webhook-based workflow accepts a lead payload with an IP address, enriches it using IPGeolocation.io ipgeolocation and timezone lookups, and returns a structured profile that includes location, network organization, and a recommendation to contact now or schedule outreach for the lead’s local morning.

## How it works
1. Receives a POST webhook request containing lead details such as ip, name, email, and company.
2. Validates the IP address format (IPv4/IPv6) and rejects invalid requests with a 400 JSON error response.
3. Looks up the IP’s location and ASN/organization data using IPGeolocation.
4. Retrieves timezone and current local time for the same IP using IPGeolocation’s timezone endpoint.
5. Builds a unified lead profile, calculates whether it is currently business hours (09:00–18:00) locally, and sets a recommended contact action and next contact window when needed.
6. Returns the enriched lead profile as the webhook response.

## Setup
1. Get your IPGeolocation.io API key to access IP geolocation data for lead enrichment.
2. Activate the workflow and copy the production webhook URL from the Webhook trigger.
3. Configure your signup form, CRM, or marketing automation tool to POST lead payloads (including an IP field) to the webhook URL.
4. Map enriched data to your CRM and automate follow-ups based on each lead’s local time.

## Requirements
- An IPGeolocation.io account and API key with access to the required geolocation data.
- A webhook-compatible automation platform or CRM that supports receiving and processing webhook requests.
- A lead capture source that provides visitor IP addresses for enrichment and contact timing optimization.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
