# 🎣 Extract leads from Google Maps into Google Sheets using the Places API

> ⚡ **393 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## **Who is this for**

This workflow is designed for sales teams, marketing professionals, and business developers who want to automate lead generation. It is ideal for budget-conscious individuals or small businesses looking to collect structured contact information from Google Maps without manual searching or relying on third-party middleware providers.

## **How it works**

The workflow operates in two modes: **Manual** and **Automated**.

* **Manual Mode:** Submit a search query via an n8n Form node to trigger the workflow instantly.
* **Automated Mode:** A Schedule trigger processes pending queries from a Google Sheets spreadsheet.

Once triggered, the workflow uses the **Places API (New)** to find businesses matching the query. It then maps the data into structured fields (name, address, phone, and website) and saves them as leads in a separate sheet. If triggered automatically, it marks the original query as "scraped" to prevent reprocessing. Duplicate leads are prevented via a deduplication mechanism based on the **Google Place ID**.

## **Requirements**

To use this workflow, you will need:

* **Google Cloud Project:** A project with billing enabled and the **Places API (New)** activated.
* **Google Places API Key:** A valid API key from your Google Cloud Console.
* **Google Sheets Account:** Access to Google Sheets with OAuth2 credentials configured in n8n.
* **n8n Instance:** A running n8n instance (self-hosted or Cloud).

## **Setup instructions**

1. **Enable the API:** In the Google Cloud Console, enable the **Places API (New)** and generate an API key.
2. **Prepare Google Sheets:** * Open [this spreadsheet template](https://docs.google.com/spreadsheets/d/1x_GYw6KHgvhe2dgSw1eKKTimIzQYTsRkkWoxkAJEdD8/copy) and click **Make a copy**.
    * Alternatively, create a spreadsheet with two tabs named `SEARCH QUERIES` and `LEADS`. Ensure the queries tab has a `Scraped` column set to `FALSE` for new entries.
3. **Configure Credentials:** Set up your Google Sheets OAuth2 credentials in n8n.
4. **Import Workflow:** Upload the JSON file to your n8n instance.
5. **Add API Key:** In the **Google Places Search** HTTP Request node, replace the placeholder with your **Places API (New)** key.
6. **Link Spreadsheets:** Update the Google Sheets nodes (**Get rows in QUERIES**, **Append or update lead row**) with your specific Spreadsheet ID and sheet names.
7. **Test and Activate:** Submit a test query via the form or run the schedule trigger manually, then toggle the workflow to **Active**.

## **Customization ideas**

* **Expand Data Points:** In the **Map Places Fields** node, include additional fields from the API response, such as business hours, ratings, or price levels.
* **Switch Destinations:** Replace the Google Sheets "Append" node with a CRM node (e.g., HubSpot, Pipedrive, or Salesforce).
* **Add Notifications:** Connect an Email or Slack node to get notified the moment a high-value lead is found.
* **Refine Search:** Modify the HTTP Request node to include specific location biases or language preferences supported by the **Places API (New)**.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
