# 🎣 Score and assign wealth advisory leads with Google Sheets, Gmail, and Google Gemini

> ⚡ **7 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow captures advisor and lead submissions via webhooks, scores and enriches them with Google Gemini, and stores them in Google Sheets as a lightweight CRM. It auto-assigns leads to available advisors, sends Gmail notifications, runs daily follow-up reminders, and appends an activity log and dashboard metrics.

## How it works
1. Receives a POST request via webhook with a `record_type` of `advisor` or `lead`, then normalizes and standardizes the incoming fields.
2. For advisor records, it reads the Advisors_CRM Google Sheet to detect duplicates, calculates a wealth score and grade, and uses Google Gemini to generate a structured advisor profile summary.
3. It saves (append or update) the advisor record to the Advisors_CRM sheet and appends an advisor activity entry to the Activity_Log sheet.
4. For lead records, it reads the Leads_CRM Google Sheet to detect duplicates, calculates a lead score and priority, and uses Google Gemini to generate structured enrichment fields.
5. It reads available advisors from the Advisors_CRM sheet, assigns the best-fit advisor based on needs/segment/city/capacity rules, then saves (append or update) the lead in Leads_CRM and drafts a Gmail notification to the assigned advisor.
6. It appends a lead activity entry to the Activity_Log sheet and responds to the original webhook request with a JSON success payload.
7. On a daily schedule, it reads Leads_CRM for due follow-ups, sends Gmail reminder emails to both the lead and assigned advisor, stamps the lead notes with a reminder timestamp, logs the reminder in Activity_Log, and writes daily summary metrics to a Dashboard sheet.
8. Receives advisor follow-up updates via a second webhook, merges the update into the matching lead row in Leads_CRM, optionally emails the lead next steps, logs the update to Activity_Log, and returns a JSON response.

## Setup
1. Connect Google Sheets credentials and update the spreadsheet ID/sheet tabs for Advisors_CRM, Leads_CRM, Activity_Log, and Dashboard to match your file.
2. Ensure the Google Sheets columns match the fields written by the workflow (including `advisor_email` for advisor matching and `lead_email`/`lead_id` for lead matching).
3. Connect a Google Gemini (Google AI) credential for the two AI enrichment steps and confirm the selected model name is available in your account.
4. Connect a Gmail credential and set sending behavior as needed (one step creates advisor email drafts and other steps send follow-up and update emails).
5. Copy the two webhook URLs (`advisor-lead-crm` and `advisor-followup-update`) into your intake forms or source systems and send test POST payloads including the required identifiers (for follow-up updates, `lead_id` is required).
6. Review the schedule trigger timing for daily follow-ups/dashboard generation and adjust it to your preferred run time before activating the workflow.

## Additional info
## How To Customize Nodes  

- Modify scoring logic in **Check Duplicate And Score Advisor**  
- Adjust AI prompts in **AI Summarize Advisor**  
- Change assignment rules in lead matching logic  
- Update email templates in Gmail nodes  
- Modify follow-up conditions in filter node  


## Add-ons  

- Slack notifications for advisors  
- WhatsApp alerts for leads  
- Advanced AI matching (semantic similarity)  
- Real-time dashboard (Power BI / Looker Studio)  
- Capacity-based advisor load balancing  


## Use Case Examples  

1. Assign incoming leads to best financial advisor automatically  
2. Manage advisor onboarding with AI scoring  
3. Automate follow-ups for investment prospects  
4. Track CRM activity and performance logs  
5. Build internal dashboards for sales teams  

There can be many more use cases depending on business requirements.


## Troubleshooting Guide  

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| Workflow stops after filter | No matching data | Check conditions in Filter Due Followups |
| Emails not sending | Gmail not configured | Reconnect Gmail credentials |
| Duplicate advisors | Matching logic issue | Check email/phone normalization |
| Sheet update error | Column mismatch | Refresh columns in Google Sheets node |
| AI output invalid JSON | Prompt issue | Ensure strict JSON format |


## Need Help  

If you need help setting up this workflow, customizing nodes or [building business process automation systems](https://www.weblineindia.com/process-automation-solutions.html), feel free to reach out.

We can assist with:
- Workflow customization  
- AI integration  
- CRM automation  
- Dashboard setup  
- Scalable automation architecture  

[Contact **WeblineIndia**](https://www.weblineindia.com/contact-us.html) for expert assistance in building production-ready automation workflows tailored to your business needs.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
