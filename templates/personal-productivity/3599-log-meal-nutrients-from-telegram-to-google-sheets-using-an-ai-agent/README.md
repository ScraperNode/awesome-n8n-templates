# ⚡ Log meal nutrients from Telegram to Google Sheets using an AI agent

> ⚡ **3,128 views** · ⚡ [Personal Productivity](../)

## Description

## Who is this for?

This workflow is ideal for individuals focused on nutrition tracking, meal planning, or diet optimization—whether you’re a health-conscious individual, fitness coach, or developer working on a healthtech app. It also fits well for anyone who wants to capture their meal data via voice or text, without manually entering everything into a spreadsheet.

## What problem is this workflow solving?

Manually logging meals and breaking down their nutritional content is time-consuming and often skipped. This workflow automates that process using Telegram for input, OpenAI for natural language understanding, and Google Sheets for structured tracking. It enables users to record meals by typing or sending voice messages, which are transcribed, analyzed for nutrients, and automatically stored for tracking and review.

## What this workflow does
This n8n automation lets users send either a text or voice message to a Telegram bot describing their meal. The workflow then:
1. Receives the Telegram message
2. Checks if it’s a voice message
	•	If yes: Downloads the audio file and transcribes it using OpenAI
	•	If no: Uses the text input directly
3. Sends the meal description to OpenAI to extract a structured list of ingredients and nutritional details
4. Parses and stores the results in Google Sheets
5. Responds via Telegram with a personalized confirmation message

A testing interface also allows you to simulate prompts and view structured outputs for development or debugging.

## Setup
1. Create a Telegram bot via BotFather and note the API token.
2. Create an empty Google Sheet and store the sheet ID in the environment.
3. Set up your OpenAI credentials in the n8n credential manager.
4. Customize the “List of Ingredients and Nutrients” node with your prompt if needed.
5. (Optional) Use the “Testing” section to simulate messages and refine outputs before going live.

## How to customize this workflow to your needs
• Enhance prompts in the OpenAI node to improve the structure and accuracy of responses.
• Add new fields in the Google Sheet and corresponding logic in the parser if you want more detail.
• Adjust the Telegram response to provide motivational feedback, dietary tips, or summaries.
• Upgrade to the “Pro” version mentioned in the contact section for USDA database integration and complete nutrient breakdowns.

This is a lightweight, AI-powered meal logging automation that transforms voice or text into actionable nutrition data—perfect for making healthy eating easier and more data-driven.

**See my other workflows [here](https://n8n.io/creators/zeerobug/)**

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
