# 🎬 Automated AI voice cloning 🤖🎤 from YouTube videos to ElevenLabs & Google Sheets

> ⚡ **4,595 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow automates the process of **creating cloned voices** in **ElevenLabs** using audio extracted from **YouTube** videos. It processes a list of video URLs from Google Sheets, converts them to audio, submits them to [ElevenLabs for voice cloning](https://try.elevenlabs.io/ahkbf00hocnu)*, and records the generated voice IDs back to the spreadsheet.

*ONLY FOR STARTER, CREATOR, PRO PLAN



**Important Considerations for Best Results:**

For optimal voice cloning quality with ElevenLabs, carefully select your source YouTube videos:
- **Duration**: Choose videos that are sufficiently long (preferably 1-5 minutes of clear speech) to provide enough audio data for accurate voice modeling.
- **Audio Quality**: Select videos with high-quality audio, minimal background noise, and clear vocal recording.
- **Single Speaker**: Use videos featuring only **one primary speaker**. Multiple voices in the same audio will confuse the cloning algorithm and produce poor results.
- **Consistent Voice**: Ensure the speaker maintains a consistent tone and speaking style throughout the clip for the most faithful reproduction.

---


### **Key Features**

#### **1. ✅ Fully Automated Voice Creation Workflow**

* No manual downloading, converting, or uploading is required.
* Just paste the YouTube link and voice name into the sheet—everything else happens automatically.

#### **2. ✅ Seamless Audio Extraction**

Using RapidAPI ensures:

* High success rate in extracting audio
* Support for virtually any YouTube video
* Consistent output format required by ElevenLabs

#### **3. ✅  Hands-Off ElevenLabs Voice Creation**

The workflow handles all the steps required by the ElevenLabs API, including:

* Uploading binary audio
* Naming voices
* Capturing and storing the resulting voice ID

This is much faster than the manual method inside the ElevenLabs dashboard.

#### **4. ✅ Centralized, Reusable Setup**

Once the API keys are added:

* The same workflow can be reused indefinitely
* Users don’t need technical skills
* Updating only requires editing the sheet

---

### **How it works:**

1. **Data Retrieval**: The workflow starts by fetching data from a Google Sheets spreadsheet that contains YouTube video URLs in the "YOUTUBE VIDEO" column and desired voice names in the "VOICE NAME" column. It specifically targets rows where the "ELEVENLABS VOICE ID" field is empty, ensuring only unprocessed videos are handled.

2. **Video Processing Pipeline**:
   - **Video ID Extraction**: Each YouTube URL is parsed to extract the unique video identifier using a regular expression.
   - **Audio Conversion**: The video ID is sent to the RapidAPI "YouTube MP3 2025" service, which converts the YouTube video to an audio file (M4A format).
   - **Audio Download**: The resulting audio file is downloaded locally for processing.

3. **Voice Creation**: The downloaded audio file is submitted to ElevenLabs API via a POST request to the `/v1/voices/add` endpoint. This creates a new voice clone based on the audio sample. The voice name is currently hardcoded as "Teresa Mannino" in the workflow but should be dynamically configured to use the value from the "VOICE NAME" spreadsheet column.

4. **Data Update**: The workflow captures the `voice_id` returned by ElevenLabs and writes it back to the corresponding row in the Google Sheets spreadsheet in the "ELEVENLABS VOICE ID" column, completing the processing cycle for that video.

---

### **Set up steps:**

1. **Prepare the Data Sheet**: Duplicate the provided Google Sheets template. Fill in the "YOUTUBE VIDEO" column with YouTube URLs and the "VOICE NAME" column with your desired names for the cloned voices. Ensure your videos meet the quality criteria mentioned above.

2. **Configure APIs**:
   - **RapidAPI**: Sign up for a free trial API key from the "YouTube MP3 2025" service on RapidAPI. Enter this key into the `x-rapidapi-key` header field in the "From video to audio" node.
   - **ElevenLabs**: Generate an API key from your ElevenLabs account. Configure the "Create voice" node's HTTP Header Authentication with the name `xi-api-key` and your ElevenLabs API key as the value.

3. **Optional Customization**: Modify the "Create voice" node to use the dynamic voice name from your spreadsheet instead of the hardcoded "Teresa Mannino" value for more flexible operation.

4. **Execute**: Run the workflow. It will automatically process each qualifying row, create voices in ElevenLabs, and populate the spreadsheet with the new Voice IDs. Monitor the workflow execution to ensure successful processing of each video.

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
