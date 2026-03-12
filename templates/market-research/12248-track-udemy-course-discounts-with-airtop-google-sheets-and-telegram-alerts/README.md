# 📊 Track Udemy course discounts with Airtop, Google Sheets and Telegram alerts

> ⚡ **55 views** · 📊 [Market Research & Insights](../)

## Description

## ✅ What problem does this workflow solve?

Online course prices—especially on platforms like Udemy—change frequently and often include **time-limited discounts**. Manually checking prices, coupon availability, and offer expiration is tedious and unreliable.

This workflow automates **browser-based price tracking** using **Airtop**, detects **high-discount deals**, logs them in Google Sheets, and instantly notifies you on **Telegram**—all without scraping hacks or brittle scripts.

---

## ⚙️ What does this workflow do?

* Automates real browser interactions using **Airtop**
* Searches Udemy for specific course topics
* Extracts live course pricing and offer data
* Detects discounts of **50% or more**
* Logs deal details in Google Sheets
* Sends real-time Telegram alerts before offers expire

---

## 🧠 How It Works – Step by Step

### 1. ⏱ Schedule Trigger

The workflow runs automatically at a fixed interval (hourly or daily).

---

### 2. 🌐 Create Browser Session (Airtop)

* Starts a new Airtop browser session
* Opens Udemy search results for a specific keyword (e.g., `n8n`)

---

### 3. 🔍 Scrape Course Data

Using Airtop’s extraction capabilities, the workflow collects:

* Course title
* Instructor name
* Current price
* Original price (if available)
* Rating
* Offer expiration time
* Course URL

---

### 4. 🔁 Loop Through Courses

Each course is processed individually to:

* Check if an offer exists
* Skip non-discounted courses

---

### 5. 🧮 Calculate Discount Percentage

* Extracts numeric price values
* Computes discount percentage
* Filters courses with **≥ 50% discount**

---

### 6. 📊 Log Deals in Google Sheets

For qualifying deals, the workflow appends:

* Course title
* Instructor
* Original & discounted price
* Discount percentage
* Rating
* Offer time left
* Course URL

This creates a **persistent deal history** for tracking and analysis.

---

### 7. 📣 Telegram Notification

When a high-discount deal is found, a formatted Telegram alert is sent including:

* Course name
* Instructor
* Discount amount
* Price comparison
* Rating
* Direct course link
* Offer expiration info

---

### 8. 🧹 Cleanup

* Closes the Airtop browser window
* Terminates the session to conserve resources

---

## 🧩 Integrations Used

* **Airtop** – No-code browser automation
* **n8n** – Workflow orchestration
* **Google Sheets** – Deal tracking & logging
* **Telegram Bot API** – Instant deal alerts

---

## 👤 Who is this for?

This workflow is perfect for:

* 🎓 Learners hunting course deals
* 🧠 Knowledge seekers tracking Udemy discounts
* 🤖 Automation enthusiasts exploring browser automation
* 📉 Price monitoring use cases beyond e-learning

## 🔗 Nodes Used

Google Sheets, Telegram, Schedule Trigger, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
