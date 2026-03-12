# 🤝 Store new orders to Airtable and summarize daily orders through email

> ⚡ **1,741 views** · 🤝 [CRM & Sales Operations](../)

## Description

## What this template does
This workflow will collect order data as it is produced, then send a summary email of all orders at the end of every day, formatted in a table. It receives new orders via webhook and stores in Airtable. At 7PM every day, it sends a summary email with the day's orders in a HTML table

## Setup:
[Instructions Video](https://vimeo.com/1012686665?share=copy#t=0)
 1. Create a new table in Airtable and give it a field *time* with type date, *orderID* with type number, and *orderPrice* also with type number. 
 2. Create a new access token if you haven't already at https://airtable.com/create/tokens/new. Make sure to give the token the scopes *data.records:read*, *data.records:write*, *schema.bases:read* and access to whichever table you choose to store the orders. A pop-up window appears with the token. Use this token to make `Create New Credential` > `Access Token` for Airtable in the `Store Order` and `Airtable Get Today's Orders` nodes.
 3. Create access credentials for your Gmail as described here: https://developers.google.com/workspace/guides/create-credentials. Use the credentials from your *client_secret.json* in the `Send to Gmail` node.
 4. In the `Store Order` node, change *Base* and *Table* to the database and table in your Airtable account you wish to use to store orders. Make sure to use these same values in the `Airtable Get Today's Orders` node.
 5. Every time an order is created in your system, send a POST request to Webhook from your order software. Each request must contain a single order containing fields *'orderID'* and *'orderPrice'* (or, edit `Set Order Fields` to select which incoming fields you wish to save)
 6. Change the schedule time for sending email from `Everyday at 7PM` to whichever time you choose. 
 

## Test:
- Activate the workflow.
- From the node `Webhook`, copy *Production URL*
- Send the following CURL request to the URL given to you:
` curl -X POST   -H "Content-Type: application/json"   -d '{"orderID": 12345, "orderPrice": 99.99}' YOUR_URL_HERE`
- It should say *Node executed successfully*. Now check your Airtable and confirm the order was stored in the right place.

## 🔗 Nodes Used

Airtable, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
