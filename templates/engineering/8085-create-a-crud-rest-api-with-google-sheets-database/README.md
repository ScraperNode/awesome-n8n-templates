# ⚒️ Create a CRUD REST API with Google Sheets database

> ⚡ **592 views** · ⚒️ [Engineering](../)

## Description

## Simple REST API with Google Sheets

### Introduction

This workflow template demonstrates how to quickly and easily create a simple REST API using n8n and a Google Sheet as a no-code database. It's a perfect starting point for building a backend for small applications, prototypes, or internal tools without writing any code.

### Purpose

The purpose of this template is to provide a complete, ready-to-use n8n workflow that handles all fundamental CRUD (Create, Read, Update, Delete) operations. The workflow uses a single Webhook trigger to handle POST, GET, PUT, and DELETE requests, allowing you to manage data in your Google Sheet through standard API calls.

### Setup Instructions

To get started with this template, follow these steps:

1. **Prepare your Google Sheet:** Create a new Google Sheet and add the following column headers in the first row: `name`, `email`, and `status`. You can use this [example Google Sheet](https://docs.google.com/spreadsheets/d/1bQyl8pGVutkq1LRwK_-6TAAcXwNj4_TipeWHi-qmK1Q/edit?usp=sharing) as a starting point. This sheet will serve as your database.
2. **Authenticate:** In the n8n workflow, connect your Google Account credentials to the Google Sheets nodes.
3. **Select your data:** Choose the Google Sheet and the corresponding sheet name from the drop-down lists in each of the Google Sheets nodes.
4. **Activate:** Save and activate the workflow.
5. Test the API: Use a tool like `curl`, Postman, or Insomnia to test your new API endpoints. The base URL will be your n8n webhook URL followed by `/items`.

#### Example `curl` Commands:
* **POST (Create):** `curl -X POST YOUR_N8N_WEBHOOK_URL/items -H "Content-Type: application/json" -d '{"name": "Alice", "email": "alice@example.com", "status": "active"}'`
* **GET (Read All):** `curl -X GET YOUR_N8N_WEBHOOK_URL/items/all`
* **GET (Read Single):** `curl -X GET YOUR_N8N_WEBHOOK_URL/items?id=2`
* **PUT (Update):** `curl -X PUT YOUR_N8N_WEBHOOK_URL/items?id=2 -H "Content-Type: application/json" -d '{"status": "inactive"}'`
* **DELETE (Delete):** `curl -X DELETE YOUR_N8N_WEBHOOK_URL/items?id=2`

For more detailed instructions, including building the workflow in n8n, check out the full blog post: [Build a Simple REST API in 10 Minutes with n8n & Google Sheets](https://n8nplaybook.com/post/2025/08/n8n-google-sheets-rest-api/)

## 🔗 Nodes Used

Google Sheets, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
