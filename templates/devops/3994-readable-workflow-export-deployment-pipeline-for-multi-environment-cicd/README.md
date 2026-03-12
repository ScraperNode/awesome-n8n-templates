# ⚙️ Readable workflow export & deployment pipeline for multi-environment CI/CD

> ⚡ **1,048 views** · ⚙️ [DevOps & CI/CD](../)

## Description

**This n8n workflow template uses community nodes and is only compatible with the self-hosted version of n8n.** 

## Export workflows with readable names, tagged for different environments

To ensure understandable workflow exports, ease of use in delivery pipelines, and a better developer experience, this workflow helps with exporting workflows.

## Inner workings
- First, the workflow ensures that the directory structure for storing the workflows is correct.
- Exports all workflows.
- Next, it processes all workflow files and stores them with readable names.
- Based on tags, it will *also* export to `dev` and `prod` folders for easy commit and usage in a delivery pipeline.

## Configration
No special setup is required for readable exporting.

## Usage
Create a workflow and tag it with '*Auto deploy to dev*'
Run the workflow, this will create the needed folders and workflows with readable names.
Commit these in your version control.
Have a CICD pipeline build an n8n container
—see the attached Dockerfile. 

Check our **Auto Starter workflow** for auto-starting workflows after deployment.

## CI/CD Bonus:
Attached are two nodes with some example configuration on building your own automated n8n deployment. 
- A Dockerfile, to get the new entrypoint and exported workflows packaged in the container.
- An updated entrypoint to build your own container, import the workflows, and run the Auto Starter.

Set the following environment variables:

- `STARTUP_WORKFLOWS_LOAD_LOCATION`: to specify the folder to import from and distinguish between environments.
- `STARTUP_WORKFLOW_ID`: the ID of the workflow to run after starting n8n.  
  &gt; **Note:** The 'Instance Started' n8n trigger won't work, as all workflows are disabled upon import.

## 🔗 Nodes Used

Read/Write Files from Disk, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
