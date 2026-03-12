# 📖 Chat with Postgresql database

> ⚡ **85,588 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Who is this template for?

This workflow template is designed for any professionals seeking relevent data from database using natural language.

## How it works

- Each time user ask's question using the n8n chat interface, the workflow runs.
- Then the message is processed by AI Agent using relevent tools - `Execute SQL Query`, `Get DB Schema and Tables List` and `Get Table Definition`, if required. Agent uses these tool to form and run sql query which are necessary to answer the questions.
- Once AI Agent has the data, it uses it to form answer and returns it to the user.

## Set up instructions

Complete the Set up credentials step when you first open the workflow. You'll need a Postgresql Credentials, and OpenAI api key.

Template was created in n8n `v1.77.0`

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
