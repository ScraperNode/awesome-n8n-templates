# 🔬 Detect multi-modal plagiarism with OpenAI GPT-4, Whisper, and vector search

> ⚡ **38 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This workflow automates academic and professional plagiarism detection by processing multi-modal submissions — documents, audio recordings, and images,through specialized AI agents. It targets educators, academic institutions, compliance teams, and content reviewers who need scalable, evidence-based integrity checking beyond simple text matching. A webhook receives submissions, which are routed in parallel through PDF/DOCX extraction, Whisper audio transcription, and OCR image analysis. All extracted data is combined and normalized before being stored in a vector database via OpenAI Embeddings for semantic retrieval. Four specialized agents, namely: Text Similarity, Code Analysis, Multi-Modal, and Audio Analysis, run concurrently, each targeting a different modality. Their outputs are merged, aggregated, and passed to a Reasoning & Aggregation agent that synthesizes findings. A structured final report is formatted and returned.

## Setup Steps
1. Connect webhook trigger and note the endpoint URL.
2. Add OpenAI credentials for Whisper, GPT (text/code agents), and Embeddings nodes.
3. Configure a vector store (e.g., Pinecone or Qdrant) for Retrieval Vector Store and Vector Store Retriever Tool.
4. Set Document Loader to point to your storage source (S3, local, or URL).
5. Set all AI agent models and output parsers to your preferred GPT model version.
6. Test with a sample multi-modal submission via the webhook.

## Prerequisites
- OpenAI API key (GPT-4, Whisper, Embeddings)
- Vector store account (Pinecone, Qdrant, or Weaviate)
- File storage accessible to n8n (S3, local, or URL)
## Use Cases
- University exam submission plagiarism screening
- Code originality checks for coding assessments
- Audio transcription integrity verification for oral submissions
- Enterprise compliance document auditing across formats
## Customization
- Swap GPT models for Claude or Mistral in any agent node
- Add more parallel agents (e.g., formula or citation analysis)
## Benefits
- Processes text, code, audio, and images in a single pipeline
- Parallel agent execution reduces total analysis time

## 🔗 Nodes Used

Webhook, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Structured Output Parser, Vector Store Retriever

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
