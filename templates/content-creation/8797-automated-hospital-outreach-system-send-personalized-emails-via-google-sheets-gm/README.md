# 🎬 Automated hospital outreach system: Send personalized emails via Google Sheets & Gmail

> ⚡ **471 views** · 🎬 [Content Creation & Video](../)

## Description

### **Description:**
This workflow automates personalized email outreach to a list of hospitals. It uses a chat-based interface to accept a region and a list of hospital names, looks up their specific contact details from a structured Google Sheet, and sends a tailored email via Gmail.

## Who’s it for
This template is perfect for healthcare startups, medical device sales representatives, or IT consultants who need to conduct targeted outreach to hospital administrators. It's designed for anyone looking to automate a personalized, region-specific email campaign without manual data entry.

## How it works
1.  **Trigger:** You provide input via a chat message. The first line is the region (e.g., `LUZON`), and each subsequent line is a hospital name.
2.  **Parsing:** A Code node splits your message into a structured list of items for processing.
3.  **Batching:** The workflow processes each hospital one by one for reliable execution.
4.  **Data Lookup:** Based on the region, the workflow queries the corresponding sheet in a Google Sheets document to find the hospital's specific contact details.
5.  **Email Delivery:** A personalized email is sent to the hospital's email address using Gmail, pulling data from the spreadsheet to customize the message.

## How to set up
1.  **Credentials:** Set up n8n credentials for **Google Sheets** and **Gmail** (using OAuth2 recommended).
2.  **Google Sheet:** Duplicate the provided template Sheet structure. Your sheet must have columns like `Hospital Name` and `Main Email`.
3.  **Workflow Configuration:** Replace the placeholder Google Sheet ID in the **Set Configuration** node with the ID of your own sheet.

## Requirements
*   An n8n instance (cloud or self-hosted).
*   A Google account with access to Google Sheets and Gmail.
*   The provided Google Sheets template structure.

## How to customize
*   **Email Template:** Modify the email subject and body in the **Send Gmail Message** node. Use placeholders like `{{ $json["Your Field"] }}` to insert data from your Google Sheet.
*   **Data Source:** Replace the Google Sheets node with another data source (e.g., Airtable, PostgreSQL) by ensuring it outputs data in a similar JSON format.
*   **Output:** Instead of Gmail, use the SendBlue node to send an SMS or the Slack node to send a DM.

---

## 🔗 Nodes Used

Google Sheets, Gmail, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
