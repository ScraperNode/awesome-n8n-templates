# 🎬 Create viral social media videos with FalAI Flux/Kling and GPT-4 automation

> ⚡ **3,010 views** · 🎬 [Content Creation & Video](../)

## Description

## AI-Powered Viral Video Factory 🚀

This workflow automates the entire process of creating short, cinematic, fact-based videos ready for social media. It takes a single concept, generates a script and visuals, creates video clips, adds a voiceover, and assembles a final video, which is then uploaded directly to your Google Drive. It's perfect for **content creators and marketing agencies** looking to scale video production with minimal manual effort.

---

## How It Works 🎬

1.  **Generate a Viral Idea** 💡: The workflow begins with the **`Create New Idea1`** (OpenAI) node, which generates a viral-ready video concept, including a punchy title, hashtags, and a brief description based on a core theme (e.g., space, black holes). This idea is then logged in a Google Sheet.

2.  **Create a Cinematic Script & Voiceover** 📜:
    * An **OpenAI node** (**`Generating scenes1`**) creates a detailed 12-scene script, outlining the visuals for a 60-second video.
    * The script text for all scenes is combined and prepared for voiceover generation by another **OpenAI node** (**`Generate Voiceover`**).

3.  **Generate Scene-by-Scene Visuals** ✨: The workflow loops through each of the 12 scenes to create an animated clip:
    * **Image Generation**: An **HTTP Request node** sends the scene's prompt to the **`fal-ai/flux`** model to create a photorealistic still image.
    * **Animation Prompting**: The **`Video Prompts1`** (OpenAI Vision) node analyzes the generated image and creates a new, specific prompt to animate it cinematically.
    * **Image-to-Video**: Another **HTTP Request node** uses the **`fal-ai/kling-video`** model to turn the still image into a 5-second animated video clip based on the new animation prompt.

4.  **Assemble the Final Video** 🎞️:
    * **Stitch Clips**: Once all 12 clips are generated, the **`Merge Clips`** node uses the **`fal-ai/ffmpeg-api`** to concatenate them into a single, seamless 60-second video.
    * **Add Audio**: The **`Combine Voice and Video`** node then layers the AI-generated voiceover onto the stitched video.

5.  **Deliver to Google Drive** 📂: Finally, the completed video is converted from a URL to a file and automatically uploaded to your specified Google Drive folder for easy access and publishing.

---

## Key Technologies Used

* **n8n**: For orchestrating the entire automated workflow.
* **OpenAI (GPT-4.1 & GPT-4o)**: For idea generation, scriptwriting, voiceover, and vision analysis.
* **Fal.ai**: For high-performance, API-based image generation (`Flux`), video animation (`Kling`), and video processing (`FFMPEG API`).
* **Google Drive & Sheets**: For logging ideas and storing the final video output.

---

## Setup Instructions

1.  **Add Credentials**:
    * In n8n, add your **OpenAI API key**.
    * Connect your **Google account** for Google Sheets and Google Drive access.
    * You will need a **Fal.ai API Key**.

2.  **Configure Fal.ai API Key**:
    * **Crucially**, you must replace the placeholder API key in all **HTTP Request** nodes that call the `fal.run` URL.
    * Find the `Authorization` header in each of these nodes and replace the existing key with your own `Key YOUR_FAL_AI_KEY_HERE`.
    * Nodes to update: `Create Images1`, `Get Images1`, `Create Video1`, `Get Video1`, `Merge Clips`, `Get Final video`, `Combine Voice and Video`.

3.  **Configure OpenAI Nodes**:
    * Select each OpenAI node (e.g., **`Create New Idea1`**, **`Generating scenes1`**) and choose your OpenAI credential.
    * You can customize the main prompt in the **`Create New Idea1`** node to change the theme of the videos you want to generate.

4.  **Configure Google Sheets & Drive**:
    * In the **`Organise idea, caption etc1`** node, select your Google Sheets credential and specify the Spreadsheet and Sheet ID you want to use for logging ideas.
    * In the **`Upload file to drive`** node, select your Google Drive credential and choose the destination folder for your final videos.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
