# 📖 Build a GLPI knowledge base RAG pipeline with Google Gemini and PostgreSQL

> ⚡ **318 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Description
This workflow automates the creation of a Retrieval-Augmented Generation (RAG) pipeline using content from the GLPI Knowledge Base. It retrieves and processes FAQ articles directly via the GLPI API, cleans and vectorizes the content using pgvector in PostgreSQL, and prepares the data for use by LLM-powered AI agents.



## What Problem Does This Solve?
Manually building a RAG pipeline from a GLPI knowledge base requires integrating multiple tools, cleaning data, and managing embeddings—tasks that are often complex and repetitive. This subworkflow simplifies the entire process by automating data retrieval, transformation, and vector storage, allowing you to focus on building intelligent support agents or chatbots powered by your internal documentation.

## Features
Connects to GLPI via API to fetch FAQ articles

Cleans and normalizes content for better embedding quality

Generates vector embeddings using Google Gemini (or another model)

Stores embeddings in a PostgreSQL database with pgvector

Fully modular: easily integrate with any RAG-ready LLM pipeline

## Prerequisites
Before using this subworkflow, make sure you have:

A GLPI instance installed on a Linux server with API access enabled

A PostgreSQL database with the pgvector extension installed

An OpenAI API key (or alternative embedding provider)

n8n instance (self-hosted or cloud)

## Suggested Usage
This subworkflow is intended to be part of a larger AI pipeline. Attach it to a scheduled workflow (e.g. daily sync) or use it in response to updates in your GLPI base. Ideal for internal support bots, IT documentation assistants, and help desk AI agents that rely on up-to-date knowledge.

## 🔗 Nodes Used

AI Agent, Simple Memory, Chat Trigger, Embeddings Google Gemini, Google Gemini Chat Model, Postgres PGVector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
