# 🎬 Generate social media campaign images with Mistral AI & Pollinations.ai

> ⚡ **485 views** · 🎬 [Content Creation & Video](../)

## Description

## 📖 Description  

### 🔹 How it works  
This workflow uses **AI (Mistral LLM + Pollinations.ai)** to generate **high-quality visual content for social media campaigns**. It automates the process from **brand/campaign input** to **final image upload**, ensuring consistency and relevance.

1. **Input Brand & Campaign Data**  
   - Retrieves brand profile and campaign goals from Google Drive.  
   - Cleans and merges the data into a structured JSON format.  

2. **Campaign Goal Generation**  
   - AI summarizes campaign goals, audience, success metrics, and keywords.  
   - Produces a clear **campaign goal summary** for content planning.  

3. **Image Prompt Generation**  
   - AI creates **5 detailed image prompts** reflecting the campaign story.  
   - Includes **1 caption** and **4–6 relevant hashtags**.  

4. **Image Creation**  
   - Pollinations.ai generates images based on the AI prompts.  
   - Each image is renamed systematically (photo1 → photo5).  

5. **Post-Processing & Upload**  
   - All images are merged into a single item.  
   - Workflow uploads the final output to Google Drive for campaign use.  

---

## ⚙️ Set up steps  

1. **Connect Credentials**  
   - Add Google Drive and Mistral API credentials in n8n.  

2. **Configure Google Drive Input Nodes**  
   - Set `fileId` for brand profile and campaign goals.  

3. **Customize AI Prompts**  
   - Sticky notes explain AI nodes for goal summary and image prompt generation.  
   - Optionally modify tone, keywords, or target audience for brand-specific campaigns.  

4. **Check Image Output Nodes**  
   - Ensure Pollinations.ai HTTP request nodes are active.  
   - Verify renaming code nodes for proper photo sequence.  

5. **Activate Workflow**  
   - Test workflow manually to ensure images are generated and uploaded correctly.  

---
## 🔹 Data Handling & Output  

- This workflow **pulls brand profile and campaign goal data** from Google Drive.  
- Data is processed into **structured JSON**, including:  
  - **Brand Profile**: name, mission, vision, values, services, tone, keywords, contact info.  
  - **Campaign Goal**: primary goal, focus, success metrics, target audience, core message.  
- Supports **population of multiple campaigns or brands** dynamically.  
- JSON output can be used downstream for **image prompt generation, reporting, or analytics**.  
- All processing is **automated**, with clear nodes for extraction, parsing, and merging.  

---

**[pollinations.ai](https://pollinations.ai/)** is an open-source  free text and image generation API available.  No signups or API keys required. which  prioritize your privacy with zero data storage and completely anonymous usage.

---


⚡ **Result:** A fully automated **AI-to-image workflow** that transforms campaign goals into ready-to-use social media visuals, saving time and maintaining brand consistency.

## 🔗 Nodes Used

HTTP Request, Google Drive, AI Agent, Structured Output Parser, Mistral Cloud Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
