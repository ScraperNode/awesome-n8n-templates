# 📖 Build a knowledge base chatbot with Jotform, RAG Supabase, Together AI & Gemini

> ⚡ **1,887 views** · 📖 [Internal Wiki & Knowledge Base](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

Youtube Video: [https://youtu.be/dEtV7OYuMFQ?si=fOAlZWz4aDuFFovH](https://youtu.be/dEtV7OYuMFQ?si=fOAlZWz4aDuFFovH)


# Workflow Pre-requisites

### **Step 1: Supabase Setup**

First, replace the keys in the "Save the embedding in DB" & "Search Embeddings" nodes with your new Supabase keys. After that, run the following code snippets in your Supabase SQL editor:

1.  Create the table to store chunks and embeddings:
    ```sql
    CREATE TABLE public."RAG"
    (
        id bigserial PRIMARY KEY,
        chunk text NULL,
        embeddings vector(1024) NULL
    )
    TABLESPACE pg_default;
    ```

2.  Create a function to match embeddings:
    ```sql
    DROP FUNCTION IF EXISTS public.matchembeddings1(integer, vector);

    CREATE OR REPLACE FUNCTION public.matchembeddings1(
        match_count integer,
        query_embedding vector
    )
    RETURNS TABLE (
        chunk text,
        similarity float
    )
    LANGUAGE plpgsql
    AS $$
    BEGIN
        RETURN QUERY
        SELECT
            R.chunk,
            1 - (R.embeddings &lt;=&gt; query_embedding) AS similarity
        FROM public."RAG" AS R
        ORDER BY R.embeddings &lt;=&gt; query_embedding
        LIMIT match_count;
    END;
    $$;
    ```

### **Step 2: Create Jotform with these fields**
1. Your full name
2. email address
3. Upload PDF Document [field where you upload the knowledgebase in PDF]


### **Step 3: Get Together AI API Key**

Get a Together AI API key and paste it into the "Embedding Uploaded document" node and the "Embed User Message" node.




### Here is a detailed, node-by-node explanation of the n8n workflow, which is divided into two main parts.

***

### Part 1: Ingesting Knowledge from a PDF

This first sequence of nodes runs when you submit a PDF through a Jotform. Its purpose is to read the document, process its content, and save it in a specialized database for the AI to use later.

1.  **`JotForm Trigger`**
    * **Type:** Trigger
    * **What it does:** This node starts the entire workflow. It's configured to listen for new submissions on a **specific Jotform**. When someone uploads a file and submits the form, this node activates and passes the submission data to the next step.

2.  **`Grab New knowledgebase`**
    * **Type:** HTTP Request
    * **What it does:** The initial trigger from Jotform only contains basic information. This node makes a follow-up call to the Jotform API using the `submissionID` to get the complete details of that submission, including the specific link to the uploaded file.

3.  **`Grab the uploaded knowledgebase file link`**
    * **Type:** HTTP Request
    * **What it does:** Using the file link obtained from the previous node, this step downloads the actual PDF file. It's set to receive the response as a file, not as text.

4.  **`Extract Text from PDF File`**
    * **Type:** Extract From File
    * **What it does:** This utility node takes the binary PDF file downloaded in the previous step and extracts all the readable text content from it. The output is a single block of plain text.

5.  **`Splitting into Chunks`**
    * **Type:** Code
    * **What it does:** This node runs a small JavaScript snippet. It takes the large block of text from the PDF and chops it into smaller, more manageable pieces, or **"chunks,"** each of a **predefined length**. This is critical because AI models work more effectively with smaller, focused pieces of text.

6.  **`Embedding Uploaded document`**
    * **Type:** HTTP Request
    * **What it does:** This is a key AI step. It sends each individual text chunk to an embeddings API. A **specified AI model** converts the semantic meaning of the chunk into a numerical list called an **embedding** or vector. This vector is like a mathematical fingerprint of the text's meaning.

7.  **`Save the embedding in DB`**
    * **Type:** Supabase
    * **What it does:** This node connects to your Supabase database. For every chunk, it creates a new row in a **specified table** and stores two important pieces of information: the original text chunk and its corresponding numerical embedding (its "fingerprint") from the previous step.

***

### Part 2: Answering Questions via Chat

This second sequence starts when a user sends a message. It uses the knowledge stored in the database to find relevant information and generate an intelligent answer.

1.  **`When chat message received`**
    * **Type:** Chat Trigger
    * **What it does:** This node starts the second part of the workflow. It listens for any incoming message from a user in a connected chat application.

2.  **`Embend User Message`**
    * **Type:** HTTP Request
    * **What it does:** This node takes the user's question and sends it to the *exact same* embeddings API and model used in Part 1. This converts the question's meaning into the same kind of numerical vector or "fingerprint."

3.  **`Search Embeddings`**
    * **Type:** HTTP Request
    * **What it does:** This is the "retrieval" step. It calls a **custom database function** in Supabase. It sends the question's embedding to this function and asks it to search the knowledge base table to find a **specified number of top text chunks** whose embeddings are mathematically most similar to the question's embedding.

4.  **`Aggregate`**
    * **Type:** Aggregate
    * **What it does:** The search from the previous step returns multiple separate items. This utility node simply bundles those items into a single, combined piece of data. This makes it easier to feed all the context into the final AI model at once.

5.  **`AI Agent` & `Google Gemini Chat Model`**
    * **Type:** LangChain Agent & AI Model
    * **What it does:** This is the "generation" step where the final answer is created.
        * The **`AI Agent`** node is given a detailed set of instructions (a prompt).
        * The prompt tells the **`Google Gemini Chat Model`** to act as a professional support agent.
        * Crucially, it provides the AI with the user's original question and the **aggregated text chunks** from the `Aggregate` node as its **only source of truth**.
        * It then instructs the AI to formulate an answer based *only* on that provided context, format it for a **specific chat style**, and to say "I don't know" if the answer cannot be found in the chunks. This prevents the AI from making things up.

## 🔗 Nodes Used

HTTP Request, Jotform Trigger, Supabase, AI Agent, Extract from File, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
