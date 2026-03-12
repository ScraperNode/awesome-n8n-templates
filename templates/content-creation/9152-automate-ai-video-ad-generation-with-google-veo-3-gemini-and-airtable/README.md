# 🎬 Automate AI video ad generation with Google Veo 3, Gemini, and Airtable

> ⚡ **5,424 views** · 🎬 [Content Creation & Video](../)

## Description

## This n8n template from [Intuz](https://www.intuz.com/) provides a complete and automated solution for transforming a static product image and a creative idea into a dynamic, AI-generated video ad. 

Using Google's state-of-the-art Veo 3 model, this workflow manages the entire creative process from concept to a final, downloadable video file.

## Who's this workflow for?
- E-commerce Brands & Marketers
- Advertising Agencies
- Social Media Content Creators
- Product Managers

## How it works
**1. Submit a Creative Brief:** The workflow starts when a user submits a creative idea via a simple web form (e.g., "A Pepsi can exploding into a vibrant disco party").

**2. Upload a Product Image:** The user is then prompted to upload a corresponding image (e.g., a high-quality photo of the Pepsi can).

**3. Log the Project in Airtable:** The idea and the uploaded image are saved to an Airtable base, which acts as the central tracking system for all video generation projects.

**4. AI Creative Analysis:** Google Gemini analyzes both the user's text prompt and the uploaded image. It acts as an "AI Creative Director," generating a detailed video brief that reinterprets the static image according to the user's creative vision.

**5. Generate Video with Veo 3:** The detailed creative brief is sent to Google's Veo 3 AI video generation model. The workflow initiates a long-running task to create the video.

**6. Retrieve the Final Video:** After a brief waiting period, the workflow polls the Veo 3 API to retrieve the finished video, converts it into a binary file, and makes it available for download directly from the n8n execution log.

## Key Requirements to Use This Template
**n8n Instance & Required Nodes:**
- An active n8n account (Cloud or self-hosted).
This workflow uses the official n8n LangChain integration (@n8n/n8n-nodes-langchain). 
- If you are using a self-hosted version of n8n, please ensure this package is installed.

**Google Cloud Account:**
- A Google Cloud Project with the Vertex AI API enabled.
- You must have access to both the Gemini and Veo 3 models within your project.
- You will need a Gemini API Key and a Google OAuth2 Credential configured for the Vertex AI scope.

**Airtable Account:**
- An Airtable base with a table set up to track the video projects. It should have columns for Image Prompt, Image (Attachment), Video (Attachment/URL), and Status.

## Setup Instructions
**1. Airtable Configuration (Crucial):**
- In the Create a record, Get a record, and Update record nodes, connect your Airtable credentials and update the Base ID and Table ID to match your setup.
- In the Uploading Image in Airtable (HTTP Request) node, you must edit the URL and the "Authorization" header to include your Base ID, Table ID, and Personal Access Token.

**2. Google AI Configuration (Gemini & Veo):**
- In the Analyze image (Google Gemini) node, select your Gemini API credentials.
- In both the Generate Video Veo 3 and Get the the Video (HTTP Request) nodes: 

- You must replace [Project ID] and [Location] in the URLs with your own Google Cloud Project ID and region (e.g., us-central1).
- Select your Google OAuth2 credentials for authentication.

**3. Customize Video Parameters (Optional):**
- In the Parse Request (Code) node, you can modify the JavaScript code to change video generation settings like aspectRatio, durationSeconds, and resolution.

**4. Execute the Workflow:**
- Activate the workflow. Open the Form URL from the Prompt your Idea node to start the process.

## [Sample Videos](https://drive.google.com/drive/folders/1brGvAKJB4PY_CClqqRVh31Kr8fY6cTLs?usp=sharing)

## Connect with us
- Website: https://www.intuz.com/n8n-workflow-automation-templates
- Email: getstarted@intuz.com
- LinkedIn: https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz

## For Custom Workflow Automation
Click here- [Get Started](https://www.intuz.com/get-started)

## 🔗 Nodes Used

Airtable, HTTP Request, n8n Form Trigger, Convert to File, n8n Form, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
