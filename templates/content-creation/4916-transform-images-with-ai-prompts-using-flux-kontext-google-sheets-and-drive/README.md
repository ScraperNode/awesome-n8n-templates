# 🎬 Transform images with AI prompts using FLUX Kontext, Google Sheets and Drive

> ⚡ **2,140 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow automates the generation of **AI-enhanced, contextualized images using FLUX Kontext**, based on prompts stored in a Google Sheet. The generated images are then **saved to Google Drive**, and their URLs are written back to the spreadsheet for easy access.

---

### Example

**Image**:
![image](https://n3wstorage.b-cdn.net/n3witalia/model.jpg)

**Prompt**:
The girl is lying on the bed and sleeping

**Result**:
![image](https://n3wstorage.b-cdn.net/n3witalia/flux_output.jpeg)

---

### **Perfect for E-commerce and Social Media**

This workflow is especially useful for **e-commerce businesses**:

* Generate **product images with dynamic backgrounds** based on the use-case or season.
* Create **contextual marketing visuals** for ads, newsletters, or product pages.
* Scale visual content creation without the need for manual design work.


---

### **How It Works**  

- **Trigger**: The workflow can be started manually (via "Test workflow") or scheduled at regular intervals (e.g., every 5 minutes) using the "Schedule Trigger" node.  
- **Data Fetch**: The "Get new image" node retrieves a row from a Google Sheet where the "RESULT" column is empty. It extracts the prompt, image URL, output format, and aspect ratio for processing.  
- **Image Generation**: The "Create Image" node sends a request to the FLUX Kontext API (fal.run) with the provided parameters to generate a new AI-contextualized image.  
- **Status Check**: The workflow waits 60 seconds ("Wait 60 sec." node) before checking the status of the image generation request via the "Get status" node. If the status is "COMPLETED," it proceeds; otherwise, it loops back to wait.  
- **Result Handling**: Once completed, the "Get Image Url" node fetches the generated image URL, which is then downloaded ("Get Image File"), uploaded to Google Drive ("Upload Image"), and the Google Sheet is updated with the result ("Update result").  

---  

### **Set Up Steps**  
To configure this workflow, follow these steps:  

1. **Google Sheet Setup**:  
   - Create a Google Sheet with columns for **PROMPT**, **IMAGE URL**, **ASPECT RATIO**, **OUTPUT FORMAT**, and **RESULT** (leave this empty).  
   - Link the sheet in the "Get new image" and "Update result" nodes.  

2. **API Key Configuration**:  
   - Sign up at [fal.ai](https://fal.ai/) to obtain an API key.  
   - In the "Create Image" node, set the **Header Auth** with:  
     - **Name**: `Authorization`  
     - **Value**: `Key YOURAPIKEY`  

3. **Google Drive Setup**:  
   - Specify the target folder ID in the "Upload Image" node where generated images will be saved.  

4. **Schedule Trigger (Optional)**:  
   - Adjust the "Schedule Trigger" node to run the workflow at desired intervals (e.g., every 5 minutes).  

5. **Test Execution**:  
   - Run the workflow manually via the "Test workflow" node to verify all steps function correctly.  

Once configured, the workflow will automatically process pending prompts, generate images, and update the Google Sheet with results.

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
