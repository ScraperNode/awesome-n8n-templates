# 🎬 Generate AI-powered markdown posts from workflow JSON with Gemini & LlamaIndex

> ⚡ **244 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This AI-powered workflow transforms n8n workflow JSON files into publication-ready, SEO-optimized markdown posts for the n8n community. Simply upload your workflow's JSON, and let Google Gemini 2.5 Pro, guided by a LlamaIndex-powered knowledge base of best practices, automatically generate compelling content. 

## Why Use This Workflow?

**Time Savings:** Reduces the time to create a detailed workflow post from over an hour of manual writing to under 2 minutes.

**Cost Reduction:** Eliminates the need for separate AI content subscriptions or outsourcing content creation tasks.

**Error Prevention:** Enforces content quality and structural consistency by using a knowledge base of n8n's official guidelines, minimizing formatting errors.


## Ideal For

- **n8n Workflow Creators:** To quickly document and share their creations on the community platform without the tedious, time-consuming writing process.
- **Developer Advocates:** To standardize and accelerate the production of technical tutorials and workflow showcases.
- **Content & Marketing Teams:** To streamline the content pipeline for n8n-related blog posts, tutorials, and community engagement initiatives.

## How It Works

1. **Trigger:** The process starts when you upload an n8n workflow JSON file via a simple web form.
2. **Data Extraction:** The workflow automatically extracts the JSON content from the uploaded file.
3. **Intelligence Layer:** An advanced AI agent, powered by Google Gemini 2.5 Pro, analyzes the structure, nodes, and metadata of your workflow.
4. **Knowledge Retrieval:** The agent consults a specialized, in-memory knowledge base built from n8n's content guidelines. This knowledge base is created by parsing documents with LlamaIndex and refined with a Cohere Reranker for maximum accuracy.
5. **Content Generation:** The AI agent synthesizes the technical details from your JSON with the best practices from the knowledge base to write a complete, benefit-driven markdown post.
6. **Output & Delivery:** The final, polished markdown content is generated as the workflow's output, ready to be copied and pasted into the n8n community platform.

## Setup Guide

### Prerequisites

| Requirement | Type | Purpose |
|-------------|------|---------|
| [n8n instance](https://n8n.partnerlinks.io/khmuhtadin) | Essential | Workflow execution platform |
| [Google Gemini API Key](https://ai.google.dev/) | Essential | Powers the core AI content generation |
| [LlamaIndex Cloud API Key](https://cloud.llamaindex.ai/) | Essential | Parses documents for the knowledge base |
| [Cohere API Key](https://cohere.com/) | Optional | Improves knowledge base search results |
| [Google Drive Account](https://www.google.com/drive/) | Optional | For automatically updating the knowledge base from a Google Doc |

### Installation Steps

1. Import the JSON file to your [n8n instance](https://n8n.partnerlinks.io/khmuhtadin).
2. **Configure credentials:**
   - **Google Gemini:** In the "GEmini 2.5 pro" node, create and add your Google Gemini API credential.
   - **LlamaIndex:** In the three HTTP Request nodes named "Parse Document...", "Monitor Document...", and "Retrieve Parsed...", create an HTTP Header Auth credential. The header name is `Authorization` and the value is `Bearer YOUR_LLAMA_INDEX_API_KEY`.
   - **Cohere:** (Optional) In the "Reranker Cohere" node, create and add your Cohere API credential.
   - **Google Drive:** (Optional) If you plan to auto-update the knowledge base, configure Google Drive OAuth2 credentials for the "Knowledge Base Updated Trigger" and "Download Knowledge Document" nodes.
3. **Update environment-specific values:**
   - To use the knowledge base auto-update feature, go to the "Knowledge Base Updated Trigger" node and select the Google Drive file containing your content guidelines.
4. **Customize settings:**
   - The primary system prompt in the "n8ncreator" agent node can be modified to adjust the tone, style, or structure of the generated content.
5. **Test execution:**
   - Run the workflow manually and use the form to upload a sample n8n workflow JSON file to verify that all connections work correctly.

## Technical Details

### Core Nodes

| Node | Purpose | Key Configuration |
|------|---------|-------------------|
| **Form Trigger** | Initiates the workflow via a file upload. | Set the "Input Json Workflow" field to required. |
| **Langchain Agent** | Orchestrates the entire content creation process. | The system prompt contains all instructions for the AI. |
| **ChatGoogleGemini** | Provides the core generative AI capabilities. | Select your Gemini model of choice (e.g., gemini-2.5-pro). |
| **VectorStoreInMemory** | Acts as the agent's knowledge base tool. | Configured to use embeddings from a Google Gemini model. |
| **HTTPRequest** | Interacts with the LlamaIndex API to parse documents. | Set up with LlamaIndex API endpoint and authentication. |



## Customization Options

**Basic Adjustments:**
- **Change AI Model:** Replace the `ChatGoogleGemini` node with another LLM node (e.g., OpenAI, Anthropic) to use a different provider.
- **Adjust System Prompt:** Modify the prompt in the "n8ncreator" node to tailor the output for different platforms (e.g., blog, internal wiki) or change the writing style.

**Advanced Enhancements:**
- **Automated Publishing:** Connect the output of the "n8ncreator" node to a `Ghost`, `WordPress`, or `GitHub` node to automatically publish the generated post.
- **Add Web Search:** Equip the Langchain Agent with a web search tool to allow it to fetch live information about new n8n nodes or services.
- **Batch Processing:** Replace the `Form Trigger` with a `Read Binary Files` node to process an entire folder of workflow JSON files in a single run.

## Performance & Optimization

| Metric | Expected Performance | Optimization Tips |
|--------|---------------------|-------------------|
| Execution time | ~1 minute per run | Largely dependent on the Gemini API response time. |
| API calls | 1 LLM call per post | Knowledge base updates trigger LlamaIndex/Google calls separately. |
| Error handling | Built-in retry logic for document parsing | Add an error workflow path after the "n8ncreator" node to handle AI generation failures. |

## Troubleshooting

**Common Issues:**

| Problem | Cause | Solution |
|---------|-------|----------|
| AI output is generic or incomplete | The input JSON file is invalid or lacks key information (e.g., no node names). | Ensure you are uploading a valid, exported n8n workflow JSON. Verify the workflow has been saved with descriptive node names. |
| LlamaIndex parsing fails | The LlamaIndex API key is incorrect or the source document is inaccessible. | Double-check your LlamaIndex API credential. Ensure the Google Doc sharing settings allow access. |
| Credential Error | API keys are missing or incorrect for Gemini, LlamaIndex, or Cohere. | Go to the specified nodes and verify that the correct credentials have been created and selected. |


**Created by:** [khaisa Studio](https://khaisa.studio)
**Category:** AI
**Tags:** AI, Content Generation, Google Gemini, LlamaIndex, Automation
**Need custom workflows?** [Contact us](https://khaisa.studio/pages/contact)

**Connect with the creator:**
[Portfolio](https://khmuhtadin.com) • [Workflows](https://khaisa.studio/products/) • [LinkedIn](https://www.linkedin.com/in/khmuhtadin/) • [Medium](https://medium.com/@khaisastudio) • [Threads](https://www.threads.com/@khmuhtadin)

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Drive Trigger, AI Agent, Simple Vector Store, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
