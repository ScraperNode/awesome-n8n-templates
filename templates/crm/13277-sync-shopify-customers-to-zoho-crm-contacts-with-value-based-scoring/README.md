# 🤝 Sync Shopify customers to Zoho CRM contacts with value-based scoring

> ⚡ **39 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# (Retail Automation) Shopify to CRM Contact Sync

This workflow automates the synchronization of customer data between Shopify and Zoho CRM. It triggers when a new customer or order is created in Shopify, calculates key metrics like lifetime spend and high-value status and then checks Zoho CRM to either update an existing contact or create a new one. This ensures your sales and marketing teams always have up-to-date purchase history and engagement data within the CRM.


### Quick Implementation Steps

1.  Set the `minOrderValueForHighValueTag` and `lifetimeSpendThreshold` in the **Workflow Configuration** node.
2.  Configure your Shopify Trigger with your Shopify Access Token and ensure it is listening for the correct topic (e.g., customers/create).
3.  Connect your Zoho CRM OAuth2 credentials to the Search, Create and Update nodes.
4.  Map any additional custom fields you wish to sync in the Update Existing Contact or Create New Contact nodes.


## What It Does

This workflow bridges the gap between your e-commerce platform and your CRM by processing customer activity in real-time. When a customer interacts with your Shopify store, the workflow:

1.  Calculates Value Metrics: It extracts the order total and customer history to determine if a customer is "High Value" based on your custom thresholds.
2.  Performs an Identity Check: It searches Zoho CRM to see if the customer already exists using their contact information.
3.  Synchronizes Data (Upsert):
    - If the contact exists: It updates their record with an "Engagement Score" (based on lifetime spend) and "Mentions Counts" (based on order count).
    - If the contact is new: It creates a new record in Zoho CRM using the details provided from the Shopify order.


## Who’s It For

- E-commerce Managers wanting to ensure Shopify customer data is accurately reflected in their primary CRM.
- Customer Success Teams who need visibility into customer lifetime value and order frequency directly within Zoho.
- Marketing Operations teams looking to segment customers in Zoho CRM based on purchase behavior (e.g., "High Value" tags).


## Requirements to Use This Workflow

- A running n8n instance.
- Shopify account with API access (Access Token).
- Zoho CRM account with access to the "Contacts" module.
- Proper permissions to create Webhooks in Shopify.


## How It Works & How To Set Up

### Step 1: Configure Trigger and Thresholds

1.  **Shopify New Customer or Order:** Configure this trigger to your Shopify store. It currently listens for customers/create.
2.  **Workflow Configuration:** Open this node to define your business logic constants:
    - `minOrderValueForHighValueTag`: Set the minimum price of a single order to be considered "High Value" (Default: 500).
    - `lifetimeSpendThreshold`: Set the threshold for total customer spend (Default: 1000).

### Step 2: Data Extraction

1.  **Extract Customer Data:** This node automatically parses the Shopify JSON to calculate orderTotal, lifetimeSpend and checks the boolean isHighValue against your configuration.

### Step 3: CRM Logic

1.  **Search for Existing Contact:** This node queries Zoho CRM for a matching contact.
2.  **Contact Exists?:** A conditional node that routes the workflow based on whether a Zoho id was found in the previous step.

### Step 4: Update or Create

1.  **Update Existing Contact:** Updates the Engagement_Score with the lifetime spend and Mentions_Counts with the order count.
2.  **Create New Contact:** Creates a new entry if no match is found. Note: Current configuration uses the first line item name as a placeholder for Last Name; adjust this to your preferred mapping.


## How To Customize Nodes

### Change High-Value Criteria

Modify the expressions in the Workflow Configuration node to change what qualifies as a high-value customer.

### Map Custom Zoho Fields

In the Update Existing Contact node, you can add more fields under updateFields to sync additional Shopify data (like shipping address or customer tags) into specific Zoho custom fields.

### Adjust Trigger Events

Change the Shopify Trigger topic to orders/paid if you only want to sync customers after a successful transaction rather than at account creation.

## Troubleshooting Guide

| Issue                      | Possible Cause                                  | Solution                                                                                               |
| :------------------------- | :---------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| **Trigger not firing**     | Webhook not registered or invalid Access Token. | Check Shopify credentials and ensure the "Active" toggle in n8n is on.                                 |
| **Zoho Update Fails**      | The Contact ID is missing or incorrect.         | Ensure the Search for Existing Contact node is returning a valid id.                                   |
| **Incorrect Data Mapping** | Shopify JSON structure changed.                 | Inspect the output of the Extract Customer Data node and update the expressions if fields are missing. |
| **Auth Errors**            | Zoho OAuth2 token expired.                      | Re-connect your Zoho CRM account in the n8n credentials settings.                                      |


## Need Help?

If you need assistance mapping specific Shopify metafields to Zoho, setting up advanced filtering logic or expanding this sync to include Product or Inventory data, feel free to reach out our n8n experts at **WeblineIndia**. We can help you build a robust retail automation stack.

## 🔗 Nodes Used

Shopify Trigger, Zoho CRM

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
