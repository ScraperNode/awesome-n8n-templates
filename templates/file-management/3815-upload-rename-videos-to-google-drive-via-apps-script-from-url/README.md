# 📁 Upload & rename videos to Google Drive via Apps Script from URL

> ⚡ **775 views** · 📁 [File Management](../)

## Description

## 📄 Google Script Workflow: Upload File from URL to Google Drive (via n8n)

### 🔧 Purpose:
This lightweight Google Apps Script acts as a server endpoint that receives a file URL (from `n8n`), downloads the file, uploads it to your specified Google Drive folder, and responds with the file’s metadata (like Drive file ID and URL). This is useful for large video/audio files that `n8n` cannot handle directly via HTTP Download nodes.

---

## 🚀 Setup Steps:

### 1. **Create a New Script Project**

- Go to [https://script.google.com](https://script.google.com)
- Click **“New Project”**
- Rename the project to something like: `DriveUploader`

---

### 2. **Paste the Script Code**

Replace the default `Code.gs` content with the following (your custom script):

```javascript
function doPost(e) {
  const SECRET_KEY = 'your-strong-secret-here'; // Set your secret key here

  try {
    const data = JSON.parse(e.postData.contents);

    // 🔒 Check for correct secret key
    if (!data.secret || data.secret !== SECRET_KEY) {
      return ContentService.createTextOutput("Unauthorized")
        .setMimeType(ContentService.MimeType.TEXT);
    }

    const videoUrl = data.videoUrl;
    const folderId = 'YOUR_FOLDER_ID_HERE'; // Replace with your target folder ID
    const folder = DriveApp.getFolderById(folderId);

    const response = UrlFetchApp.fetch(videoUrl);
    const blob = response.getBlob();
    const file = folder.createFile(blob);
    file.setName('uploaded_video.mp4'); // You can customize the name

    return ContentService.createTextOutput(file.getUrl())
      .setMimeType(ContentService.MimeType.TEXT);
  } catch (err) {
    return ContentService.createTextOutput("Error: " + err.message)
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

```
---

### 3. Generate & Set Up Secret Key
To allow authorized post requests to your script only, we need to generate a secret key from aany reliable key generator. 
- You can head over to [acte](https://acte.ltd/utils/randomkeygen), click generate and copy the "Encryption key 256". 
- Paste it in the 'your-strong-secret-here' placeholder in your script then click save

```js
  const SECRET_KEY = 'your-strong-secret-here'; // Set your secret key here;
  ```

### 4. **Replace Folder ID in Code**

- Open the target Drive folder in your browser  
- The folder ID is the part of the URL after `/folders/`  
  Example:  
  ```
  https://drive.google.com/drive/u/0/folders/1Xabc12345678defGHIJklmn
  ```
- Paste that ID in the script:  
  ```js
  var folderId = "1Xabc12345678defGHIJklmn";
  ```
---
### 5. **Set Up Deployment as Web App**

- Click **“Deploy” &gt; “Manage Deployments” &gt; “New Deployment”**
- Under **Select type**, choose **Web app**
- Description: `Upload from URL to Drive`
- Execute as: **Me**
- Who has access: **Anyone**
- Click **Deploy**
- Authorize the script when prompted
- Copy the **Web App URL**




---

## 📤 How to Use in n8n

### 1. **HTTP Request Node**

- Method: `POST`
- URL: (your web app URL)
- Secret Key: (Secret Key set in script)
- Body Content Type: `JSON`
- Paste code:
```json
{
  "videoUrl": "https://example.com/path/to/your.mp4",
  "secret": "your-strong-secret-here"
}
```
  - `videoUrl`: The file download URL
  - `secret`: The generated and set up secret key 


### 2. **Rename Node**

- A simple drive update node to rename the file using the file drive url returned from the script.

---

## 🔗 Nodes Used

HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
