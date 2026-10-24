# 🔬 Automatically sign PDFs from a watched Google Drive folder with PDF API Hub

> ⚡ **27 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Auto E-Sign PDF — Google Drive Watcher

Automatically signs PDF documents the moment they land in a Google Drive folder — no manual steps needed. The signed output is routed to a Drive folder.


---

## How it works

1. **Google Drive Trigger** watches a folder every minute for newly created files
2. **Download file** fetches the file from Drive into the workflow
3. **Config** sets your signature URL, position (x/y), and output method (`drive` or `email`)
4. **Is PDF?** filters out non-PDF files — only PDFs proceed
5. **Sign a PDF** overlays your signature image at the configured coordinates using PDF API Hub
6. **Output Router** sends the signed PDF to Drive
7. **Log** records the filename and signed status for auditing

---

## Setup

### Credentials
- Google Drive OAuth2 (trigger + download + upload nodes)
- PDF API Hub API key — sign up at [pdfapihub.com](https://pdfapihub.com)

### Configuration (in the **Config** node)
| Field | Description |
|---|---|
| `signature_url` | Public URL to your PNG signature image |
| `sign_x` / `sign_y` | Pixel coordinates for signature placement |
| `output` | `drive` to save to Google Drive, `email` to send via email |
| `email` | Recipient address (required only if output = `email`) |

### Folder setup
- Set your **watch folder** in the Google Drive Trigger node
- Set your **output folder** in the Upload file node

---

## Notes
- Signature image should be a PNG with a transparent background for best results
- Non-PDF files dropped into the watched folder are silently skipped

## 🔗 Nodes Used

Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
