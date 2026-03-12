# 🔧 Sync Amazon Luna Prime games to Google Sheets with automatic updates

> ⚡ **36 views** · 🔧 [Miscellaneous](../)

## Description

## Amazon Luna Prime Games Catalog Tracker (Auto-Sync to Google Sheets)**

Automatically fetch, organize, and maintain an updated catalog of **Amazon Luna – Included with Prime** games.This workflow regularly queries Amazon’s official Luna endpoint, extracts complete metadata, and syncs everything into Google Sheets without duplicates.

Ideal for:

* tracking monthly **Prime Luna rotations**
  
* keeping a personal archive of games
  
* monitoring **new games appearing on Amazon Games / Prime Gaming**, so you can instantly play titles you’re interested in
  
* building dashboards or gaming databases
  
* powering notification systems (Discord, Telegram, email, etc.)
  

* * *

### **Overview**

Amazon Luna’s “Included with Prime” lineup changes frequently, with new games added and old ones removed.Instead of checking manually, this n8n template fully automates the process:

* Fetches the latest list from Amazon’s backend
  
* Extracts detailed metadata from the response
  
* Syncs the data into Google Sheets
  
* Avoids duplicates by updating existing rows
  
* Supports all major Amazon regions
  

Once configured, it runs automatically—keeping your game catalog correct, clean, and always up to date.

* * *

#### 🛠️ **How the workflow works**

**1. Scheduled Trigger**

Starts the workflow on a set schedule (default: every 5 days at 3:00 PM).You can change both frequency and time freely.

**2. HTTP Request to Amazon Luna**

Calls Amazon Luna’s regional endpoint and retrieves the full **“Included with Prime”** catalog.

**3. JavaScript Code Node – Data Extraction**

Parses the JSON response and extracts structured fields:

* Title
  
* Genres
  
* Release Year
  
* ASIN
  
* Image URLs
  
* Additional metadata
  

The result is a clean, ready-to-use dataset.

**4. Google Sheets – Insert or Update Rows**

Each game is written into the selected Google Sheet:

* Existing games get updated
  
* New games are appended
  

The **Title** acts as the unique identifier to prevent duplicates.

* * *

## ⚙️ **Configuration Parameters**

| Parameter | Description | Recommended values |
| --- | --- | --- |
| **x-amz-locale** | Language + region | `it_IT` 🇮🇹 · `en_US` 🇺🇸 · `de_DE` 🇩🇪 · `fr_FR` 🇫🇷 · `es_ES` 🇪🇸 · `en_GB` 🇬🇧 · `ja_JP` 🇯🇵 · `en_CA` 🇨🇦 |
| **x-amz-marketplace-id** | Marketplace backend ID | `APJ6JRA9NG5V4` 🇮🇹 · `ATVPDKIKX0DER` 🇺🇸 · `A1PA6795UKMFR9` 🇩🇪 · `A13V1IB3VIYZZH` 🇫🇷 · `A1RKKUPIHCS9HS` 🇪🇸 · `A1F83G8C2ARO7P` 🇬🇧 · `A1VC38T7YXB528` 🇯🇵 · `A2EUQ1WTGCTBG2` 🇨🇦 |
| **Accept-Language** | Response language | Example: `it-IT,it;q=0.9,en;q=0.8` |
| **User-Agent** | Browser-like request | Default or updated UA |
| **Trigger interval** | Refresh frequency | Every 5 days at 3:00 PM (modifiable) |
| **Google Sheet** | Storage output | Select your file + sheet |

You can adapt these headers to fetch data from any supported country.

* * *

💡 **Tips & Customization**

#### 🌍 Regional catalogs

Duplicate the HTTP Request + Code + Sheet block to track multiple countries (US, DE, JP, UK…).

#### 🧹 No duplicates

The workflow updates rows intelligently, ensuring a clean catalog even after many runs.

#### 🗂️ Move data anywhere

Send the output to:

* Airtable
  
* Databases (MySQL, Postgres, MongoDB…)
  
* Notion
  
* CSV
  
* REST APIs
  
* BI dashboards
  

#### 🔔 Add notifications (Discord, Telegram, Email, etc.)

You can pair this template with a notification workflow.When used with **Discord**, the notification message can include:

* game title
  
* description or metadata
  
* **the game’s image**, automatically downloaded and attached
  

This makes notifications visually informative and perfect for tracking new Prime titles.

* * *

### 🔒 **Important Notes**

* All retrieved data belongs to **Amazon**.
  
* The workflow is intended for **personal, testing, or educational use only**.
  
* Do not republish or redistribute collected data without permission.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Discord, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
