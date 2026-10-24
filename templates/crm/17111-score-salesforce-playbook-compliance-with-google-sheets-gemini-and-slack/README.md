# 🤝 Score Salesforce playbook compliance with Google Sheets, Gemini, and Slack

> ⚡ **10 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow manually runs to review Salesforce opportunities listed in Google Sheets, evaluates each deal against sales playbook rules using Google Gemini, updates compliance fields in Salesforce, alerts in Slack for low scores, and logs results back to Google Sheets.

## How it works
1. Starts manually and loads a list of opportunities from Google Sheets.
2. Processes each row in batches and fetches the latest matching Opportunity record from Salesforce.
3. Adds predefined playbook rules (including a passing score) and combines them with the opportunity data.
4. Checks whether at least two meetings are completed, and if not, auto-generates a non-compliant evaluation without using AI.
5. For opportunities that pass the meeting minimum, sends the opportunity details and rules to Google Gemini to produce a compliance decision, missing steps, score, reason, and risk level, then normalizes the response into structured fields.
6. Updates the Opportunity in Salesforce with compliance status, risk, score, and timestamp, and sends a Slack alert when the compliance score is below 70.
7. For compliant opportunities, writes the final status and compliance metrics back to a Google Sheets results tab (append or update by opportunity_id).

## Setup
1. Connect credentials for Google Sheets OAuth2, Salesforce OAuth2, Slack OAuth2, and the Google Gemini (PaLM) API.
2. Ensure your input Google Sheet includes the required columns (opportunity_id, stage, meetings_done, demo_done, approval_status, rep_name) and update the spreadsheet and sheet IDs if you use a different file.
3. Verify the Salesforce Opportunity custom fields exist and match the API names used (Compliance_Status__c, Compliance_Risk__c, Compliance_Checked_At__c, Compliance_Score__c).
4. Set the target Slack channel in the Slack message step and adjust the alert threshold or message text if needed.
5. Review and edit the playbook rules and passing_score values to match your sales process before activating the workflow.

## Additional info
##  How To Customize Nodes

### Modify Playbook Rules

- Edit the **“Define Playbook Rules”** node
- Adjust rules and passing score based on your process

### Change AI Evaluation Logic

- Update the prompt inside **“Evaluate Compliance”**
- Customize scoring or decision criteria

### Adjust Slack Alerts

- Modify message format in **“Send Slack Alert”**
- Change channel ID

### Update Salesforce Fields

- Edit field mappings in:
  - **“Update Salesforce Compliance Fields”**

### Change Risk Threshold

- Modify condition in:
  - **“Check High Risk Deals”** node


##  Add-ons (Extend This Workflow)

You can enhance this workflow with:

- Email notifications for managers
- Dashboard integration (e.g., BI tools)
- Auto-task creation in Salesforce for non-compliant deals
- Weekly compliance summary reports
- Integration with CRM notes or activity logs


##  Use Case Examples

Here are some practical ways to use this workflow:

1. **Sales Playbook Enforcement**
   - Ensure reps follow required steps before advancing deals

2. **Deal Risk Identification**
   - Automatically flag risky opportunities early

3. **Sales Coaching**
   - Identify gaps like missing demos or meetings

4. **Pipeline Quality Monitoring**
   - Maintain high-quality opportunities in pipeline

5. **Compliance Reporting**
   - Track historical compliance trends in Google Sheets

There can be many more use cases depending on your sales process and business needs.


##  Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| No data fetched from Google Sheets | Incorrect Sheet ID or permissions | Reconnect Google Sheets and verify access |
| Salesforce data not updating | Invalid credentials or field mapping | Check Salesforce API credentials and field IDs |
| AI response is empty | API issue or incorrect parsing | Verify Gemini API key and response handling |
| Slack alert not sent | Wrong channel ID or permissions | Confirm Slack bot access and channel ID |
| Incorrect compliance score | Prompt logic mismatch | Review and update AI prompt logic |
| Workflow stops mid-way | Node execution error | Check execution logs in n8n |


##  Need Help?

If you need help setting up, customizing or extending this workflow, we’re here to assist.

Whether you want to:

- Tailor this workflow to your sales process
- Add advanced automations
- Integrate with more tools
- Build custom AI-powered workflows

 Reach out to **WeblineIndia** to [hire n8n workflow developers](https://www.weblineindia.com/hire-n8n-developers/) for expert support and development services.

We can help you [turn your business processes into fully automated, intelligent workflows](https://www.weblineindia.com/process-automation-solutions.html).

## 🔗 Nodes Used

Google Sheets, Slack, Salesforce, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
