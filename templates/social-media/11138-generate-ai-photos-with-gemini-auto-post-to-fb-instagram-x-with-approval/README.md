# 📱 Generate AI photos with Gemini & auto-post to FB, Instagram & X with approval

> ⚡ **1,453 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Social Media Foto Creation Bot with Approval Loop
**Create & Share AI Photos with Telegram, Gemini & Post to Facebook, Instagram & X**

**Description**
This n8n workflow turns your Telegram messenger into a complete **AI Photo Content Pipeline**. You send your photo idea as a text or voice message to a Telegram bot, collaborate with an AI to refine the prompt and social media caption, let Gemini generate the image, and then automatically publish it after your approval to **Facebook, Instagram, and X (Twitter)** – including status tracking and Telegram confirmations.

---

### What You Need to Get Started
This workflow connects several external services. You will need the following credentials:

* **Telegram Bot API Key**
    * Create a bot via **BotFather** and copy the bot token.
    * This is used by the `Listen for incoming events` and other Telegram nodes.
* **OpenAI API Key**
    * Required for **Speech to Text** (OpenAI Whisper) to transcribe voice notes.
    * Used by the AI Agent model (`OpenAI Chat Model`) for prompt creation.
* **Google Gemini API Key**
    * Used by the `Generate an image` node (model: `models/gemini-2.5-flash-image`) to create the AI image.
* **Google Drive & Sheets Access**
    * The generated image is temporarily stored in a Google Drive folder (`Upload image1`) and later retrieved by Blotato.
    * Prompts and post texts are logged to Google Sheets (`Save Prompt & Post-Text`) for tracking.
* **Blotato API Key**
    * The layer for social media publishing.
    * Uploads the image as a media asset (`Upload media1`) and creates posts for **Facebook, Instagram, and X**.

---

### How the Workflow Operates – Step by Step

#### 1. Input & Initial Processing (Telegram + Voice Handling)
This phase receives your messages and prepares the input for the AI.

| Node Name | Role in Workflow |
| :--- | :--- |
| `Listen for incoming events` | Telegram Trigger node that starts the workflow on any incoming message. |
| `Voice or Text` | Set node that structures the incoming message into a unified `text` field. |
| `A Voice?` | IF node that checks if the message is a voice note. |
| `Get Voice File` | If voice is detected, this downloads the audio file from Telegram. |
| `Speech to Text` | Uses OpenAI Whisper to convert the voice note into a text transcript. |

The output of this stage is always a clean text string containing your image idea.

#### 2. AI Core & Refinement Loop (Prompt + Caption via AI)
Here, the AI drafts the image prompt (for Gemini) and the social media caption (for all platforms) and enters an approval loop with you.

| Node Name | Role in Workflow |
| :--- | :--- |
| `AI Agent` | Central logic agent. Creates a `videoPrompt` (used for image generation) and `socialMediaText` based on your idea, and asks for feedback. |
| `OpenAI Chat Model` | The LLM backing the agent (e.g., GPT-4.1-mini). |
| `Window Buffer Memory` | Stores recent turns, allowing the agent to maintain context during revisions. |
| `Send questions or proposal to user` | Sends the AI's suggestion for review back to you. |
| `Approved from user?` | IF node that checks if the output is the **approved JSON** (meaning you replied with "ok" or "approved"). |
| `Parse AI Output` | Code node that extracts the `videoPrompt` and `socialMediaText` fields from the agent’s final JSON output. |

#### 3. Content Generation & Final Approval
Once the prompt and caption are set, the image is created and sent to you for final approval before publishing.

| Node Name | Role in Workflow |
| :--- | :--- |
| `Inform user about processing` | Telegram node to confirm: "Okay. Your image is being prepared now..." |
| `Save Prompt & Post-Text` | Google Sheets node that logs the `videoPrompt` and `socialMediaText`. |
| `Generate an image` | Gemini node that creates the image based on the `videoPrompt`. |
| `Send a photo message` | Sends the generated image to Telegram for review. |
| `Send message and wait for response` | Telegram node that waits for your response to the image (e.g., "Good?" / "Approve"). |
| `Upload image1` | Temporarily saves the generated image to Google Drive. |
| `Download image from Drive` | Downloads the image back from Drive. |
| `If1` | IF node that checks if the image was approved in the previous step (`approved == true`). |

#### 4. Upload & Publishing (Blotato)
After final approval, the image is uploaded to Blotato, and post submissions for the social media platforms are created.

| Node Name | Role in Workflow |
| :--- | :--- |
| `Upload media1` | Blotato Media node. Uploads the approved image as a media asset and returns a public `url`. |
| `Create instagram Post` | Creates an Instagram post using the media URL and `socialMediaText`. |
| `Create x post` | Creates an X (Twitter) post using the media URL and `socialMediaText`. |
| `Create FB post` | Creates a Facebook post using the media URL and `socialMediaText`. |

#### 5. Status Monitoring & Retry Loops (X, Facebook, Instagram)
An independent loop runs for each platform, polling Blotato until the post is either published or failed.

| Node Name | Role in Workflow |
| :--- | :--- |
| `Wait`, `Wait1`, `Wait2` | Initial pauses after post creation. |
| `Check Post Status`, `Get post1`, `Check Post Status1` | Blotato Get operations to fetch the current status of the post. |
| `Published to X?`, `Published to Facebook?`, `Published to Instagram?` | IF nodes checking for the `"published"` status. |
| `Confirm publishing to X`, `Confirm publishing to Facebook`, `Confirm publishing to Instagram` | Telegram nodes that notify you of successful publication (often including the post link). |
| `In Progress?`, `In Progress?1`, `In Progress?2` | IF nodes that check for `"in-progress"` status and loop back to the Wait nodes (`Give Blotat other 5s`). |
| `Send X Error Message`, `Send Facebook Error Message`, `Send Instagram Error Message` | Telegram nodes that notify you if a failure occurs. |

---

### 🛠️ Personalizing Your Content Bot

The workflow is highly adaptable to your personal brand and platform preferences:

1.  **Tweak the AI Prompt & Behavior:**
    * **Where:** In the **`AI Agent`** node, within the **System Message**.
    * **Options:** Change the tone (casual, professional, humorous) and the level of detail required for the prompt generation or the social media captions.
2.  **Change Gemini Model or Image Options:**
    * **Where:** In the **`Generate an image`** node.
    * **Options:** Swap the model or adjust image options like **Aspect Ratio** or **Style** based on Gemini's API capabilities.
3.  **Modify Which Platforms You Post To:**
    * **Where:** In the Blotato nodes: **`Create instagram Post`**, **`Create x post`**, **`Create FB post`**.
    * **Options:** Disable or delete branches for unused platforms, or add new platforms supported by Blotato.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Google Drive, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
