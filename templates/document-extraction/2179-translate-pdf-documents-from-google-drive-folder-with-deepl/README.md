# 🔬 Translate PDF documents from Google Drive folder with DeepL

> ⚡ **6,299 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow will translate all your PDF documents from specified Google Drive folder to the desired language. Translated files will be automatically uploaded to the original folder.

### Required accounts
1️⃣ Google Drive account
2️⃣ [DeepL developer account](https://www.deepl.com/pro-api?cta=header-pro-api) and API key

### How to setup?

1️⃣ Setup your google drive folder url, target and source language in the configuration node
2️⃣ Connect your Google Drive account with all Google Drive nodes
3️⃣ Setup HTTP header credentials that should be used for HTTP nodes in the template (replace `yourAuthKey` with your DeepL API key)
![Deepl HTTP Header auth](https://i.imgur.com/t4zOVgc.png)
4️⃣ Set your DeepL header credentials in all HTTP nodes

## 🔗 Nodes Used

HTTP Request, Google Drive, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
