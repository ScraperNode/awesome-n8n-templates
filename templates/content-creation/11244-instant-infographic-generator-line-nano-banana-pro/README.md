# 🎬 Instant infographic generator (LINE + Nano Banana Pro)

> ⚡ **1,084 views** · 🎬 [Content Creation & Video](../)

## Description

## About This Template
This workflow turns complex data or topics sent via LINE into beautiful, easy-to-understand Infographics.

It combines **Gemini** (to analyze data and structure the visual layout) and **Nano Banana Pro** (accessed via Kie.ai API) to generate high-quality, data-rich graphics (Charts, timelines, processes).

## How It Works
1.  **Input:** User sends a topic or data points via LINE (e.g., "Japan's Energy Mix: 20% Solar, 10% Wind...").
2.  **Data Visualization Logic:** Gemini acts as an Information Designer, deciding the best chart type (Pie, Bar, Flow) and layout for the data.
3.  **Render:** Nano Banana generates a professional **3:4 Vertical Infographic**.
4.  **Smart Polling:** The workflow uses a loop to check the API status every 5 seconds, ensuring it waits exactly as long as needed.
5.  **Delivery:** Uploads to S3 and sends the visual report back to LINE.

## Who It’s For
* Social Media Managers needing quick visual content.
* Educators and presenters summarizing data.
* Consultants creating quick visual reports on the go.

## Requirements
* **n8n** (Cloud or Self-hosted).
* **Kie.ai API Key** (Nano Banana Pro).
* **Google Gemini API Key**.
* **AWS S3 Bucket** (Public access).
* **LINE Official Account**.

## Setup Steps
1.  **Credentials:** Configure Header Auth for Kie.ai and your other service credentials.
2.  **Webhook:** Add the production URL to LINE Developers console.

## 🔗 Nodes Used

HTTP Request, Webhook, AWS S3, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
