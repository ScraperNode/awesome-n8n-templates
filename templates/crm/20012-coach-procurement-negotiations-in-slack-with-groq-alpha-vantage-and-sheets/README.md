# 🤝 Coach procurement negotiations in Slack with Groq, Alpha Vantage, and Sheets

> ⚡ **18 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow receives Slack slash commands and interactive events to generate a procurement negotiation intelligence report using Alpha Vantage aluminum prices, supplier deal history from Google Sheets, and Groq-hosted LLM prompts, then collects live supplier responses via a Slack modal and logs the session back to Google Sheets.

## How it works
1. Receives a POST request from Slack (slash command, button click, or modal submission) through an n8n webhook endpoint.
2. When a slash command is received, fetches the latest aluminum market price from Alpha Vantage and pulls the supplier’s historical negotiation records from Google Sheets based on the supplied Supplier_ID.
3. Combines the market price and deal history and sends them to Groq LLM prompts to extract a structured supplier profile (pricing flexibility, concession tendencies, resistance triggers, and a recommended tactic).
4. Uses Groq again to generate three structured pushback scenarios (cooperative, moderate, aggressive) with a specific buyer counter-tactic for each.
5. Posts a Slack Block Kit message to the original response_url containing the supplier summary, the three scenarios, and a “Generate Live Counteroffer” button.
6. When the button is clicked, posts a loading message to Slack and opens a Slack modal that captures what the supplier just said, embedding the prior strategy context in the modal metadata.
7. When the modal is submitted, sends the supplier’s live response to Groq to produce a short counter-tactic and appends/updates a negotiation session log in Google Sheets with the user, timestamp, supplier response, and generated tactic.

## Setup
1. Create and configure a Slack app (slash command and interactivity enabled) and point its request URLs to this workflow’s webhook URL (path: /slack/negotiate).
2. Add a Slack OAuth token (Bot/User token) and set it in the “views.open” request Authorization header used to open the modal.
3. Add Google Sheets OAuth credentials and update the spreadsheet ID/sheet names so the workflow can read supplier history (Sheet1) and write logs (Logs).
4. Add an Alpha Vantage API key and set it as the apikey query parameter for the aluminum price request.
5. Add Groq API credentials for the LLM steps and adjust the model names if your Groq account requires different model IDs.
6. Ensure your Google Sheet includes a Supplier_ID column for lookups and the log sheet has columns matching the fields written (User ID, Timestamp, Session ID, Supplier ID, Supplier Response, Generated AI Tactic, Recommended Strategy).

## Additional info
## Add‑ons

* **CRM Integration:** Replace the Google Sheets nodes with Salesforce or HubSpot nodes to pull supplier history directly from your CRM and log the generated tactics directly onto the CRM Contact record.
* **Email Summaries:** Add a Gmail/Outlook node at the end of the logging branch to email the Department Head a summary report whenever an aggressive pushback scenario is encountered.
* **Voice-to-Text Setup:** Integrate a speech-to-text service (like Whisper) so the buyer can speak the supplier's response into a voice memo rather than typing it into the modal.


## Use Case Examples

While designed for procurement, this logic is highly adaptable. Similar use cases include:

1. **Sales Objection Handling:** Sales reps use a slash command to pull up a prospect's history; the AI generates live counter-arguments when the prospect pushes back on pricing during a demo.
2. **HR Salary Negotiations:** Recruiters input a candidate's counter-offer into the Slack modal, and the AI suggests a balanced total compensation package based on live market salary data.
3. **IT Vendor Renewals:** Quickly evaluating software contract renewals by aggregating historical downtime logs and generating negotiation points for service level agreement (SLA) penalties.
4. **Real Estate Deal Brokering:** Agents use the bot to instantly parse live interest rate data and historical property tax records to craft counter-offers for sellers in real-time.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| --- | --- | --- |
| **Slack says "Dispatch failed" or times out** | Webhook URL mismatch or node not active. | Ensure your n8n workflow is active and the production Webhook URL exactly matches the one pasted in your Slack App's Interactivity settings. |
| **AI Node throws JSON Schema error** | LLM hallucinated outside the required structure. | Open the Groq model nodes and ensure you are using a highly capable model like `gpt-oss-120b`. You can also clarify the output instructions in the prompt. |
| **Google Sheets node fails to append** | Incorrect mapping or missing columns. | Check the *Log Negotiation Session* node. Ensure your destination sheet has exactly the columns defined (e.g., `Supplier ID`, `Session ID`, `Timestamp`). |
| **Alpha Vantage API returns error** | API limit reached or missing key. | Verify that your API key is pasted into the `apikey` parameter in the *Fetch Aluminum Price* node. |


## Need Help?

Building highly interactive Slack bots integrated with real-time API data and AI agents can get complex. If you need a helping hand to configure your Slack Interactivity payloads, tune your Groq AI prompts, or customize Add-Ons like CRM integrations, we are here for you!

We encourage you to [contact WeblineIndia](https://www.weblineindia.com/contact-us.html) for expert assistance with setting up this specific workflow or to help you build similar custom automation processes for your enterprise.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Basic LLM Chain, Structured Output Parser, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
