# 🎬 Publish Arabic kids’ stories with text, images, and audio using OpenAI and Telegram

> ⚡ **16 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs every 12 hours to generate a short kids’ story with OpenAI, translate it into Arabic, create a DALL·E image prompt and image, and publish the Arabic text, image, and an Arabic text-to-speech audio file to a Telegram channel.

## How it works
1. Runs on a schedule trigger every 12 hours.
2. Uses OpenAI (GPT-4 Turbo) to generate an original short kids’ story in English, using a text splitter to chunk any input context.
3. Translates the story into simple, kid-friendly Arabic with a moral lesson using OpenAI (GPT-4 Turbo).
4. Posts the Arabic story text to the configured Telegram channel.
5. Converts the Arabic story text to speech with OpenAI text-to-speech and uploads the audio to Telegram.
6. Summarizes the story into a “no text in the image” character-focused prompt and generates an illustration with OpenAI image generation (DALL·E), then posts the image to Telegram.

## Setup
1. Add an OpenAI API credential with access to GPT-4 Turbo, image generation (DALL·E), and text-to-speech.
2. Add a Telegram bot credential, make the bot an admin in your target channel or group, and set the correct chat ID in all Telegram send steps.
3. Set an explicit model in the OpenAI chat model used for the DALL·E prompt generation to avoid relying on the node default.
4. Adjust the schedule interval if you want a different publishing frequency.

## 🔗 Nodes Used

Telegram, Schedule Trigger, Summarization Chain, OpenAI Chat Model, Recursive Character Text Splitter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
