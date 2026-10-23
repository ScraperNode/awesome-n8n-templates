# 🤝 Draft and approve client portfolio emails with Gemini, Sheets, Slack and Gmail

> ⚡ **17 views** · 🤝 [CRM & Sales Operations](../)

## Description

# AI-Powered Wealth Management: Automated Client Portfolio Update & Advisor Approval

This n8n workflow automates the transition from raw financial trade data to professional client communication. It monitors a Google Sheet for portfolio changes, uses **Gemini AI** to draft a personalized, risk-aware explanation email and sends it to an advisor via **Slack** for manual approval. Once approved, the email is sent automatically via **Gmail** and the source spreadsheet is updated to "Completed."


### Quick Start Implementation

1.  [**Import** the JSON file into your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi).
2.  **Connect Credentials**: Set up OAuth2 for Google Sheets, Gmail, Slack and Google Gemini (AI).
3.  **Sheet Setup**: Ensure your Google Sheet has columns for `Client_ID`, `Client_Name`, `Trades_Made` and `Trigger_Status`.
4.  **Configure Approval**: Update the Slack node with your specific Member ID or Channel ID.
5.  **Test**: Change a row's `Trigger_Status` in your sheet to see the AI draft appear in Slack.


## What It Does

In the high-stakes world of wealth management, keeping clients informed is vital but time-consuming. This workflow bridges the gap between technical data and human relationship management. It acts as an "AI Assistant" that watches your portfolio database (Google Sheets) for any new trades. Instead of sending a cold list of tickers, it passes that data to an AI model to write a warm, professional narrative.

The workflow prioritizes safety through a **Human-in-the-Loop** design. Before any client sees the AI-generated content, the draft is sent to a dedicated Slack channel. The advisor can review the logic and tone, then simply click "Approve" or "Reject" via interactive buttons. This ensures that the final communication always meets the firm's compliance and quality standards.

Finally, the workflow handles the "paperwork." If approved, it sends the email through Gmail and updates the spreadsheet status to "Completed." If rejected, it flags the record for "Manual Review," ensuring no client request is ever lost in the shuffle.


## Who It's For

* **Wealth Managers & Financial Advisors** who want to scale personalized client touchpoints.
* **Investment Operations Teams** looking to reduce manual drafting time.
* **FinTech Startups** needing an automated communication layer for their portfolio management tools.
* **Customer Success Teams** in the financial sector who handle high-volume account updates.


## Requirements to use this workflow

* [**n8n account**](https://n8n.partnerlinks.io/om1efg2qgvwi).
* **Google Workspace Account**: For Google Sheets (database) and Gmail (messaging).
* **Slack Workspace**: To receive and action the approval notifications.
* **Google Gemini API Key**: To power the AI drafting engine.
* **Credential Permissions**: The n8n instance must have "Read/Write" access to your specific Google Sheet.


## How It Works & Set Up

### 1. Trigger & Data Ingestion

The workflow starts with the **Google Sheets Trigger** node. It is configured to "poll" your sheet every minute. It specifically watches the **Trigger_Status** column for any updates.

**Setup**: Select your Spreadsheet and the specific Sheet (tab) name. Ensure "Columns to Watch" is set to your status column.

### 2. Logic & Contextual Enrichment

The data then moves through a **Code Node** that parses the stringified trade data (like tickers and amounts) into a format the AI can read. 

**Setup**: The workflow uses "Mock" nodes for **Client Risk Profile** and **Market Context**. For production, you should replace these with a "Google Sheets: Get Row" node or an "HTTP Request" node to pull the real risk profile of the client and live market news.

### 3. AI Drafting

The **AI: Draft Client Email** node uses the Gemini model to combine the client’s name, their risk level, current market volatility and the specific trades made. It follows a strict prompt to ensure the email is professional and formatted correctly.

### 4. The Approval Gate

The **Slack** node sends the draft to the advisor. The message includes two dynamic links: **Approve** and **Reject**.

**The Wait Node**: After sending the Slack message, the workflow "pauses." It will wait for the advisor to click one of those links before moving to the next step.

### 5. Execution

Depending on the button clicked:
* **Approve**: The **Switch Node** routes the flow to Gmail, sends the message to the client and updates the Sheet status to "Completed."

* **Reject**: The flow alerts the advisor in Slack that the draft was discarded and updates the Sheet to "Needs Manual Review."


## How To Customize Nodes

* **AI Persona**: Edit the "AI: Draft Client Email" node's prompt to change the tone (e.g., make it more "Executive" or "Friendly").
* **Wait Time**: Open the **Wait: Advisor Action** node to change the timeout. If an advisor doesn't respond within 2 days (default), you can set the workflow to automatically reject or notify a manager.
* **Dynamic Email**: In the **Gmail** node, replace the hardcoded "Send To" address with an expression like `{{ $json.Client_Email }}` to ensure it goes to the correct person.


## Add‑ons

* **News API Integration**: Replace the "Mock: Market Context" node with a live news feed to provide real-time market insights in the email.
* **PDF Report Attachment**: Add a node to generate a PDF summary of the trades and attach it to the Gmail sent to the client.
* **CRM Sync**: Add a Salesforce or HubSpot node to log the communication in the client's activity history automatically.


## Use Case Examples

* **Standard Rebalancing**: Notifying clients when their portfolio is adjusted to stay within risk targets.
* **Market Volatility Alerts**: Proactively explaining why trades were made during a market dip.
* **Tax-Loss Harvesting**: Explaining the benefits of specific trades made for tax optimization at year-end.
* **New Product Onboarding**: Introducing a client to a new asset class added to their portfolio.
* **Compliance Notifications**: Ensuring all mandated trade disclosures are sent and logged instantly.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **Workflow doesn't trigger** | Trigger column name mismatch. | Ensure the column name in the "Trigger" node matches exactly with the Google Sheet. |
| **AI Draft is nonsensical** | Input data (Trades) is empty. | Check that the `Trades_Made` column in your sheet contains valid JSON or text. |
| **Slack links don't work** | n8n Webhook URL is not public. | Ensure your n8n instance is accessible from the internet (using a tunnel or static IP). |
| **Gmail fails to send** | Credential permissions. | Re-authenticate your Gmail OAuth2 and ensure "Send" permissions are granted. |


## Need Help?

Setting up automated financial workflows can be complex. If you need a hand configuring your AI prompts, connecting your live market data or building more advanced "Human-in-the-Loop" systems, we are here to help!

[**Contact WeblineIndia**](https://www.weblineindia.com/contact-us.html) to customize this workflow or build a custom automation solution tailored to your business needs.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Google Sheets Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
