# 💬 Personalized tour package recommendations with GPT-4o, Pinecone & Lovable UI

> ⚡ **1,591 views** · 💬 [Support Chatbots](../)

## Description

# Personalized Tour Package Recommendations via n8n + Pinecone + Lovable UI
I've created an intelligent Travel Itinerary Planner that connects a Lovable front-end UI with a smart backend powered by n8n, Pinecone, and OpenAI to deliver personalized tour packages based on natural language queries.

![image.png](fileId:1756)

### What It Does
Users type in their travel destination and duration (e.g., "Paris 5 days trip" or "Bali Trip for 7 Days, would love water sports, adventures and trekking included, also some historical monuments") through a Lovable UI.

This triggers a webhook in n8n, which processes the request, searches vectorized tour data in Pinecone, and generates a personalized itinerary using OpenAI’s GPT.

The results are then structured and sent back to the frontend UI for display in an interactive, reorderable format.

### Workflow Architecture
Lovable UI ➝ Webhook ➝ Tour Recommendation Agent ➝ Vector Search ➝ OpenAI Response ➝ Structured Output ➝ Response to Lovable
#### Tools & Components Used
**Webhook**
Acts as the entry point between the Lovable frontend and n8n.

Captures the user query (destination, duration) and forwards it into the workflow.

**OpenAI Chat Model**
To interpret the user query.

To generate a user-friendly, structured tour package from the matched results.

**Simple Memory**
Keeps chat state and context for follow-up queries (extendable for future features like multi-step planning or saved itineraries).

Question Answering with Vector Store
Searches vector embeddings of pre-loaded tour data.

Finds the most relevant tour packages by comparing query embeddings.

**Pinecone Vector Store**
Stores tour packages and activity data in vectorized format.

Enables fast and scalable semantic search across destinations, themes (e.g., "adventure", "cultural"), and duration.

**OpenAI Embeddings**
Embeds all tour and activity documents stored in Pinecone.

Converts input user queries into embedding vectors for semantic search.

**Structured Output Parser**
Parses the final OpenAI-generated response into a consistent, frontend-consumable JSON format.

**Frontend (Lovable UI)**
User types in destination or their travel package needs in the Tour Search.

Lovable queries the n8n workflow.

Displays beautifully structured, editable itineraries.

### How to Set It Up
1. Webhook Setup in n8n
Create a POST webhook node.

Set Webhook URL and connect it with Lovable frontend.

2. Pinecone & Embeddings
Convert your static tour package documents (PDFs, JSON, CSV, etc.) into embeddings using OpenAI.

Store the embeddings in a Pinecone namespace (e.g., kuala-lumpur-3-days).

3. Configure “Answer with Vector Store” Tool
Connect the tool to your Pinecone instance and pass query embedding for matching.

4. Connect to OpenAI Chat
Use the GPT model to process query + context from Pinecone to generate an engaging itinerary description.

Optionally chain a second model to format it into UI-consumable output.

5. Output Parser & Return
Use Structured Output Parser to parse the response and pass it to Respond to Webhook node for UI display.

### Ideal Use Cases
Smart itinerary planning for OTAs or DMCs

Personalized travel recommendations in chatbots or apps

Travel advisors and agents automating package generation

### Benefits
Highly relevant, contextual travel suggestions

Natural query understanding via OpenAI

Seamless frontend-backend integration via Webhook

If you’re building personalized experiences for travelers using AI, give this approach a try!

Let me know if you’d like the JSON for this workflow or help setting up the Pinecone data pipeline.

## 🔗 Nodes Used

Webhook, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Structured Output Parser, Pinecone Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
