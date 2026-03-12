# 📁 Automatically optimise images added to a Google drive folder

> ⚡ **2,069 views** · 📁 [File Management](../)

## Description

**How it works**
- This workflow watches a selected Google Drive folder for any images added to it.
- It then takes that image, sends it the the tinypng.com service which optimises and reduces its size (where possible)
- Tinypng then returns the updated image which is then automatically saved in your chose Google Drive folder

**Setting things up**
- It's pretty simple to configure and should only take around 5-10mins. 
- You only need to set up credentials for Google Drive and Tinypng.com
- For Tinypng.com you can sign up for their free tier API access which gives you 500 optimisations per month
- Once you have those two things, you just need choose your 'input' folder to watch for images and your 'output' folder for where these images should be stored
- There are a few more optional things you can do such as the naming of your final image and also lots more you could do with the Tinypng API for more advanced image optimisation

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
