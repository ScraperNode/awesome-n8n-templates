# 📊 Automated brand mentions tracker with GPT-4o, Google Sheets, and email

> ⚡ **1,111 views** · 📊 [Market Research & Insights](../)

## Description

![AI Rankings Monitor.png](fileId:1409)
This workflow enables you to automate the daily monitoring of how an AI model (like ChatGPT) responds to specific queries relevant to your market. It identifies mentions of your brand and predefined competitors, logs detailed interactions in Google Sheets, and delivers a comprehensive email report.

### Main Use Cases

*   Monitor how your brand is mentioned by AI in response to relevant user queries.
*   Track mentions of key competitors to understand AI's comparative positioning.
*   Gain insights into AI's current knowledge and portrayal of your brand and market landscape.
*   Automate daily intelligence gathering on AI-driven brand perception.

### How it works

The workflow operates as a scheduled process, organized into these stages:

1.  **Configuration & Scheduling**
    *   Triggers daily (or can be run manually).
    *   Key variables are defined within the workflow: your brand name (e.g., "YourBrandName"), a list of queries to ask the AI, and a list of competitor names to track in responses.
2.  **AI Querying**
    *   For each predefined query, the workflow sends a request to the OpenAI ChatGPT API (via an HTTP Request node).
3.  **Response Analysis**
    *   Each AI response is processed by a Code node to:
        *   Check if your brand name is mentioned (case-insensitive).
        *   Identify if any of the listed competitors are mentioned (case-insensitive).
        *   Extract the core AI response content (limited to 500 characters for brevity in logs/reports).
4.  **Data Logging to Google Sheets**
    *   Detailed results for each query—including timestamp, date, the query itself, query index, your brand name, the AI's response, whether your brand was mentioned, and any errors—are appended to a specified Google Sheet.
5.  **Email Report Generation**
    *   A comprehensive HTML email report is compiled. This report summarizes:
        *   Total queries processed, number of times your brand was mentioned, total competitor mentions, and any errors encountered.
        *   A summary of competitor mentions, listing each competitor and how many times they were mentioned.
        *   A detailed table listing each query, whether your brand was mentioned, and which competitors (if any) were mentioned in the AI's response.
6.  **Automated Reporting**
    *   The generated HTML email report is sent to specified recipients, providing a daily snapshot of AI interactions.

### Summary Flow:

Schedule/Workflow Trigger → Initialize Brand, Queries, Competitors (in Code node) → For each Query: Query ChatGPT API → Process AI Response (Check for Brand & Competitor Mentions) → Log Results to Google Sheets → Generate Consolidated HTML Email Report → Send Email Notification

### Benefits:

*   Fully automated daily monitoring of AI responses concerning your brand and competitors.
*   Provides objective insights into how AI models are representing your brand in user interactions.
*   Delivers actionable competitive intelligence by tracking competitor mentions.
*   Centralized logging in Google Sheets for historical analysis and trend spotting.
*   Easily customizable with your specific brand, queries, competitor list, and reporting recipients.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
