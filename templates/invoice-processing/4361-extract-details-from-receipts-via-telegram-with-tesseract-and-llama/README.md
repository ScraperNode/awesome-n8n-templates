# 🧾  Extract Details from Receipts via Telegram with Tesseract and Llama

> ⚡ **2,660 views** · 🧾 [Invoice Processing](../)

## Description

# Tesseract - Money Mate Workflow Description
![Screenshot 20250527 at 14.20.42.png](fileId:1383)
**Disclaimer**: This template requires the `n8n-nodes-tesseractjs` community node, which is only available on self-hosted [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) instances. You’ll need a self-hosted [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) setup to use this workflow.

Snap a receipt, get a clean expense summary back. This Telegram-based workflow reads receipt photos with Tesseract OCR, understands text messages directly, and uses AI (LLaMA via OpenRouter) to categorize spending and reply with a structured recap. Free tools only, no tech skills needed.

*Last updated: September 2026.*

## Who is this for?
Individuals, freelancers, or small business owners who want an easy way to track expenses over Telegram. Ideal if you want to digitize receipts, from photos or text messages, using free tools and without advanced technical skills.

## What problem does this workflow solve?
Typing receipt details into a spreadsheet is slow and error-prone. This workflow extracts the info from receipt images or text messages sent via Telegram, categorizes the expense, and sends back a clear summary. Less time, fewer errors, effortless expense tracking.

## What this workflow does
The workflow listens for messages sent to a Telegram bot, either text descriptions of expenses or photos of receipts. Photos go through Tesseract (an open-source text recognition tool); text is processed directly. An AI model (LLaMA via OpenRouter) analyzes the input, categorizes it (e.g., Food & Beverages, Household, Transport), and builds a structured summary with store name, date, items, total, and category, sent back to your Telegram chat.

## Setup Instructions
Follow these step-by-step instructions to set up the workflow. No advanced technical knowledge is required, but you’ll need a self-hosted [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) instance.

