# 💬 Build an intelligent Q&A bot with Lookio Knowledge Base and GPT

> ⚡ **422 views** · 💬 [Support Chatbots](../)

## Description

Build a powerful AI chatbot that provides precise answers from your own company's knowledge base. This template provides a smart AI agent that connects to **Lookio**, a platform where you can easily upload your documents (from Notion, Jira, Slack, etc.) to create a dedicated knowledge source.

What makes this agent "smart" is its efficiency. It's configured to handle simple greetings and small talk on its own, only using its powerful (and paid) knowledge retrieval tool when a user asks a genuine question. This cost-saving logic makes it perfect for building production-ready internal helpdesks, customer support bots, or any application where you need accurate, source-based answers.

## **Who is this for?**

* **Customer support teams:** Build internal bots that help agents find answers instantly from your support documentation and knowledge bases.
* **Product & engineering teams:** Create a chatbot that can answer technical questions based on your product documentation or internal wikis.
* **HR departments:** Deploy an internal assistant that can answer employee questions based on company handbooks, policies, and procedures.
* **Any business with a knowledge base:** Provide an interactive, conversational way for employees or customers to access information locked away in your documents.

## **What problem does this solve?**

* **Provides accurate, grounded answers:** Ensures the AI agent's responses are based on your trusted, private documents, not the open internet, which prevents factual errors and "hallucinations."
* **Makes your knowledge accessible:** Transforms your static documents and knowledge bases into an interactive, 24/7 conversational resource.
* **Optimizes for cost and efficiency:** The agent is intelligent enough to handle simple small talk without making unnecessary API calls to your knowledge base, saving you credits and money.
* **Simplifies RAG setup:** Provides a ready-to-use template for a common RAG (Retrieval-Augmented Generation) pattern, with the complexities of document management and retrieval handled by the Lookio platform.


## **How it works**

1.  **First, build your knowledge base in Lookio:** The process starts on the [Lookio](https://www.lookio.app/) platform. You upload your documents (from Notion, Jira, PDFs, etc.) and create an "assistant" which becomes your secure, queryable knowledge base.
2.  **A user asks a question:** The n8n workflow begins when a user sends a message via the **Chat Trigger**.
3.  **The agent makes a decision:** The **AI Knowledge Agent**, guided by its system prompt, analyzes the user's message. If it's a simple greeting like "hi," it will respond directly. If it's a substantive question that requires specific knowledge, it decides to use its "Query knowledge base" tool.
4.  **Query the Lookio knowledge base:** The agent passes the user's question to the **HTTP Request Tool**. This tool securely calls the Lookio API with your specific Assistant ID and API key.
5.  **Deliver the fact-based answer:** Lookio searches your documents, synthesizes a precise answer, and sends it back to the workflow. The n8n agent then presents this answer to the user in the chat interface.

## Architectural Approaches to RAG in n8n with Lookio

From a workflow perspective, integrating **RAG** natively in n8n involves orchestrating multiple nodes for data handling, embedding, and vector searches. This method provides high visibility and control over each step. 

An alternative architectural pattern is to use an external [RAG service like Lookio](https://www.lookio.app/), which consolidates these steps into a single HTTP Request node. This simplifies the workflow's structure by abstracting the multi-stage RAG process into one API endpoint.



## **Setup**

1.  **Set up your Lookio assistant (Prerequisite):** First, go to [Lookio](https://www.lookio.app/), sign up (you get 50 free credits), create an assistant with your documents, and from your settings, copy your **API Key** and **Assistant ID**.
2.  **Configure the Lookio tool:** In the **Query knowledge base** (HTTP Request Tool) node:
    * Replace the `&lt;your-assistant-id&gt;` placeholder with your actual Assistant ID.
    * Replace the `&lt;your-lookio-api-key&gt;` placeholder with your actual API Key.
3.  **Connect your AI model:** In the **OpenAI Chat Model** node, connect your AI provider credentials.
4.  **Activate the workflow.** Your smart knowledge base agent is now live and ready to chat!

## **Taking it further**

* **Adjust retrieval quality:** In the **Query knowledge base** node, you can change the `query_mode` from `flash` (fastest) to `deep` for higher quality but slightly slower answers, depending on your needs.
* **Add more tools:** Enhance your agent by giving it other tools, like a web search for when the internal knowledge base doesn't have an answer, or a calculator for performing computations.
* **Deploy it anywhere:** Swap the **Chat Trigger** for a **Slack** or **Discord** trigger to deploy your agent right where your team works.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
