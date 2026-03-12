# 📖 Build a knowledge-based WhatsApp assistant with RAG, Gemini, Supabase & Google Docs

> ⚡ **239 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

#### Workflow Execution Link:
[Watch Execution Video](https://youtu.be/NUWeQywOMTw?si=7slubwmqYqs2m6sh)


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

### **Step 2: Create Knowledge Base**

Create a new Google Doc with the complete knowledge base about your business and replace the document ID in the "Content for the Training" node.

### **Step 3: Get Together AI API Key**

Get a Together AI API key and paste it into the "Embedding Uploaded document" node and the "Embed User Message" node.

### **Step 4: Setup Meta App for WhatsApp Business Cloud**

1.  Go to `https://business.facebook.com/latest/settings/apps`, create an app, and select the use case "Connect with customer through WhatsApp". Copy the **Client ID** and **Client Secret** and add them to the first node.

2.  Go to that newly created META app in the app dashboard, click on the use case, and then click on "customise...". Go to the API setup, add your number, and also generate an **access token** on that page. Now paste the **access token** and the **WhatsApp Business Account ID** into the send message node.

# Part A: Document Preparation (One-Time Setup)

## 1. When clicking ‘Execute workflow’  
- **Type:** `manualTrigger`  
- **Purpose:** Manually starts the workflow for preparing training content.  

## 2. Content for the Training  
- **Type:** `googleDocs`  
- **Purpose:** Fetches the document content that will be used for training.  

## 3. Splitting into Chunks  
- **Type:** `code`  
- **Purpose:** Breaks the document text into smaller pieces for processing.  

## 4. Embedding Uploaded document  
- **Type:** `httpRequest`  
- **Purpose:** Converts each chunk into embeddings via an external API.  

## 5. Save the embedding in DB  
- **Type:** `supabase`  
- **Purpose:** Stores both the chunks and embeddings in the database for future use.  
---

# Part B: Chat Interaction (Realtime Flow)

## 1. WhatsApp Trigger  
- **Type:** `whatsAppTrigger`  
- **Purpose:** Starts the workflow whenever a user sends a WhatsApp message.  

## 2. If  
- **Type:** `if`  
- **Purpose:** Checks whether the incoming WhatsApp message contains text.  

## 3. Embend User Message  
- **Type:** `httpRequest`  
- **Purpose:** Converts the user’s message into an embedding.  

## 4. Search Embeddings  
- **Type:** `httpRequest`  
- **Purpose:** Finds the top matching document chunks from the database using embeddings.  

## 5. Aggregate  
- **Type:** `aggregate`  
- **Purpose:** Merges retrieved chunks into one context block.  

## 6. AI Agent  
- **Type:** `langchain agent`  
- **Purpose:** Builds the prompt combining user’s message and context.  

## 7. Google Gemini Chat Model  
- **Type:** `lmChatGoogleGemini`  
- **Purpose:** Generates the AI response based on the prepared prompt.  

## 8. Send message  
- **Type:** `whatsApp`  
- **Purpose:** Sends the AI’s reply back to the user on WhatsApp.

## 🔗 Nodes Used

HTTP Request, Google Docs, Supabase, WhatsApp Business Cloud, AI Agent, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
