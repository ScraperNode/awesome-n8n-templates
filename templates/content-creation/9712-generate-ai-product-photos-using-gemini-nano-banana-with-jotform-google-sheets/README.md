# 🎬 Generate AI product photos using Gemini Nano Banana with Jotform & Google Sheets

> ⚡ **1,885 views** · 🎬 [Content Creation & Video](../)

## Description

# AI Product Photography With Nano Banana and Jotform 📸✨

Automate your product visuals! This **n8n workflow** instantly processes new product photography requests from **Jotform** or **Google Sheets**, uses an **AI agent** (**Gemini Nano Banana**) to generate professional **AI product photography** based on your product details and **reference images**, saves the final image to **Google Drive**, and updates the photo link in your **Google Sheet** for seamless **record** keeping.

---

## How it Works

This n8n workflow operates as a fully automated pipeline for generating and managing AI product photographs:

1.  **Trigger:** The workflow is triggered either manually, on a set schedule (e.g., hourly), or immediately upon a new submission from the connected **Jotform** (or when new "Pending" rows are detected in the **Google Sheet** on a scheduled or manual run).
2.  **Data Retrieval:** If triggered by a schedule or manually, the workflow fetches new rows with a "Status" of "**Pending**" from the designated **Google Sheet**.
3.  **Data Preparation:** The input data (Product Name, Description, Requirements, and URLs for the Product and Reference Images) is prepared. The Product and Reference Images are downloaded using HTTP Requests.
4.  **AI Analysis & Prompt Generation:** An **AI agent** (using the Gemini model) analyzes the product details and image requirements, then generates a refined, professional prompt for the image generation model.
5.  **AI Photo Generation:** The generated prompt, along with the downloaded product and reference images, is sent to the image generation model, referred to as "**Gemini Nano Banana**" (a powerful Google AI model for image generation), to create the final, high-quality AI product photograph.
6.  **File Handling:** The raw image data is converted into a binary file format.
7.  **Storage:** The generated photograph is saved with the **Product Name** as the filename to your specified **Google Drive** folder.
8.  **Record Update:** The workflow updates the original row in the **Google Sheet**, changing the "**Status**" to "**Completed**" and adding the public URL of the newly saved image in the "**Generated Image**" column. If the trigger was from Jotform, a new record is appended to the Google Sheet.

---

## Requirements

To use this workflow, you'll need the following accounts and credentials configured in n8n:

* **n8n Account:** Your self-hosted or cloud n8n instance.
* **Google Sheets/Drive Credentials:** An **OAuth2** or **API Key** credential for the Google Sheets and Google Drive nodes to read input and save the generated image.
* **Google Gemini API Key:** An API key for the Google Gemini nodes to access the AI agent for prompt generation and the image generation service (**Gemini Nano Banana**).
* **Jotform Credential (Optional):** A Jotform credential is only required if you want to use the Jotform Webhook trigger. **Sign up for Jotform here:** [https://www.jotform.com/?partner=zainurrehman](https://www.jotform.com/?partner=zainurrehman)
* **A Google Sheet and Jotform:** with columns/fields for: `Product Name`, `Product Description`, `Product Image` (URL), `Requirement`, `Reference Image 1` (URL), `Reference Image 2` (URL), `Status`, and a blank `Generated Image` column.

---

## How to Use

### 1. Set Up Your Integrations
1.  Add the necessary **Credentials** (Google Sheets, Google Drive, Gemini API, and optionally Jotform) in your n8n settings.
2.  Specify the **Google Sheet Document ID** and **Sheet Name** in the Google Sheet nodes.
3.  In the `Upload to Drive` node, select your desired **Drive ID** and **Folder ID** where the final images should be saved.

### 2. Prepare Input Data
You can start the workflow either by:

* **Submitting a Form:** Fill out and submit the connected **Jotform** with the product details and image links.
* **Adding to a Sheet:** Manually add a new row to your Google Sheet with all the product and image details, ensuring the **Status** is set to **"Pending"**.

### 3. Run the Workflow
* **For Jotform Trigger:** Once the workflow is **Active**, a Jotform submission will automatically start the process.
* **For Scheduled/Manual Trigger:** Activate the **Schedule Trigger** for automatic runs (e.g., hourly), or click the **Manual Trigger** node and select **"Execute Workflow"** to process all current "Pending" requests in the Google Sheet.

The generated photograph will be uploaded to Google Drive, and its link will be automatically recorded in the "Generated Image" column in your Google Sheet.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Jotform Trigger, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
