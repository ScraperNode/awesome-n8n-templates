# 📊 Open deep research - AI-powered autonomous research workflow

> ⚡ **32,477 views** · 📊 [Market Research & Insights](../)

## Description

# **Open Deep Research - AI-Powered Autonomous Research Workflow**  

### **Description**  
This workflow automates deep research by leveraging **AI-driven search queries, web scraping, content analysis, and structured reporting**. It enables autonomous research with **iterative refinement**, allowing users to collect, analyze, and summarize high-quality information efficiently.

### **How it works**  

1. **🔹 User Input**  
   - The user submits a research topic via a chat message.

2. **🧠 AI Query Generation**  
   - A Basic LLM generates **up to four refined search queries** to retrieve relevant information.

3. **🔎 SERPAPI Google Search**  
   - The workflow loops through each generated query and retrieves **top search results** using the **SerpAPI API**.

4. **📄 Jina AI Web Scraping**  
   - Extracts and summarizes webpage content from the URLs obtained via SerpAPI.

5. **📊 AI-Powered Content Evaluation**  
   - An **AI Agent** evaluates the **relevance** and **credibility** of the extracted content.

6. **🔁 Iterative Search Refinement**  
   - If the AI finds **insufficient** or **low-quality information**, it generates **new search queries** to improve results.

7. **📜 Final Report Generation**  
   - The AI compiles a **structured markdown report**, including **sources with citations**.

### **Set Up Instructions**  
🚀 **Estimated setup time**: ~10-15 minutes  

- **✅ Required API Keys:**  
  - [SerpAPI](https://serpapi.com/) → For Google Search results  
  - [Jina AI](https://jina.ai/) → For text extraction  
  - [OpenRouter](https://openrouter.ai/) → For AI-driven query generation and summarization  

- **⚙️ n8n Components Used:**  
  - AI Agents with **memory buffering** for iterative research  
  - **Loops** to process multiple search queries efficiently  
  - **HTTP Requests** for direct API interactions with **SerpAPI** and **Jina AI**  

- **📝 Recommended Enhancements:**  
  - Add **sticky notes** in n8n to explain each step for new users  
  - Implement **Google Drive or Notion Integration** to save reports automatically  

---

🎯 **Ideal for:**  
✔️ **Researchers & Analysts** - Automate background research  
✔️ **Journalists** - Quickly gather reliable sources  
✔️ **Developers** - Learn how to integrate multiple AI APIs into n8n  
✔️ **Students** - Speed up literature reviews  

🔗 **Completely free and open-source!** 🚀

## 🔗 Nodes Used

HTTP Request, AI Agent, Basic LLM Chain, Simple Memory, Wikipedia, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
