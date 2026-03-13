# 📱 Facebook token retrieval & management

> ⚡ **1,537 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Pre-Conditions
1. A Facebook Developer account with an active app.
2. Basic understanding of n8n workflows.
3. Access to a database (optional, for storing tokens).

## Setup
1. **Webhook Activation**:
   - Configure the Webhook to receive user requests and process input data.
   - Ensure the Webhook URL is correctly set in your Facebook App settings.

2. **Short-Lived Token Retrieval**:
   - Use **Facebook OAuth** to fetch a short-lived token from the authorization code.

3. **Long-Lived Token Conversion**:
   - Convert the short-lived token into a long-lived token (valid for ~60 days).

4. **Page Token Retrieval**:
   - Follow the provided instructions to retrieve **Page Tokens** for posting on managed Facebook Pages.

5. **Customizable Scopes**:
   - Edit the `correctScopes` array to include or exclude permissions as needed.

6. **Optional Database Storage**:
   - Extend the workflow to save tokens to a database instead of displaying them on-screen.

7. **Step-by-Step Instructions**:
   - Detailed guidance is provided via sticky notes for activating the app, configuring Webhook, and editing parameters like `fb_redirect_uri`, `app_id`, and `app_secret`.

## Who the Template is For
- **Developers**: Integrating Facebook APIs into their applications.
- **Social Media Managers**: Automating posting and engagement on Facebook Pages.
- **n8n Users**: Looking for a ready-to-use workflow for Facebook Token management.

## Primary Use
- Automates Facebook Token retrieval and management.
- Supports posting to Facebook Pages via **Page Tokens**.
- Easily customizable and extendable for specific requirements.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
