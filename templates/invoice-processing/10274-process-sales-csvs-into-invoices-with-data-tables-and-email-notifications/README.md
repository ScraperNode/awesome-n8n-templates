# 🧾 Process sales CSVs into invoices with data tables and email notifications

> ⚡ **189 views** · 🧾 [Invoice Processing](../)

## Description

# 🧾 Smart Sales Invoice Processor (Data tables Edition)

Transform uploaded **sales CSV files** into validated, enriched invoices, all handled natively inside **n8n** using **Data tables**, validation logic, enrichment, duplicate detection, and automated email notifications.

This workflow demonstrates a full **ETL + business automation** pattern, turning raw CSV data into structured, auditable records ready for storage and customer notifications.

---

## ✨ Features
- ✅ Multi-format CSV input (file upload or raw text)  
- ✅ Validation for email, quantity, date, and required fields  
- ✅ Automatic error handling with **400 Bad Request** JSON response for invalid CSVs  
- ✅ Product enrichment from `Products` Datatable  
- ✅ Invoice creation and storage in `Invoices` Datatable  
- ✅ Automated subtotal, tax, and total calculation  
- ✅ Duplicate order detection with **409 Conflict** response  
- ✅ Ready-to-send email confirmations (simulated in this version)  
- ✅ Fully native, no external integrations required  

---

## 🧩 Use Cases
- E-commerce order and invoice automation  
- Internal accounting or ERP data ingestion  
- Migrating CSV-based legacy systems into n8n  
- Automated business logic for B2B integrations  

---

## ⚙️ Setup Instructions

### 1️⃣ Create two n8n Data tables

#### Products
Stores your product catalog with SKU-based pricing and tax details.

| Column   | Type   | Example        |
| -------- | ------ | -------------- |
| sku      | String | PROD-001       |
| name     | String | Premium Widget |
| price    | Number | 49.99          |
| tax_rate | Number | 0.10           |

![image.png](fileId:3163)

---

#### Invoices
Stores validated, calculated invoices created by this workflow.

| Column         | Type     | Example                                     |
| -------------- | -------- | ------------------------------------------- |
| invoice_id     | String   | INV-20251103-001                            |
| customer_email | String   | [john@example.com](mailto:john@example.com) |
| order_date     | Date     | 2025-01-15                                  |
| subtotal       | Number   | 99.98                                       |
| total_tax      | Number   | 10.00                                       |
| grand_total    | Number   | 109.98                                      |
| created_at     | DateTime | 2025-11-03T08:00:00Z                        |

![image.png](fileId:3162)

---

### 2️⃣ Import Workflow
Import the provided workflow JSON file into your n8n instance.

### 3️⃣ Test the Workflow
Use cURL or Postman to send a test CSV to your endpoint.

```bash
curl -X POST \
  -H "Content-Type: text/csv" \
  --data-binary $'sku,quantity,customer_email,order_date\nPROD-001,2,john@example.com,2025-01-15\nPROD-002,1,jane@example.com,2025-01-15' \
  https://&lt;your-n8n-url&gt;/webhook/process-sales
```

#### 📦 Example Responses
##### ✅ Success (HTTP 200)

```json
{
  "success": true,
  "processed_at": "2025-11-04T15:36:52.899Z",
  "invoice_count": 1,
  "invoices": {
    "to": "john@example.com",
    "subject": "Invoice INV-1762270612772-1 - Order Confirmation",
    "body": "Dear Customer,\n\nThank you for your order!\n\nInvoice ID: INV-1762270612772-1\nOrder Date: 1/14/2025\n\nSubtotal: $99.98\nTax: $10.00\nGrand Total: $109.98\n\nThank you for your business!\n\nBest regards,\nSales Team"
  },
  "email_notifications": [
    {
      "to": "jane@example.com",
      "subject": "Invoice INV-1762270612772-2 - Order Confirmation",
      "body": "Dear Customer,\n\nThank you for your order!\n\nInvoice ID: INV-1762270612772-2\nOrder Date: 1/14/2025\n\nSubtotal: $89.99\nTax: $9.00\nGrand Total: $98.99\n\nThank you for your business!\n\nBest regards,\nSales Team"
    }
  ],
  "message": "All invoices processed and customers notified"
}
```

##### ❌ Validation Error (HTTP 400)

Occurs when the CSV file is missing required columns or contains invalid data.
```json
{
  "success": false,
  "message": "CSV validation failed",
  "error": "Validation failed: [ { \"row\": 2, \"errors\": [\"Valid email is required\"] } ]"
}
```

## 🧠 How It Works

1. **Webhook** receives uploaded CSV or raw text  
2. **Code node** parses and validates data  
3. **Data table node** loads product info (price, tax rate)  
4. **Calculation node** generates invoice totals per customer  
5. **Duplicate check** prevents reprocessing  
6. **Data table insert** saves invoices  
7. **Email preparation** creates personalized confirmations  
8. **Webhook response** returns structured JSON (200 / 400 / 409)  

---

## 🔐 Requirements

- n8n version ≥ **1.41.0**  
- **Data tables** feature enabled  
- Publicly accessible webhook URL (for testing)  
- *(Optional)* Connect a real email node (Gmail or SMTP) to send messages  

---

## 🏁 Result Highlights

- Full **CSV → Validation → Data tables → Email → JSON Response** pipeline  
- Includes built-in structured error handling (**400 / 409**)  
- **100% native n8n functionality**  
- Perfect example of **Data tables + logic-based automation** for business use cases

## 🔗 Nodes Used

Webhook, Extract from File, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
