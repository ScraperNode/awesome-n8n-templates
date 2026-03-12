# 🎬 Auto-generate virtual AI try-on images for WooCommerce with Gemini Nano Banana

> ⚡ **9,969 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow automates the creation of **AI-generated virtual try-on images** for fashion eCommerce stores. Instead of relying on expensive and time-consuming photoshoots, the system uses AI to generate realistic images of models wearing selected clothing items.

This n8n workflow **automates the process of generating AI-powered virtual try-on images for a WooCommerce store**. It fetches product data from a Google Sheet, uses the Fal.ai Nano Banana model to create an image of a model wearing the clothing item, and then updates both the Google Sheet and the WooCommerce product with the final generated image.

---

### **Advantages**

* ✅ **Cost Reduction**: Eliminates the need for professional photo shoots, saving on models, photographers, and studio expenses.
* ✅ **Time Efficiency**: Automates the entire workflow—from data input to product update—minimizing manual work.
* ✅ **Scalability**: Works seamlessly across large product catalogs, making it easy to update hundreds of products quickly.
* ✅ **Enhanced eCommerce Experience**: Provides shoppers with realistic previews of clothing on models, boosting trust and conversion rates.
* ✅ **Marketing Flexibility**: The generated images can also be repurposed for ads, social media, and promotional campaigns.
* ✅ **Centralized Management**: Google Sheets acts as the control center, making it easy to manage inputs and track results.


---

### **How It Works**

The workflow operates in a sequential, loop-based manner to process multiple products from a spreadsheet. Here is the logical flow:

1.  **Manual Trigger & Data Fetch:** The workflow starts manually (e.g., by clicking "Test workflow"). It first reads data from a specified Google Sheet, looking for rows where the "IMAGE RESULT" column is empty.

2.  **Loop Processing:** It loops over each row of data fetched from the sheet. Each row should contain URLs for a model image and a product image, along with a WooCommerce product ID.

3.  **API Request to Generate Image:** For each item in the loop, the workflow sends a POST request to the Fal.ai Nano Banana API. The request includes the two image URLs and a prompt instructing the AI to create a photo of the model wearing the submitted clothing item.

4.  **Polling for Completion:** The AI processing is asynchronous. The workflow enters a polling loop: it waits for 60 seconds and then checks the status of the processing request. If the status is not `COMPLETED`, it waits and checks again. This loop continues until the image is ready.

5.  **Fetching and Storing the Result:** Once the status is `COMPLETED`, the workflow retrieves the URL of the generated image, downloads the image file, and uploads it to a designated folder in Google Drive.

6.  **Updating Systems:** The workflow then performs two crucial update steps:
    *   It updates the original Google Sheet row, writing the URL of the final generated image into the "IMAGE RESULT" column.
    *   It updates the corresponding product in WooCommerce, adding the generated image to the product's gallery.

7.  **Loop Continuation:** After processing one item, the workflow loops back to process the next row in the Google Sheet until all items are complete.

---

### ** Set Up Steps**

To make this workflow functional, you need to configure three main connections:

**Step 1: Prepare the Google Sheet**
*   Create a Google Sheet with the following columns: `IMAGE MODEL`, `IMAGE PRODUCT`, `PRODUCT ID`, and `IMAGE RESULT`.
*   Populate the first three columns for each product. The `IMAGE RESULT` column must be left blank; the workflow will fill it automatically.
*   In the n8n workflow, configure the "Google Sheets" node to point to your specific Google Sheet and worksheet.

**Step 2: Configure the Fal.ai API Key**
*   Create an account at [fal.ai](https://fal.ai/) and obtain your API key.
*   In the n8n workflow, locate the three "HTTP Request" nodes named "Get Url image", "Get status", and "Create Image".
*   Edit the credentials for these nodes (named "Fal.run API") and update the `Value` field in the Header Auth to be `Key YOURAPIKEY` (replacing `YOURAPIKEY` with your actual key).

**Step 3: Set Up WooCommerce API**
*   Ensure you have the API keys (Consumer Key and Consumer Secret) for your WooCommerce store's REST API.
*   In the n8n workflow, locate the "WooCommerce" node.
*   Edit its credentials and provide the required information: your store's URL and the API keys. This allows the workflow to authenticate and update your products.

---


### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, WooCommerce

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
