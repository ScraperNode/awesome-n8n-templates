# 📁 Move a Nextcloud folder file by file

> ⚡ **3,475 views** · 📁 [File Management](../)

## Description

## Description:
This template facilitates the transfer of a folder, along with all its files and subfolders, within a Nextcloud instance. The Nextcloud user must have access to both the source and destination folders. While Nextcloud allows folder movement, complications may arise when dealing with external storage that has rate limits. This workflow ensures the individual transfer of each file to avoid exceeding rate limits, particularly useful for setups involving external storage with rate limitations.

## How it works:

- Identify all files and subfolders within the specified source folder.
- Recursive search within subfolders for additional files.
- Replicate the folder structure in the target folder.
- Individually move each identified file to the corresponding location in the target folder.

## Set up steps:

- Set Nextcloud credentials for all Nextcloud nodes involved in the process.
-Edit the trigger settings. Detailed instructions can be found within the respective trigger configuration.
- Initiate the workflow to commence the folder transfer process.


## Help
If you need assistance with applying this template, feel free to reach out to me. You can find additional information about me and my services here. =&gt; https://nicokowalczyk.de/links

I have also produced a video where I explain the workflow and provide an example. You can find this video over here. https://youtu.be/K1kmG_Q_jRk

Cheers.
Nico Kowalczyk

## 🔗 Nodes Used

Nextcloud, Webhook, Stop and Error, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
