# 🔬 Generate branded word documents with Claude AI and Json2Doc (up to 20 pages)

> ⚡ **757 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Overview

This n8n workflow automatically generates professionally formatted Word documents (DOCX) with consistent company branding using AI. It leverages **[Json2Doc](json2doc)** and the **Json2Doc MCP** server to transform simple text prompts into complete, multi-page documents.

Get your free API key at: **[app.json2doc.com](app.json2doc.com)**

## Use Cases

Generate first drafts of:
- Contracts and legal agreements
- Internal forms and templates
- Company announcements and notices
- Internal documentation and policies
- Business reports and presentations
- Guidelines and procedures
- and much more ...

## Key Features

### Consistent Company Branding
- Custom fonts, colors, and typography
- Company logo in headers
- Page numbers in footers
- Controlled spacing and layout
- Professional heading styles

### Multi-Page Document Support
- Page-based sections (new page)
- Flow sections (continuous across pages)
- **Automatic pagination**
- Consistent **headers** and **footers** throughout

### Rich Content Types
- Multiple heading levels
- Formatted text and paragraphs
- Tables with custom styling
- Ordered and unordered lists
- Images and logos
- Auto Generated QR Codes

### AI-Driven Generation
Uses Claude Sonnet 4.5 to:

- Generate appropriate document structure
- Apply correct formatting
- Create professional, coherent content

## How It Works

### 1. Input Form
Users provide:
- **Prompt** - Description of the desired document (e.g., "Generate an employment contract template")
- **Logo URL** - Web-accessible URL to company logo

### 2. Company Styling
Pre-configured branding is applied (See workflow for Description on how to Update):
- Font, font Styles (for H1,H2, ...)
- Header: Company name + logo
- Footer: Page numbers ("Page X of Y")
- Spacing rules for all content types
- Table Styles

### 3. AI Document Generation
The AI agent:
1. Retrieves the Json2Doc section schema
2. Generates JSON configuration for the document
3. Validates the configuration
4. Creates a document generation job
5. Returns the Job ID

### 4. Processing & Download
- Waits for document completion (3 seconds initially)
- Polls job status via API
- Retries if not complete
- Downloads the final DOCX file when ready

## Setup Requirements

### Authentication

You need a Json2Doc API key from **app.json2doc.com** (Permanently free version available).

## Processing Times

### Configuration Generation (Model-dependent)
The AI model generates the JSON configuration:
- Simple documents (1-2 pages): 10-30 seconds
- Medium documents (3-5 pages): 30-60 seconds
- Complex documents (10-20 pages): 60-120 seconds

Time varies based on the selected AI model and document complexity.

### Json2Doc Processing
Once the configuration is created, Json2Doc generates the DOCX file in **2-6 seconds** regardless of document size.

## Extensions

This workflow can be integrated with:
- Cloud storage (Google Drive, Dropbox)
- Email services for automated delivery
- Approval workflows
- Document management systems

## Important Limitation

**This workflow is only suitable for documents up to 20 pages**, as larger documents will exceed the AI model's context window. For longer documents, use the Builder Mode instead: [DocumentBuilder Docs](https://docs.json2doc.com/docs/document-generation/builder)

## 🔗 Nodes Used

HTTP Request, AI Agent, Anthropic Chat Model, Structured Output Parser, n8n Form Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
