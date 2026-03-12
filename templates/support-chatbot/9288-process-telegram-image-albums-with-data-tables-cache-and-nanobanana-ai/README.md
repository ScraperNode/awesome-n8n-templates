# 💬 Process telegram image albums with Data Tables Cache and NanoBanana AI

> ⚡ **895 views** · 💬 [Support Chatbots](../)

## Description

This n8n workflow template simplifies processing of media group messages sent by users in Telegram. It caches image album messages using [Data Tables](https://docs.n8n.io/data/data-tables/), and then sends them to a Nano Banana model for processing.

This template showcases n8n's new Data Tables feature as a powerful caching layer to process entire image albums from Telegram.
------------------------------------------------------------------------------------------------------------------------------------------------

### How it works

*   **Media Group handling**: captures all images and the shared caption when user sends an album via Telegram.
*   **Data Table caching**: stores all incoming messages in a Data Table to prevent data loss and allow for batch processing.
*   **Scheduled processing**: a timer trigger periodically finds and processes completed image albums from the cache.
*   **Multi-modal AI**: sends the full set of images and the text prompt to the NanoBanana model via OpenRouter.
*   **User feedback**: automatically notifies the user when processing begins and when the result is ready.

### How to use

*   Import the workflow template into your n8n instance.
*   Create a new Data Table with the following columns (all of type String): `chat_id`, `message_id`, `media_group`, `message`, `status`.
*   Configure your Telegram credentials and connect your bot.
*   Update the "prepare user messages" node with your Telegram bot token to create the image download links.
*   Set up your OpenRouter credentials.
*   Activate the workflow. Now you can send a group of images with a caption to your Telegram bot.

### Requirements

*   An n8n instance (cloud or self-hosted) with Data Tables enabled. Minimal n8n version is `1.113`
*   A Telegram account and a Telegram bot token.
*   An OpenRouter account with access to the NanoBanana model.

Customizing this workflow
-------------------------

*   **Adjust the processing schedule**: modify the **Schedule Trigger** node to change how often the workflow checks for new media groups to process.
*   **Handle other message types**: The workflow handles only the media groups. You can easily build logic for text messages, documents, or commands by adding nodes instead of the placeholder node (**"Process other messages as usual"**).
*   **Extend the functionality**: add more nodes after the AI generates an image to perform different actions, such as saving the file, sending it to another service, or creating a social media post.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Schedule Trigger, Filter, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
