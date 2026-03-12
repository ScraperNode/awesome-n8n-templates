# 📁 Manage Google Cloud Storage with AI image generation using GPT-4 Mini

> ⚡ **724 views** · 📁 [File Management](../)

## Description

# Beginner’s Tutorial: Manage Google Cloud Storage Buckets and Objects with n8n
### Watch the demo video below:
[![Watch the video](https://s3.ap-southeast-1.amazonaws.com/automatewith.me/manage-google-cloud-storage-with-ai-image-generation-using-gpt-41-mini.jpg)](https://www.youtube.com/watch?v=2iJfmQgVL6E)
## **Who’s it for**
- Beginners who want to learn how to automate Google Cloud Storage (GCS) operations with n8n.  
- Developers who want to combine **AI image generation** with **cloud storage management**.  
- Anyone looking for a simple introduction to working with **Buckets** and **Objects** in GCS.  

## **How it works / What it does**
This workflow demonstrates end-to-end usage of **Google Cloud Storage** with AI integration:  

1. **Trigger:** Start manually by clicking *Execute Workflow*.  
2. **Edit Fields:** Provide input values (e.g., bucket name or image description).  
3. **List Buckets:** Retrieve all existing buckets in the project (branch: view only).  
4. **Create Bucket:** If needed, create a new bucket to store objects.  
5. **Prompt Generation Agent:** Use an AI model to generate a creative text prompt.  
6. **Generate Image:** Convert the AI-generated prompt into an image.  
7. **Upload Object:** Store the generated image as an object in the selected bucket.  
8. **Delete Object:** Clean up by removing the uploaded object if required.  

This shows the full lifecycle: *Bucket → Object (Create/Upload/Delete)* combined with AI image generation.  

## **How to set up**
1. **Trigger the workflow:** Use the *When clicking Execute workflow* node to start manually.  
2. **Provide inputs:** In *Edit Fields*, specify details such as bucket name or description text for the image.  
3. **List buckets:** Use the *List Buckets* node to see what exists.  
4. **Create a bucket:** Use *Create Bucket* if you want a new storage bucket.  
5. **Generate prompt & image:**  
   - The *Prompt Generation Agent* uses an OpenAI Chat Model to create an image prompt.  
   - The *Generate an Image* node turns this prompt into an actual image.  
6. **Upload to bucket:** Use *Create Object* to upload the generated image into your GCS bucket.  
7. **Delete object (optional):** Use *Delete Object* to remove the file from the bucket as a cleanup step.  

## **Requirements**
- An active **Google Cloud account** with **Cloud Storage API enabled**.  
- A **Service Account Key (JSON)** credential added in n8n for GCS.  
- An **OpenAI API Key** configured in n8n for the prompt and image generation nodes.  
- Basic familiarity with running workflows in n8n.  
  
## **How to customize the workflow**
- **Different object types:** Instead of images, upload PDFs, logs, or text files.  
- **Automatic cleanup:** Skip the delete step if you want objects to persist.  
- **Schedule trigger:** Replace manual execution with a weekly or daily schedule.  
- **Dynamic prompts:** Accept user input from a form or webhook to generate images.  
- **Multi-bucket management:** Extend the logic to manage multiple buckets across projects.  
- **Notifications:** Add a Slack/Email step after upload to notify your team with the object URL.  

✅ By the end of this tutorial, you’ll understand how to:  
- Work with **Buckets** (list, create).  
- Work with **Objects** (upload, delete).  
- Integrate **AI image generation** with Google Cloud Storage.

## 🔗 Nodes Used

Google Cloud Storage, AI Agent, OpenAI Chat Model, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
