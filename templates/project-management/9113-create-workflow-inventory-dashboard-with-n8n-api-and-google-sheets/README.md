# 📋 Create workflow inventory dashboard with n8n API and Google Sheets

> ⚡ **937 views** · 📋 [Project Management](../)

## Description

This workflow provides a powerful way to automatically document and maintain an inventory of all your n8n workflows in a Google Sheet. By running on a schedule or manually, it fetches details about every workflow on your instance, processes the key information, and then populates a spreadsheet. This creates a centralized, up-to-date dashboard for auditing, monitoring, and understanding your automation landscape.

## Who is this for?

This workflow is ideal for n8n administrators, developers, and teams who manage multiple workflows. If you need a clear and simple way to track all your automations, their components, and their statuses without manually checking each one, this template is for you. It's particularly useful for maintaining technical documentation, auditing node usage across your instance, and quickly finding specific workflows.

## What problem is this workflow solving?

As the number of workflows on an n8n instance grows, it becomes challenging to keep track of them all. Questions like "Which workflows use the HubSpot node?", "Which workflows are inactive?", or "When was this workflow last updated?" become difficult to answer. This workflow solves that problem by creating a single source of truth in a Google Sheet. It automates the process of cataloging your workflows, saving you time and ensuring your documentation is always current.

## What this workflow does

1.  **Triggers Execution**: The workflow can be initiated either on a set schedule (via the **Scheduled Start** node) or manually (via the **Manual Start** node).
2.  **Fetches All Workflows**: The **`Get All Workflows`** node connects to your n8n instance via the API to retrieve a complete list of your workflows and their associated data.
3.  **Processes Workflows Individually**: The **`Loop Through Each Workflow`** node iterates through each retrieved workflow one by one so they can be processed individually.
4.  **Extracts Key Information**: The **`Extract Workflow Details`** node uses custom code to process the data for each workflow, extracting essential details like its name, ID, tags, and a unique list of all node types it contains.
5.  **Updates Google Sheet**: The **`Add/Update Row in Google Sheet`** node then takes this information and appends or updates a row in your designated spreadsheet, using the workflow ID as a unique key to prevent duplicates.
6.  **Waits and Repeats**: The **`Pause to Avoid Rate Limits`** node adds a short delay to prevent issues with API limits before the loop continues to the next workflow.

## Setup

1.  **Configure `Get All Workflows` Node**:
    * Select the `Get All Workflows` node.
    * In the 'Credentials' section, provide your n8n API credentials to allow the workflow to access your instance's data.

2.  **Prepare Your Google Sheet**:
    * Create a new Google Sheet.
    * Set up the following headers in the first row: `id`, `title`, `link`, `tags`, `nodes`, `CreatedAt`, `UpdatedAt`, `Active`, `Archived`.

3.  **Configure `Add/Update Row in Google Sheet` Node**:
    * Select the `Add/Update Row in Google Sheet` node.
    * Authenticate your Google account in the 'Credentials' section.
    * In the 'Document ID' field, enter the ID of your Google Sheet. You can find this in the sheet's URL (e.g., `.../spreadsheets/d/THIS_IS_THE_ID/edit`).
    * Select your sheet from the 'Sheet Name' dropdown.
    * Under 'Columns', ensure the `id` field is set as the 'Matching Columns' value. This is crucial for updating existing rows correctly.

4.  **Activate the Workflow**:
    * Choose your preferred trigger. You can enable the `Schedule Trigger` to run the sync automatically at regular intervals.
    * Save and activate the workflow.

## How to customize this workflow to your needs

* **Track Different Data**: You can modify the `Extract Workflow Details` node to extract other pieces of information from the workflow JSON. For example, you could parse the `settings` object or count the total number of nodes. Remember to add a corresponding column in your Google Sheet and map it in the `Google Sheets` node.
* **Add Notifications**: Add a notification node (like Slack, Discord, or Email) after the `Loop Through Each Workflow` node (in the second output) to be alerted when the sync is complete or if an error occurs.
* **Filter Workflows**: You can add an `IF` node after the `Loop Through Each Workflow` node to filter which workflows get added to the sheet. For instance, you could choose to only log active workflows (`{{ $('Loop Through Each Workflow').item.json.active }}` is true) or workflows containing a specific tag.
* **Adjust Wait Time**: The `Pause to Avoid Rate Limits` node is set to pause between each entry. You can adjust this time or remove it entirely if you have a small number of workflows and are not concerned about hitting API rate limits.

## 🔗 Nodes Used

Google Sheets, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
