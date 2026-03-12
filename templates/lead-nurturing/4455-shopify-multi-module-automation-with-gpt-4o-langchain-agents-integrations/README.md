# 💬 Shopify multi-module automation with GPT-4o, Langchain agents & integrations

> ⚡ **2,364 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

**This n8n workflow orchestrates a powerful suite of AI Agents and automations to manage and optimize various aspects of an e-commerce operation, particularly for platforms like Shopify. It leverages Langchain AI Agents powered by OpenAI, along with a variety of integrated services, to handle customer support, product recommendations, abandoned cart recovery, inventory management, post-purchase engagement, review monitoring, marketing campaigns, and operational alerts.**

# Tools & Services Used
-   **n8n:** Core automation and orchestration platform.
-   **Langchain AI Agents:** For intelligent decision-making, task execution, and natural language processing across multiple modules.
-   **OpenAI (e.g., GPT-4o Mini):** Powers the AI Agents and direct LLM calls for tasks like sentiment analysis and content generation.
-   **Shopify (Conceptual - requires specific API/Webhook setup):** For triggers (abandoned cart, order delivered) and actions (fetching products/inventory, creating discounts).
-   **Google Sheets:** Used as a data store for FAQs, logging low stock, review databases, and campaign outcomes.
-   **Slack:** For internal team notifications (escalations, low stock, negative reviews).
-   **Twilio (or similar SMS service):** For sending SMS alerts (cart recovery, restock notifications).
-   **Email (Generic SMTP/API):** For sending various emails (AI responses, recovery emails, review requests, campaign emails).
-   **Notion:** For logging customer interactions.
-   **HTTP Request Nodes:** For generic API interactions (fetching customer info, product search, CRM, campaign tracking).
-   **Webhook Nodes:** For receiving external triggers (incoming messages, product inquiries, review submissions, restock signals).
-   **Cron Nodes:** For scheduled tasks (hourly inventory checks, daily campaigns).

# Workflow Overview
This workflow is a collection of interconnected sub-workflows, each designed to automate a specific e-commerce process:

## 1. Customer Support & Escalation
Handles incoming customer messages, attempts to answer with FAQs or order status using an AI Agent, and escalates to a human agent via Slack if necessary. Logs interactions to Notion.

## 2. Product Inquiry & Recommendation
Processes product inquiries, searches a product catalog, filters/sorts results, uses an AI Agent for selection refinement, and can build a product carousel for user response.

## 3. Abandoned Cart Recovery
Detects abandoned carts, fetches customer data, uses an AI Agent to strategize recovery (e.g., offer discounts), and sends follow-up communications via email/SMS.

## 4. Inventory Management (Low Stock Alert)
Periodically checks inventory levels, identifies low-stock items, uses an AI Agent to format reports, and notifies relevant teams via Slack/email, logging to Google Sheets.

## 5. Post-Purchase Review Request
After a set period post-delivery, an AI Agent drafts and initiates sending a personalized product review request email to the customer.

## 6. Review Monitoring & Flagging
Listens for new product reviews, uses an AI model for sentiment analysis, alerts a support team for negative reviews via Slack, and logs all reviews.

## 7. Scheduled Marketing Campaigns
Fetches target audiences, segments them, uses AI Agents to generate tailored email content, sends campaigns, tracks basic metrics, and employs another AI Agent to suggest campaign adjustments.

## 8. Manual Restock Alert & Logging
Allows triggering a restock notification via webhook, sends an SMS alert, and uses an LLM to log the event.

# Prerequisites
Ensure you have active accounts and necessary API keys/credentials for:

-   OpenAI
-   Shopify (or your e-commerce platform API)
-   Google Cloud (for Google Sheets API)
-   Slack (Bot Token)
-   Twilio (Account SID, Auth Token, From Number)
-   Your Email Sending Service (SMTP details or API key)
-   Notion (Integration Token)
-   Any other external APIs used (e.g., CRM, Product Search, Customer Info, Campaign Tracking)

