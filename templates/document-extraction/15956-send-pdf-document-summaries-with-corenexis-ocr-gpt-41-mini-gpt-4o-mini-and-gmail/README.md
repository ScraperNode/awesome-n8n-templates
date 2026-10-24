# 🔬 Send PDF document summaries with CoreNexis OCR, GPT-4.1-mini, GPT-4o-mini and Gmail

> ⚡ **84 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Upload any PDF through a form and this workflow extracts the full text using CoreNexis OCR, generates a structured 5-section summary with GPT-4.1-mini, converts it into a branded HTML email with GPT-4o-mini, and delivers it to your inbox automatically.

## How it works
1. User fills a form with their name, email address, and PDF file upload — no login or account required.
2. A code step identifies the uploaded PDF binary and extracts user metadata for use throughout the workflow.
3. The PDF is submitted to the CoreNexis OCR API which extracts all text from the document asynchronously and returns a job ID.
4. After an initial 4-second wait, the workflow polls the CoreNexis status endpoint. If the job is still processing, it waits 1 minute and polls again. This loop continues automatically until the OCR job reports completed.
5. Once completed, the extracted text file is downloaded from the CoreNexis output URL.
6. GPT-4.1-mini reads the full extracted text and writes a structured 5-section Markdown summary: Document Overview, Key Points, Important Numbers and Dates, Action Items, and Executive Summary.

## Setup
1. Get your CoreNexis API key from api.corenexis.com. Open node 3. HTTP — CoreNexis OCR Submit and replace YOUR_CORENEXIS_API_KEY with your actual key.
2. Open node 6. HTTP — Poll OCR Status and replace YOUR_CORENEXIS_API_KEY again — the same key must appear in both nodes 3 and 6
3. Open the OpenAI — GPT-4.1-mini Model node and connect your OpenAI API credential.

## Requirements
- Active n8n instance (self-hosted or cloud)
- CoreNexis account with API access — get your key at api.corenexis.com
- OpenAI account with access to GPT-4.1-mini and GPT-4o-mini
- Gmail account connected via OAuth2 for sending summary emails

## Customization
- Change the summary structure — edit the system prompt in node 13. AI Agent — Generate Document Summary to add, remove, or rename any of the 5 sections based on your document type
- Change the email branding — edit the system prompt in node 15. AI Agent — Generate HTML Email to replace the CoreNexis colors (#1a1a2e and #e94560) with your own brand colors
- Add a Google Sheets log — after node 17. Gmail — Send Summary Email, add a Google Sheets append step to record the user name, email, file name, and timestamp for every processed document
- Support multiple languages — in node 3. HTTP — CoreNexis OCR Submit, change lang=eng to any supported CoreNexis language code to process documents in other languages
- Adjust the retry interval — in node 9. Wait — 1 Minute Retry, change the wait duration to 2 or 3 minutes for very large PDFs that take longer to process

## Additional info
The CoreNexis API key appears in two separate steps — node 3. HTTP — CoreNexis OCR Submit and node 6. HTTP — Poll OCR Status. You must replace YOUR_CORENEXIS_API_KEY in both. Missing either one will cause the workflow to fail.

The OCR polling loop runs automatically until the job status equals completed. For large PDFs this may take several minutes. The workflow handles this without any manual intervention.

If the OCR job returns a failed or unknown status, the workflow stops at node 10. IF — OCR Completed? without sending an email. Check the CoreNexis dashboard for the job error details.

Node 16. Code — Extract HTML includes a built-in fallback — if GPT-4o-mini returns invalid or empty HTML, the workflow automatically generates a plain formatted HTML email from the Markdown summary so the user always receives something.

## 🔗 Nodes Used

HTTP Request, Gmail, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
