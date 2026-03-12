# 🎬 Create & share AI videos with Telegram, Gemini & post to TikTok, Instagram, FB

> ⚡ **2,309 views** · 🎬 [Content Creation & Video](../)

## Description

**Video Generation with Telegram Bot and Gemini API – Auto-Post to TikTok, Instagram & Facebook**

This n8n workflow turns your Telegram messenger into a full video content pipeline:
you send a text or voice idea to a Telegram bot, collaborate with an AI on the script and caption, let Gemini generate the video, and then automatically publish it to TikTok, Instagram and Facebook – all with status tracking and Telegram confirmations.

---

## What You Need to Get Started

This workflow connects several external services. You’ll need:

* **Telegram Bot API Key**

  * Create a bot via Telegram’s **BotFather** and copy the bot token.
  * This is used by the **Listen for incoming events** and other Telegram nodes.

* **OpenAI API Key**

  * Required for:

    * **Speech to Text** (OpenAI Whisper) – to transcribe voice notes.
    * The **OpenAI Chat Model** used inside the AI Agent.

* **Google Gemini / Vertex (via n8n Gemini Node)**

  * Used by the **Generate a video** node (model: `veo-3.0-fast-generate-001`) to create the video.

* **Google Drive**

  * The generated video is temporarily stored in a Google Drive folder via **Upload video** and later downloaded again for uploading to  [Blotato](https:///).

*** Blotato API Key***

  * Social media publishing layer:

    * Uploads the video as media.
    * Creates posts for **TikTok**, **Instagram** and **Facebook**.
    * Exposes a status endpoint the workflow uses for polling.

* **Google Sheets Access** (optional but included)

  * Used by **Save Prompt & Post-Text** to log your prompts and captions.

Once these credentials are configured in n8n, the workflow runs end-to-end from Telegram idea to multi-platform publishing.

---

## How the Workflow Operates – Step by Step

### 1. Input & Initial Processing (Telegram + Voice Handling)

This phase listens to your messages and normalizes them into a single text input for the AI.

| Node Name                      | Role in Workflow                                                                                        |
| ------------------------------ | ------------------------------------------------------------------------------------------------------- |
| **Listen for incoming events** | Telegram Trigger node that starts the workflow whenever your bot receives a message (text or voice).    |
| **Voice or Text**              | Set node that structures the incoming payload and prepares a unified `text` field for downstream nodes. |
| **A Voice?**                   | IF node that checks whether the incoming message is a voice note or plain text.                         |
| **Get Voice File**             | If voice is detected, this Telegram node downloads the audio file from Telegram.                        |
| **Speech to Text**             | Uses OpenAI Whisper to convert the voice note into a text transcript.                                   |

* **If you send text**:
  The workflow skips the voice download/transcription and goes directly to the AI agent with your original text.

* **If you send a voice note**:
  The workflow downloads the file, runs it through Whisper in **Speech to Text**, and passes the resulting transcript onward.

The output of this stage is always a clean text string representing your idea.

---

### 2. AI Core & Approval Loop (Script + Caption via AI)

Here the AI designs the video prompt (for Gemini) and the social media caption (for all platforms), then iterates with you until you approve.

| Node Name                              | Role in Workflow                                                                                                                                                     |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **AI Agent**                           | Central logic agent. Takes your idea text and applies the system prompt to create a video prompt and social media caption. Handles revisions based on your feedback. |
| **OpenAI Chat Model**                  | The LLM backing the agent (OpenAI Chat model).                                                                                                                       |
| **Window Buffer Memory**               | Memory buffer that stores recent turns, so the agent can keep context across your “make it shorter / more fun / more technical” requests.                            |
| **Send questions or proposal to user** | Telegram node that sends the AI’s suggested prompt + caption back to you for review.                                                                                 |
| **Approved from user?**                | IF node that checks whether the agent’s output is the “approved” JSON (meaning you said “ok” / “approved”) or just a normal suggestion.                              |

#### Video Prompt Assistant System Prompt (Internal Instructions)

The AI Agent is configured with a system message like:

&gt; You are a video prompt assistant for Telegram.
&gt;
&gt; 1. Analyze the user’s message and create a **video prompt**.
&gt; 2. Create relevant **social media text with hashtags**.
&gt; 3. Present both to the user and ask for feedback.
&gt; 4. If the user requests changes, refine and present again.
&gt; 5. Only when the user says “approved” or “ok”, output a final JSON:
&gt;    `{ "videoPrompt": "...", "socialMediaText": "..." }`

Key behavior:

* **Before approval**:
  The agent always responds with *human-readable suggestions* (prompt + caption) and a follow-up question asking what to change.
* **After approval**:
  The agent returns **only JSON** (no Markdown, no explanation) with:

  * `videoPrompt` – to be sent to Gemini.
  * `socialMediaText` – to be used as a caption on all platforms.

#### JSON Parsing

| Node Name           | Role in Workflow                                                                                                                                                                                           |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Parse AI Output** | Code node that extracts `videoPrompt` and `socialMediaText` from the agent’s output. It is tolerant of different formats (e.g. JSON wrapped in markdown) and throws errors if required fields are missing. |

If the AI output is approved JSON, this node returns two clean fields:

* `videoPrompt`
* `socialMediaText`

These are used in all subsequent steps.

---

### 3. User Feedback & Logging

Right after parsing the final JSON, the workflow informs you and logs the content.

| Node Name                        | Role in Workflow                                                                                                                                              |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Inform user about processing** | Telegram node that tells you: *“Okay. Your video is being prepared now. I’ll let you know as soon as it’s online.”*                                           |
| **Save Prompt & Post-Text**      | Google Sheets node that appends a new row containing the `videoPrompt` and `socialMediaText` to a sheet (e.g., for tracking which prompts/captions you used). |

This gives you both **visibility** (confirmation message) and **historical tracking** of your content ideas.

---

### 4. Video Generation with Gemini

Now the actual video is created using Google Gemini’s video model.

| Node Name            | Role in Workflow                                                                                                                 |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Generate a video** | Gemini node (model `models/veo-3.0-fast-generate-001`) that uses `videoPrompt` to generate a vertical video (aspect ratio 9:16). |

The `videoPrompt` from the AI agent is passed directly into this node.
The resulting binary output is a generated short-form video suitable for TikTok, Reels and Stories.

---

### 5. Staging the Video in Google Drive

To make the video accessible for Blotato, the workflow uses Google Drive as a simple file staging area.

| Node Name                      | Role in Workflow                                                                                                                                                    |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Upload video**               | Uploads the generated video binary to a specific folder in Google Drive (`n8n_videos`). The file name is taken from the binary metadata or defaults to `video.mp4`. |
| **Download Video from Drive1** | Immediately downloads the uploaded video by file ID, this time as binary data suitable for passing into  [Blotato].                                                    |

Using Drive ensures that the file is properly hosted and addressable when uploading to  [Blotato]’s media API.

---

### 6. Uploading to  [Blotato]and Creating Posts

First, the video is sent to  [Blotato] as a media asset. Then three separate posts are created for TikTok, Instagram, and Facebook.

#### Media Upload

| Node Name         | Role in Workflow                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Upload media1** |  [Blotato] media node. Uploads the binary video as a media asset and returns a public `url` used by all post creation nodes. |

#### Platform-Specific Post Creation

From the uploaded media, the workflow fans out into three branches:

| Node Name                | Platform      | Role in Workflow                                                                                                                              |
| ------------------------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Create TikTok post**   | TikTok        | Creates a TikTok post using the media URL and `socialMediaText` as the caption. Also sets the flag that the video is AI-generated.            |
| **Create post1**         | Instagram     | Creates an Instagram (or related) post linked to the  [Blotato] account (e.g., `aimaginate_xx`), using the same `socialMediaText` and media URL. |
| **Create Facebook post** | Facebook Page | Creates a Facebook post on your specified page, again using the shared caption and media URL.                                                 |

At this point, all three platforms have an initial “post submission” created via  [Blotato].
Next, the workflow tracks their publishing status.

---

### 7. Status Monitoring & Retry Loops

Each platform has its own mini-loop that polls  [Blotato]) until the post is either **published** or **failed**.

