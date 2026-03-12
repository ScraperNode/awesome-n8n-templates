# ⚒️ Analyze images with OpenAI Vision while preserving binary data for reuse

> ⚡ **1,378 views** · ⚒️ [Engineering](../)

## Description

Use this template to **upload an image**, run a first-pass **OpenAI Vision analysis**, then **re-attach the original file (binary/base64)** to the next step using a **Merge** node. The pattern ensures your downstream AI Agent (or any node) can access **both** the original file (`data`) **and** the first analysis result (`content`) at the same time.

---

### ✅ What this template does
- **Collects an image file** via **Form Trigger** (binary field labeled `data`)
- **Analyzes the image** with **OpenAI Vision** (GPT-4o) using **base64** input
- **Merges** the original upload and the analysis result (**combine by position**) so the next node has **both**
- **Re-analyzes/uses** the image alongside the first analysis in an **AI Agent** step

---

### 🧩 How it works (Node-by-node)
1. **Form Trigger**  
   - Presents a simple upload form and emits a binary/base64 field named **`data`**.
2. **Analyze image (OpenAI Vision)**  
   - Reads the same **`data`** field as **base64** and runs image analysis with **GPT-4o**.  
   - The node outputs a text **`content`** (first-pass analysis).
3. **Merge (combine by position)**  
   - Combines the two branches so the next node receives **both** the **original upload** (`data`) and the **analysis** (`content`) on the **same item**.
4. **AI Agent**  
   - Receives `data` + `content` together.  
   - Prompt includes the original image (**`=data`**) and the first analysis (**`{{$json.content}}`**) to compare or refine results.
5. **OpenAI Chat Model**  
   - Provides the language model for the Agent (wired as **ai_languageModel**).

---

### 🛠️ Setup Instructions (from the JSON)
&gt; Keep it simple: mirror these settings and you’re good to go.

**1) Form Trigger (n8n-nodes-base.formTrigger)**  
- **Path:** `d6f874ec-6cb3-46c7-8507-bd647c2484f0` *(you can change this)*  
- **Form Title:** `Image Document Upload`  
- **Form Description:** `Upload a image document for AI analysis`  
- **Form Fields:**  
  - **Label:** `data`  
  - **Type:** `file`  
- **Output:** emits a binary/base64 field named **`data`**.

**2) Analyze image (@n8n/n8n-nodes-langchain.openAi)**  
- **Resource:** `image`  
- **Operation:** `analyze`  
- **Model:** `gpt-4o`  
- **Text:** `=data` *(use the uploaded file field)*  
- **Input Type:** `base64`  
- **Credentials:** OpenAI (use your stored **OpenAI API** credential)

**3) Merge (n8n-nodes-base.merge)**  
- **Mode:** `combine`  
- **Combine By:** `combineByPosition`  
  - Connect **Form Trigger → Merge (input 2)**  
  - Connect **Analyze image → Merge (input 1)**  
  - This ensures the original file (`data`) and the analysis (`content`) line up on the same item.

**4) AI Agent (@n8n/n8n-nodes-langchain.agent)**  
- **Prompt Type:** `define`  
- **Text:**  
- **System Message:** `analyze the image again and see if you get the same result.`  
- **Receives:** merged item containing `data` + `content`.

**5) OpenAI Chat Model (@n8n/n8n-nodes-langchain.lmChatOpenAi)**  
- **Model:** `gpt-4.1-mini`  
- **Wiring:** connect as **ai_languageModel** to the **AI Agent**  
- **Credentials:** same OpenAI credential as above

&gt; **Security Note:** Store API keys in **Credentials** (do **not** hardcode keys in nodes).

---

### 🧠 Why “Combine by Position” fixes the binary issue
- Some downstream nodes **lose access** to the original binary once a branch processes it.  
- By **merging the original branch** (with `data`) and the **analysis branch** (with `content`) **by position**, you restore a **single item** with **both fields**—so the next step can **use the image again** while referencing earlier analysis.

---

### 🧪 Test Tips
- Upload a JPG/PNG and **execute** the workflow from the Form Trigger preview.  
- Confirm **Merge** output contains **both** `data` (binary/base64) **and** `content` (text).  
- In the **AI Agent**, log or return both fields to verify availability.

---

### 🔧 Customize
- Swap GPT-4o for another **Vision-capable** model if needed.  
- Extend the AI Agent to **extract structured fields** (e.g., objects detected, text, brand cues).  
- Add a **Router** after Merge to branch into storage (S3, GDrive) or notifications (Slack, Email).

---

### 📝 Requirements
- n8n (cloud or self-hosted) with web UI access  
- **OpenAI** credential configured (Vision support)

---

### 🩹 Troubleshooting
- **Binary missing downstream?** Ensure **Merge** receives **both** branches and is set to `combineByPosition`.  
- **Wrong field name?** The **Form Trigger** upload field must be labeled **`data`** to match node expressions.  
- **Model errors?** Verify your **OpenAI** credential and that the chosen model supports **image analysis**.

---

### 💬 Sticky Note (included in the workflow)
&gt; “Use Binary Field after next step” — This workflow demonstrates how to preserve and reuse an uploaded file (binary/base64) after a downstream step by using a **Merge** node (`combineByPosition`). A user uploads an image via **Form Trigger** → the image is analyzed with **OpenAI Vision** → results are merged back with the original upload so the next **AI Agent** step can access **both** the original file (`data`) and the first analysis (`content`) at the same time.

---

### 📬 Contact  
Need help customizing this (e.g., filtering by campaign, sending reports by email, or formatting your PDF)?  

- 📧 **rbreen@ynteractive.com**  
- 🔗 **https://www.linkedin.com/in/robert-breen-29429625/**  
- 🌐 **https://ynteractive.com**

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
