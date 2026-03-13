# 🎬 Create talking avatar videos with Elevenlabs & Infinitalk and auto-post to TikTok

> ⚡ **1,277 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This automated workflow generates a **video featuring a talking AI avatar from a single image and automatically publishes it to TikTok** with [Postiz](https://postiz.com/?ref=n3witalia).

The process involves two main AI services chained together: **Elevenlabs v3** and **Infinitalk**.

---

### Key Benefits

* ✅ **Full Automation** – From text input to TikTok publication, the process is completely automated.
* ✅ **Time-Saving** – Eliminates manual video editing, voice-over recording, and social media posting.
* ✅ **Scalable** – Can generate multiple avatar videos daily with minimal effort.
* ✅ **Customizable** – Flexible inputs (image, voice, text, prompts) allow adaptation for different content types (weather forecasts, product promos, tutorials, etc.).
* ✅ **Engagement-Oriented** – Uses AI to optimize video titles for TikTok, increasing chances of visibility and audience interaction.
* ✅ **Consistent Branding** – Ensures uniform style and messaging across multiple video posts.

---


### **How It Works**

1.  **Text-to-Speech (TTS) Generation:** The workflow starts by sending a predefined text script and a selected voice (e.g., "Alice") to the Fal.ai service, which utilizes ElevenLabs' AI to generate a high-quality audio file. The workflow then polls the API until the audio generation is `COMPLETED` and retrieves the URL of the generated audio file.

2.  **Talking Avatar Video Generation:** The workflow takes a static image URL and the newly created audio URL and sends them to another Fal.ai service (Infinitalk). This AI model animates the avatar in the image to lip-sync and match the provided audio. A prompt guides the avatar's expression (e.g., "You are a girl giving a weather forecast and you must be expressive"). The workflow again polls for status until the video is `COMPLETED`.

3.  **Title Generation & Publishing:** Once the video is ready, its URL is fetched. Simultaneously, an OpenAI (GPT-4o-mini) node generates an optimized, engaging title (under 60 characters) for the TikTok post based on the original script and avatar prompt. The final video file is downloaded and uploaded to [Postiz](https://postiz.com/?ref=n3witalia) (a social media scheduling service), which finally posts it to a pre-configured TikTok account.

---
### **Set Up Steps**

Before executing this workflow, you must configure the following third-party service credentials and node parameters within n8n:

1.  **Fal.ai API Credentials:** Create an account on Fal.ai and obtain an API key. Create a new credential of type "HTTP Header Auth" in n8n named `"Fal.run API"`. The key should be placed in the `Value` field, and the `Header Name` must be set to `Authorization`. The value should be `Key &lt;YOUR_FAL_AI_API_KEY&gt;`.

2.  **OpenAI API Credentials:** You need an OpenAI API key. Create a credential in n8n of type "OpenAI API", name it (e.g., `"OpenAi account"`), and enter your API key.

3.  **Postiz API Credentials:** Create an account on [Postiz](https://postiz.com/), connect your TikTok account, and get your API key from the Postiz dashboard. In n8n, create an "HTTP Header Auth" credential named `"Postiz"`. Set the `Header Name` to `X-API-Key` and the `Value` to your Postiz API key. Also, create a "Postiz API" credential in n8n and enter the same API key.

4.  **Configure [Postiz](https://postiz.com/?ref=n3witalia) Node:** In the **"TikTok" (Postiz)** node, you must replace `"XXX"` in the `integrationId` field with the actual ID of your connected TikTok account from your Postiz dashboard.

5.  **(Optional) Customize Inputs:** You can modify the default values in the **"Set text input"** node (the script and voice) and the **"Set Video Params"** node (the `image_url` and the `prompt` for the avatar's expression) to create different videos without changing the workflow's structure.


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
