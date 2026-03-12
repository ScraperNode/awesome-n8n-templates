# 💬 Recover Abandoned Shopify Carts with Email Follow-ups, HubSpot CRM & Google Sheets Tracking

> ⚡ **147 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## How it works
The workflow triggers on a new checkout event from Shopify and extracts all relevant cart data. It filters carts based on value and age to isolate qualified abandoned checkouts. For each qualified cart, it sends a follow-up email, updates or creates the corresponding HubSpot contact, and generates a CRM note linked to that contact. Finally, it logs the processed cart into Google Sheets for tracking and review.

## Step-by-step

- **Trigger on new Shopify checkout**  
  - **Shopify Trigger** – Starts the workflow when a new checkout is created.

- **Normalize and structure cart data**  
  - **Parse Cart Data** – Extracts email, customer name, items, cart totals, timestamps, and hours since creation.

- **Filter carts that meet follow-up criteria**  
  - **Filter Qualified Carts** – Passes only carts older than 12 hours and valued above 50.

- **Send follow-up message**  
  - **Send a message** – Delivers a reminder email to the customer about the pending checkout.

- **Create or update CRM contact**  
  - **Create or update a contact** – Ensures the shopper exists as a HubSpot contact.

- **Prepare CRM note details**  
  - **Generates Note Data** – Builds a structured note containing timing, cart details, and follow-up context.

- **Create the HubSpot note**  
  - **Create HubSpot Note** – Submits the prepared note to HubSpot’s CRM.

- **Associate note with the contact**  
  - **Associate Note with Contact in HubSpot** – Links the generated note to the correct HubSpot contact.

- **Record activity in tracker sheet**  
  - **Log to Google Sheets** – Appends processed cart fields including items, totals, timestamps, and customer info.

## Why use this?
- Identifies high-value or long-abandoned carts automatically and follows up without manual effort.  
- Keeps CRM records updated and adds contextual notes sales teams can act on.  
- Maintains a structured audit trail of every abandoned cart interaction.  
- Improves recovery chances by combining email outreach with CRM enrichment and logging.  
- Enables analysis of abandoned checkout patterns directly from Google Sheets.

## 🔗 Nodes Used

Google Sheets, HTTP Request, HubSpot, Shopify Trigger, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
