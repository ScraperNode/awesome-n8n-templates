# 👥 Generate and email PDF payslips from Google Sheets with Gmail

> ⚡ **345 views** · 👥 [HR & Recruitment](../)

## Description

This workflow automates the entire payslip process by pulling payroll data directly from Google Sheets, generating a professional and secure PDF for each employee, and emailing it to them instantly. Save hours of manual HR administration, eliminate human error, and ensure timely, confidential delivery of payslips every month.

![Screenshot 20251109 at 15.44.02.png](fileId:3254)

## Why Use This Workflow?

**Time Savings:** Reduces the entire payslip generation and distribution process from hours of manual work to under 5 minutes.  
**Cost Reduction:** Avoids monthly subscription fees for dedicated payroll software, potentially saving $50-$200 per month.  
**Error Prevention:** Ensures 100% data accuracy by pulling data directly from the source sheet, eliminating risky copy-paste mistakes.  
**Scalability:** Effortlessly handles payroll for 10 or 1,000+ employees without any changes to the core process.

## Ideal For

- **HR Departments:** For automating the monthly payslip distribution cycle, freeing up teams to focus on more strategic tasks.
- **Small Business Owners:** For managing payroll professionally and efficiently without a dedicated HR team or expensive software.
- **Finance & Operations Teams:** For streamlining a critical financial communication process, ensuring accuracy and creating an audit trail.

## How It Works

1.  **Trigger:** The workflow is initiated manually, giving you full control over when to run payroll.
2.  **Configuration & Data Fetch:** It loads company-specific details (name, address) and fetches the complete payroll dataset from your designated Google Sheet.
3.  **Filter Unsent:** The workflow intelligently filters the list to process only employees who have not yet been sent a payslip, checking a status column in your sheet.
4.  **Iterate & Process:** It processes one employee record at a time in a loop.
5.  **Prepare Payslip Data:** A Code node dynamically formats all financial data into local currency, generates itemized lists for income and deductions (only showing non-zero values), and even converts the final take-home pay amount into words (specifically in Indonesian).
6.  **Generate PDF:** The prepared data is injected into a beautifully designed HTML template. Puppeteer then converts this HTML into a high-quality, print-ready A4 PDF document.
7.  **Email Delivery:** The generated PDF is attached to a personalized email and sent directly to the employee using your Gmail account.
8.  **Update Status:** Finally, the workflow updates the Google Sheet, marking the employee's payslip as "sent" to prevent duplicate emails in future runs.

![Payslip.png](fileId:3253)


## Setup Guide

### Prerequisites

