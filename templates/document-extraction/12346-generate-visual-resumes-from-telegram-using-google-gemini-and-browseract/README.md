# 🔬 Generate visual resumes from Telegram using Google Gemini and BrowserAct

> ⚡ **56 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Generate visual resumes from Telegram inputs using Google Gemini

This workflow transforms text-based resume data into visually stunning images by leveraging Google Gemini's reasoning and vision capabilities. It autonomously analyzes the candidate's profile, selects an appropriate design template based on their industry, and renders a high-quality resume image directly in Telegram.

## Target Audience
Job seekers, career coaches, resume writers, and recruitment agencies looking to automate design generation.

## How it works
1. **Classify Input**: The workflow starts with a **Telegram** trigger. A **Google Gemini** agent analyzes the incoming message to determine if it is a casual chat or a resume generation request.
2. **Fetch Context**: If it is a resume request, a **BrowserAct** node triggers a workflow (using the "AI Resume Replicant" template) to fetch necessary external context or data.
3. **Ingest Designs (Optional)**: If a reference image is provided, **CloudConvert** standardizes the file, and **Google Gemini Vision** reverse-engineers the layout and style, saving the "Visual DNA" to **Google Sheets**.
4. **Draft Blueprint**: The "Resume Writer" AI agent selects a stored design template that matches the candidate's industry (e.g., "Corporate" for Finance, "Creative" for Design) and maps the text content to the layout.
5. **Generate Prompt**: A "Visualizer" AI agent converts the structured blueprint into a highly detailed natural language prompt for image generation.
6. **Render & Deliver**: **Google Gemini** generates the final resume image, which is then sent back to the user via **Telegram**.

## How to set up
1. **Configure Credentials**: Connect your **Telegram**, **Google Gemini**, **Google Sheets**, **CloudConvert**, and **BrowserAct** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **AI Resume Replicant** template is saved in your BrowserAct account.
3. **Setup Google Sheet**: Create a new Google Sheet with the required header (listed below).
4. **Connect Sheet**: Open the **Google Sheets** nodes (Clear, Get, Append) and select your new spreadsheet.
5. **Configure Telegram**: Ensure your Telegram Bot is connected to the Trigger and Message nodes.

## Google Sheet Headers
To use this workflow, create a Google Sheet with the following header:
* Resume Details

## Requirements
* **BrowserAct** account (Template: **AI Resume Replicant**).
* **Google Gemini** account.
* **Telegram** account (Bot Token).
* **CloudConvert** account.
* **Google Sheets** account.

## How to customize the workflow
1. **Refine Design Logic**: Modify the system prompt in the "Resume Writer" agent to change how the AI matches industries to design styles (e.g., force specific colors for specific roles).
2. **Change Output Format**: Replace the **Telegram** response node with a **Google Drive** node to save the generated images as PDF or PNG files instead of sending them.
3. **Switch Image Model**: Update the "Generate an image" node to use a different image generation model if preferred (e.g., OpenAI DALL-E).

## Need Help?
* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [I Built a Resume Bot that CLONES Any Template! 🤖 (BrowserAct + n8n + Gemini Tutorial)](https://youtu.be/TnObYpgHXSs)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
