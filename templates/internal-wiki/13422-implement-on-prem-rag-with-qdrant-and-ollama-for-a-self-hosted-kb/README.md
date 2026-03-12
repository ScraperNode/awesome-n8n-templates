# 📖 Implement on-prem RAG with Qdrant and Ollama for a self-hosted KB

> ⚡ **213 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Try It
### This n8n template provides a self hosted RAG implementation.

### How it works
* Provides one workflow to maintain the knowledge base and another one to query the knowledge base.
* Uploaded documents are saved into the Qdrant vector store.
* When a query is made, the most relevant documents are retrieved from the vector store and sent to the LLM as context for generating a response.


### How to use
* Start the workflow by clicking **Execute workflow**
* Use the file upload form to upload a document into the knowledge base (Qdrant db).
* Click **Open chat** to start asking questions related to the uploaded documents.

### Setup steps
Below steps show how to setup on Amazon Linux. Consult your OS for respective steps

* Install Ollama on prem
```
mkdir ollama
cd ollama
curl -fsSL https://ollama.com/install.sh | sh
ollama --version
```
* Install required models ( in Amazon Linux)

```
 ollama pull llama3:8b
 ollama pull mistral:7b
 ollama pull nomic-embed-text:latest
```
* Access ollama via http://localhost:11434
* Fire up Qdrant  (e.g.  via docker)
`docker run -p 6333:6333 qdrant/qdrant`. 
* Access Qdrant via `http://localhost:6333/dashboard` 
* Create a Qdrant collection named `knowledge-base` configured with vector length of 768.
* NB: Do not forget a persistent docker volume for Qdrant if you want to keep the data when using docker.
* Point the nodes to the respective on premise Qdrant and Ollama runtimes.


### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy RAGing!

## 🔗 Nodes Used

AI Agent, Ollama Chat Model, Simple Memory, n8n Form Trigger, Default Data Loader, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
