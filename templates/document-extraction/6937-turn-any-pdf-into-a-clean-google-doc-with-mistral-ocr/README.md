# 🔬 Turn any PDF into a clean Google Doc with Mistral OCR

> ⚡ **2,111 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Upload a PDF and instantly get a neatly formatted Google Doc with all the readable text—no manual copy-paste, no messy line breaks.

**What this workflow does**

* Accepts PDF uploads via a public form
* Sends the file to Mistral Cloud for high-accuracy OCR
* Detects and merges page images with their extracted text
* Cleans headers, footers, broken lines, and noise
* Creates a new Google Doc in your chosen Drive folder
* Writes the polished markdown text into the document

**What you need**

* Mistral Cloud API key with OCR access
* Google Docs & Drive credentials connected in n8n
* Drive folder ID for new documents
* A PDF file to process (up to 100 MB)

**Setup**

1. Import the workflow into n8n and activate credentials.
2. In **Trigger • Form Submission**, copy the webhook URL and share it or embed it.
3. In **Create • Google Doc**, replace the default folder ID with yours.
4. Fill out Mistral API key under **Mistral Cloud API** credentials.
5. Save and activate the workflow.
6. Visit the form, upload a PDF, name your future doc, and submit.
7. Open Drive to view your newly generated, clean Google Doc.

**Example use cases**

* Convert annual reports into editable text for analysis.
* Extract readable content from scan-only invoices for bookkeeping.
* Turn magazine PDFs into draft blog posts.
* Digitize lecture handouts for quick search and annotation.
* Convert image-heavy landing pages / advertorials into editable text for AI to analyze structure and content.

## 🔗 Nodes Used

HTTP Request, Google Docs, Basic LLM Chain, n8n Form Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
