# 💬 Send WhatsApp booking links for Facebook leads with Sheets, Redis, and Cal.com

> ⚡ **139 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Youtube Video: https://youtu.be/2yB1Imaa6AY?si=FAY4YCeSqqnxCdgW

This workflow captures new Facebook Lead Ads leads, stores or updates them in Google Sheets, generates a personalized Cal.com booking link, and sends it via WhatsApp, while also logging the outreach session to Redis and marking the lead as contacted.

## How it works
1. Triggers when a new lead is submitted through Facebook Lead Ads.
2. Looks up the lead in Google Sheets by phone number to see if an existing row is present.
3. Appends or updates the lead record in Google Sheets when the row does not exist, otherwise checks whether the lead is already marked as contacted or set to do-not-disturb.
4. Prepares a Cal.com base booking link for the selected property and builds an autofilled booking URL using the lead’s name, email, and phone.
5. Sends the lead a WhatsApp message containing the personalized Cal.com booking link.
6. Stores the outbound message as a session entry in Redis and updates Google Sheets to mark the lead as contacted.

## Setup
1. Connect your Facebook Lead Ads OAuth credentials and select the target Facebook Page and Lead Form in the trigger.
2. Add Google Sheets credentials (service account or OAuth) and update the spreadsheet ID, sheet/tab, and column schema so it includes fields like phone, contacted?, and dnd.
3. Add WhatsApp Business API credentials, set your Phone Number ID, and ensure the recipient phone number mapping matches your Facebook form field.
4. Add Redis credentials and confirm the Redis key/list naming convention used for storing sessions.
5. Update the Cal.com base URLs and property-name mapping so each “Property Name” value resolves to the correct booking link.

## 🔗 Nodes Used

Google Sheets, Redis, WhatsApp Business Cloud, Facebook Lead Ads Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