# How to Use This Template

## Step 1: Import the Template
-   Open your n8n instance.
-   Go to “Workflows” &gt; “Create Workflow”.
-   Click the three dots (…) &gt; “Import from File”.
-   Upload the downloaded JSON file of this workflow.

## Step 2: Configure Critical Nodes & Credentials
This is the most crucial step. Systematically go through each of the 8 sections outlined in the Sticky Notes within the workflow and configure the relevant nodes:

-   **SECTION 1 (Customer Support):**
    -   `Get FAQs Data` (Google Sheets): Set `sheetId` to **YOUR_SHEET_ID_HERE** and configure Google API credentials.
    -   `Lookup Order API` (HTTP Request): Set `url` to **YOUR_ORDER_LOOKUP_API_ENDPOINT_HERE**.
    -   `Notify Human Agent` (Slack): Configure Slack API credentials and `channel`.
    -   `Send AI Response to Customer` (HTTP Request): Set `url` to **YOUR_CUSTOMER_RESPONSE_API_ENDPOINT_HERE**.
    -   `Store to Notion` (Notion): Set `pageId` (Database ID) to **YOUR_NOTION_DATABASE_URL_OR_ID_HERE** and Notion API credentials.
-   **SECTION 2 (Product Inquiry):**
    -   `Search Products API` (HTTP Request): Set `url` to **YOUR_PRODUCT_SEARCH_API_ENDPOINT_HERE**.
    -   `Build Product Carousel` (Function): Update **YOUR_DEFAULT_PRODUCT_IMAGE_URL_HERE** and **YOUR_FALLBACK_PRODUCT_URL_HERE**.
    -   `Respond to User with Carousel` (HTTP Request): Set `url` for sending carousel data.
-   **SECTION 3 (Abandoned Cart):**
    -   `Detect Abandoned Cart` (Shopify Trigger): Configure Shopify credentials and ensure the correct trigger event.
    -   `Fetch Customer Info` (HTTP Request): Set `url` to **YOUR_CUSTOMER_INFO_API_ENDPOINT_HERE**.
    -   `Create Discount (if applicable)` (Shopify): Configure Shopify credentials and review discount creation parameters.
    -   `Send Recovery Email` (HTTP Request/Email Send): Set email API endpoint or SMTP credentials.
    -   `Send SMS Reminder` (Twilio): Configure Twilio credentials and `from` number (**YOUR_TWILIO_PHONE_NUMBER_HERE**).
-   **SECTION 4 (Low Stock Alerts):**
    -   `Fetch Inventory` (Shopify): Configure Shopify credentials.
    -   `Notify Slack (Low Stock)` (Slack): Configure Slack API credentials and `channel`.
    -   `Generate Email Report (Low Stock)` (Email Send): Configure SMTP/email credentials and `to` address.
    -   `Export to Sheets (Low Stock Log)` (Google Sheets): Set `sheetId` to **YOUR_INVENTORY_LOG_SHEET_ID_HERE** and Google API credentials.
-   **SECTION 5 (Review Request):**
    -   `Order Delivered Trigger` (Shopify Trigger): Configure Shopify credentials.
    -   `Fetch Customer Data (for Review)` (HTTP Request): Set `url` to **YOUR_CUSTOMER_INFO_API_ENDPOINT_HERE**.
    -   `DraftReviewRequestEmail` (Tool): Update **YOUR_PRODUCT_PAGE_URL_BASE_HERE** and **YOUR_WEBSITE_URL_HERE**.
    -   `Send Review Request Email` (Email Send): Configure SMTP/email credentials.
