# 🎫 Manage customer inquiries from email & web forms with Slack & Google Sheets

> ⚡ **133 views** · 🎫 [Ticket Management & Triage](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n workflow is designed to centralize the management and tracking of customer inquiries received through multiple channels (email and web forms).

**Who's it for?**

*   Customer support teams
*   Marketing teams
*   Sales teams
*   Small to medium-sized businesses
*   Individuals looking to streamline customer inquiry processes

**How it works / What it does**

This workflow is designed to automatically collect, process, route, and track customer inquiries from different sources.

1.  **Multi-Channel Input**: The workflow listens for inquiries from both incoming emails and web form submissions.
    *   **Email Trigger**: Monitors a specific inbox for sent emails.
    *   **Webhook - Web Form**: Listens for web form data submitted to a designated endpoint.

2.  **Data Extraction and Parsing**:
    *   **Extract Email Content**: Extracts HTML content from incoming emails to get a clean text message.
    *   **Parse Email Data**: Extracts relevant information from the email, such as customer name, email address, subject, message, received timestamp, source ("email"), and inquiry type (e.g., "urgent", "billing", "general") based on the subject line.
    *   **Parse Webhook Data**: Extracts customer name, email, subject, message, received timestamp, source ("webform"), and inquiry type from the web form data based on the provided type or a default of "general".

3.  **Merge Inquiries**: The parsed email and web form inquiry data are combined into a single stream for continued processing.

4.  **Route by Inquiry Type**: The workflow then routes the inquiries based on the extracted `inquiryType`.
    *   **Urgent Inquiries**: Inquiries marked as "urgent" are routed to a specific Slack channel for immediate alerts.
    *   **General Inquiries**: Inquiries marked as "general" are notified in another Slack channel.
    *   **Billing Inquiries**: Inquiries marked as "billing" are routed to the general inquiries channel, or can be customized for a separate channel if needed.

5.  **Save to Google Sheets**: All inquiry data is logged into a Google Sheet, which serves as a central repository, including details like customer name, email, subject, message, source, received timestamp, and inquiry type.

6.  **Send Auto-Reply Email**: Customers receive an automated email reply confirming that their inquiry has been successfully received.

**How to set up**

1.  **Google Sheets**:
    *   Create a new spreadsheet in your Google Drive.
    *   Name the first sheet "Inquiries" and create the following header row: `customerName`, `customerEmail`, `subject`, `message`, `source`, `receivedAt`, `inquiryType`.
    *   In the **'Save to Google Sheets'** node, configure the Spreadsheet ID and Sheet Name. Link your Google Sheets credentials.

2.  **Email Trigger (IMAP)**:
    *   Set up the **'Email Trigger'** node to connect to your IMAP email account. Test it to ensure it correctly listens for incoming emails before activating the workflow.

3.  **Webhook - Web Form**:
    *   Copy the Webhook URL from the **'Webhook - Web Form'** node and configure your web form to submit data to it. Ensure your web form sends fields like `name`, `email`, `subject`, `message`, and `type` in JSON format.

4.  **Slack**:
    *   Configure your Slack credentials to connect to your Slack workspace.
    *   Update the relevant Slack Channel IDs in both the **'Notify Urgent - Slack'** and **'Notify General - Slack'** nodes for sending notifications for urgent and general inquiries.

5.  **Gmail**:
    *   Set up your Gmail credentials to connect to your Gmail account.
    *   Ensure the **'Send Auto-Reply Email'** node is correctly linked to your sending Gmail account.

**Requirements**

*   An n8n instance
*   A Google Sheets account
*   An IMAP-enabled email account
*   A Slack workspace
*   A Gmail account
*   A basic web form (to integrate with the Webhook node)

**How to customize the workflow**

*   **Add more Inquiry Types**: You can add more specific inquiry types (e.g., "technical support", "returns") by adding more rules in the **'Route by Inquiry Type'** node.
*   **Additional Notification Channels**: To integrate other notification systems (e.g., Microsoft Teams, Discord, SMS) beyond Slack, create new routing outputs and add new notification nodes for the desired service.
*   **CRM Integration**: Instead of or in addition to saving data to Google Sheets, you can add new nodes to connect to CRM systems like Salesforce, HubSpot, or others.
*   **Prioritization and Escalation**: Implement more complex logic to trigger escalation processes or prioritization rules based on inquiry type or keywords.
*   **AI Sentiment Analysis**: Integrate an AI node to analyze the sentiment of inquiry messages and route or prioritize them accordingly.


`

## 🔗 Nodes Used

Email Trigger (IMAP), Google Sheets, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
