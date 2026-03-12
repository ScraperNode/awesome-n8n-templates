# 📱 Send personalized product recommendations via email after Shopify purchases

> ⚡ **213 views** · 📱 [Social Media & Email Marketing](../)

## Description

## 🚀 Shopify Post-Purchase Upsell/Cross-sell Email Automation


## Overview
This automation triggers when a new order is placed in your Shopify store. It then waits a short period, intelligently identifies complementary products based on the customer's purchase, retrieves those product details, and finally sends a personalized email showcasing the recommendations.


## How it works

This automation triggers when a new order is placed in your Shopify store. It then waits a short period, intelligently identifies complementary products based on the customer's purchase, retrieves those product details, and finally sends a personalized email showcasing the recommendations.

1. Order Detection: When a customer completes a purchase, the flow begins.

2. Smart Delay: A brief pause ensures initial order confirmations are sent.

3. Recommendation Engine: The workflow identifies relevant upsell or cross-sell products based on your predefined rules.

4. Dynamic Email Creation: It fetches details for the recommended products and builds a visually appealing, personalized email.

5. Email Delivery: The tailored email is sent to your customer, encouraging their next purchase.

## Setup Steps

Getting this automation ready will take approximately 1-2 hours, including populating your product recommendations.

Import Workflow: Import the provided n8n JSON file into your n8n instance.

Configure Credentials: Set up your Shopify API and SMTP (email sending) credentials within n8n. Ensure your Shopify credential has read_orders and read_products permissions.

Define Recommendations: Open the Generate Recommendation IDs (Code) node. Crucially, update the recommendationsMap within this node to define which products should be suggested based on specific purchased product IDs from your Shopify store.

Customize Email & URLs: In the Send Upsell Email node, customize the fromEmail, subject, and the main HTML content to match your brand. Also, update YOUR_SHOPIFY_STORE_URL and YOUR_UNSUBSCRIBE_LINK placeholders in the Format Recommendations HTML (Code) and Send Upsell Email nodes.

Activate & Test: Turn the workflow to Active and place a test order in your Shopify store to verify everything works as expected.

(For detailed descriptions and troubleshooting, refer to the Sticky Notes located directly within the n8n workflow itself.)

## 🔗 Nodes Used

Send Email, Shopify Trigger, Shopify

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
