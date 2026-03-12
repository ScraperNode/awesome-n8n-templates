# 🔬 Process Image Auto segmentation & Detection with VLM Run, Drive-Telegram Sharing

> ⚡ **36 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow automates **image processing using VLM Run**, extracting signed URLs, downloading results, and distributing them via multiple channels (Google Drive & Telegram).

## ✅ Key Features

* Upload image files through a **Form Trigger**.
* Process images through two VLM Run agents simultaneously:

  * **Segmentation Agent** → extracts objects.
  * **Detection Agent** → generates bounding boxes.
* Webhooks capture completed results asynchronously.
* **Arifact Node** download the images.
* Downloaded images are automatically:

  * Uploaded to **Google Drive**
  * Sent to a **Telegram chat**

## ⚙️ Workflow Flow

1. **User Uploads File** → Form Trigger node
2. **VLM Run Agents** → Segmentation & Detection agents
3. **Webhook Nodes** → Receive processed results
4. **Artifact Node** → Download the artifacts
5. **Distribution Nodes** → Upload to Google Drive & Telegram

## 📌 Notes

* Ensure **Google Drive OAuth2** credentials have upload permissions.
* Telegram Bot token and chat ID must be configured correctly.
* Workflow allows multi-channel sharing of images automatically.

---

## ⚠️ Community Node Disclaimer

&gt; **This workflow uses VLM Run node**

## 🔗 Nodes Used

Webhook, Telegram, Google Drive, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
