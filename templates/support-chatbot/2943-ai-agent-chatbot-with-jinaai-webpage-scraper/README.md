# 💬 🌐🪛 AI agent chatbot with Jina.ai webpage scraper

> ⚡ **9,674 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

The **🌐🤖 AI Agent Chatbot with Jina.ai Webpage Scraper** workflow is a powerful automation designed to integrate real-time web scraping capabilities into an AI-driven chatbot. Here's how it works and why it's important:

### **How It Works**  
1. **💬 Chat Trigger**: The workflow begins when a user sends a chat message, triggering the "When chat message received" node.  
2. **🧠 AI Agent Processing**: The input is passed to the "Jina.ai Web Scraping Agent," which uses advanced AI logic to interpret the user’s query and determine the information needed.  
3. **🌐 Web Scraping**: The agent utilizes the "HTTP Request" node to scrape real-time data from a user-provided URL, enabling the chatbot to fetch and analyze live website content.  
4. **🗂️ Memory Management**: The "Window Buffer Memory" node ensures context retention by storing and managing conversational history, allowing for seamless interactions.  
5. **🤖 Language Model Integration**: The scraped data is processed using the "gpt-4o-mini" language model, which generates clear, accurate, and contextually relevant responses for the user.

### **Why It's Cool**  
- **⏱️ Real-Time Information Retrieval**: This workflow empowers users to access up-to-date web content directly through a chatbot, eliminating manual web searches.  
- **✨ Enhanced User Experience**: By combining web scraping with conversational AI, it delivers precise answers tailored to user queries in real time.  
- **🔄 Versatility**: It can be applied across various domains, such as customer support, research, or data analysis, making it a valuable tool for businesses and individuals alike.  
- **⚙️ Automation Efficiency**: Automating web scraping and response generation saves time and effort while ensuring accuracy.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger, HTTP Request Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
