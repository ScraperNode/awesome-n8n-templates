# 💬 Personalized cold email system with Google Gemini, Telegram approval & Google Sheets

> ⚡ **746 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

## Personalized Cold Email System with Google Gemini AI and Telegram Approval

An AI-powered cold email automation that uses Google Gemini to generate personalized outreach and a Telegram workflow for manual approval, ensuring high-quality, human-in-the-loop campaigns.

### Features

-   **Smart Lead Selection**: Fetches leads with an "Available" status from a designated Google Sheet.
-   **AI Email Generation**: Google Gemini creates a personalized subject line and email body based on lead data.
-   **Telegram Approval**: Sends each generated email to a Telegram chat for a one-click "Approve" or "Reject" decision.
-   **Edit & Regenerate**: Allows users to provide feedback on rejected emails, which the AI uses to regenerate a new version for re-approval.
-   **Auto-Send**: Approved emails are automatically dispatched via a configured SMTP server, including a professional signature.
-   **Complete Tracking**: Updates three separate Google Sheets (Filtered Leads, Sent Leads, Emails Sent) to maintain a clear audit trail.
-   **Rate Limiting**: A one-second delay between email sends helps avoid spam filters and protects sender reputation.
-   **Batch Processing**: Handles three leads per execution by default, which is configurable to scale up or down.

### How It Works

1.  A manual trigger initiates the workflow and captures the current date and time for logging.
2.  The system fetches a set number of leads (default is three) from the `Filtered Leads` sheet where the status is "Available".
3.  It loops through each lead individually to generate and send a unique email.
4.  The AI generates a personalized email (Subject + Body) using the lead's data.
5.  A preview of the email is sent to a specified Telegram chat with "Approve" and "Reject" buttons.
6.  **If approved**: The email is sent via SMTP. The lead's status is updated, and logs are written to the `Sent Leads` and `Emails Sent` sheets. The system waits one second before processing the next lead.
7.  **If rejected**: The system prompts the user for feedback in Telegram. The feedback is combined with the original prompt to generate a new email draft, which is sent for re-approval.
8.  A final notification is sent to Telegram when the batch is complete.

### Requirements

-   Google Sheets with three tabs (see structure below).
-   Telegram Bot Token and user/group Chat ID.
-   Google Gemini API Key.
-   SMTP Email Account credentials (server, port, username, password).

---

## Setup Instructions

1.  **Google Sheets Setup**: Create a new Google Sheet. Rename three tabs to exactly `Filtered Leads`, `Sent Leads`, and `Emails Sent`. Populate the `Filtered Leads` sheet with your lead data according to the structure specified below.
2.  **API Credentials**:
    * **Google Gemini**: Generate an API key from your Google AI Studio account.
    * **Telegram Bot**: Create a new bot by messaging `@BotFather` on Telegram and follow the prompts to get your API token. Get your Chat ID by messaging `@userinfobot`.
3.  **SMTP Configuration**: Obtain the SMTP server address, port, username, and password from your email provider (e.g., Google Workspace, Outlook).
4.  **Automation Platform**: In your automation platform (e.g., n8n, Make), create a new workflow.
    * Connect your Google Sheets account using OAuth2.
    * Add the Gemini API Key, Telegram Bot Token, Chat ID, and SMTP credentials into the respective modules or credential stores.
    * Map the sheet columns to the variables in the workflow modules.

## Google Sheets Structure

The automation requires the following column headers in each sheet. The names must be exact.

* **1. Filtered Leads (Input Sheet)**
    * `FirstName`: Lead's first name.
    * `LastName`: Lead's last name.
    * `Email`: Lead's email address.
    * `CompanyName`: Name of the lead's company.
    * `JobTitle`: Lead's current job title.
    * `Website`: Company website (for AI context).
    * `LinkedIn`: URL of the lead's LinkedIn profile.
    * `Notes`: Any specific details or pain points for personalization.
    * `Status`: Workflow status. Set to `Available` for leads ready to be processed.

* **2. Sent Leads (Tracking Sheet)**
    * `Email`: Email address of the contacted lead.
    * `CompanyName`: Name of the company.
    * `TimestampSent`: Date and time the email was sent.

* **3. Emails Sent (Archive Sheet)**
    * `RecipientEmail`: The lead's email address.
    * `Subject`: The exact subject line that was sent.
    * `Body`: The full email body that was sent.
    * `TimestampSent`: Date and time the email was sent.

## Customization Guide

This template can be adapted to fit specific campaign needs.

* **Batch Size**: The number of leads processed per execution is controlled by the initial "Get Leads" module. Change the `Limit` parameter from 3 to your desired number.
* **AI Prompt**: The core of the personalization is the prompt sent to the Gemini API. Modify this prompt to change the email's tone, structure, or call-to-action. You can instruct the AI to focus on specific data from the `Notes` column or reference a different value proposition.
* **Lead Filtering**: The trigger condition is set to pull leads where `Status = "Available"`. This can be changed to any other logic, such as `Priority = "High"` or `Campaign = "Q4-Push"`, by adjusting the filter in the Google Sheets module.
* **Email Signature**: The signature is typically configured within the SMTP "Send Email" module. Update the HTML or plain text here to change the signature across all sends.
* **Telegram Notifications**: The text and buttons sent to Telegram for approval can be modified. You can add more lead data to the approval message (e.g., Job Title, Company Name) to give the approver more context.

## 🔗 Nodes Used

Send Email, Google Sheets, Telegram, AI Agent, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
