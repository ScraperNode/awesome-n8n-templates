# 🎣 Sync Facebook/Google lead ads to Google Sheets & Salesforce CRM

> ⚡ **7,066 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

Stop wasting time on manual data entry and instantly engage with your new leads! This powerful and production-ready n8n workflow automates the entire process of capturing leads from **Facebook Lead Ads** (or **Google Ads Lead Forms**), creating a backup in **Google Sheets**, and adding them directly into your **CRM** like Salesforce.

This template is designed for marketers, sales teams, and agencies who want to ensure every lead is tracked and actioned immediately, improving conversion rates and maintaining a clean, organized database.

**How It Works**
This workflow follows a logical and robust sequence:

- **Instant Trigger**: The workflow instantly starts when a new lead is submitted on your connected Facebook Lead Ad form.
- **Smart Data Prep**: A **Set** node automatically processes the incoming data, intelligently splitting the 'full_name' field into 'First Name' and 'Last Name' to ensure compatibility with standard CRM fields.
- **Reliable Backup**: The lead details are immediately appended to a new row in a specified Google Sheet. This serves as a permanent, easy-to-access log of all your leads. A "Processing" status is added.
- **CRM Integration**: The formatted lead data is used to create a new **Lead** in Salesforce. This can be easily swapped for other CRMs like HubSpot, Pipedrive, Zoho, or any custom CRM with an API.
- **Status Confirmation**: After the lead is successfully created in the CRM, the workflow goes back to the Google Sheet and updates the lead's status from "Processing" to "Synced," giving you a clear, at-a-glance overview of your sync status.

**Key Features**
- **Multi-Platform Ready**: Primarily set up for Facebook Lead Ads, but the trigger can be easily swapped with the **Google Ads Lead Form Trigger** node for Google-based campaigns.
- **Data Integrity**: Includes a data preparation step to clean and structure information before sending it to your CRM.
- **Failsafe Logging**: Google Sheets integration ensures you never lose a lead, even if there's a temporary issue with your CRM.
- **Closed-Loop Reporting**: The status update feature provides clear confirmation within your spreadsheet that the automation was successful for each lead.
- **Highly Customizable**: Easily adapt the workflow to handle custom fields from your lead forms and map them to any field in your CRM.

**Setup Instructions**
1. Import Template: Add this workflow to your n8n canvas.
2. Configure Trigger:
	- Select the **Facebook Lead Ad** node.
	- Create or select your Facebook Lead Ads API credentials.
	- Choose the correct **Page** and **Form** you want to track from the dropdown lists.
	- (Optional: To use Google Ads, delete the Facebook node and add the 'Google Ads Lead Form Trigger' node instead, then connect it to the 'Prepare CRM Data' node.)
3. Configure Google Sheets:
	- Select the **Log Lead to Google Sheets** node.
	- Create or select your Google Sheets API credentials.
	- Enter your Spreadsheet ID and the Sheet Name (e.g., "Leads").
	- Ensure your sheet has the following headers: **Timestamp, FullName, Email, PhoneNumber, LeadID, CRM_Status**.
	- The **Update Status in Sheet** node will automatically use the same credentials and sheet details.
4. Configure Your CRM:
	- Select the **Create Lead in Salesforce** node.
	- Create or select your Salesforce API credentials.
	- Review the mapped fields. You can add any custom fields from your form by referencing the data from the trigger node (e.g., **{{$nodes["Facebook Lead Ad"].json.custom_field_name}}**).
5. Activate Workflow: Save and activate your workflow to start automating your lead management!

This automation will save you hours of administrative work, eliminate human error, and ensure your sales team can follow up with hot leads faster than ever.

## 🔗 Nodes Used

Google Sheets, Start, Salesforce, Facebook Lead Ads Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
