# 📊 Draft and manage academic research papers with GPT-4 and Pinecone

> ⚡ **136 views** · 📊 [Market Research & Insights](../)

## Description

## How It Works
This workflow automates academic research processing by routing queries through specialized AI models while maintaining contextual memory. Designed for researchers, faculty, and graduate students, it solves the challenge of managing multiple AI models for different research tasks while preserving conversation context across sessions. The system accepts research queries via webhook, stores them in vector databases for semantic search, and intelligently routes requests to appropriate AI models (OpenAI, Anthropic Claude, or NVIDIA NIM). Results are consolidated, formatted, and delivered via email with full citation tracking. The workflow maintains conversation history using Pinecone vector storage, enabling follow-up queries that reference previous interactions. This eliminates manual model switching, context loss, and repetitive credential management—streamlining research workflows from literature review to hypothesis generation.

## Setup Steps
1. Configure Pinecone credentials  
2. Add OpenAI API key for GPT-4 access and embeddings
3. Set up Anthropic Claude API credentials for advanced reasoning
4. Configure NVIDIA NIM API key for specialized academic models
5. Connect Google Sheets for query logging and result tracking
6. Set Gmail OAuth credentials for automated result delivery
7. Configure webhook URL for query submission endpoint
 
## Prerequisites
Active accounts and API keys for Pinecone, OpenAI 
## Use Cases
Literature review automation with semantic paper discovery. 
## Customization
Modify AI model selection logic for domain-specific optimization.
## Benefits
Reduces research processing time by 60% through automated routing.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
