# 🎬 Generate natural voices with Google Text-to-Speech, Drive & Airtable

> ⚡ **4,482 views** · 🎬 [Content Creation & Video](../)

## Description

## Automate High-Quality Voice with Google Text-to-Speech & n8n

Effortlessly convert any text into stunningly realistic, high-quality audio with this powerful n8n workflow. Leveraging **Google's advanced Text-to-Speech (TTS) AI**, this template provides a complete, end-to-end solution for generating, storing, and tracking voiceovers automatically.

Whether you're a content creator, marketer, or developer, this workflow saves you countless hours by transforming your text-based scripts into ready-to-use audio files. The entire process is initiated from a simple form, making it accessible for users of all technical levels.

***

### Features & Benefits

* 🗣️ **Studio-Quality Voices:** Leverage Google's cutting-edge AI to produce natural and expressive speech in a wide variety of voices and languages.
* 🚀 **Fully Automated Pipeline:** From text submission to final file storage, every step is handled automatically. Simply input your script and let the workflow do the rest.
* ☁️ **Seamless Cloud Integration:** Automatically uploads generated audio files to **Google Drive** for easy access and sharing.
* 📊 **Organized Asset Management:** Logs every generated audio file in an **Airtable** base, complete with the original script, a direct link to the file, and its duration.
* ⚙️ **Simple & Customizable:** The workflow is ready to use out-of-the-box but can be easily customized. Change the trigger, add notification steps, or integrate it with other services in your stack.

***

### Perfect For a Variety of Use Cases

* 🎬 **Content Creators:** Generate consistent voiceovers for YouTube videos, podcasts, and social media content without needing a microphone.
* 📈 **Marketers:** Create professional-sounding audio for advertisements, product demos, and corporate presentations quickly and efficiently.
* 🎓 **Educators:** Develop accessible e-learning materials, audiobooks, and language lessons with clear, high-quality narration.
* 💻 **Developers:** Integrate dynamic voice generation into applications, build interactive voice response (IVR) systems, or provide audio feedback for user actions.

***

### How The Workflow Operates

1.  **Initiate with a Form:** The process begins when you submit a script, a desired voice, and language through a simple **n8n Form Trigger**.
2.  **Synthesize Speech:** The workflow sends the text to **Google's Text-to-Speech API**, which generates the audio and returns it as a base64 encoded file.
3.  **Process and Upload:** The data is converted into a binary audio file and uploaded directly to a specified folder in your **Google Drive**.
4.  **Enrich Metadata:** The workflow then retrieves the audio file's duration using the `fal.ai` ffmpeg API, adding valuable metadata.
5.  **Log Everything:** Finally, it creates a new record in your **Airtable** base, storing the asset name, description (your script), content type, file URLs from Google Drive, and the audio duration for perfect organization.

***

### What You'll Need

To use this workflow, you will need active accounts for the following services:

* **Google Cloud oAuth2 Client Credentials:** With the Text-to-Speech API enabled.
* **Google Drive:** For audio file storage.
* **Airtable:** For logging and asset management.
* **fal.ai:** For the `ffmpeg` API used to get audio duration.

## 🔗 Nodes Used

Airtable, HTTP Request, Google Drive, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
