# 💬 Get long-lived Facebook Page access tokens and subscribe Messenger webhook fields via Graph API

> ⚡ **397 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# **Get Long-Lived Facebook Page Access Token** and Subscribe Messenger Webhook Fields

This n8n template automates two critical one-time setup steps required before any Facebook automation can go live: it exchanges a short-lived **User Access Token** for a long-lived one (~60 days), retrieves **Page Access Tokens** for all connected Facebook Pages, and subscribes each Page to the **webhook fields** your app needs — all in a single manual run.

If you're building a Messenger chatbot or automating comment replies on Facebook Pages, run this utility workflow once as part of your initial setup.

## How it works

* **Needed Value node:** Set your `app_id`, `app_secret`, short-lived `short_user_access_token`, and `field_to_add` (the webhook subscription fields) in one place — no other node needs editing.
* **Token Exchange:** Calls the *Facebook Graph API* to exchange the short-lived token for a **long-lived User Access Token**, then resolves the app-scoped User ID.
* **Page Token Retrieval:** Fetches **long-lived Page Access Tokens** for all Pages connected to this user.
* **Per-Page Webhook Subscription:** Loops through each Page — fetches its existing subscribed fields, merges them with your new fields, and POSTs the combined list back to the Graph API.
* **Rate Limiting:** A 1-second *Wait* node between each Page prevents hitting Facebook's API rate limits.

## How to use

1. **Get credentials:** Retrieve your `App ID` and `App Secret` from [Meta for Developers](https://developers.facebook.com/apps/).
2. **Generate a short-lived token:** Use [Graph API Explorer](https://developers.facebook.com/tools/explorer/) with `pages_manage_metadata` and `pages_show_list` permissions.
3. **Fill in `Needed Value`:** Enter all four config fields. Set `field_to_add` based on your use case (e.g., `messages,messaging_postbacks` for Messenger chatbots, or add `feed` for comment automation).
4. **Run manually:** Click "Execute Workflow". The output of **Get long-lived page access token** contains the Page Access Token — copy it into your chatbot workflows.

## Requirements

* **n8n Version:** Built and tested on **n8n 2.9.4+**. *(It is highly recommended to update to the latest n8n version.)*
* A **Facebook App** with Messenger product enabled and `pages_manage_metadata` permission approved.
* **No external credentials** needed inside n8n — all API calls use the token from the `Needed Value` node.

## Customizing this workflow

* **Different webhook fields:** Update `field_to_add` — common values: `messages`, `messaging_postbacks`, `messaging_optins`, `message_deliveries`, `feed`.
* **Auto-refresh tokens:** Swap the Manual Trigger for a **Schedule Trigger** every 50 days so your long-lived tokens never expire unexpectedly.
* **Notify on completion:** Add a **Telegram** or **Gmail** node after the loop to confirm successful subscription for each Page.

---

**Related workflows by the same author:**
- [Smart human takeover & auto pause AI-powered Facebook Messenger chatbot](https://n8n.io/workflows/11920)
- [Build a Facebook Messenger customer service AI chatbot with Google Gemini](https://n8n.io/workflows/13080)
- [Smart message batching AI-powered Facebook Messenger chatbot use Data Table](https://n8n.io/workflows/9192)

---

## About the Author

**Created by:** Nguyễn Thiệu Toàn (Jay Nguyen) - n8n Verified Creator
**Email:** me@nguyenthieutoan.com
**Website:** [nguyenthieutoan.com](https://nguyenthieutoan.com)
**Company:** GenStaff (CEO/Founder) ([genstaff.net](https://genstaff.net))
**Socials (Facebook / X / LinkedIn):** @nguyenthieutoan
**More templates:** [n8n.io/creators/nguyenthieutoan](https://n8n.io/creators/nguyenthieutoan)

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
