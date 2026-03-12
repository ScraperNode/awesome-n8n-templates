# 🔍 Build an advanced multi-query RAG system with Supabase and GPT-5

> ⚡ **1,989 views** · 🔍 [AI RAG & Knowledge Retrieval](../)

## Description

Go beyond basic Retrieval-Augmented Generation (RAG) with this advanced template. While a simple RAG setup can answer straightforward questions, it often fails when faced with complex queries and can be polluted by irrelevant information. This workflow introduces a sophisticated architecture that empowers your AI agent to think and act like a true research assistant.

By decoupling the agent from the knowledge base with a smart sub-workflow, this template enables multi-query decomposition, relevance-based filtering, and an intermediate reasoning step. The result is an AI agent that can handle complex questions, filter out noise, and synthesize high-quality, comprehensive answers based on your data in Supabase.

## **Who is this for?**

* **AI and automation developers:** Anyone building sophisticated Q&A bots, internal knowledge base assistants, or complex research agents.
* **n8n power users:** Users looking to push the boundaries of AI agents in n8n by implementing production-ready, robust architectural patterns.
* **Anyone building a RAG system:** This provides a superior architectural pattern that overcomes the common limitations of basic RAG setups, leading to dramatically better performance.

## **What problem does this solve?**

* **Handles complex questions:** A standard RAG agent sends one query and gets one set of results. This agent is designed to break down a complex question like "How does natural selection work at the molecular, organismal, and population levels?" into multiple, targeted sub-queries, ensuring all facets of the question are answered.
* **Prevents low-quality answers:** A simple RAG agent can be fed irrelevant information if the semantic search returns low-quality matches. This workflow includes a crucial **relevance filtering** step, discarding any data chunks that fall below a set similarity score, ensuring the agent only reasons with high-quality context.
* **Improves answer quality and coherence:** By introducing a dedicated **"Think" tool**, the agent has a private scratchpad to synthesize the information it has gathered from multiple queries. This intermediate reasoning step allows it to connect the dots and structure a more comprehensive and logical final answer.
* **Gives you more control and flexibility:** By using a sub-workflow to handle data retrieval, you can add any custom logic you need (like filtering, formatting, or even calling other APIs) without complicating the main agent's design.

## **How it works**

This template consists of a main agent workflow and a smart sub-workflow that handles knowledge retrieval.

1.  **Multi-query decomposition:** When you ask the **AI Agent** a complex question, its system prompt instructs it to first break it down into an array of multiple, simpler sub-queries.
2.  **Decoupling with a sub-workflow:** The agent doesn't have direct access to the vector store. Instead, it calls a **"Query knowledge base"** tool, which is a sub-workflow. It sends the entire array of sub-queries to this sub-workflow in a single tool call.
3.  **Iterative retrieval & filtering (in the sub-workflow):** The sub-workflow loops through each sub-query. For each one, it queries your **Supabase Vector Store**. It then checks the similarity score of the returned data chunks and uses a **Filter** node to discard any that are not highly relevant (the default is a score &gt; 0.4).
4.  **Intermediate reasoning step:** The sub-workflow returns all the high-quality, filtered information to the main agent. The agent is then instructed to use its **Think** tool to review this information, synthesize the key points, and structure a plan for its final, comprehensive answer.

## **Setup**

1.  **Connect your accounts:**
    * **Supabase:** In the **sub-workflow** ("RAG sub-workflow"), connect your Supabase account to the **Supabase Vector Store** node and select your table.
    * **OpenAI:** Connect your OpenAI account in two places: to the **Embeddings OpenAI** node (in the sub-workflow) and to the **OpenAI Chat Model** node (in the main workflow).
2.  **Customize the agent's purpose:** In the main workflow, edit the **AI Agent's system prompt**. Change the context from a "biology course" to whatever your knowledge base is about.
3.  **Adjust the relevance filter:** In the sub-workflow, you can change the `0.4` threshold in the **Filter** node to be more or less strict about the quality of the information you want the agent to use.
4.  **Activate the workflow** and start asking complex questions!


## **Taking it further**

* **Integrate different vector stores:** The logic is decoupled. You can easily swap the Supabase Vector Store node in the sub-workflow with a Pinecone, Weaviate, or any other vector store node without changing the main agent's logic.
* **Add more tools:** Give the main agent other capabilities, like a web search a way to interact with your tech stack. The agent can then decide whether to use its internal knowledge base, search the web, or both, to answer a question.
* **Better prompting:** You could further work on the Agent's system prompt to increase its capacity to provide high-quality answers by being even better at leveraging the provided chunks.

## 🔗 Nodes Used

Execute Workflow Trigger, Filter, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
