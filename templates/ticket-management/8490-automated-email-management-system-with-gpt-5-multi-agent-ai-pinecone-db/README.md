# 🎫 📩 Automated email management system with GPT-5, multi-agent AI & Pinecone DB

> ⚡ **553 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Categorise and route emails with GPT 5
This workflow demonstrates how to use AI text classifier to classify incoming emails, and uses a multi-agent architecture to respond for each email category respectively.

## Use cases
Business owners with a lot of incoming emails, or anyone who has huge influx of emails 

## How it Works
Any incoming emails will be read by the text classifier powered by GPT 5, and routed according to the defined categories where respective agents will take next steps. 
1. Workflow is triggered when an email comes in
2. GPT will read email's "subject","from" and "content" to route it accurately to respective designated categories
3. For customer support enquiries, customer support agent will take knowledge from the pinecone vector database about FAQs and policies, reply via gmail, and label the email as "Customer Support"
4. For finance-related queries, finance agent will label email as "Finance" and assess if email is about making payment or receiving from customers. If payment-related, email will be sent to the payments team to take action. If receipts-related, email will be sent to the receivables team to take action. User will be notified via telegram after any email is sent.
5. For sales/leads enquiries, leads agent will label the email as "Sales Opportunities", take knowledge from the pinecone vector database about the business to generate a response and draft into gmail and user will be notified via telegram to review and send. If there is lack of information for agent to generate a response, user will be notified of this via telegram as well. 
6. Any internal team member emails will be routed to the internal agent. The agent will label message as "Internal" and send user a summary of the email message via telegram. 

## How to set up
- Set up Telegram bot via Botfather. See setup instructions [here](https://core.telegram.org/bots/tutorial) 
- Setup OpenAI API for transcription services (Credits required) [here](https://openai.com/index/openai-api/)
- Set up Openrouter account. See details [here](https://openrouter.ai/docs/api-reference/authentication)
- Set up Pinecone database. See details [here](https://docs.pinecone.io/guides/get-started/quickstart)

## Customization Options
Other than Gmail, it is possible to connect to Outlook as well. Other than Pinecone vector database, there are other vector database that should serve the same purpose  eg. supabase, qdrant, weviate

## Requirements
- Gmail account
- Telegram bot
- Pinecone account
- Open router account

## 🔗 Nodes Used

Telegram, Gmail, Gmail Trigger, AI Agent, Embeddings OpenAI, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
