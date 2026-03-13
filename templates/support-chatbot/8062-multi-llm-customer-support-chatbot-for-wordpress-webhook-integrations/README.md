# 💬 Multi-LLM customer support chatbot for WordPress & webhook integrations

> ⚡ **1,518 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## AI Chat Bot workflow for WordPress & Webhook Live Chats
### This workflow powers a versatile AI chatbot that can be integrated into any live chat interface, such as our free Forerunner™ AI Chat Bot for WordPress. It's designed to automate customer support and lead generation by handling a variety of user queries independently.

The setup process is straightforward and typically takes less than five minutes. This involves connecting your preferred Large Language Model (LLM) and a live chat platform to the workflow via webhooks.

How the Workflow Works
The core of this workflow is an AI Agent that acts as the brain of the chatbot. It processes user input and generates responses based on predefined rules and your chosen language model.

User Input: When a user sends a message through your live chat, it's sent to the workflow via a webhook. This message is then passed to the AI Agent for processing.

AI Response Generation: The AI Agent analyzes the message, retrieves relevant conversational history from the Simple Memory node to maintain context, and uses the selected Large Language Model (e.g., OpenAI, Gemini, or Claude) to formulate a response.

Conditional Logic: After the response is generated, the workflow uses an If node to check if the conversation should end. If the response contains the specific tag [END_OF_CONVERSATION], the workflow prepares to end the chat. Otherwise, the conversation continues.

Send to Client: The final response is then sent back to the live chat interface, where it is displayed to the user. This completes the loop, allowing the chatbot to engage in a continuous conversation until the task is complete.

## 🔗 Nodes Used

Webhook, AI Agent, Anthropic Chat Model, OpenAI Chat Model, Simple Memory, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
