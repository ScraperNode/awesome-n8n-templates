# 🎬 Generate Instagram carousels from Telegram prompts using OpenAI and Kie AI

> ⚡ **87 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow acts as an automated **Social Media Content Strategist**, allowing you to generate a complete, 5-slide Instagram carousel with a corresponding caption directly from a single idea sent via Telegram. Instead of writing complex prompts for each slide, the workflow uses a specialized AI Agent to interpret your topic, apply your specific brand guidelines, and generate a full, structured educational carousel automatically.

By integrating a structured output parser, it ensures the AI generates a detailed plan for all 5 slides. These are then sent to an external, high-quality image generation API. A second AI agent simultaneously works on crafting an engaging, SEO-friendly caption for your post.

Use cases are many:
*   **Automated Content Creation:** Generate a complete, ready-to-post Instagram carousel from a simple topic idea in minutes.
*   **Rapid Idea Visualization:** Quickly prototype different educational content pillars for your social media strategy.
*   **Brand Consistency:** Enforce a specific visual style, color palette, and mood across all AI-generated carousels through a central brand guideline node.

### Good to know

*   **Full Carousel Generation:** The workflow doesn't just make one image; it creates a complete 5-slide carousel, including the visual concepts and text overlays for each slide.
*   **Dual AI Agents:** It leverages two distinct AI personas: a "Senior Content Strategist" to structure the carousel and an "Instagram Copywriter" to write the caption.
*   **Polling System:** It includes a smart "Wait" and "Check Status" loop to handle the asynchronous nature of the external image generation API, ensuring it retrieves the content without errors once it's ready.
*   **Security:** It features a Chat ID filter on the trigger to ensure only authorized users can initiate the workflow.

### How it works

1.  **Trigger:** You send a content idea (e.g., "5 tips for better time management") to your configured Telegram bot.
2.  **Validation:** The workflow first checks if the message comes from an authorized Chat ID.
3.  **Content Strategist (AI Agent):** An AI agent takes your topic and the predefined "Brand Guideline" to create a detailed 5-slide plan, outputting a JSON object with prompts for both the visuals and text overlay of each slide.
4.  **Caption Copywriter (AI Agent):** In parallel, a second AI agent writes an engaging, SEO-friendly Instagram caption based on the carousel prompts.
5.  **Image Generation:** The workflow sends the 5 slide prompts to the external image generation API (Kie AI) to create the visuals.
6.  **Status Polling:** It waits for a set duration and then repeatedly checks the API with the unique task ID until the images are fully generated and ready for download.
7.  **Delivery:** The final high-resolution carousel images and the generated caption are sent back to you via Telegram, ready to be posted.

### Setup steps

1.  **Telegram:** Create a bot via `@BotFather` on Telegram. Get the **API Token** and add it to the `Telegram Trigger` node's credentials. Send a message from your account, run the workflow once, and copy your **Chat ID** from the output into the `IF` node to authorize yourself.
2.  **OpenAI:** Connect your OpenAI credentials to the "Generate Carousel Content" and "Generate Caption" nodes.
3.  **Image Generation API (Kie AI):** This workflow uses `api.kie.ai` for image generation. You will need to create an account with them to get an API key. Add this key as a new **Header Auth Credential** in n8n and select it in the "Generate Carousel Images" and "Retrieve Carousel Images" nodes.
4.  **Brand Guideline:** Open the "Set Brand Style" node and replace the placeholder text in the `style` variable with your specific brand colors, typography, and overall aesthetic.
5.  **Execution:** Activate the workflow and send a simple topic to your bot to start the content creation process.

### Requirements

*   Telegram Bot API Token
*   OpenAI API Key
*   Kie.ai (or other image generation service) API Key
*   n8n version with LangChain & AI Agent nodes support

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
