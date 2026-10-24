# 🔬 Classify purchase requisitions with Google Gemini, Gmail, Slack and Sheets

> ⚡ **14 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives purchase requisitions via a webhook, validates and normalizes the payload, uses Google Gemini to classify the requisition into a procurement category with confidence and risk signals, then routes for auto-approval or manual review, logs results to Google Sheets, and notifies stakeholders via Gmail and Slack.

## How it works
1. Receives a new purchase requisition as a POST request to a webhook endpoint.
2. Validates required fields (PR ID, requester, description, amount) and normalizes the requisition data into a consistent structure.
3. Sends the requisition details and allowed category list to Google Gemini and requests a strict JSON classification result (category, confidence, risk, correction, reasoning).
4. Parses the AI JSON response and derives an approval decision based on confidence thresholds and misclassification risk.
5. If eligible, marks the requisition as auto-approved and ready for ERP routing; otherwise, marks it as pending manual review and emails a review ticket via Gmail.
6. Combines the original PR data with the classification outcome, appends an audit record to Google Sheets, and sends status notifications via Gmail and a Slack channel.

## Setup
1. Configure the webhook URL (POST `/pr-submission`) in your PR submission source and ensure it sends `pr_id`, `requester`, `description`, and `amount` in the request body.
2. Add Google Gemini (PaLM/Gemini) API credentials for the categorization step.
3. Add Gmail OAuth2 credentials and set the recipient addresses for the manual review email and the final processing notification.
4. Add Slack OAuth2 credentials and select the target channel for procurement alerts.
5. Add Google Sheets credentials, create/select the target spreadsheet and `PR_Records` sheet, and ensure the columns match the fields being appended (for example `pr_id`, `final_category`, `confidence_score`, and `approval_status`).

## Additional info
## How To Customize Nodes

### Customize Procurement Categories

Modify the allowed categories inside:

* `AI: Categorize Purchase Requisition`

Current categories:

* IT Equipment
* Office Supplies
* Software
* Facilities
* Marketing
* HR & Training
* Professional Services
* Logistics
* Uncategorized

### Adjust Confidence Thresholds

Modify logic inside:

* `Calculate Classification Confidence`

Current approval logic considers:
- Confidence score
- Misclassification risk
- AI approval recommendation

Typical behavior:
- High confidence + low risk → Auto Approved
- Medium confidence or elevated risk → Manual Review
- Low confidence or category mismatch → Manual Review

### Modify Approval Logic

Update the node:

* `Check Auto Approval Eligibility`

You can add additional business rules such as:

* Department-specific approvals
* Amount-based approval routing
* Vendor-based escalation

### Customize Notification Templates

Edit message templates inside:

* Gmail nodes
* Slack node

You can include additional PR fields or approval details.

### Extend Google Sheets Schema

Add more tracking columns in:

* `Store Procurement Record`

Examples:

* Vendor Name
* Cost Center
* Priority Level
* Procurement Owner


## Add-ons

You can further enhance this workflow with:

* ERP integration (SAP, Oracle, NetSuite, Dynamics)
* Approval workflows using Microsoft Teams or Slack actions
* Database storage using PostgreSQL or MySQL
* Vendor risk scoring
* OCR extraction from invoices or attachments
* Multi-level procurement approvals
* AI-powered fraud detection
* Procurement analytics dashboards
* Automated PO generation
* Integration with ticketing systems like Jira or ServiceNow


## Use Case Examples

### 1. IT Procurement Automation

Automatically classify laptop, monitor, and hardware requests into the IT Equipment category.

### 2. Office Supply Management

Categorize recurring office supply purchases without manual procurement review.

### 3. Procurement Compliance Monitoring

Detect potential category mismatches and route suspicious PRs for manual review.

### 4. Enterprise Procurement Audit Tracking

Store all procurement decisions, confidence scores, and AI reasoning for compliance and auditing purposes.

### 5. High-Volume PR Processing

Reduce procurement processing time by auto-approving high-confidence purchase requests.

Additional use cases can be built depending on your procurement policies, ERP ecosystem, and approval structure.


## Troubleshooting Guide

| Issue                                 | Possible Cause                               | Solution                                                              |
| ------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------- |
| Webhook not receiving requests        | Incorrect webhook URL                        | Verify webhook endpoint configuration                                 |
| AI categorization fails               | Google Gemini credentials missing or invalid | Reconnect Google Gemini credentials                                   |
| PR rejected during validation         | Required fields missing                      | Ensure `pr_id`, `requester`, `description`, and `amount` are included |
| Gmail notifications not sent          | Gmail OAuth2 not configured                  | Reconnect Gmail credentials                                           |
| Slack alerts not delivered            | Invalid Slack channel ID                     | Update the Slack channel configuration                                |
| Google Sheets insertion fails         | Incorrect spreadsheet or permissions         | Verify spreadsheet ID and sharing permissions                         |
| AI response parsing error             | Invalid JSON returned by AI                  | Review AI prompt formatting                                           |
| Requests always routed for review     | Confidence thresholds too strict             | Adjust confidence scoring logic                                       |
| Duplicate PR records                  | Same PR submitted multiple times             | Add duplicate detection logic                                         |
| Workflow execution stops unexpectedly | Node configuration issue                     | Check execution logs in n8n                                           |


## Need Help?

If you need assistance with:

* Setting up this workflow
* Customizing procurement logic
* ERP integrations
* Multi-level approval systems
* Advanced AI procurement automation
* Dashboard creation and analytics
* Workflow scaling and optimization

the [n8n workflow development team](https://www.weblineindia.com/hire-n8n-developers/) at WeblineIndia can help you build, customize and deploy enterprise-grade n8n automation workflows tailored to your business requirements.

You can also extend this workflow with additional integrations, approval chains, procurement intelligence and enterprise compliance features based on your operational needs.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
