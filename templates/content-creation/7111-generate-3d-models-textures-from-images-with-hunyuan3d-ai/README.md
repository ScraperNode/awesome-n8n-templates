# 🎬 Generate 3D models & textures from images with Hunyuan3D AI

> ⚡ **1,917 views** · 🎬 [Content Creation & Video](../)

## Description

# Generate 3D Models & Textures from Images with Hunyuan3D AI

This workflow connects **n8n → Replicate API** to generate 3D-like outputs using the **ndreca/hunyuan3d-2.1-test** model. It handles everything: sending the request, waiting for processing, checking status, and returning results.

---

## ⚡ **Section 1: Trigger & Setup**

### ⚙️ **Nodes**

1️⃣ **On Clicking “Execute”**

* **What it does:** Starts the workflow manually in n8n.
* **Why it’s useful:** Great for testing or one-off runs before automation.

2️⃣ **Set API Key**

* **What it does:** Stores your **Replicate API Key**.
* **Why it’s useful:** Keeps authentication secure and reusable across HTTP nodes.

---

💡 **Beginner Benefit**

* No coding needed — just paste your API key once.
* Easy to test: press **Execute**, and you’re live.

---

## 🤖 **Section 2: Send Job to Replicate**

### ⚙️ **Nodes**

3️⃣ **Create Prediction (HTTP Request)**

* **What it does:** Sends a **POST request** to Replicate’s API with:

  * Model version (`70d0d816...ae75f`)
  * Input image URL
  * Parameters like `steps`, `seed`, `generate_texture`, `remove_background`
* **Why it’s useful:** This kicks off the AI generation job on Replicate’s servers.

4️⃣ **Extract Prediction ID (Code)**

* **What it does:** Grabs the **prediction ID** from the API response and builds a status-check URL.
* **Why it’s useful:** Every job has a unique ID — this lets us track progress later.

---

💡 **Beginner Benefit**

* You don’t need to worry about JSON parsing — the workflow extracts the ID automatically.
* Everything is reusable if you run multiple generations.

---

## ⏳ **Section 3: Poll Until Complete**

### ⚙️ **Nodes**

5️⃣ **Wait (2s)**

* **What it does:** Pauses for 2 seconds before checking the job status.
* **Why it’s useful:** Prevents spamming the API with too many requests.

6️⃣ **Check Prediction Status (HTTP Request)**

* **What it does:** GET request to see if the job is finished.

7️⃣ **Check If Complete (IF Node)**

* **What it does:**

  * If `status = succeeded` → process results.
  * If not → loops back to **Wait** and checks again.

---

💡 **Beginner Benefit**

* Handles waiting logic for you — no manual refreshing needed.
* Keeps looping until the AI job is really done.

---

## 📦 **Section 4: Process the Result**

### ⚙️ **Nodes**

8️⃣ **Process Result (Code)**

* **What it does:** Extracts:

  * `status`
  * `output` (final generated file/URL)
  * `metrics` (performance stats)
  * Timestamps (`created_at`, `completed_at`)
  * Model info
* **Why it’s useful:** Packages the response neatly for storage, email, or sending elsewhere.

---

💡 **Beginner Benefit**

* Get clean, structured data ready for saving or sending.
* Can be extended easily: push output to **Google Drive, Notion, or Slack**.

---

## 📊 **Workflow Overview**

| Section               | What happens                      | Key Nodes                     | Benefit                           |
| --------------------- | --------------------------------- | ----------------------------- | --------------------------------- |
| ⚡ Trigger & Setup     | Start workflow + set API key      | Manual Trigger, Set           | Easy one-click start              |
| 🤖 Send Job           | Send input & get prediction ID    | Create Prediction, Extract ID | Launches AI generation            |
| ⏳ Poll Until Complete | Waits + checks status until ready | Wait, Check Status, IF        | Automated loop, no manual refresh |
| 📦 Process Result     | Collects output & metrics         | Process Result                | Clean result for next steps       |

---

## 🎯 **Overall Benefits**

✅ Fully automates Replicate model runs
✅ Handles waiting, retries, and completion checks
✅ Clean final output with status + metrics
✅ Beginner-friendly — just add API key + input image
✅ Extensible: connect results to Google Sheets, Gmail, Slack, or databases

---

✨ In short: This is a **no-code AI image-to-3D content generator** powered by **Replicate** and automated by **n8n**.

---

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
