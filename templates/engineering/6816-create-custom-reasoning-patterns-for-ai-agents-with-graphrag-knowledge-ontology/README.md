# ⚒️ Create custom reasoning patterns for AI agents with GraphRAG & knowledge ontology

> ⚡ **1,303 views** · ⚒️ [Engineering](../)

## Description

## Teach your AI agent HOW to think, not WHAT to think

[![Video tutorial](https://img.youtube.com/vi/jhqBb3nuyAY/sddefault.jpg)](https://www.youtube.com/watch?v=jhqBb3nuyAY)

This workflow demonstrates how you can build an AI agent in n8n that uses the reasoning logic you define. So an LLM learns a way of thinking, which you can then apply to multiple problems: 

- Make an **AI chatbot that knows how to convince anybody** using the "Getting to Yes" method
- Build an **LLM workflow that uses Ray Dalio's principles** to spot investment opportunities
- Create an AI agent crew of **interdisciplinary thinkers**: e.g. a specialist in psychology who gives an advice on education programmes.

![InfraNodus knowledge graph](https://infranodus.com/images/front/blog/reasoning-knowledge-graph-infranodus.png)


## How it works
This template uses the n8n AI agent node as an orchestrating agent that has access to a certain reasoning logic defined by an [InfraNodus knowledge graph](https://infranodus.com).

This graph contains a list of reasoning rules (ontology), which is extracted to provide an advice that is relevant to the original prompt. It uses GraphRAG under the hood to traverse the parts of the graph relevant to the query.

This advice and the reasoning logic extracted is then used by the AI agent to generate a response that is relevant to the user's query but that uses the reasoning logic provided through the graph.

Here's a description step by step:

- The user submits a question using the AI chatbot (n8n interface, in this case, a web form that can be embedded to any website, or a webhook that can be connected to a Telegram / WhatsApp bot)
- The AI agent node accesses the Reasoning Logic HTTP InfraNodus nodes. The description of AI agent and the description of the reasoning InfraNodus node provides the agent with an understanding of how to rephrase the original question to retrieve relevant reasoning logic.
-  The request is sent to the InfraNodus node. It provides a response that contains the reasoning logic needed to answer the question.
- This reasoning logic is then sent back to an LLM along with the original query to produce the response.


InfraNodus uses **[GraphRAG](https://infranodus.com/docs/graph-rag-knowledge-graph)** under the hood: 
- convert user query into graph
- find the overlap with the reasoning graph (using n=1 or more hops to include more relations)
- use similarity search to get additional parts of the graph
- generate a response based on this intersection as well as the context provided
- provide information about the underlying structure

## How to use

You need an [InfraNodus account](https://infranodus.com/use-case/ai-knowledge-graphs) to use this workflow. 

- Create an InfraNodus account
- Get the API key at [https://infranodus.com/api-access](https://infranodus.com/api-access) and create a Bearer authorization key for the InfraNodus HTTP nodes.
- Create a separate knowledge graph for the reasoning logic
- Use the [AI ontology creator](https://infranodus.com/import/ai-ontologies) to generate an ontology for a certain topic or text using AI. Then augment it with your own data. See our [help article on creating ontologies](https://support.noduslabs.com/hc/en-us/articles/18301655686172-Generate-Knowledge-Graphs-and-Ontologies-in-Plain-Text) for detailed instructions
- For each graph, go to the workflow, paste the name of the graph into the request JSON `body` `name` field.
- Change the system prompt in the AI agent node to reflect the nature of your reasoning logic. For instance, if it's an expert in interactions, you specify that, if it's a psychology expert, you need to specify that as well.
- Change the description of the reasoning node (HTTP tool). Use the InfraNodus `summary` and `Project Notes` &gt; `RAG prompt` buttons to generate a description for the reasoning logic, which you can then reuse in your workflow.
- add the LLM key to the OpenAI node (or to the model of your choice) and launch the workflow

## Requirements

- An [InfraNodus](https://infranodus.com/use-case/ai-knowledge-graphs) account and API key
- An OpenAI (or any other LLM) API key


## Customizing this workflow

You can use this same workflow with a Telegram bot, so you can interact with it using Telegram. There are many more customizations available. 

Check out the **complete guide** at [https://support.noduslabs.com/hc/en-us/articles/21429518472988-Using-Knowledge-Graphs-as-Reasoning-Experts](https://support.noduslabs.com/hc/en-us/articles/21429518472988-Using-Knowledge-Graphs-as-Reasoning-Experts)

Also check out the **video tutorial** with a demo:

[![Video tutorial](https://img.youtube.com/vi/jhqBb3nuyAY/sddefault.jpg)](https://www.youtube.com/watch?v=jhqBb3nuyAY)

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
