# 🧾 Credit card payment reminder & tracking-for Taiwan banks

> ⚡ **1,229 views** · 🧾 [Invoice Processing](../)

## Description

# Workflow Description
This workflow automates the processing of **credit card statement emails** from multiple banks. It extracts important payment details, stores them in **Google Sheets**, and creates calendar reminders in **Google Calendar**. Additionally, it allows users to update the payment status once the bill has been paid.

---

## Key Features
1. **Email Processing**: Retrieves credit card statement emails from **eight Taiwanese banks**.
2. **PDF Parsing**: Extracts payment due date and amount from email content or attached PDF files.
3. **Google Sheets Integration**: Logs extracted data into a **Google Sheets** document for record-keeping.
4. **Google Calendar Integration**: Creates **Google Calendar** events as reminders for due payments.
5. **Webhook for Payment Updates**: Allows users to update the payment status via a webhook.

---

## Node Configurations

### 1. Email Retrieval
- **Purpose**: Fetches credit card statement emails from Gmail.
- **Configuration**:
  - **Email Filters**:
    - **SinoPac Bank**: `from:(newebill.banksinopac.com.tw) SinoPac Bank Credit Card E-Statement Notification`
    - **Cathay United Bank**: `from:(service@pxbillrc01.cathaybk.com.tw) Cathay United Bank Monthly E-Statement`
    - **CTBC Bank**: `from:(ebill@estats.ctbcbank.com) CTBC Bank Credit Card E-Statement`
    - **Taipei Fubon Bank**: `from:(rs@cf.taipeifubon.com.tw) Taipei Fubon Bank Credit Card Statement`
    - **E.SUN Commercial Bank**: `from:(estatement@esunbank.com) E.SUN Commercial Bank Credit Card E-Statement`
    - **DBS Bank**: `from:(eservicetw@dbs.com) DBS Bank Credit Card E-Statement`
    - **Union Bank of Taiwan**: `from:(聯邦銀行信用卡) Union Bank of Taiwan Credit Card E-Statement (Year Month)`
    - **Taishin International Bank**: `from:(webmaster@bhurecv.taishinbank.com.tw) Taishin International Bank Credit Card E-Statement`

---

### 2. Extract Payment Information
- **Purpose**: Extracts payment due date, total amount, and minimum payment amount.
- **Methods**:
  - **Text-based Extraction**: Uses regex to parse email body.
  - **PDF Parsing**: Extracts text from PDF attachments.

---

### 3. Data Processing and Storage
#### 3.1. Consolidate Extracted Data
- **Purpose**: Standardizes extracted payment details.
- **Data Fields**:
  - `payment_due_date`
  - `payment_amount`
  - `minimum_payment`
  - `email_id`
  - `bank`
  - `email_subject`

#### 3.2. Google Sheets Integration
- **Purpose**: Stores the extracted data in a structured format.
- **Configuration**:
  - **Sheet Name**: `n8n-Credit Card Payment Reminder`
  - **Columns**:
    - `calendar_id`
    - `Paid`
    - `Billing Period`
    - `Amount`
    - `Minimum Payment`
    - `Bank`
    - `email_id`

---

### 4. Google Calendar Integration
#### 4.1. Create Calendar Reminders
- **Purpose**: Generates reminders for upcoming payments.
- **Configuration**:
  - **Event Title**: `Credit Card Payment - {{ bank }}`
  - **Due Date**: `payment_due_date`
  - **Reminders**:
    - 30 minutes before
    - 60 minutes before
    - 1 day before

#### 4.2. Update Payment Status
- **Purpose**: Updates the calendar event once payment is made.
- **Configuration**:
  - **Webhook URL**: Automatically updates the **Google Calendar** event title and description.

---

### 5. Webhook for Payment Updates
- **Purpose**: Users can mark a payment as **paid** via a webhook.
- **Configuration**:
  - **Webhook Path**: `darrell_demo_creditcard_pay_update_path`
  - **Updates**:
    - Marks the payment as `Paid`
    - Updates **Google Calendar** and **Google Sheets**

## 🔗 Nodes Used

Google Sheets, Webhook, Google Calendar, Gmail Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
