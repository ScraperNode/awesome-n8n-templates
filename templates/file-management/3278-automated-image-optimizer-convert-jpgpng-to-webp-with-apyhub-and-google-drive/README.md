# 📁 Automated image optimizer: convert JPG/PNG to WebP with APYHub and Google Drive

> ⚡ **2,436 views** · 📁 [File Management](../)

## Description

This workflow automates the process of converting images from **JPG/PNG** format to **WEBP** using the **APYHub API**. It retrieves image URLs from a **Google Sheet**, converts the images, and uploads the converted files to **Google Drive**. 

This workflow is a powerful tool for automating image conversion tasks, saving time and ensuring that images are efficiently converted and stored in the desired format.

Using WebP images on a website provides several SEO benefits:  

1. **Faster Loading Speed** – WebP files are smaller than JPG and PNG, reducing page load times and improving user experience.  
2. **Better Core Web Vitals** – Google prioritizes websites with good performance metrics like LCP (Largest Contentful Paint).  
3. **Improved Mobile Performance** – Smaller images consume less bandwidth, enhancing mobile usability.  
4. **Higher Search Rankings** – Faster sites tend to rank better on Google due to improved user experience.  
5. **Reduced Server Load** – Lighter images lower hosting and CDN costs while improving site efficiency.

Below is a breakdown of the workflow:

---

#### **1. How It Works**
The workflow is designed to convert images from JPG/PNG to WEBP format and manage the converted files. Here's how it works:

1. **Manual Trigger**:
   - The workflow starts with a **Manual Trigger** node, which initiates the process when the user clicks "Test workflow."

2. **Set API Key**:
   - The **Set API KEY** node defines the API key required to access the APYHub API.

3. **Get Images**:
   - The **Get Images** node retrieves a list of image URLs from a **Google Sheet**. The sheet contains columns for the original image URL (`FROM`), the converted image URL (`TO`), and a status flag (`DONE`).

4. **Get Extension**:
   - The **Get Extension** node extracts the file extension (JPG, JPEG, or PNG) from the image URL and adds it to the JSON data.

5. **Determine Image Type**:
   - The **JPG or PNG?** node checks the file extension and routes the workflow to the appropriate conversion node:
     - **JPG/JPEG**: Routes to the **From JPG to WEBP** node.
     - **PNG**: Routes to the **PNG to WEBP** node.

6. **Convert Image**:
   - The **From JPG to WEBP** and **PNG to WEBP** nodes send POST requests to the **APYHub API** to convert the images to WEBP format.
   - The API returns the URL of the converted image.

7. **Update Google Sheet**:
   - The **Update Sheet** node updates the Google Sheet with the URL of the converted image and marks the row as done (`DONE`).

8. **Get Converted Image**:
   - The **Get File Image** node downloads the converted WEBP image from the URL provided by the APYHub API.

9. **Upload to Google Drive**:
   - The **Upload Image** node uploads the converted WEBP image to a specified folder in **Google Drive**.

---

#### **2. Set Up Steps**
To set up and use this workflow in n8n, follow these steps:

1. **APYHub API Key**:
   - Obtain an **API Key** from [APYHub](https://apyhub.com/).
   - In the **Set API KEY** node, define the API key.

2. **Google Sheets Integration**:
   - Set up **Google Sheets** credentials in n8n for the **Get Images** and **Update Sheet** nodes.
   - Create a Google Sheet with columns for `FROM` (original image URL), `TO` (converted image URL), and `DONE` (status flag).
   - Provide the **Document ID** and **Sheet Name** in the **Get Images** node.

3. **Google Drive Integration**:
   - Set up **Google Drive** credentials in n8n for the **Upload Image** node.
   - Specify the folder ID in Google Drive where the converted images will be uploaded.

4. **Test the Workflow**:
   - Click the **"Test workflow"** button in n8n to trigger the workflow.
   - The workflow will:
     - Retrieve image URLs from the Google Sheet.
     - Convert the images to WEBP format using the APYHub API.
     - Update the Google Sheet with the converted image URLs.
     - Upload the converted images to Google Drive.

5. **Optional Customization**:
   - Modify the workflow to include additional features, such as:
     - Adding more image formats for conversion.
     - Sending notifications when the conversion is complete.
     - Integrating with other storage services (e.g., Dropbox, AWS S3).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
