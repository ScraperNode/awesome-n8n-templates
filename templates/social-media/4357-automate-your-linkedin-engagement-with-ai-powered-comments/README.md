# 📱 Automate Your LinkedIn Engagement with AI-Powered Comments! 💬✨

> ⚡ **1,003 views** · 📱 [Social Media & Email Marketing](../)

## Description

![linkedin_unipile_thumbnail0.5x.jpg](fileId:1374)
[Tutorial Video](https://youtu.be/fCjkmLWcL8k)

This n8n workflow is your ultimate tool for smart LinkedIn interaction, leveraging the power of AI to generate witty comments and engage with posts via the Unipile API. Perfect for community managers, marketers, or anyone looking to scale their professional presence with intelligent automation!

How It Works:
Trigger by Chat Message: Simply send a chat message (e.g., from Telegram) containing a LinkedIn post ID. 📨

Extract Post ID with LLM: An intelligent Large Language Model (LLM) precisely extracts the LinkedIn post ID from your message, ready for action. 🧠

Get Post Details: The workflow fetches all the juicy details of the target LinkedIn post from Unipile. 📥

AI-Crafted Comment: An OpenAI LLM, acting as your personal AI & startup expert, generates a unique, witty, and cheeky comment tailored to the post's content. No boring, generic replies here! ✒️🤖

Publish & React: The generated comment is then published to the LinkedIn post via Unipile, and a reaction (like a 'like' or 'upvote') is automatically added to boost engagement. 👍💬

Confirmation to Telegram: Get instant feedback! A confirmation message is sent back to your Telegram, showing the post URL and the exact comment that was shared. ✅

Why You'll Love This Template:
Intelligent Engagement: Move beyond simple replies with AI-powered comments that resonate on a professional platform.

Time-Saving Automation: Automate repetitive LinkedIn tasks and free up your schedule for more strategic activities.

Scalable: Easily adapt and expand this workflow for various professional engagement types.

Customizable: Tweak the LLM prompts to match your professional brand's voice and desired tone.

Get Started:
Unipile API Key: Secure your UNIPILE_API_KEY and set it as an environment variable in n8n.

Unipile Account ID: The account_id (e.g., PXAEQeyiS2iSkSJCRuNcvg) is currently hardcoded within the HTTP Request nodes. For a production setup, consider making this dynamic or using n8n credentials if Unipile offers them.

OpenAI Credentials: Ensure your OpenAI API key is configured as an n8n credential.
Telegram Integration: Configure the Trigger: Chat Message Received node and the Telegram: Send Confirmation node with your Telegram Bot Token and Chat ID. The confirmation node is currently disabled; enable it to receive notifications.

Ready to supercharge your LinkedIn engagement? Give it a try! 🚀

## 🔗 Nodes Used

HTTP Request, Telegram, AI Agent, Basic LLM Chain, OpenAI Chat Model, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
