# 🎬 Generate recipes from fridge photos using GPT-4 Vision & Telegram

> ⚡ **529 views** · 🎬 [Content Creation & Video](../)

## Description

This n8n template demonstrates a multi-modal AI recipe assistant that suggests delicious recipes based on user input, delivered via Telegram. The workflow can uniquely handle two types of input: a photo of your ingredients or a simple text list.

Use cases are many: Get instant dinner ideas by taking a photo of your fridge contents, reduce food waste by finding recipes for leftover ingredients, or create a fun and interactive service for a cooking community or food delivery app!

### Good to know

-   This workflow uses two different AI models (one for vision, one for text generation), so costs will be incurred for each execution. See [OpenRouter Pricing](https://openrouter.ai/pricing) or your chosen model provider's pricing page for updated info.
-   The AI prompts are in English, but the final recipe output is configured to be in Japanese. You can easily change the language by editing the prompt in the `Recipe Generator` node.

### How it works

1.  The workflow starts when a user sends a message or an image to your bot on Telegram via the **Telegram Trigger**.
2.  An **IF node** intelligently checks if the input is text or an image.
3.  If an **image** is sent, the **AI Vision Agent** analyzes it to identify ingredients. A **Structured Output Parser** then forces this data into a clean JSON list.
4.  If **text** is sent, a **Set node** directly prepares the user's text as the ingredient list.
5.  Both paths converge, providing a standardized ingredient list to the **Recipe Generator** agent. This AI acts as a professional chef to create three detailed recipes.
6.  Crucially, a second **Structured Output Parser** takes the AI's creative text and formats it into a reliable JSON structure (with name, difficulty, instructions, etc.). This ensures the output is always predictable and easy to work with.
7.  A final **Set node** uses a JavaScript expression to transform the structured recipe data into a beautiful, emoji-rich, and easy-to-read message.
8.  The formatted recipe suggestions are sent back to the user on Telegram.

### How to use

-   Configure the **Telegram Trigger** with your own bot's API credentials.
-   Add your AI provider credentials in the **OpenAI Vision Model** and **OpenAI Recipe Model** nodes (this template uses OpenRouter, but it can be swapped for a direct OpenAI connection).

### Requirements

-   A Telegram account and a bot token.
-   An AI provider account that supports vision and text models, such as OpenRouter or OpenAI.

### Customising this workflow

-   Modify the prompt in the `Recipe Generator` to include dietary restrictions (e.g., "vegan," "gluten-free") or to change the number of recipes suggested.
-   Swap the Telegram nodes for **Discord**, **Slack**, or a **Webhook** to integrate this recipe bot into a different platform or your own application.
-   Connect to a recipe database API to supplement the AI's suggestions with existing recipes.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