#### TikTok Status Loop

| Node Name                        | Role in Workflow                                                                                                                     |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Wait**                         | Initial 5-second (or configured) pause after creating the TikTok post.                                                               |
| **Check Post Status**            |  [Blotato](https:///) “get” operation that fetches the current status (`published`, `in-progress`, etc.) of the TikTok post by `postSubmissionId`. |
| **Published to TikTok?**         | IF node that checks if `status === "published"`.                                                                                     |
| **Confirm publishing to Tiktok** | Telegram node that notifies you when the TikTok post is live (often including a link or at least a confirmation text).               |
| **In Progress?**                 | IF node that checks if `status === "in-progress"`.                                                                                   |
| **Give Blotat other 5s :)**      | Wait node that sleeps a bit before checking again. Feeds back into **Published to TikTok?** to create a polling loop.                |
| **Send TikTok Error Message**    | Telegram node that informs you if the status is neither published nor in progress (i.e., a failure).                                 |

#### Instagram Status Loop

| Node Name                           | Role in Workflow                                                                     |
| ----------------------------------- | ------------------------------------------------------------------------------------ |
| **Wait1**                           | Wait node after **Create post1**, giving Blotato time to process the Instagram post. |
| **Get post1**                       | Blotato “get” operation to read status of the Instagram post.                        |
| **Published to Instagram?**         | IF node checking if `status === "published"`.                                        |
| **Confirm publishing to Instagram** | Telegram message with confirmation that your Instagram post is live.                 |
| **In Progress?1**                   | IF node checking if `status === "in-progress"`.                                      |
| **Give Blotat more time**           | Wait node that loops back to **Published to Instagram?** for another status check.   |
| **Send Instagram Error Message**    | Telegram notification if the Instagram post fails.                                   |

