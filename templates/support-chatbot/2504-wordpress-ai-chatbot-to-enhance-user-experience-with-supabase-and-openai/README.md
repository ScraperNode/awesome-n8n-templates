# 💬 WordPress - AI chatbot to enhance user experience - with Supabase and OpenAI

> ⚡ **12,887 views** · 💬 [Support Chatbots](../)

## Description

This is the **first version of a template for a RAG/GenAI App** using **WordPress content**.

As **creating, sharing, and improving templates** brings me joy 😄, feel free to reach out on [LinkedIn](https://www.linkedin.com/in/nicolas-aknin/) if you have **any ideas to enhance this template**!

# How It Works

This template includes three workflows:

- **Workflow 1**: Generate embeddings for your WordPress posts and pages, then store them in the Supabase vector store.
- **Workflow 2**: Handle upserts for WordPress content when edits are made.
- **Workflow 3**: Enable chat functionality by performing Retrieval-Augmented Generation (RAG) on the embedded documents.

## Why use this template?

This template can be applied to various use cases:

- Build a **GenAI application** that requires embedded documents from your website's content.
- Embed or create a **chatbot** page on your website to **enhance user experience** as visitors search for information.
- Gain **insights** into the **types of questions** visitors are asking on your website.
- Simplify **content management** by asking the AI for related content ideas or checking if **similar content already exists**. Useful for internal linking.

## Prerequisites
- Access to **Supabase** for storing embeddings.
- Basic knowledge of **Postgres** and **pgvector**.
- A **WordPress website** with content to be embedded.
- An **OpenAI API key**
- Ensure that your n8n workflow, Supabase instance, and WordPress website are set to the **same timezone** (or use GMT) for consistency.


## Workflow 1 : Initial Embedding

This workflow retrieves your WordPress pages and posts, generates embeddings from the content, and stores them in Supabase using `pgvector`.

### Step 0 : Create Supabase tables

**Nodes :** 
- `Postgres - Create Documents Table`: This table is structured to support **OpenAI embedding** models with **1536 dimensions**
- `Postgres - Create Workflow Execution History Table`

These two nodes create tables in Supabase:

- The **documents** table, which stores embeddings of your website content.
- The **n8n_website_embedding_histories** table, which logs workflow executions for efficient management of upserts. This table tracks the workflow execution ID and execution timestamp.

### Step 1 : Retrieve and Merge WordPress Pages and Posts

**Nodes :**
- `WordPress - Get All Posts`
- `WordPress - Get All Pages`
- `Merge WordPress Posts and Pages`

These three nodes retrieve **all content and metadata from your posts and pages** and merge them. 
**Important: ** **Apply filters** to avoid generating embeddings for all site content.

### Step 2 : Set Fields, Apply Filter, and Transform HTML to Markdown

**Nodes :**
- `Set Fields`
- `Filter - Only Published & Unprotected Content`
- `HTML to Markdown`

These three nodes prepare the content for embedding by:

1. Setting up the necessary fields for content embeddings and document metadata.
2. Filtering to include only **published** and **unprotected** content (`protected=false`), ensuring private or unpublished content is **excluded from your GenAI application**.
3. Converting HTML to Markdown, which enhances **performance and relevance** in Retrieval-Augmented Generation (RAG) by optimizing document embeddings.

### Step 3: Generate Embeddings, Store Documents in Supabase, and Log Workflow Execution

**Nodes**:
- `Supabase Vector Store`
  - **Sub-nodes**:
    - `Embeddings OpenAI`
    - `Default Data Loader`
    - `Token Splitter`
    - `Aggregate`
- `Supabase - Store Workflow Execution`

This step involves generating embeddings for the content and storing it in Supabase, followed by logging the workflow execution details.

1. **Generate Embeddings**: The `Embeddings OpenAI` node generates vector embeddings for the content.
2. **Load Data**: The `Default Data Loader` prepares the content for embedding storage. The metadata stored includes the content title, publication date, modification date, URL, and **ID**, which is **essential for managing upserts**. 


⚠️ **Important Note :** Be cautious **not to store any sensitive information in metadata** fields, as this information will be **accessible to the AI and may appear in user-facing answers**.

3. **Token Management**: The `Token Splitter` ensures that content is segmented into manageable sizes to comply with token limits.
4. **Aggregate**: Ensure the last node is run only for 1 item.
5. **Store Execution Details**: The `Supabase - Store Workflow Execution` node saves the workflow execution ID and timestamp, enabling tracking of when each content update was processed.

This setup **ensures that content embeddings are stored in Supabase for use in downstream applications**, while workflow execution details are logged for consistency and version tracking.

This workflow should be **executed only once for the initial embedding**. 
**Workflow 2**, described below, will **handle all future upserts**, ensuring that new or updated content is embedded as needed.

## Workflow 2: Handle document upserts

**Content on a website follows a lifecycle**—it may be **updated**, **new content** might be added, or, at times, content may be **deleted**. 

In this **first version of the template**, the upsert workflow manages:
- **Newly added content**
- **Updated content**

### Step 1: Retrieve WordPress Content with Regular CRON

**Nodes**:
- `CRON - Every 30 Seconds`
- `Postgres - Get Last Workflow Execution`
- `WordPress - Get Posts Modified After Last Workflow Execution`
- `WordPress - Get Pages Modified After Last Workflow Execution`
- `Merge Retrieved WordPress Posts and Pages`

A **CRON job** (set to run **every 30 seconds** in this template, but you can **adjust it** as needed) initiates the workflow. A **Postgres SQL** query on the `n8n_website_embedding_histories` table retrieves the **timestamp** of the **latest workflow execution**.

Next, the HTTP nodes use the **WordPress API** (**update the example URL** in the template with your own website’s URL and add your **WordPress credentials**) to request **all posts and pages modified after the last workflow execution date**. This process captures both **newly added** and **recently updated content**. The retrieved content is then merged for further processing.

### Step 2 : Set fields, use filter

**Nodes :**
- `Set fields2`
- `Filter - Only published and unprotected content`

The same that Step 2 in **Workflow 1**, except that HTML To Makrdown is used in further Step.

### Step 3: Loop Over Items to Identify and Route Updated vs. Newly Added Content


**Here, I initially aimed to use 'update documents' instead of the delete + insert approach, but encountered challenges, especially with updating both content and metadata columns together. Any help or suggestions are welcome! :)**


