# 📱 Generate AI captions and auto-post random images to Nimply channels

> ⚡ **16 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow automatically picks a random image, uses an AI Agent to generate an engaging caption, uploads the image to Nimply, and publishes it as a post to a chosen Nimply channel, turning a manual "pick photo → write caption → post" routine into one click.

## How it works
1. The workflow is started manually (swap in a Schedule Trigger to automate it).
2. A Config node holds a list of sample image URLs to post from.
3. A Code node picks one image at random from that list.
4. An AI Agent, powered by an OpenRouter chat model, writes a caption for the image with emojis and exactly 3 hashtags.
5. The image is uploaded to Nimply as media.
6. The workflow fetches all available Nimply channels and filters them by name to find the target channel.
7. A new post is created on Nimply using the uploaded media and the AI-generated caption.

## Setup
1. Import the workflow into your n8n instance.
2. Connect your OpenRouter credentials (or swap in your preferred LLM provider).
3. Connect your Nimply credentials.
4. Replace the sample image URLs in the Config node with your own images.
5. Update the channel name check in the If node to match your target channel.
6. Set your channel ID(s) in the Create a Post node, then activate the workflow.

## Requirements
- A Nimply account with API access enabled.
- An OpenRouter account and API key (or another supported LLM provider).
- An n8n instance (Cloud or Self-hosted).

## Customization
- Replace the Manual Trigger with a Schedule Trigger for recurring, automated posts.
- Pull images from Google Drive, S3, or an API instead of a static list.
- Adjust the caption prompt to change tone, length, or hashtag count.
- Route different images or topics to different Nimply channels by extending the filtering logic.

## Additional info
This workflow is designed as a starting point for AI-assisted social publishing on Nimply. You can extend it by adding approval steps before posting, logging generated captions to a spreadsheet, generating images with AI instead of using a static list, or posting to multiple channels at once.

## 🔗 Nodes Used

AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
