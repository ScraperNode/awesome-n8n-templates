# ⚒️ Building RAG chatbot for movie recommendations with Qdrant and Open AI

> ⚡ **35,862 views** · ⚒️ [Engineering](../)

## Description

*Create a recommendation tool without hallucinations based on RAG with the Qdrant Vector database. This example is based on movie recommendations on the IMDB-top1000 dataset. You can provide your wishes and your "big no's" to the chatbot, for example: "A movie about wizards but not Harry Potter", and get top-3 recommendations*.

## How it works
- [a video with the full design process](https://www.youtube.com/watch?v=O5mT8M7rqQQ)
- Upload IMDB-1000 dataset to Qdrant Vector Store, embedding movie descriptions with OpenAI;
- Set up an AI agent with a chat. This agent will call a workflow tool to get movie recommendations based on a request written in the chat;
- Create a workflow which calls [Qdrant's Recommendation API](https://qdrant.tech/articles/new-recommendation-api/) to retrieve top-3 recommendations of movies based on your positive and negative examples. 

## Set Up Steps
- You'll need to create a free tier [Qdrant Cluster](https://cloud.qdrant.io/) (Qdrant can also be used locally; it's open-sourced) and set up API credentials
- You'll OpenAI credentials 
- You'll need GitHub credentials & to upload the [IMDB Kaggle dataset](https://www.kaggle.com/datasets/omarhanyy/imdb-top-1000) to your GitHub.

## 🔗 Nodes Used

GitHub, HTTP Request, Execute Workflow Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
