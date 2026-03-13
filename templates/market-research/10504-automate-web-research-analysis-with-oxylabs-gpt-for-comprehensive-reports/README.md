# 📊 Automate web research & analysis with Oxylabs & GPT for comprehensive reports

> ⚡ **1,220 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Fully automate deep research from start to finish: scrape Google Search results, select relevant sources, scrape & analyze each source in parallel, and generate a comprehensive research report.

## Who is this for?

This workflow is for anyone who needs to **research topics quickly and thoroughly**: content creators, marketers, product managers, researchers, journalists, students, or anyone seeking deep insights without spending hours browsing websites. If you find yourself opening dozens of browser tabs to piece together information, this template will **automate that entire process** and deliver **comprehensive reports in minutes**.

## How it works

1. **Submit your research questions** through n8n's chat interface (include as much context as you need)  
2. **AI generates strategic search queries** to explore different angles of your topic (customize the number of queries as needed)  
3. **Oxylabs scrapes Google Search results** for each query (up to 50 results per query)  
4. **AI evaluates and selects sources** that are the most relevant and authoritative  
5. **Content extraction runs in parallel** as Oxylabs scrapes each source and AI extracts key insights  
6. **Summaries are collected in n8n's data table** for final processing  
7. **AI synthesizes everything** into a comprehensive research report with actionable insights

See the [complete step-by-step tutorial](https://blog.n8n.io/build-a-fast-deep-research-automation-flow-with-oxylabs-and-n8n/) on the n8n blog.


## Requirements

* **Oxylabs AI Studio API key** – [Get a free API key](https://aistudio.oxylabs.io/register) with 1000 credits  
* **OpenAI API key** (or use alternatives like Claude, Gemini, and local Ollama LLMs)

## Setup

1. **Install Oxylabs AI Studio** as [shown on this page](https://n8n.io/integrations/oxylabs-ai-studio/)
2. **Set your API keys**:  
	* Oxylabs AI Studio  
	* OpenAI  
3. **Create a [data table](https://docs.n8n.io/data/data-tables/)**  
4. **Select the table name** in each data table node  
5. **Create a sub-workflow**:  
	* Select the 3 nodes (Scrape content, Summarize content, Insert row)  
	* Right-click  
	* Select “Convert 3 nodes to sub-workflow”  
6. **Edit the sub-workflow settings** for for parallel execution:  
	* **Mode:** Run once for each item  
	* **Options** → **Add Option** → **disable** “Wait For Sub-Workflow Completion”

Once you finish all these setup steps, you can run the workflow through n8n's chat interface. For example, send the following message:
```
I'm planning to build a wooden summer house and would appreciate guidance on the process. What are the key considerations I should keep in mind from planning through completion? I'm particularly interested in the recommended construction steps and which materials will ensure long-term durability and quality.
````

## Customize this workflow for your needs

Feel free to modify the workflow to fit the scale and final output your project requires:

* To reuse this workflow, **clear the data table** after the final analysis by adding a **Data table** node with the **Delete row(s)** action  
* **Scale up** by processing more search queries, increasing results per query beyond 10, and selecting additional relevant URLs  
* **Enable JavaScript rendering** in Oxylabs AI Studio (Scraper) node to ensure all content is gathered  
* **Adjust the system prompts** in LLM nodes to fit your specific research goals  
* **Explore other AI Studio apps** like Browser Agent for interactive browser control or Crawler for mapping entire websites  
* **Connect other nodes** like Google Sheets, Notion, Airtable, or webhooks to route results where you need them

## 🔗 Nodes Used

Chat Trigger, OpenAI, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