#### Facebook Status Loop

| Node Name                          | Role in Workflow                                                                 |
| ---------------------------------- | -------------------------------------------------------------------------------- |
| **Wait2**                          | Wait node after **Create Facebook post** (longer pause, e.g. 30 seconds).        |
| **Get Facebook post**              | Blotato “get” operation to fetch Facebook post status.                           |
| **Published to Facebook?**         | IF node testing for `status === "published"`.                                    |
| **Confirm publishing to Facebook** | Telegram notification that the Facebook post is online.                          |
| **In Progress?2**                  | IF node checking if the Facebook post is still in progress.                      |
| **Give Blotat other 5s :)2**       | Wait node that loops back into **Published to Facebook?** for repeated checks.   |
| **Send Facebook Error Message**    | Telegram notification if the Facebook post fails or ends in an unexpected state. |

This structure ensures that each platform is monitored independently, with clear success or error messages delivered right into your Telegram chat.

---

## 🛠️ Personalizing Your Video Content Bot

The real power of this workflow is how easy it is to adapt it to your own style, platforms, and preferences.

### 1. Tweak the AI Prompt & Behavior

* **Where:** Inside the **AI Agent** node, in the *System Message* (`systemMessage`) of the **options**.
* **What you can change:**

  * The tone (funny, educational, corporate, storytelling, etc.).
  * The level of detail in the video prompt (camera moves, style, characters, environment).
  * The caption structure (hook, value, CTA, hashtag strategy).
  * Whether the agent should produce multiple variants or just one.

You can also extend it, e.g.:

* Ask for **multi-slide carousel prompts** instead of a single video.
* Force language (e.g., always English, always German).
* Add platform-specific hints (e.g., stronger hooks for TikTok).

### 2. Change Video Model or Aspect Ratio

* **Where:** **Generate a video** node.
* **Options:**

  * Swap the model (within the Gemini node) if you want higher quality or different behavior.
  * Adjust the `aspectRatio` from `9:16` to `16:9` or `1:1` depending on your target platform.

### 3. Modify Which Platforms You Post To

* **Where:** Blotato nodes:

  * **Create TikTok post**
  * **Create post1** (Instagram)
  * **Create Facebook post**

You can:

* Disable or delete branches for platforms you don’t use.
* Add new accounts or platforms supported by Blotato.
* Use different captions per platform (e.g. shorter for TikTok, more detailed for Facebook) by adding extra AI formatting steps.

### 4. Adjust Wait Times and Retry Logic

* **Where:** Wait and IF nodes:

  * **Wait**, **Wait1**, **Wait2**, **Give Blotat other 5s :)**, **Give Blotat more time**, **Give Blotat other 5s :)2**
* **What:**

  * Increase or decrease retry intervals.
  * Limit the number of loops (e.g. by adding a counter) if needed.
  * Customize error messages in the Telegram nodes.

### 5. Extend Logging & Analytics

* **Where:** **Save Prompt & Post-Text** (Google Sheets).
* **Ideas:**

  * Add more columns (timestamp, platform flags, target audience, campaign name).
  * Write back publish status and final URLs after success.
  * Use this sheet as a content inventory or analytics base.

---

In short, this workflow gives you a **full AI-powered video pipeline**:

1. Idea (text/voice) via **Telegram**
2. Drafting & approval of **video prompt + caption** via **OpenAI** agent
3. Video generation with **Gemini (veo)**
4. Staging in **Google Drive**
5. Auto-posting and status monitoring across **TikTok, Instagram & Facebook** via **Blotato**
6. All communication and confirmations returned directly to **Telegram**

And everything is fully editable so you can adapt it precisely to your personal brand and content strategy.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Google Drive, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
