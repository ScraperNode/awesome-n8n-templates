# 🤝 Send daily stock and sales profit reports with Google Sheets and Gmail

> ⚡ **119 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs daily at 6AM to pull yesterday’s sales, incoming goods, and inventory data from Google Sheets, update stock quantities and status in the inventory sheet, and email a profit summary via Gmail.

## How it works
1. Runs every day at 6AM on a schedule.
2. Reads data from the Google Sheets tabs Note, Sales Details, Incoming Goods, and Stock of goods.
3. Filters each dataset to only include rows from yesterday and summarizes sales quantity, incoming quantity, total sales paid, and total restock spend.
4. Joins the summarized sales and incoming quantities to the current inventory list by SKU.
5. Calculates new stock on hand and stock status (Aman, Perlu Restock, Habis) and updates the Stock of goods sheet in Google Sheets.
6. Formats a daily financial recap (gross profit, restock expense, net profit) and sends it to the configured recipient via Gmail.

## Setup
1. Connect a Google Sheets OAuth credential that has access to the spreadsheet containing the Note, Sales Details, Incoming Goods, and Stock of goods tabs.
2. Update the Google Sheets document URL and sheet names in each Google Sheets step if your spreadsheet differs.
3. Ensure your sheets include the expected fields (for example: Tanggal in dd/MM/yyyy, SKU, Qty, Qty Masuk, Total Bayar, Total, Stok Saat Ini, Stok Minimum, Total Terjual, Total Barang Masuk, and row_number for inventory updates).
4. Connect a Gmail OAuth2 credential and set the recipient email address and message template in the Gmail send step.

## Additional info
Published by Fahmi Fahreza, Indonesia’s first official n8n Brand Ambassador and founder of WithMi Automation, built from real client implementations, not tutorials.
→ Let us build it for you: withmiautomation.com
→ Learn to build it yourself: academy.withmiautomation.com
→ Bring Fahmi to your team (training, workshop, talkshow): fahmiiireza.com

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
