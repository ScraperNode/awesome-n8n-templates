# 📋 Sync Monday.com items to Jira with smart duplicate detection & feedback loop

> ⚡ **123 views** · 📋 [Project Management](../)

## Description

## Description:
Bridge the gap between Monday.com and Jira with this intelligent n8n automation template.

The workflow listens for new or updated Monday.com items, normalizes data fields, and syncs them with your Jira backlog—automatically detecting duplicates using fuzzy matching logic. It then creates or updates Jira issues accordingly and logs the results back into Monday.com, ensuring your product and engineering teams stay aligned in real time.
Ideal for project managers, product ops, and agile teams who manage intake in Monday.com but execute tasks in Jira.

## ✅ What This Template Does (Step-by-Step)
- 🌐 Webhook Trigger from Monday.com: Starts automatically whenever a new task or update occurs in Monday.com.
- 🔄 Normalize Monday.com Data: Extracts and cleans key data fields such as summary, component, severity, and description for consistent formatting before sending to Jira.
- 📊 Query Jira Backlog: Fetches all existing issues from Jira to establish a baseline for duplicate detection.
- 🔍 Detect Duplicates with Fuzzy Matching: Compares Monday item titles with Jira summaries using character-level similarity (&gt;80% threshold) to detect potential duplicates even with minor variations.
- ⚖️ Decision Gate: Duplicate or New: If duplicate found: updates the existing Jira issue with new data.
- If no match: creates a new Jira task in the appropriate project and issue type.
- 🔧 Update Existing Jira Issues: Automatically enhances Jira tickets with latest information from Monday.com including updated priority, description, and reference links.
- ✨ Create New Jira Issues: For new requests, generates a Jira task with details mapped from Monday—complete with severity, component, and description.
- 📝 Log Actions Back to Monday.com: Posts an update back to the originating Monday item confirming whether the action created or updated a Jira issue, including timestamp and Jira key link.
- 📋 (Optional) Create New Monday Board: Can also auto-create a private board in Monday.com for project-specific task organization.

## 🧠 Key Features
 🔍 Smart fuzzy duplicate detection (&gt;80% match threshold)

⚙️ Full bidirectional visibility between Monday.com and Jira
 📢 Automatic task creation and update logic

🧾 Real-time status logging and audit trail in Monday.com
 🔐 Secure API-based connections for both platforms

## 💼 Use Cases
 💡 Sync product feedback and feature requests from Monday to Jira
 🎯 Centralize intake forms and align engineering backlogs
 🤝 Eliminate duplicate Jira issues from multiple product submissions
 📈 Maintain transparent traceability across tools

## 📦 Required Integrations
- Monday.com API – for item intake and updates
- Jira Software Cloud API – for issue creation and modification

## 🎯 Why Use This Template?
 ✅ Eliminates duplicate Jira issues automatically

✅ Keeps Monday.Com and Jira perfectly aligned
 ✅ Saves hours of manual task reconciliation
 ✅ Ideal for agile and cross-functional collaboration

## 🔗 Nodes Used

Function, Webhook, Jira Software, Monday.com

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
