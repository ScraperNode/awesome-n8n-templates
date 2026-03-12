# 🧾 Generate invoices, save to Drive and send email to customer with JS + G Sheets

> ⚡ **8,126 views** · 🧾 [Invoice Processing](../)

## Description

This workflow automates invoice generation from form submissions, ensuring unique order IDs, creating PDF invoices, storing files, emailing customers, and logging invoice data — all seamlessly integrated.

---

## 🔹 Workflow Overview

1. **Trigger (Webhook)**
   Starts when an order form is submitted, capturing customer and order details.

2. **Generate Random Order ID**
   A Function node creates a unique alphanumeric invoice ID (e.g., `INV-X92B7D`).

3. **Check for Duplicate Order ID**
   Google Sheets looks up the generated order ID in your invoice log sheet to prevent duplicates.

4. **Conditional Check (IF Node)**

   * If the ID already exists → regenerates a new ID (loops back)
   * If unique → proceeds to invoice creation

5. **Prepare Invoice Data**
   A Set node formats customer info, date, order items, and the unique order ID to fit your invoice template.

6. **Convert HTML to PDF**
   HTTP Request node sends your invoice HTML to the RapidAPI HTML-to-PDF service and receives the PDF file.

7. **Upload PDF to Cloud Storage**
   Save the PDF in Google Drive or Dropbox with a clear file name like `Invoice-INV-X92B7D.pdf`.

8. **Send Invoice Email to Customer**
   Email node attaches the PDF and includes the order ID in the email subject/body.

9. **Log Invoice Details**
   Append invoice data (customer info, order ID, total, PDF link) to your Google Sheet for tracking.

---

## ⚙️ Node Details & Setup

### 1. Webhook Trigger

* Configure to receive form submissions (order details like name, email, items, total).

### 2. Function: Generate Random Order ID

* Sample JS code generates unique IDs prefixed by `INV-`.

### 3. Google Sheets: Lookup Row

* Set up connection to your invoice log sheet.
* Search for existing order ID to avoid duplicates.

### 4. IF Node: Check Order ID Existence

* Condition: If order ID found → loop to regenerate.
* Else → continue workflow.

### 5. Set Node: Prepare Invoice HTML

* Define variables like customer name, date, items, and order ID.
* This data populates your HTML invoice template.

### 6. HTTP Request: Convert HTML to PDF

* [API URL to get your key](https://rapidapi.com/rhodium/api/html2pdf2/playground/apiendpoint_9b1017c6-2f56-4b7e-80d5-0fe24937d398)
* Send invoice HTML in the request body.
* Receive PDF file blob or download URL.

### 7. Google Drive (or Dropbox) Upload

* Upload the PDF file.
* Use file name format: `Invoice-{{$json["order_id"]}}.pdf`

### 8. Email Node

* Recipient: customer email from the form data.
* Attach generated PDF.
* Include order ID in email subject or body for reference.

### 9. Google Sheets: Append Row

* Log invoice metadata to keep records updated.

---

## 📁 Google Sheets Template

You can make a copy of the invoice log template [here](https://docs.google.com/spreadsheets/d/1QW_Lg1aoEBku8GaxwPbZfBY5ITAuSdvoAXRyNdCEujM/edit?gid=0)

`This sheet includes columns for order\_id, customer name, email, total, and invoice PDF link. Customize it as needed.`

---

## 📌 Additional Notes

* Customize the invoice HTML template inside the Set node to match your branding.
* Ensure API credentials for RapidAPI, Google Drive/Dropbox, and email are properly set up in your n8n credentials.
* You can expand this workflow by adding payment processing or SMS notifications.

---

## Need help or want a custom workflow?

Reach out via email at [joseph@uppfy.com](mailto:joseph@uppfy.com).

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
