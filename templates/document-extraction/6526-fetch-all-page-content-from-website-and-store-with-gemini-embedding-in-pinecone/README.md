# 🔬 Fetch all page content from website and store with Gemini embedding in Pinecone

> ⚡ **379 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Fetch and Extract all Website Pages Content and Store in Pinecone Vector Database as KnowledgeBase with Google Gemini Embeddings
 
Use cases are many: Populate a custom chatbot's knowledge base, create a powerful search index for your website, or build a comprehensive repository of information for internal tools!

**Good to know**

* At time of writing, Pinecone and Gemini API costs apply based on usage. Refer to their respective pricing pages for updated information.
* The models used in this workflow are subject to regional availability. If you encounter a "model not found" error, the service may not be available in your country or region.

**How it works**

1.  **Input Collection:** The workflow starts by collecting URLs, either from a user-provided sitemap or a list of individual page URLs.
2.  **URL Processing:** It then fetches sitemap XML (if provided), converts it to JSON, extracts all page URLs, and merges them with any manually entered URLs. All duplicate URLs are removed to ensure efficiency.
3.  **Content Fetching:** The workflow iterates through the unique URLs, sending HTTP requests to download the HTML content of each page. A small delay is added between requests to be courteous to the website servers.
4.  **Content Extraction:** The HTML content is then processed to extract the main textual content from the page's body, excluding images, and cleaning the text for better quality.
5.  **Embedding Generation:** Gemini's embedding model converts the extracted text into vector embeddings, capturing the semantic meaning of the content.
6.  **Pinecone Storage:** Finally, these vector embeddings, along with their associated content, are uploaded to your specified Pinecone index, creating a searchable knowledge base. Existing data in the namespace is cleared before new data is inserted.

**How to use**

* The workflow is triggered by a form where you input your sitemap or page URLs.
* You can monitor the execution flow within n8n to see pages being processed and uploaded.
* The `Wait 5 sec` node can be adjusted if you need to fetch content more rapidly or slowly, depending on the website's rate limits.

**Requirements**

* **Google Gemini API key** for text embeddings.
* **Pinecone API key** for vector database storage.

**Customising this workflow**

This workflow can be adapted for various purposes. Consider:

* Adding more sophisticated HTML parsing logic to extract specific sections of a webpage.
* For building a Web Support Chatbot
* Integrating with other services to trigger updates to the knowledge base (e.g., automatically updating when new blog posts are published).
* Connecting the Pinecone knowledge base to a chatbot or search application for enhanced functionalities.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Pinecone Vector Store, Default Data Loader, Embeddings Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
