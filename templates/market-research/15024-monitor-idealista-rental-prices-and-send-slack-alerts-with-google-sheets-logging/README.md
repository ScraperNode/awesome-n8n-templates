# 📊 Monitor Idealista rental prices and send Slack alerts with Google Sheets logging

> ⚡ **15 views** · 📊 [Market Research & Insights](../)

## Description

![Screenshot 20260413 at 15.59.56.png](fileId:5470)# Monitor Idealista Rental Prices and Send Slack Alerts

## Who is this for?

Apartment hunters, property managers, and relocation consultants who want instant Slack notifications when new rental listings appear on Idealista matching their exact criteria.

## What this workflow does

Never miss a new rental listing on Idealista again. This workflow runs every 6 hours, scrapes the latest rental listings matching your exact criteria, detects genuinely new listings you haven't seen before, and sends Slack alerts with price, size, location, and a direct link.

**This workflow uses the `n8n-nodes-idealista-scraper` community node and requires a self-hosted n8n instance.**

## How it works

1. The Schedule Trigger fires every 6 hours
2. The Idealista Scraper fetches latest rentals via API-based extraction (never breaks unlike screen scrapers)
3. The Code node compares results against previously seen listings using n8n's workflow static data
4. Only genuinely new listings pass through -- duplicates are automatically filtered out
5. Each new listing is sent as a rich Slack message and logged to Google Sheets

## Setup

1. Install **n8n-nodes-idealista-scraper** via Settings &gt; Community Nodes
2. Add your **Apify API** credential ([get token here](https://console.apify.com/account/integrations))
3. Add your **Slack** credential (OAuth2)
4. Create a Slack channel (default: `#real-estate-alerts`)
5. Create a Google Sheet for listing history and select it in the Sheets node
6. Customize the scraper filters for your target area and budget
7. **Activate the workflow!**

## Customization

- Change `locationId` for other cities (Barcelona, Rome, Lisbon, Milan)
- Adjust `maxPrice`, bedroom, and amenity filters (64+ available including pets, furnished, AC)
- Replace Slack with Email, Telegram, or Discord
- Adjust schedule interval (default: every 6 hours)
- The first run treats all listings as new; subsequent runs only alert on unseen listings
- Cost: ~$0.10/day (4 runs x 1 page x ~40 properties)

## Default filters

| Filter | Value |
|--------|-------|
| Operation | Rent |
| Location | Madrid |
| Max Price | 1,500 EUR/month |
| Bedrooms | 1-2 bedrooms |
| Elevator | Required |
| Published Since | Last week |

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
