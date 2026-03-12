# ⚒️ Document Q&A system with Voyage-Context-3 embeddings and MongoDB Atlas

> ⚡ **1,267 views** · ⚒️ [Engineering](../)

## Description

**On my never-ending quest to find the best embeddings model, I was intrigued to come across [Voyage-Context-3](https://blog.voyageai.com/2025/07/23/voyage-context-3/) by MongoDB and was excited to give it a try.**

This template implements the embedding model on a Arxiv research paper and stores the results in a Vector store. It was only fitting to use Mongo Atlas from the same parent company. This template also includes a RAG-based Q&A agent which taps into the vector store as a test to helps qualify if the embeddings are any good and if this is even noticeable.


### How it works
This template is split into 2 parts. The first part being the import of a research document which is then chunked and embedded into our vector store. The second part builds a RAG-based Q&A agent to test the vector store retrieval on the research paper.

Read the steps for more details.

### How to use
* First ensure you create a Voyage account [voyageai.com](https://voyageai.com) and a MongoDB database ready.
* Start with Step 1 and fill in the "Set Variables" node and Click on the Manual Execute Trigger. This will take care of populating the vector store with the research paper.
* To use the Q&A agent, it is required to publish the workflow to access the public chat interface. This is because "Respond to Chat" works best in this mode and not in editor mode.
* To use for your own document, edit the "Set Variables" node to define the URL to your own document.
* This embeddings approach should work best on larger documents.

### Requirements
* [Voyageai.com](https://voyageai.com) account for embeddings. You may need to add credit to get a reasonable RPM for this workflow.
* MongoDB database either self-hosted or online at [https://www.mongodb.com](https://www.mongodb.com).
* OpenAI account for RAG Q&A agent.

### Customising this workflow
* The Voyage embeddings work with any vector store so feel free to swap out to other such as Qdrant or Pinecone if you're not a fan of MongoDB Atlas.
* If you're feeling brave, instead of the 3 sequential pages setup I have, why not try the whole document! Fair warning that you may hit memory problems if your instance isn't sufficiently sized - but if it is, go head and share the results!

## 🔗 Nodes Used

HTTP Request, MongoDB, Execute Sub-workflow, Execute Workflow Trigger, OpenAI Chat Model, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
