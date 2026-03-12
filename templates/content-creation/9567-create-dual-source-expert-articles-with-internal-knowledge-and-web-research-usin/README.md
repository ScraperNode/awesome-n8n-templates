# 🎬 Create dual-source expert articles with internal knowledge and web research using Lookio, Linkup, and GPT-5

> ⚡ **290 views** · 🎬 [Content Creation & Video](../)

## Description

Create truly authoritative articles that blend your unique, internal expertise with the latest, most relevant information from the web. This template orchestrates an advanced "hybrid research" content process that delivers unparalleled depth and credibility.

Instead of a simple prompt, this workflow first uses an AI planner to deconstruct your topic into key questions. Then, for each question, it performs a **dual-source query**: it searches your trusted **Lookio** knowledge base for internal facts and simultaneously uses **Linkup** to pull fresh insights and sources from the live web. This comprehensive "super-brief" is then handed to a powerful AI writer to compose a high-quality article, complete with citations from both your own documents and external web pages.

### **👥 Who is this for?**

* **Content Marketers & SEO Specialists:** Scale the creation of authoritative content that is both grounded in your brand's facts and enriched with timely, external sources for maximum credibility.
* **Technical Writers & Subject Matter Experts:** Transform complex internal documentation into rich, public-facing articles by supplementing your core knowledge with external context and recent data.
* **Marketing Agencies:** Deliver exceptional, well-researched articles for clients by connecting the workflow to their internal materials (via Lookio) and the broader web (via Linkup) in one automated process.

---

### **💡 What problem does this solve?**

* **The Best of Both Worlds:** Combines the factual reliability of your own knowledge base with the timeliness and breadth of a web search, resulting in articles with unmatched depth.
* **Minimizes AI "Hallucinations":** Grounds the AI writer in two distinct sets of factual, source-based information—your internal documents and credible web pages—dramatically reducing the risk of invented facts.
* **Maximizes Credibility:** Automates the inclusion of source links from **both** your internal knowledge base and external websites, boosting reader trust and demonstrating thorough research.
* **Ensures Comprehensive Coverage:** The AI-powered "topic breakdown" ensures a logical structure, while the dual-source research for each point guarantees no stone is left unturned.
* **Fully Automates an Expert Workflow:** Mimics the entire process of an expert research team (outline, internal review, external research, consolidation, writing) in a single, scalable workflow.

---

### **⚙️ How it works**

This workflow orchestrates a sophisticated, multi-step "Plan, Dual-Research, Write" process:

1.  **Plan (Decomposition):** You provide an article title and guidelines via the built-in form. An initial AI call acts as a "planner," breaking down the main topic into an array of logical sub-questions.
2.  **Dual Research (Knowledge Base + Web Search):** The workflow loops through each sub-question and performs two research actions in parallel:
    * It queries your **Lookio assistant** to retrieve relevant information and source links from your uploaded documents.
    * It queries **Linkup** to perform a targeted web search, gathering up-to-date insights and their source URLs.
3.  **Consolidate (Brief Creation):** All the retrieved information—internal and external—is compiled into a single, comprehensive research brief for each sub-question.
4.  **Write (Final Generation):** The complete, source-rich brief is handed to a final, powerful AI writer (e.g., GPT-5). Its instructions are clear: write a high-quality article based *only* on the provided research and integrate all source links as hyperlinks.

---

### **🛠️ Setup**

1.  **Set up your Lookio assistant:**
    * Sign up at [Lookio](https://www.lookio.app/), upload your documents to create a knowledge base, and create a new assistant.
    * In the **Query Lookio Assistant** node, paste your **Assistant ID** in the body and add your Lookio **API Key** for authentication (we recommend a Bearer Token credential).
2.  **Connect your Linkup account:**
    * In the **Query Linkup for AI web-search** node, add your Linkup API key for authentication (we recommend a Bearer Token credential). Linkup's free plan is very generous.
3.  **Connect your AI provider:**
    * Connect your AI provider (e.g., OpenAI) credentials to the two Language Model nodes.
4.  **Activate the workflow:**
    * Toggle the workflow to "Active" and use the built-in form to generate your first hybrid-research article!

---

### **🚀 Taking it further**

* **Automate Publishing:** Connect the final **Article result** node to a **Webflow** or **WordPress** node to automatically create draft posts in your CMS.
* **Generate Content in Bulk:** Replace the **Form Trigger** with an **Airtable** or **Google Sheet** trigger to generate a batch of articles from your content calendar.
* **Customize the Writing Style:** Tweak the system prompt in the final **New content - Generate the AI output** node to match your brand's tone of voice, prioritize internal vs. external sources, or add SEO keywords.

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
