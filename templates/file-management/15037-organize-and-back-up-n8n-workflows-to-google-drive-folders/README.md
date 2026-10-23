# 📁 Organize and back up n8n workflows to Google Drive folders

> ⚡ **132 views** · 📁 [File Management](../)

## Description

## WORKFLOW INTRODUCTION
This automation organizes your n8n workflows files into categorizes (Active, Template, Done, Archived) and uploads them directly to a categorized Google Drive folders. It is designed to help users manage large instances by creating organized, human-readable backups.

## HOW IT WORKS
* **API Connection:** Connects to your n8n instance using the internal API.
* **Categorization:** Groups workflows by status and tags.
* **WIP Logic:** Any workflow without a specific status or tag is automatically routed to a work-in-progress folder.
* **Cloud & Self-Hosted Ready:** Works for both n8n Cloud and self-hosted instances.

## WORKFLOW PROCESS OVERVIEW
Fetch -&gt; Filter -&gt; Convert -&gt; Start Loop -&gt; Create Category Folder -&gt; Upload -&gt; Wait 5 seconds -&gt; Return to loop for next upload batch
See below for a full breakdown.


------------------------------

## USAGE GUIDE & SETUP
1. This workflow is dependent on the n8n internal statuses of Active and Archived, and the custom tags "Template" and "Done". 
2. Anything that is not Active, Archived, or labeled Template or Done, is considered a work-in-progress by default.
3. To make this workflow work for you please tag your templates as Template, and your completed projects as Done.
3a. Finished templates should not be labelled done, as per best practice they have placeholder text and no real data is processed by them

## PRE-REQS
A pre-designated Google Drive parent folder (and its ID) for housing the folders and files created by this workflow

## REQUIRED CREDENTIALS
1. Google Drive account
2. N8N account &gt; N8N API Key

## THE CONFIGURATION NODE
1. Input the ID of your pre-designated Google Drive parent folder
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
_**Note:** Queries, Headers, and Body are not needed for this method._

------------------------------

## WORKFLOW PROCESS BREAKDOWN (after configuration)
1. Creates a Google Drive folder to house the resulting files
2. Grabs your workflows from the public API
3. Splits out the workflows into individual items for easier processing
4. Filters out the Active workflows (True: a-f; False: Go to 5)
4a. Sorts the active workflows by name
4b. Converts the active workflows into individual JSON files
4c. Loops through the JSON files, uploading them in batches of 5
4d, Creates the active-backups folder once
4e. Uploads the JSON files to the folder created in Step 4d.
4f. Wait 5 seconds to avoid errors caused by the Google spam upload detector
5. Filters out the Not Archived workflows (True: Go to 6; False: a-f)
5a. Sorts the archived workflows by name
5b. Converts the archived workflows into individual JSON files
5c. Loop through the JSON files, uploading them in batches of 5
5d, Create the archived-backups folder once
5e. Uploads the JSON files to the folder created in Step 5d.
5f. Wait 5 seconds to avoid errors caused by the Google spam upload detector
6. Filters out the workflows tagged "Template" (True: a-f; False: Go to 7)
6a. Sorts the template workflows by name
6b. Converts the template workflows into individual JSON files
6c. Loop through the JSON files, uploading them in batches of 5
6d, Create the template-backups folder once
6e. Uploads the JSON files to the folder created in Step 6d.
6f. Wait 5 seconds to avoid errors caused by the Google spam upload detector
7. Filters out the workflows tagged "Done" (True: a-f; False: g-l)
7a. Sorts the done workflows by name
7b. Converts the done workflows into individual JSON files
7c. Loops through the JSON files, uploading them in batches of 5
7d, Creates the done-backups folder once
7e. Uploads the JSON files to the folder created in Step 7d.
7f. Wait 5 seconds to avoid errors caused by the Google spam upload detector
7g. Sorts the work-in-progress workflows by name
7h. Converts the work-in-progress workflows into individual JSON files
7i. Loops through the JSON files, uploading them in batches of 5
7j. Creates the wip-backups folder once
7k. Uploads the JSON files to the folder created in Step 7j.
7l. Wait 5 seconds to avoid errors caused by the Google spam upload detector

------------------------------

## LIMITATIONS

1. N8N Cloud users on a trial account cannot generate or use the N8N API key.

2. If you use Method 1 (Direct Insertion) in the API Key Instructions your API Key will not be listed as connected to this workflow if you use my [Workflow Credentials Auditor](https://n8n.io/workflows/14423). Same goes for all other credentials directly inserted into a HTTP Request node.

------------------------------

## ALTERNATIVE VERSIONS AND CUSTOM BUILDS
While this version focuses on global status tagging using **Google Drive**, I have developed a parallel version for **Github Repository** storage.
 
* **Need the Github Version?** I provide the standard Workflow Organizer Github version free upon request.
  ![Caption: Preview the Github storage version.](https://github.com/zianamitchell/n8n-workflow-images/blob/main/n8n-workflow-organizer-github.png?raw=1)
* **Want to consolidate workflows before backing them up?** I offer the standard **Workflow Organizer Consolidated** free upon request for both Google Drive and GitHub.
  - **Note:** The Google Driver version is meant to be used in tandem with this **Workflow Organizer Google Drive**. They should be linked to the same parent folder.
* **Need a Custom build?** If you require advanced logic (e.g. client-specific routing, multi-tier tagging, unique project tagging, integration with other platforms), I offer custom automation services tailored to your business needs.

A custom version of this workflow or the Github version is $15. 
Contact me here: workflows@zmglobalit.com

## 🔗 Nodes Used

HTTP Request, Google Drive, Schedule Trigger, Convert to File, Track Time Saved

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
