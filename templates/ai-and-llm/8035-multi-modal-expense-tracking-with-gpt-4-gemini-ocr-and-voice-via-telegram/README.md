# ✨ Multi-modal expense tracking with GPT-4, Gemini OCR, and voice via Telegram

> ⚡ **968 views** · ✨ [AI & LLMs](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This n8n template creates an **intelligent expense tracking system** 🤖 that processes text, voice, and receipt images through Telegram. The assistant automatically **categorizes expenses**, **handles currency conversions** 🌍, and **maintains financial records** in Google Sheets while **providing smart spending insights** 💡.

### Use Cases:

-   🗣️ Personal expense tracking via Telegram chat
-   🧾 Receipt scanning and data extraction
-   💱 Multi-currency expense management
-   📂 Automated financial categorization
-   🎙️ Voice-to-expense logging
-   📊 Daily/weekly/monthly spending analysis

### How it works:

1.  **Multi-Input Processing**: Telegram trigger captures text messages, voice notes, and receipt images.
2.  **Content Analysis**: A Switch node routes different input types (text, audio, images) to appropriate processors.
3.  **Voice Processing**: ElevenLabs converts voice messages to text for expense extraction.
4.  **Receipt OCR**: Google Gemini analyzes receipt images to extract amounts and descriptions.
5.  **Expense Classification**: An LLM determines if the input is an expense or a general query.
6.  **Expense Parsing**: For multiple expenses, the AI splits and normalizes each item.
7.  **Currency Conversion**: An exchange rate API converts foreign currencies to USD.
8.  **Smart Categorization**: The AI agent assigns expenses to predefined categories with emojis.
9.  **Data Storage**: Google Sheets stores all expense records with automatic totals.
10. **Intelligent Responses**: The agent provides spending summaries, alerts, and financial insights.

### Requirements:

-   🌐 Telegram Bot API access
-   🤖 OpenAI, Gemini, or any other AI model
-   🗣️ ElevenLabs API for voice processing
-   📝 Google Sheets API access
-   💹 Exchange rate API access

### Good to know:

-   ⚠️ Daily spending alerts trigger when expenses exceed 100 USD.
-   🏷️ Supports 12 predefined expense categories with emoji indicators.
-   🔄 Automatic currency detection and conversion to USD.
-   🎤 Voice messages are processed through speech-to-text.
-   📸 Receipt images are analyzed using computer vision.

### Customizing this workflow:

-  ✏️ Modify expense categories in the system prompt.
-   📈 Adjust spending alert thresholds.
-   💵 Change the base currency from USD to your preferred currency.
-   ✅ Add additional expense validation rules.
-   🔗 Integrate with other financial platforms.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, Basic LLM Chain, Calculator

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
