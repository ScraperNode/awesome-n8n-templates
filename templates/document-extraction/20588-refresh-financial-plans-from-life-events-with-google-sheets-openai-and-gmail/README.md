# 🔬 Refresh financial plans from life events with Google Sheets, OpenAI, and Gmail

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow sends quarterly financial plan check-in emails via Gmail, watches Google Sheets for submitted life-event responses, and uses OpenAI to refresh only the affected sections of a financial plan stored in Google Sheets, while logging change history and notifying the user of updates or validation issues.

## How it works
1. Runs every three months on a schedule and prepares a check-in ID, plan ID, recipient email, and Google Form link.
2. Sends a quarterly check-in email through Gmail asking the recipient to submit any life or financial changes via the Google Form.
3. Triggers when a new row is added in the Life_Event_CheckIn Google Sheet and validates that the submission includes Plan ID, Email Address, and Life Event.
4. Maps the reported life event to the relevant financial plan sections, and if no sections are affected (for example, “No Major Change”), sends a confirmation email via Gmail without updating the plan.
5. Loads the matching plan sections from the Financial Plan Google Sheet, sends the context to OpenAI to generate JSON updates for only those sections, and validates the AI output for schema and eligibility.
6. If valid, updates the Financial Plan sheet and appends a record to the Plan Change History sheet, then sends a consolidated plan update email via Gmail; if invalid, sends an AI validation notice email without changing any sheet data.

## Setup
1. Add Google Sheets credentials and point the trigger and sheet actions to your spreadsheet and the Life_Event_CheckIn, Financial Plan, and Plan Change History tabs.
2. Add a Gmail credential for sending the check-in, update, no-change, form-validation, and AI-validation emails.
3. Add an OpenAI API credential and confirm the model selection in the OpenAI node.
4. Update the check-in metadata values (recipient email, plan ID, and Google Form URL) to match your environment.
5. Ensure the Google Form writes columns that match the workflow’s expected field names (at minimum Plan ID, Email Address, Life Event, plus optional details like Event Date and income/expenses).
6. Seed the Financial Plan sheet with rows for each plan_id and section_key you expect to update, and ensure the Plan Change History sheet has the columns used for auditing (history_id, plan_id, section_key, previous/new values and recommendations, timestamps, and version).

## Additional info
## How To Customize Nodes

* **Schedule Quarterly Check-In:** Change the quarterly interval or trigger time if the review schedule needs to change.
* **Build Check-In Metadata:** Configure the production plan ID, recipient email, and Google Form URL.
* **Determine Affected Plan Sections:** Modify the life-event-to-plan-section mapping when additional event types or financial sections are required.
* **Generate Updated Financial Plan Sections:** Adjust the OpenAI model or prompt when the desired recommendation structure changes.
* **Update Financial Plan:** Change the Google Sheets document or sheet configuration when the plan storage location changes.


## Add-ons

The following are optional extensions and are not part of the current workflow:

* **Slack Notifications:** Send operational alerts when AI validation fails.
* **Supabase Storage:** Store structured plan versions outside Google Sheets.
* **Approval Workflow:** Require manual approval before AI-generated recommendations are written to the plan.
* **Additional Life Events:** Extend the event mapping for additional financial planning scenarios.
* **Audit Reporting:** Generate periodic reports from the plan change history.


## Use Case Examples

1. **New Child:** Refresh emergency fund, education savings, insurance, and related savings sections after a new child is reported.
2. **Marriage:** Review emergency fund, insurance, savings goals, and retirement planning sections.
3. **New Job:** Reassess emergency fund, insurance, savings, and retirement-related plan sections after an employment change.
4. **Home Purchase:** Refresh emergency fund, home purchase, debt strategy, and savings goal sections.
5. **Major Debt:** Reassess emergency fund, debt strategy, and savings goals when significant new debt is reported.

Additional use cases may be supported by extending the life-event mapping and affected plan sections.


## Troubleshooting Guide

| Issue                                         | Possible Cause                                             | Solution                                                                  |
| --------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------- |
| Quarterly email is not sent                   | Gmail credentials or recipient configuration is incomplete | Check Gmail credentials and `Build Check-In Metadata`                     |
| Form submission is rejected                   | Required form fields are missing                           | Ensure Plan ID, Email Address, and Life Event are provided                |
| No plan sections are updated                  | Event is mapped to no affected sections                    | Check the mapping in `Determine Affected Plan Sections`                   |
| AI result does not update the plan            | AI response failed validation                              | Review the execution output from `Validate AI Recommendations`            |
| Google Sheets update fails                    | Spreadsheet or sheet configuration is incorrect            | Verify the spreadsheet ID, sheet names, and required columns              |
| No-change submission does not update the plan | The workflow intentionally exits the update path           | This is expected behavior; only relevant life events trigger plan changes |


## Need Help

Need assistance setting up this workflow, configuring Google or OpenAI integrations, customizing life-event mappings, adding approval or notification steps, troubleshooting executions, or building similar n8n automation workflows? [Contact **WeblineIndia**](https://www.weblineindia.com/contact-us.html) for implementation and customization support.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Google Sheets Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
