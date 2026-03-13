# 💬 Automated LinkedIn lead generation & DM outreach with Airtable, and Unipile.

> ⚡ **1,463 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# LinkedIn DM Automation

![Screenshot 20250805 at 06.59.43.png](fileId:2110)

## Overview
Effortlessly scale personalized LinkedIn outreach using a no-code automation stack. This template provides a powerful, user-friendly system for harvesting leads from LinkedIn posts and managing outreach—all within Airtable and n8n.

![Screenshot 20250805 at 10.26.26.png](fileId:2109)

## Features & Highlights

- **Actionable Input:** Simply enter a LinkedIn post URL to kickstart the engine—no browser scraping or manual work needed.

- **Lead Harvesting:** Automatically scrape commenters, likers, and profile data using Unipile’s API access.

- **Qualification Hub:** Easily review and qualify leads right inside Airtable using custom filters and statuses.

- **Automated Campaign Flow:** n8n handles the sequence—from sending connection requests (adhering to LinkedIn limits) to delivering personalized DMs upon acceptance.

- **Unified Dashboard:** Monitor campaign progress, connection status, and messaging performance in real time.

- **Flexible & Reusable:** Fully customizable for your own messaging, filters, or UD campaigns—clone, adapt, and deploy.

## Why Use This Template?

1. ++Zero-code friendly:++ Ideal for entrepreneurs, sales professionals, and growth teams looking for streamlined, scalable outreach.

1. ++Transparent and compliant:++ Built with Airtable UI and compliant API integration—no reliance on browser automation or unofficial methods.

1. ++Rapid Deployment:++ Clone and launch your automation in under 30 minutes—no dev setup required.

## Setup Instructions

- Import the template into your n8n workspace.

- Connect your Airtable and Unipile credentials.

- Configure LinkedIn post input, filters, and DM templates in Airtable.

- Run the workflow and monitor results directly from Airtable or n8n.

## Use Cases

- Capture inbound leads from your viral LinkedIn posts.

- Qualify and nurture prospects seamlessly without manual follow-ups.

- Scale outreach with precision and personalization.

# YouTube Explanation

- You can access the video explanation of how to use the workflow: [Explanation Video](https://youtu.be/7kodHzb0r38)

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Schedule Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
