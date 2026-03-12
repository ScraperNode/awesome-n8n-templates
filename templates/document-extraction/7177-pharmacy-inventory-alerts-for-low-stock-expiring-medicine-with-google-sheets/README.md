# 🔬 Pharmacy inventory alerts for low stock & expiring medicine with Google Sheets

> ⚡ **5,254 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This n8n workflow monitors pharmacy inventory stored in a Google Sheet, checks daily for low stock or near-expiry medicines, and sends alerts to the pharmacist via email, ensuring timely restocking and waste prevention.

## Why Use It

This workflow automates inventory management for pharmacies, reducing the risk of stockouts or expired medicines, saving time, minimizing losses, and ensuring compliance with safety standards by providing proactive alerts.

## How to Import It

1. **Download the Workflow JSON**: Obtain the workflow file from the n8n template or create it based on this document.
2. **Import into n8n**: In your n8n instance, go to "Workflows," click the three dots, select "Import from File," and upload the JSON.
3. **Configure Credentials**: Set up Google Sheets, email (e.g., SMTP), and optional SMS (e.g., Twilio) credentials in n8n.
4. **Run the Workflow**: Activate the scheduled trigger and test with a sample Google Sheet.

## System Architecture

- **Daily Stock Check (9 AM)**: Automated trigger to monitor inventory levels
- **Fetch Stock Data**: Retrieves current medicine data from Google Sheets
- **Wait For All Data**: Ensures complete data retrieval before processing
- **Check Expiry Date and Low Stock**: Analyzes inventory for alerts
- **Update Google Sheet**: Records alert status and timestamps
- **Send Email Alert**: Notifies pharmacist of low stock and expiry issues

## Google Sheet File Structure

- **Sheet Name**: `PharmacyInventory`  
- **Range**: `A1:E20` (or adjust based on needs)

| A          | B             | C          | D             | E             |
|------------|---------------|------------|---------------|---------------|
| **medicine_name** | **stock_quantity** | **expiry_date** | **alert_status** | **last_checked** |
| Paracetamol | 15            | 2025-09-15 | Notified      | 2025-08-08    |
| Aspirin     | 5             | 2025-08-20 | Pending       | 2025-08-07    |
| Ibuprofen   | 20            | 2026-01-10 | -             | 2025-08-08    |

- **Columns**:
  - `medicine_name`: Name of the medicine.
  - `stock_quantity`: Current stock level (e.g., number of units).
  - `expiry_date`: Expiry date of the medicine (e.g., YYYY-MM-DD).
  - `alert_status`: Status of the alert (e.g., Pending, Notified, - for no alert).
  - `last_checked`: Date of the last inventory check.

## Customization Ideas
- **Adjust Thresholds**: Change the low stock threshold (e.g., from 10 to 5) or expiry window (e.g., from 30 to 15 days).
- **Add SMS Alerts**: Integrate Twilio or another SMS service for additional notifications.
- **Incorporate Barcode Scanning**: Add a node to import inventory updates via barcode scanners.
- **Dashboard Integration**: Connect to a dashboard (e.g., Google Data Studio) for real-time inventory tracking.
- **Automated Restock Orders**: Add logic to generate purchase orders for low stock items.

## Requirements to Run This Workflow
- **Google Sheets Account**: For storing and managing inventory data.
- **Email Service**: Gmail, SMTP, or similar for email alerts.
- **n8n Instance**: With Google Sheets and email connectors configured.
- **Cron Service**: For scheduling the daily trigger.
- **Internet Connection**: To access Google Sheets and email APIs.
- **Optional SMS Service**: Twilio or similar for SMS alerts (requires additional credentials).

Want a tailored workflow for your business? Our experts can craft it quickly [Contact our team](https://www.oneclickitsolution.com/contact-us/)

## 🔗 Nodes Used

Cron, Send Email, Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
