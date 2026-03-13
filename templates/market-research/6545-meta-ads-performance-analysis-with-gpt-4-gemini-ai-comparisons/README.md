# 📊 Meta Ads Performance Analysis with GPT-4 & Gemini AI Comparisons

> ⚡ **2,747 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow transforms raw Meta Ads data into actionable, expert-level insights. It acts as a virtual performance marketer, analyzing each creative's performance, comparing it against your historical benchmarks, and delivering clear recommendations on whether to scale, optimize, or stop the ad. By running parallel analyses with both OpenAI and Gemini, it provides a unique, dual-perspective evaluation.
This template is the perfect sequel to our "Automation of Creative Testing" workflow but also works powerfully on its own.

#### **Use Case**
Manually sifting through ads manager reports is tedious, and identifying true winners from early data is challenging. This workflow solves these problems by automating the entire analysis pipeline. It's designed for performance marketing teams who need to:
- Make faster, data-driven decisions on which creatives to scale.
- Get objective, AI-powered second opinions on ad performance.
- Systematically evaluate creatives against consistent, pre-defined benchmarks.
- Maintain a central log in Google Sheets with both raw metrics and qualitative AI analysis.
- Save hours spent on manual data crunching and report generation.

#### **How it Works**
The workflow is structured into three logical stages:

1. **Configuration & Data Ingestion**:
- A central ⚙️ Set parameters node holds all key variables: the data source (Meta or Sheets), campaign_id, and, most importantly, your historical performance benchmarks as a simple text block.
- An IF node directs the workflow to fetch data either directly from a Meta Ads campaign or from a specified Google Sheet (ideal for analyzing a curated list of ads).

2. **Data Processing & AI Analysis (Parallel Execution)**:
After fetching raw performance data (spend, impressions, clicks, actions), the workflow splits into three parallel branches for maximum resilience:
- Branch 1 (Data Logging): Immediately writes or updates a row in Google Sheets with the raw metrics for the creative. This ensures no data is lost, even if the AI analysis fails.
- Branch 2 (OpenAI Analysis): Prepares a CSV string of the creative's data, sends it along with the benchmarks to an OpenAI model (e.g., GPT-4), and instructs it to return a structured JSON analysis.
- Branch 3 (Gemini Analysis): Performs the exact same process but using Google's Gemini model via a LangChain agent, providing a second, independent evaluation.

3. **Results Aggregation**:
- The results from both AI models are received as structured JSON.
- Two final Google Sheets nodes take these results and update the original row (matching by AdID), adding the evaluation, significance, summary, and recommendation into separate columns. The final sheet contains a complete picture: raw data side-by-side with analyses from two different AIs.

---

### **Setup Instructions**

1. **Credentials**:
1.1 Connect your Meta Ads account.
1.2 Connect your Google account (for Sheets).
1.3 Connect your OpenAI account.
1.4 Connect your Google Gemini (Palm) account.
2. **The ⚙️ Set parameters Node**:
This is the central control panel. Open this first Set node and customize it:
- source: Set to "Meta" to pull from a campaign or "sheets" to read from a Google Sheet.
- campaign_id: If source is "Meta", enter your Meta Campaign ID here.
- benchmarks_data: This is critical. Paste your own historical performance data here as a CSV-formatted text block. The template includes an example. For best results, use an export from Ads Manager of your top-performing creatives, including key metrics.
3. **Google Sheets Nodes**:
There are three Google Sheets nodes that write data. You need to configure all of them to point to the same spreadsheet and sheet.
- Ad metrics (for raw metrics): Select your spreadsheet and sheet. Ensure "Operation" is set to Append or Update.
- Ad data from OpenAI (for OpenAI results): Select the same spreadsheet/sheet. Set "Operation" to Update.
- Ad data from Gemini (for Gemini results): Select the same spreadsheet/sheet. Set "Operation" to Update.
- Make sure your sheet has columns for all the data fields, e.g., AdID, FileName, spend, impressions, evaluation, summary, recommendation, evaluation G, summary G, etc.
4. **Activate the Workflow**:
Set your desired frequency in the Schedule Trigger node.
Save and activate the workflow.


---

### **Further Ideas & Customization**
This powerful analysis engine can be extended even further:
- Add a "Decision" Node: After the AI analyses are logged, add a final step that compares their recommendations. If both AIs say "scale", automatically increase the ad's budget via the Meta Ads API.
- Create Summary Reports: Add a branch that, after all ads are processed, calculates an overall summary (e.g., "3 creatives recommended for scaling, 5 for stopping") and sends it to a Slack channel.
- Dynamic Benchmarks: Instead of pasting benchmarks into the Set node, create a step that reads them from a dedicated "Benchmarks" tab in your Google Sheet, making them even easier to update.
- Experiment with Prompts and Benchmarks: The quality of the AI analysis is highly dependent on the quality of your input. Don't be afraid to:
-- Refine the prompts in the AI Agent and Message a model nodes to better match your specific business context and KPIs.
-- Curate your benchmarks_data. Test different sets of benchmark data (e.g., "last 30 days top performers" vs. "all-time best") to see how it influences the AI's recommendations. Finding the right combination of prompt and data is key to unlocking the most effective insights.

## 🔗 Nodes Used

Google Sheets, Facebook Graph API, Schedule Trigger, AI Agent, Structured Output Parser, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
