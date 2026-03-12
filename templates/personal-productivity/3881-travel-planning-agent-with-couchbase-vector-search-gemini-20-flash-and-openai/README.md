# ⚡ Travel planning agent with Couchbase vector search, Gemini 2.0 Flash and OpenAI

> ⚡ **1,271 views** · ⚡ [Personal Productivity](../)

## Description

&gt; Disclaimer: this workflow template uses the `n8n-nodes-couchbase` community package. Community nodes are unverified and usage of them comes with some [risks](https://docs.n8n.io/integrations/community-nodes/risks/). See [here](https://docs.n8n.io/integrations/community-nodes/installation/gui-install/) for instructions on installing n8n community nodes.

This template is intended for use by those interested in learning more about Agentic AI workflow development, as well as those interested in learning how to use the Couchbase Search Vector Store node for practical applications.

This workflow helps users decide on travel destinations based on descriptions of several points of interest loaded into Couchbase and retrieved using Vector Search.

### How it Works

This template contains two workflows:

1. The Data Ingestion workflow uses the following nodes
    1. Webhook node (to listen for HTTP requests)
    2. OpenAI Embeddings node (to generate embeddings on document insertion)
        1. *Note: You’ll need to configure [OpenAI credentials](https://docs.n8n.io/integrations/builtin/credentials/openai/) for this node*
    3. Couchbase Vector node (configured for document insertion)
    4. Default Data Loader and Recursive Character Text Splitter
2. The Chat Application workflow uses the following nodes
    1. Chat Trigger node
    2. AI Tools Agent node connect to:
        - Gemini (as the Chat Model, for generating responses)
            - *Note: You will have to configure [Gemini credentials](https://docs.n8n.io/integrations/builtin/credentials/googleai/) for this node*
        - Simple Memory (as the Memory, to maintain conversation context)
        - Couchbase Search Vector node (as the Tool, for search)
        - OpenAI Embeddings node (as the Embedding model for the Couchbase Search Vector node, to convert queries to vectors)
            - *Note: You’ll need to configure [OpenAI credentials](https://docs.n8n.io/integrations/builtin/credentials/openai/) for this node*

### Set up

Setting up this workflow is easy and only takes around 10 minutes.

#### Prerequisites

- A Couchbase Cluster running the Search Service, and corresponding database access credentials
    - Be sure the Couchbase cluster allows the incoming IP address for n8n
    - Create a Vector Search Index using [this index definition](https://gist.github.com/ejscribner/6f16343d4b44b1af31e8f344557814b0)
    - Create a bucket (called `travel-agent`), scope (called `vectors`), and collection (called `points-of-interest`) in your Cluster
- OpenAI API Key
- Gemini API Key

#### Steps

1. Configure all necessary credentials (Couchbase, OpenAI, and Gemini)
2. Select your bucket, scope, and collection for each of the Couchbase vector nodes
3. Ingest data, either using the cURL statements found on the sticky note within the workflow, or using [this shell script](https://gist.github.com/ejscribner/355a46a0a383a4878e65e2230b92c6b5) to ingest 6 points of interest
4. Open the chat and test out your travel agent!

### Customization and Next Steps
- This workflow template can be made more robust by enhancing the data model to include more information about each point of interest. For example, the addition of price ranges, ideal seasons to visit, activity types, and accomodation options can help inform the LLM further about each destination, and in turn allow it to provide a more tailored response and be more helpful for travel planning.
- Alternatively, the data model could be entirely re-configured to suit a wide variety of other use cases. This template can serve as a building block for all sorts of AI Agent applications using RAG and is not limited to only travel recommendations.

## 🔗 Nodes Used

Webhook, AI Agent, Embeddings OpenAI, Simple Memory, Recursive Character Text Splitter, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
