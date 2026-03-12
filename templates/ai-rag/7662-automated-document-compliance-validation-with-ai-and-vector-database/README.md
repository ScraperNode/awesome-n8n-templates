# 🔍 Automated document compliance validation with AI and vector database

> ⚡ **704 views** · 🔍 [AI RAG & Knowledge Retrieval](../)

## Description

## Description 

This workflow automates compliance validation between a policy/procedure and a corresponding uploaded document. It leverages an AI agent to determine whether the content of the document aligns with the expectations outlined in the provided procedure or policy. 

## How It Works 

1. Document Upload 

* A document (e.g., PDF) is uploaded via an HTTP Request Webhook. 

* The content is processed into vector embeddings using a Qdrant vector store and an embedding model. 

2. Procedure Submission 

* A policy/procedure text and description are submitted via a second HTTP Request Webhook. 

* These serve as the basis for evaluating the uploaded document. 

3. AI-Based Validation 

 The AI agent receives: 

* The uploaded document (via vector embeddings) 

* The submitted procedure/policy text 

* The description/context 

It returns a structured compliance analysis including: 

* Summary of Compliance (sections that align with policy) 

* Summary of Non-Compliance (gaps or missing elements) 

* Supporting Text Citations (document evidence) 

* Confidence Level (0–100 score based on evidence quality) 

 

## Setup Instructions 

Pre-Conditions / Requirements 

* An n8n instance running with access to: 

*  Qdrant (for vector storage) 

* An embedding model (e.g., OpenAI, HuggingFace, or local model) 

* Optional: Microsoft Graph or another storage system for document retrieval. 

## Workflow Setup 

1. HTTP Request Node 1: Document Upload 

Accepts binary document files (PDF, DOCX, etc.). 

Extracts text, generates embeddings, and stores them in Qdrant. 

Returns a spDocumentId for reference. 

2. HTTP Request Node 2: Procedure Submission 

Accepts a JSON payload with: 

{ 
  "procedure": "Policy or procedure text", 
  "description": "Brief context or objective", 
  "spDocumentId": "ID of the uploaded document" 
} 
  

Links the procedure to the previously uploaded document. 

3. Order of Operations 

Step 1: Upload the document. 

Step 2: Submit the procedure referencing the same spDocumentId. 

Step 3: AI agent evaluates compliance and returns results. 

 

## Example Input & Output 

Example Input: Document Upload (Webhook 1) 

* Request: Binary file upload (example_policy.pdf) 

* Response: 

{ 
  "spDocumentId": "12345" 
} 
  

### Example Input: Procedure Submission (Webhook 2) 

{ 
  "procedure": "All financial records must be retained for 7 years.", 
  "description": "Retention policy compliance validation", 
  "spDocumentId": "12345" 
} 
  

### Example Output: AI Compliance Validation 

{ 
  "compliance_summary": "The document includes a 7-year retention requirement for invoices and payroll records.", 
  "non_compliance_summary": "No reference to retention of vendor contracts.", 
  "citations": [ 
    { 
      "text": "Invoices will be stored for 7 years.", 
      "page": 4 
    } 
  ], 
  "confidence": 87 
}

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, LangChain Code, Ollama Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
