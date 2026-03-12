# 🔬 Track domain expiry dates with Google Sheets and WHOIS API

> ⚡ **36 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Automatically track domain expiry dates from Google Sheets, fetch real-time DNS expiry data via WHOIS API, and update expiry details back to your sheet with zero manual effort.

---

## Automated Domain Expiry Date Tracker with Google Sheets & WHOIS API

Automate the entire process of monitoring domain expiry dates for all your websites directly from Google Sheets.
This workflow reads domain names, fetches DNS SOA expiry information using the WHOIS API, converts timestamps into readable dates, and updates expiry details back into your tracking sheet—fully automated and rate-limit safe.

Perfect for SEO teams, agencies, hosting managers, and businesses managing large domain portfolios.

---

## What this workflow does

This automation handles **four key tasks**:

**Reads domain data**

* Pulls all website domains directly from a Google Sheet

**Fetches expiry details**

* Uses WHOIS API to retrieve DNS SOA records for each domain

**Processes expiry dates**

* Converts expiry timestamps into human-readable DD-MM-YYYY format
* Extracts expiry month and year automatically

**Updates tracking sheet**

* Writes expiry date, month name, and year back to Google Sheets
* Processes domains one by one with a controlled delay to avoid API limits

---

## How it works

The workflow starts manually and loads configuration values such as Google Sheet ID and sheet name.
It reads all domains listed in the **Websites** column and processes them in a loop.

For each domain, the workflow calls the WHOIS API to fetch DNS SOA records.
The expiry timestamp is extracted, converted into a readable date format, and enriched with expiry month and year values.

Once processed, the workflow updates the same Google Sheet row with the new expiry information.
A 30-second pause is applied before moving to the next domain to ensure API safety and stability.

---

## Setup requirements

### Accounts needed:

* n8n instance (self-hosted or cloud)
* Google account with Google Sheets access
* RapidAPI account with WHOIS API access

**Estimated setup time:** 10 minutes

---

## Setup steps

### 1. Import workflow

* Copy the workflow JSON
* Open n8n → Workflows → Import from JSON
* Paste and import
* Verify all nodes are connected correctly

### 2. Configure Google Sheets

* Create a Google Sheet with a **Websites** column
* Add Google Sheets OAuth2 credential in n8n
* Paste your Sheet ID and sheet name inside **Set Sheet Configuration** node

### 3. Configure WHOIS API

* Get your RapidAPI WHOIS API key
* Add it to the **Fetch DNS Records via WHOIS API** HTTP Request node
* Test the API request

### 4. Verify data mapping

* Ensure expiry values map correctly to:

  * Domain Expiry
  * Expiry Month
  * Expiry Year

### 5. Run and monitor

* Run the workflow manually
* Check execution logs
* Verify expiry data updates correctly in Google Sheets

---

## What data gets updated

**Domain data:**

* Domain name
* Expiry date (DD-MM-YYYY)
* Expiry month (January–December)
* Expiry year

**Sheet updates:**

* Existing rows are matched using the **Websites** column
* No duplicate rows are created

---

## Use cases

* **SEO management:** Prevent domain expiries that can hurt rankings
* **Agency operations:** Track client domains in one central sheet
* **Hosting monitoring:** Stay ahead of renewal deadlines
* **Portfolio management:** Manage hundreds of domains automatically

---

## Important notes

* Replace the WHOIS API key before activating
* Google Sheets column names must match exactly
* Workflow runs sequentially to avoid rate limits
* One domain is processed at a time
* Expiry accuracy depends on DNS SOA availability

---

## Support
Need help or custom development?

📧 Email: [info@isawow.com](info@isawow.com)

🌐 Website: [https://isawow.com/](https://isawow.com/)

---

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
