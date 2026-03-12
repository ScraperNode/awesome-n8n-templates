# 🎬 Create AI-generated UGC marketing videos with Telegram & GPT-4

> ⚡ **3,016 views** · 🎬 [Content Creation & Video](../)

## Description

## 📌 How to Set Up the AI UGC Video Automation System
This system uses Telegram + N8N (no-code automation) + AI models to generate user-generated content (UGC) videos automatically.

## 🔹 Overview
## Input: Send a photo of the product + character via Telegram bot.
## Process: N8N workflow handles:
1. Image analysis
2. Prompt generation
3. Image creation
4. Video clip generation
5. Combining clips into a final UGC ad
Output: Video sent back to Telegram (or other destination like Google Drive/Dropbox).

## 🔹 System Workflow
- ## Input Section

## Telegram Setup:
1. Create a Telegram bot and get its Bot ID.
2. Connect the bot to N8N Telegram Trigger node and also put the http token in the Bot id node too
3. Bot listens for messages (photos + instructions).
4. Send Input
5. Upload one compressed image with :
- Product
- Character (optional)
Example: “Create a UGC video with Gandalf promoting The Hobbit book. 20 seconds long.”
Image Handling

. N8N retrieves the image from Telegram (via file path).
. OpenAI agent analyzes the image:
. Extracts product details (brand, color, description).
. Extracts character details (name, outfit, style).

- ## Confirm Input:
. System replies on Telegram: “Got it. I’m now creating your video.”

## Step 1: Create Image
1. AI Agent (Image Prompt)
2. Generates a natural, UGC-style prompt (realistic iPhone photo look).
3. Uses OpenAI GPT to structure prompt and aspect ratio (2:3 or 3:2).
4. Image Generation
5. Sends prompt + aspect ratio to Key.AI → 4.0 Image Model.
6. Waits until image is generated.
Example: Gandalf holding The Hobbit book.

## Step 2: Create Video Clips
1. AI Agent (Video Prompt)
2. Creates video script and scenes (dialogue + setting).
3. Calculates how many clips needed (e.g. 20s request → 3 x 8s clips).
4. Ensures UGC style (casual, amateur look).
5. Clip Generation
6. Sends prompts to Key.AI V3 model (Fast or Quality).
7. Input: Prompt + image + aspect ratio.
8. Output: Multiple short clips (8s each).
9. Wait for Processing
10. Clips take a few minutes to generate.
11. Retrieve video URLs from Key.AI.

## Step 3: Combine Video
1. Aggregate Clips
2.Collect all video URLs (from multiple clips).
3. Merge with FFmpeg
4. Send videos to File.AI → FFmpeg Merge Service.
5. Stitches clips into one continuous video.
6. Final Output
7. Final merged video returned as a download URL.
8. N8N sends the video back to your Telegram chat (or connected storage).

## 🔹 Customization Options
## Models:
V3 Fast (~$0.40/clip, cheaper, good enough).
V3 Quality (~$2/clip, slightly higher quality).
Video Length: AI automatically adjusts number of clips.
## Outputs:
Telegram (default)
Can be extended to Google Drive, Dropbox, etc.

## 🔹 Cost
Image generation: a few cents.
Video clips: ~$0.40 each with V3 Fast.
Clip merging: &lt; $0.01.
Much cheaper than manual UGC production.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