-   **SECTION 6 (Review Monitoring):**
    -   `OpenAI` node (currently Assistant Create): **IMPORTANT:** For sentiment analysis, **change this node type to `@n8n/n8n-nodes-langchain.lmChatOpenAi`**. Then configure its prompt for sentiment analysis (e.g., System: "Analyze sentiment. Respond with positive, negative, or neutral." User: "Review: {{ $('Listen for Review Webhook').first().json.body.review_text }}"). Set OpenAI credentials.
    -   `Notify Support Team (Negative Review)` (Slack): Configure Slack API credentials and `channel`.
    -   `Add Review to Database` (Google Sheets): Set `sheetId` to **YOUR_REVIEWS_DATABASE_SHEET_ID_HERE** and Google API credentials.
-   **SECTION 7 (Marketing Campaigns):**
    -   `Fetch Target Audience API` (HTTP Request): Set `url` to **YOUR_CRM_API_FOR_AUDIENCE_HERE**.
    -   `GenerateCampaignEmailVariant` (Tool): Update **YOUR_CAMPAIGN_LANDING_PAGE_HERE**.
    -   `Send Campaign Email` (Email Send): Configure SMTP/email credentials.
    -   `Track Campaign Metrics API` (HTTP Request): Set `url` for **YOUR_CAMPAIGN_TRACKING_API_ENDPOINT_HERE**.
    -   `Log Campaign Outcome & Adjustments` (Google Sheets): Set `sheetId` to **YOUR_CAMPAIGN_LOG_SHEET_ID_HERE** and Google API credentials.
-   **SECTION 8 (Manual Restock):**
    -   `Send SMS Alert (Restock)` (Twilio): Configure Twilio credentials, `from` number (**YOUR_TWILIO_PHONE_NUMBER_HERE**), and `to` (**WAREHOUSE_MANAGER_PHONE_NUMBER_HERE**).
    -   `OpenAI Chat Model` (for Basic LLM Chain): Configure OpenAI credentials.
    -   `Send restock Request Email1` (Email Send): Configure SMTP/email credentials and `to` address.

## Step 3: Implement Tool Logic
-   Go into each `@n8n/n8n-nodes-langchain.toolCode` node (e.g., `SearchFAQs`, `RefineProductSelection`, `DetermineDiscount`, etc.).
-   The current JavaScript is placeholder. **You MUST replace this with actual JavaScript logic** that performs the intended action for each tool, often by making API calls or processing data based on the agent's input.

## Step 4: Review AI Agent Prompts & Tool Connections
-   Carefully review the `systemMessage` for each AI Agent node to ensure it accurately reflects its role and how it should use its tools.
-   **CRITICAL:** Verify the `index` for tools connected to each AI Agent. Each tool connected to a single agent must have a unique, sequential index (0, 1, 2, ...).
    -   **AI Agent (*ID `cd71629d-...`* in your JSON):** `SearchFAQs` tool should be `index: 0`, `LookupOrderStatus` tool should be `index: 1`. *(Please double-check and correct the connection indices in your actual workflow file if they are still both pointing to index 0).*
    -   **AI Agent6 (*ID `4c24879b-...`* in your JSON):** `AnalyzeCampaignPerformance` tool should be `index: 0`, `SuggestCampaignAdjustments` tool should be `index: 1`. *(Please double-check and correct the connection indices in your actual workflow file if they are still both pointing to index 0).*

# Initial Test Run
-   Disable most of the workflow sections initially.
-   Focus on one section at a time (e.g., Section 1: Customer Support).
-   Manually trigger the first node (e.g., simulate an incoming webhook).
-   Execute node by node, checking the output and debugging configurations and tool logic.
-   For time-based triggers (Cron, Wait nodes), temporarily shorten the durations for faster testing.
-   Once a section is working, move to the next.

# Use Cases
-   **E-commerce Businesses (Shopify, etc.):** To automate customer service, marketing, sales recovery, and operations.
-   **Digital Marketing Agencies:** To offer advanced automation services to e-commerce clients.
-   **Freelancers & Consultants:** To build and deploy sophisticated AI-driven e-commerce solutions.
-   **n8n Developers:** As a comprehensive template and learning resource for building complex multi-agent systems.

## 🔗 Nodes Used

Cron, Send Email, Function, Google Sheets, HTTP Request, Slack

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
