# 🧾 Automate medical billing with Google Sheets and Gmail

> ⚡ **796 views** · 🧾 [Invoice Processing](../)

## Description

# Automate Medical Billing with Google Sheets and Gmail

**Note**: This template is designed for self-hosted n8n instances. The workflow image above shows the complete automation flow.

This n8n workflow automates the patient billing process—from form submission to invoice generation, email delivery, and Google Sheets logging.

---

## 🏥 Who is this for?

This workflow is ideal for:

* Private medical clinics
* Health service providers
* Medical office administrators
* Telehealth services
* Billing departments

---

## 💡 What problem does this workflow solve?

Medical billing often involves repetitive data entry, invoice calculation, and communication. This workflow:

* Eliminates manual invoice generation
* Ensures accurate and consistent pricing for treatments
* Sends automated, personalized invoices to patients
* Logs all billing details in a Google Sheet for recordkeeping
* Alerts staff when patient data is missing

---

## ⚙️ What this workflow does

This automation builds a streamlined billing system that:

1. **Captures patient info via an embedded n8n form**
2. **Formats visit dates** for professional presentation
3. **Calculates invoice totals** based on treatment selection
4. **Sends email invoices** to patients using Gmail
5. **Logs billing data** into Google Sheets
6. **Notifies admin** via Slack if submission is incomplete

---

## ✅ Setup Instructions

### 🔑 Prerequisites

Before starting, ensure you have:

* A self-hosted **n8n** instance
* A **Google account** with access to:

  * Gmail
  * Google Sheets
* A **Slack Webhook URL** (optional but included)
* A designated **Google Sheet** to store invoices

---

### 📋 Step 1: Google Sheet Setup

Create a new Google Sheet and add the following columns in the first row (**must match exactly**):

```
Invoice No | Patient Name | Email | Date | Total Cost | Line Items | Payment Status
```

&gt; ✅ **Customizable**: You can add columns like “Insurance Provider” or “Payment Status” if needed—just update the mapping in the Google Sheets node.

---

### 🗂️ Step 2: Configure Google Credentials in n8n

In n8n:

* Go to **Settings → Credentials**
* Add:

  * **Google Sheets OAuth2**
  * **Gmail OAuth2**
* Ensure proper scopes are granted:

  * `.../auth/spreadsheets`
  * `.../auth/gmail.send`

---

### 🧾 Step 3: Configure Treatment Pricing

In the `Calculate prices` code node:

```js
const treatmentPrices = {
  "General Consultation": 60,
  "Blood Test - Basic Panel": 45,
  "Blood Test - Comprehensive": 120,
  "X-Ray - Single": 80,
  "Physical Therapy Session": 75,
  "Vaccination - Standard": 40,
  "Specialist Consultation": 120,
  "Minor Procedure": 150
};
```

&gt; ✏️ **Customizable**: Add, remove, or change treatment names and prices.

---

### 🌐 Step 4: Embed the Patient Billing Form

In the `On form submission` node:

* The form collects:

  * Patient Name
  * Email Address
  * Visit Date
  * Selected Treatments (multi-select dropdown)

&gt; ✏️ **Customizable**: Modify the form fields to include phone number, insurance info, etc.

---

### 📬 Step 5: Customize the Email Template

Open the `Send Patient Invoice Email` node:

Example message:

```
Hi {{ $json.patientName }},

Thank you for visiting MediSure Clinic on {{ $json.formattedDate }}.
Here is a summary of your treatments:
{{ $json.lineItems }}

Total Due: **${{ $json.totalCost }}**

Best regards,  
MediSure Billing Department
```

&gt; ✏️ **Customizable**: Adjust the message, branding, and subject line to match your practice.

---

### 🧠 Step 6: Handle Errors

The `Error Check` and `Generate Error Message` nodes ensure:

* No invoice is sent without an email
* Admins are alerted via Slack if critical info is missing

&gt; ✏️ **Customizable**: Replace Slack with email, webhook, or CRM notification if preferred.

---

### 🧾 Step 7: Log to Google Sheets

The `Log Invoice to Googlesheets` node appends each record:

* Invoice number
* Patient name
* Email
* Date
* Total cost
* Line items

&gt; ✏️ **Customizable**: You can change the target spreadsheet or sheet name.

---

## 🔄 Testing

Once configured:

1. Toggle the workflow **Active**
2. Submit a test form
3. Check:

   * Email receipt is accurate
   * Data is correctly appended in Google Sheets
   * No errors are logged

---

## ✨ How to Customize This Workflow

| Component               | How to Customize                               |
| ----------------------- | ---------------------------------------------- |
| **Treatment Prices**    | Edit `Calculate prices` node code              |
| **Form Fields**         | Modify the `On form submission` node           |
| **Email Body**          | Change message in `Send Patient Invoice Email` |
| **Slack Alerts**        | Replace Slack node with email or CRM action    |
| **Google Sheet Fields** | Add/remove columns and update mappings         |

---

## 🧩 Integrate with Your Stack

Add downstream automations easily:

* Push to **QuickBooks** or **Stripe** for payment processing
* Create a **calendar invite** for follow-ups
* Sync with a **CRM** like HubSpot

---

## 🛠️ Troubleshooting

| Issue                    | Fix                               |
| ------------------------ | --------------------------------- |
| Email not sent           | Check Gmail credentials & quotas  |
| Spreadsheet not updating | Confirm sheet ID and column names |
| Pricing not accurate     | Review `Calculate prices` logic   |
| Slack alert not sent     | Check webhook URL format          |

---

## 🤝 Need Help?

* Review [n8n documentation](https://docs.n8n.io/)
* Ask questions in the [n8n community forum](https://community.n8n.io)
* Contact the template creator: **David Olusola**
* Support Email : Dimejicole21@gmail.com

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
