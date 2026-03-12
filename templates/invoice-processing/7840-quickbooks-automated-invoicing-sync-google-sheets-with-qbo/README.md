# 🧾 QuickBooks automated invoicing - sync Google Sheets with QBO

> ⚡ **387 views** · 🧾 [Invoice Processing](../)

## Description

## Video Introduction
[![Video Walkthrough](https://vasarmilan-public.s3.us-east-1.amazonaws.com/blog_thumbnails/thumbnail_rec0EGjS8Q1AxvT1b.jpg)](https://youtu.be/mprQ4CY3yn0)

#### Want to automate your inbox or need a custom workflow? [📞 Book a Call](https://smoothwork.ai/book-a-call/) | [💬 DM me on Linkedin](https://www.linkedin.com/in/mil%C3%A1n-v%C3%A1s%C3%A1rhelyi-3a9985123/)

---

## Overview

This workflow automates invoice creation in QuickBooks Online by importing data directly from a Google Sheet. Instead of manually entering invoice details one by one, this template reads structured data from your spreadsheet and automatically generates corresponding invoices in QuickBooks, saving time and reducing data entry errors.

## Key Features

- Automatically reads invoice data from Google Sheets including customer IDs, descriptions, and amounts
- Creates properly formatted invoices in QuickBooks Online with line items
- Eliminates manual data entry and reduces human error
- Scalable solution for processing multiple invoices at once

## Common Use Cases

- Batch invoice generation from sales or order data
- Automated billing workflows for recurring services
- Syncing invoice data from external systems via Google Sheets
- Streamlining accounting processes for small businesses

## Setup and Configuration

**QuickBooks Developer Account:**
1. Register at `developer.intuit.com` and create a new app in the App dashboard
2. Select 'Accounting' scope permissions for your application
3. Copy your Client ID and Client Secret from the Keys & Credentials section
4. Add the n8n OAuth redirect URL to your app's authorized redirect URIs
5. In n8n, create a QuickBooks Online OAuth2 credential using your Client ID and Secret
6. Set Environment to 'Sandbox' for testing or 'Production' for live data
7. Click 'Connect my account' and authorize the connection

**Google Sheets Setup:**
- Connect your Google Sheets account in n8n using OAuth2 authentication
- Update the 'Config - Sheet URL' node with your Google Sheets URL
- Your sheet must contain these columns: `CustomerId` (QuickBooks customer ID), `Description` (line item description), and `Amount` (invoice amount)

**Invoice Customization:**
In the 'Create Invoice in QuickBooks' node, adjust the `itemId` and `Qty` fields to match your QuickBooks accounting setup and product catalog.

## 🔗 Nodes Used

Google Sheets, QuickBooks Online

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
