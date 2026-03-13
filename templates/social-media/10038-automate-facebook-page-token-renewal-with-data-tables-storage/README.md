# 📱 Automate Facebook page token renewal with data tables storage

> ⚡ **221 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## **Get Long-Lived Facebook Page Access Token with Data Table**
&gt; Set up n8n self-hosted via [Tino.vn VPS](https://tino.vn/vps-n8n?affid=388) — use code **VPSN8N** for up to 39% off *(affiliate link)*.


### **Good to Know**

This workflow automatically solves the common issue of **Facebook Page Access Tokens expiring**. It proactively renews your Page Tokens and stores them in an n8n Data Table.

It runs **every two months**, ensuring your Page Access Tokens remain valid. This guarantees seamless and uninterrupted automation for all your Facebook API integrations.

### **How It Works**

The workflow performs the following steps to keep your tokens up to date:

1. **Schedule Trigger:** The workflow runs on a set schedule — every two months by default.
2. **Set Parameters:** It initializes the required credentials: `client_id`, `client_secret`, a short-lived `user_access_token`, and the `app_scoped_user_id` (all obtained from Facebook Developer Tools).
3. **Get Long-Lived User Token:** It exchanges the short-lived User Access Token for a long-lived one.
4. **Get Page Tokens:** Using the long-lived User Token, it fetches all pages you manage and their corresponding Page Access Tokens.
5. **Update Data Table:** For each page, it extracts the `access_token`, `name`, and `id`, then performs an **Upsert** operation to update or insert rows in your n8n Data Table, ensuring the stored tokens are always current.

### **How to Use**

1. **Import:** Import this JSON file into your **[n8n instance](https://tino.vn/vps-n8n?affid=388)**.
2. **Configure Credentials:** Open the **Set Parameters** node and replace the placeholder values for `client_id`, `client_secret`, `user_access_token`, and `app_scoped_user_id` with your actual credentials from Facebook.
3. **Configure Data Table:** Open the **Upsert row(s)** node.

   * Select or create an n8n **Data Table** to store your tokens.
   * Make sure the column mapping (`token`, `name_page`, `id_page`) matches your table schema.
4. **Activate:** Save and activate the workflow. It will now run automatically based on your configured schedule.

### **Requirements**

* **n8n instance :**
&gt; Set up n8n self-hosted via [Tino.vn VPS](https://tino.vn/vps-n8n?affid=388) — use code **VPSN8N** for up to 39% off *(affiliate link)*.

* **Facebook App:** A Facebook Developer App to generate the following credentials:

  * `client_id` and `client_secret`
  * A short-lived `user_access_token`
  * `app_scoped_user_id`
* **Data Table:** An n8n Data Table configured with columns to store token information (e.g., `token`, `name_page`, `id_page`).

### **Customizing This Workflow**

* **Change Schedule:** To modify how often tokens are renewed, edit the **Schedule Trigger** node. You can change the interval from **2 months** to **1 month**, or schedule it for a specific day.
* **Filter Pages:** If you only want to store tokens for specific pages, insert a **Filter** node right after **Split Out**. Use the page name or ID to filter before sending data to **Upsert row(s)**.
* **Alternative Storage:** Instead of an n8n Data Table, you can replace the **Upsert row(s)** node with another option (e.g., Google Sheets, a database, or a **Set** node) to store tokens elsewhere.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
