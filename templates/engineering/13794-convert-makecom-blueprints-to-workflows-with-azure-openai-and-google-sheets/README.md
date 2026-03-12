# ⚒️ Convert Make.com blueprints to workflows with Azure OpenAI and Google Sheets

> ⚡ **23 views** · ⚒️ [Engineering](../)

## Description

## 📘 Description
 This workflow converts a Make.com blueprint JSON into a directly importable n8n workflow JSON. It searches a Google Drive folder for the target blueprint file, downloads it, extracts the JSON, and sends it to an Azure OpenAI (gpt-4o-mini) agent that maps Make modules to n8n nodes and connections. Two cleanup code steps then normalize IF conditions and fix connection structure so the output imports cleanly. The final converted workflow JSON is stored in Google Sheets for review and reuse.

## ⚙️ Step-by-Step Flow
- When clicking ‘Execute workflow’ (Manual Trigger)
-  Starts the pipeline manually for controlled testing and repeatable runs.
- Search Files and Folders (Google Drive)
-  Lists files/folders from the connected Drive scope.
- Filter Target Blueprint (IF)
-  Keeps only files whose name contains "blueprint" to prevent converting the wrong file.
- Download Blueprint File (Google Drive)
-  Downloads the selected blueprint file as binary.
- Extract JSON from File (Extract From File)
-  Parses the downloaded file into a JSON object ($json.data) ready for AI conversion.
- Convert Blueprint with AI Agent (LangChain Agent + Azure OpenAI)
-  Converts Make blueprint JSON → n8n workflow export JSON using strict rules:
- Valid n8n nodes with required fields
- Connections keyed by node names (not IDs)
- IF node condition schema corrected for n8n
- Left-to-right positions and end-to-end connectivity
- Normalize Connections and Conditions (Code)
-  Hard-fixes common AI mistakes:
- Converts boolean conditions → string conditions for IF nodes
- Rebuilds connections using node names
- Ensures connections[from].main is correctly structured (2D arrays for branches)
- Strip Make Fields and Finalize (Code)
-  Removes import-breaking fields:
- Deletes Make-only parameters (__IMTCONN__)
- Drops unstable fields like typeVersion to reduce version mismatch issues
- Removes root active/settings/versionId fields (keeps output minimal and import-safe)
- Save Converted Workflow to Sheet (Google Sheets)
-  Appends the converted JSON output into a sheet column (json) for storage and reuse.
- 
## 🧩 Prerequisites
• Google Drive OAuth2 credential (folder access)
• Google Sheets OAuth2 credential (write access to target sheet)
• Azure OpenAI credential with gpt-4o-mini deployment active
• Blueprint file naming convention includes "blueprint" (or update the IF filter)

## 💡 Key Benefits
 ✔ Converts Make blueprints into importable n8n workflows with minimal manual edits
 ✔ Normalizes connections and IF logic (highest failure points in imports)
 ✔ Stores results in Sheets as a conversion log + library
 ✔ Manual trigger keeps runs deterministic during testing

## 👥 Perfect For

- Teams migrating automation libraries from Make.com to n8n
-  Agencies converting client blueprints into reusable n8n templates
-  Building an internal “blueprint → n8n” conversion pipeline with audit history

## 🔗 Nodes Used

Google Sheets, Google Drive, AI Agent, Extract from File, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
