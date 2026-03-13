# 💬 Build a website AI chatbot with lead capture using Gemini and Supabase RAG

> ⚡ **556 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

This workflow deploys a fully customizable AI chatbot that can be embedded on any website, from custom-coded sites to platforms like WordPress. The chatbot is powered by n8n, uses Supabase for memory and RAG, and integrates SerpAPI, Google Calendar, SMTP, and Google Sheets to automate responses, collect leads, and follow up intelligently.

Unlike typical widgets, this bot captures name and email before chatting, enabling personalized, human-like conversations and smart lead tracking. Check [demo here](here) 

## 🎯 Core Features

💡 Universal Embedding – Works on any site (custom HTML or WordPress) using a single embed snippet.

🧠 AI Agent Node + RAG – Powered by Gemini (or any AI model) with Supabase as memory for contextual replies.

🌐 SerpAPI Integration – Lets the agent search the internet for real-time information.

📅 Google Calendar & Sheets – Logs leads, appointments, and chat summaries.

📧 SMTP Node – Sends personalized follow-up emails directly to new leads.

🪪 Lead Capture – Requires users to enter their name and email before chatting, creating personalized sessions.

### ⚙️ How It Works

Chat Trigger: The widget sends user input to your n8n webhook set to production mode.

AI Processing: The AI Agent node handles the response logic with memory and RAG context from Supabase.

### Integrations:

SerpAPI → Real-time search.

Google Calendar & Sheets → Stores lead data and events.

SMTP Node → Sends automatic thank-you or follow-up emails.

Response: The chatbot replies instantly on your website, maintaining session memory.

### 🧩 Quick Setup Steps

Fork or use the Open Source Repo:
The widget script is hosted via CDN from your GitHub repo and is fully editable.

### Embed the Widget:
Copy and paste the following snippet into your site’s &lt;head&gt; or footer (or use a plugin like Insert Headers and Footers on WordPress):


```

&lt;link href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css" rel="stylesheet" /&gt;
&lt;script&gt;
    window.ChatWidgetConfig = {
        webhook: {
            url: '', // production webhook URL
            route: 'general'
        },
        branding: {
            logo: '', // your logo URL
            name: 'CustomCX Agent',
            welcomeText: 'Hi 👋, how can we help?',
            responseTimeText: 'We typically respond right away',
        },
        style: {
            primaryColor: '#854fff',
            secondaryColor: '#6b3fd4',
            position: 'right',
            backgroundColor: '#ffffff',
            fontColor: '#333333',
        }
    };
&lt;/script&gt;
&lt;script src="https://cdn.jsdelivr.net/gh/shadrack-ago/n8n/widget.js?v=2.6"&gt;&lt;/script&gt;


```


## Connect Integrations:

Add your Supabase, SerpAPI, Google, and SMTP credentials in n8n.

Update your webhook URL in the script above.

Deploy:
Activate the workflow, refresh your site, and start chatting with your AI assistant.

🚀 Why Use This Template

Works with any website or CMS.

Captures and stores qualified leads automatically.

Open source — easily modify, brand, or extend it.

Seamlessly integrates AI, CRM, and communication tools.

## 🔗 Nodes Used

Google Drive, Google Drive Trigger, Supabase, AI Agent, Embeddings OpenAI, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
