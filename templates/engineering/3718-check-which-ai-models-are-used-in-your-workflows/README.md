# ⚒️ Check which AI models are used in your workflows

> ⚡ **880 views** · ⚒️ [Engineering](../)

## Description

## How it works

- Fetch all workflows from your n8n instance.
- Filter workflows that contain nodes with a `modelId` setting.
- Extract the node names, model IDs, model names, workflow names, and workflow URLs.
- Save the extracted information into a connected **Google Sheet**.

# Set up steps

1. Connect your **n8n API** credentials.
2. Connect your **Google Sheets** account.
3. Replace `"Your n8n domain"` with your actual domain URL.
4. Use this [Google Sheet template](https://docs.google.com/spreadsheets/d/1vl_Xj9QLGE04XMimmJzj1V0vJgP3j18duhsIziVNx_A/copy) to create a new sheet for results.
5. Setup typically takes **5 minutes**.
6. Be cautious: if you have over 100 workflows, performance may be impacted.

## Notes

- Sticky notes inside the workflow provide extra guidance.
- This workflow clears old sheet data before writing new results.
- Make sure your n8n instance allows API access.

## Result Example
![Screenshot_20250426_215018_VOGw3C702x.jpg](fileId:1168)

Update:
It didn't detect the AI model in tool originally. Now it's fixed!

Update 20250429:
Support 1.91.0 with open node directly!
Optimize the url with node id.

## 🔗 Nodes Used

Google Sheets, n8n, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
