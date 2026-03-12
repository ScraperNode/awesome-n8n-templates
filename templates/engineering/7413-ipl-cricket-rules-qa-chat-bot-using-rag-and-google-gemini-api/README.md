# ⚒️ IPL cricket rules Q&A chat bot using RAG and Google Gemini API

> ⚡ **1,176 views** · ⚒️ [Engineering](../)

## Description

## This workflow has 2 Broad Steps
## Step 1 - Vector store creation with set of ipl rules using Google Gemini Embedding. This will we used to drive RAG for model grouding    
## Step 2 - Connecting the vector store with google gemini API model and enabling a chat interface to drive the chat bot

## Step 1
## Load the reference material (run once via the Manual Trigger)
## 1.1 Manual Trigger → HTTP Request downloads the IPL “Match Playing Conditions” PDF. 
## 1.2 Default Data Loader extracts text from the PDF.
   **Type of data is binary
## 1.3 Recursive Character Text Splitter breaks the text into overlapping chunks.
   **This step ensures that the data chunks that are created in vector store have some overlap and hence less chance of hallucination
   **Chunk size and chunk overlap are 2 variables to manage this 
## 1.4 Embeddings Google Gemini (1) converts each chunk to a vector.
   **Connect the model with google gemini model. You will need your own api key for this
   **Make note of the embedding model also since the same embedding model has to be selected in Step 2
## 1.5 Simple Vector Store 1 inserts those vectors into an in-memory store under key
   **Make note of the vector store name since it is same vector store you will have to use in Step 2


## Note: Google gemini API key credential needed
##Using Vector store nodes provided by n8n is the best way to get started to test out the workflow before you switch to more enterprise grade vector store nodes

## Step 2
## 2.1 Chat Trigger to initiate n8n native chat interface
## 2.2 Simple Memory keeps the last 20 chat turns for context. This value can be edited within the node
## 2.3 Simple Vector Store (retrieve-as-tool mode) receives the user’s query embedding, 
## finds the top-10 most relevant chunks stored in step 1, and supplies them as tool output. This will drive RAG
**The name of vector store should match from Step 1, the embedding rule should match step 1
## 2.4 Google Gemini Chat Model is the language model that is used as the llm model
## 2.5 AI Agent orchestrates everything:
** Uses the system prompt (“You are a cricket expert… If info is missing, say ‘Sorry I don’t know’”). to prompt the model
** Has access to the memory (2.2) and the RAG tool (2.3).
** Generates the final response with Google Gemini, strictly limited to the retrieved IPL cricket rules data.






## Note: Google gemini API key credential needed
##Using simple memory store nodes provided by n8n is the best way to get started to test out the workflow before you switch to more enterprise grade vector store nodes

## 🔗 Nodes Used

HTTP Request, AI Agent, Simple Memory, Recursive Character Text Splitter, Simple Vector Store, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
