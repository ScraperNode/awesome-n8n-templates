# 🎣 LinkedIn lead personalization with Google Drive, Apify & AI

> ⚡ **279 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

**This template enriches a lead list by analyzing each contact’s LinkedIn activity and auto-generating a single personalized opening line for cold outreach. Drop a spreadsheet into a Google Drive folder → the workflow parses rows, fetches LinkedIn content (recent post or profile), uses an LLM to craft a one-liner, writes the result back to Google Sheets, and sends a Telegram summary.**
⸻

## **Good to know**
	•	Works with two paths:
	•	Recent post found → personalize from the latest LinkedIn post.
	•	No recent post → personalize from profile fields (headline, about, current role).
	•	Requires valid Apify credentials for LinkedIn scrapers and LLM keys (Anthropic and/or OpenAI).
	•	Costs depend on the LLM(s) you choose and scraping usage.
	•	Replace all placeholders like [put your token here] and [put your Telegram Bot Chat ID here] before running.
	•	Respect the target platform’s terms of service when scraping LinkedIn data.
## **What this workflow does**
	1.	**Trigger (Google Drive)** – Watches a specific folder for newly uploaded lead spreadsheets.
	2.	**Download & Parse** – Downloads the file and converts it to structured items (first name, last name, company, LinkedIn URL, email, website).
	3.	**Batch Loop** – Processes each row individually.
	4.	**Fetch Activity** – Calls Apify LinkedIn Profile Posts (latest post) and records current date for recency checks.
	5.	**Recency Check (LLM)** – An OpenAI node returns true/false for “post is from the current year.”
	6.	**Branching**
	•	If TRUE → AI Agent (Anthropic) crafts a single, natural reference line based on the recent post.
	•	If FALSE → Apify LinkedIn Profile → AI Agent (Anthropic) crafts a one-liner from profile data (headline/about/current role).
	7.	**Write Back (Google Sheets)** – Updates the original sheet by matching on email and writing the personalization field.
	8.	**Notify (Telegram)** – Sends a brief completion summary with sheet name and link.
## **Requirements**
	•	Google Drive & Google Sheets connections
	•	Apify account + token for LinkedIn scrapers
	•	LLM keys: Anthropic (Claude) and/or OpenAI (you can use one or both)
	•	Telegram bot for notifications (bot token + chat ID)
## **How to use**
	1.	Connect credentials for Google, Apify, OpenAI/Anthropic, and Telegram.
	2.	Set your folder in the Google Drive Trigger to the one where you’ll drop lead sheets.
	3.	Map sheet columns to the expected headers (e.g., First Name, Last Name, Company Name for Emails, Person Linkedin Url, Email, Website).
	4.	Replace placeholders ([put your token here], [put your Telegram Bot Chat ID here]) in the respective nodes.
	5.	Upload a test spreadsheet to the watched folder and run once to validate the flow.
	6.	Review results in your sheet (new personalization column) and check Telegram for the completion message.
## **Setup**
	1.	Connect credentials - Google Drive/Sheets, Apify, OpenAI and/or Anthropic, Telegram.
	2.	Configure the Drive trigger - Select the folder where you’ll upload your lead sheets.
	3.	Map columns - Ensure your sheet has: First Name, Last Name, Company Name for Emails, Person Linkedin Url, Email, Website.
	4.	Replace placeholders - In HTTP nodes: Bearer [put your token here]. In Telegram node: [put your Telegram Bot Chat ID here]
	5.	(Optional) Adjust the recency rule - Current logic checks for current-year posts; change the prompt if you prefer 30-day windows.
## **How to use**
	1.	Upload a test spreadsheet to the watched Drive folder.
	2.	Execute the workflow once to validate.
	3.	Open your Google Sheet to see the new personalization column populated.
	4.	Check Telegram for the completion summary.
## **Customizing this template**
	•	Data sources: Add company news, website content, or X/Twitter as fallback signals.
	•	LLM choices: Use only Anthropic or only OpenAI; tweak temperature for tone.
	•	Destinations: Write to a CRM (HubSpot/Salesforce/Airtable) instead of Sheets.
	•	Notifications: Swap Telegram for Slack/Email/Discord.
## **Who it’s for**
	•	Sales & SDR teams needing authentic, scalable personalization for cold outreach.
	•	Lead gen agencies enriching spreadsheets with ready-to-use openers.
	•	Marketing & growth teams improving reply rates by referencing real prospect activity.
## **Limitations & compliance**
	•	LinkedIn scraping may be rate-limited or blocked; follow platform ToS and local laws.
	•	Costs vary with scraping volume and LLM usage.
## **Need help customizing?**
Contact me for consulting and support: [LinkedIn](https://www.linkedin.com/in/mariela-ceo-founder/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Spreadsheet File, Telegram, Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
