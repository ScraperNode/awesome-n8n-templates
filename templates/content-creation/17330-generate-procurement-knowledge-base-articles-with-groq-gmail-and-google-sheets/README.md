# 🎬 Generate procurement knowledge base articles with Groq, Gmail, and Google Sheets

> ⚡ **57 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This scheduled workflow pulls recent resolved procurement tickets and chat queries, clusters similar issues, and uses Groq LLMs to analyze patterns and draft Markdown knowledge base articles, then emails an approval request via Gmail and logs approved articles to Google Sheets.

## How it works
1. Runs daily on a schedule and fetches the last 7 days of resolved procurement tickets and procurement-related chat queries via HTTP requests.
2. Normalizes both sources into a common issue format, clusters similar issues into procurement topics, and creates a short text summary for each cluster.
3. Uses Groq (Llama 3.3 70B) to generate a structured JSON analysis per cluster (problem, root cause, resolution, and title) and emails an alert via Gmail if the analysis output is empty.
4. Uses Groq to generate a full Markdown knowledge base article from the analysis and emails an alert via Gmail if the draft output is empty.
5. Detects the target audience (Employees, Suppliers, or Procurement Specialists) with Groq and rewrites the article to match the audience tone while preserving facts.
6. Emails an approval request via Gmail (send-and-wait), and if rejected routes the draft back for revision.
7. When approved, sends a publication notification via Gmail and appends the article content and basic metrics fields to a Google Sheets knowledge base log.

## Setup
1. Add a Groq credential and ensure the Groq chat model (llama-3.3-70b-versatile) is available for the analysis, drafting, audience detection, and tone rewrite steps.
2. Connect a Gmail OAuth2 account and set the approval recipient(s) and notification recipients in the Gmail send-and-wait and notification email steps.
3. Connect Google Sheets credentials and update the target spreadsheet document ID and sheet/tab used to append published articles.
4. Replace the sample JSONPlaceholder HTTP endpoints with your ticketing system and chatbot query APIs, including any required authentication and query parameters.
5. Review the scheduled trigger time (currently 09:00) and adjust it to match your desired daily publishing cadence.

## Additional info
## How To Customize Nodes

### Cluster Similar Procurement Issues

Current categories:

* Supplier Management
* Invoice Processing
* Contract Management
* Purchasing
* General Procurement

You can expand the JavaScript logic to support:

* Vendor Onboarding
* Risk Management
* Compliance
* Sourcing
* Procurement Analytics
* Spend Management

### Analyze Procurement Issue Patterns

Modify the AI prompt to include:

* Regulatory compliance requirements
* Internal procurement policies
* Organization-specific terminology

### Generate KB Article

Current sections generated:

* Overview
* Problem Description
* Root Cause
* Step-by-Step Resolution
* FAQ
* Escalation Process
* Related Procurement Policies

You can add:

* Process Diagrams
* SLA References
* Escalation Contacts
* Training Resources

### Audience Detection

Current audiences:

```text
Employees
Suppliers
Procurement Specialists
```

Additional audiences may include:

* Finance Teams
* Legal Teams
* Vendor Administrators
* Contract Managers

### Approval Process

Replace Gmail approval with:

* Microsoft Outlook
* Microsoft Teams
* Slack
* Jira Approval Workflow
* ServiceNow Approval Workflow

### Knowledge Base Storage

Instead of Google Sheets, you can store approved articles in:

* Confluence
* Notion
* SharePoint
* Google Docs
* Internal Knowledge Portals
* Enterprise CMS Platforms


## Add-Ons

You can enhance this workflow with additional capabilities:

### Knowledge Base Publishing

Automatically publish approved articles to:

* Confluence
* Notion
* SharePoint
* Internal Portals

### Analytics Dashboard

Track:

* Most viewed articles
* Helpful votes
* Approval rates
* Top recurring procurement issues

### Multi-Language Knowledge Base

Generate articles in:

* English
* Spanish
* French
* German
* Hindi

### Semantic Search

Create vector embeddings and support AI-powered knowledge searches.

### Duplicate Article Detection

Prevent publishing articles that already exist within the knowledge base.

### Article Refresh Automation

Automatically re-evaluate and update aging articles after a predefined period.


## Use Case Examples

### 1. Supplier Onboarding Questions

Recurring supplier onboarding tickets are analyzed and converted into self-service documentation.

### 2. Invoice Processing Issues

Common invoice delays and payment-related concerns are documented with resolution procedures.

### 3. Contract Management Support

Frequently reported contract lifecycle issues are transformed into reusable knowledge articles.

### 4. Purchase Request Guidance

Repeated purchasing and requisition questions become searchable internal documentation.

### 5. Procurement Policy Clarifications

Questions related to procurement compliance and policy interpretation are converted into formal knowledge articles.

### Additional Possibilities

This workflow can also support:

* Vendor Risk Management
* Spend Management
* Procurement Compliance
* Category Management
* Strategic Sourcing
* Procurement Transformation Programs
* Shared Service Centers

and many other procurement-related knowledge management scenarios.


## Troubleshooting Guide

| Issue                                | Possible Cause                                       | Solution                                               |
| ------------------------------------ | ---------------------------------------------------- | ------------------------------------------------------ |
| No tickets are retrieved             | Incorrect API URL or authentication                  | Verify endpoint URL, credentials, and API permissions  |
| Chat queries not appearing           | Chat API returning unexpected data                   | Validate API response structure and mapping            |
| Clustering produces poor results     | Keyword rules do not match your business terminology | Expand clustering logic and add additional categories  |
| AI analysis fails                    | Invalid Groq credentials or API issue                | Verify Groq API key and model access                   |
| Empty issue analysis output          | AI model returned blank response                     | Check prompts, Groq quota, and API availability        |
| KB article generation fails          | Model response failure                               | Review AI node execution logs                          |
| Audience detection incorrect         | Article content lacks sufficient context             | Adjust audience detection prompt                       |
| Approval email not received          | Gmail OAuth issue or recipient error                 | Reconnect Gmail credentials and verify recipient email |
| Approval process stalls              | Reviewer did not respond                             | Follow up manually or implement reminders              |
| Articles not stored in Google Sheets | Incorrect Sheet configuration                        | Verify spreadsheet ID, sheet name, and column mapping  |
| Duplicate articles generated         | Similar issues appear in multiple clusters           | Add duplicate detection logic before publishing        |
| Revision loop repeats continuously   | Reviewer continuously rejects content                | Improve prompts and approval criteria                  |


## Need Help?

The workflow is intentionally designed to be modular so it can be adapted to different procurement environments, ticketing platforms and knowledge management systems.

Common customization requests include:

* ServiceNow integration
* Jira Service Management integration
* Zendesk integration
* SAP Ariba integration
* Oracle Procurement integration
* Confluence publishing
* Notion publishing
* SharePoint publishing
* Slack approvals
* Microsoft Teams approvals
* Multi-language article generation
* Advanced AI categorization
* Analytics dashboards
* Semantic knowledge search

If you need help implementing this workflow, integrating it with your existing systems or building a fully customized procurement automation solution, contact our [n8n workflow automation developers](https://www.weblineglobal.com/hire/n8n-developers/) for professional assistance. Our team at WeblineIndia can help configure, extend and deploy enterprise-grade n8n workflows tailored to your business requirements.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
