# 🎣 Generate Google Maps leads with Apify, Hunter, and HubSpot CRM

> ⚡ **20 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow collects a location, search term, and industry from an n8n form, scrapes matching businesses from Google Maps via Apify, deduplicates and upserts companies into HubSpot, then uses Hunter to find contact emails for each domain and upserts the contacts into HubSpot.

## How it works
1. Starts when a user submits the n8n form with a location, what to scrape, item limit, and a HubSpot industry selection.
2. Maps the chosen industry label to the exact industry code HubSpot expects and runs the Apify Google Maps Scraper actor with the form inputs.
3. Checks the Apify run status and, if successful, loads the actor’s dataset items.
4. Extracts the key business fields (name, category, rating, address, phone, website/domain, and industry) and removes duplicate companies using a domain-based key.
5. Searches HubSpot for an existing company by domain and updates it if found or creates a new company if not.
6. For companies with a domain, uses Hunter Domain Search to find personal email contacts, deduplicates them by email, and upserts the contacts into HubSpot associated with the company.

## Setup
1. Add an Apify API token and ensure you have access to the Apify actor “Google Maps Scraper (compass/crawler-google-places)”.
2. Add a HubSpot Private App token (HubSpot app token credential) with permission to create, update, and search companies and create/update contacts.
3. Add a Hunter API key for Domain Search.
4. Review the form defaults (locations, scrape query, item count, and industry list) and update them to match your target markets and HubSpot industry requirements.

## 🔗 Nodes Used

HubSpot, Hunter, Filter, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
