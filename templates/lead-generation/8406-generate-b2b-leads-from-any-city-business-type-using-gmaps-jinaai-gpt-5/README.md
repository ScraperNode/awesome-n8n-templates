# 🎣 Generate B2B leads from any city & business type using GMaps, Jina.ai & GPT-5

> ⚡ **78 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## B2B Leads Gen - ANY (CITY / BUSINESS) IN THE WORLD

## 🤖 Generate B2B sales leads from Google Maps, enrich data (email) with AI Agent + Jina.ai and save to Airtable.

This workflow generates comprehensive B2B leads, from a selected Business type in ANY CITY IN THE WORLD, including:
- Company name;
- Website;
- Email (enriched with AI Agent);
- Phone number;
- Address;
- Main Language;
- Google Maps location.

**More information can be added!**

It starts by searching for a specific business type in any city you define.
First, it uses an AI agent to build an optimized query for the Official Google Places (GMaps) API. After finding businesses and their basic details, it employs a second, specialized AI web scraping agent to visit each company's website and find a contact email. Finally, all enriched lead data is neatly organized and saved to an Airtable base.

## 🤔 Who's it for

This workflow is designed for:
*   **Sales and Business Development Teams** looking to automate lead generation and build targeted outreach lists.
*   **Marketing Professionals** who need to gather contact information for campaigns.
*   **Freelancers and Agencies** offering lead generation as a service.
*   Anyone who wants to save time on manually searching for business information online.

## ⚙️ How it works

This workflow automates the entire lead generation process from start to finish:

1.  **Trigger with a Form:** The workflow starts when you fill out a simple form, providing the **Country**, **City**, and **Business Type** you want to target.
2.  **AI-Powered Search Query:** An AI agent validates your input and constructs an optimized search query for the Google Places API to ensure the best possible results.
3.  **Find Businesses on Google Maps:** Using the generated query, the workflow makes an HTTP request to the Google Places API, fetching up to 20 businesses that match your criteria.
4.  **Filter for Quality Leads:** It processes the results and filters out any businesses that are not listed as "OPERATIONAL" or do not have a website, ensuring you only get relevant leads.
5.  **AI Email Enrichment:** For each valid business, a specialized web scraping AI agent (using Jina AI) visits the company's website. It intelligently navigates the site, following links like `/contact` or `/about`, to find a contact email address.
6.  **Save to Airtable:** Once a business's information is enriched with an email, the workflow saves the complete lead as a new record in your specified Airtable base.

## 🚀 How to set up

Follow these steps to get your automated lead generation engine up and running.

### 1. Create your Airtable Base 

First, create a new Airtable base with a table to store your leads. The workflow is configured to map data to the following fields. It's recommended to use these exact names and types for a seamless setup.

| Field Name                | Field Type           | Description                                       |
| ------------------------- | -------------------- | ------------------------------------------------- |
| `Company_name`            | Single line text     | The name of the business.                         |
| `Company_website`         | URL                  | The business's website URL.                       |
| `Company_e-mail`          | Email                | The contact email found by the AI scraper.        |
| `Company_address`         | Long text            | The full physical address of the business.        |
| `Company_phone`           | Phone number         | The business's international phone number.        |
| `Primary_type`            | Single line text     | The primary business category from Google Maps.   |
| `Google_maps_location`    | URL                  | A direct link to the business on Google Maps.     |
| `processed`               | Single select        | A status field, set to "no" by default.           |
| `create_date`             | Date ISO (24h)       | Automatically records when the lead was added.    |
| `Language_code`           | Single line text     | The language code of the business name (e.g., en).|

### 2. Configure the Workflow

1.  **Add Credentials:**
    *   **Airtable:** Add your Airtable Personal Access Token in **Credentials &gt; New &gt; Airtable**.
    *   **OpenAI:** Add your OpenAI API key in **Credentials &gt; New &gt; OpenAI**.
    *   **Jina AI:** Add your Jina AI API key in **Credentials &gt; New &gt; Jina AI**.
2.  **Set API Keys and Airtable Info:**
    *   In the workflow, find the **Places\_API\_Key** node (a Set node) and paste your Google Places API key into the `Value` field for the `google_places_api` variable.
    *   Select the **Create a record** node (Airtable).
    *   In the parameters, select your Airtable credential.
    *   For the **Base** and **Table** parameters, select the base and table you created in the previous step.
3.  **Activate and Launch:** Save and activate the workflow. To run it, click "Execute Workflow" and use the form trigger that appears.

## ✅ Requirements

*   An n8n instance.
*   An [Airtable](https://airtable.com/) (free) account.
*   A [Google Cloud Platform](https://console.cloud.google.com/) account with the **Places API** enabled. See manual (Google Places API Setup Guide) for full instructions.
*   An [OpenAI](https://platform.openai.com/) account and API key.
*   A [Jina AI](https://jina.ai/) account and API key.

## 🎨 How to customize the workflow

*   **Adjust the Number of Leads:** In the **Google Places Search** (HTTP Request) node, you can change the `pageSize` value in the JSON `Body` to fetch more or fewer than 20 results per execution. Be mindful of Google's API limits.
*   **Change the AI Model:** The workflow uses OpenAI by default. You can swap the **GPT-5-mini** nodes for other language models like Anthropic, Google Gemini, or a local AI model.
*   **Add Different Outputs:** The workflow includes disabled nodes to save leads to an Excel file (**Convert to File**) or send a notification to Slack (**Finish message**). Enable and configure them to add more outputs. You can also replace Airtable with Google Sheets, a CRM, or a database.
*   **Modify the Scraping Agent:** You can edit the prompt in the **Web Scraping Agent** node to change its behavior. For example, you could instruct it to look for a specific job title's email, a phone number, or other information on the website.

## 🙋 Need Help?

### Need a Professional and Personalized automation
Contact me [DevQuick](mailto:devquick@outlook.com)

### If you have any questions or get stuck, feel free to ask for help in our community.
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)

## 🔗 Nodes Used

Airtable, HTTP Request, Slack, Stop and Error, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
