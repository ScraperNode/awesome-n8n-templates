# 🤝 Automatic Squarespace order fulfillment process

> ⚡ **613 views** · 🤝 [CRM & Sales Operations](../)

## Description

This workflow automates the `Mark as Fulfilled` action in Squarespace for each order, ensuring a seamless fulfillment process without manual intervention.

![image.png](fileId:1044)

## How It Works
This workflow retrieves all pending Squarespace orders and processes their fulfillment automatically. The workflow follows these steps:

1️⃣ Get all pending orders using the HTTP Request node (Since Squarespace does not have a n8n node)
2️⃣ Create a fulfillment request using `Fulfill Order` node

The `Filter Orders` node can be used to filter valid pending order to process.

## Step-by-step
The workflow can be run as requested or on schedule

You can adjust these parameters within the Global and filter nodes:

### Global node for API Setting
- **api-version** (string, required) – The current API version (see Squarespace Orders API documentation).
- **modifiedAfter**={a-datetime} (string, conditional) – Fetch orders modified after a specific date (ISO 8601 format).
- **modifiedBefore**={b-datetime} (string, conditional) – Fetch orders modified before a specific date (ISO 8601 format).
- **cursor**={c} (string, conditional) – Used for pagination, cannot be combined with other filters.
- **fulfillmentStatus**={status} (optional, enum) – Filter by fulfillment status: PENDING, FULFILLED, or CANCELED.
- **maxPage** – Set -1 to enables infinite pagination to fetch all available orders.

### Filter Orders node
Order Filtering – Ensures only valid orders are fulfilled, particularly useful if:

- You sell digital downloads or gift cards exclusively.
- You use third-party fulfillment services for all products.

## Requirements
### Credentials
To use this workflow, you need:

- [Squarespace API Key](https://developers.squarespace.com/commerce-apis/authentication-and-permissions) – Retrieve from your Squarespace settings.

## Who Is This For?
Squarespace store owners looking to automate their fulfillment process.

Merchants selling digital or personalized products who need instant fulfillment.

---
Explore More Templates  
- [Get all orders in Squarespace to Google Sheets](https://n8n.io/workflows/3116-get-all-orders-in-squarespace-to-google-sheets/)
- [Convert Squarespace Profiles to Shopify Customers in Google Sheets](https://n8n.io/workflows/3110-convert-squarespace-profiles-to-shopify-customers-in-google-sheets/)
- [Fetch Squarespace Blog & Event Collections to Google Sheets](https://n8n.io/workflows/3098-fetch-squarespace-blog-and-event-collections-to-google-sheets/)

👉 [Check out my other n8n templates](https://n8n.io/creators/bangank36/)

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
