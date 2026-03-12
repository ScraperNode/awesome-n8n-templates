# ⚙️ Automated workflow test runner with Google Drive, Sheets & ClickUp result logging

> ⚡ **167 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Description
This workflow acts as a CI/CD-style test harness for validating other n8n workflows. It executes a target workflow (here: Archive Payment Receipts), evaluates pass/fail outcomes, and generates structured reports. Results are automatically archived to Google Drive, logged in Google Sheets, and synced with ClickUp for visibility. Both success and failure scenarios are handled with standardized formatting.

## What This Template Does (Step-by-Step)
1. ⚡ Manual Trigger – Start the test run manually.
2.  ▶️ Execute Target Workflow Under Test – Calls the specified workflow (Archive Payment Receipts) and captures its output, even if it errors.
3.  ✅ Test Result Evaluation (If Node) – Checks if the output contains errors.
- Pass Path → success formatting + archival.
- Fail Path → failure formatting + logging.
-  📄 Format Success Test Result (Set Node) – Creates a structured result object with:
- Status: ✅ Passed
- Workflow Name
- Timestamp
-  📄 Format Failed Test Result (Set Node) – Same as above, but with ❌ Failed status.
-  📝 Generate Success/Failure Report Text (Code Node) – Converts structured data into a human-readable report string.
-  📦 Convert Report to Text File – Transforms the text into a .txt file for archiving.
-  ☁️ Archive Reports to Google Drive – Saves .txt files (success/failure) into the resume store folder with timestamped filenames.
-  ✏️ Update ClickUp Task (Success/Failure) – Posts results directly into a ClickUp task for visibility.
-  📊 Log Error Details to Error Tracking Sheet (Google Sheets) – Appends raw error objects to an error log sheet for debugging and trend analysis.

## Prerequisites
- Target workflow to test (e.g., Archive Payment Receipts)
- Google Drive folder for report storage
- Google Sheets (Error Log tab)
- ClickUp API credentials
- n8n instance

## Key Benefits
 ✅ Automates workflow regression testing
 ✅ Captures pass/fail outcomes with full audit trail
 ✅ Maintains error logs for debugging and reliability improvements
 ✅ Keeps stakeholders updated via ClickUp integration
 ✅ Supports compliance with archived test reports

## Perfect For
- Teams running workflow QA & testing
- Organizations needing audit-ready test reports
- DevOps pipelines with continuous validation of automations
- Stakeholders requiring real-time visibility into workflow health

## 🔗 Nodes Used

Google Sheets, Google Drive, Execute Sub-workflow, ClickUp, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
