# 📊 Dynamic AI web researcher: From plain text to custom CSV with GPT-4 and Linkup

> ⚡ **358 views** · 📊 [Market Research & Insights](../)

## Description

This template introduces a revolutionary approach to automated web research. Instead of a rigid workflow that can only find one type of information, this system uses a "thinker" and "doer" AI architecture. It dynamically interprets your plain-English research request, designs a custom spreadsheet (CSV) with the perfect columns for your goal, and then deploys a web-scraping AI to fill it out.

It's like having an expert research assistant who not only finds the data you need but also builds the perfect container for it on the fly. Whether you're looking for sales leads, competitor data, or market trends, this workflow adapts to your request and delivers a perfectly structured, ready-to-use dataset every time.


## **Who is this for?**

* **Sales & marketing teams:** Generate targeted lead lists, compile competitor analysis, or gather market intelligence with a simple text prompt.
* **Researchers & analysts:** Quickly gather and structure data from the web for any topic without needing to write custom scrapers.
* **Entrepreneurs & business owners:** Perform rapid market research to validate ideas, find suppliers, or identify opportunities.
* **Anyone who needs structured data:** Transform unstructured, natural language requests into clean, organized spreadsheets.

## **What problem does this solve?**

* **Eliminates rigid, single-purpose workflows:** This workflow isn't hardcoded to find just one thing. It dynamically adapts its entire research plan and data structure based on your request.
* **Automates the entire research process:** It handles everything from understanding the goal and planning the research to executing the web search and structuring the final data.
* **Bridges the gap between questions and data:** It translates your high-level goal (e.g., "I need sales leads") into a concrete, structured spreadsheet with all the necessary columns (Company Name, Website, Key Contacts, etc.).
* **Optimizes for cost and efficiency:** It intelligently uses a combination of deep-dive and standard web searches from **Linkup.so** to gather high-quality initial results and then enrich them cost-effectively.

## **How it works (The "Thinker & Doer" Method)**

The process is cleverly split into two main phases:

1.  **The "Thinker" (AI Planner):** You submit a research request via the built-in form (e.g., "Find 50 US-based fashion companies for a sales outreach campaign").
    * The first AI node acts as the "thinker." It analyzes your request and determines the optimal structure for your final spreadsheet.
    * It dynamically generates a **plan**, which includes a `discoveryQuery` to find the initial list, an `enrichmentQuery` to get details for each item, and the JSON schemas that define the exact columns for your CSV.
2.  **The "Doer" (AI Researcher):** The rest of the workflow is the "doer," which executes the plan.
    * **Discovery:** It uses a powerful "deep search" with **Linkup.so** to execute the `discoveryQuery` and find the initial list of items (e.g., the 50 fashion companies).
    * **Enrichment:** It then loops through each item in the list. For each one, it performs a fast and cost-effective "standard search" with Linkup to execute the `enrichmentQuery`, filling in all the detailed columns defined by the "thinker."
    * **Final Output:** The workflow consolidates all the enriched data and converts it into a final CSV file, ready for download or further processing.

## **Setup**

1.  **Connect your AI provider:** In the **OpenAI Chat Model** node, add your AI provider's credentials.
2.  **Connect your Linkup account:** In the two **Linkup** (HTTP Request) nodes, add your Linkup API key (free account at [linkup.so](https://www.linkup.so/)). We recommend creating a "Generic Credential" of type "Bearer Token" for this. Linkup offers €5 of free credits monthly, which is enough for 1k standard searches or 100 deep queries.
3.  **Activate the workflow:** Toggle the workflow to "Active." You can now use the form to submit your first research request!


## **Taking it further**

* **Add a custom dashboard:** Replace the form trigger and final CSV output with a more polished user experience. For example, build a simple web app where users can submit requests and download their completed research files.
* **Make it company-aware:** Modify the "thinker" AI's prompt to include context about your company. This will allow it to generate research plans that are automatically tailored to finding leads or data relevant to your specific products and services.
* **Add an AI summary layer:** After the CSV is generated, add a final AI node to read the entire file and produce a high-level summary, such as "Here are the top 5 leads to contact first and why," turning the raw data into an instant, actionable report.

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
