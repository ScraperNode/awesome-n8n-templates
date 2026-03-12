# 🎬 Generate & optimize brand stories with Ollama LLMs and Google Sheets

> ⚡ **225 views** · 🎬 [Content Creation & Video](../)

## Description

## Overview
This n8n automation template allows marketers, branding teams, and creative professionals to auto-generate, evaluate, and iteratively optimize brand stories using Ollama-hosted LLMs and LangChain agents. Each story is refined until it meets quality criteria and is then saved to Google Sheets for publishing or reuse.

⚠️ Note: This template uses community nodes and requires a self-hosted n8n instance with LangChain and Ollama integrations.

## What the Workflow Does
Receives a chat-triggered brand story request

Guides the user to generate a structured brand story

Evaluates the story for tone, uniqueness, quote inclusion, and emoji removal

Loops through optimization until the story is finalized

Saves the final story to Google Sheets

## Target Users
Startup founders

Brand consultants

Social media strategists

Marketers building bios, taglines, intros

## Step-by-Step Setup Instructions
Setup Prerequisites

Install self-hosted n8n with LangChain and Ollama nodes

Load phi4-mini and qwen3:4b models into your local Ollama instance

Create a Google Sheet with a sheet named BrandStories and columns:

Name

Final Story

Timestamp

Trigger Configuration

Set up the Chat Trigger node (@n8n/n8n-nodes-langchain.chatTrigger) with webhook ID:
fab30ad7-8a5a-4477-be98-1aa43b92b052

Customize Prompts

Update the Brand Storytelling Agent prompt to reflect your brand tone or story format

Optionally refine the Evaluator Agent criteria (e.g., enforce industry tone)

Google Sheets Setup

Use your Google Sheets OAuth2 credentials

Map fields to Name, Final Story, and Timestamp columns

Run the Flow

On new chat input, the system auto-generates a brand story

It loops between Evaluator and Optimizer agents until the output is labeled "Finished"

Final output is saved to your Google Sheet

## Flowchart (mermaid)
mermaid
Copy
Edit
flowchart TD
    A[Chat Trigger: New Message] --&gt; B[Brand Storytelling Agent]
    B --&gt; C[Set Bio Variable]
    C --&gt; D[Evaluator Agent]
    D --&gt; E{Is Output "Finished?"}
    E -- Yes --&gt; F[Save Brand Story to Sheets]
    E -- No --&gt; G[Optimizer Agent]
    G --&gt; H[Update Bio Variable]
    H --&gt; D


## Credentials Used
Google Sheets OAuth2 for storage

Ollama API (local models phi4-mini and qwen3:4b)

## 🔗 Nodes Used

Google Sheets, AI Agent, Ollama Chat Model, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
