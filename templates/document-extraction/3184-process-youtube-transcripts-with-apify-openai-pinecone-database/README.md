# 🔬 🚀 Process YouTube transcripts with Apify, OpenAI & Pinecone database

> ⚡ **1,086 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

# 🚀 YouTube Transcript Indexing Backend for Pinecone 🎥💾

This tutorial explains how to build the **backend** workflow in n8n that indexes YouTube video transcripts into a Pinecone vector database. **Note:** This workflow handles the processing and indexing of transcripts only—the retrieval agent (which searches these embeddings) is implemented separately.

---

## 📋 Workflow Overview

This backend workflow performs the following tasks:

1. **Fetch Video Records from Airtable** 📥  
   Retrieves video URLs and related metadata.

2. **Scrape YouTube Transcripts Using Apify** 🎬  
   Triggers an Apify actor to scrape transcripts with timestamps from each video.

3. **Update Airtable with Transcript Data** 🔄  
   Stores the fetched transcript JSON back in Airtable linked via video ID.

4. **Process & Chunk Transcripts** ✂️  
   Parses the transcript JSON, converts "mm:ss" timestamps to seconds, and groups entries into meaningful chunks. Each chunk is enriched with metadata—such as video title, description, start/end timestamps, and a direct URL linking to that video moment.

5. **Generate Embeddings & Index in Pinecone** 💾  
   Uses OpenAI to create vector embeddings for each transcript chunk and indexes them in Pinecone. This enables efficient semantic searches later by a separate retrieval agent.

---

## 🔧 Step-by-Step Guide

### Step 1: Retrieve Video Records from Airtable 📥

- **Airtable Search Node:**  
  - **Setup:** Configure the node to fetch video records (with essential fields like `url` and metadata) from your Airtable base.
  
- **Loop Over Items:**  
  - Use a **SplitInBatches** node to process each video record individually.

---

### Step 2: Scrape YouTube Transcripts Using Apify 🎬

- **Trigger Apify Actor:**  
  - **HTTP Request Node ("Apify NinjaPost"):**  
    - **Method:** POST  
    - **Endpoint:** `https://api.apify.com/v2/acts/topaz_sharingan~youtube-transcript-scraper-1/runs?token=&lt;YOUR_TOKEN&gt;`  
    - **Payload Example:**
      ```json
      {
        "includeTimestamps": "Yes",
        "startUrls": ["{{ $json.url }}"]
      }
      ```
  - **Purpose:** Initiates transcript scraping for each video URL.

- **Wait for Processing:**  
  - **Wait Node:**  
    - **Duration:** Approximately 1 minute to allow Apify to generate the transcript.

- **Retrieve Transcript Data:**  
  - **HTTP Request Node ("Get JSON TS"):**  
    - **Method:** GET  
    - **Endpoint:** `https://api.apify.com/v2/acts/topaz_sharingan~youtube-transcript-scraper-1/runs/last/dataset/items?token=&lt;YOUR_TOKEN&gt;`

---

### Step 3: Update Airtable with Transcript Data 🔄

- **Format Transcript Data:**  
  - **Code Node ("Code"):**  
    - **Task:** Convert the fetched transcript JSON into a formatted string.
      ```javascript
      const jsonObject = items[0].json;
      const jsonString = JSON.stringify(jsonObject, null, 2);
      return { json: { stringifiedJson: jsonString } };
      ```
      
- **Extract the Video ID:**  
  - **Set Node ("Edit Fields"):**  
    - **Expression:**  
      ```javascript
      {{$json.url.split('v=')[1].split('&')[0]}}
      ```
      
- **Update Airtable Record:**  
  - **Airtable Update Node ("Airtable1"):**  
    - **Updates:**  
      - **ts:** Stores the transcript string.  
      - **videoid:** Uses the extracted video ID to match the record.

---

### Step 4: Process Transcripts into Semantic Chunks ✂️

- **Retrieve Updated Records:**  
  - **Airtable Search Node ("Airtable2"):**  
    - **Purpose:** Fetch records that now contain transcript data.

- **Parse and Chunk Transcripts:**  
  - **Code Node ("Code4"):**  
    - **Functionality:**  
      - Parses transcript JSON.
      - Converts "mm:ss" timestamps to seconds.
      - Groups transcript entries into chunks based on a 3-second gap.
      - Creates an object for each chunk that includes:
        - **Text:** The transcript segment.
        - **Video Metadata:** Video ID, title, description, published date, thumbnail.
        - **Chunk Details:** Start and end timestamps.
        - **Direct URL:** A link to the exact moment in the video (e.g., `https://youtube.com/watch?v=VIDEOID&t=XXs`).

- **Enrich & Split Text:**  
  - **Default Data Loader Node:**  
    - Attaches additional metadata (e.g., video title, description) to each chunk.
  - **Recursive Character Text Splitter Node:**  
    - **Settings:** Typically set to 500-character chunks with a 50-character overlap.
    - **Purpose:** Ensures long transcript texts are broken into manageable segments for embedding.

---

### Step 5: Generate Embeddings & Index in Pinecone 💾

- **Generate Embeddings:**  
  - **Embeddings OpenAI Node:**  
    - **Task:** Convert each transcript chunk into a vector embedding.
    - **Tip:** Adjust the batch size (e.g., 512) based on your data volume.

- **Index in Pinecone:**  
  - **Pinecone Vector Store Node:**  
    - **Configuration:**  
      - **Index:** Specify your Pinecone index (e.g., `"videos"`).  
      - **Namespace:** Use a dedicated namespace (e.g., `"transcripts"`).
    - **Outcome:** Each enriched transcript chunk is stored in Pinecone, ready for semantic retrieval by a separate retrieval agent.

---

## 🎉 Final Thoughts

This backend workflow is dedicated to processing and indexing YouTube video transcripts so that a separate retrieval agent can perform efficient semantic searches. With this setup:

- **Transcripts Are Indexed:**  
  Chunks of transcripts are enriched with metadata and stored as vector embeddings.

- **Instant Topic Retrieval:**  
  A retrieval agent (implemented separately) can later query Pinecone to find the exact moment in a video where a topic is discussed, thanks to the direct URL and metadata stored with each chunk.

- **Scalable & Modular:**  
  The separation between indexing and retrieval allows for easy updates and scalability.

Happy automating and enjoy building powerful search capabilities with your YouTube content! 🎉

## 🔗 Nodes Used

Airtable, HTTP Request, Embeddings OpenAI, Recursive Character Text Splitter, Pinecone Vector Store, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
