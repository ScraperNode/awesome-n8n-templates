# 🔬 Create a REST API for PDF digital signatures with webhooks

> ⚡ **5,695 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Overview
An automation workflow that creates a complete REST API for digitally signing PDF documents using n8n webhooks. This service demonstrates how to implement secure document signing functionality through standardized API endpoints with file upload and download capabilities.

## Use Case
This workflow is designed for developers and automation specialists who need to implement digital document signing. It's particularly useful for:
- Integrating PDF signing capabilities into existing document workflows
- API-based automation of signature processes
- Creating proof-of-concept implementations for document verification systems
- Learning n8n's webhook capabilities and file handling techniques
- Testing PDF signing in development environments before production implementation

## What This Workflow Does

### API-Based Document Management
- Exposes RESTful webhook endpoints for all document operations
- Handles multipart/form-data uploads for PDF documents
- Processes JSON payloads for signing configuration
- Provides download functionality for completed documents

### Digital Certificate Handling
- Uploads existing PFX/PKCS#12 digital certificates
- Generates new certificates with customizable attributes
- Securely manages certificate storage and access
- Associates certificates with signing operations

### Cryptographic PDF Signing
- Applies digital signatures using industry-standard cryptographic methods
- Embeds signature information within PDF document structure
- Validates document integrity through cryptographic verification
- Preserves original document while adding signature elements

### Webhook Integration System
- Routes different API methods to appropriate handlers
- Validates request payloads and file content
- Manages authentication through webhook paths
- Returns structured responses for integration with other systems

## Technical Architecture

### Components
1. **API Gateway**: n8n webhook nodes that receive external requests
2. **Request Router**: Switch nodes that direct operations based on method parameters
3. **Document Processor**: Function nodes for PDF manipulation and verification
4. **Certificate Manager**: Specialized nodes for cryptographic key operations
5. **Storage Interface**: File operation nodes for document persistence
6. **Response Formatter**: Nodes that structure API responses

### Integration Flow
```
Client Request → Webhook Endpoint → Method Router → 
Processing Engine → Digital Signing → Storage → 
Response Generation → Client Response
```

## Setup Instructions

### Prerequisites
- n8n installation (minimum version 0.214.0)
- Node.js 14 or higher
- Required environment variable:
  ```
  NODE_FUNCTION_ALLOW_EXTERNAL: "node-forge,@signpdf/signpdf,@signpdf/signer-p12,@signpdf/placeholder-plain"
  ```

### Configuration Steps
1. **Import Workflow**
   - Import the workflow JSON into your n8n instance
   - Activate the workflow to enable the webhooks

2. **Configure Storage**
   - Set the storage path variables in the workflow
   - Ensure proper permissions on the storage directories

3. **Test API Endpoints**
   - Use the included test scripts to verify functionality
   - Test PDF upload, certificate generation, and signing

4. **Integration**
   - Document the webhook URLs for integration with other systems
   - Configure error handling according to your requirements

### Testing Methods
Test the workflow functionality using various HTTP requests and JSON data:
- Upload PDF documents to the document processing endpoint
- Upload or generate digital certificates
- Execute PDF signing operations
- Download signed documents from the download endpoint

## Webhook Endpoints

The workflow exposes two primary webhook endpoints that form a complete API for PDF digital signing operations:

### 1. Document Processing Endpoint (`/webhook/docu-digi-sign`)

This endpoint handles all document and certificate operations:

**Method: Upload PDF**
- HTTP: `POST`
- Content-Type: multipart/form-data
- Parameters: method, uploadType, fileName, fileData

**Method: Upload Certificate**
- HTTP: `POST`
- Content-Type: multipart/form-data
- Parameters: method, uploadType, fileName, fileData

**Method: Generate Certificate**
- HTTP: `POST`
- Content-Type: application/json
- Parameters: method, subjectCN, issuerCN, serialNumber, validFrom, validTo, password

**Method: Sign PDF**
- HTTP: `POST`
- Content-Type: application/json
- Parameters: method, inputPdf, pfxFile, pfxPassword

### 2. Document Download Endpoint (`/webhook/docu-download`)

This endpoint handles the retrieval of processed documents:

**Method: Download Signed PDF**
- HTTP: `GET`
- Content-Type: application/json
- Parameters: method, fileType, fileName

## Key Workflow Sections
The workflow is organized into logical sections with clear responsibilities:
- **Request Processing**: Parses incoming webhook data
- **Method Routing**: Directs requests to appropriate handlers
- **Document Management**: Handles file operations and storage
- **Cryptographic Operations**: Manages signing and certificate functions
- **Response Formatting**: Structures and returns results

## 🔗 Nodes Used

Webhook, Read/Write Files from Disk, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
