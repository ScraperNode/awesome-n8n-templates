# 🎬 Generate multiple AI images with DALL·E 2 and upload to Google Drive

> ⚡ **1,072 views** · 🎬 [Content Creation & Video](../)

## Description

## n8n Workflow: OpenAI DALL·E 2 Image Generation & Google Drive Upload

### Description
This n8n workflow automates the process of generating multiple AI-created images from a single prompt using **OpenAI's DALL·E 2**, then uploads the results directly to a **Google Drive folder**. It includes a loop to produce several image variations for the same prompt, making it ideal for creative projects, marketing materials, or content experimentation.

---

## Step-by-Step Setup Instructions

### 1. Prepare Your API Keys
- **OpenAI API Key**  
  1. Sign up or log in at https://platform.openai.com/  
  2. Go to **API Keys** and create a new one.  
  3. Copy and store this securely — you'll need it in n8n.

- **Google Drive API**  
  1. Go to https://console.cloud.google.com/  
  2. Create a project and enable **Google Drive API**.  
  3. Create OAuth 2.0 credentials and set the redirect URI to your n8n OAuth redirect (found in your n8n Google Drive node setup).  
  4. Connect your Google account when adding credentials in n8n.

---

### 2. Workflow Nodes Overview
1. **Manual Trigger** – Starts the workflow manually.  
2. **Set Image Prompt** – Stores the prompt text and base file name (e.g., “Make an image of an attractive woman standing in New York City”).  
3. **Duplicate Rows (Code Node)** – Creates multiple "runs" of the same prompt for variation.  
4. **Loop Over Items** – Processes each variation one at a time.  
5. **Generate an image (OpenAI DALL·E 2)** – Sends the prompt to OpenAI and retrieves an image.  
6. **Upload to Google Drive** – Saves each generated image to your chosen Google Drive folder.

---

### 3. Building the Workflow in n8n

#### Step 1 — Manual Trigger
Add a **Manual Trigger** node to start the workflow manually when testing.

#### Step 2 — Set Image Prompt
Add a **Set** node with two fields:  
- `Prompt` → The image description text.  
- `Name` → The base name for the saved file.  

Example:  
| Name   | Value                                                         |
|--------|---------------------------------------------------------------|
| Prompt | Make an image of an attractive woman standing in New York City |
| Name   | woman-nyc                                                      |

#### Step 3 — Duplicate Rows (Code Node)
Use this JavaScript to create three copies of the prompt (run 1, run 2, run 3):
```javascript
const original = items[0].json;

return [
  { json: { ...original, run: 1 } },
  { json: { ...original, run: 2 } },
  { json: { ...original, run: 3 } },
];

#### Step 4 — Loop Over Items
Insert a **Split in Batches** node and set the batch size to `1`. This ensures each prompt variation runs through the image generation process individually. Connect this node so it runs after the **Duplicate Rows** node.

#### Step 5 — Generate Image
Add the **OpenAI Image Generation** node and configure it as follows:
- **Model**: `dall-e-2`
- **Prompt**: `={{ $json.Prompt }}`
- Leave other options at their defaults unless you want to specify image size or style.
- Connect your **OpenAI API** credentials created in Step 1.

This node will send the current prompt in the batch to OpenAI's DALL·E 2 model and return an AI-generated image.

#### Step 6 — Upload to Google Drive
Add a **Google Drive** node and configure it to store the generated image:
- **File Name**:  
  `={{ $('Set Image Prompt').item.json.Name }} - {{ $('Duplicate Rows').item.json.run }}`
- **Folder ID**: Select the target Google Drive folder where images should be saved.
- Connect your **Google Drive OAuth2 API** credentials.

The node will upload each generated image to your chosen Google Drive location, with a unique filename for each variation.

---

### Running the Workflow
1. Execute the workflow manually.
2. The process will:
   - Loop through each prompt variation.
   - Generate an image using OpenAI DALL·E 2.
   - Upload the image to Google Drive with a unique name.
3. You will find all generated images in the selected Google Drive folder.

---

### Customization Tips
- Change the number of variations by editing the **Duplicate Rows** code.
- Adjust the prompt dynamically from other data sources like Google Sheets, webhooks, or forms.
- Schedule the workflow to run at specific times or trigger it via an API call.

---

**Created by Robert A. – Ynteractive**  
Website: https://ynteractive.com  
Email: robert@ynteractive.com

## 🔗 Nodes Used

Google Drive, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
