# 🔬 Review and approve employee expenses with forms, OpenAI and Google Workspace

> ⚡ **119 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How it works
This workflow automates employee expense reimbursements from submission to final resolution. Expenses are captured via a form, reviewed by an AI agent for justification, and routed to managers for approval or clarification. Approved expenses notify employees instantly, while rejected or unclear cases automatically schedule a follow-up discussion. All actions are logged to keep finance records clean and auditable.

## Step-by-step
- **Step 1: Capture, summarize, and request approval**
  - **On Expense Form Submission** – Captures structured expense details submitted by employees.
  - **Append row in sheet** – Stores each expense entry in Google Sheets for tracking.
  - **AI Agent** – Reviews the expense description and validates whether the full amount is justified.
    - **OpenAI Chat Model** – Powers the AI reasoning used to analyze the expense.
    - **Output Parser** – Converts the AI response into a structured decision format.
  - **If** – Routes the flow based on whether the expense is appropriate or not.

- **Step 2: Manager reviews and responds**
  - **Send Email to Manager for Approval** – Sends an approval email when the expense is justified.
  - **Send Email to Manager for Approval1** – Sends a clarification-required email when justification is unclear.
  - **If1** – Checks the manager’s approve or reject response from the email.

- **Step 3: Notify employee or schedule discussion**
  - **Send a message** – Notifies the employee when the expense is approved.
  - **Booking Agent** – Automatically finds the next available business-day time slot if the expense is rejected.
    - **OpenAI** – Interprets availability rules and slot selection logic.
    - **Get Events** – Fetches existing calendar events for the selected day.
    - **Check Availability** – Identifies free time slots within working hours.
    - **Output Parser1** – Structures the selected meeting time.
  - **Send a message2** – Emails the employee with discussion details when clarification is required.

## Why use this?
- Enforce consistent expense validation before manager review.
- Reduce manual back-and-forth between employees, managers, and finance.
- Keep a centralized, auditable record of all expense submissions.
- Speed up reimbursements with automated approvals and notifications.
- Handle rejected expenses professionally with automatic discussion scheduling.

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
