# 📱 Automated daily customer win-back campaign with AI offers

> ⚡ **1,124 views** · 📱 [Social Media & Email Marketing](../)

## Description

Proactively retain customers predicted to churn with this automated n8n workflow. Running daily, it identifies high-risk customers from your Google Sheet, uses Google Gemini to generate personalized win-back offers based on their churn score and preferences, sends these offers via Gmail, and logs all actions for tracking.

### What does this workflow do?

This workflow automates the critical process of customer retention by:

*   **Running automatically every day** on a schedule you define.
*   **Fetching customer data** from a designated Google Sheet containing metrics like predicted churn scores and preferred categories.
*   **Filtering** to identify customers with a high churn risk (score &gt; 0.7) who haven't recently received a specific campaign (based on the `created_campaign_date` field - *you might need to adjust this logic*).
*   Using **Google Gemini AI** to dynamically generate one of three types of win-back offers, personalized based on the customer's specific churn score and preferred product categories:
    *   **Informational:** (Score 0.7-0.8) Highlights new items in preferred categories.
    *   **Bonus Points:** (Score 0.8-0.9) Offers points for purchases in a target category (e.g., Books).
    *   **Discount Percentage:** (Score 0.9-1.0) Offers a percentage discount in a target category (e.g., Books).
*   **Sending the personalized offer** directly to the customer via **Gmail**.
*   **Logging** each sent offer or the absence of eligible customers for the day in a separate 'SYSTEM_LOG' Google Sheet for monitoring and analysis.

### Who is this for?

*   **CRM Managers & Retention Specialists:** Automate personalized outreach to at-risk customers.
*   **Marketing Teams:** Implement data-driven retention campaigns with minimal manual effort.
*   **E-commerce Businesses & Subscription Services:** Proactively reduce churn and increase customer lifetime value.
*   **Anyone** using customer data (especially churn prediction scores) who wants to automate personalized retention efforts via email.

### Benefits

*   **Automated Retention:** Set it up once, and it runs daily to engage at-risk customers automatically.
*   **AI-Powered Personalization:** Go beyond generic offers; tailor messages based on churn risk and customer preferences using Gemini.
*   **Proactive Churn Reduction:** Intervene *before* customers leave by addressing high churn scores with relevant offers.
*   **Scalability:** Handle personalized outreach for many customers without manual intervention.
*   **Improved Customer Loyalty:** Show customers you value them with relevant, timely offers.
*   **Action Logging:** Keep track of which customers received offers and when the workflow ran.

### How it Works

1.  **Daily Trigger:** The workflow starts automatically based on the schedule set (e.g., daily at 9 AM).
2.  **Fetch Data:** Reads all customer data from your 'Customer Data' Google Sheet.
3.  **Filter Customers:** Selects customers where `predicted_churn_score &gt; 0.7` AND `created_campaign_date` is empty (*verify this condition fits your needs*).
4.  **Check for Eligibility:** Determines if any customers passed the filter.
5.  **IF Eligible Customers Found:**
    *   **Loop:** Processes each eligible customer one by one.
    *   **Generate Offer (Gemini):** Sends the customer's `predicted_churn_score` and `preferred_categories` to Gemini. Gemini analyzes these and the defined rules to create the appropriate offer type, value, title, and detailed message, returning it as structured JSON.
    *   **Log Sent Offer:** Records `action_taken = SENT_WINBACK_OFFER`, the timestamp, and `customer_id` in the 'SYSTEM_LOG' sheet.
    *   **Send Email:** Uses the Gmail node to send an email to the customer's `user_mail` with the generated `offer_title` as the subject and `offer_details` as the body.
6.  **IF No Eligible Customers Found:**
    *   **Set Status:** Creates a record indicating `system_log = NOT_FOUND`.
    *   **Log Status:** Records this 'NOT_FOUND' status and the current timestamp in the 'SYSTEM_LOG' sheet.

### n8n Nodes Used

*   Schedule Trigger
*   Google Sheets (x3 - Read Customers, Log Sent Offer, Log Not Found)
*   Filter
*   If
*   SplitInBatches (Used for Looping)
*   Langchain Chain - LLM (Gemini Offer Generation)
*   Langchain Chat Model - Google Gemini
*   Langchain Output Parser - Structured
*   Set (Prepare 'Not Found' Log)
*   Gmail (Send Offer Email)

### Prerequisites

*   Active n8n instance (Cloud or Self-Hosted).
*   **Google Account** with access to Google Sheets and Gmail.
*   **Google Sheets API Credentials (OAuth2):** Configured in n8n.
*   **Two Google Sheets:**
    *   **'Customer Data' Sheet:** Must contain columns like `customer_id`, `predicted_churn_score` (numeric), `preferred_categories` (string, e.g., `["Books", "Electronics"]`), `user_mail` (string), and potentially `created_campaign_date` (date/string).
    *   **'SYSTEM_LOG' Sheet:** Should have columns like `system_log` (string), `date` (string/timestamp), and `customer_id` (string, optional for 'NOT_FOUND' logs).
*   **Google Cloud Project** with the Vertex AI API enabled.
*   **Google Gemini API Credentials:** Configured in n8n (usually via Google Vertex AI credentials).
*   **Gmail API Credentials (OAuth2):** Configured in n8n with permission to send emails.

### Setup

1.  Import the workflow JSON into your n8n instance.
2.  **Configure Schedule Trigger:** Set the desired daily run time (e.g., `Hours` set to `9`).
3.  **Configure Google Sheets Nodes:**
    *   Select your Google Sheets OAuth2 credentials for all three Google Sheets nodes.
    *   **`1. Fetch Customer Data...`:** Enter your 'Customer Data' Spreadsheet ID and Sheet Name.
    *   **`5b. Log Sent Offer...`:** Enter your 'SYSTEM_LOG' Spreadsheet ID and Sheet Name. Verify column mapping.
    *   **`3b. Log 'Not Found'...`:** Enter your 'SYSTEM_LOG' Spreadsheet ID and Sheet Name. Verify column mapping.
4.  **Configure Filter Node (`2. Filter High Churn Risk...`):**
    *   **Crucially, review the second condition:** `{{ $json.created_campaign_date.isEmpty() }}`. Ensure this field and logic correctly identify customers who *should* receive the offer based on your campaign strategy. Modify or remove if necessary.
5.  **Configure Google Gemini Nodes:** Select your configured Google Vertex AI / Gemini credentials in the `Google Gemini Chat Model` node. Review the prompt in the `5a. Generate Win-Back Offer...` node to ensure the offer logic matches your business rules (especially category names like "Books").
6.  **Configure Gmail Node (`5c. Send Win-Back Offer...`):** Select your Gmail OAuth2 credentials.
7.  **Activate the workflow.**
8.  Ensure your 'Customer Data' and 'SYSTEM_LOG' Google Sheets are correctly set up and populated. The workflow will run automatically at the next scheduled time.

This workflow provides a powerful, automated way to engage customers showing signs of churn, using personalized AI-driven offers to encourage them to stay. Adapt the filtering and offer logic to perfectly match your business needs!

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
