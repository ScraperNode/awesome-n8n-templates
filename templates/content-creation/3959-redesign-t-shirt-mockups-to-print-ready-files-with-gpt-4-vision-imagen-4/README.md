# 🎬 Redesign t-shirt mockups to print-ready files with GPT-4 vision & Imagen 4

> ⚡ **6,155 views** · 🎬 [Content Creation & Video](../)

## Description

🧠 What This Workflow Does

This n8n workflow allows you to upload a T-shirt mockup design (even if it's rough or outdated), and automatically turns it into a refined, print-ready artwork using the power of AI.

It starts with an image of a T-shirt design, analyzes it using OpenAI's vision model, and then generates a cleaner, upgraded prompt to be used with OpenAI’s image generation API (gpt-image-1). The final output is a new T-shirt graphic optimized for printing on solid black background, with no visible shirt or mockup framing.

⚙️ How It Works

1. User Sends a T-shirt Mockup Image Link
The workflow begins when the user drops an image link (T-shirt mockup) into a chat interface or input trigger.

2. AI Analyzes the Image (OpenAI Vision)
Using OpenAI’s GPT-4 vision capabilities, the workflow extracts the key design elements from the image:

- Characters, text, layout
- Graphic style, composition
- Visual tone and focus
- AI Agent Creates a Refined Prompt
- The extracted details are passed to an AI agent that:
- Preserves the original layout and message
- 
- Enhances the visual composition and typography
- Removes mockup elements like shirt collar, sleeves, shadows.
- Locks the artwork on a pure black background only
- Outputs a clean, artistic, JSON-safe one-line prompt for generation

3. Text Escaping for API Compatibility
A JavaScript function node escapes the prompt (quotes, slashes, line breaks) to make it safe for use in downstream JSON requests.

4. Image Generation via GPT-Image-1 API or IMAGEN 4 from GOOGLE
The final prompt is sent to OpenAI’s gpt-image-1 to generate a brand-new artwork — ideal for direct printing on a black T-shirt.

⚠️ Cost Notice for gpt-image-1 Usage

This workflow uses OpenAI's gpt-image-1 model to generate high-quality T-shirt artwork from refined prompts. Please note that this model is a paid service, and each image generation request may cost approximately $0.25 per design, depending on resolution and usage.

We strongly recommend users to review their OpenAI API usage plan and be mindful of costs when running this workflow, especially if generating in bulk or integrating into larger automation flows.

You can monitor your usage at: https://platform.openai.com/docs/models/gpt-image-1

5. (Optional) You can send the result to Telegram, upload to Notion, or store it in your design system.

✅ Key Features
- 
- Works from any uploaded mockup image
- Converts design concepts into print-ready artwork prompts
- Avoids outputting shirt models, collars, or product mockups
- Optimized for solid black background with no distractions
- Modular and easy to connect with file delivery or approval flows

🚀 How to Use

- Import the .json workflow into n8n
- Configure your OpenAI credentials for both vision and image APIs
- Trigger the flow by sending an image url of a T-shirt mockup
- Let the workflow generate and return a brand-new design from that concept

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, Convert to File, Chat Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
