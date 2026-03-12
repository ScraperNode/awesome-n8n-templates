# 🎬 Automate face swapping for GIFs with Fal.run AI and Google Services

> ⚡ **444 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow allows you to **automatically swap faces in animated GIFs using AI**, without writing a single line of code.

By simply inserting the URL of a face image and a GIF into a Google Sheet, the automation takes care of everything: it sends the data to AI platform, monitors the processing status, retrieves the final face-swapped GIF, uploads it to Google Drive, and updates the Google Sheet with the result.

This solution is perfect for content creators, marketers, or developers looking to integrate AI-powered GIF editing into their workflows in a fast and scalable way.

Whether used manually or on a scheduled basis, the workflow turns a tedious creative task into a fully automated pipeline.

This workflow automates GIF face-swapping by integrating Google Sheets for input/output and Fal.run for AI processing, ensuring seamless execution via scheduled or manual triggers.

---


### **Example**

#### Face image:
![image](https://n3wstorage.b-cdn.net/n3witalia/selfie.png)

#### Gif Image:
![image](https://n3wstorage.b-cdn.net/n3witalia/gif.gif)

#### Result:
![image](https://n3wstorage.b-cdn.net/n3witalia/result.gif)

--- 

### **How It Works**  
1. **Trigger**:  
   - The workflow can be triggered manually ("When clicking ‘Test workflow’") or automatically via a scheduled trigger ("Schedule Trigger") set to run at intervals (e.g., every 5 minutes).  

2. **Data Retrieval**:  
   - The "Google Sheets" node fetches data from a predefined Google Sheet, which includes two columns:  
     - `FACE IMAGE`: URL of the face image to swap.  
     - `GIF IMAGE`: URL of the target GIF.  

3. **API Request**:  
   - The "Set data" node formats the retrieved URLs into variables (`face_image` and `gif_image`).  
   - The "Create Image" node sends a POST request to the Fal.run API (`easel-gifswap` endpoint) with these URLs to initiate the face-swapping process. The API returns a `request_id`.  

4. **Status Check**:  
   - The "Wait 60 sec." node pauses execution for 60 seconds to allow processing time.  
   - The "Get status" node queries the Fal.run API using the `request_id` to check if the task is `COMPLETED`.  
   - If completed, the "Get Url image" node retrieves the final GIF URL.  

5. **Output Handling**:  
   - The "Upload Image" node saves the resulting GIF to Google Drive.  
   - The "Update result" node writes the output GIF URL back to the Google Sheet under the `RESULT` column.  

---  

### **Set Up Steps**  
1. **Prepare Google Sheet**:  
   - Create a Google Sheet with columns: `FACE IMAGE`, `GIF IMAGE`, and `RESULT`.  
   - Populate the first two columns with image URLs. Leave `RESULT` empty for the workflow to fill.  

2. **Configure API Key**:  
   - Sign up to obtain an API key.  
   - In the "Create Image" node, set HTTP header authentication:  
     - **Name**: `Authorization`  
     - **Value**: `Key YOURAPIKEY`  

3. **Schedule Execution**:  
   - Link the "Schedule Trigger" node to run periodically (e.g., every 5 minutes) or trigger manually for testing.  

4. **Test and Deploy**:  
   - Run the workflow to verify face-swapping functionality.  
   - Monitor the Google Sheet for the `RESULT` column updates with the processed GIF URL.  

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
