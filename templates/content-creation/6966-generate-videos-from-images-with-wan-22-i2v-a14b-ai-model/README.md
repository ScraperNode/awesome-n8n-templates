# 🎬 Generate videos from images with Wan 2.2 I2V A14B AI model

> ⚡ **3,733 views** · 🎬 [Content Creation & Video](../)

## Description

# Generate Videos from Images with Wan 2.2 I2V A14B AI Model

### 🌍 Overview

This workflow connects **n8n** with **Replicate’s Wan-Video model** to generate **video content from an image + prompt**.
It handles:

* 🔑 API authentication
* 📤 Sending a generation request
* ⏳ Polling until completion
* 📥 Returning a downloadable video link

---

## 🟢 Section 1: Start & Authentication

🔗 **Nodes:**
1️⃣ **On clicking 'execute' (Manual Trigger)**
▶️ Starts the workflow manually when you click *Execute Workflow*.

2️⃣ **Set API Key**
🔑 Stores your **Replicate API Key** securely inside n8n.

* Value: `YOUR_REPLICATE_API_KEY`

💡 **Beginner Benefit**:
✅ No need to hardcode API keys in every request
✅ Easy to swap keys for different accounts

---

## 🔵 Section 2: Send Video Generation Request

🔗 **Nodes:**
3️⃣ **Create Prediction (HTTP Request)**
📤 Sends a request to Replicate API → `/v1/predictions`

* Model: `wan-video/wan-2.2-i2v-a14b`
* Input Parameters:

  * 📝 `prompt` → your text description
  * 🖼️ `image` → input video/image URL
  * 🎲 `seed` → reproducibility
  * 🎞️ `num_frames` → 81 frames
  * ⏩ `sample_shift` → 5
  * ⚙️ `sample_steps` → 30
  * 🎬 `frames_per_second` → 16

4️⃣ **Extract Prediction ID (Code)**
🆔 Pulls out the **prediction ID + status** from Replicate’s response.
This ID is needed for polling until the video finishes generating.

💡 **Beginner Benefit**:
✅ Automates the API call to generate video
✅ Extracts ID → avoids manual copy-paste

---

## 🟣 Section 3: Polling & Status Check

🔗 **Nodes:**
5️⃣ **Wait (2 sec)**
⏳ Adds a short delay before checking progress.

* Prevents API spam

6️⃣ **Check Prediction Status (HTTP Request)**
🔄 Calls Replicate API → `/v1/predictions/{id}`

* Checks whether the video is still processing or finished

7️⃣ **Check If Complete (IF Node)**
❓ Compares status → `succeeded` or not

* ✅ If complete → goes to **Process Result**
* ❌ If not → loops back to **Wait** and tries again

💡 **Beginner Benefit**:
✅ Automatic re-checking → you don’t need to refresh manually
✅ Works until result is ready

---

## 🟡 Section 4: Process Final Result

🔗 **Nodes:**
8️⃣ **Process Result (Code)**
📥 Once complete, extracts:

* ✅ Status
* 🎞️ Output video URL
* 📊 Generation metrics
* ⏱️ Timestamps (created\_at, completed\_at)
* 🧩 Model used

Final output = direct **video URL** you can download/share 🎥

---

## 📊 Final Overview

| Section   | What Happens                   | Why It’s Useful                   |
| --------- | ------------------------------ | --------------------------------- |
| 🟢 Auth   | Manual Trigger + API Key       | Secure, easy start                |
| 🔵 Send   | Create Prediction + Extract ID | Kicks off video generation        |
| 🟣 Poll   | Wait + Check Status + IF       | Auto-checks progress until done   |
| 🟡 Result | Process Result                 | Gives final video link + metadata |

---

## 🚀 Why This Workflow Rocks

* 🎥 **Video from Image + Prompt** → AI-powered video generation in minutes
* 🔄 **Fully automated** → from request to final video, no manual checks
* 🔑 **Secure** → API keys handled safely
* ⚙️ **Customizable** → tweak frames, FPS, prompt, seed

---

✨ With this workflow, you’ve got a **personal AI video generator** inside n8n — all you need to do is provide a prompt + input image/video, and you’ll get a fresh AI video link back.

---

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
