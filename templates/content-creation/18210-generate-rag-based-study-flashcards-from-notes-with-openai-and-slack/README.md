# 🎬 Generate RAG-based study flashcards from notes with OpenAI and Slack

> ⚡ **26 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow turns submitted study notes into a reviewed flashcard deck by chunking the text, retrieving the most relevant passages with OpenAI embeddings, generating grounded Q&A cards with an OpenAI chat model, and sending the approved deck to a Slack channel.

## How it works
1. Receives notes via a POST webhook (or runs manually for testing) and loads the workflow configuration for chunking, retrieval, flashcard count, and Slack delivery.
2. Splits the notes into overlapping, heading-aware text chunks and pauses to collect the topic or scope you want to generate flashcards for.
3. Requests OpenAI embeddings in one batched call for the topic query and all note chunks.
4. Ranks chunks by cosine similarity, applies a diversity-aware selection (MMR), and assembles the retrieved context for generation.
5. Uses an OpenAI chat model to generate a JSON array of flashcards strictly grounded in the retrieved context.
6. Validates and deduplicates the generated cards, initializes SM-2 scheduling fields, then pauses for human review and final export approval.
7. Sends the approved flashcard deck to the configured Slack channel, or marks the run as discarded if review/export is declined.

## Setup
1. Add OpenAI credentials for both embeddings and chat completion, and confirm the embeddings model and chat model selections match your account access.
2. Add Slack API credentials with permission to post messages, and set the target channel name in the configuration (for example, #flashcards).
3. If using the webhook trigger, copy the webhook URL from n8n and configure your notes source to POST a notesText field (and optionally topic, reviewApproved, and exportApproved) to that endpoint.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
