# 🔬 Automated content migration from ClickUp Docs to Airtable records

> ⚡ **114 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow automatically turns ClickUp Docs content into structured Airtable records. When a new ClickUp task is created with Doc link in its name, the workflow fetches the full document content, parses it into individual items, and creates corresponding record for each one in your specified Airtable base and table.

## How it works
1. Trigger: The workflow starts when a new task is created in a specific ClickUp Team.
2. Fetch & Parse URL: It gets the new task’s details and extracts the ClickUp Doc URL from the task name.
3. Get Doc Content: It uses the URL to fetch the main Doc and all its sub-pages from the ClickUp API.
4. Process Content: A Code node parses the text from each page. It’s designed to split content by * * * and separate notes by looking for the “notes:” keyword.
5. Find Airtable Destination: The workflow finds the correct Airtable Base and Table IDs by matching the names you provide.
6. Create Records: It loops through each parsed content piece and creates a new record in your specified Airtable table.

## Setup
1. Configure the Set Node: Open the “Configure Variables” node and set the following values:
2. clickupTeamId: Your ClickUp Team ID. Find it in your ClickUp URL (e.g., app.clickup.com/9014329600/...).
3. airtableBaseName: The exact name of your target Airtable Base.
4. airtableTableName: The exact name of your target Airtable Table.
5. airtableVerticalsTableName: The name of the table in your base that holds “Vertical” records, which are linked in the main table.
6. Set Up Credentials: Add your ClickUp (OAuth2) and Airtable (Personal Access Token) credentials to the respective nodes.
7. Airtable Fields: Ensure your Airtable table has fields corresponding to the ones in the Create New Record in Airtable node (e.g., Text, Status, Vertical, Notes). You can customize the mapping in this node.
8. Activate Workflow: Save and activate the workflow.
9. Test: Create a new task in your designated ClickUp team. In the task name, include the full URL of the ClickUp Doc you want to process.

## Customization
- Parsing Logic: You can change how the content is parsed by modifying the JavaScript in the Parse Content from Doc Pages Code node. For example, you could change the delimiter from * * * to something else.
- Field Mapping: Adjust the Create New Record in Airtable node to map data to different fields or add more fields from the source data.
- Trigger Events: Modify the Trigger on New ClickUp Task node to respond to different events, such as taskUpdated or taskCommentPosted.

## Additional info
Published by Fahmi Fahreza, Indonesia’s first official n8n Brand Ambassador and founder of WithMi Automation, built from real client implementations, not tutorials.
→ Let us build it for you: withmiautomation.com
→ Learn to build it yourself: academy.withmiautomation.com
→ Bring Fahmi to your team (training, workshop, talkshow): fahmiiireza.com

## 🔗 Nodes Used

Airtable, HTTP Request, ClickUp, ClickUp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
