# ⚒️ Airtable batch update / insert rows (send faster + save API call requests)

> ⚡ **504 views** · ⚒️ [Engineering](../)

## Description

This workflow allows you to batch update/insert Airtable rows in groups of 10, significantly reducing the number of API calls and increasing performance.

## 🚀 How It Works

1. **Copy the 3 Nodes**  
   Copy the three nodes inside the red note box into your workflow.

2. **Set Your Fields**  
   In the `Set Fields` node, define the fields you want to update.  
   ➤ Only include fields that match column names in your Airtable table.  
   ➤ Make sure the field names are spelled **exactly** as they appear in Airtable.
   ➤ Make sure the field type are correctly set. So numbers columns in Airtable need numbers type set as the field.

3. **Configure the Airtable Batch Node**  
   - Enter your **Airtable Base ID**
     The part with `app...` in the URL:
airtable\.com / **app8pqOLeka1Cglwg** / tblnXZOdy8VtkAAJD/...
   - Enter your **Airtable Table ID**
     The part with `tbl...` in the URL:
airtable\.com / app8pqOLeka1Cglwg / **tblXXZOdy8VtkAAJD** /...
   - **Set Matching Fields** (`fieldsToMergeOn`)  
   Provide a string array that tells Airtable how to match existing rows. Examples:
     - Match by one field (e.g. `TaskID`):  
     `{{["TaskID"]}}`
     - Match by multiple fields (e.g. `firstname` and `lastname`):  
     `{{["firstname", "lastname"]}}`

   - **Choose the Mode** (`mode` field)  
   Available options:
     - `upsert`: Update if a record exists, otherwise insert a new one
     - `insert`: Always insert as new records
     - `update`: Only update existing records (you **must** provide a field named `id`)

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, Execute Workflow Trigger, DebugHelper

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
