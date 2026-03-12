# 🎬 Generate & upload images with Image-to-Image GPT, Google Sheets & Drive

> ⚡ **1,697 views** · 🎬 [Content Creation & Video](../)

## Description

### 🖼️ Image-to-Image AI Generator from Google Sheets with Google Drive Upload
---

## ✅ Use Case

Automatically generate AI images from prompts listed in a Google Sheet, upload the images to Google Drive, and log the result back into the sheet.

Uses the [`image-to-image-gpt`](https://rapidapi.com/PrineshPatel/api/image-to-image-gpt) API  for fast, customizable generation.

---

## 💡 Problem It Solves

Manual image generation workflows are inefficient and error-prone. Creative and content teams often have to:
- Manually paste prompts into image generation tools
- Save images locally
- Upload to Google Drive
- Paste the link back into tracking spreadsheets

This automation removes all that friction—turning one spreadsheet into a complete image creation pipeline.

---

## 🌟 Benefits

- 🔁 Fully automated image generation
- 📤 Direct uploads to Google Drive
- 🧾 Image links and timestamps logged in Google Sheets
- ⚠️ Built-in error logging for API failures
- 🧩 Modular and easily extensible
- 📊 Keeps a historical log of successes and errors

---

## 🧩 Workflow Overview

| Node | Description |
|------|-------------|
| **1. Manual Trigger** | Starts the workflow when executed manually |
| **2. Google Sheets2** | Reads all rows from the input Google Sheet |
| **3. Loop Over Items** | Processes one row (prompt) at a time |
| **4. If2** | Filters only rows where `Prompt` is not empty and `drive path` is empty |
| **5. HTTP Request1** | Calls the [`image-to-image-gpt`](https://rapidapi.com/PrineshPatel/api/image-to-image-gpt) API with the prompt |
| **6. If1 (Error Handling)** | If an error exists in the API response, route to logging |
| **7. Google Sheets4 (Error Log)** | Appends error details to a log sheet for review |
| **8. Code1** | Decodes the base64 image returned by the API |
| **9. Google Drive1** | Uploads the image to a selected Google Drive folder |
| **10. Google Sheets1 (Write Back)** | Updates the original row with the image drive path and timestamp |
| **11. Wait** | Delays the next prompt to prevent hitting API rate limits |

---

## 🛠 Tech Stack

- **n8n** (no-code automation)
- **Google Sheets** (data input/output)
- **Google Drive** (image storage)
- [`image-to-image-gpt`](https://rapidapi.com/PrineshPatel/api/image-to-image-gpt) API via **RapidAPI**
- **JavaScript (in Code node)** for base64 processing

---

## 📝 Sheet Format

Your Google Sheet should include the following columns:

| Column         | Purpose                          |
|----------------|----------------------------------|
| `Prompt`       | The AI prompt to send to the API |
| `Image url`    | (Optional) Initial image URL     |
| `drive path`   | Updated with Drive link by flow  |
| `Generated Date` | Auto-filled by the workflow     |
| `Base64`       | Stores raw or error data         |

---

## 🚀 How to Use

1. Import this workflow into your **n8n instance**
2. Set up **Google Sheets** and **Google Drive** service credentials
3. Add your **RapidAPI key** in the HTTP Request node headers
4. Use the [`image-to-image-gpt`](https://rapidapi.com/PrineshPatel/api/image-to-image-gpt) endpoint in the HTTP request
5. Configure the Google Sheet and Drive folder in the respective nodes
6. Execute manually or add a Cron node for scheduling

---

## 📌 Example Applications

- 🛍 **eCommerce**: Auto-generate product mockups
- 🧵 **Fashion/Design**: Visualize styles or fabrics from prompts
- ✍️ **Blogging/Content**: Auto-generate header images from titles
- 📣 **Marketing**: Generate ad banners from text

---

## 🧪 Tips

- You can add a **Cron node** if you want this to run on a schedule
- Use a separate tab/sheet for logging failed prompts
- Extend the flow by adding:
  - Email notifications
  - Slack alerts
  - File name templating

---
Create your **free n8n account** and set up the workflow in just a few minutes using the link below:

👉 [Start Automating with n8n](https://n8n.partnerlinks.io/7fuarh1e6dz5)

Save time, stay consistent, and grow your LinkedIn presence effortlessly!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
