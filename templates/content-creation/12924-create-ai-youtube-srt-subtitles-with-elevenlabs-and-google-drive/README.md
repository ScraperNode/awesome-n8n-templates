# 🎬 Create AI YouTube SRT subtitles 📢 with ElevenLabs 🎧 and Google Drive

> ⚡ **140 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

This workflow is a simple yet brilliant automation designed to **generate time-coded SRT** subtitles starting directly from a video URL using [ElevenLabs](https://try.elevenlabs.io/ahkbf00hocnu).

With just a single video link, the workflow automatically extracts the audio, transcribes it using AI speech recognition, and converts the transcription into a properly formatted SRT subtitle file with accurate timestamps.

This workflow automates the creation of **SRT subtitle files for YouTube** videos using **AI speech recognition**, eliminating the need for manual captioning and saving creators hours of work.

It’s a fast, reliable, and fully automated solution, perfect for YouTube creators, video editors, and content producers who want to improve accessibility, engagement, and SEO with minimal effort.

With just one input (a video link), the workflow:

1. Downloads the video
2. Automatically transcribes the audio using AI speech-to-text
3. Intelligently splits the transcription into readable subtitle segments
4. Generates a perfectly formatted **SRT file with accurate timestamps**
5. Uploads the final subtitle file to Google Drive, ready to use

It’s a lightweight, no-friction workflow that turns a raw video into professional subtitles in a fully automated way.

---

### Key Advantages

#### 1. ✅ Extremely Simple, Yet Powerful

This workflow proves that automation doesn’t need to be complex to be effective.
A minimal number of nodes delivers a complete end-to-end subtitle generation process.

#### 2. ✅ Automatic Time-Based SRT Generation

Subtitles are not just plain text:
they are **properly time-aligned**, making them immediately compatible with YouTube, video editors, and media players.

#### 3. ✅ Smart Subtitle Splitting

The workflow intelligently splits text based on punctuation and length, producing subtitles that are:

* Easy to read
* Well-paced
* Aligned with natural speech flow

#### 4. ✅ Perfect for Video Creators

This workflow is ideal for:

* **YouTube creators**
* Content marketers
* Educators
* Podcasters
* Social video producers

It dramatically reduces the time needed to add subtitles, improving:

* Accessibility
* Engagement
* SEO and watch time

#### 5. ✅ Fully Automatable & Scalable

Once set up, it can be reused endlessly:

* One video or hundreds
* Manual trigger or automated pipelines
* Easy to extend with translations, publishing, or notifications

---


This workflow automates the creation of SRT subtitle files from YouTube videos using AI speech recognition. 

The process begins when the workflow is manually triggered, requiring a YouTube video URL as input. The system first fetches the video content via HTTP request, then sends the audio to ElevenLabs for transcription. 

The AI returns timestamped text segments which are intelligently split into readable subtitle chunks based on punctuation and length constraints. 

These segments are formatted into standard SRT (SubRip) format with precise timing, converted to a binary file, and finally uploaded to a specified Google Drive folder as a ready-to-use subtitle file.

---

### Set up Steps

1. **Configure Video Source**: In the "Set Video Url" node, replace the placeholder value with a valid YouTube video URL or set up a method to dynamically provide URLs
2. **API Credentials Setup**:
   - Configure [ElevenLabs API](https://try.elevenlabs.io/ahkbf00hocnu) credentials in the "Transcribe audio or video" node with your API key
   - Set up Google Drive OAuth2 credentials in the "Upload file" node with appropriate folder permissions
3. **Customize Output**: Adjust the SRT generation parameters in the "From Elevenlabs to Srt" node if different subtitle formatting is needed
4. **Destination Folder**: Verify the Google Drive folder ID in the upload node points to your desired destination
5. **Execution**: Trigger the workflow manually and provide a video URL when prompted to generate and upload subtitles

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
