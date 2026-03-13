# 🎣 Discover & enrich decision-makers with Apollo and human verification

> ⚡ **2,590 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

## 🧩 What This Workflow Does
This workflow automates the process of identifying and enriching decision-maker contacts from a list of companies. By integrating with Apollo's APIs and Google Sheets, it streamlines lead generation, ensures data accuracy through human verification, and maintains an organized leads database.

## 📚 Use Case
Ideal for sales and marketing teams aiming to:
- Automate the discovery of key decision-makers (e.g., CEOs, CTOs).
- Enrich contact information with LinkedIn profiles, emails, and phone numbers.
- Maintain an up-to-date leads database with minimal manual intervention.
- Receive weekly summaries of newly verified leads.

## 🧪 Setup
**1.** Google Sheets Preparation:

- Use the following pre-configured Google Sheet: [Company Decision Maker Discovery Sheet](https://docs.google.com/spreadsheets/d/1KqKFZ7Uxrt1MivBjLklGdPRMgNBhEc0slpthoSjt2wI/edit?gid=0#gid=0).
- This spreadsheet includes the necessary tabs and columns: `Companies`, `Contacts`, and `Contacts (Verified)`.
- It also contains a custom `onEdit` Apps Script function that automatically updates the Status column to `Pending` whenever the Domain field is modified.
- To review or modify the script, navigate to __Extensions &gt; Apps Script__ within the Google Sheet.

**2.** Credentials Setup:

- Configure the following credentials in your n8n instance:
	- Google Sheets: To read from and write to the spreadsheet.
	- Slack: To send verification prompts and weekly reports.
	- Apollo: To access the Organization Search, Organization Enrichment, People Search, and Bulk People Enrichment APIs.
	- LLM Service (e.g., OpenAI): To generate company summaries and determine departments based on job titles.

**3.** Workflow Configuration:

- Import the workflow into your n8n instance.
- Update the nodes to reference the correct Google Sheet and Slack channel.
- Ensure that the Apollo and LLM nodes have the appropriate API keys and configurations.

**4.** Testing the Workflow:

- Add a new company entry in the Companies tab of the Google Sheet.
- Verify that the workflow triggers automatically, processes the data, and updates the Contacts and Contacts (Verified) tabs accordingly.
- Check Slack for any verification prompts and confirm that weekly reports are sent as scheduled.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Google Sheets Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
