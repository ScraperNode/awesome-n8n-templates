# ⚙️ Transfer credentials to other n8n instances using a multi-form

> ⚡ **3,178 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Purpose

This workflow allows you to transfer credentials from one n8n instance to another.

![Image](https://i.imgur.com/uqAjqZ6.png)
![Image](https://i.imgur.com/vZcTTvX.png)

## How it works

- A multi-form setup guides you through the entire process
- You get to choose one of your predefined (in the Settings node) remote instances first
- Then all credentials of the current instance are being retrieved using the Execute Command node
- On the next form page you can select one of the credentials by their name and initiate the transfer
- Finally the credential is being created on the remote instance using the n8n API. A final form ending indicates if that action succeeded or not.

## Setup

- Select your credentials in the nodes which require those
- Configure your remote instance(s) in the Settings node
    - Every instance is defined as object with the keys *name*, *apiKey* and *baseUrl*. Those instances are then wrapped inside an array. You can find an example described within a note on the workflow canvas.

## How to use

- Grab the (production) URL of the Form from the first node
- Open the URL and follow the instructions given in the multi-form

## Disclaimer

- Please note, that this workflow can only run on self-hosted n8n instances, since it requires the Execute Command Node.
- Security: Beware, that all credentials are being decrypted and processed within the workflow. Also the API keys to other n8n instances are stored within the workflow.
- This solution is primarily meant for transferring data between testing environments. For production use consider the n8n enterprise edition which provides a **reliable** way to manage credentials across different environments.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Read/Write Files from Disk, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
