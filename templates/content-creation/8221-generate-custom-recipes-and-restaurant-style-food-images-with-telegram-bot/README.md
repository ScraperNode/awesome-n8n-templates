# 🎬 Generate custom recipes and restaurant-style food images with Telegram bot

> ⚡ **706 views** · 🎬 [Content Creation & Video](../)

## Description

AI Chef Bot is a smart virtual chef built with n8n and Telegram.
Users can ask for any dish, and the bot:

Generates a detailed recipe (ingredients + step-by-step instructions).

Creates a photorealistic restaurant-style plated food image of the dish.

Sends both recipe text and food image back on Telegram.

👉 Live Demo Bot: http://t.me/botaichefrobotbot

Perfect for food lovers, restaurants, cooking groups, or anyone who wants an interactive AI-powered chef.

🌟 Features
- 🔗 Telegram Integration – chat with the bot in real time.
- 🍽 AI Recipe Generator – instant, structured recipes for any dish.
- 🎨 Text-to-Image AI – turns recipes into beautiful food images.
- 🍴 Restaurant-Style Plating – elegant ceramic/slate/glass plating only.
- 📸 Photo-Realistic Images – styled like professional food photography.
- ⚡ Automated Workflow – no manual steps, everything runs inside n8n.

⚙️ Installation
- Import this workflow into your n8n instance.
- Configure your Telegram Bot Token (from BotFather).
- Configure your OpenRouter API Key for AI text + image generation.
- Save and activate the workflow.
- Go to Telegram and send any dish name (e.g., Polpette di pesce).

The bot replies with:
📖 A full recipe.
📸 A restaurant-plated realistic food image.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, Simple Memory, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
