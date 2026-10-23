# 📋 Plan delivery routes from Notion orders with Nominatim and email

> ⚡ **5 views** · 📋 [Project Management](../)

## Description

## Quick Overview
This workflow collects delivery orders via an n8n form into a Notion database, then on a weekly schedule pulls pending orders, geocodes addresses with OpenStreetMap Nominatim, generates a nearest-neighbor route plan grouped by delivery day, and emails the plan as a text schedule.

## How it works
1. Receives a new order submission through an n8n Form trigger.
2. Generates a unique order ID, normalizes the form fields (customer, address, totals, payment status), and saves the order as a new page in a Notion database with Status set to pending.
3. Runs on a cron schedule (Friday at 6pm) or manually to plan routes.
4. Fetches all Notion database pages where Status equals pending and converts Notion properties into a clean list of orders.
5. Geocodes each delivery address using the OpenStreetMap Nominatim API with a built-in rate limit.
6. Splits orders into Saturday and Sunday groups, orders stops using a nearest-neighbor distance heuristic, and formats a Markdown-like delivery plan that tags each stop as [PAID] or [COLLECT ON DELIVERY] and flags any geocoding failures.
7. Sends the formatted delivery plan by email using SMTP.

## Setup
1. Create a Notion database with properties matching the workflow (Customer Name, Order ID, Phone, Address, Items, Total, Day, Paid, Notes, Status, Received At) and ensure the Day and Status select values include Saturday/Sunday and pending/done.
2. Create and connect a Notion integration to the database, then add the Notion API credential in n8n.
3. Replace YOUR_NOTION_DATABASE_ID_HERE in both Notion nodes with your database ID.
4. Add an SMTP credential, then set the From and To addresses in the email step to real recipients.
5. Copy the production URL from the Form trigger and share it as your order intake form.

## 🔗 Nodes Used

Send Email, HTTP Request, Notion, Schedule Trigger, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
