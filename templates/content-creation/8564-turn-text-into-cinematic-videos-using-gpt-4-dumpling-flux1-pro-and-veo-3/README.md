# 🎬 Turn text into cinematic videos using GPT-4, Dumpling FLUX.1 Pro, and Veo 3

> ⚡ **579 views** · 🎬 [Content Creation & Video](../)

## Description

## 🧾 What this workflow does

This automation transforms a short text idea into a cinematic video by chaining together three powerful AI services: GPT-4.1 for scene creation, Dumpling AI’s FLUX.1 Pro model for visual generation, and KIE API (Veo 3) for cinematic video creation. The system fully automates the journey from raw concept to video output, returning the final video URL.

---

## 👤 Who is this for

- Content creators who want to test visual ideas quickly  
- Agencies creating moodboards, ad scenes, or pitch visuals  
- Solo marketers or founders without video editing skills  
- AI automation builders creating content tools  

---

## ⚙️ How to set up

### ✅ Requirements

- **OpenAI GPT-4.1 API key**
- **Dumpling AI (FLUX.1 Pro model)** API token  
- **KIE API** account with access to the **Veo 3 endpoint**  
- Optional: Tool to store or share the final video link (e.g., Google Sheets, Slack)

---

### 🔧 Setup steps

1. **Start with a text idea**  
   Example: “A lion running through misty mountains at sunrise.”

2. **GPT-4.1 Node:**
   - Expands the idea into two parts:
     - **Cinematic Prompt:** Describes the atmosphere, emotion, and camera movement.
     - **Image Prompt:** A vivid single-frame visual to generate the base image.

3. **Dumpling AI Node (FLUX.1 Pro):**
   - Takes the image prompt and returns a cinematic-style image.
   - You can customize dimensions, steps, seed, and guidance level.

4. **KIE API Node (Veo 3):**
   - Sends both the cinematic prompt and image to the Veo 3 model.
   - The model returns a **video URL** (e.g., 3–6 seconds cinematic footage).

5. **Final Output:**
   - The video URL is returned by the HTTP node.
   - You can connect this to Airtable, Slack, Telegram, or Google Sheets to log the result or share with your team.

---

## 🧠 How it works

- You input a text idea  
- GPT-4.1 turns it into both a detailed cinematic prompt and a base image prompt  
- Dumpling AI generates the image  
- KIE API’s Veo 3 turns it into a cinematic video  
- The final video URL is returned for download or embedding  

---

## 💡 Customization Ideas

- Add a **Telegram bot** to trigger this workflow with an idea via message  
- Route video links to a **Notion database** or **content calendar**  
- Add a **loop with rating logic** to regenerate low-rated videos  
- Use **Google Drive** to auto-save videos in brand folders  
- Automate **weekly video ideation** for social media using a prompt list  

---

This workflow helps you turn raw imagination into cinematic motion using AI. From social content to storyboarding, you can generate compelling visuals in minutes — no design or video background needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
