# 🎬 Automate UGC video creation with Gemini and Google Veo 3 & upload to Instagram via Postiz

> ⚡ **4,345 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.

## Description

🎥🤖 This workflow automates the **creation and publishing of UGC (User-Generated Content) videos** using **Google Gemini** and **Google Veo 3**, then uploads them directly to **Instagram** with [Postiz](https://postiz.com/?ref=n3witalia).

---

###  Advantages

* ✅ **Full Automation** – Eliminates manual video editing, caption writing, and uploading.
* ✅ **High-Quality UGC Videos** – Leverages **Google Veo 3** for professional ad-like video generation.
* ✅ **AI-Powered Creativity** – Uses **Google Gemini** for both creative direction and social media copywriting.
* ✅ **Time-Saving** – From image to published Instagram post in a single automated flow.
* ✅ **Consistency** – Ensures branding and messaging remain aligned across campaigns.
* ✅ **Scalability** – Can easily generate multiple UGC ads for different products.
* ✅ **Centralized Management** – Stores videos in Google Drive and distributes them via Postiz.


---


### **How It Works**

1.  **Image Analysis & Creative Briefing:** The workflow starts with a predefined product image. This image is analyzed by Google Gemini, which acts as a "Creative Director" to generate a detailed, cinematic prompt describing an 8-second commercial scene based on the image's content.

2.  **Parallel AI Task Execution:** The creative director's prompt is then sent to two different AI agents simultaneously:
    *   **Video Generation:** One agent uses the prompt with **Google Veo 3** to generate the actual video file, visualizing the described scene.
    *   **Copywriting:** The other agent, acting as a "Social Media Manager," uses the same prompt to generate compelling caption copy tailored for an Instagram audience.

3.  **Asset Distribution & Publishing:** The generated video is uploaded to two destinations: Google Drive for storage and the Postiz API for social media management. The AI-generated caption is prepared. Finally, all data (video information from Postiz and the caption) is merged and sent to the Postiz node, which schedules and publishes the video as a post to the connected Instagram account.

---

### **Set Up Steps**

To use this workflow, you need to configure the following credentials and node settings in n8n:

1.  **Image Source:** In the **"Set image"** node, replace the default `image_url` value with the URL of your own product image.

2.  **Google Gemini Credentials:** The workflow uses three Gemini nodes. Ensure your Google Gemini API credentials (named "Google Gemini(PaLM) (Eure)" in this example) are correctly set up and have access to the specified models (`gemini-2.5-pro` and `veo-3.0-generate-preview`).

3.  **Google Drive Credentials:** Configure the **"Upload video"** node with valid Google Drive OAuth credentials. Update the `folderId` parameter if you wish to save the generated videos to a different folder in your Drive.

4.  **Postiz Credentials:** The **"Upload Video to Postiz"** and **"Instagram"** nodes require valid credentials for the [Postiz API](https://postiz.com/?ref=n3witalia). You must have an active Postiz account and have connected your Instagram business account to it within the Postiz platform.

5.  **Postiz Integration ID:** In the **"Instagram"** node, the `integrationId` field is specific to a connected social account within a Postiz account. You must replace this value with your own Instagram integration ID from Postiz.

6.  **(Optional) Video Parameters:** You can adjust the video generation aspect ratio (e.g., `9:16` for Stories/Reels) in the `options` of the **"Generate UGC Video"** node.

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
