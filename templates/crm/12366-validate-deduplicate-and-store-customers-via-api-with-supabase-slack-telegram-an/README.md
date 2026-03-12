# 🤝 Validate, deduplicate, and store customers via API with Supabase, Slack, Telegram, and email

> ⚡ **64 views** · 🤝 [CRM & Sales Operations](../)

## Description

# (Retail) Customer Cleanup API → Supabase and send Notification

This workflow provides an API-first solution to validate, clean, deduplicate and store customer data in Supabase. It ensures consistent customer records, prevents duplicates and keeps both internal teams and customers informed through automated notifications.

This workflow acts as a backend customer intake API. It validates and normalizes incoming customer data, checks for existing users in Supabase, stores new customers safely and returns clear API responses. Internal teams receive Slack and Telegram updates, while customers get an email confirmation on successful creation.

You receive:

* **Centralized customer data validation**
* **Automatic duplicate prevention**
* **Supabase-backed customer storage**
* **Real-time API responses**
* **Team notifications + user confirmation email**

Ideal for retail, e-commerce and SaaS teams that want clean customer data without manual intervention.


### Quick Start – Implementation Steps

1. Import the provided **n8n workflow JSON**.
2. Configure **Supabase credentials** with read/write access.
3. Connect **Slack**, **Telegram** and **Gmail/SMTP** credentials.
4. Copy the **Webhook URL** and use it as your customer intake API.
5. Activate the workflow — your customer API is live.


## What It Does

This workflow automates customer data intake and processing:

1. Receives customer data via a POST API call.
2. Cleans and normalizes names, email and phone numbers.
3. Validates required fields and formats using JavaScript.
4. Aggregates clear, field-specific validation errors.
5. Checks Supabase to prevent duplicate users.
6. Stores valid, new customers in Supabase.
7. Returns structured API responses (success, validation error or duplicate).
8. Sends notifications to Slack and Telegram.
9. Emails the customer after successful account creation.

This ensures reliable, consistent customer records across systems.


## Who’s It For

This workflow is ideal for:

* Retail and e-commerce platforms
* CRM and customer data teams
* SaaS product teams
* Backend automation teams
* Marketing teams needing clean contact lists
* Developers building API-driven systems


## Requirements to Use This Workflow

To run this workflow, you need:

* **n8n instance** (cloud or self-hosted)
* **Supabase project** with a `customers` table
* Supabase **service role key**
* **Slack workspace** with API access
* **Telegram bot** + chat ID
* **Gmail or SMTP account** for user notifications


## How It Works

1. **API Request** – Client sends customer data to the webhook endpoint.
2. **Validation & Cleanup** – JavaScript validates and formats data.
3. **Validation Fail** – Returns 400 response with clear error messages.
4. **Duplicate Check** – Supabase is queried using the email address.
5. **Duplicate Found** – Returns 409 response without creating a record.
6. **Create Customer** – New customer is saved in Supabase.
7. **Success Response** – API confirms successful creation.
8. **Notifications** – Slack, Telegram and customer email are triggered.


## Setup Steps

1. Create a Supabase table with fields for customer data, validation status and errors.
2. Add Supabase credentials to n8n.
3. Import the workflow JSON into n8n.
4. Configure the Webhook node and copy the API URL.
5. Review the validation logic if custom rules are required.
6. Configure Slack, Telegram and email credentials.
7. Test using Postman for invalid, duplicate and valid requests.
8. Activate the workflow.


## How To Customize Nodes

### Customize Validation Rules

Update the JavaScript validation node to add country-specific phone rules or additional fields.

### Customize Duplicate Logic

Extend duplicate checks to include phone numbers or other identifiers.

### Customize Notifications

Modify Slack and Telegram messages, add emojis, mentions or execution metadata.


## Add-Ons (Optional Enhancements)

You can extend this workflow to:

* Add API key authentication
* Enable rate limiting
* Log failed attempts separately
* Support multi-country phone validation
* Add CRM or email marketing sync
* Implement soft deletes or upserts


## Use Case Examples

### 1. Customer Registration API

Centralize customer creation for web and mobile apps.

### 2. Data Hygiene Automation

Prevent invalid or duplicate contacts in your database.

### 3. Retail & CRM Integration

Keep customer records consistent across systems.

### 4. Marketing Readiness

Ensure only clean, valid contacts enter campaigns.


## Troubleshooting Guide

| Issue                   | Possible Cause                | Solution                            |
| ----------------------- | ----------------------------- | ----------------------------------- |
| Validation always fails | Incorrect payload structure   | Ensure data is sent in request body |
| Duplicate user created  | Duplicate check misconfigured | Verify Supabase filter conditions   |
| No Slack alert          | Invalid credentials           | Reconnect Slack API                 |
| No email sent           | Gmail/SMTP not configured     | Verify sender account               |
| API not responding      | Webhook not active            | Activate the workflow               |


## Need Help?

If you need help customizing or extending this workflow, adding authentication, scaling for high traffic, integrating CRMs or enhancing validation, the n8n automation team at **WeblineIndia** can assist you with production-ready automation and integration support. Contact us today.

## 🔗 Nodes Used

Slack, Webhook, Telegram, Gmail, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
