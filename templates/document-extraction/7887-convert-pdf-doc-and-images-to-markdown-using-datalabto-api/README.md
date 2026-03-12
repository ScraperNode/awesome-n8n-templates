# 🔬 Convert PDF, DOC, and images to Markdown using Datalab.to API

> ⚡ **1,040 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This n8n workflow converts various file formats (.pdf, .doc, .png, .jpg, .webp) to clean markdown text using the [datalab.to](https://datalab.to) API. Perfect for AI agents, LLM processing, and RAG (Retrieval Augmented Generation) data preparation for vector databases.

## Workflow Description

### Input
- **Trigger Node**: Form trigger or webhook to accept file uploads
- **Supported Formats**: PDF documents, Word documents (.doc/.docx), and images (PNG, JPG, WEBP)

### Processing Steps
1. **File Validation**: Check file type and size constraints
2. **HTTP Request Node**: 
   - Method: POST to `https://api.datalab.to/v1/marker`
   - Headers: `X-API-Key` with your datalab.to API key
   - Body: Multipart form data with the file
3. **Response Processing**: Extract the converted markdown text
4. **Output Formatting**: Clean and structure the markdown for downstream use

### Output
- Clean, structured markdown text ready for:
  - LLM prompt injection
  - Vector database ingestion
  - AI agent knowledge base processing
  - Document analysis workflows

## Setup Instructions
1. **Get API Access**: Sign up at [datalab.to](https://www.datalab.to/app/dashboard) to obtain your API key
2. **Configure Credentials**: 
   - Create a new credential in n8n
   - Add Generic Header: `X-API-Key` with your API key as the value
3. **Import Workflow**: Ready to process files immediately

## Use Cases
- **AI Workflows**: Convert documents for LLM analysis and processing
- **RAG Systems**: Prepare clean text for vector database ingestion
- **Content Management**: Batch convert files to searchable markdown format
- **Document Processing**: Extract text from mixed file types in automated pipelines

The workflow handles the complexity of different file formats while delivering consistent, AI-ready markdown output for your automation needs.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
