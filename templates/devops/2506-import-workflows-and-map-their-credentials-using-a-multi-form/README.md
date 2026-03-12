# ⚙️ Import workflows and map their credentials using a multi-form

> ⚡ **3,347 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Purpose

This workflow allows you to import any workflow from a file or another n8n instance and map the credentials easily.

![Image](https://i.imgur.com/35UFNRa.png)
![Image](https://i.imgur.com/MnWtCFJ.png)

## How it works

- A multi-form setup guides you through the entire process
- At the beginning you have two options:
    - Upload a workflow file (JSON)
    - Copy workflow from a remote n8n instance
- If you choose the second option, you get to choose one of your predefined (in the Settings node) remote instances first, then it retrieves a list of all the workflows using the n8n API which you then can choose a workflow from.
- Now both initial options come together - the workflow file is being processed
- In parallel all credentials of the current instance are being retrieved using the Execute Command node
- The next form page enables a mapping of all the credentials used in the workflow. The matching happens between the names (because one workflow can contain different credentials of the same type) of the original credentials and the ones available on the current instance. Every option then shows all available credentials of the same type. In addition the user has always the choice to create a new credential on the fly.
- For every option which was set to create a new credential, an empty credential is being created on the current instance using the n8n API. An emoji is being appended to the name, which indicates that it needs to be populated.
- Finally the workflow gets updated with the new credential ID’s and created on the current instance using the n8n API. Then the user gets a message, if the process has succeeded or not.

## Setup

- Select your credentials in the nodes which require those
- Configure your remote instance(s) in the Settings node. (You can skip this step, if you only want to use the File Upload feature)
    - Every instance is defined as object with the keys *name*, *apiKey* and *baseUrl*. Those instances are then wrapped inside an array. You can find an example described within a note on the workflow canvas.

## How to use

- Grab the (production) URL of the Form from the first node
- Open the URL and follow the instructions given in the multi-form

## Disclaimer

- Security: Beware, that all credentials are being decrypted and processed within the workflow. Also the API keys to other n8n instances are stored within the workflow.
- This solution is primarily meant for transferring data between testing environments. For production use consider the n8n enterprise edition which provides a **reliable** way to deploy workflows between different environments without the need of manual credential mapping.

## 🔗 Nodes Used

HTTP Request, Rename Keys, n8n, Filter, n8n Form Trigger, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
