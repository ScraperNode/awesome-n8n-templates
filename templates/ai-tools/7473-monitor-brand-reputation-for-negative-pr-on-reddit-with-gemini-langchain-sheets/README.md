# 🎯 Monitor brand reputation for negative PR on Reddit with Gemini + LangChain + Sheets

> ⚡ **95 views** · 🎯 [AI Summarization & Classification](../)

## Description

# [🎥 Watch the Full Execution on YouTube](https://youtu.be/_VAOeIzC6M0?si=etrUjAGyzwXTiZ6D)

# **Workflow Description (in-depth):**

This workflow automates the entire process of **monitoring online reputation** by scanning Reddit posts for negative sentiment about your company, filtering only the relevant criticism, and logging it directly into Google Sheets for easy tracking.

### 🔑 **Key Features:**

* **Automated Triggering:**
  Runs on a schedule so you never miss new discussions about your brand.

* **Smart Data Fetching:**
  Uses Reddit API to pull the latest posts matching your chosen keywords (e.g., “Notion”).

* **Post Processing:**
  Breaks down bulk Reddit responses into individual posts for analysis.

* **AI-Powered Filtering:**
  A custom-built AI agent reviews the content and extracts only **genuine negative PR** (complaints, bad experiences, harmful mentions). Neutral or positive posts are ignored.

* **Structured Parsing:**
  AI responses are enforced into a clean JSON schema (ID, Title, URL, NegativeContent).... ensuring compatibility with downstream nodes.

* **Noise Reduction:**
  A code node ensures only posts with meaningful content are passed forward.

* **Centralized Logging:**
  Captures critical information (post title, negative excerpt, URL, ID) into Google Sheets.... giving teams a live dashboard of issues to address.

* **Customizable & Scalable:**
  Swap out “Notion” for your own brand, or expand to other platforms.... the flow adapts without extra overhead.

### 🚀 **Why This Matters:**

In 2025, a single Reddit thread can shape brand reputation overnight. Manually monitoring is inefficient, and traditional social listening tools generate too much noise. This workflow gives you a **lean, automated, AI-powered system** to stay ahead of potential PR risks.

### 🛠️ **Tech Stack:**

* **n8n** for automation
* **Reddit API** for data fetching
* **LangChain AI Agent + Google Vertex Model** for sentiment & context analysis
* **Google Sheets** for reporting & tracking

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, Structured Output Parser, Google Vertex Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
