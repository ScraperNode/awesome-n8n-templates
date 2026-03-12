# 🎬 Ai-powered LinkedIn content generator with OpenAI GPT-4 and DALL-E

> ⚡ **1,647 views** · 🎬 [Content Creation & Video](../)

## Description

## This n8n template helps you build a full AI-powered LinkedIn content generator with just a few clicks. 

Paired with the [free WeWeb UI template](https://go.weweb.io/zoYeg5g), it becomes a ready-to-use web app where users can:
- Add their own OpenAI API key  
- Customize the prompt and define 6 content topics  
- Edit the AI-generated topics  
- Choose when to generate LinkedIn posts, complete with hashtags and an optional image

## Who This Is For
Perfect for marketers, indie hackers, and solopreneurs who want to build their personal brand on LinkedIn while staying in control of what gets posted.

---

## 🧠 What Makes This Different

Unlike most AI agents, **you stay fully in control**:
- You define the tone and focus via the prompt.
- You choose which topics to keep or modify.
- You decide when to generate a post.
- You can build on top of this and create your own SaaS product.

It’s also **modular and extendable**—hook it up to your backend, add user login, or feed AI improvements based on user input.

---

## ⚙️ How It Works
1. **Triggering Events**: The app includes 3 pre-configured triggers, ready to be hooked into your WeWeb frontend. Just update the webhook URLs after duplicating the n8n workflow.
2. **Topic Generation**: A call is made to OpenAI (GPT-4) to generate topic ideas based on your prompt.
3. **Post Creation**: Once topics are approved or edited, GPT-4 writes full posts with suggested hashtags.
4. **Image Generation** *(Optional)*: If enabled, a DALL·E call generates a relevant image.
5. **Everything Stays Local**: All data and images are handled locally, no cloud storage setup needed.

---

## 🧪 Requirements & Setup
No fancy infrastructure required. Here’s what helps you get started:
- **Free WeWeb account** (recommended) to use the frontend UI template  
- **OpenAI account** with API access (for GPT-4 and DALL·E)  
- **n8n account** (self-hosted or cloud) to run the backend workflow  

The template is **completely free** to use. Since each user adds their own OpenAI API key, you don't need to worry about usage costs or rate limits on your end.

---

## 🔧 Want to Go Further?
This setup is beginner-friendly, but developers can:
- Add user accounts  
- Save post history  
- Feed user feedback back into the prompt logic  
- Launch their own branded version as a SaaS

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
