# 💬 Answer customer support emails in Gmail with Google Docs and Google Gemini

> ⚡ **5 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
Answers customer emails in Gmail using only a knowledge base you keep in Google Docs. When the answer isn't there, it asks you, turns your answer into a reply, and sends you a ready-to-paste entry so it can answer that question next time.

## How it works
1. Checks your Gmail inbox every minute for unread emails in the Primary category while excluding your own messages and common automated senders.
2. Extracts key email fields (sender, subject, body, thread/message IDs) and classifies the message with Google Gemini to continue only for genuine customer emails.
3. Retrieves your Google Docs knowledge base and asks Google Gemini to decide whether it can answer using only that content, returning a structured draft reply plus an escalation reason and summary.
4. If the email can be answered, either replies immediately or saves a draft reply in the same Gmail thread based on your configured reply mode.
5. If the email cannot be answered, sends you a Gmail message that includes context and waits up to three days for your factual response.
6. Uses Google Gemini to turn your response into a customer-ready reply and optionally emails you a suggested knowledge base Q&A entry to paste into your Google Doc.

## Setup
1. Connect Gmail credentials for reading inbox messages, sending replies, creating drafts, marking messages as read, and sending you escalation emails.
2. Connect Google Docs credentials and replace the knowledge_base_url with your Google Doc link.
3. Connect Google Gemini (Google AI) credentials for the classifier and drafting steps.
4. Update owner_email and set reply_mode to draft or send in the Support Settings step before activating the workflow.

## Requirements
- Gmail account (the inbox where your customers write to you)
- Google Docs account with your knowledge base in a Google Doc
- Google Gemini API key (the free tier works), or any other chat model supported by n8n
- An n8n instance reachable from the internet, so the Respond button in the escalation emails can open the response form

## Customization
- Start with reply_mode set to draft and switch to send once you trust the replies.
- Use the AI model you prefer: replace the three Gemini model nodes with OpenAI, Anthropic or any other chat model.
- Update your knowledge base Doc at any time. Changes apply to the next email, with no changes to the workflow.
- Change how long the workflow waits for your answer (3 days by default) in the Ask You node.
- Edit the Gmail Trigger search query to watch a specific label or alias, for example only emails sent to support@yourcompany.com.

## Additional info
Not sure what to write in your knowledge base? Use this interview prompt with any AI chat. It asks you only what it needs, and it can read your existing PDFs or FAQs: https://docs.google.com/document/d/1oIcMRiOlRwCpZbbjZJokxYanBw07CxlKTMXvQNhnYgc/edit?usp=sharing

Each escalated email waits for your answer in its own execution, so other emails keep being answered in the meantime. In draft mode nothing is ever sent to a customer without your review.

## 🔗 Nodes Used

Execute Sub-workflow, Gmail, Google Docs, Gmail Trigger, Execute Workflow Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
