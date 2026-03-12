# 🧾 Save n8n Cloud invoices received in Gmail in Google Drive

> ⚡ **3,524 views** · 🧾 [Invoice Processing](../)

## Description

## Who this is for
This template is for everyone that wants to download their n8n Cloud invoices automatically as a PDF instead of downloading them manually.
## How it works
This workflow checks your Gmail inbox for new n8n invoice emails from n8n's payment provider Paddle. Once it finds something, it converts the URL into a PDF using pdflayer and saves it in Google Drive.
## Setup
1. Setup your **Gmail** and **Google Drive** credentials
1. Create a free account at https://pdflayer.com/
2. Insert your **pdflayer** API key into the `Setup` node
3. Insert the URL to the wanted drive folder into the setup node (make sure to remove everything after the `?`)
## How to adjust it to your need
Instead of saving the PDF in Google drive, you could also save it in your local system, any other storage provider or send the PDF automatically to the right person in your company.

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
