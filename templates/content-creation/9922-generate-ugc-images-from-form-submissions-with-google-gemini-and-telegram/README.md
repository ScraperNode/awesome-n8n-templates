# 🎬 Generate UGC images from form submissions with Google Gemini and Telegram

> ⚡ **326 views** · 🎬 [Content Creation & Video](../)

## Description

## This workflow automates the process of generating personalized UGC (User-Generated Content) images based on form submissions.

It accepts a form with a character type (e.g., male/female) and an uploaded image, merges them, sends them to an AI model (Google Gemini via OpenRouter) for creative generation, and posts the resulting content as a Telegram photo message.

## Who’s it for

This automation template is designed for marketers, AI creators, content teams, or interactive community platforms that want to let users submit content (image + character type), enrich it with AI-generated descriptions, and instantly publish results to Telegram — without writing a single line of code.

## How it works

- Trigger: Workflow starts when a form is submitted by a user.

- Extract file: The uploaded image file is converted to a Base64 string.

- Merge data: The character type and image data are combined into one payload.

- Format to Data URL: The image is wrapped as a proper data:image/... format for API use.

- Prepare payload: The text and image are mapped into a structure compatible with Gemini API.

- Generate AI content: Sends the input to Google Gemini (via OpenRouter) to generate a UGC description.

- Transform response: Cleans and extracts the result from Gemini’s response.

- Convert back to file: Transforms the Base64 image back into a real image file.

- Send to Telegram: The image and its AI-generated description are sent as a photo message to your Telegram channel.

## How to use

- Set up a form with a dropdown for character type (e.g., Male/Female) and an image upload field.

- Configure the Gemini API access through OpenRouter.

- Connect your Telegram bot and channel to receive the final result.

- Start the workflow → users submit the form, and their data is processed and shared as AI-enhanced UGC.

## Requirements

- OpenRouter API key to access Google Gemini.

- A Telegram Bot connected to your Telegram channel.

## ❓ Need help

**Contact me for consulting and support:** [LinkedIn](https://www.linkedin.com/in/jaures-nya-83a033270/) / [YouTube](https://www.youtube.com/@jauresnya) / [Skool](https://www.skool.com/gaia-4903/about?ref=e0430e4c35b645ac8976b952768e9d55)

## 🔗 Nodes Used

HTTP Request, Telegram, n8n Form Trigger, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
