# ⚡ Travel planning assistant with MongoDB Atlas, Gemini LLM and vector search

> ⚡ **3,578 views** · ⚡ [Personal Productivity](../)

## Description

Building agentic AI workflows often requires multiple moving parts: memory management, document retrieval, vector similarity, and orchestration. 

Until now, these pieces had to be custom-wired. 

But with the new native n8n nodes for MongoDB Atlas, we reduce that overhead dramatically.


With just a few clicks:

- Store and recall long-term memory from MongoDB

- Query vector embeddings stored in Atlas Vector Search

- Use these results in your LLM chains and automation logic

In this example we present an ingestion and AI Agent flows that focus around Travel Planning. The different interest points that we want the agent to know about can be ingested into the vector store.

The AI Agent will use the vector store tool to get relevant context about those points of interest if it needs to. 



### Prerequisites
- [MongoDB Atlas project and Cluster](https://www.mongodb.com/docs/atlas/tutorial/create-new-cluster/)
- OpenAI Valid API Key for embeddings (can be other provider)
- Gemini API Key for the LLM (can be other provider)

### How it works:

There are 2 main flows. 

1. One is ingesting flow:
- Gets a document from a webhook and use MongoDB Vector Atlas to embed the document `title` and `description` into `points_of_interest` collection.
- Embeddings are stored in a field named `embedding`
- Embeddings used are OpenAI's but it can be any type of supported embedders.

2. Second flow is an AI Agent node with Chat Memory Stored in MongoDB Atlas and a Vector Search node as a tool:
- **Chat Message Trigger**: Chatting with the AI Agent will trigger the conversation store in the MongoDB Chat Memory node.
- When data is necessary like a location search or details it will go to the "Vector Search" tool.
- **Vector Search Tool** - uses Atlas Vector Search index created on the `points_of_interest` collection:

```
// index name : "vector_index"
// If you change an embedding provider make sure the numDimensions correspond to the model.
{
  "fields": [
    {
      "type": "vector",
      "path": "embedding",
      "numDimensions": 1536,
      "similarity": "cosine"
    }
  ]
}
```

**Additional Resources**
- [MongoDB Atlas Vector Search](https://www.mongodb.com/docs/atlas/atlas-vector-search/tutorials/vector-search-quick-start/?utm=n8n.io)
- [n8n Atlas Vector Search docs](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoremongodbatlas?utm=n8n.io)

## 🔗 Nodes Used

Webhook, AI Agent, Embeddings OpenAI, Recursive Character Text Splitter, Default Data Loader, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
