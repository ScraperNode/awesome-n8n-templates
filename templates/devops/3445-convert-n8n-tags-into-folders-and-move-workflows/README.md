# ⚙️ Convert n8n tags into folders and move workflows

> ⚡ **734 views** · ⚙️ [DevOps & CI/CD](../)

## Description

N8n recently introduced folders and it has been a big improvement on workflow management on top of the tags.

This means the current workflows need to be moved manually to the folders. 

The simplest idea to try is to convert the current tags into folders and move all the current workflows within the respective tags into the folders

This assumes the tag name will be used as the folder name.

**To Note**

For workflows that use more than 1 tag, the workflow will be assigned the last tag that runs as the folder. 

**How does it work**
I took the liberty of simplifying the setup of this workflow that will be needed on your part and also be beginner-friendly 

1. Copy and paste this workflow into your n8n canvas. You must have existing workflows and tags before you can run this
2. Set your n8n login details on the node set Credentials with the n8n URL, username, and password.
3. Setup your n8n API credentials on the n8n node get workflows
4. Run the workflow. This opens up a form where you can select the number of tags to move and click on submit
5. The workflow responds with the successful number of workflows that were imported 


[Read more about the template](https://funautomations.io/workflows/how-to-convert-n8n-tags-into-folders/)

Built by [Zacharia Kimotho - Imperol](https://www.linkedin.com/in/zacharia-kimotho/)

## 🔗 Nodes Used

HTTP Request, n8n, Filter, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
