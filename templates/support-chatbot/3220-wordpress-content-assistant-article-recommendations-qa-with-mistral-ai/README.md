# 💬 WordPress content assistant: Article recommendations & Q&A with Mistral AI

> ⚡ **107 views** · 💬 [Support Chatbots](../)

## Description

## WordPress Content Assistant: Article Recommendations & Q&A with Mistral AI

### Ideal for WordPress site owners who want to enhance user engagement

 This template attempts to create an AI-powered content assistant for WordPress sites using Mistral AI, enabling article recommendations, content summarization, and contextual Q&A capabilities.

**Pre-requisites**: Mistral API key (or you could replace this with other LLM model)

## Disclaimer
This service is independent of Mistral AI. It is a community-built and maintained service that accesses Mistral's API. Please use at your own risk.

### How it works
- Uses a multi-agent architecture with an intent router powered by Mistral to classify user queries
- Recommends relevant articles based on user interests through keyword planning and content matching
- Answers specific questions about current page content through content retrieval or summarization
- Handles basic conversation flows and greeting interactions

### How to use
- Import the template JSON file into your n8n instance
- Configure your Mistral API key in this workflow
- You must publish this workflow and ensure your Chat URL is publicly accessible.
- Add the provided HTML (in this n8n template or my blog [here](https://www.tanyongsheng.com/blog/how-to-create-a-custom-chatbot-for-wordpress-using-n8n/)) to your WordPress site using WPCode plugin as **custom HTML snippet**, and change the &lt;N8N_WEBHOOK_URL&gt; to your Chat URL.

### Need Help?
Go to my [website](https://www.tanyongsheng.com/blog/how-to-create-a-custom-chatbot-for-wordpress-using-n8n/) or ask in the [Forum](https://community.n8n.io/)!

Happy chatbot Building!

----

Note: This template is available for FREE on my blog: [https://www.tanyongsheng.com/blog/how-to-create-a-custom-chatbot-for-wordpress-using-n8n/](https://www.tanyongsheng.com/blog/how-to-create-a-custom-chatbot-for-wordpress-using-n8n/). If you'd like to support my work in creating helpful resources like this, you can purchase the template. Thanks for your consideration!

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, Execute Workflow Trigger, Execution Data, AI Agent, Question and Answer Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
