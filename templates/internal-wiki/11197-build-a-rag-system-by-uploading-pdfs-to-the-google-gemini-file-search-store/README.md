# 📖 Build a RAG system by uploading PDFs to the Google Gemini File Search Store

> ⚡ **3,434 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This workflow implements a **Retrieval-Augmented Generation (RAG)** system using **Google Gemini's File Search API**. It allows users to upload files to a dedicated search store and then ask questions about their content in a chat interface. 

The system automatically retrieves relevant information from the uploaded files to provide accurate, context-aware answers.

---

### **Key Advantages**

**1. ✅ Seamless Integration of File Upload + AI Context**

The workflow automates the entire lifecycle:

* Upload file
* Index file
* Retrieve content for AI chat

Everything happens inside one n8n automation, without manual actions.

**2. ✅ Automatic Retrieval for Every User Query**

The AI agent is instructed to always query the Search Store.
This ensures:

* More accurate answers
* Context-aware responses
* Ability to reference the exact content the user has uploaded

Perfect for knowledge bases, documentation Q&A, internal tools, and support.

**3. ✅ Reusable Search Store for Multiple Sessions**

Once created, the Search Store can be reused:

* Multiple files can be imported
* Many queries can leverage the same indexed data

A sustainable foundation for scalable RAG operations.

**4. ✅ Visual and Modular Workflow Design**

Thanks to n8n’s node-based flow:

* Each step is clearly separated
* Easy to debug
* Easy to expand (e.g., adding authentication, connecting to a database, notifications, etc.)


**5. ✅ Supports Both Form Submission and Chat Messages**

The workflow is built with two entry points:

* A form for uploading files
* A chat-triggered entry point for RAG conversations

Meaning the system can be embedded in multiple user interfaces.

**6. ✅ Compliant and Efficient Interaction With Gemini APIs**

Your workflow respects the structure of Gemini’s File Search API:

* `/fileSearchStores` (create store)
* `upload` endpoint
* `importFile` endpoint
* `generateContent` with file search tools

This ensures compatibility and future expandability.


**7. ✅ Memory-Aware Conversations**

With the **Memory Buffer** node, the chat session preserves context across messages—providing a more natural and sophisticated conversational experience.

---

### **How it Works**

#### **STEP 1 - Create a new Search Store**

Triggered manually via the *“Execute workflow”* node, this step sends a request to the Gemini API to create a **FileSearch Store**, which acts as a private vector index for your documents.

* The store name is then saved using a *Set* node.
* This store will later be used for file import and retrieval.

#### **STEP 2 - Upload and import a file into the Search Store**

When the form is submitted (through the *Form Trigger*), the workflow:

1. **Accepts a file upload** via the form.
2. **Uploads the file** to Gemini using the `/upload` endpoint.
3. **Imports the uploaded file into the Search Store**, making it searchable.

This step ensures content is stored, chunked, and indexed so the AI model can retrieve relevant sections later.

#### **STEP 3 -  RAG-enabled Chat with Google Gemini**

When a chat message is received:

* The workflow loads the Search Store identifier.
* A *LangChain Agent* is used along with the **Google Gemini Chat Model**.
* The model is configured to **always use the SearchStore tool**, so every user query is enriched by a search inside the indexed files.
* The system retrieves relevant chunks from your documents and uses them as context for generating more accurate responses.

This creates a fully functioning **RAG chatbot** powered by Gemini.

---

### **Set up Steps**

Before activating this workflow, you must complete the following configuration:

1.  **Google Gemini API Credentials:** Ensure you have a valid Google AI Studio API key. This key must be entered in all HTTP Request nodes (`Create Store`, `Upload File`, `Import to Store`, and `SearchStore`).

2.  **Configure the Search Store:**
    *   Manually trigger the "Create Store" node once via the "Execute Workflow" button. This will call the Gemini API to create a new File Search Store and return its resource name (e.g., `fileSearchStores/my-store-12345`).
    *   Copy this resource name and update the **"Get Store"** and **"Get Store1"** Set nodes. Replace the placeholder value `fileSearchStores/my-store-XXX` in both nodes with the actual name of your newly created store.

3.  **Deploy Triggers:** For production use, you should activate the workflow. This will generate public URLs for the **"On form submission"** node (for file uploads) and the **"When chat message received"** node (for the chat interface). These URLs can be embedded in your applications (e.g., a website or dashboard).

Once these steps are complete, the workflow is ready. Users can start uploading files via the form and then ask questions about them in the chat.

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, AI Agent, Simple Memory, n8n Form Trigger, Chat Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
