# 💬 AI-powered WhatsApp support bot with ticket creation for Google Sheets

> ⚡ **280 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This n8n workflow automates the entire process, from learning based on your website data, documents to a multi-channel chatbot with automated ticket creation. It's the perfect solution for businesses looking to build a powerful and intelligent chatbot, replace their customer support operations team with a website widget support and a dedicated WhatsApp support agent.

#### How it Works

1.  **Data Ingestion & Vectorization**:
    * The workflow starts with a simple form where you can input your website's **sitemap**, specific **page URLs**, and relevant documents containing your business information.
    * n8n crawls and scrapes all the data from these sources.
    * The scraped data is then processed and vectorized (converted into numerical representations).
    * These vector embeddings are stored in a **Pinecone Vector DB** to create a powerful and searchable knowledge base.

2.  **Multi-Channel User Interaction**:
    * **Website Widget Support**: An integrated chatbot can be embedded directly onto your website. Users can ask questions and receive instant, accurate answers based on the vectorized data in Pinecone.
    * **WhatsApp Support Agent**: A **WhatsApp trigger** allows users to interact with your business via WhatsApp. The bot responds to queries using the same knowledge base, making support accessible on a popular messaging platform.

3.  **Intelligent Ticket Creation**:
    * If a user describes a specific issue that requires human intervention, the bot will intelligently ask for more specific information (e.g., order number, user ID).
    * Once the required information is provided, the workflow automatically creates a new support **ticket** in a designated **Google Sheet**.

4.  **Automated Communication**:
    * After a ticket is created, the workflow automatically sends a confirmation email to the user.
    * This email contains the ticket details and a confirmation that their issue has been logged, ensuring a smooth and professional customer experience.

#### Requirements

* **n8n**: A self-hosted or cloud instance of n8n.
* **Pinecone**: An account and API key for Pinecone to store your vector data.
* **Google Sheets**: A Google account with a designated spreadsheet for storing support tickets.
* **Email Service**: An email service provider (e.g., Gmail, SendGrid, Mailgun) configured with n8n to send automated emails.
* **WhatsApp Business API**: Access to the WhatsApp Business API for the WhatsApp trigger.

#### How to Use

1.  **Configure Credentials**: Set up your credentials for Pinecone, Google Sheets, your email service, and the WhatsApp Business API within n8n.
2.  **Populate the Knowledge Base**: Use the provided form to enter your website's sitemap, specific URLs, and documents. Run the initial part of the workflow to scrape and store this data in Pinecone.
3.  **Activate the Chatbots**: Deploy the website widget and activate the WhatsApp trigger.
4.  **Monitor and Manage**: Monitor the incoming tickets in your Google Sheet and manage customer queries efficiently, knowing that the automated system is handling the initial interactions and basic queries.

## 🔗 Nodes Used

HTTP Request, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
