# 🔬 Audio conversation analysis & visualization with DeepGram and GPT-4o

> ⚡ **950 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

# **Transcript Evalu8r – AI-Powered Transcribing and Transcript Analysis Workflow**

![Transcript Evalu8r Logo](https://fillin8n.realsimple.dev/Transcript-Evalu8r-Logo-nobg.png)

## **Overview**

**Transcript Evalu8r** is an **AI-powered transcript analysis workflow** that automates the processing, visualization, and evaluation of transcribed conversations. This **n8n workflow template** is designed to help users quickly **analyze sentiment, extract topics and intents, generate key insights, and enhance transcript navigation**. 

It is ideal for **customer service teams, legal professionals, researchers, content creators, and businesses** seeking **actionable intelligence** from recorded conversations.

---

## **Key Features**

### 🔹 **Automated Transcript Processing**
- **Audio-to-Text Conversion** – Upload an audio file and generate transcripts.
- **File Upload Management** – Track file uploads with real-time progress indicators.
- **Transcript Selection** – Browse and select previously analyzed transcripts from a dropdown.
- **Download Transcripts** – Export transcripts in various formats (**Google Docs and JSON**).
- **Error Handling** – Detects and alerts users about upload or processing failures.

### 🔹 **Advanced UI Components**
- **Interactive Transcript Viewer** – Displays full transcripts with:
  - **Timestamps and speaker identification**.
  - **Clickable words** for easy navigation.
  - **Auto-scrolling** to highlight the active portion of the transcript.
- **Key Points & Action Items Summary** – AI extracts:
  - **Critical insights from conversations**.
  - **Actionable follow-ups** detected in the discussion.
- **Speaker Labeling** – Dynamically assigns **real speaker names** instead of generic placeholders (e.g., "Speaker 1").
- **Collapsible Sections** – Enables users to **expand/collapse** transcript details, key insights, and analysis sections.

### 🔹 **AI-Powered Conversation Analysis**
- **Sentiment Analysis & Visualization**
  - **Dynamic sentiment graph** tracks emotional shifts.
  - **Color-coded speaker sentiment tracking**:
    - 🔵 **Positive**
    - ⚫ **Neutral**
    - 🔴 **Negative**
  - **Time-based sentiment tracking** – Shows sentiment fluctuations across the conversation.

- **Topic & Intent Recognition**
  - **Automated Topic Extraction** – Identifies key themes discussed.
  - **Hierarchical Topic Organization** – Groups related topics for structured insights.
  - **Intent Classification** – Recognizes whether statements reflect:
    - **Questioning**
    - **Commands**
    - **Decision-making**
    - **Information seeking**
  - **Confidence Scoring** – Displays confidence levels for topic and intent detection.

- **Speaker Contribution Metrics**
  - **Talk-time percentages** per speaker.
  - **Interruption detection** – Highlights moments where speakers cut each other off.
  - **Word Frequency Analysis** – Identifies commonly used terms and phrases.

### 🔹 **Seamless Workflow Automation**
- **API Integration** – Connects with transcription engines like **OpenAI Whisper, AWS Transcribe, and Deepgram**.
- **Webhook Support** – Automates workflows when new transcripts are available.
- **Batch Processing** – Handles **multiple transcript analyses** simultaneously.
- **Export & Reporting** – Sends insights to Google Sheets, Notion, Airtable, or Slack.

---

## **How It Works**

1. **Upload an audio file** or select a pre-existing transcript.
2. **Transcript Processing**:
   - Speech-to-text conversion (if required).
   - AI-driven **sentiment, topic, and intent analysis**.
3. **Visualizations & Insights**:
   - Review **sentiment charts**, **speaker contributions**, and **key topics**.
   - Extract **action items** and **critical takeaways**.
4. **Download results** or trigger **automated follow-ups**.

---

## **Use Cases**

✅ **Customer Support Review** – Detect customer concerns and analyze sentiment trends.  
✅ **Podcast & Video Content Analysis** – Summarize episodes and extract key themes.  
✅ **Sales Call Insights** – Identify common objections and customer pain points.  
✅ **Market Research** – Extract trends from focus groups and discussions.  
✅ **Legal Compliance Monitoring** – Track policy violations in recorded conversations.  

---

## **Setup Instructions**

1. **Import the Transcript Evalu8r workflow** into your **n8n instance**.
2. **Connect DeepGram Speech to Text API**.
3. **Configure workflow parameters** (sentiment thresholds, topic extraction settings).
4. **Run the workflow** to analyze and visualize transcript data.
5. **Review insights and export** as needed.


---

## **Why Use Transcript Evalu8r?**

🚀 **Automate tedious transcript analysis**  
💡 **Unlock hidden insights** in conversations  
📊 **Visualize conversations** with interactive sentiment tracking  
⚡ **Boost efficiency** with AI-powered automation  
🔗 **Seamlessly integrate** with your existing workflows  

---

## **Requirements**
- **n8n instance** (cloud or self-hosted)
- **API key for DeegGram API

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, Gmail, Google Docs, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
