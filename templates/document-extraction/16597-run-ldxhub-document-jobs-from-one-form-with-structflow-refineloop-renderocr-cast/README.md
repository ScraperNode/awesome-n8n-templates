# 🔬 Run LDXhub document jobs from one form with StructFlow, RefineLoop, RenderOCR, CastDoc, and ExtractDoc

> ⚡ **15 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow provides a single n8n form that routes to six LDXhub services (StructFlow, AnalyzeDoc, RefineLoop, RenderOCR, CastDoc, and ExtractDoc) to run one-off document processing jobs and return the generated output file directly to the user.

## How it works
1. Receives a submission from an n8n Form that collects an LDXhub API key, API host, and the target service.
2. Routes the request to the selected service and fetches available models or engines from the LDXhub gateway using an HTTP request.
3. Collects the remaining service-specific inputs via follow-up forms (for example model/engine selection, prompts/options, file upload, output format, and OCR language where applicable).
4. Filters the available output formats based on the uploaded file’s extension for the conversion-style services.
5. Submits the job to LDXhub (StructFlow, AnalyzeDoc, RefineLoop, RenderOCR, CastDoc, or ExtractDoc) and polls until the result is ready.
6. Returns the processed file as a direct download in the form completion step, or shows an error page if the job fails.

## Setup
1. Create an LDXhub API key in the LDXhub portal and add an LDXhub API credential in n8n for the LDXhub node.
2. Confirm the LDXhub gateway base URL (default https://gw.ldxhub.io) is reachable from your n8n instance, or update the host value used in the form.
3. Ensure users have the correct input files available for the chosen service (JSONL for StructFlow, PDF/JPEG/PNG for AnalyzeDoc, XLIFF for RefineLoop, and supported document/image types for RenderOCR, CastDoc, and ExtractDoc).

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
