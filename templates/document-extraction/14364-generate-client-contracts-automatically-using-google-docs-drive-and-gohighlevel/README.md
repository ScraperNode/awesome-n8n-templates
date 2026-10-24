# 🔬 Generate client contracts automatically using Google Docs, Drive, and GoHighLevel

> ⚡ **165 views** · 🔬 [Document Extraction & Analysis](../)

## Description

📘 Description
 This workflow is a fully automated contract generation and delivery system that converts structured client input into a finalized, professional PDF contract and uploads it directly to your CRM. It eliminates manual document handling by dynamically populating a Google Docs template, exporting it as a PDF, and delivering it to GoHighLevel in a single flow, while ensuring no temporary files remain in storage. 

⚙️ Step-by-Step Flow
1. Receive Contract Request (Webhook)
2. Accepts a POST request containing all contract data: 
-  Client name 
-  Date 
-  Scope of works (array) 
-  PC items (array) 
-  Financials (subtotal, GST, total) 
- Copy Master Template (Google Drive)
3.  Creates a duplicate of the master contract template.
 4. Ensures the original template remains unchanged. 
5. Populate Contract with Client Data (Google Docs)
 6. Performs large-scale find-and-replace operations: 
-  Replaces placeholders with dynamic client inputs 
-  Injects scope of work sections 
-  Maps PC items and pricing 
-  Updates totals and metadata 
7. Download Contract as PDF (Google Drive)
8.  Exports the fully populated document as a PDF file. 
9. Upload PDF to GoHighLevel (HTTP Request)
10. Uploads the generated PDF to GoHighLevel via API: 
-  Makes it instantly available in CRM 
-  Ready for attachment or client delivery 
11. Delete Temp Copy from Drive (Cleanup)
12. Removes the temporary document copy from Google Drive.
13.  Prevents storage clutter and duplication. 

## 🧩 Prerequisites
 • Google Drive OAuth2
 • Google Docs OAuth2
 • GoHighLevel API key (Bearer token)
 • Webhook trigger source (form, CRM, or system)


## 💡 Key Benefits
 ✔ Zero manual contract creation
 ✔ Consistent formatting across all contracts
 ✔ Dynamic handling of complex data (arrays, pricing)
 ✔ Instant CRM upload (GoHighLevel)
 ✔ Automatic cleanup (no file clutter)
 ✔ Scalable for high-volume contract generation

## 👥 Perfect For
-  Construction and renovation businesses
-  Agencies generating client agreements
-  Sales teams automating proposal-to-contract flow
-  CRM-driven businesses using GoHighLevel

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, Google Docs

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
