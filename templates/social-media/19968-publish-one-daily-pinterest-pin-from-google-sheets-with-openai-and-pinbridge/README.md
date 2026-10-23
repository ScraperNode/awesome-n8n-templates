# 📱 Publish one daily Pinterest pin from Google Sheets with OpenAI and PinBridge

> ⚡ **30 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow publishes one Pinterest pin per run from a Google Sheets topic calendar, using OpenAI to write pin copy and optionally generate a 2:3 image, then posting via PinBridge and notifying you in Telegram, with an optional PinBridge webhook to confirm when the pin goes live.

## How it works
1. Runs every morning at 8:00 (or manually for testing) and loads configuration values like your Google Sheets URL, PinBridge account and default board IDs, and Telegram chat ID.
2. Reads the topic list from Google Sheets and selects the next unpublished row with the earliest planned_date (or publishes immediately if planned_date is empty).
3. Uses OpenAI (gpt-6-luna) to generate a Pinterest-ready title, description, alt text, and an image brief (creative description) for the selected topic.
4. Either downloads the provided image_url from the sheet or uses OpenAI image generation (gpt-image-2.5-flare) to create a vertical 1024×1536 pin image, then uploads the image asset to PinBridge.
5. Publishes the pin immediately or schedules it in PinBridge for the planned date, and then writes the resulting pin/schedule IDs, publish time, and copy back to the matching Google Sheets row.
6. Sends a Telegram message indicating whether the pin was published or scheduled.
7. Optionally receives a PinBridge pin.published webhook, verifies its HMAC signature, looks up the pin in PinBridge, updates the Google Sheets row with confirmed_at and the Pinterest URL, and sends a second Telegram notification.

## Setup
1. Create a [PinBridge account](https://www.pinbridge.io/get-started/?utm_source=n8n&utm_medium=workflow_template&utm_campaign=n8n_templates&utm_id=publish-one-daily-pinterest-pin-with-google-sheets-openai-and-pinbridge&utm_source_platform=n8n), connect your Pinterest account (App > Accounts > Connect), and create an API key (App > API Keys > Create). Then install the PinBridge community node (n8n-nodes-pinbridge) and add the PinBridge credential to the PinBridge nodes.
2. Add a Google Sheets OAuth credential and update sheet_url in the configuration step(s) to point to your topic calendar spreadsheet.
3. Add an OpenAI API credential for the chat model that writes the pin copy and the image generation step.
4. Create a Telegram bot, add a Telegram credential, and set your telegram_chat_id in the configuration step(s).
5. To enable live confirmation, set a 16+ character webhook secret, activate the workflow, register the production webhook URL in PinBridge (or run the included “register webhook” step once), and ensure PinBridge sends pin.published events with the matching signature header.

## Requirements
- A PinBridge account with a connected Pinterest account. A free account is enough to test.
- The PinBridge community node n8n-nodes-pinbridge. It's verified by n8n, so it works on Cloud and self-hosted.
- An OpenAI API key. Image generation uses gpt-image-2.5-flare, and OpenAI may ask you to verify your organization first.
- A Google account and a copy of the topic calendar template
- A Telegram bot and your chat ID

## Customization
- Rewrite the system prompt in "Write the pin copy" to match your brand voice. It has the biggest effect on pin quality.
- Change "Every morning at 8" to publish more or less often. Each run publishes one topic.
- Put a board_id on any row to send that pin to a different board than the default.
- Fill in image_url on a row to use your own image and skip image generation.
- For photo-only images, remove the "Headline text" instruction from the prompt. If headline text comes out misspelled, raise the image quality to high.
- Swap the Telegram nodes for Slack, Gmail or Discord.

## Additional info
Sheet columns: you fill in topic (required), context, link_url, planned_date, image_url and board_id. The workflow writes status, published_at, pinbridge_pin_id, pinbridge_schedule_id, pin_title, pin_description, pin_image_url, confirmed_at and pinterest_url. The template sheet already has every column, and board_id is plain text so Sheets doesn't round long IDs.

How the next topic is picked: rows with a topic and no published_at or PinBridge ID are sorted by planned_date, and an empty date counts as now. planned_date accepts 2026-10-01 or 2026-10-01 09:30 and is read in the workflow timezone. Dates more than two minutes away are scheduled; anything sooner is published straight away. To send a topic again, clear its published_at and PinBridge ID cells.

Finding your IDs: add a temporary PinBridge node. Connection > List gives your Pinterest account id, and Board > List gives your board ids.

Safety: placeholders left in the configuration stop the run before anything is published. Pins published straight away use a stable idempotency key, so re-running after a failure can't post the same topic twice. Webhook requests with an invalid signature are rejected.

Known limitations: scheduled pins have no idempotency key, so if the sheet update fails right after scheduling, the next run schedules that topic again. The confirmation step only handles pin.published, so pins that fail stay at publishing or scheduled; check PinBridge for failed pins.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram, Stop and Error, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
