# 🎬 Automated Thai content creation & publishing with Ollama, Gemini & Telegram

> ⚡ **1,893 views** · 🎬 [Content Creation & Video](../)

## Description

## Automated AI Content Publisher
This n8n workflow is your all-in-one solution for automated content creation and publishing. It intelligently crafts unique articles in Thai, generates captivating AI images, and seamlessly publishes them to your website while notifying you via Telegram. Say goodbye to manual content pipelines and hello to effortless, AI-driven publishing.

How It Works
This workflow kicks off when new news data hits your designated Google Sheet, then it springs into action:

Smart Image Selection: An AI analyzes your news content to decide if a general photorealistic image or a more artistic, risoprint-style AI image is the best fit.

Article Generation: Another AI drafts a high-quality, long-form article in flawless Thai, adapting its format (listicle or analytical) to perfectly suit the topic.

SEO & Marketing Boost: A specialized AI then optimizes your content by generating concise titles, engaging excerpts, and relevant tags in both Thai and English. It also creates the perfect prompts for image generation.

AI Image Creation: Leveraging Google Gemini, the workflow generates stunning visuals, producing either photorealistic or artistic risoprint-style images based on the AI's prompts.

Seamless Publishing: Your newly created article, complete with its AI-generated image and all metadata, is automatically posted to your website.

Instant Notifications: You'll get a quick ping on Telegram with a summary of the new post, so you're always in the loop.

Setup
To get this workflow up and running, you'll need to configure a few things:

Google Sheet: Link your Google Sheet and specify the sheet name and the column containing your news description.

Ollama: Set up your Ollama API credentials to connect the workflow to your local or remote Ollama instance.

Google Gemini API: Provide your Google Gemini API key to enable AI image generation.

Website API: Create a credential for your website, including its posting URL, an API Key for authentication, and your desired user_id and username for posts. You can also add optional fields like bgColor, LinkAff, postType, and embeddedContent here.

Telegram: Set up your Telegram API credential with your bot token and the chatId where you want to receive notifications.

## 🔗 Nodes Used

HTTP Request, Telegram, Google Sheets Trigger, Basic LLM Chain, Ollama Model, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
