# 🎬 Create long Audiobooks 🔊📚 with custom voices using Qwen3-TTS Voice Design

> ⚡ **183 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

This workflow automates the **creation of audiobooks from structured text data** using AI-powered text-to-speech and audio processing services.

[Click here to listen](https://iframe.mediadelivery.net/play/580928/5e137292-5d19-4745-9d79-aeb3cc5f5a23) the result of my example.

---

### Key Advantages

#### 1. ✅ Fully Automated Audiobook Production

The entire pipeline—from text retrieval to final audio upload—is automated. This removes manual steps, reduces human error, and enables repeatable audiobook generation at scale.

#### 2. ✅ Advanced Voice Customization

By using **voice design prompts** (voice description + style instruction), the workflow produces highly expressive and context-aware narration, ideal for audiobooks, storytelling, and branded audio content.

#### 3. ✅ Scalable and API-Safe Architecture

The batch processing and looping logic respects external API limits. This makes the workflow robust even for large audiobooks with dozens or hundreds of segments.

#### 4. ✅ Centralized Content Management

Google Sheets acts as a lightweight CMS:

* Easy to edit scripts and voice parameters
* Clear tracking of processed items
* Temporary URLs and merge flags ensure full visibility into the workflow state

#### 5. ✅ Asynchronous and Fault-Tolerant

The use of wait nodes and status checks allows the workflow to handle long-running audio operations without blocking or failing prematurely.

#### 6. ✅ Seamless Cloud Storage Integration

Final audiobooks are automatically stored in Google Drive, making them immediately accessible for distribution, review, or further processing.

#### 7. ✅ Modular and Extensible Design

Each step (TTS generation, batching, merging, storage) is modular. This makes it easy to:

* Swap TTS providers
* Change storage destinations
* Add post-processing steps (e.g. metadata, chapter markers)


---

### How it Works

This workflow automates the creation of audiobooks using AI-generated voice synthesis with custom voice design. The process begins by retrieving script data from a Google Sheets document containing text, speaker information, voice descriptions, and style instructions. 

The workflow then processes each row in batches, sending the text to the Qwen3-TTS model on Replicate with specified voice parameters to generate individual audio segments. 

Each generated audio URL is stored back in the spreadsheet. 

Concurrently, once multiple audio segments are ready, they are merged into a single audio file using an external FFmpeg API service. 

The system polls for merge completion, retrieves the final merged audio file, and uploads it to Google Drive as a complete audiobook with a timestamped filename.

---

### Set up Steps

1. **Data Source Configuration**: Set up the Google Sheets node to connect to your spreadsheet containing the audiobook script with required columns: Text, Speaker, Voice Description, Style Instruction, Temp URL, and To Merge

2. **API Credentials Setup**:
   - Configure [Replicate API](https://replicate.com) credentials for Qwen3-TTS voice synthesis
   - Set up Fal.run API credentials for FFmpeg audio merging operations
   - Configure Google Drive OAuth2 credentials for uploading the final audiobook

3. **Voice Design Parameters**: Ensure your spreadsheet contains appropriate voice descriptions and style instructions compatible with the Qwen3-TTS model's requirements

4. **Destination Settings**: Verify the Google Drive folder ID in the upload node points to your desired storage location for the final audiobook

5. **Execution**: Trigger the workflow manually to begin processing your script rows and generating the complete audiobook with custom voice design

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
