# 📈 Auto-track Amazon prices with Google Gemini & send alerts to Telegram

> ⚡ **69 views** · 📈 [Crypto Trading & Stock Market](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# AI-Powered Amazon Price Tracker to Telegram

## Overview
Automate your deal hunting with this intelligent Amazon price tracker. This workflow uses the power of AI to monitor any Amazon product page at regular intervals. When the price drops to or below your desired target, it instantly sends a notification to your Telegram chat. Say goodbye to manual price checking and never miss a sale, a lightning deal, or a Black Friday bargain again.

Unlike traditional scrapers that break when a website's layout changes, this workflow uses a Large Language Model (Google Gemini) to understand the page content, making it significantly more robust and reliable.

## 🚀 Key Features
*   **AI-Powered Data Extraction:** Leverages Google Gemini to intelligently read the product page and extract the name and price, making it resilient to Amazon's frequent layout updates.
*   **Scheduled Automation:** Set it up once with a schedule (e.g., every hour) and let it run in the background.
*   **Instant Telegram Alerts:** Get real-time notifications directly in Telegram the moment a price drops to your target.
*   **Centralized & Easy Configuration:** A single `Set` node holds all your settings—product URL, target price, and Telegram Chat ID—for quick and easy updates.
*   **Built-in Error Handling:** Intelligently checks if data was extracted correctly and sends an error alert if it fails, so you're always in the loop.
*   **Cost-Efficient Processing:** Includes a pre-processing step to clean and simplify the page's HTML, reducing the amount of data sent to the AI and lowering potential token costs.

## ⚙️ How It Works
The workflow follows a clear, linear process from scheduling to notification.

### 1. Initiation and Configuration
*   A **Schedule** node triggers the workflow automatically at your chosen interval (e.g., every hour).
*   A **Set** node named `Config: Product & Alert` acts as your control panel. Here, you define the Amazon product URL, your target price, and your Telegram Chat ID.

### 2. Fetch and Clean Product Page
*   An **HTTP Request** node fetches the full HTML content of the Amazon product URL.
*   A **Code** node then cleans this raw HTML. It strips out unnecessary scripts, styles, and tags, leaving only the core text content. This crucial step makes the data easier for the AI to analyze accurately and efficiently.

### 3. AI-Powered Data Extraction
*   An **AI Agent** node sends the cleaned text to the **Google Gemini** model.
*   It uses a specific prompt to ask the AI to identify and extract the product's name (`productName`) and its current price (`priceValue`) as a number.
*   A **Structured Output Parser** ensures the AI returns the data in a clean, predictable JSON format (e.g., `{"productName": "...", "priceValue": 49.99}`), which is essential for the next steps.

### 4. Validate and Compare Price
*   An **IF** node first validates the AI's output, checking if a valid price was successfully extracted. If not, it routes the workflow to send an error message.
*   If the data is valid, a second **IF** node compares the extracted `priceValue` with your `priceTarget` from the configuration node.

### 5. Prepare and Send Telegram Notification
*   If the current price is less than or equal to your target price, the workflow proceeds down the "true" path.
*   A **Set** node constructs a formatted, user-friendly success message including the product name, the new low price, and a direct link to the product page.
*   Finally, a **Telegram** node sends this prepared message to your specified Chat ID. If an error occurred at any stage, a corresponding error message is sent instead.

## 🛠️ Setup Steps & Credentials
To get this workflow running, you'll need to configure the following:

1.  **Google Gemini:**
    *   You need a Google AI (Gemini) API Key.
    *   Create a `Google Gemini(PaLM) Api` credential in n8n.
    *   Assign this credential to the `Google Gemini Chat Model` node.
2.  **Telegram:**
    *   You need a **Telegram Bot Token**. Get one by talking to the `@BotFather` on Telegram.
    *   You also need your personal **Chat ID**. You can get this from a bot like `@userinfobot`.
    *   Create a `Telegram` credential in n8n with your Bot Token.
    *   Assign this credential to both the `Send Success` and `Send Error` Telegram nodes.
3.  **Workflow Configuration:**
    *   Open the **`Config: Product & Alert`** node.
    *   Replace the placeholder values:
        *   `telegramChatId`: Paste your Telegram Chat ID.
        *   `amazonUrl`: Paste the full URL of the Amazon product you want to track.
        *   `priceTarget`: Set your desired price (e.g., `49.99`).

Once configured, save the workflow and activate it using the toggle in the top-right corner.

## 💡 Customization & Learning
This workflow is a powerful template that you can easily adapt and expand:

*   **Track Multiple Products:** Modify the workflow to read product URLs and target prices from a Google Sheet or Airtable base to monitor many items at once.
*   **Add More Notification Channels:** Duplicate the Telegram node and add `Discord`, `Slack`, or `Email` nodes to receive alerts on multiple platforms.
*   **Store Price History:** Connect a `Google Sheets`, `Airtable`, or database node after the AI extraction step to log the price of the product over time, creating a historical price chart.
*   **Switch AI Models:** Easily swap the `Google Gemini` node for an `OpenAI` or `Anthropic` model by adjusting the prompt and credentials.

## 🔗 Nodes Used

Cron, HTTP Request, Telegram, AI Agent, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
