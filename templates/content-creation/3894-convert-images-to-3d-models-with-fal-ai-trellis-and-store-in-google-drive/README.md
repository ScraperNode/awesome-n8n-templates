# 🎬 Convert images to 3D models with Fal AI Trellis and store in Google Drive

> ⚡ **2,839 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow allows users to **convert a 2D image into a 3D model** by integrating multiple AI and web services. The process begins with a user uploading or providing an image URL, which is then sent to a generative AI model capable of interpreting the content and generating a 3D representation in `.glb` format. The model is then stored and a download link is returned to the user.

![image](https://i.postimg.cc/1Xd20z4R/3d.png)

---

### **Main Steps**

1. **Trigger Node**: Initiates the workflow either via HTTP request, webhook, or manual execution.
2. **Image Upload or Input**: The image is acquired via direct upload or URL input.
3. **API Integration**: The image is sent to a 3D generation API (e.g., a service like Kaedim, Luma Labs, or a custom AI model).
4. **Model Generation**: The external API processes the image and creates a 3D model.
5. **File Storage**: The resulting 3D model is stored in cloud storage (e.g., S3, Google Drive, or a local server).
6. **Response to User**: A download link for the 3D model is returned to the user via the same communication channel (HTTP response, email, or chat).

---

### **Advantages**

* **Automation**: Eliminates the need for manual 3D modeling, saving time for artists, developers, and designers.
* **AI-Powered**: Leverages AI to generate realistic and usable 3D models from simple 2D inputs.
* **Scalability**: Can be triggered automatically and scaled up to handle many requests via n8n's automation.
* **Integration-Friendly**: Easily extendable with other services like Discord, Telegram, or marketplaces for 3D assets.
* **No-Code Configuration**: Built with n8n’s visual interface, making it editable without programming knowledge.
 
---

### **How It Works**  
1. **Trigger**: The workflow can be started manually ("When clicking ‘Test workflow’") or automatically at scheduled intervals ("Schedule Trigger").  
2. **Data Retrieval**: The "Get new image" node fetches data from a Google Sheet, including the model image, product image, and product ID.  
3. **3D Image Creation**: The "Create 3D Image" node sends the image data to the Fal.run API (Trellis) to generate a 3D model.  
4. **Status Check**: The workflow periodically checks the request status ("Get status" and "Wait 60 sec.") until the job is marked as "COMPLETED."  
5. **Result Processing**: Once completed, the 3D model URL is retrieved ("Get Url 3D image"), the file is downloaded ("Get File 3D image"), and uploaded to Google Drive ("Upload 3D Image").  
6. **Sheet Update**: The final 3D model URL is written back to the Google Sheet ("Update result").  

---

### **Set Up Steps**  
1. **Prepare Google Sheet**:  
   - Create a Google Sheet with columns: **IMAGE MODEL** and **3D RESULT** (empty).  
   - Example sheet: [Google Sheet Template](https://docs.google.com/spreadsheets/d/1C0Et6X3Zwr_6CxeNjhLpDwjAfIGeUvLGFawckKb0utY/edit?usp=sharing).  

2. **Obtain Fal.run API Key**:  
   - Sign up at [Fal.ai](https://fal.ai/) and get an API key.  
   - Configure the **Authorization** header in the "Create 3D Image" node with `Key YOURAPIKEY`.  

3. **Configure Workflow Execution**:  
   - Run manually via the **Test workflow** button.  
   - For automation, set up the **Schedule Trigger** node (e.g., every 5 minutes).  

4. **Verify Credentials**: Ensure Google Sheets, Google Drive, and Fal.run API credentials are correctly set in n8n.  

Once configured, the workflow processes new entries in the Google Sheet, generates 3D models, and updates the results automatically.

---


### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
