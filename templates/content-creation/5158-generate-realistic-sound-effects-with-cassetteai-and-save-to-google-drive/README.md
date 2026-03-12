# 🎬 Generate realistic sound effects with CassetteAI and save to Google Drive

> ⚡ **517 views** · 🎬 [Content Creation & Video](../)

## Description

The **Sound Effects Generator** is an automated workflow that allows users to create realistic sound effects using AI and save them directly to Google Drive. It generates high-quality sound effects (up to 30 seconds long) based on user prompts.

---
### How It Works:

1. **User Input via Web Form**
   A form is presented to the user asking for:

   * A **prompt** describing the sound (e.g. "waves crashing", "laser blast").
   * A **duration** in seconds (up to 30 seconds).

2. **API Request to Generate Audio**
   The input is sent to CassetteAI via a `POST` request using API with proper authentication.

3. **Status Polling**
   The workflow waits for 10 seconds and then checks the status of the request.

4. **Conditional Flow**

   * If the audio generation is complete (`COMPLETED`), it proceeds to fetch the audio file URL.
   * If not, it waits and retries.

5. **Download & Save**

   * The audio file is downloaded from the URL.
   * It is automatically uploaded to a specific folder in the user’s **Google Drive**, with a timestamped filename.

---

### **Key Advantages**

* **Fast & Efficient**: Generates up to 30 seconds of audio in just 1 second of processing time.
* **No Coding Required**: Entire flow can be triggered via a simple form interface.
* **Automated Storage**: Files are automatically saved to a preconfigured Google Drive folder.
* **Scalable**: Can be reused for multiple projects by simply changing the input prompts.
* **Secure**: Uses secure API key-based authentication for interaction with Fal.run and Google Drive.
* **Customizable**: Easy to adapt or extend—for example, sending download links via email or Telegram.

---

### **How It Works**  
1. **Form Submission**: The workflow starts with a form where users input a prompt and the desired duration (max 30 seconds) for the sound effect.  
2. **Audio Creation**: The submitted data is sent to the CassetteAI Sound Effects Generator API via an HTTP request, which initiates the sound effect generation process.  
3. **Status Check**: The workflow periodically checks the status of the request. If the status is "COMPLETED," it proceeds to fetch the audio file.  
4. **Audio Retrieval**: The generated audio file is downloaded from the provided URL and uploaded to a specified Google Drive folder, with a timestamped filename for organization.  

---

### **Set Up Steps**  
1. **API Key Configuration**:  
   - Create an account on [fal.ai](https://fal.ai/) and obtain an API key.  
   - In the "Create audio" node, set the "Header Auth" with:  
     - **Name**: `Authorization`  
     - **Value**: `Key YOURAPIKEY` (replace `YOURAPIKEY` with your actual API key).  

2. **Google Drive Integration**:  
   - Ensure the Google Drive node is configured with the correct OAuth2 credentials and folder ID.  
   - Adjust the folder ID in the "Upload Audio" node if a different destination is preferred.  


----
### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Google Drive, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
