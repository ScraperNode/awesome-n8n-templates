# 🎬 Create fact-based articles from knowledge sources with Lookio and OpenAI GPT

> ⚡ **326 views** · 🎬 [Content Creation & Video](../)

## Description

Move beyond generic AI-generated content and create articles that are high-quality, factually reliable, and aligned with your unique expertise.
This template orchestrates a sophisticated "research-first" content creation process. Instead of simply asking an AI to write an article from scratch, it first uses an AI planner to break your topic down into logical sub-questions.

It then queries a **Lookio** assistant—which you've connected to your own trusted knowledge base of **uploaded documents**—to build a comprehensive research brief. Only then is this fact-checked brief handed to a powerful AI writer to compose the final article, complete with source links. This is the ultimate workflow for scaling expert-level content creation.

## Who is this for?

* **Content marketers & SEO specialists:** Scale the creation of authoritative, expert-level blog posts that are grounded in factual, source-based information.
* **Technical writers & subject matter experts:** Transform your complex internal documentation into accessible public-facing articles, tutorials, and guides.
* **Marketing agencies:** Quickly generate high-quality, well-researched drafts for clients by connecting the workflow to their provided brand and product materials.

## What problem does this solve?

* **Reduces AI "hallucinations":** By grounding the entire writing process in your own trusted knowledge base, the AI generates content based on facts you provide, not on potentially incorrect information from its general training data.
* **Ensures comprehensive topic coverage:** The initial AI-powered "topic breakdown" step acts like an expert outliner, ensuring the final article is well-structured and covers all key sub-topics.
* **Automates source citation:** The workflow is designed to preserve and integrate source URLs from your knowledge base directly into the final article as hyperlinks, boosting credibility and saving you manual effort.
* **Scales expert content creation:** It effectively mimics the workflow of a human expert (outline, research, consolidate, write) but in an automated, scalable, and incredibly fast way.

## **How it works**

This workflow follows a sophisticated, multi-step process to ensure the highest quality output:

1.  **Decomposition:** You provide an article title and guidelines via the built-in form. An initial AI call then acts as a "planner," breaking down the main topic into an array of 5-8 logical sub-questions.
2.  **Fact-based research (RAG):** The workflow loops through each of these sub-questions and queries your **Lookio assistant**. This assistant, which you have pre-configured by uploading your own documents, finds the relevant information and source links for each point.
3.  **Consolidation:** All the retrieved question-and-answer pairs are compiled into a single, comprehensive research brief.
4.  **Final article generation:** This complete, fact-checked brief is handed to a final, powerful AI writer (e.g., GPT-4o). Its instructions are clear: write a high-quality article using *only* the provided information and integrate the source links as hyperlinks where appropriate.

## Building your own RAG pipeline VS using Lookio or alternative tools

Building a **RAG system** natively within n8n offers deep customization, but it requires managing a toolchain for data processing, text chunking, and retrieval optimization. 

An alternative is to use a managed service like Lookio, which provides **RAG functionality through an API**. This approach abstracts the backend infrastructure for document ingestion and querying, trading the granular control of a native build for a reduction in development and maintenance tasks.


## Implementing the template

### **1. Set up your Lookio assistant (Prerequisite):**
Lookio is a platform for building intelligent assistants that leverage your organization's documents as a dedicated knowledge base.

* First, [sign up at Lookio](https://www.lookio.app/). You'll get 50 free credits to get started.
* Upload the documents you want to use as your knowledge base.
* Create a new assistant and then generate an API key.
* Copy your **Assistant ID** and your **API Key** for the next step.

### **2. Configure the workflow:**
* Connect your **AI provider** (e.g., OpenAI) credentials to the two Language Model nodes.
* In the **Query Lookio Assistant** (HTTP Request) node, paste your **Assistant ID** in the body and add your Lookio **API Key** for authentication (we recommend using a Bearer Token credential).

### **3. Activate the workflow:**
* Toggle the workflow to "Active" and use the built-in form to generate your first fact-checked article!

## **Taking it further**

* **Automate publishing:** Connect the final **Article result** node to a **Webflow** or **WordPress** node to automatically create a draft post in your CMS.
* **Generate content in bulk:** Replace the **Form Trigger** with an **Airtable** or **Google Sheet** trigger to automatically generate a whole batch of articles from your content calendar.
* **Customize the writing style:** Tweak the system prompt in the final **New content - Generate the AI output** node to match your brand's specific tone of voice, add SEO keywords, or include specific calls-to-action.

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
