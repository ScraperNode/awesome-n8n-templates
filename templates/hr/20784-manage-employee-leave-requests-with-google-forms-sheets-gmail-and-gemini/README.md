# 👥 Manage employee leave requests with Google Forms, Sheets, Gmail and Gemini

> ⚡ **14 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow collects employee leave requests via an n8n Form, checks leave balances stored in Google Sheets, emails managers for approval through Gmail (with a Google Gemini-generated message), and updates request status and balances in Google Sheets based on the manager’s email reply.

## How it works
1. Receives a leave request submission from an n8n Form with employee, manager, date range, leave type, and reason.
2. Looks up the employee in a Google Sheets “Employee Data” spreadsheet and calculates requested days and whether sufficient leave balance exists.
3. If the balance is insufficient, sends a rejection email to the employee via Gmail.
4. If the balance is sufficient, uses Google Gemini to draft a manager approval email and sends it to the manager via Gmail.
5. Stores or updates the leave request in a Google Sheets “Leave Requests” spreadsheet with a generated request ID, status “Pending”, and the Gmail thread ID.
6. Polls Gmail for the manager’s reply, extracts APPROVED/REJECTED, and finds the matching request in Google Sheets using the Gmail thread ID.
7. Updates the request status in the “Leave Requests” sheet and, when approved, deducts the requested days from the corresponding leave balance in the “Employee Data” sheet based on leave type.

## Setup
1. Connect Gmail credentials for sending the employee/manager emails and for the Gmail Trigger that reads manager replies.
2. Connect Google Sheets credentials and replace the document IDs/sheet tabs for both the “Employee Data” spreadsheet and the “Leave Requests” spreadsheet.
3. Ensure the “Employee Data” sheet includes columns for Employee ID and leave balances (Casual/Causal Leave, Sick Leave, Earned Leave) plus Manager Name and Manager Email.
4. Ensure the “Leave Requests” sheet includes columns matching the workflow mapping (Request ID, Employee ID, dates, Requested Days, Reason, Status, Gmail Thread ID, Manager Reply, Approval Date).
5. Add a Google Gemini (PaLM) API credential and select the desired Gemini model in the AI message step.
6. Publish the n8n Form and share it with employees so submissions reach this workflow.

## Additional info
## Troubleshooting Guide

| Issue                          | Possible Cause                                | Solution                                                                                          |
| ------------------------------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Leave balance is not deducted  | Wrong leave column mapping                    | Check Casual Leave, Sick Leave, and Earned Leave mappings                                         |
| `7-2` appears instead of `5`   | Values are treated as text                    | Use `Number()` in the n8n expression                                                              |
| Manager reply is empty         | Gmail output uses different field names       | Use the Gmail `snippet` field when required                                                       |
| Manager email is empty         | Gmail field is `From` instead of `from`       | Use `email.From`                                                                                  |
| Subject is empty               | Gmail field is `Subject` instead of `subject` | Use `email.Subject`                                                                               |
| Leave request cannot be found  | Thread ID was not saved                       | Save the Gmail Thread ID in Leave Requests                                                        |
| Wrong leave request is updated | Incorrect Employee ID or Thread ID mapping    | Verify the lookup field and value                                                                 |
| Employee notification not sent | Invalid email address                         | Check Employee Email in Employee Data                                                             |
| Manager approval not detected  | Reply does not start with APPROVED/REJECTED   | Ask manager to reply exactly with APPROVED or REJECTED                                            |
| Balance becomes negative       | Incorrect balance check                       | Ensure approval is allowed only when available balance is greater than or equal to requested days |


## Need Help?

If you need help customizing or extending this workflow, adding multi-level approvals, reminders, escalation, leave reports, dashboards, holiday calculations or additional leave types, then [**WeblineIndia's n8n team**](https://www.weblineindia.com/hire-n8n-developers/) can assist you with advanced automation.

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, n8n Form Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
