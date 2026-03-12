# 👥 Automate payroll processing with GPT-4, Google Sheets, PDF payslips & Slack alerts

> ⚡ **616 views** · 👥 [HR & Recruitment](../)

## Description

Automate your payroll process with this efficient workflow. Triggered monthly on the 28th, it fetches employee data from a Google Sheet, uses AI to calculate net salaries with tax and deductions, structures payslip data, generates PDF payslips, and notifies employees via email while alerting HR on Slack. Ensure accurate payroll distribution with minimal manual effort. 💰📧


### Good to Know  
- The workflow runs on the 28th of each month to align with typical payroll cycles.  
- Ensure AI credentials and Google Sheet access are configured for smooth operation.  


### How It Works  
- The **Monthly Payroll Trigger** initiates the process on the 28th.  
- **Gets Employee Data** by reading salary and deduction details from a Google Sheet.  
- **AI Calculates Salary** applies tax and deduction rules to compute net pay.  
- **Formats Payslip Data** prepares structured data for distribution.  
- **Generates PDF Payslip** creates individual payslip documents.  
- Logs payroll data to a Google Sheet for records.  
- Branches to:  
  - Sends **Email Payslip to Employee** with the PDF attachment.  
  - **Notifies HR on Slack** with payroll completion details.  


### How to Use  
- Use the manual trigger for testing, then set a monthly cron (e.g., 0 0 28 * *) for live runs on the 28th.  
- Adjust tax and deduction rules in the AI node to match local regulations.  


### Requirements  
- **GOOGLE_SHEET_ID**: Your Google Sheet ID (structured as below)  
- **Credentials Needed:**  
  1. Google Sheets OAuth2  
  2. Gmail API Key  
  3. OpenAI API Key (or similar)  
  4. Slack Bot Token (with chat:write permissions)  
- **Customize:**  
  • Employee data columns (e.g., ID, Name, Base Salary, Deductions)  
  • Tax and deduction formulas  
  • Email subject and Slack message format  

**Google Sheet Structure:**  
1. Create a sheet with columns:  
   - Employee ID  
   - Name  
   - Base Salary  
   - Deductions  
   - Net Salary  
   - Payslip Status  
   - Updated At  


### Customizing This Workflow  
- Adapt for bi-weekly payroll by adjusting the trigger to the 14th and 28th.  
- Integrate with HR systems like BambooHR for real-time employee updates.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
