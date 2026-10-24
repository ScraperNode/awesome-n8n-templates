# 🎬 Generate and store AI images with DALL-E and Azure Blob Storage

> ⚡ **492 views** · 🎬 [Content Creation & Video](../)

## Description

# Beginner’s Tutorial: Manage Azure Storage Account Container & Blob with n8n
[![Watch the video](https://wisestackai.s3.ap-southeast-1.amazonaws.com/Modern+Top+10+Shocking+Moments+Youtube+Thumbnail.jpg)](https://www.youtube.com/watch?v=vh06fpMkalw)
&gt; This beginner-friendly n8n workflow shows you how to generate AI images using OpenAI, store them in Azure Blob Storage, and manage blob containers, all with zero code.

## 👤 Who’s it for

This workflow is perfect for:
- **Beginners learning Azure + OpenAI integration**
- **No-code developers** experimenting with image generation
- **Cloud learners** who want hands-on Blob Storage use cases
- Anyone who wants to automate storing AI-generated content in the cloud

## ⚙️ How it works / What it does

1. 🖱️ Trigger the workflow manually using the `Execute Workflow` node.
2. ✏️ Use the `Edit Fields` node to input:
   - `containerName` (e.g., `demo-images`)
   - `imageIdea` (e.g., "a robot holding a coffee cup")
3. 📦 Create a new Azure Blob container (`Create container`).
4. 🤖 Use an OpenAI-powered **Prompt Generation Agent** to craft the perfect image prompt.
5. 🎨 Generate an image using OpenAI’s DALL·E model.
6. ☁️ Upload the generated image to Azure Blob Storage (`Create Blob`).
7. 📂 List blobs in the container (`Get many blobs`).
8. 🧹 Delete any blob as needed (`Delete Blob`).
9. (Optional) 🗑️ Remove the entire container (`Delete container`).

## 🔧 How to set up

1. **🧠 Set up OpenAI**
   - Create an OpenAI account and get your API key.
   - In n8n, go to **Credentials → OpenAI** and paste your key.

2. **🪣 Set up Azure Blob Storage**
   - Log in to your Azure Portal.
   - Create a **Storage Account** (e.g., `mystorageaccount`).
   - Go to **Access Keys** tab and copy:
     - **Storage Account Name**
     - **Key1**
   - In n8n, create a new **Azure Blob Storage Credential** using:
     - **Account Name** = your storage account name
     - **Access Key** = key1 value

   &gt; 📝 This demo uses **Access Key** authentication. You can also configure Shared Access Signatures (SAS) or OAuth in production setups.

3. **Run the Workflow**
   - Enter your image idea and container name.
   - Click “Execute Workflow” to test it.

## 📋 Requirements

| Requirement            | Description                                      |
|------------------------|--------------------------------------------------|
| Azure Storage Account  | With container-level read/write access          |
| OpenAI API Key         | For image and prompt generation                 |
| n8n Version            | v1.0+ recommended                               |
| Image Credits          | OpenAI charges tokens for DALL·E image creation |


## 🛠️ How to customize the workflow

### 🧠 Adjust Prompt Generation
Update the **Prompt Agent** to include:
- Specific style (3D, anime, cyberpunk)
- Brand elements
- Multiple language options

### 📁 Organize by Date/User
Modify the `containerName` to auto-include:
- Date (e.g., `images-2025-08-20`)
- Username or session ID

### 📤 Send Image Output
- Add Slack, Telegram, or Email nodes to deliver the image
- Create public links using Azure’s blob permissions

### 🔁 Cleanup Logic
- Auto-delete blobs after X days
- Add versioning or backup logic

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, OpenAI, Azure Storage

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
