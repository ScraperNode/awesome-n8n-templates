# 🔬 Keep RAG system updated with Google Drive file changes to Supabase vector DB

> ⚡ **513 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This n8n workflow ensures data freshness in the RAG system by handling modifications to existing files. It complements the "Document Ingestion" workflow by triggering whenever a file in the monitored Google Drive folder is updated.

This "delete-then-re-insert" process ensures the RAG agent always has access to the most current version of your documents.

Key Features & Workflow:

Update Trigger: The workflow activates using the File Updated trigger for the same Google Drive folder ("DOCUMENTS").

Duplicate Run Prevention: An If node cleverly filters out immediate "update" events that are triggered by the "Upload Doc" workflow's Word-to-Google-Doc conversion, preventing unecessary duplicate runs.

Delete Old Entries: Once a genuine update is detected, the workflow's first action is to find and delete all existing vector chunks associated with that file_id from the Supabase "documents" table.

Smart Versioning: It then retrieves the old version number from the deleted metadata and uses an OpenAI node (Set Version) to intelligently increment it (e.g., "v1" becomes "v2").

Re-Ingestion Pipeline: The updated file is then processed through the exact same logic as the "Upload Doc" workflow:

It is routed by a Switch node based on its MIME type (PDF, Google Doc, Excel, etc.).

Text is extracted, chunked, and embedded.

The Enhanced Default Data Loader enriches these new chunks with metadata, including the new, incremented version number.

Insert New Entries: Finally, the newly processed and versioned chunks are inserted back into the Supabase Vector Store.

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Drive Trigger, Supabase, Embeddings OpenAI, Recursive Character Text Splitter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
