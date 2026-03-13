# 💬 Generate personalized cold outreach emails with Apify, OpenAI, and Google Sheets

> ⚡ **1,508 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Automated Cold Email Personalization

This workflow automates the creation of highly personalized cold outreach emails by extracting lead data, scraping company websites, and leveraging AI to craft unique email components. This is ideal for **sales teams, marketers, and business development professionals** looking to scale their outreach efforts while maintaining a high degree of personalization.

---

## How It Works

1.  **Generate Batches**: The workflow starts by generating a sequence of numbers, defining how many leads to process in batches.
2.  **Scrape Lead Data**: It uses an external API (Apify) to pull comprehensive lead information, including contact details, company data, and social media links.
3.  **Fetch Client Data**: The workflow then retrieves relevant client details from your Google Sheet based on the scraped data.
4.  **Scrape Company Website**: The lead's company website is automatically scraped to gather content for personalization.
5.  **Summarize Prospect Data**: An OpenAI model analyzes both the scraped website content and the individual's profile data to create concise summaries and identify unique angles for outreach.
6.  **Craft Personalized Email**: A more advanced OpenAI model uses these summaries and specific instructions to generate the "icebreaker," "intro," and "value proposition" components of a personalized cold email.
7.  **Update Google Sheet**: Finally, these generated email components are saved back into your Google Sheet, enriching your lead records for future outreach.

---

## Google Sheet Structure

Your Google Sheet must have the following exact column headers to ensure proper data flow:

* **Email** (unique identifier for each lead)
* **Full Name**
* **Headline**
* **LinkdIn**
* **cityName**
* **stateName**
* **company/cityName**
* **Country**
* **Company Name**
* **Website**
* **company/businessIndustry**
* **Keywords**
* **icebreaker** (will be populated by the workflow)
* **intro** (will be populated by the workflow)
* **value\_prop** (will be populated by the workflow)

---

## Setup Instructions

1.  **Add Credentials**:
    * In n8n, add your **OpenAI API key** via the Credentials menu.
    * Connect your **Google account** via the Credentials menu for Google Sheets access.
    * You will also need an **Apify API key** for the `Scraper` node.

2.  **Configure Google Sheets Nodes**:
    * Select the **`Client data`** and **`Add email data to sheet`** nodes.
    * For each, choose your **Google Sheets credential**, select your **spreadsheet**, and the **specific sheet name**.
    * Ensure all column mappings are correct according to the "Google Sheet Structure" section above.

3.  **Configure Apify Scraper Node**:
    * Select the **`Scraper`** node.
    * Update the `Authorization` header with your **Apify API token** (`Bearer KEY`).
    * In the `JSON Body`, set the `searchUrl` to your **Apollo link** (or equivalent source URL for lead data).

4.  **Configure OpenAI Nodes**:
    * Select both **`Summarising prospect data`** and **`Creating detailed email`** nodes.
    * Choose your **OpenAI credential** from the dropdown.
    * In the `Creating detailed email` node's prompt, replace `PUT YOUR COMPANY INFO HERE` with your **company's context** and verify the target sector for the email generation.

5.  **Verify Update Node**:
    * On the final **`Add email data to sheet`** node, ensure the **Operation** is set to `Append Or Update` and the **Matching Columns** field is set to `Email`.

---

## Customization Options 💡

* **Trigger**: Change the `When clicking 'Execute workflow'` node to an automatic trigger, such as a **Cron node** for daily runs, or a **Google Sheets trigger** when new rows are added.
* **Lead Generation**: Modify the **`Code`** node to change the number of leads processed per run (currently set to 50).
* **Scraping Logic**: Adjust the `Scraper` node's parameters (e.g., `count`) or replace the Apify integration with another data source if needed.
* **AI Prompting**: Experiment with the prompts in the **`Summarising prospect data`** and **`Creating detailed email`** OpenAI nodes to refine the tone, style, length, or content focus of the generated summaries and emails.
* **AI Models**: Test different OpenAI models (e.g., `gpt-3.5-turbo`, `gpt-4o`) in the OpenAI nodes to find the optimal balance between cost, speed, and output quality.
* **Data Source/CRM**: Replace the Google Sheets nodes with integrations for your preferred CRM (e.g., HubSpot, Salesforce) or a database (e.g., PostgreSQL, Airtable) to manage your leads.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Markdown, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
