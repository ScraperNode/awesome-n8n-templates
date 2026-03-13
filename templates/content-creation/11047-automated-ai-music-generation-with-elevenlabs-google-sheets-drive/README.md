# 🎬 Automated 🤖🎵 AI music generation with ElevenLabs, Google Sheets & Drive

> ⚡ **4,445 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

🤖🎵 This workflow automates the creation, storage, and cataloging of AI-generated music using the **[Eleven Music API](https://try.elevenlabs.io/ahkbf00hocnu)**, **Google Sheets**, and **Google Drive**.

---
### **Key Advantages**
✅ **Fully Automated Music Generation Pipeline**

Once started, the workflow automatically:

* Reads track parameters
* Generates music via API
* Uploads the file
* Updates your spreadsheet
  No manual steps needed after initialization.

✅ **Centralized Track Management**

A single Google Sheet acts as your **project control center**, letting you organize:

* Prompts
* Durations
* Generated URLs
  This avoids losing track of files and creates a ready-to-share catalog.

✅ **Seamless Integration with Google Services**

The workflow:

* Reads instructions from **Google Sheets**
* Saves the MP3 to **Google Drive**
* Updates the same Sheet with the final link
  This ensures everything stays synchronized and easy to access.

✅ **Scalable and Reliable Processing**

The loop-with-delay mechanism:

* Processes tracks sequentially
* Prevents API overload
* Ensures stable execution
  This is especially helpful when generating multiple long tracks.

✅ **Easy Customization**

Because the prompts and durations come from Google Sheets:

* You can edit prompts at any time
* You can add more tracks without modifying the workflow
* You can clone the Sheet for different projects

✅ **Ideal for Creators and Businesses**

This workflow is perfect for:

* Content creators generating background music
* Agencies designing custom soundtracks
* Businesses needing AI-generated audio assets
* Automated production pipelines

---

### How It Works

The process operates as follows:

- The workflow starts manually via the "Execute workflow" trigger
- It retrieves a list of music track requests from a Google Sheets spreadsheet containing track titles, text prompts, and duration specifications
- The system processes each track request individually through a batch loop
- For each track, it sends the text prompt and duration to ElevenLabs Music API to generate studio-quality music
- The generated MP3 file (in 44100 Hz, 128 kbps format) is automatically uploaded to a designated Google Drive folder
- Once uploaded, the workflow updates the original Google Sheets with the direct URL to the generated music file
- A 1-minute wait period between each track generation prevents API rate limiting
- The process continues until all track requests in the spreadsheet have been processed

---

### Set Up Steps

**Prerequisites:**
- ElevenLabs paid account with Music API access enabled
- Google Sheets spreadsheet with specific columns: TITLE, PROMPT, DURATION (ms), URL
- Google Drive folder for storing generated music files

**Configuration Steps:**

1. **ElevenLabs API Setup:**
   - Enable Music Generation access in your  [ElevenLabs account](https://try.elevenlabs.io/ahkbf00hocnu)
   - Generate an API key from the ElevenLabs developer dashboard
   - Configure HTTP Header authentication in n8n with name "xi-api-key" and your API value

2. **Google Sheets Preparation:**
   - Create or clone the music tracking spreadsheet with required columns
   - Fill in track titles, detailed text prompts, and durations in milliseconds (10,000-300,000 ms)
   - Configure Google Sheets OAuth credentials in n8n
   - Update the document ID in the Google Sheets nodes

3. **Google Drive Configuration:**
   - Create a dedicated folder for music uploads
   - Set up Google Drive OAuth credentials in n8n
   - Update the folder ID in the upload node

4. **Workflow Activation:**
   - Ensure all API credentials are properly configured
   - Test with a single track entry in the spreadsheet
   - Verify music generation, upload, and spreadsheet update work correctly
   - Execute the workflow to process all pending track requests

The workflow automatically names files with timestamp prefixes (song_yyyyMMdd) and handles the complete lifecycle from prompt to downloadable music file.

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
