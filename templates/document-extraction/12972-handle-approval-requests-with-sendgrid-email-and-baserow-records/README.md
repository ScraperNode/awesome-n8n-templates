# 🔬 Handle approval requests with SendGrid email and Baserow records

> ⚡ **36 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Approval Workflow Handler – SendGrid & Baserow

This workflow automates the end-to-end approval process for any request type (e.g., purchase orders, content sign-off, access permissions). It routes the request to designated approvers, records every decision in a Baserow table, and notifies requesters and stakeholders via SendGrid at each stage.

## Pre-conditions/Requirements

### Prerequisites
- n8n instance (self-hosted, desktop, or n8n cloud)
- SendGrid account with an API Key
- Baserow workspace & table set up to store approval records
- Basic understanding of n8n node configuration

### Required Credentials
- **SendGrid API Key** – For sending transactional emails
- **Baserow Personal API Token** – For creating, updating, and querying table rows

### Specific Setup Requirements
| Baserow Column | Type     | Purpose                              | Example Value |
| -------------- | -------- | ------------------------------------ | ------------- |
| `request_id`   | text     | Unique identifier for each request   | 2542          |
| `title`        | text     | Short description of the request     | “PO &gt; $5K”    |
| `status`       | single select | Tracks state (Pending, Approved, Rejected) | “Pending”     |
| `requester`    | text     | Email of person creating the request | alice@acme.io |
| `approver`     | text     | Email of assigned approver           | bob@acme.io   |
| `updated_at`   | date     | Last status change timestamp         |               |

## How it works

This workflow automates the end-to-end approval process for any request type (e.g., purchase orders, content sign-off, access permissions). It routes the request to designated approvers, records every decision in a Baserow table, and notifies requesters and stakeholders via SendGrid at each stage.

## Key Steps:
- **Trigger**: A Manual Trigger (or any upstream workflow) injects the initial request data.
- **Create Record (Baserow)**: Store the new request as a “Pending” row.
- **Notify Approver (SendGrid)**: Email the approver with approval/denial links.
- **Wait for Action**: Hold execution until the approver clicks a link that calls the workflow’s Webhook URL.
- **Decision Branch (If node)**: Determine whether the request is Approved or Rejected.
- **Update Record (Baserow)**: Write the new status and timestamp back to the row.
- **Notify Requester (SendGrid)**: Send the final decision to the original requester.
- **Error Handling**: Error Trigger captures any unhandled failures and notifies ops.

## Set up steps

**Setup Time: 15-25 minutes**

1. **Clone or import the template** into your n8n instance.
2. **Add credentials**  
   a. Go to Credentials → New → SendGrid and paste your API key.  
   b. Go to Credentials → New → Baserow and paste your Personal API Token.
3. **Configure environment variables (optional but recommended)**  
   - `APPROVER_EMAILS` – Comma-separated list of default approvers.  
   - `STAKEHOLDER_EMAILS` – Comma-separated list of CC recipients.
4. **Edit the Baserow node**  
   - Select your workspace and the “Approvals” table that matches the column schema above.
5. **Customize email templates** in both SendGrid nodes (subject, HTML content, variables).
6. **Update Wait node’s webhook URL** if running self-hosted behind a reverse proxy.
7. **Run a test execution** using the Manual Trigger; confirm emails are delivered and the Baserow table updates correctly.
8. **Switch the trigger** (optional) from Manual to Webhook or Schedule for production use.
9. **Enable workflow** to begin processing live approval requests.

## Node Descriptions

### Core Workflow Nodes:
- **Manual Trigger** – Starts the workflow during testing or via UI.
- **Set (Initialize Request)** – Normalizes incoming data and generates a unique `request_id`.
- **Baserow (Create Row)** – Inserts a new “Pending” record.
- **SendGrid (Notify Approver)** – Sends approval request email with dynamic links.
- **Wait** – Pauses execution until the approver responds.
- **If (Decision)** – Routes the flow based on `approved` vs `rejected`.
- **Baserow (Update Row)** – Writes final status and timestamp.
- **SendGrid (Notify Requester)** – Communicates final decision.
- **Merge** – Consolidates parallel branches before ending.
- **Error Trigger** – Captures errors, logs them, and optionally notifies ops via email.
- **Sticky Notes** – Contain inline documentation for maintainers.

### Data Flow:
1. **Manual Trigger** → **Set** → **Baserow (Create Row)** → **SendGrid (Notify Approver)** → **Wait**  
2. **Wait** → **If** → (Approved ⬅︎ or ➡︎ Rejected) → **Baserow (Update Row)** → **SendGrid (Notify Requester)** → **Merge**

## Customization Examples

### 1. Auto-assign approver based on request amount
```javascript
// Code node: Dynamic approver selection
const amount = items[0].json.amount;
items[0].json.approver =
  amount &gt; 10000 ? 'cfo@acme.io' : 'manager@acme.io';
return items;
```

### 2. Slack notification instead of email
```javascript
// Replace SendGrid node with Slack node
{
  "channel": "#approvals",
  "text": `Request ${$json["request_id"]} was approved by ${$json["approver"]}`
}
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "request_id": "2542",
  "title": "PO &gt; $5K",
  "status": "Approved",
  "requester": "alice@acme.io",
  "approver": "bob@acme.io",
  "updated_at": "2024-04-27T15:41:22.347Z"
}
```

## Troubleshooting

### Common Issues
1. **Emails not sending** – Verify SendGrid API key and account sender verification; check node credentials.
2. **Baserow “permission denied”** – Ensure the Personal API Token has access to the workspace and table.
3. **Wait node never resumes** – Confirm the public webhook URL is reachable and correctly embedded in email links.

### Performance Tips
- Batch approvals in a single workflow run when possible to reduce API overhead.
- Set up Baserow table indexing on `request_id` for faster lookups.

**Pro Tips:**
- Use the **Error Trigger** to post incidents to a dedicated Slack or Microsoft Teams channel.
- Store reusable email templates in a separate “Settings” sheet or in n8n’s global static data.
- Add analytics by sending events to PostHog or Amplitude after each approval.

---

*This is a community-contributed workflow template. It is provided “as-is” without warranty; review and test thoroughly before using in production.*

## 🔗 Nodes Used

SendGrid, Baserow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
