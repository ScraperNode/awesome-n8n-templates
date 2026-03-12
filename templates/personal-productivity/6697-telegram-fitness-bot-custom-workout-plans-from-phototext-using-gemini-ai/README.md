# ⚡ Telegram fitness bot: Custom workout plans from photo/text using Gemini AI

> ⚡ **325 views** · ⚡ [Personal Productivity](../)

## Description

## A Telegram Fitness Bot that creates personalized 7-day workout plans by analyzing user photos or text input. It uses Google Gemini AI for image and text understanding combined with LangChain for conversational flow and memory to deliver motivating fitness routines directly through Telegram.

Use cases include virtual fitness coaching, AI-powered personal training assistants, and health & wellness engagement bots.

## Who’s it for
- Fitness coaches and personal trainers seeking to automate client workout plans
- Developers building Telegram bots with AI-powered personalization
- Startups creating virtual fitness assistants or health engagement tools

## What it does
- Users send a full-body photo or message to the Telegram bot.
- The workflow detects if the input is photo or text.
- For photos, Gemini AI analyzes body type, posture, and muscle tone.
- For text, LangChain asks fitness questions (age, goals, activity level, etc.).
- Based on input, a personalized 7-day workout plan is generated in Telegram-compatible HTML.
- The plan is formatted and split as needed to fit message size limits.
- The workout plan is sent back to the user via Telegram.

## Requirements
- Telegram Bot token with messaging and file permissions
- Google Gemini API access with image and language model capabilities
- n8n instance (cloud or self-hosted)
- Basic knowledge of LangChain and n8n AI nodes for customization

## How to customize the workflow
- Modify LangChain system prompts for your coaching tone and style
- Add or change fitness questions in the conversation flow
- Enable PDF export of workout plans
- Add daily workout reminders and streak tracking via Cron and Telegram nodes
- Swap AI models or add new tools to enhance functionality
- Embed videos or images to enrich workout plans

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, Simple Memory, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
