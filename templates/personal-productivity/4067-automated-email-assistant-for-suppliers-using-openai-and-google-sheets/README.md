# ⚡ Automated email assistant for suppliers using OpenAI and Google Sheets

> ⚡ **1,523 views** · ⚡ [Personal Productivity](../)

## Description

## Automated Email Assistant for Busy Professionals

This assistant is designed for people who don't have time to write and send emails to suppliers. With just one request, it drafts and sends clear, professional messages automatically.

## How It Works
The user makes a request (e.g., “Send an email to my fruit supplier asking for a quote on 1 crate of mangoes.”).

## Workflow:

1. The AI agent searches for the supplier in a Google Sheets database.

2. It automatically drafts the email using OpenAI (with the tone and style you define).
 
3. It sends the email using your Gmail account connected through n8n.
 
## This assistant uses:

- Google Sheets to manage your suppliers (name and email).

- OpenAI to generate clear, natural messages.
  
- MCP (client-server logic) to handle request processing.
  
- Gmail as the sending channel for automated emails.
  

## Setup Instructions

1. Create a Google Sheets document with the supplier name and email, like this:

|Supplier name|Email|
|-|-|
|Proveedor de frutas Alvarez|fruteriaalvarez@alvarez.com|
 
2. Connect your Google Sheets and Gmail accounts within n8n.
 
3. Add your OpenAI API key.

Test the automation by chatting with the integrated assistant.
It will generate and send the email automatically to the indicated supplier.

## Requirements
- OpenAI API key to generate email content.
- Gmail account connected via OAuth2.
- Google Sheets document with your supplier database.
- n8n instance (cloud or self-hosted).

## Customization

Adjust the OpenAI prompt to make the email tone more formal, casual, or technical.

Add custom fields to your supplier sheet (location, notes, special conditions).

Replace Google Sheets with a real database like Supabase or PostgreSQL for greater scalability.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger, Think Tool, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
