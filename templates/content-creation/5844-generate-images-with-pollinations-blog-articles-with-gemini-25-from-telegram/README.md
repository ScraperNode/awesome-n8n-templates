# 🎬 Generate images with Pollinations & blog articles with Gemini 2.5 from Telegram

> ⚡ **1,512 views** · 🎬 [Content Creation & Video](../)

## Description

### This n8n workflow is a Telegram bot that allows users to either:

- Generate AI images using Pollinations API, or
- Generate blog articles using Gemini AI

### Users simply type image your prompt or blog your title, and the bot responds with either an AI-generated image or article.



## Who's it for
This template is ideal for:

- Content creators and marketers who want to generate visual and written content quickly

- Telegram bot developers looking for real-world AI integration
- Educators or students automating content workflows
- Anyone managing content pipelines using Google Sheets


## What it does / How it works
### Telegram Interaction

- Trigger Telegram Message: Listens for new messages or button clicks via Telegram

- Classify Telegram Input: JavaScript logic to classify input as /start, /help, normal text, or callback
- Switch Input Type: Directs the flow based on the classification

### Menu & Help

- Send Main Menu to User: Shows "Generate Image", "Blog Article", "Help" options

- Switch Callback Selection: Routes based on button pressed (image, blog, or help)

- Send Help Instructions: Sends markdown instructions on how to use the bot

### Input Validation
- Validate Command Format: Ensures input starts with image or blog

- Notify Invalid Input Format: If validation fails, informs user of correct format


### Image Generator
- Prompt User for Image Description
  → When user clicks Generate Image

- Detect Text-Based Input Type
  → Detects if text is image or blog

- Switch Text Command Type
  → Directs whether to generate image or article

- Show Typing for Image Generation
  → Sends "uploading photo..." typing status

- Build Image Generation URL
  → Constructs Pollinations API image URL from prompt

- Download AI Image
 → Makes HTTP request to get the image

- Send Image Result to Telegram
 → Sends image to user via Telegram

- Log Image Prompt to Google Sheets
  → Logs prompt, image URL, date, and user ID

- Upload Image to Google Drive
  → Saves image to Google Drive folder


### Blog Article Generator
- Prompt User for Blog Title
→ When user clicks Blog Article

- Store Blog Prompt
→ Saves prompt for later use

- Log Blog Prompt to Google Sheets
→ Writes title + user ID to Google Sheets

- Send Article Style Options
→ Offers: Formal, Casual, or News style

- Store Selected Article Style
→ Updates row with chosen style in Google Sheets

- Fetch Last User Prompt
→ Finds the latest prompt submitted by this user

- Extract Last Blog Prompt
→ Extracts row for use in AI request

- Gemini Chat Wrapper
→ Handles input into LangChain node for AI processing

- Generate Article with Gemini
→ Calls Gemini to create 3-paragraph blog post

- Parse Gemini Response
→ Parses JSON string to extract title and content

- Send Article to Telegram
→ Sends blog article result back to user

- Log Final Article to Google Sheets
→ Updates row with final content and timestamp


## Requirements

- Telegram bot (via @BotFather)
- Pollinations API (free and public endpoint)
- Google Sheets & Drive (OAuth credential setup in n8n)
- Google Gemini / PaLM API key via LangChain
- Self-hosted or cloud n8n setup


## Setup Instructions

- Clone the workflow and import it into your n8n instance

- Set credentials:

  - Telegram API
  - Google Sheets OAuth
  - Google Drive OAuth
  - Gemini (via LangChain)

- Replace:

  - Sheet ID with your own Google Sheet
  - Folder ID on Google Drive
  - chat_id placeholders if needed (use expressions instead)

- Deploy and send /start in your Telegram bot


## 🔧 Customization Tips

- Edit the Gemini prompt to adjust article length or tone

- Add extra style buttons like "SEO", "Story", "Academic"

- Add image post-processing (e.g. compression, renaming)

- Add error catching logic (e.g. if Pollinations image fails)

- Store images with filenames based on timestamp/user



## Security Considerations

- Use n8n credentials for all tokens (Telegram, Gemini, Sheets, Drive)

- Never hardcode your token inside HTTP nodes

- Do not expose real Google Sheet or Drive links in shared version

- Use Set node to collect all editable variables (like folder ID, sheet name)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Google Drive, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
