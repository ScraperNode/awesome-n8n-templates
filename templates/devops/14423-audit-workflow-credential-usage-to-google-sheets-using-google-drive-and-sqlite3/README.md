# ⚙️ Audit workflow credential usage to Google Sheets using Google Drive and SQLite3

> ⚡ **15 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# Workflow Introduction 

This workflow is specifically for Self-Hosted N8N Docker users.

The purpose of this workflow is to: 
1. Take an inventory of all workflows with credentials (Workflow -&gt; Credential 1, Credential 2, etc.), connecting credential names to workflow names
2. Create a credentials impact map (Credential -&gt; Workflow 1, Workflow 2, etc.), connecting workflow names to credential IDs and names


This workflow drastically minimizes the amount of time spent trying to figure out which workflows will break if a credential is updated or deleted by bridging the gap between the public API (workflow metadata) and the internal sqlite database (hidden version labels and credential mappings).

In essence this tool audits your n8n environment without touching your sensitive encrypted data, keeping you API Keys 100% secure.

It features dynamic time saving trackers, set for what I estimate to be the amount of time it would take to manually complete every individual thing this workflow does in less than 5 minutes.

# Limitations
This workflow is optimized for the **Standard N8N Execution Mode**. Due to the high-frequency data lookups required for this tool, it is **not compatible with Task Runners (N8N_RUNNERS_ENABLED=true)**. For maximum stability and to prevent "Database Locked" errors, please ensure your instance is running in the default configuration.

If you use Method 1 (Direct Insertion) in the API Key Instructions below your N8N API key will not appear as connected to this workflow in the resulting Credential Impact Map. Same goes for all other credentials directly inserted into a HTTP Request node across your N8N environment.

# Setting it up - Requirements
## Environment Variables Required:
**These enviornment variables are required in order for the version_labels and flow_names code nodes to work.**
NODE_FUNCTION_ALLOW_BUILTIN=*
NODE_FUNCTION_ALLOW_EXTERNAL=sqlite3
	- **Note:** If you need access to multiple external functions across your n8n instance, add them as a string like this: NODE_FUNCTION_ALLOW_EXTERNAL=sqlite3, better-sqlite3

## Credentials Needed:
n8n account &gt; n8n self-hosted API key 
Google Sheets account
Google Drive account

The nodes that need manually inputted credentials or node parameter information are: Create folder, flowsList, credsList, and finalFlowEdits

**Note:** If you create your credentials before openning any process nodes, your credentials will be auto connected to the associated nodes. However, this will not happen for the n8n self-hosted API keys. If you have multiple Google Sheets or Google Drive accounts you will need to point the associated nodes to the specific one you want to use. 

## API Key Instructions
How to get: Settings -&gt; API -&gt; Create API Key -&gt; Name it -&gt; Copy it 
_**Copy the API key and save it somewhere secure. You won't be able to see it again!!**_

How to use (Two Methods): **Note: The node is set up for Method 1 by default**
**Method 1 (Direct Insertion).** In the flowsList and credsList nodes:  
  - Authentication: None  
  - Send Headers: on  
  - Name: X-N8N-API-KEY  
  - Value: &lt;YOUR N8N API KEY&gt;  

**Method 2 (N8N Credential).** In the flowsList and credsList nodes: 
  - Authentication: Generic Credential Type  
  - Generic Auth Type: Header Auth 
  - Header Auth: Select "Create new credential" (**If you already have a Header Auth for your N8N API key select it here**) 
  2a. In the credential creation area:
    - Name: X-N8N-API-KEY  
    - Value: &lt;YOUR N8N API KEY&gt; 

Queries and Body aren't needed.

Endpoints:
flowsList: http://localhost:5678/api/v1/workflows or https://&lt;your webhook domain&gt;/api/v1/workflows
credsList: http://localhost:5678/api/v1/credentials or https://&lt;your webhook domain&gt;/api/v1/credentials


# The Workflow Processes
## Global Actions
1. Executes on on a set schedule (weekly on Fridays at 2pm)
1a. A deactivated execute on command node is included for testing, or for when updated files are needed before the scheduled date/time 
2. Creates a Drive folder to house the resulting spreadsheets using the current date and time as the name
2a. This workflow creates the folders inside a specified parent folder.
2b. This node also sets the folder color 
	- You are welcome to change this to your preferred color. 


## Branch 1: Workflow Credentials Inventory Process
1. Creates a google spreadsheet with the current date in the name
2. Gets the list of all workflows from the public API
3. Splits the list into individual items for easier processing
4. Gets the version labels for active workflows from the internal sqlite database
5. Sets fields for the workflow's name, id, published status, latest published version label, current version's id (whether the workflow is published or not) 
6. Filters out the workflows that don't have any nodes with credentials
7. Splits out the list of nodes for easier processing
8. Filters out the nodes that don't have associated credentials
9. Sets fields for the node names, and credential names
10. Summarize the output from the Nodes editor, based on workflows
10a. Append nodeNames
10b. Append credetntials
10c. Count the nodes
11. Clean up the summarized information, converting it back to recognizible clean json format
12. Set fields for spreadsheet aethestics
	- This step can be skipped, however, I didn't like the visual look of the direct from CleanJson to credInventory
13. Appends header row and data rows to the spreadsheet created in Step 1.
14. Move the file into the folder created at the start of the workflow from whereever google put it by default
15. Track the estimated time it would have taken to manually do every step, in a time saved node


## Branch 2: Credential Impact Map Process
1. Creates a spreadsheet with the current date in the name
2. Gets a list of all credentials from the public API
3. Splits the list into individual items for easier processing
4. Sorts the credentials by name in ascending order (A-&gt;Z) in case they come from the split out of order
5. Gets a list of all workflows with nodes associated with each credential ID from the internal sqlite database
6. Set fields for the credential name, id, type, created and updated timestamps, and list of workflow names
7. Appends the header row and data rows to the spreadsheet created in Step 1 of this branch
8. Move the file into the folder created at the start of the workflow from whereever google put it by default
9. Track the estimated time it would have taken to manually do every step, in a time saved node

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger, Summarize, Track Time Saved

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
