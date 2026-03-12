# 💬 Build an AI chat agent for your Zendesk knowledge base with GPT-4.1 and InfraNodus GraphRAG

> ⚡ **57 views** · 💬 [Support Chatbots](../)

## Description

## Build a Better AI Chatbot for Your Zendesk Knowledge Portal

### Simple setup, no vector database needed. Uses GraphRAG to enhance user's prompts and provide high-quality and relevant up-to-date responses from your Zendesk knowledge base. 

#### Can be embedded on your Zendesk portal, also accesible via a URL. Can be customized and branded in your style. ###

See example at [support.noduslabs.com](https://support.noduslabs.com) or a screenshot below:

![Embeddable AI chat widget from Nodus Labs support portal](https://support.noduslabs.com/hc/article_attachments/24080339347484)


Also, compare it to the original Zendesk AI chatbot available at our other website [https://infranodus.com](https://infranodus.com) — you will see that the quality of responses in this custom chatbot is much better than in the native Zendesk one, plus you save subscription because you won't need to activate their chat option, which is $25 per agent.

---

### Workflow Overview

In this workflow, we use the n8n AI Agent Node with a custom prompt that:

1) First consults an "expert" graph from the [InfraNodus GraphRAG system](https://infranodus.com/docs/graph-rag-knowledge-graph) using the official [InfraNodus GraphRAG node](https://n8n.io/integrations/infranodus-graph-rag/) that will extract a reasoning ontology and a general context about your product from the graph that you create manually or automatically as [described on our support portal](https://support.noduslabs.com/hc/en-us/articles/24079266183196-Building-Expert-Ontology-for-InfraNodus-GraphRAG-n8n-Expert-Node). 
2) The augmented user prompt is converted by AI agent node in a Zendesk search query that retrieves the most relevant content using their [search API](https://developer.zendesk.com/api-reference/help_center/help-center-api/search/) via n8n HTTP node.
3. Both the results from the graph and the search results are combined and shown to the user


![InfraNodus Graph](https://support.noduslabs.com/hc/article_attachments/24080217545116)

## How it works

1. Receives a request from a user via a webhook that connects to the custom [n8n chat widget](https://n8n-chat-widget.com).
2. The request goes to the AI Agent node from n8n with a custom prompt (provided in the workflow) that orchestrates the following procedure:
3. Sends the request to the knowledge graph in your InfraNodus account using the official [InfraNodus GraphRAG node](https://n8n.io/integrations/infranodus-graph-rag/) that contains a reasoning ontology represented as a knowledge graph based on your Zendesk knowledge support portal. Read more on [how to generate this ontology here](https://support.noduslabs.com/hc/en-us/articles/24079266183196-Building-Expert-Ontology-for-InfraNodus-GraphRAG-n8n-Expert-Node). 
4. Based on the results from InfraNodus, it reformulates the original prompt to include the reasoning logic as well as provide a fuller context to the model. 
5. Sends the request to the [Zendesk search API](https://developer.zendesk.com/api-reference/help_center/help-center-api/search/) using the n8n custom HTTP node with an enhanced search query to retrieve high-quality results.
6. Combines Zendesk search results with InfraNodus ontology to generate a final response to the user.
7. Sends the response back to the webhook, which is then picked up by the [n8n chat widget](https://n8n-chat-widget.com) that is shown to the user wherever the widget is embedded (e.g. on your own support portal). 


## How to use

• Get an **[InfraNodus API key](https://infranodus.com/api-access)** and add it into InfraNodus GraphRAG node.

• Edit the **InfraNodus Graph node** to provide the **name of the graph** that you will be using as ontology (you need to **[create it in InfraNodus](https://support.noduslabs.com/hc/en-us/articles/24079266183196-Building-Expert-Ontology-for-InfraNodus-GraphRAG-n8n-Expert-Node) first**.

• Edit the **AI Agent (Support Agent) prompt** to modify our custom instructions for your particular use case (do not change it too much as it works quite well and tells the agent what it should do and in what sequence). 

• Add the **API key for your Zendesk account**. In order to get it, go to your  support portal Admin &gt; Apps & Integrations &gt; API Tokens. Usually it's located at [https://noduslabs.zendesk.com/admin/apps-integrations/apis/api-tokens](https://noduslabs.zendesk.com/admin/apps-integrations/apis/api-tokens) where instead of `noduslabs` you need to put the name of your support portal. 

**Note:** the official n8n Zendesk node does not have an endpoint to search and extract articles from support portal, so we use the custom HTTP node, but you can still connect to it via the Zendesk API key you have installed in your n8n. 

## Support & Tutorials

If you wan to create your own reasoning ontology graphs, please, refer to this [article on generating your own knowledge graph ontologies](https://support.noduslabs.com/hc/en-us/articles/18301655686172-Generate-Knowledge-Graphs-and-Ontologies-in-Plain-Text).

Specifically for this use case: [Building ontology for your n8n AI chat bot](https://support.noduslabs.com/hc/en-us/articles/24079266183196-Building-Expert-Ontology-for-InfraNodus-GraphRAG-n8n-Expert-Node).

You may also be interested to watch this video that explains the logic of this approach in detail:

[![Video tutorial](https://img.youtube.com/vi/aYoPSEmGJbc/sddefault.jpg)](https://www.youtube.com/watch?v=ueq0RU1HxSo)

Our support article for this workflow with real-life example: [Building an embeddable AI chatbot agent for your Zendesk knowledge portal](https://support.noduslabs.com/hc/en-us/articles/24080152180252-Building-an-Embeddable-AI-Chat-for-Zendesk-Knowledge-Support-Portal). 

**To get support and help, contact us via [support.noduslabs.com](https://support.noduslabs.com)**

**Learn more about InfraNodus at [www.infranodus.com](https://www.infranodus.com)**

## 🔗 Nodes Used

Webhook, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
