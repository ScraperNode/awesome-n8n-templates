# 📱 Automated LinkedIn company page growth with Browserflow and Google Sheets

> ⚡ **58 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Automate LinkedIn Company Page Growth End-to-End

- ⚠️ **Important — Start Here**
- Before importing this template, **make a personal copy of the provided [Google Sheets template](https://docs.google.com/spreadsheets/d/1-zak-RUGU4ubw3aZ_9lF9LF1dxEo9ME_-mtzRGtIDFg/edit?gid=0#gid=0)**.
- This workflow is designed to work **out of the box** with that sheet.

![Screenshot 20251216 at 09.26.02.png](fileId:3673)

Growing a LinkedIn Company Page usually requires time, consistency, and manual outreach.
With **Browserflow + n8n**, you can turn the entire process into a **hands-off LinkedIn growth engine**.

This template automates everything from:

* Scraping LinkedIn engagement
* Sending connection invites
* Tracking acceptance
* Inviting new connections to follow your company page

All activity is logged, deduplicated, and fully automated.

---

## ⚠️ Disclaimer – Community Node Notice

This template uses a **verified community node** available inside the n8n Cloud environment.

To use it:

* Go to **Nodes**
* Search for **Browserflow for Linkedin**
* Click **Install**

If you are running n8n locally:

* Go to **Settings → Community Nodes**
* Search for **n8n-nodes-browserflow**
* Install and restart n8n

---


## 📦 Requirements

To use this template, you need:

* n8n (Cloud or self-hosted)
* Installed community node: **Browserflow for Linkedin**
* An account for [Browserflow (7-day free trial)](Browserflow (7-day free trial))
* LinkedIn account
* A copy of the [Google Sheets template](https://docs.google.com/spreadsheets/d/1-zak-RUGU4ubw3aZ_9lF9LF1dxEo9ME_-mtzRGtIDFg/edit?gid=0#gid=0)

---

## ⚙️ Setup Instructions

1. **Make a copy of the provided [Google Sheets template](https://docs.google.com/spreadsheets/d/1-zak-RUGU4ubw3aZ_9lF9LF1dxEo9ME_-mtzRGtIDFg/edit?gid=0#gid=0)**
2. **Import the n8n template into your n8n workflow**
3. Create an account with [Browserflow (7-day free trial)](Browserflow (7-day free trial))
3. Reconnect credentials:

   * Google Sheets
   * Browserflow (API key via credentials)
4. (Optional) Adjust schedule intervals if needed
5. Add your Company Page URL in the final workflow

That’s it — no column mapping required if you use the sheet as provided.

---

## 🤖 Tip – Quickly Switch to Your Own Google Sheet Using n8n AI (Beta)

If you already imported the workflow and want to swap the Google Sheet later, you can use the **n8n AI assistant (beta)**.

Paste this prompt (replace the URL):

```
I would like to change all my google sheets integrations to use the following sheet instead: ******

It has the exact same sheets and tables and fields
```

The AI will update all Google Sheets nodes automatically.

---


## 🧩 What This Template Does

This template consists of **four connected workflows**, each represented with **sticky notes** inside n8n.

### 🔍 Step 1 – Retrieve Leads from LinkedIn Post Engagement

This workflow scrapes users who engage with LinkedIn posts and stores them in Google Sheets.

**Workflow actions:**

* Fetch LinkedIn post URLs from Google Sheets
* Scrape:

  * Commenters
  * (Optional) Likers
* Split results into individual profiles
* Filter invalid or duplicate profiles
* Append new leads to Google Sheets
* Mark posts as “scraped” to prevent reprocessing

---

### 🤝 Step 2 – Send LinkedIn Connection Invites Automatically

This workflow sends connection requests to new leads on a schedule.

**Workflow actions:**

* Schedule trigger (e.g. every 10 minutes)
* Fetch leads not yet invited
* Check connection status:

  * ❌ Not connected → Send invite
  * ⏳ Pending → Mark as pending
  * ✅ Connected → Mark as connected
* Update Google Sheets with status + timestamp

---

### 🔄 Step 3 – Track Connection Acceptance

This workflow keeps your lead sheet accurate by tracking accepted invitations.

**Workflow actions:**

* Scheduled trigger
* Fetch recent LinkedIn connections via Browserflow
* Match profiles with Google Sheets
* Update:

  * Connection status
  * Acceptance timestamp

---

### ⭐ Step 4 – Invite Connections to Follow Your Company Page

Once someone accepts your connection request, this workflow invites them to follow your Company Page.

**Workflow actions:**

* Fetch connected leads from Google Sheets
* Filter:

  * Connected
  * Not yet invited to follow
* Use Browserflow to:

  * Visit your LinkedIn Connections page
  * Send “Invite to Follow Page” action
* Update follow-invite status in Google Sheets

**Important configuration:**

* Enter your **Company Page URL**
* You must be **Admin** of the page

---


## 📊 Final Result – Your Automated LinkedIn Growth Engine

After setup, you get:

* 🔍 Automated lead scraping from niche engagement
* 🤝 Automated LinkedIn connection requests
* 🔄 Automatic acceptance tracking
* ⭐ Automated Company Page follow invites
* 📊 Centralized Google Sheets dashboard

This system saves hours every week and turns every new connection into a Company Page follower — **with zero manual work**.

---

## 🚀 Need Help?

If you need help customizing or extending this automation, feel free to reach out.
Happy automating! 🚀

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
