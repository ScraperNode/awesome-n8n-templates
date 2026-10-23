# 📱 Publish scheduled LinkedIn posts from Twenty CRM via Unipile and SharePoint

> ⚡ **32 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Automate your LinkedIn content calendar. This workflow fetches scheduled posts from a PostgreSQL database (Twenty CRM), downloads attached media from SharePoint, and publishes them seamlessly to LinkedIn using Unipile.

## How it works
1. A Schedule Trigger (Cron) fires every 5 minutes to check for pending social media posts
2. A PostgreSQL node queries the database to fetch posts marked as 'SCHEDULED' where the scheduled time has passed.
3. A Split In Batches node loops through the fetched posts one by one to prevent API concurrency issues.
4. An IF node checks if there is a SharePoint attachment URL included in the database record.
5. If an attachment exists, Microsoft Graph API nodes resolve the SharePoint Drive Item and download the image as a binary file
6. HTTP Request nodes send the text (and binary attachment, if any) to Unipile's API to natively publish the LinkedIn post.
7. A final PostgreSQL node updates the CRM record to 'POSTED' and saves the live LinkedIn post URL back to the database.

## Setup
1. Add your PostgreSQL credentials and verify that the SQL query matches your Twenty CRM table and schema names.
2. Connect your Microsoft Entra ID (Azure AD) account to authenticate SharePoint access.
3. Configure the HTTP Request nodes with your Unipile Account ID and API keys via HTTP Header Auth.
4. Activate the workflow to allow the 5-minute cron trigger to run continuously in the background.

## Requirements
- PostgreSQL database (Twenty CRM) , Unipile Account (with an active LinkedIn session),Microsoft Entra ID / SharePoint Account

## Customization
- Adjust the LIMIT 10 in the initial SQL query if you want to process more or fewer posts per batch.Replace the SharePoint nodes with Google Drive or AWS S3 nodes if you store your post attachments elsewhere.

## 🔗 Nodes Used

HTTP Request, Postgres, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
