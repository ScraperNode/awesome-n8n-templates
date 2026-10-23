# 📁 Organize and back up n8n workflows to Google Drive as consolidated JSON

> ⚡ **101 views** · 📁 [File Management](../)

## Description

## WORKFLOW INTRODUCTION
This automation organizes and consolidates your n8n workflows into categorized JSON files (Active, Template, Done, Archived) and uploads them directly to a Google Drive folder. It is designed to help users manage large instances by creating organized, human-readable backups.

## HOW IT WORKS
* **API Connection:** Connects to your n8n instance using the internal API.
* **Categorization:** Groups workflows by status and tags.
* **WIP Logic:** Any workflow without a specific status or tag is automatically routed to a work-in-progress consolidation file.
* **Cloud & Self-Hosted Ready:** Works for both n8n Cloud and self-hosted instances.

## WORKFLOW PROCESS OVERVIEW
Fetch -&gt; Filter -&gt; Convert -&gt; Upload -&gt; Wait 5 seconds 
See below for a full breakdown.


------------------------------

## USAGE GUIDE & SETUP
1. This workflow is dependent on the n8n internal statuses of Active and Archived, and the tags "Template" and "Done". 
2. Anything that is not Active, Archived, or labeled Template or Done, is considered a work-in-progress by default.
3. To make this workflow work for you please tag your templates as Template, and your completed projects as Done.

## PRE-REQS
A pre-designated Google Drive folder (and its ID) for housing the folders and files created by this workflow

## REQUIRED CREDENTIALS
1. Google Drive account
2. N8N account &gt; N8N API Key

## THE CONFIGURATION NODE
1. Input the ID of your pre-designated Google Drive folder
2. Input the base URL of your N8N instance (e.g. https://subdomain.app.n8n.cloud, https://n8n.domain.com, http://localhost:5678)
2a. Do **NOT** include anything after the ".cloud", ".com", or the ":5678"

## API KEY INSTRUCTIONS
How to get: Settings -&gt; API -&gt; Create API Key -&gt; Name it -&gt; Copy it 
_**Note: Copy the API key and save it somewhere secure. You won't be able to see it again!!**_

How to use (Two Methods): **Note: The node is set up for Method 2 by default**
**Method 1 (Quick Start-Direct Insertion)**. In the Workflows node: 
  - Authentication: None 
  - Send Headers: on
  - Name: X-N8N-API-KEY
  - Value: [YOUR N8N API KEY]
-**Note:** Queries and Body are not needed for this method._


**Method 2 (Best Practice-N8N Credential)**. In the Workflows node:
  - Authentication: Generic Credential Type 
  - Generic Auth Type: Header Auth
  - Header Auth: Select "Create new credential" (**NOTE:** If you already have a Header Auth for your N8N API key select it here)
  2a. In the credential creation area: 
    - Name: X-N8N-API-KEY 
    - Value: [YOUR N8N API KEY]
_**Note:** Queries, Header, and Body are not needed for this method._

------------------------------

## WORKFLOW PROCESS BREAKDOWN (after configuration)
1. Creates a Google Drive folder to house the resulting files
2. Grabs your workflows from the public API
3. Splits out the workflows into individual items for easier processing
4. Filters out the Active workflows (True: a-d; False: Go to 5)
4a. Sorts the active workflows by name
4b. Converts the active workflows into a single JSON file
4c. Uploads the active JSON file to the folder created in Step 1.
4d. Wait 5 seconds to avoid errors caused by the Google spam upload detector
5. Filters out the Not Archived workflows (True: Go to 6; False: a-d)
5a. Sorts the archived workflows by name
5b. Converts the archived workflows into a single JSON file
5c. Uploads the archived JSON file to the folder created in Step 1.
5d. Wait 5 seconds to avoid errors caused by the Google spam upload detector
6. Filters out the workflows tagged "Template" (True: a-d; False: Go to 7)
6a. Sorts the template workflows by name
6b. Converts the template workflows into a single JSON file
6c. Uploads the template JSON file to the folder created in Step 1.
6d. Wait 5 seconds to avoid errors caused by the Google spam upload detector
7. Filters out the workflows tagged "Done" (True: a-d; False: e-g)
7a. Sorts the done workflows by name
7b. Converts the done workflows into a single JSON file
7c. Uploads the done JSON file to the folder created in Step 1.
7d. Wait 5 seconds to avoid errors caused by the Google spam upload detector
7e. Sorts the work-in-progress workflows by name
7f. Converts the work-in-progress workflows into a single JSON file
7g. Uploads the work0in-progress JSON file to the folder created in Step 1.
7h. Wait 5 seconds to avoid errors caused by the Google spam upload detector

------------------------------

## LIMITATIONS

1. N8N Cloud users on a trial account cannot generate or use the N8N API key.

2. If you use Method 1 (Direct Insertion) in the API Key Instructions your API Key will not be listed as connected to this workflow if you use my [Workflow Credentials Auditor](https://n8n.io/workflows/14423). Same goes for all other credentials directly inserted into a HTTP Request node.

------------------------------

## ALTERNATIVE VERSIONS AND CUSTOM BUILDS
While this version focuses on global status tagging using **Google Drive**, I have developed a parallel version for **Github Repository** storage.
 
* **Need the Github Version?** I provide the standard Workflow Organizer Consolidated Github version free upon request.
  ![Caption: Preview the Github storage version.](https://github.com/zianamitchell/n8n-workflow-images/blob/main/n8n-workflow-organizer-consolidated-github.png?raw=1)
* **Want to backup workflows without consolidating them?** I offer the standard **Workflow Organizer** free upon request for both Google Drive and GitHub.
  - **Note:** The Google Drive version is meant to work in tandem with this **Workflow Organizer Consolidated Google Drive**. They should be linked to the same parent folder.
* **Need a Custom build?** If you require advanced logic (e.g. client-specific routing, multi-tier tagging, unique project tagging, integration with other platforms), I offer custom automation services tailored to your business needs.

A custom version of this workflow or the Github version is $15. 
Contact me here: workflows@zmglobalit.com

## 🔗 Nodes Used

HTTP Request, Google Drive, Schedule Trigger, Convert to File, Track Time Saved

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
