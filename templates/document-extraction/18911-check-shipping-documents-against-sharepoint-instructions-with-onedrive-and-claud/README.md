# 🔬 Check shipping documents against SharePoint instructions with OneDrive and Claude

> ⚡ **34 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Checks each shipment's document pack in OneDrive - bill of lading, phytosanitary and origin certificates - against the shipping instruction on a SharePoint list. Presence is checked by fixed rules; field values are read by a model and compared by fixed rules. A named person approves; Outlook chases the originals.

## How it works
1. Runs every morning on a schedule and also re-checks a specific shipment when a new file is created in a OneDrive shipment subfolder.
2. Lists shipment folders in OneDrive, matches each folder to a shipment row in a SharePoint “Shipments” list, and loads document requirement rows from a SharePoint “Document requirements” list.
3. Scans each shipment’s drafts/ and originals/ subfolders in OneDrive, classifies documents by filename, and checks whether required drafts/originals are present and whether originals are overdue for chasing.
4. For required draft documents with fields to verify, downloads the file and sends it to Anthropic (Messages API) to extract the specified fields, then compares the extracted values against the shipment’s SharePoint instruction fields using fixed rules and tolerances.
5. Calculates a per-shipment status and next step (for example, ready for approval, discrepancy, awaiting originals, or complete) and writes the worklist columns back to the SharePoint “Shipments” list.
6. Appends status-change and chase events to a SharePoint “Document log” list and emails the document control desk and/or the counterparty via Microsoft Outlook (including escalation CCs when configured).
7. Accepts approval or rejection through an n8n Form, records the decision in SharePoint, and (on approval) emails the counterparty requesting originals so the daily scan can start chasing.
8. 8. The model never decides: whether a document is present is set arithmetic, whether it agrees is a fixed comparison against values a person typed, and a person approves.

## Setup
1. Create and populate the SharePoint lists used by the workflow (Shipments, Document requirements, and Document log) and ensure Shipments includes fields like Title (shipment reference), contract_ref, and counterparty_email.
2. Create a OneDrive shipments root folder with one subfolder per shipment reference, each containing drafts/ and originals/ subfolders, then paste the shipments root folder ID into the Configuration nodes and the OneDrive trigger.
3. The SharePoint credential needs a permission granted under the SharePoint API (Delegated, AllSites.Write), not only Microsoft Graph - the credential requests a token for <tenant>.sharepoint.com and .default only picks up that API's grants. The Azure app must also be set to multi-tenant, because n8n signs in through the /common endpoint.
4. Add an Anthropic API credential and set the model URL, version header value, and model name in Configuration.
5. Add a Microsoft Outlook credential (optional) and set desk_email and escalation_email in Configuration, then set n8n_base_url so the approval emails link correctly to the n8n Form URL.

## Requirements
- n8n 1.90 or later, self-hosted
- Microsoft OneDrive and Microsoft SharePoint OAuth2 credentials (optional Microsoft Outlook) - one multi-tenant Azure app registration covers all three
- A model credential for a Messages-API endpoint that can read PDFs
- Three SharePoint lists (Shipments, Document requirements, Document log) - seed CSVs and column types ship in the companion repository

## Customization
- Change the documents, not the nodes: which documents a contract needs, whether originals must follow, which fields to check and with what tolerance are rows on the Document requirements list
- Expected values live on the Shipments row; the workflow writes only the worklist columns and never touches what a person typed
- The model endpoint, model name and API version are Configuration values - a proxy or local runtime is a setting, not a node edit
- chase_after_days and escalate_after_days set the chase clock; the disclaimer and the AI-notice line on outgoing mail are Configuration values you can read and change

## Additional info
Tested end to end on a live Microsoft tenant before submission: classification, completeness, model readings and field comparisons, approval with a double-press guard, originals request, day-5 nudge, day-9 escalation with cc, and completion. Output that quotes what the model read carries EU AI Act Article 50 marking; rule-written messages are deliberately unmarked. Full build, seed lists and compliance documentation: github.com/automatiqa-lab/ship-doc

## 🔗 Nodes Used

HTTP Request, Convert to/from binary data, Microsoft OneDrive, Microsoft Outlook, Schedule Trigger, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
