# 🎣 Enrich Linkedin profiles from Google Sheets via RapidAPI

> ⚡ **11,988 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

### LinkedIn Profile Enrichment Workflow

#### Who is this for?

This workflow is ideal for recruiters, sales professionals, and marketing teams who need to enrich LinkedIn profiles with additional data for lead generation, talent sourcing, or market research.

#### What problem is this workflow solving?

Manually gathering detailed LinkedIn profile information can be time-consuming and prone to errors. This workflow automates the process of enriching profile data from LinkedIn, saving time and ensuring accuracy.

#### What this workflow does

1.  **Input**: Reads LinkedIn profile URLs from a Google Sheet.
2.  **Validation**: Filters out already enriched profiles to avoid redundant processing.
3.  **Data Enrichment**: Uses RapidAPI's Fresh LinkedIn Profile Data API to retrieve detailed profile information.
4.  **Output**: Updates the Google Sheet with enriched profile data, appending new information efficiently.

#### Setup

1.  **Google Sheet**: Create a sheet with a column named `linkedin_url` and populate it with the profile URLs to enrich.
2.  **RapidAPI Account**: Sign up at [RapidAPI](https://rapidapi.com) and subscribe to the Real-Time Data Enrichment API.
3.  **API Integration**: Replace the `x-rapidapi-key` and `x-rapidapi-host` values with your credentials from RapidAPI.
4.  **Run the Workflow**: Trigger the workflow and monitor the updates to your Google Sheet.

#### How to customize this workflow

*   **Filter Criteria**: Modify the filter step to include additional conditions for processing profiles.
*   **API Configuration**: Adjust API parameters to retrieve specific fields or extend usage.
*   **Output Format**: Customize how the enriched data is appended to the Google Sheet (e.g., format, column mappings).
*   **Error Handling**: Add steps to handle API rate limits or missing data for smoother automation.

This workflow streamlines LinkedIn profile enrichment, making it faster and more effective for data-driven decision-making.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