| Requirement | Type | Purpose |
| :--- | :--- | :--- |
| [n8n instance](https://n8n.partnerlinks.io/khmuhtadin) | Essential | The platform to run the automation. |
| Google Sheets Account | Essential | To store and manage employee payroll data. |
| Gmail Account | Essential | To send the generated PDF payslips to employees. |
| Google Cloud Project | Essential | To create OAuth2 credentials for Sheets and Gmail. |

### Installation Steps

1.  Import the JSON file to your [n8n instance](https://n8n.partnerlinks.io/khmuhtadin).
2.  **Configure credentials:**
    -   **Google Sheets:** Create or use existing OAuth2 credentials from the Google Cloud Console. Ensure the Google Sheets API is enabled.
    -   **Gmail:** Create or use existing OAuth2 credentials. Ensure the Gmail API is enabled. Often, you can use the same credential for both services.
3.  **Update environment-specific values:**
    -   In the **Fetch Payroll Data** and **Mark Email Sent in Sheet** nodes, select your Google Sheet and specific tab containing the payroll data.
    -   In the **Company Configuration** node, update the values with your company's name, address, and the current payroll period details.
4.  **Customize settings:**
    -   Review the email subject and body in the **Send Payslip Email** node and adjust the text as needed.
    -   Modify the template in the **Generate Payslip HTML** node to match your company's branding (e.g., change the primary color).
5.  **Test execution:**
    -   Add a test row to your Google Sheet with your own email address. Make sure the `Is Email Sent` column is set to "no".
    -   Run the workflow manually to verify the process works end-to-end.

## Technical Details

### Core Nodes

| Node | Purpose | Key Configuration |
| :--- | :--- | :--- |
| **Google Sheets** | Reads payroll data and updates the 'sent' status. | `Spreadsheet ID`, `Sheet Name`, and `Bank Account` as the key for matching rows to update. |
| **Filter** | Processes only employees who haven't received a payslip. | Condition: `{{ $json["Is Email Sent"] }}` equals `no`. |
| **Code** | Formats currency, creates dynamic tables, and converts numbers to words. | Maps input columns from the sheet to output variables for the HTML template. |
| **Puppeteer** | Converts the styled HTML into a downloadable PDF file. | `page.pdf` settings define the format (A4), margins, and scale. |
| **Gmail** | Emails the generated PDF to the corresponding employee. | `To`, `Subject`, and `Attachment` fields use expressions to pull data from previous nodes. |
| **Set** | Stores global configuration like company name and payroll date. | All company-specific details that appear on the payslip. |

### Workflow Logic

The workflow operates on an idempotent loop principle. It first reads all data, then filters out employees who have already been processed by checking an `Is Email Sent` column. For each remaining employee, it generates the PDF, sends the email, and critically, updates the status column in Google Sheets from "no" to "yes". This final step ensures that if the workflow is run again, it will not re-process and re-send payslips, preventing duplicates.

## Customization Options

**Basic Adjustments:**

-   **Email Content:** Modify the subject and body in the `Send Payslip Email` node.
-   **Payslip Branding:** In the `Generate Payslip HTML` node, change the CSS variables like `--primary-color` to match your company colors.
-   **Company Info:** Update all company-specific text in the `Company Configuration` node.

**Advanced Enhancements:**

-   **Automated Scheduling:** Replace the `Manual Trigger` with a `Schedule Trigger` to run the workflow automatically on a specific day each month.
-   **Cloud Storage:** Add a Google Drive or Dropbox node after PDF generation to save a copy of every payslip to a secure cloud folder for archival purposes.
-   **Error Notifications:** Add an error route to send a notification to an HR administrator via Slack or email if any part of the process fails for an employee.


## Troubleshooting

**Common Issues:**

| Problem | Cause | Solution |
| :--- | :--- | :--- |
| PDF formatting is broken or misaligned. | Invalid HTML/CSS in the template, or an expression is returning an empty value. | Verify all expressions in the `Generate Payslip HTML` node are linked correctly. Use an online validator to check for HTML syntax errors. |
| Workflow processes the same employees again. | The `Mark Email Sent in Sheet` node failed, or the `Filter` is misconfigured. | Ensure the `Filter` node checks for "no" (case-sensitive). Verify the `Mark Email Sent` node has write permissions and is correctly identifying the row to update. |
| Emails are not being sent. | Incorrect Gmail API permissions or invalid credentials. | Re-authenticate your Gmail credential in n8n. Check your Google Cloud Project to ensure the Gmail API is enabled and has not hit its usage quota. |

## Use Case Examples

### Scenario 1: The Small Business Owner

**Challenge:** A small agency owner with 20 employees manages payroll in a Google Sheet. Every month, they spend half a day manually creating payslips in a Word template, saving each as a PDF, and emailing them one by one.  
**Solution:** By implementing this workflow, they can trigger the entire process with a single click after finalizing the payroll sheet.  
**Result:** What used to take 3 hours now takes less than 2 minutes. Employees receive professional, consistent payslips, and the owner has a clear record of delivery in their Google Sheet.

### Scenario 2: The HR Manager

**Challenge:** An HR manager at a 150-employee company needs to distribute payslips confidentially. The current process involves a mail merge that is prone to errors and requires manual verification.  
**Solution:** The payroll report is exported to a Google Sheet, and this workflow handles the rest. It runs through the entire list, generating and sending each payslip individually.  
**Result:** The risk of sending the wrong payslip to an employee is eliminated. The process is fully automated, secure, and provides an auditable trail directly in the spreadsheet, saving the HR department over a day of work each month.

---

**Created by:** [Khaisa Studio](https://khaisa.studio)  
**Category:** HR & Recruiting | **Tags:** Google Sheets, Gmail, PDF, HR, Automation, Puppeteer, Payroll  
**Need custom workflows?** [Contact us](https://khaisa.studio/contact)

**Connect with the creator:**  
[Portfolio](https://khmuhtadin.com) • [Workflows](https://khaisa.studio/products/) • [LinkedIn](https://www.linkedin.com/in/khmuhtadin/) • [Medium](https://medium.com/@khaisastudio) • [Threads](https://www.threads.com/@khmuhtadin)

## 🔗 Nodes Used

Google Sheets, Gmail, Filter, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
