# 🧾 Automated expense tracking with AI receipt analysis & Google Sheets

> ⚡ **357 views** · 🧾 [Invoice Processing](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

**Your Pocket Bookkeeper** is workflow designed to automate expense tracking for freelancers and small businesses. It transforms your favorite chat app into a smart financial assistant, eliminating tedious manual data entry and ensuring your records are always organized, up-to-date, and secure. Just send a photo or a text, and let AI handle the rest.

### Why Your Pocket Bookkeeper? 🤔

For a freelancer or small business owner, time is money. Administrative tasks like logging receipts and updating spreadsheets steal valuable hours that could be spent on billable work. This workflow solves these critical problems:

*   **Saves Significant Time:** Drastically reduces the hours spent on manual bookkeeping.
*   **Eliminates Human Error:** AI-powered data extraction is more accurate than manual entry, preventing costly mistakes.
*   **Ensures Audit-Readiness:** Creates a secure, digital archive of every receipt, linked directly to its corresponding transaction.
*   **Provides Real-Time Financial Clarity:** Your expense log is always current, giving you an accurate snapshot of your business spending at any moment.
*   **Simplifies Tax Season:** With perfectly organized records, preparing your tax return becomes a straightforward, stress-free process.

### Core Features & Automations 🧩

This workflow bundle is built around a simple yet powerful "Capture &gt; Process &gt; Log" model:

🧾 **Multi-Modal Expense Capture:**
*   **Photo Capture:** Snap a photo of a receipt. The workflow automatically extracts the text using Optical Character Recognition (OCR).
*   **Text Capture:** Send a simple text message describing an expense (e.g., "Software subscription for $15").

🤖 **AI-Powered Processing:**
*   **Intelligent Data Extraction:** An advanced AI Agent (powered by Mistral) analyzes the text from your photo or message to identify and structure key financial data.
*   **Structured Output:** The AI formats the extracted information into a clean JSON object, identifying fields like:
    *   `store_name`, `date`, `time`, `total_price`, `currency`, `item_description`, `category`, and more.
*   **Smart Validation:** A built-in check flags potential errors, like a transaction with a total of zero, and prompts you to double-check.

🗄️ **Automated Logging & Archiving:**
*   **Google Sheets Integration:** Every valid expense is automatically appended as a new, neatly organized row in a designated Google Sheet.
*   **Google Drive Archiving:** If a photo was submitted, the original receipt image is automatically saved to a specified Google Drive folder.
*   **Linked Records:** The Google Sheet entry includes a direct hyperlink to the corresponding receipt image in Google Drive, creating a seamless, interconnected record.
*   **User Confirmation:** The system sends a summary of the logged expense or a success/error message back to you via Telegram, closing the loop on every transaction.

### Getting Started: Setup & Customization 🛠️

Setting up your Pocket Bookkeeper is designed to be quick and easy:

1.  **Import the Workflow:** Add the provided `.json` file to your n8n instance.
2.  **Configure Credentials:**
    *   **Telegram:** Create a new bot via `@BotFather` on Telegram to get a Bot Token. Add this token to the `Telegram Trigger` and all `Telegram` sender nodes.
    *   **Mistral AI:** Obtain an API key from your Mistral AI console and create a `Mistral Cloud API` credential. Assign this to the `Mistral Cloud Chat Model` nodes.
    *   **Google Drive & Google Sheets:** Set up OAuth 2.0 credentials for the Google Drive and Google Sheets APIs in your Google Cloud Console. Create the corresponding credentials in n8n and assign them to the `Google Drive` and `Google Sheets` nodes.
3.  **Personalize Your Setup (Crucial!):**
    *   **Google Drive Folder:** In the `Save Receipt` (Google Drive) node, specify the **Folder ID** where you want your receipt images to be saved.
    *   **Google Sheet:** In the `Google Sheets` node, enter your **Spreadsheet ID** and **Sheet Name**. Ensure your sheet has columns matching the data fields (e.g., `store_name`, `date`, `total_price`, etc.).
    *   **(Optional) AI Prompting:** Fine-tune the system message in the `AI Agent` node to better guide the AI on how to categorize your specific business expenses.
4.  **Activate the Workflow:**
    *   The workflow is inactive by default. Toggle the **Active** switch to `ON` at the top left of the n8n canvas to start listening for messages.

### How The Workflow Operates ⚙️

1.  **TRIGGER:** The `Telegram Trigger` node listens for incoming messages (text or photo).
2.  **ROUTE:** An `IF` node checks if the message contains a photo.
    *   **If Photo:** The image is downloaded, and OCR is used to extract text.
    *   **If Text:** The message text is used directly.
3.  **PROCESS:** The extracted text is sent to the `AI Agent` node. The agent, using the Mistral LLM, parses the text and structures it into a predefined JSON format.
4.  **VALIDATE & FORMAT:** The structured data flows to a `Code` node that formats a user-friendly summary message. An `IF` node then checks for invalid data (e.g., total = 0).
5.  **LOG & ARCHIVE:**
    *   A sub-workflow is triggered via the `Execute Workflow` node.
    *   The `Save Receipt` node uploads the image to Google Drive (if one was sent).
    *   The `Google Sheets` node appends the final structured data to your spreadsheet.
6.  **RESPOND:** A `Telegram` node sends a confirmation message back to you, confirming that the expense has been successfully logged or notifying you of an error.

### Expanding Your Bookkeeper 🚀

This workflow is a powerful foundation. Consider these enhancements:

*   **Multi-Currency Handling:** Add a function to convert all expenses to a single base currency.
*   **Advanced Reporting:** Schedule a monthly summary of your expenses to be emailed to you.
*   **Invoice OCR:** Expand the AI prompt and workflow to handle and log incoming invoices from vendors.
*   **Bank Statement Reconciliation:** Create a separate workflow to import bank statements and automatically match them against your logged receipts.
*   **Different Notifiers:** Easily swap Telegram for WhatsApp, Slack, or email.

### Requirements 📋

*   An active n8n instance (self-hosted or cloud).
*   Credentials for Telegram, Mistral AI/Open Router/Open AI, Google Drive, and Google Sheets.
*   A few minutes to customize the workflow with your specific IDs and preferences!

Take control of your business finances and let your **Pocket Bookkeeper** turn a tedious chore into a simple, automated task.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Google Drive, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
