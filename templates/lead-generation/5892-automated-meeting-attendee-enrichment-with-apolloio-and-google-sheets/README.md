# 🎣 Automated meeting attendee enrichment with Apollo.io and Google Sheets

> ⚡ **522 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Meeting Prep: Automated Meeting Attendee Enrichment

### Overview
This workflow automates the process of gathering critical information about your meeting attendees right after they book a meeting. Whether they book through Calendly or Cal.com, this workflow extracts key details, uses Apollo.io to enrich their profiles with company and contact data, and logs everything into a Google Sheet for easy access. This ensures you're always prepared with relevant insights before every meeting.

### Use Case
This workflow is perfect for:
* **Sales Professionals**: Get instant insights into prospects' companies, roles, and social presence before calls.
* **Customer Success Teams**: Understand your clients' business context to provide more tailored support.
* **Recruiters**: Gather comprehensive candidate information ahead of interviews.
* **Consultants**: Prepare for client meetings with a deeper understanding of their organization and industry.
* **Anyone who takes meetings**: Save time on manual research and ensure you always have the data you need to make a great impression.

---

### How It Works

1.  **Meeting Booking Trigger**: The workflow springs into action the moment a new meeting is booked. It supports two popular scheduling platforms:
    * **Calendly**: Triggers when an `invitee.created` event occurs.
    * **Cal.com**: Triggers on a `BOOKING_CREATED` event.
2.  **Extract Initial Data**: From the booking event, the workflow extracts essential information like the attendee's name, email, company, and any notes provided during scheduling.
3.  **Log Initial Entry**: It immediately logs these initial details into your designated Google Sheet ("Meeting Prep" spreadsheet). This ensures a record exists, even if further enrichment isn't possible.
4.  **Generate Apollo Query**: Using the extracted name and company, the workflow dynamically builds a search URL for **Apollo.io**. This query is designed to find the most relevant person and company profiles on Apollo.
5.  **Enrich with Apollo.io**:
    * The generated Apollo URL is then used to **scrape Apollo.io** via an Apify Scraper. This step attempts to pull extensive data, including job title, location, phone numbers, company size, industry, website URL, and social media profiles (LinkedIn, Twitter, Facebook, Github) for both the person and their company.
    * A conditional check verifies if data was successfully retrieved from Apollo.
6.  **Update Google Sheet**:
    * **If data is available from Apollo**: The Google Sheet entry is updated with all the rich, newly found information, changing the status to "Enriched".
    * **If data is not available**: The Google Sheet entry's status is updated to "Info Not Available," clearly indicating that manual research might be needed.

---

### How to Set It Up

To set up this powerful meeting prep workflow, follow these steps:

1.  **Get Your API Keys**:
    * **Calendly**: Obtain your Calendly API key for the "Calendly Trigger" node.
    * **Cal.com**: Get your Cal.com API key for the "Cal.com Trigger1" node.
    * **Apify**: You'll need an Apify API token. Replace `&lt;YOURAPIKEY&gt;` in the "Scrape Apollo" node's URL with your actual Apify token.
2.  **Google Sheet Setup**:
    * **Copy the Template**: Make a copy of the provided Google Sheet Template ("Meeting Prep") into your own Google Drive. This template has the necessary columns for enriched data.
    * **Connect Google Sheets**: Ensure your Google Sheets OAuth2 API credentials are set up in n8n and linked to the "Google Sheets1" and "Google Sheets2" nodes.
    * **Update Sheet IDs**: In both "Google Sheets1" and "Google Sheets2" nodes, update the `documentId` with the ID of *your copied "Meeting Prep"* Google Sheet.
3.  **Import the Workflow**: Import the provided workflow JSON into your n8n instance.
4.  **Activate and Test**:
    * Once all credentials and sheet IDs are configured, activate the workflow.
    * Test it by booking a new meeting through your connected Calendly or Cal.com account. Watch as your Google Sheet automatically populates with detailed attendee information!

This workflow will dramatically cut down on your meeting preparation time, allowing you to focus on more strategic conversations.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Calendly Trigger, Cal.com Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
