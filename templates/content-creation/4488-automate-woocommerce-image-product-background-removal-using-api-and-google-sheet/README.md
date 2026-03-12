# 🎬 Automate WooCommerce image product background removal using API and Google Sheet

> ⚡ **1,717 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow automates the process of **removing backgrounds from WooCommerce product images** using the BackgroundCut API, and then updates the product images in both **WooCommerce** and a **Google Sheet**.

Once set up, the workflow processes product images in bulk, removing backgrounds and updating WooCommerce seamlessly.

This workflow is perfect for online stores that sell:
* Clothing and fashion items
* Jewelry and accessories
* General consumer products

Any product that benefits from clean, background-free images for a professional storefront presentation will see improved visual appeal and potentially higher conversions.

---

### Benefits

* **⏱ Time-saving:** Automates what would otherwise be a manual and repetitive task of editing images and updating product listings.
* **🔄 Fully Integrated:** Connects Google Sheets, BackgroundCut API, FTP server, and WooCommerce in a seamless loop.
* **📦 Scalable:** Supports batch processing, making it suitable for stores with hundreds of products.
* **📁 Organized Tracking:** Updates the Google Sheet with the new image and a “DONE” flag for easy monitoring.
* **🔧 Customizable:** You can change the image processing API, storage server, or eCommerce platform if needed.

---


### **How It Works**  
1. **Data Retrieval**:  
   - The workflow starts by fetching product data (ID and IMAGE URL) from a Google Sheets document.  
   - Only rows without a "DONE" marker are processed to avoid duplicates.  

2. **Background Removal**:  
   - Each product image URL is sent to the **BackgroundCut API**, which removes the background and returns the edited image.  

3. **File Handling**:  
   - The processed image is uploaded to an **FTP server** with the original filename preserved.  
   - A new URL for the edited image is generated and assigned to the product.  

4. **WooCommerce Update**:  
   - The product in WooCommerce is updated with the new image URL.  

5. **Sheet Update**:  
   - The Google Sheet is marked as "DONE" for the processed row, and the new image URL is recorded.  

6. **Batch Processing**:  
   - The workflow loops through all rows in the sheet until all products are processed.  

---  

### **Set Up Steps**  
1. **Prepare the Google Sheet**:  
   - Clone the provided [Google Sheet template](https://docs.google.com/spreadsheets/d/1DxiZTvam_4oHHnZVBj_3K3pmWRld8T7l2v_DMuGsqss/edit?usp=sharing).  
   - Fill in the **ID** (product ID) and **IMAGE** (original image URL) columns.  

2. **API & Credentials Setup**:  
   - Get an **API key** from [BackgroundCut.co](https://backgroundcut.co).  
   - Configure the **HTTP Request node** ("Remove from Image URL") with:  
     - **Header Auth**: `Authorization` = `API_KEY`.  
   - Set up WooCommerce API credentials in the **"Update product" node**.  

3. **FTP Configuration**:  
   - Replace `YOUR_FTP_URL` in the **"New Image Url" node** with your FTP/CDN base URL.  
   - Ensure FTP credentials are correctly set in the **FTP node**.  

4. **Execution**:  
   - Run the workflow manually via **"When clicking ‘Execute workflow’"**.  
   - The process automatically handles background removal, file upload, and WooCommerce updates.  


----
### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, WooCommerce, FTP

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
