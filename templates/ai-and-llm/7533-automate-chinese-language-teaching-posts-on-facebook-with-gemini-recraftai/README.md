# ✨ Automate Chinese language teaching posts on Facebook with Gemini & Recraft.ai

> ⚡ **560 views** · ✨ [AI & LLMs](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.

## Description

### Workflow Overview
This workflow automates the process of creating and publishing engaging Facebook posts that teach Chinese words to a Thai-speaking audience. It integrates multiple AI models, APIs, and tools to generate content, create visuals, and publish posts seamlessly. Below is a detailed breakdown of the workflow:

### Who Is This Template For?
- Social Media Managers: Teams managing Facebook pages and looking for automated, engaging content creation.
- Content Creators: Professionals who want to streamline the process of generating educational and visually appealing posts.
- Language Enthusiasts: Individuals or organizations teaching languages (e.g., Chinese) to a Thai-speaking audience.

### What Problem Does This Workflow Solve?
Creating engaging social media content manually can be time-consuming and inconsistent. This workflow solves that by:
- Automating the generation of educational posts in Thai with Chinese vocabulary.
- Creating visually appealing images tailored to the post's theme.
- Publishing posts directly to Facebook using the Pages API.

## What This Workflow Does
1. **Input Handling**
The workflow starts with an input word (e.g., received via chat or fetched from a Google Sheet).
The input is split into two variables (word and input) to ensure data persistence throughout the workflow.
2. **Generate Text Content**
An AI model (OpenRouter Chat Model) generates a structured Facebook post in Thai, including:
- Engaging hook
- Core vocabulary (Chinese word, Pinyin, and Thai meaning)
- Real-world usage examples
- Pro-tip or fun fact
- Call-to-action for engagement
- Relevant hashtags
3. **Describe Image Concept**
Another AI model creates a brief description of the visual theme for the post. This description is used as input for generating an image.
4. **Generate Image**
The workflow uses Recraft.ai to generate an image based on the description. The image is styled consistently using predefined themes (e.g., digital illustration).
5. **Publish Post**
The generated text and image are published to Facebook using the Pages API. The post includes:
The educational content as the caption.
The generated image as the visual element.

## Setup Guide
### Pre-Requisites
Access to the following APIs: 
- OpenRouter.ai: For generating text content and image descriptions.
- Recraft.ai: For generating images.
- Facebook Graph API: For publishing posts.

### Step-by-Step Setup
1. Configure Input Source: Replace the chat input node with your preferred source (e.g., Google Sheet, email, or manual input).
Set Up OpenRouter.ai:
2. Configure the credentials for OpenRouter.ai in the respective nodes (OpenRouter Chat Model and OpenRouter Chat Model1).
3. Set Up Recraft.ai:
Add your API key for Recraft.ai in the Generate Image (Recraft.ai) node.
4. Configure Facebook Graph API:
Set up the Facebook Graph API credentials with the required permissions (pages_manage_posts, pages_read_engagement, etc.).
5. Update the page_id and graphApiVersion in the Facebook Graph API node.
6. Test the Workflow:
Run the workflow manually to verify that it generates content, creates images, publishes posts, and logs details correctly.

### How to Customize This Workflow to Your Needs
- Change Input Source: Replace the chat input with a Google Sheet, email, or database query.
- Modify Content Style: Adjust the AI prompts to suit your audience (e.g., professional tone, casual language).
- Use Different Image Styles: Experiment with other styles/themes in Recraft.ai for the generated images.
- Expand Use Cases: Adapt the workflow to other social media platforms (e.g., Instagram, LinkedIn) by modifying the API calls.

#### Why Use This Template?
- Efficiency: Automates repetitive tasks like content creation and image generation.
Consistency: Ensures posts follow a consistent format and style.
- Engagement: Creates visually appealing and interactive content to boost audience engagement.
- Scalability: Easily adaptable for different topics, languages, or platforms.
Additional Resources

## 🔗 Nodes Used

HTTP Request, Facebook Graph API, AI Agent, Structured Output Parser, Chat Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
