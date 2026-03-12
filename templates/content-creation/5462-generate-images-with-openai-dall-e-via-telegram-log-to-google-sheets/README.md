# 🎬 Generate images with OpenAI DALL-E via Telegram & log to Google Sheets

> ⚡ **2,935 views** · 🎬 [Content Creation & Video](../)

## Description

## 📌 Workflow Description

This workflow allows users to generate AI images directly from Telegram while automatically logging each request to Google Sheets for tracking. When a user sends a prompt to your Telegram bot, the workflow receives the prompt, generates an image using OpenAI, saves the prompt and generated image link to Google Sheets, and then sends the image back to the user in Telegram.



## ⚙️ How to Set It Up


Connect your Telegram credentials by adding your bot token in both the Telegram Trigger and Telegram Send Message nodes. Ensure your bot is added to the intended chat.

Connect your OpenAI credentials by inserting your API key in the OpenAI node and configuring it for image generation.

Connect your Google Sheets account by authorising the Google Sheets node and selecting the target spreadsheet and worksheet where you want to save prompts and image links.

Finally, activate the workflow and test by sending a prompt to your Telegram bot to confirm that the image is generated, saved to Google Sheets, and sent back to Telegram seamlessly.

That’s it – your AI Image Generator with Google Sheets logging is ready to use.
		
⸻

✅ That’s it – your AI Image Generator with Google Sheets logging is ready for use.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
