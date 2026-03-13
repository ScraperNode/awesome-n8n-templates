# 🎬 Extract and clean YouTube video transcripts with RapidAPI

> ⚡ **8,543 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Here is your refined template description with detailed step-by-step instructions, markdown formatting, and customization guidance.  

---

# YouTube Transcript Extraction Workflow  

This **n8n workflow** extracts and processes transcripts from YouTube videos using the **YouTube Transcript API** on RapidAPI. It allows users to retrieve subtitles from YouTube videos, clean them up, and return structured transcript data for further processing.  

## Table of Contents  
- [Problem Statement & Target Audience](#problem-statement--target-audience)  
- [Pre-conditions & API Requirements](#pre-conditions--api-requirements)  
- [Step-by-Step Workflow Explanation](#step-by-step-workflow-explanation)  
- [Customization Guide](#customization-guide)  
- [How to Set Up This Workflow](#how-to-set-up-this-workflow)  

---

## Problem Statement & Target Audience  

### **Who is this for?**  
This workflow is ideal for content creators, researchers, and developers who need to:  
- Extract **subtitles** from YouTube videos automatically.  
- **Format and clean** transcript data for readability.  
- Use transcripts for **summarization, content repurposing, or language analysis**.  

---

## Pre-conditions & API Requirements  

### **API Required**  
- **YouTube Transcript API** ([RapidAPI](https://rapidapi.com/solid-api-solid-api-default/api/youtube-transcript3/playground))  

### **n8n Setup Prerequisites**  
- A running **n8n instance** ([Installation Guide](https://docs.n8n.io/))  
- A **RapidAPI account** to access the **YouTube Transcript API**  
- An **API key** from RapidAPI to authenticate requests  

---

## Step-by-Step Workflow Explanation  

### **1. Input YouTube Video URL (Trigger)**  
- This step provides a simple input form where users enter a YouTube video URL.  

### **2. HTTP Request Node (Retrieve Transcript Data)**  
- Makes a **POST request** to the YouTube Transcript API via RapidAPI.  
- Passes the video URL received from the input form.  
- Uses an **environment variable** to store the API key securely.  

### **3. Function Node (Process Transcript)**  
- **Receives** the API response containing the **raw transcript**.  
- **Processes and cleans** the transcript:  
  - Removes unwanted characters.  
  - Formats text for readability.  
- **Handles errors** when no transcript is available.  
- **Outputs** both the **raw and cleaned transcript** for further use.  

### **4. Set Field Node (Response Formatting)**  
- **Structures** the processed transcript data into a user-friendly format.  
- **Returns** the final transcript data to the client.  

---

## Customization Guide  

### **1. Modify Transcript Cleaning Rules**  
- Update the **Function Node** to apply custom text processing, such as:  
  - Removing timestamps.  
  - Changing the output format (e.g., JSON, plain text).  

### **2. Store Transcripts in a Database**  
- Add a **Database Node** (e.g., MySQL, PostgreSQL, or Firebase) to save transcripts.  

### **3. Generate Summaries from Transcripts**  
- Integrate **AI services** (e.g., OpenAI, Google Gemini) to summarize transcripts.  

### **4. Convert Transcripts into Speech**  
- Use **ElevenLabs API** to generate an AI-powered voiceover from transcripts.  

---

## How to Set Up This Workflow  

### **Step 1: Import the Workflow into n8n**  
- Download or copy the workflow JSON file.  
- Import it into your **n8n instance**.  

### **Step 2: Set Up the API Key**  
- Sign up for the **[YouTube Transcript API](https://rapidapi.com/solid-api-solid-api-default/api/youtube-transcript3/playground)**.  
- Subscribe to the api.  
- Copy and paste your api key where the "your_api_key" is.

### **Step 3: Activate the Workflow**  
- Start the workflow in **n8n**.  
- Enter a **YouTube video URL** in the input form.  
- The workflow will return a **cleaned transcript**.  

---

This workflow ensures seamless YouTube transcript extraction and processing with minimal manual effort. 🚀

## 🔗 Nodes Used

Function, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
