# 💬 Generate AI-powered sales proposals from JotForm leads with OpenAI and Google Docs

> ⚡ **326 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

### ⚙️ Proposal Generator Template (Automates proposal creation from JotForm submissions)

### 🧑‍💻 Author: [LeeWei]

---

### 🚀 Steps to Connect:

1. **JotForm Setup**
   - Visit [JotForm](https://www.jotform.com/) to generate your API key and connect to the JotForm Trigger node.
   - Update the `form` field in the **JotForm Trigger** node with your form ID (default: `251206359432049`).

2. **Google Drive Setup**
   - Go to [Google Drive](https://www.google.com/drive/) and set up OAuth2 credentials ("Google Drive account") with access to the folder containing your template.
   - Update the `fileId` field in the **Google Drive** node with your template file ID (default: `1DSHUhq_DoM80cM7LZ5iZs6UGoFb3ZHsLpU3mZDuQwuQ`).
   - Update the `name` field in the **Google Drive** node with your desired output file name pattern (default: `={{ $json['Company Name'] }} | Ai Proposal`).

3. **OpenAI Setup**
   - Visit [OpenAI](https://platform.openai.com/) and generate your API key.
   - Paste this key into the **OpenAI** and **OpenAI1** nodes under the "OpenAi account 3" credentials.
   - Update the `modelId` field in the **OpenAI1** node if needed (default: `gpt-4.1-mini`).

4. **Google Docs Setup**
   - Set up OAuth2 credentials ("Google Docs account") with edit permissions for the generated documents.
   - No fields need editing as the node dynamically updates based on previous outputs.

5. **Google Drive2 Setup**
   - Ensure the same Google Drive credentials ("Google Drive account") are used.
   - No fields need editing as the node handles PDF conversion automatically.

6. **Gmail Setup**
   - Go to [Gmail](https://mail.google.com/) and set up OAuth2 credentials ("Gmail account").
   - No fields need editing as the node dynamically uses the prospect's email from JotForm.

---

### How it works

- The workflow triggers on JotForm submissions, copies a Google Drive template, downloads an audio call link, transcribes it with OpenAI, generates a tailored proposal, updates a Google Docs file, converts it to PDF, and emails it to the prospect.

### Set up steps

- Setup time: Approximately 15-20 minutes.
- Detailed instructions are available in sticky notes within the workflow.

## 🔗 Nodes Used

Google Drive, Jotform Trigger, Gmail, Google Docs, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