**Nodes**:
- `Loop Over Items`
- `Postgres - Filter on Existing Documents`
- `Switch`

  - **Route `existing_documents`** (if documents with matching IDs are found in metadata):
    - `Supabase - Delete Row if Document Exists`: Removes any existing entry for the document, preparing for an update.
    - `Aggregate2`: Used to aggregate documents on Supabase with ID to ensure that `Set Fields3` is executed only once for each WordPress content to **avoid duplicate execution**.
    - `Set Fields3`: Sets fields required for embedding updates.
    
  - **Route `new_documents`** (if no matching documents are found with IDs in metadata):
    - `Set Fields4`: Configures fields for embedding newly added content.


In this step, a loop processes **each item**, directing it based on **whether the document already exists**. The **`Aggregate2`** node acts as a control to ensure `Set Fields3` runs only once per WordPress content, effectively **avoiding duplicate execution** and optimizing the update process.


### Step 4 : HTML to Markdown, Supabase Vector Store, Update Workflow Execution Table

The **HTML to Markdown** node mirrors **Workflow 1 - Step 2**. Refer to that section for a detailed explanation on how HTML content is converted to Markdown for improved embedding performance and relevance.

Following this, the content is **stored in the Supabase vector store** to manage embeddings efficiently. Lastly, the **workflow execution table is updated. These nodes mirros the **Workflow 1 - Step 3 nodes**.

## Workflow 3 : An example of GenAI App with Wordpress Content : Chatbot to be embed on your website

### Step 1: Retrieve Supabase Documents, Aggregate, and Set Fields After a Chat Input

**Nodes**:
- `When Chat Message Received`
- `Supabase - Retrieve Documents from Chat Input`
- `Embeddings OpenAI1`
- `Aggregate Documents`
- `Set Fields`


When a user sends a message to the chat, the prompt (user question) is sent to the Supabase vector store retriever. The RPC function `match_documents` (created in **Workflow 1 - Step 0**) retrieves documents relevant to the user’s question, enabling a more accurate and relevant response.

In this step:
1. The **Supabase vector store retriever** fetches documents that match the user’s question, including metadata.
2. The **Aggregate Documents** node consolidates the retrieved data.
3. Finally, **Set Fields** organizes the data to create a more readable input for the AI agent.

**Directly using the AI agent** without these nodes would prevent metadata from being sent to the language model (LLM), but **metadata is essential for enhancing the context** and accuracy of the AI’s response. By including metadata, the **AI’s answers can reference relevant document details, making the interaction more informative**.

### Step 2: Call AI Agent, Respond to User, and Store Chat Conversation History

**Nodes**:
- **AI Agent**
  - Sub-nodes:
    - `OpenAI Chat Model`
    - `Postgres Chat Memories`
- **Respond to Webhook**

This step involves calling the AI agent to generate an answer, responding to the user, and storing the conversation history.  The model used is **gpt4-o-mini**, chosen for its cost-efficiency.

## 🔗 Nodes Used

HTTP Request, Postgres, Wordpress, Supabase, Markdown, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
