# 👥 Orchestrate M365 employee onboarding with SharePoint, OneDrive, Teams, Outlook and Claude

> ⚡ **421 views** · 👥 [HR & Recruitment](../)

## Description

**Stop managing onboarding as a checklist. Let automation handle the infrastructure so you can focus on the people.**

Manually provisioning a new hire's digital workspace is a recipe for human error and "Day 1" friction. This workflow orchestrates the entire Microsoft 365 onboarding stack in a single, parallel execution. It doesn't just run tasks; it verifies them, handles API failures gracefully, and reports a live status dashboard directly back to HR.

### How it works
The workflow operates in four synchronized stages:

1.  **Ingestion & Smart Parsing:** The workflow triggers via **Microsoft Agent 365** (Teams @mentions or Outlook emails). A JavaScript engine parses the unstructured HR request using flexible regex to extract the employee's name, role, department, and start date.
2.  **True Parallel Execution:** Once parsed, the data fans out into four independent branches:
    * **SharePoint:** Creates a structured entry in the HR Onboarding master list.
    * **OneDrive:** Provisions a personal root folder and automatically generates 5 templated sub-folders (Contracts, Equipment, Training, etc.).
    * **Teams:** Creates a private onboarding channel for the employee's cohort.
    * **AI Communications:** Leverages **Claude 3.5 Sonnet** to draft a warm, personalized welcome email based on the specific role and department, then sends it via **Outlook**.
3.  **Fault-Tolerant Merging:** The workflow uses a multi-stage **Merge Cascade**. Every node is configured with `Continue on Fail` logic. This means if one branch hits an API limit or error, it passes an error object forward rather than crashing the entire process.
4.  **Verified Status Delivery:** The final stage gathers all outputs, validates whether each task actually returned a success ID/URL, and generates a **Microsoft Teams Adaptive Card**. HR receives a clean summary with live links to provisioned assets and clear ❌ markers for any step that requires manual intervention.

### Key Benefits
* **Zero-Hang Resilience:** Built with "Continue on Fail" logic. If SharePoint is down, the employee still gets their welcome email and OneDrive folder. 
* **Live Asset Verification:** The final report doesn't just "hope" things worked; it checks for live IDs and URLs from the Microsoft Graph API before showing a green checkmark.
* **Parallel Performance:** Provisioning happens concurrently. The total wait time is only as long as the slowest single task (usually the AI generation).
* **Global Error Handling:** Includes a dedicated **Error Trigger** flow that catches catastrophic system crashes and alerts IT with a full stack trace and the name of the failed node.

### Setup
1.  **Credentials:** Add credentials for Microsoft SharePoint, OneDrive, Teams, Outlook, and Anthropic (Claude).
2.  **Environment Config:** Open the `Parse New Hire + Config` node and replace the placeholder IDs with your specific SharePoint Site ID, List ID, and Teams Team ID.
3.  **Entra ID Permissions:** Ensure your registered Azure App has the necessary Graph API permissions (`Sites.ReadWrite.All`, `Files.ReadWrite.All`, `Channel.Create`, `Mail.Send`).
4.  **Activate:** Turn the workflow on and trigger it by @mentioning your Agent in Teams with new hire details.

### Who this is for
* **IT Operations Teams** looking to standardize M365 provisioning without expensive third-party SaaS.
* **HR Departments** that want immediate, transparent feedback on onboarding progress.
* **Managed Service Providers (MSPs)** providing automated "Hiring-as-a-Service" for their clients.

### Required APIs & Credentials
* **Microsoft 365 Stack:** SharePoint, OneDrive, Teams, Outlook.
* **AI Provider:** Anthropic (Claude 3.5 Sonnet) or OpenAI (GPT-4o).

### How to customise it
* **Add More Branches:** Easily add nodes for Jira, Slack, or HRIS updates by fanning out from the Parser and adding them to the Merge Cascade.
* **Adjust Folder Templates:** Modify the `Build SubFolder Paths` code node to match your company's specific folder structure.
* **Modify AI Tone:** Change the `System Message` in the AI node to match your company's unique brand voice.
* **Custom Triggers:** Swap the Agent 365 trigger for a Webhook (to connect to Workday/HiBob) or a Typeform trigger.

## 🔗 Nodes Used

Microsoft OneDrive, Microsoft Teams, Microsoft Outlook, AI Agent, Anthropic Chat Model, Microsoft SharePoint

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
