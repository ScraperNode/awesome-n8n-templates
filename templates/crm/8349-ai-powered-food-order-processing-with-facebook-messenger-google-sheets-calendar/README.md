# 🤝 AI-powered food order processing with Facebook Messenger, Google Sheets & Calendar

> ⚡ **1,115 views** · 🤝 [CRM & Sales Operations](../)

## Description

## 📌 **Title (SEO-Friendly)**

**Automate Facebook Messenger orders to Google Sheets and Google Calendar**

---

## Introduction

This workflow automates **Facebook Messenger order management** by connecting your Facebook Page with **Google Sheets** and **Google Calendar**.

It’s designed to help small businesses save time, reduce errors, and streamline order-taking. Every time a customer messages your page, they receive a structured order form, their responses are parsed, and the details are saved directly to Google Sheets. The same workflow also creates a Google Calendar event, ensuring you never miss a delivery or pickup schedule.

---

## Who’s It For

* **Small businesses** selling products through Facebook Messenger.
* **Entrepreneurs** who want to eliminate manual order-taking.
* **Teams** that need a centralized order tracker (Google Sheets) and automatic reminders (Google Calendar).

---

## How It Works

1. **Listen** to incoming messages on Facebook Messenger.
2. **Send** an automated greeting and order form to the customer.
3. **Parse** their responses (items, quantity, payment method, etc.).
4. **Save** order details into Google Sheets for easy tracking.
5. **Create** a matching Google Calendar event for the order date/time.
6. **Send** a confirmation message and an optional upsell suggestion.

---

## Requirements

* **Facebook Page** with Messenger enabled.
* **Meta for Developers account** to create a Facebook App and generate a Page Access Token.
* **Google Sheets** account with a spreadsheet containing the following columns:

  * `Date`, `Customer Name`, `Order Details`, `Payment Method`, `Order Status`, `Notes`
* **Google Calendar** account for order scheduling.
* **n8n instance** (cloud or self-hosted).

💡 **Security Best Practice:** Store your Page Access Token and Google credentials in **n8n Credentials** (not hardcoded in nodes).

---

## Setup Instructions

### 1. Facebook Messenger Connection

1. Go to [Meta for Developers](https://developers.facebook.com/).
2. Create a Messenger App and generate a **Page Access Token**.
3. Copy the **Webhook URL** from your n8n Webhook Trigger node.
4. Add the webhook URL and verify it in your Facebook Page settings.

### 2. Google Sheets Setup

1. Create a new spreadsheet named `Messenger Orders`.
2. Add columns: `Date, Customer Name, Order Details, Payment Method, Order Status, Notes`.
3. Share the sheet with the Google account connected in n8n.

### 3. Google Calendar Setup

1. Connect your Google Calendar credentials in n8n.
2. Select the calendar where orders should be added.

### 4. Import & Configure Workflow

1. Download this workflow template.
2. Replace placeholders (`{{YOUR_PAGE_ACCESS_TOKEN}}`, `{{YOUR_GOOGLE_SHEET_ID}}`, etc.).
3. Test by sending a message to your Facebook Page.

---

## Customization

* **Personalize messages** in the Messenger node (greeting, upsell suggestions).
* Add extra fields such as delivery address or contact number to both the form and the Google Sheet.
* Extend the workflow by adding **Telegram, Email, or SMS notifications** for customers or staff.
* Use **Filter nodes** to route VIP orders or high-value purchases to a separate workflow.

---

⚡ **Final Flow:**
Facebook Messenger → Order Form → Google Sheets → Google Calendar → Customer Confirmation

💬 **Call to Action:**
Clone this workflow, connect your accounts, and start automating your Messenger orders in minutes!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Calendar, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
