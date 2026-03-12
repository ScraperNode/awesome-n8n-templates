# 🎬 Generate and publish Instagram carousels with Gemini and Google Slides

> ⚡ **144 views** · 🎬 [Content Creation & Video](../)

## Description

# Generate and publish Instagram carousels automatically
**Turn a single topic into a published Instagram Carousel in minutes.**

Creating educational carousel posts usually takes hours: writing the script, designing the slides in Figma/Canva, exporting images, and scheduling. This workflow automates the entire pipeline using **Gemini AI**, **Google Slides**, and the **Meta Graph API**.

It generates the content, designs the visuals by manipulating a template, and publishes the carousel directly to your Instagram Business account.

### 🚀 What this workflow does
1. **Script Generation:** Runs daily (or on demand) to prompt **Google Gemini** to write a 6-slide educational script (Hook, Mistake, Why It Matters, Value, Tip, CTA).
2. **Design Automation:**
   - Copies a master **Google Slides** template.
   - Uses a "Find & Replace" operation to insert the AI-generated text into the correct placeholders.
   - Generates thumbnail images for each slide.
3. **Image Hosting:** Uploads the slide images to **ImgBB** to get public URLs (required by Meta's API).
4. **Publishing:**
   - Creates a carousel container on Instagram using the **Meta Graph API**.
   - Checks the container status until it is "FINISHED".
   - Publishes the media to your feed.
5. **Logging:** Records the post details, captions, and status in **Google Sheets**.

### 💡 Key Features
- **True Design Automation:** Doesn't just overlay text on images; it uses real Google Slides templates, allowing for complex layouts and branding.
- **Smart Polling:** Includes a "Wait & Check" loop to ensure the media container is fully processed by Facebook before attempting to publish (prevents API errors).
- **Structured Content:** The AI is prompted to follow a proven "Viral Educational" framework (Hook -&gt; Value -&gt; Action).
- **Asset Management:** Automatically organizes generated slide images and links in Google Sheets for your archives.

### 🛠️ Prerequisites
- **Google Cloud:** Enabled APIs for Drive, Slides, Sheets, and Gemini.
- **Meta Developer App:** An Instagram Business account connected to a Facebook Page, with a System User token (`instagram_basic`, `instagram_content_publish`, `pages_read_engagement`).
- **ImgBB Account:** A free API key for temporary image hosting.
- **Templates:** A Google Sheet and Google Slide template (links provided in the workflow sticky notes).

### 📝 Setup Instructions
1. **Resources:** Copy the provided Google Sheet and Slide templates to your Drive.
2. **Credentials:** Authenticate Google, Meta, and ImgBB in n8n.
3. **Configuration:**
   - Update the `Google Drive` node with your Slide Template ID.
   - Update the `Google Sheets` nodes with your Sheet ID.
   - Update the `HTTP Request` nodes with your **ImgBB API Key** and **Instagram Account ID**.
4. **Run:** Activate the schedule or click "Execute" to generate your first post!

---

**Need help setting this up or want a custom automation for your agency?**
I specialize in building agentic workflows for consultants and agencies.

📧 **Contact me:** bakdaulet.mph@gmail.com

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Google Slides, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
