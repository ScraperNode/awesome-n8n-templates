# 📊 Instagram full profile scraper with Apify and Google Sheets

> ⚡ **3,812 views** · 📊 [Market Research & Insights](../)

## Description

# 📸 Instagram Full Profile Scraper with Apify and Google Sheets

This n8n workflow automates the process of scraping full Instagram profiles using a [custom Apify actor](https://apify.com/mohamedgb00714/instagram-full-profile-scraper), and logs the results into a Google Sheet. It is designed to run at scheduled intervals and process a list of usernames by calling the API, appending the results, and marking them as processed.

---

## 🚀 Features

* ⏱ **Scheduled Execution** – Runs automatically every few minutes.
* 📄 **Google Sheets Integration** – Reads a list of Instagram usernames and updates the same sheet.
* 🧠 **Apify Actor** – Fetches full public Instagram profile data.
* 🧮 **Aggregation** – Batches usernames for bulk scraping.
* ✍️ **Data Logging** – Appends scraped data to a second sheet.
* ✅ **Tracking** – Marks usernames as processed once scraped.

---

## 📁 Workflow Structure

```mermaid
graph TD;
    ScheduleTrigger --&gt; GetUsernames;
    GetUsernames --&gt; LimitItems;
    LimitItems --&gt; AggregateUsernames;
    AggregateUsernames --&gt; CallApifyActor;
    CallApifyActor --&gt; AppendToSheet;
    CallApifyActor --&gt; MarkAsScraped;
```

---

## 🛠 Setup

1. **Google Sheet**

   Create a Google Sheet with:

   * **Sheet 1** named `Usernames` (GID: 0)
     Columns: `username`, `scraped`

   * **Sheet 2** named `fullprofiles` (GID: 458127000)

   Sample sheet:
   🔗 [`Instagram Profile Sheet`](https://docs.google.com/spreadsheets/d/1SQWfZLJscnPoVd7AgtMxo4mltpbZo3WtMzl0AM_lWE4/edit?usp=sharing)

2. **n8n Configuration**

   * Import this workflow into your n8n instance.
   * Set up your **Google Sheets credentials** (`googleSheetsOAuth2Api`).
   * Replace `apify_api_your token` in the HTTP Request node with your [Apify API token](https://console.apify.com/account/integrations).

---

## 📦 Required Credentials

* **Google Sheets OAuth2** – For reading and writing sheet data.
* **Apify API Token** – To call the custom actor for profile scraping.

---

## 📊 Sheets Used

| Sheet Name     | Purpose                          |
| -------------- | -------------------------------- |
| `Usernames`    | Source of usernames to scrape    |
| `fullprofiles` | Destination of full profile data |

---

## 📌 Apify Actor Info

&gt; **Instagram Full Profile Scraper**
&gt; This actor fetches extended profile information from public Instagram profiles.

🔗 [View on Apify](https://apify.com/mohamedgb00714/instagram-full-profile-scraper)

---

## 🔁 Workflow Nodes Overview

| Node                     | Purpose                                                           |
| ------------------------ | ----------------------------------------------------------------- |
| Schedule Trigger         | Triggers the workflow periodically.                               |
| Get Usernames            | Reads usernames from the `Usernames` sheet.                       |
| Limit                    | Limits processing to 20 usernames per run.                        |
| Aggregate                | Groups usernames into a batch for the API call.                   |
| Call Apify Actor         | Sends the usernames to the Apify actor and receives profile data. |
| Append Full Profiles     | Appends the scraped data to the `fullprofiles` sheet.             |
| Mark Username as Scraped | Marks the processed usernames as `scraped = TRUE`.                |
| Sticky Note              | Provides a reference link to the Apify actor used.                |

---

## 📌 Example Sheet Structure

### `Usernames` Sheet

| username     | scraped |
| ------------ | ------- |
| exampleuser1 |         |
| exampleuser2 | TRUE    |

### `fullprofiles` Sheet

| username | full\_name | biography | follower\_count | ... |
| -------- | ---------- | --------- | --------------- | --- |

---

## 🔐 Security & Notes

* This workflow **does not** bypass any Instagram privacy restrictions.
* It works **only with public Instagram profiles**.
* You are responsible for ensuring that scraping complies with **Instagram’s terms of service** and any applicable laws.

---

## 📬 Support

For any issues, feel free to reach out:
👤 [@mohamedgb00714](https://github.com/mohamedgb00714)
📧 [mohamedgb00714@gmail.com](mailto:mohamedgb00714@gmail.com)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
