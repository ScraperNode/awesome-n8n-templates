# ⚒️ AI-powered RAG configuration assistant: From form to email recommendations

> ⚡ **84 views** · ⚒️ [Engineering](../)

## Description

## Description
An intelligent RAG Configuration Assistant that analyzes your retrieval-augmented generation requirements and delivers AI-powered recommendations via email. Get expert guidance on embedding models, chunk sizes, vector stores, and cost estimates—all automated through a simple form submission.

## Key Features
•	AI-powered analysis using LLM
•	14 predefined use cases (Document Q&A, Chatbot, Legal, Medical, etc.)
•	Optional document upload for enhanced analysis
•	Beautiful HTML email reports with modern dashboard design
•	Customized n8n workflow JSON attachment
•	Cost estimation based on budget and usage
•	Deterministic AI (temperature=0) for consistent results
•	Dual-branch architecture (file upload or manual input)


## How it works
1. **Form Submission**: User provides use case, document type, pages, budget, query volume
2. **AI Analysis**: Claude evaluates requirements and complexity
3. **Recommendation Engine**: Generates optimal configuration (embedding model, chunk size, vector store)
4. **Report Generation**: Creates professional HTML email with all recommendations
5. **Workflow Creation**: Builds customized n8n workflow JSON
6. **Email Delivery**: Sends report + workflow attachment via Gmail

## How to use
1. **Setup credentials**: Add OpenRouter API key and Gmail OAuth
2. **Activate workflow**: Enable the Form Trigger
3. **Share form URL**: Distribute to your team or clients
4. **Receive requests**: Users fill out the form
5. **Get results**: Recipients receive email with recommendations + workflow file
6. **Import workflow**: Download attached JSON and import to n8n

## Requirements
**Essential:**
- n8n instance (v1.0+)
- OpenRouter account + API key
- Gmail account with OAuth2 setup

## 🔗 Nodes Used

Gmail, AI Agent, n8n Form Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
