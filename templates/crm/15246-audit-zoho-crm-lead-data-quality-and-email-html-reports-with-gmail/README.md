# 🤝 Audit Zoho CRM lead data quality and email HTML reports with Gmail

> ⚡ **160 views** · 🤝 [CRM & Sales Operations](../)

## Description

# Zoho CRM Data Quality Guardian using n8n Schedule, Code & Email Nodes

## 🚀 Quick Start Guide

This n8n workflow automatically audits your Zoho CRM leads on a schedule, cleans and validates emails and phone numbers, detects duplicates, enriches missing company data, generates a structured quality report and sends it as a styled HTML email. It helps maintain a clean, reliable CRM without manual effort.

### ⚡ Quick Implementation Steps

1. Import the workflow into n8n  
2. Connect your Zoho CRM credentials  
3. Configure Email (SMTP/Gmail/Outlook) credentials  
4. Set the module (Leads is used by default)  
5. Configure the Schedule Trigger (hourly/daily)  
6. Run a test execution  
7. Check the email report in your inbox  

---

## 📌 What It Does

This workflow acts as an automated data quality auditor for your Zoho CRM. It runs on a scheduled basis and fetches all lead records, then processes each record individually through a series of validation and transformation steps. Email addresses are cleaned and validated using a regex pattern, while phone numbers are standardized into a consistent international format.

It also detects duplicate records by comparing combinations of email and phone values. If company information is missing, the workflow intelligently derives it from the email domain or assigns a fallback value. Each record is then evaluated against defined business rules to generate quality flags such as invalid email, invalid phone, duplicate entry or missing company.

Finally, the workflow aggregates all processed records into a structured summary report, converts it into a clean HTML format and automatically sends it via email. This provides teams with a clear and actionable view of CRM data quality.

---

## 👥 Who’s It For

- Sales and CRM teams managing large datasets  
- Data quality and operations teams  
- Marketing teams relying on clean lead data  
- Businesses using Zoho CRM with growing databases  
- Automation engineers building CRM governance workflows  

---

## ⚙️ Requirements

To use this workflow, you will need:

- An active **n8n** instance  
- Access to **Zoho CRM**  
- Configured **Zoho OAuth2 credentials** in n8n  
- Configured **Email (SMTP/Gmail/Outlook)** credentials  
- Basic understanding of workflow execution in n8n  

---

## 🛠️ How It Works & How To Set Up

### 1. Schedule Trigger Setup
- The workflow starts with the **Schedule Trigger** node  
- It is configured to run **every hour at minute 5**  
- You can modify this interval based on your needs  

### 2. Connect Zoho CRM
- Open the **Fetch Zoho CRM Records** node  
- Connect your Zoho OAuth2 credentials  
- Resource is set to **Lead** and operation is **getAll**  
- It retrieves all available records  

### 3. Split Records
- The **Split Records for Processing** node parses the fetched data  
- Converts bulk records into individual items for processing  

### 4. Email Validation
- Cleans email (trim + lowercase)  
- Validates using regex  
- Flags invalid formats  

### 5. Phone Normalization
- Removes non-numeric characters  
- Converts numbers to international format  
- Assigns country codes (IN, US, UK, UAE, DE, AU)  
- Invalid lengths are cleared  

### 6. Duplicate Detection
- Combines email + phone as a unique key  
- Marks records as duplicates if repeated  

### 7. Company Enrichment
- If company is missing:
  - Extracts domain from email  
  - Converts to readable company name  
  - Falls back to “Unknown Company”  

### 8. Quality Flags Generation
- Flags include:
  - Invalid Email  
  - Invalid Phone  
  - Duplicate  
  - Missing Company  
- Calculates a **quality score (100 - 25 per issue)**  

### 9. Summary Report
- Aggregates results into:
  - Total records  
  - Valid records  
  - Invalid counts  
  - Duplicate counts  
- Generates a detailed report array  

### 10. HTML Report Formatting
- Converts JSON report into a structured HTML layout  
- Formats summary and detailed records into readable sections  
- Applies inline styling for email compatibility  

### 11. Email Delivery
- Sends the formatted HTML report via email  
- Allows automated delivery to stakeholders  
- Ensures timely visibility of CRM data quality  

---

## 🔧 How To Customize Nodes

- **Schedule Trigger**  
  Change frequency (e.g., every 4 hours, daily)

- **Zoho CRM Node**  
  Switch from Leads to Contacts if needed  

- **Email Validation Node**  
  Modify regex to enforce stricter validation  

- **Phone Normalization Node**  
  Add more country codes or rules  

- **Duplicate Detection Node**  
  Change logic (e.g., only email-based duplicates)  

- **Company Enrichment Node**  
  Integrate external enrichment APIs  

- **Quality Flags Node**  
  Add custom business rules or scoring logic  

- **HTML Formatting Node**  
  Customize layout, colors or structure of the report  

- **Email Node**  
  Change recipients, subject line or add CC/BCC  

---

## ➕ Add-ons (Extend This Workflow)

- Send reports to Slack or Microsoft Teams  
- Store reports in Google Sheets or a database  
- Auto-update cleaned records back in Zoho CRM  
- Attach CSV/Excel report in email  
- Integrate with data enrichment tools (e.g., Clearbit)  
- Build dashboards using BI tools  
- Add alerts for high duplicate rates  

---

## 💼 Use Case Examples

- CRM data cleaning automation  
- Lead validation before sales outreach  
- Duplicate lead prevention system  
- Data quality monitoring dashboards  
- Automated reporting to stakeholders  

&gt; There can be many more use cases depending on how you extend and integrate this workflow.

---

## 🧯 Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| No data fetched | Zoho credentials not connected | Reconnect OAuth2 credentials |
| Workflow not triggering | Schedule not active | Enable workflow and check trigger settings |
| Emails not sent | Email credentials not configured | Verify SMTP/Gmail settings |
| Email layout broken | Unsupported HTML/CSS | Use inline styles only |
| Emails marked invalid incorrectly | Regex too strict | Adjust validation pattern |
| Phone numbers missing | Invalid length or format | Update normalization logic |
| Duplicate detection not accurate | Key logic too simple | Enhance matching criteria |
| Company not enriched | Email missing or malformed | Add fallback logic or external API |

---

## 🤝 Need Help?

If you need assistance setting up this workflow, customizing validation rules or building advanced automation on top of it, the team at **WeblineIndia** is here to help.

We specialize in:
- n8n workflow development  
- CRM automation solutions  
- Data quality and enrichment systems  
- Custom integrations and dashboards  

Feel free to reach out to **WeblineIndia** for tailored solutions or to extend this workflow to match your business needs.

## 🔗 Nodes Used

Zoho CRM, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
