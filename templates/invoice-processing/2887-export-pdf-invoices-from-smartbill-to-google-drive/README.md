# 🧾 Export PDF invoices from SmartBill to Google Drive

> ⚡ **1,095 views** · 🧾 [Invoice Processing](../)

## Description

This workflow automates the retrieval of invoice PDFs from the Smartbill API and saves them to Google Drive in a dynamically created folder based on last month’s date. It also generates a range of invoice numbers, ensuring proper formatting, and uploads each PDF with a structured filename.

## Overview

1. **Trigger and Data Setup:**  
   The workflow is manually triggered. It sets the invoice range (start and end numbers), invoice series, the parent Google Drive folder ID and the folder where to save the PDF files.

2. **Folder Handling:**  
   - **Folder Name Calculation:** Calculates a default folder name based on last month’s date (formatted as `YYYY-MM`).

3. **Invoice Generation:**  
   A code node generates invoice items by iterating over a specified range of numbers. Each invoice number is padded to custom number of digits (e.g., `0013`), and the invoice series and folder ID are attached to each item.

4. **Retrieving Invoice PDFs:**  
   For each generated invoice, the Smartbill API is called (using an HTTP Request node) to retrieve the corresponding invoice PDF.


## How to Use

- **Credentials:**  
  Ensure you have configured the Smartbill API (HTTP Basic Auth) and Google API credentials correctly.
  
- **Parameter Adjustment:**  
  Modify the `SetData` node if you need to change the invoice range, series, or target parent folder.
  
- **Execution:**  
  Click **Execute Workflow** to run the workflow manually.

## 🔗 Nodes Used

HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
