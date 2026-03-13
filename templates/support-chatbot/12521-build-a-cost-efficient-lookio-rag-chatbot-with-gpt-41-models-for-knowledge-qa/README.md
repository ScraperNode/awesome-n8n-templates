# 💬 Build a cost-efficient Lookio RAG chatbot with GPT-4.1 models for knowledge Q&A

> ⚡ **13 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This template provides a high-performance, cost-optimized alternative to standard AI Agents for building RAG (Retrieval-Augmented Generation) chatbots. 

Instead of relying on a single expensive model to decide every action, this workflow uses a modular "Routing & Specialized Steps" architecture. 

It delivers results up to 50% faster and 3x more cost-efficiently by only involving heavy-duty models when deep internal knowledge is actually required.

By leveraging **Lookio** as the core RAG platform, you can connect your own documentation (PDFs, Docs, Webpages) to a chat interface without the complexity of managing vector databases or custom chunking strategies manually.

*Learn more about breaking down agents for efficiency in this [YouTube deep dive](https://www.youtube.com/watch?v=BHdJFnx2wrc).* 

## 👥 Who is this for?

*   **Customer Support Teams:** Build an automated response system that answers queries based on official product guides or internal FAQs.
*   **Efficiency-Focused Developers:** Scale AI operations without ballooning API costs by offloading simple queries to smaller models.
*   **Marketing & Content Teams:** Provide instant access to brand guidelines or past content repositories for internal research.

## 💡 What problem does this solve?

*   **Eliminates Token Waste:** Traditional agents send long system prompts to expensive models even for basic greetings like "Hello." This workflow routes those to a "nano" model, saving significant costs.
*   **Increases Reliability:** By breaking down the "Agent" logic into discrete steps (Categorize -&gt; Query Prep -&gt; Retrieval -&gt; Response), you gain more control over the output guidelines at every stage.
*   **Scalable Knowledge Retrieval:** Uses **Lookio** to handle the heavy lifting of RAG, ensuring sourced and factual answers based on your private data rather than general AI training.

## ⚙️ How it works

1.  **Memory & Intent Routing:** The workflow fetches past messages and uses a specialized **Text Classifier** (powered by a small model) to determine if the user is asking a knowledge-based question or just chatting.
2.  **Path A (Simple Response):** If it's a greeting, a small model handles the reply instantly.
3.  **Path B (Knowledge Retrieval):** If information is needed, a specialized LLM step crafts a clean search query specifically for Lookio.
4.  **RAG Execution:** The **Lookio API** retrieves the exact insights needed from your connected knowledge documents.
5.  **Final Generation:** A large model synthesizes the specific Lookio results and the conversation history into a final, fact-based response.

## What is Lookio, the RAG platform?

[Lookio](https://www.lookio.app/) is a business-focused AI platform designed for automated knowledge retrieval. 

Unlike casual AI tools, Lookio is "API-first," meaning it’s built specifically to integrate with tools like n8n. 

It handles the entire RAG pipeline—from document ingestion to vector storage and logical retrieval—allowing you to focus on building the logic of your automation rather than the infrastructure of your AI. 

Lookio offers various query modes (Eco, Flash, Deep) so you can prioritize speed or depth depending on your budget.


## 🛠️ Setup

1.  **Set up Lookio:** Create an account at [Lookio.app](https://www.lookio.app/), upload your documents, and create an assistant.
2.  **API Key:** In the **RAG via Lookio** node, replace `&lt;YOUR-API-KEY&gt;` in the header and paste your `assistant_id` in the body.
3.  **AI Credentials:** Add your OpenAI (or preferred provider) credentials to the **Very small model**, **Mini model**, and **Large model** nodes.
4.  **Activate:** Turn the workflow on. You can now chat with your knowledge base via the n8n chat interface.

## 🚀 Taking it further

*   **Add More Branches:** Expand the **Intent router** to include paths for specific actions, like extracting emails for lead generation or checking order statuses via a database lookup.
*   **Formatting Tweaks:** Adjust the system prompts in the **Write the final response** node to match your brand's specific tone (e.g., "Explain it like I'm five" or "Legal professional tone").
*   **Deployment:** Connect this backend to your website or a Slack channel for real-time team usage.

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, OpenAI Chat Model, Simple Memory, Chat Memory Manager, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
