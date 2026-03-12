# 🤝 Automated Zoho Inventory to Supabase product data pipeline

> ⚡ **784 views** · 🤝 [CRM & Sales Operations](../)

## Description

**Description**

This powerful n8n automation template enables seamless synchronization between Zoho Inventory and Supabase—keeping your product database up to date with zero manual effort. Whether you’re running an eCommerce store, inventory dashboard, or product catalog app, this workflow ensures your data pipeline stays clean, consistent, and fully automated.

**What This Template Does:**

🔁 Runs on a schedule to fetch inventory data from Zoho
🔓 Authenticates via OAuth using refresh token for secure API access
📦 Fetches products & variants with complete metadata
🔄 Splits each item and maps it into Supabase row-by-row
📊 Pushes rich product data, including name, SKU, unit, tags, stock levels, dimensions, and up to 3 custom attributes

**Fields Included in Sync:**

Product ID, Variant ID, Variant Name, Brand, SKU
Returnability, Item Type, Unit, Attributes (1–3)
Tags, Stock on Hand, UPC/EAN/ISBN, Status
Reorder Level, Dimensions, Created Time, and more

**Requirements:**
- Zoho Inventory API access (with Refresh Token)
- Supabase account & API key
- Target table (e.g., Fairy Frills) set up in Supabase
- Optional: Custom field mapping for additional use cases

**Perfect For:**

- Inventory managers syncing Zoho to custom dashboards
- D2C brands and eCommerce platforms powered by Supabase
- Internal tooling teams needing a real-time product database sync
- Startups replacing spreadsheets with a production-grade backend

## 🔗 Nodes Used

HTTP Request, Supabase, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
