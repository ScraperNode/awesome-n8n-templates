# ⚡ Analyze food ingredients from Telegram photos using Gemini and Airtable

> ⚡ **244 views** · ⚡ [Personal Productivity](../)

## Description

## Analyze food ingredients from Telegram photos using Gemini and Airtable ##
![telegram_demo.png](fileId:3437)
### 🛡️ Personal Ingredient Bodyguard ###

Turn your Telegram bot into an intelligent food safety scanner. This workflow analyzes photos of ingredient labels sent via Telegram, extracts the text using AI, and cross-references it against your personal database of "Good" and "Bad" ingredients in Airtable.

It solves the problem of manually reading tiny, complex labels for allergies or dietary restrictions. Whether you are Vegan, Halal, allergic to nuts, or just avoiding specific additives, this workflow acts as a strict, personalized bodyguard for your diet. It even features a customizable "Persona" (like a Sarcastic Bodyguard) to make safety checks fun.

## 🎯 Who is it for?

* People with specific dietary restrictions (Vegan, Gluten-free, Keto).
* Individuals with food allergies (Nuts, Dairy, Shellfish).
* Special dietary observers (Halal, Kosher).
* Health-conscious shoppers avoiding specific additives (e.g., E120, Aspartame).

## 🚀 How it works

1.  **Trigger:** You send a photo of a product label to your Telegram Bot.
2.  **Fetch Rules:** The workflow retrieves your active "Watchlist" (Ingredients to avoid/prefer) and "Persona" settings from Airtable.
3.  **Vision & Logic:** It uses an AI Vision model to extract text from the image (OCR) and Google Gemini to analyze the text against your strict veto rules (e.g., "Safe" only if ZERO bad items are found).
4.  **Response:** The bot replies instantly on Telegram with a Safe/Unsafe verdict, highlighting detected ingredients using HTML formatting.
5.  **Log:** The result is saved back to Airtable for your records.
![Screenshot 20251123 142943.png](fileId:3434)

## ⚙️ How to set up

This workflow relies on a specific Airtable structure to function as the "Brain."

1.  **Set up Airtable**
    * Sign up for Airtable: [**Click here**](https://airtable.com/invite/r/Isr7G94S)
    * **Copy the required Base:** [**Click here to copy the "Ingredients Brain" base**](https://airtable.com/appwuO8h6qLVULY20/shrYVCqWgPtFDPz0q)
    * Connect Airtable to n8n (5-min guide): [**Watch Tutorial**](https://www.youtube.com/watch?v=xFFfkBeI2rQ)
2.  **Set up Telegram**
    * Message `@BotFather` on Telegram to create a new bot and get your API Token.
    * Add your Telegram credentials in n8n.
3.  **Configure AI**
    * Add your Google Gemini API credentials.
    * **Note on OCR:** This template is configured to use a local LLM for OCR to save costs (via the OpenAI-compatible node). If you do not have a local model running, simply swap the "OpenAI Chat Model" node for a standard GPT-4o or Gemini Vision node.

## 📋 Requirements

* **n8n** (Cloud or Self-hosted)
* **Airtable** account (Free tier works)
* **Telegram** account
* **Google Gemini** API Key
* **Local LLM** (Optional, for free OCR) OR **OpenAI/Gemini** Key (for standard Cloud Vision)

## 🎨 How to customize

* **Change the Persona:** Go to the "Preferences" table in Airtable to change the bot's personality (e.g., "Helpful Nutritionist") and output language.
![Screenshot 20251123 142925.png](fileId:3433)
* **Update Ingredients:** Add or remove items in the "Watchlist" table. Mark them as "Good Stuff" or "Bad Stuff" and set Status to "Active".
![Screenshot 20251123 142905.png](fileId:3435)
* **Adjust Sensitivity:** The AI prompt in the "AI Agent" node is set to strict "Veto" mode (Bad overrides Good). You can modify the system prompt to change this logic.

## ⚠️ Disclaimer

**This tool is for informational purposes only.**

1.  **Not Medical Advice:** Do not rely on this for life-threatening allergies.
2.  **AI Limitations:** OCR can misread text, and AI can hallucinate.
3.  **Verify:** Always double-check the physical product label.

*Use at your own risk.*

## 🔗 Nodes Used

Airtable, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
