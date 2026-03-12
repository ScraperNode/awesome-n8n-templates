# 🎬 Transform selfies into professional LinkedIn headshots with Nano Banana Pro & Telegram

> ⚡ **478 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow automates the process of transforming user-submitted photos (also bad **selfie**) into professional **CV and LinkedIn headshots** using the **Nano Banana Pro** AI model. 

| From selfie | To CV/Linkedin Headshot |
|:----------------:|:-----------------------------------------:|
| ![image](https://n3wstorage.b-cdn.net/n3witalia/selfie.jpg) | ![image](https://n3wstorage.b-cdn.net/n3witalia/cv_top.jpg) |


---

### **Key Advantages**

* #### **1. ✅ Fully Automated Professional Image Enhancement**

	From receiving a photo to delivering a polished LinkedIn-style headshot, the workflow requires **zero manual intervention**.

* #### **2. ✅ Seamless Telegram Integration**

	Users can simply send a picture via Telegram—no need to log into dashboards or upload images manually.

* #### **3. ✅ Secure Access Control**

	Only the authorized Telegram user can trigger the workflow, preventing unauthorized usage.

* #### **4. ✅ Reliable API Handling with Auto-Polling**

	The workflow includes a robust status-checking mechanism that:

	* Waits for the Fal.ai model to finish
	* Automatically retries until the result is ready
	* Minimizes the chance of failures or partial results

* #### **5. ✅ Flexible Input Options**

	You can run the workflow either:

	* Via Telegram
	* Or manually by setting the image URL if no FTP space is available

	This makes it usable in multiple environments.

* #### **6. ✅ Dual Storage Output (Google Drive + FTP)**

	Processed images are automatically stored in:

	* **Google Drive** (organized and timestamped)
	* **FTP** (ideal for websites, CDN delivery, or automated systems)

* #### **7. ✅ Clean and Professional Output**

	Thanks to detailed prompt engineering, the workflow consistently produces:

	* Realistic headshots
	* Studio-style lighting
	* Clean backgrounds
	* Professional attire adjustments

	Perfect for LinkedIn, CVs, or corporate profiles.

* #### **8. ✅ Modular and Easy to Customize**

	Each step is isolated and can be modified:	

	* Change the prompt
	* Replace the storage destination
	* Add extra validation
	* Modify resolution or output formats


---

### **How It Works**

The workflow supports two input methods:

1. **Telegram Trigger Path**: Users can send photos via Telegram, which are then processed through FTP upload and transformed into professional headshots.

2. **Manual Trigger Path**: Users can manually trigger the workflow with an image URL, bypassing the Telegram/FTP steps for direct processing.

The core process involves:
- Receiving an input image (from Telegram or manual URL)
- Sending the image to Fal.ai's Nano Banana Pro API with specific prompts for professional headshot transformation
- Polling the API for completion status
- Downloading the generated image and uploading it to both **Google Drive** and **FTP storage**
- Using a conditional check to ensure processing is complete before downloading results


---


### **Set Up Steps**
1. **Authorization Setup**:
   - Replace in the "Sanitaze" node with your actual Telegram user ID
   - Configure Fal.ai API key in the "Create Image" node (Header Auth: `Authorization: Key YOURAPIKEY`)
   - Set up Google Drive and FTP credentials in their respective nodes

2. **Storage Configuration**:
   - In the "Set FTP params" node, configure:
     - `ftp_path`: Your server directory path (e.g., `/public_html/images/`)
     - `base_url`: Corresponding base URL (e.g., `https://website.com/images/`)
   - Configure Google Drive folder ID in the "Upload Image" node

3. **Input Method Selection**:
   - For Telegram usage: Ensure Telegram bot is properly configured
   - For manual usage: Set the image URL in the "Fix Image Url" node or use the manual trigger

4. **API Endpoints**:
   - Ensure all Fal.ai API endpoints are correctly configured in the HTTP Request nodes for creating images, checking status, and retrieving results

5. **File Naming**:
   - Generated files use timestamp-based naming: `yyyyLLddHHmmss-filename.ext`
   - Output format is set to PNG with 1K resolution

The workflow handles the complete pipeline from image submission through AI processing to storage distribution, with proper error handling and status checking throughout.

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Google Drive, FTP

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