1. **Set Up a Self-Hosted [n8n Instance](https://n8n.partnerlinks.io/creator-khmuhtadin)**:
   - If you don’t have [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) installed, follow the [n8n self-hosting guide](https://docs.n8n.io/hosting/installation/self-hosting/) to set it up. You can use platforms like Docker or a cloud provider (e.g., DigitalOcean, AWS).
   - Ensure your [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) instance is running and accessible via a web browser.

2. **Install the Tesseract Community Node**:
   - In your [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) instance, go to **Settings &gt; Community Nodes** in the sidebar.
   - Click **Install a Community Node**, then enter `n8n-nodes-tesseractjs` in the search bar.
   - Click **Install** and wait for confirmation. This node enables receipt image processing.
   - If you encounter issues, check the [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/) for troubleshooting.

3. **Create a Telegram Bot**:
   - Open Telegram and search for **@BotFather** to start a new bot.
   - Send `/start` to BotFather, then `/newbot` to create your bot.
   - Follow the prompts to name your bot (e.g., “MoneyMateBot”).
   - BotFather will provide a **Bot Token** (e.g., `23872837287:ExampleExampleExample`). Copy this token.
   - In [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin), go to **Credentials &gt; Add Credential**, select **Telegram API**, and paste the token. Name the credential (e.g., “MoneyMateBot”) and save.

4. **Set Up OpenRouter for AI Processing**:
   - Sign up for a free account at [OpenRouter](https://openrouter.ai/).
   - In your OpenRouter dashboard, generate an **API Key** under the API section.
   - In [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin), go to **Credentials &gt; Add Credential**, select **OpenRouter API**, and paste the API key. Name it (e.g., “OpenRouter Account”) and save.
   - The free tier of OpenRouter’s LLaMA model is sufficient for this workflow.

5. **Import and Configure the Workflow**:
   - Download the workflow JSON file (provided separately or copy from the source).
   - In [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin), go to **Workflows &gt; Import Workflow** and upload the JSON file.
   - Open the imported workflow (“Tesseract - Money Mate”).
   - Ensure the **Telegram Trigger** and **Send Expense Summary** nodes use the Telegram credential you created.
   - Ensure the **AI Analyzer** node uses the OpenRouter credential.
   - Save the workflow.

6. **Test the Workflow**:
   - Activate the workflow by toggling the **Active** switch in [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin).
   - In Telegram, find your bot (e.g., @MoneyMateBot) and send `/start`.
   - Test with a sample input (see “Example Inputs” below).
   - Check the [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) workflow execution panel to ensure data flows correctly.
   - If errors occur, double-check credentials and node connections.

7. **Activate for Continuous Use**:
   - Once tested, keep the workflow active in [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin).
   - Your bot will now process any text or image sent to it via Telegram.

## Example Inputs/Formats
To help the workflow process your data accurately, use clear and structured inputs. Below are examples of valid inputs:

### Text Input Example:
Send a message to your Telegram bot like this:
```
Bought coffee at Starbucks, Jalan Sudirman, yesterday. Total Rp 50,000. 2 lattes, each Rp 25,000.
```
**Expected Output**:
```
hello [Your Name]

Ini Rekap Belanjamu
📋 Store: Starbucks
📍 Location: Jalan Sudirman
📅 Date: 2025-05-26
🛒 Items:
- Latte: Rp 25,000
- Latte: Rp 25,000
💸 Total: Rp 50,000
📌 Category: Food & Beverages
```

### Image Input Example:
Upload a photo of a receipt to your Telegram bot. The receipt should contain:
- Store name (e.g., “Alfamart”)
- Address (e.g., “Jl. Gatot Subroto, Jakarta”)
- Date and time (e.g., “27/05/2025 14:00”)
- Items with prices (e.g., “Bread Rp 15,000”, “Milk Rp 20,000”)
- Total amount (e.g., “Total: Rp 35,000”)

**Expected Output**:
```
hello [Your Name]

Ini Rekap Belanjamu
📋 Store: Alfamart
📍 Location: Jl. Gatot Subroto, Jakarta
📅 Date: 2025-05-27 14:00
🛒 Items:
- Bread: Rp 15,000
- Milk: Rp 20,000
💸 Total: Rp 35,000
📌 Category: Household
```

**Tips for Images**:
- Ensure the receipt is well-lit and text is readable.
- Avoid blurry or angled photos for better Tesseract accuracy.

## How to Customize This Workflow
- **Change Expense Categories**: In the **AI Categorizer** node, edit the prompt to include custom categories (e.g., add “Entertainment” or “Utilities” to the list: Food & Beverages, Household, Transport).
- **Modify Response Format**: In the **Format Summary Message** node, adjust the JavaScript code to change how the summary looks (e.g., add emojis, reorder fields).
- **Save to a Database**: Add a node (e.g., Google Sheets or PostgreSQL) after the **Format Summary Message** node to store summaries.
- **Support Other Languages**: In the **AI Categorizer** node, update the prompt to handle additional languages (e.g., Spanish, Mandarin) by specifying them in the instructions.
- **Add Error Handling**: Enhance the **Check Invalid Input** node to catch more edge cases, like invalid dates.

## All Free, End-to-End
This workflow is 100% free! It leverages:
- **Telegram Bot API**: Free via BotFather.
- **Tesseract**: Open-source text recognition.
- **LLaMA via OpenRouter**: Free tier available for AI processing.

Enjoy automating your expense tracking without any cost!

### Quick Answers
**Is it really free?**  
Yes. Telegram Bot API is free, Tesseract is open-source, and the LLaMA model on OpenRouter has a free tier.  
**Do I need coding skills?**  
No. Setup is all clicking through settings, credentials, and import.  
**Does it run on n8n Cloud?**  
No. The Tesseract community node needs a self-hosted n8n instance.  

*Made by: [khmuhtadin](https://khmuhtadin.com)*
**Need a custom?** contact me on **[LinkedIn](https://www.linkedin.com/in/khmuhtadin/)** or **[Web](https://khmuhtadin.com)**

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Basic LLM Chain, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
