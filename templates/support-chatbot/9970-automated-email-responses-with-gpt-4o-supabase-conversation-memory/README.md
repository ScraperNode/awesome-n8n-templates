# 💬 Automated email responses with GPT-4O & Supabase conversation memory

> ⚡ **562 views** · 💬 [Support Chatbots](../)

## Description

### This n8n workflow lets you delegate inbox management to an AI agent. It automatically replies to emails when a suitable response is found in your knowledge base. If no match is found, the message is forwarded to a human for review. This ensures all replies follow company guidelines and prevent misinformation or misrepresentation.

## Use Case
Ideal for businesses that receive frequent inquiries about products or services and want to automate responses, freeing up time to focus on core operations.

## How It Works
- Polls your inbox for new incoming emails  
- Cleans HTML to reduce token usage and filters spam  
- Categorizes emails for better organization  
- Retrieves conversation history from Supabase (if available) to give the AI proper context  
- Uses the AI agent to query your FAQ database for relevant answers  
- Replies automatically if a suitable answer is found  
- Sends a placeholder email and forwards to a human if no accurate answer exists  
- Ingests all processed emails into Supabase to retain conversation history and improve future AI accuracy  

## Customization
You can connect any email provider or LLM model. The workflow can also be expanded to let the AI schedule meetings, answer availability questions, or handle other inbox tasks.

If you'd like help tailoring this workflow to your business, feel free to reach out:  
[Upwork Profile](https://www.upwork.com/freelancers/~01b9cfafda64624983)

## 🔗 Nodes Used

HTTP Request, Postgres, Execute Sub-workflow, Microsoft Outlook, Supabase, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
