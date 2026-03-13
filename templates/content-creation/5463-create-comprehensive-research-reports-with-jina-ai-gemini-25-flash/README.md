# 🎬 Create comprehensive research reports with Jina AI & Gemini 2.5 Flash

> ⚡ **1,728 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Automated AI Research Assistant: From Query to Polished Report with Jina & Gemini
Turn a single research question into a comprehensive, multi-source report with proper citations. This workflow automates the entire research process by leveraging the web-crawling power of Jina AI and the advanced reasoning capabilities of Google's Gemini models.
Simply input your query, and this AI-powered assembly line will search the web, scrape relevant sources, summarize the content, draft a structured research paper, and finally, evaluate and polish the report for accuracy and formatting.
### ✨ Key Features
* **🔎 Dynamic Web Search**: Kicks off by searching the web with Jina AI based on your initial query.
* **📚 Multi-Source Content Scraping**: Automatically reads and extracts content from the top 10 search results.
* **🧠 AI-Powered Summarization**: Uses a Gemini agent to intelligently summarize each webpage, retaining the core information.
* **✍️ Automated Report Generation**: A specialized "Generator Agent" synthesizes the summarized data into a structured research paper, complete with an executive summary, introduction, discussion, and conclusion.
* **✅ Citation & Quality Verification**: A final "Evaluator Agent" meticulously checks the generated report for citation accuracy, logical flow, and markdown formatting, delivering a polished final document.
* **📈Rate-Limit Ready**: Includes a configurable `Wait` node to ensure stable execution when dealing with multiple API calls.
### 📝 What This Workflow Does
This workflow is designed to be your personal research assistant. It addresses the time-consuming process of gathering, reading, and synthesizing information from multiple online sources. Instead of spending hours manually searching, reading, and citing, you can delegate the entire task to this workflow and receive a well-structured and cited report as the final output.
It's perfect for students, researchers, content creators, and analysts who need to quickly compile information on any given topic.
### ⚙️ How It Works (Step-by-Step)
1.  **Initiate with a Query**: The workflow starts when you send your research question or topic to the `Chat Trigger` node.
2.  **Search the Web**: The user's query is passed to the `Jina AI` node, which performs a web search and returns the top 10 most relevant URLs.
3.  **Scrape, Summarize, Repeat**: The workflow then loops through each URL:
    * **Read Content**: The `Jina AI` node scrapes the full text content from the URL.
    * **Summarize**: A `Summarizer Agent` powered by Google Gemini reads the scraped content and the original user query, then generates a concise summary.
    * **Wait**: A one-second pause helps to avoid hitting API rate limits before processing the next URL.
4.  **Aggregate the Knowledge**: Once the loop is complete, a `Code` node gathers all 10 individual summaries into a single, neatly structured list.
5.  **Draft the Research Report**: This aggregated data is fed to the `Generator Agent`. Following a detailed prompt, this Gemini-powered agent writes a full research report, structuring it with headings and adding inline citations for every piece of information it uses.
6.  **Evaluate and Finalize**: The generated draft is passed to the final `Evaluator Chain`. This agent acts as a quality control supervisor. It verifies that all claims are correctly cited, refines the content for clarity and academic tone, and polishes the markdown formatting to produce the final, ready-to-use report.
### 🚀 How to Use This Workflow
1.  **Credentials**: Click on **Use template**, then configure your credentials for the following nodes:
    * **Jina AI**: You will need a Jina AI API key for the `Search web` and `Read URL content` nodes. Get your key from here: [JinaAI API Key](https://jina.ai/)
    * **Google Gemini**: You will need a Google Gemini API key for the `Summarizer Model`, `Generator Model`, and `Evaluator Model` nodes. Get your key from here: [Gemini API Key](https://aistudio.google.com/apikey)
2.  **Activate Workflow**: Make sure the workflow is active in your n8n instance.
3.  **Start Research**: Send a chat message with your research topic to the webhook URL provided in the `When chat message received` node.
4.  **Get Your Report**: Check the output of the final node, `Evaluator Chain`, to find your completed and polished research report.
### Nodes Used
* `Chat Trigger`
* `Jina AI`
* `Code` (Python)
* `Split in Batches` (Looping)
* `Wait`
* `AI Agent`
* `Basic LLM Chain`
* `Google Gemini Chat Model`

## 🔗 Nodes Used

AI Agent, Basic LLM Chain, Structured Output Parser, Chat Trigger, Google Gemini Chat Model, Jina AI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
