# 🔬 Extract & store recently added n8n community workflows with ScrapeGraphAI and Gemini

> ⚡ **344 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This is an exaple of advanced automated data extraction and enrichment pipeline with [ScrapeGraphAI](https://dashboard.scrapegraphai.com/?via=n3witalia). Its primary purpose is to **systematically scrape the n8n community workflows website, extract detailed information** about recently added workflows, process that data using multiple AI models, and store the structured results in a Google Sheets spreadsheet.

This workflow demonstrates a sophisticated use of n8n to move beyond simple API calls and into the realm of intelligent, AI-driven web scraping and data processing, turning unstructured website content into valuable, structured business intelligence.


---

### Key Advantages

* ✅ **Full Automation:** Once triggered (manually or on a schedule via the Schedule Trigger node), the entire process runs hands-free, from data collection to spreadsheet population.

* ✅  **Powerful AI-Augmented Scraping:** It doesn't just scrape raw HTML. It uses multiple AI agents (Google Gemini, OpenAI) to:
    *   **Understand page structure** to find the right data on the main list.
    *   **Clean and purify content** from individual pages, removing and irrelevant information.
    *   **Perform precise information extraction** to parse unstructured text into structured JSON data based on a defined schema (author, price, etc.).
    *   **Generate intelligent summaries**, adding significant value by explaining the workflow's purpose in Italian.

* ✅ **Robust and Structured Data Output:** The use of the **Structured Output Parser** and **Information Extractor** nodes ensures the data is clean, consistent, and ready for analysis. It outputs perfectly formatted JSON that maps directly to spreadsheet columns.

* ✅ **Scalability via Batching:** The **Split In Batches** and **Loop Over Items** nodes allow the workflow to process a dynamically sized list of workflows. Whether there are 5 or 50 new workflows, it will process each one sequentially without failing.

* ✅ **Effective Data Integration:** It seamlessly integrates with **Google Sheets**, acting as a simple and powerful database. This makes the collected data immediately accessible, shareable, and available for visualization in tools like Looker Studio.

* ✅ **Resilience to Website Changes:** By using AI models trained to understand content and context (like "find the 'Recently Added' section" or "find the author's name"), the workflow is more resilient to minor cosmetic changes on the target website compared to traditional CSS/XPath selectors.


---

### **How It Works**

The workflow operates in two main phases:

**Phase 1: Scraping the Main List**
1.  **Trigger:** The workflow can be started manually ("Execute Workflow") or automatically on a schedule.
2.  **Scraping:** The "Scrape main page" node (using [ScrapeGraphAI](https://dashboard.scrapegraphai.com/?via=n3witalia)) fetches and converts the `https://n8n.io/workflows/` page into clean Markdown format.
3.  **Data Extraction:** An LLM chain ("Extract 'Recently added'") analyzes the Markdown. It is specifically instructed to identify all workflow titles and URLs within the "Recently Added" section and output them as a structured JSON array named `workflows`.
4.  **Data Preparation:** The resulting array is set as a variable and then split out into individual items, preparing them for processing one-by-one.

**Phase 2: Processing Individual Workflows**
1.  **Loop:** The "Loop Over Items" node iterates through each workflow URL obtained from Phase 1.
2.  **Scrape & Clean Detail Page:** For each URL, the "Scrape single Workflow" node fetches the detail page. Another LLM chain ("Main content") cleans the resulting Markdown, removing superfluous content and focusing only on the core article text.
3.  **Information Extraction:** The cleaned Markdown is passed to an "Information Extractor" node. This uses a language model to locate and structure specific data points (title, URL, ID, author, categories, price) into a defined JSON schema.
4.  **Summarization:** The cleaned Markdown is also sent to a Google Gemini node ("Summarization content"), which generates a concise Italian summary of the workflow's purpose and tools used.
5.  **Data Consolidation & Export:** The extracted information and the generated summary are merged into a single data object. Finally, the "Add row" node maps all this data to the appropriate columns and appends it as a new row in a designated Google Sheet.

---

### **Set Up Steps**

To run this workflow, you need to configure the following credentials in your n8n instance:

1.  **ScrapeGraphAI Account:** The "Scrape main page" and "Scrape single Workflow" nodes require valid ScrapeGraphAI API credentials named `ScrapegraphAI account`. Install the related Community node.
2.  **Google Gemini Account:** Multiple nodes ("Google Gemini Chat Model", "Summarization content", etc.) require API credentials for Google Gemini named `Google Gemini(PaLM) (Eure)`.
3.  **OpenAI Account:** The "OpenAI Chat Model1" node requires API credentials for OpenAI named `OpenAi account (Eure)`.
4.  **Google Sheets Account:** The "Add row" node requires OAuth2 credentials for Google Sheets named `Google Sheets account`. You must also ensure the node is configured with the correct **Google Sheet ID** and that the sheet has a worksheet named `Foglio1` (or update the node to match your sheet's name).

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
