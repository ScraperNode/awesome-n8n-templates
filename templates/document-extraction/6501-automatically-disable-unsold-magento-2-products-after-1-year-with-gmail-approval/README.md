# 🔬 Automatically disable unsold Magento 2 products after 1 year with Gmail approval

> ⚡ **83 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### This workflow is designed for Magento 2 merchants who want to automatically identify and deactivate products that haven't been sold in the past 12 months, helping to maintain a clean and optimised catalog. 

This automation includes order analysis, product comparison, management approval, and automated product deactivation, with full reporting and transparency.

#### 🔧 What It Does
- 1st of Every Month at 8 AM, it triggers a scheduled cleanup.
- Calculates the date 12 months ago from the current day.
- Fetches all Magento 2 orders created in the last 12 months via REST API.
- Extracts all SKUs of products sold during that period.
- Fetches the entire product catalog from Magento 2.
- Compares all products with sold SKUs to determine which products had zero sales in the last year.
- Prepares an HTML email report (including SKU, Name, Price, Status) of the unsold products.
- Sends the report to the merchant (e.g., kmyprojects@gmail.com) for approval via interactive email (Approve / Decline).
- If approved, each product is automatically disabled (status updated to 1) in Magento 2 using the REST API.
- Aggregates all disabled products and sends a confirmation email with a summary and product table.
- Ensures safe operations with conditional logic and user review before taking any action.

#### 🧠 Key Features
- ✅ Fully automated detection of inactive inventory.
- ✅ Uses n8n's Gmail Approval Node for human decision-making.
- ✅ Works with Magento 2’s REST API and handles large product sets with batching and aggregation.
- ✅ Includes fail-safe conditional checks (e.g., don’t run if no orders are found).
- ✅ Clean HTML email reports with product metadata.
- ✅ Modular and scalable for different business sizes or intervals.

#### 📦 Use Case Perfect for:

- Magento 2 store owners or managers
- Digital operations teams aiming for lean product catalogs
- Agencies maintaining Magento-based ecommerce stores
- Any business needing automated product lifecycle management

####  🔐 Credentials Required
- Magento 2 API Bearer Token (for reading orders and updating products)
- Gmail OAuth2 (for sending approval and summary emails)

####  🛠️ Customizable Parameters
- Trigger interval (currently set to monthly at 8 AM)
- Email recipients for approval and notifications
- Product status change (can be extended to delete or archive instead of disabling)

#### 🧩 Workflow Stack
- Trigger: Schedule (Monthly)
- Nodes Used:
- HTTP Request
- Code (JavaScript)
- IF Condition
- Gmail (Approval & Notification)
- Split Out / Split in Batches
- Aggregate
- Merge

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
