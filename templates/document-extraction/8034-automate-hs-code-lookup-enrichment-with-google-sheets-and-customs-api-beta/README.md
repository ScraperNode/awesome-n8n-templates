# 🔬 Automate HS code lookup & enrichment with Google Sheets and customs API (beta)

> ⚡ **556 views** · 🔬 [Document Extraction & Analysis](../)

## Description

"*I used to spend hours every week just copy-pasting product descriptions to find the right tariff codes for our international shipments. It was tedious and prone to errors.*" - Accounting specialist.


This workflow eliminates that manual work entirely. It automatically finds customs tariff numbers (also known as HS Codes or "Zolltarifnummern") for your products and enriches your data in Google Sheets. It offers two powerful modes: bulk processing for entire product lists and an on-demand chat interface for quick single lookups.

## new features
- added the API score in percentage (80 to 100% is perfect, 70-80% still good)
- added description of the found HS Code to better verify the accuracy
-please keep in mind, that is still a **beta**
https://www.zolltarifnummern.de/services/api 

![Zoll2.png](fileId:2312)


## What this workflow does
- **Bulk Enrichment from Google Sheets:** Reads a list of product descriptions from a specified Google Sheet.
- **External API Lookup:** For each product, it queries the zolltarifnummern.de API to find the most relevant customs tariff number.
- **Automated Data Update:** Writes the found tariff numbers back into the correct row in your Google Sheet.
- **On-Demand Single Lookup:** Use the integrated Chat Trigger to instantly look up a tariff number for a single product description without leaving n8n.
- **Completion Notification:** Sends a confirmation email via Gmail once the bulk processing job is finished.


## Nodes Used
1. Google Sheets
2. HTTP Request
3. Loop Over Items (Split in Batches)
4. Set
5. Gmail
6. Chat Trigger
7. Manual Trigger


## Preparation
A Google Sheet prepared with at least two columns: one for your product descriptions (e.g., ProductDescription) and an empty one for the results (e.g., TariffCode).
How to set up this workflow
Configure Google Sheets (Read):

Open the "Read Item Descriptions" node.
Select your Google Sheets credentials.
Enter your Spreadsheet ID and the name of the sheet containing your product data.
Make sure the "Columns to Read" field includes the name of your product description column.
Configure Google Sheets (Update):

Open the "Write Customs Tariff to Sheet"  node.
Select the same Google Sheets credentials.
Enter the same Spreadsheet ID and Sheet Name.
Under Columns, set Matching Columns to your product description column name. This is crucial for updating the correct rows.
Configure Email Notification:

Open the "Send Completion Email" (Gmail) node.
Select your Gmail credentials.
In the Send To field, enter the email address where you want to receive the completion notification.

## Run the Workflow:

**For Bulk Processing**: Activate the workflow and execute the "Abfrage starten" (Start Query) Manual Trigger.
**For a Single Lookup**: Use the Chat Trigger. Open the chat pane, type a product description, and hit send. The workflow will return the suggested tariff number.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
