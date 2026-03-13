# 💬 Build a website-powered customer support chatbot with Decodo, Pinecone and Gemini

> ⚡ **202 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

**Categories:** Business Automation, Customer Support, AI, Knowledge Management

This comprehensive workflow enables businesses to build and deploy a custom-trained AI Chatbot in minutes. By combining a sophisticated data scraping engine with a RAG-based (Retrieval-Augmented Generation) chat interface, it allows you to transform website content into a high-performance support agent. Powered by **Google Gemini** and **Pinecone**, this system ensures your chatbot provides accurate, real-time answers based exclusively on your business data.

### **Benefits**

* **Instant Knowledge Sync** - Automatically crawls sitemaps and URLs to keep your AI up-to-date with your latest website content.
* **Embeddable Anywhere** - Features a ready-to-use chat trigger that can be integrated into the bottom-right of any website via a simple script.
* **High-Fidelity Retrieval** - Uses vector embeddings to ensure the AI "searches" your documentation before answering, reducing hallucinations.
* **Smart Conversational Memory** - Equipped with a 10-message window buffer, allowing the bot to handle complex follow-up questions naturally.
* **Cost-Efficient Scaling** - Leverages Gemini’s efficient API and Pinecone’s high-speed indexing to manage thousands of customer queries at a low cost.

### **How It Works**

1. **Dual-Path Ingestion:** The process begins with an n8n Form where you provide a sitemap or individual URLs. The workflow automatically handles XML parsing and URL cleaning to prepare a list of pages for processing.
2. **Clean Content Extraction:** Using **Decodo**, the workflow fetches the HTML of each page and uses a specialized extraction node to strip away code, ads, and navigation, leaving only the high-value text content. **SignUp using:** [dashboard.decodo.com/register?referral_code=55543bbdb96ffd8cf45c2605147641ee017e7900](dashboard.decodo.com/register?referral_code=55543bbdb96ffd8cf45c2605147641ee017e7900).
3. **Vectorization & Storage:** The cleaned text is passed to the **Gemini Embedding** model, which converts the information into 3076-dimensional vectors. These are stored in a **Pinecone** "supportbot" index for instant retrieval.
4. **RAG-Powered Chat Agent:** When a user sends a message through the chat widget, an **AI Agent** takes over. It uses the user's query to search the Pinecone database for relevant business facts.
5. **Intelligent Response Generation:** The AI Agent passes the retrieved facts and the current chat history to **Google Gemini**, which generates a polite, accurate, and contextually relevant response for the user.

### **Requirements**

* **n8n Instance:** A self-hosted or cloud instance of n8n.
* **Google Gemini API Key:** For text embeddings and chat generation.
* **Pinecone Account:** An API key and a "supportbot" index to store your knowledge base.
* **Decodo Access:** For high-quality website content extraction.

### **How to Use**

1. **Initialize the Knowledge Base:** Use the Form Trigger to input your website URL or Sitemap. Run the ingestion flow to populate your Pinecone index.
2. **Configure Credentials:** Authenticate your Google Gemini and Pinecone accounts within n8n.
3. **Deploy the Chatbot:** Enable the Chat Trigger node. Use the provided webhook URL to connect the backend to your website's frontend chat widget.
4. **Test & Refine:** Interact with the bot to ensure it retrieves the correct data, and update your knowledge base by re-running the ingestion flow whenever your website content changes.

### **Business Use Cases**

* **Customer Support Teams** - Automate answers to 80% of common FAQs using your existing documentation.
* **E-commerce Sites** - Help customers find product details, shipping policies, and return information instantly.
* **SaaS Providers** - Build an interactive technical documentation assistant to help users navigate your software.
* **Marketing Agencies** - Offer "AI-powered site search" as an add-on service for client websites.

### **Efficiency Gains**

* **Reduce Ticket Volume** by providing instant self-service options.
* **Eliminate Manual Data Entry** by scraping content directly from the live website.
* **Improve UX** with 24/7 availability and zero wait times for customers.

**Difficulty Level:** Intermediate

**Estimated Setup Time:** 30 min

**Monthly Operating Cost:** Low (variable based on AI usage and Pinecone tier)

## 🔗 Nodes Used

HTTP Request, AI Agent, Simple Memory, n8n Form Trigger, Pinecone Vector Store, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
