# 🎬 Generate Shopify product listings from images with Gemini AI and Airtable

> ⚡ **1,803 views** · 🎬 [Content Creation & Video](../)

## Description

# Shopify Digital Product Automation
(from just and image to complete Shopify product page.)

This **Shopify Digital Product Automation** is an advanced **n8n-powered workflow** that leverages **AI (Google Gemini)**, **Airtable**, and **Shopify API** to generate product details from images and automatically post them to Shopify. It fully automates the process — from uploading images to publishing Shopify products — with minimal manual effort.  

---

## 💡 Key Advantages
Our Shopify Digital Product Automation offers five core advantages:

- 🔗 **Shopify Product Sync** — Automatically posts product details including title, description, SEO fields, and matched category to Shopify.  
- ✍️ **AI-Powered Product Generation** — Gemini analyzes uploaded images and generates engaging, SEO-friendly product titles, descriptions, and metadata.  
- 🗂️ **Structured Output** — Outputs JSON-ready product data compatible with Shopify, ensuring smooth automation.  
- 📄 **Airtable Integration** — Tracks uploaded images, analyzed data, and generated products to prevent duplication.  
- 📤 **End-to-End Automation** — Handles the complete workflow from image upload to Shopify posting without manual intervention.  

---

## ⚙️ How It Works
The workflow follows a **step-by-step automated process**:

### Step-by-Step Process
1. **Upload Images** – Add your digital artwork or poster images to Google Drive and record them in Airtable.  
2. **Image Analysis** – AI fetches new images and analyzes visual elements like characters, series, poster text, and style.  
3. **Store Analysis Results** – Updates analyzed data in Airtable and marks images as `Used`.  
4. **Fetch Shopify Collections** – Retrieves current collections from your Shopify store for category matching.  
5. **Generate Product Details** – Gemini generates product title, description, matched category, SEO page title, meta description, and URL handle.  
6. **Save Generated Products** – Stores generated product details in Airtable and marks them as `generated`.  
7. **Post Products to Shopify** – Automatically creates new products in Shopify using the API.  
8. **Update Status** – Marks products as `posted` in Airtable after successful posting.  

---

## 🛠️ Setup Steps

### Required Node Configuration
To implement this workflow, configure the following n8n nodes:

- **Trigger Node** – Start workflow manually or via scheduler.  
- **Airtable Node** – Fetch raw images and store processed product details.  
- **Google Drive Node** – Access image files.  
- **HTTP Request Node** – Fetch Shopify collections.  
- **Code Node** – Refine AI outputs and format product data.  
- **Split & Limit Nodes** – Process images and products in batches.  
- **LangChain / Gemini Node** – Generate product titles, descriptions, and SEO data.  
- **Shopify Node** – Create products via Shopify API.  
- **Status Update Node** – Update Airtable with processing and posting status.  

---

### 🔐 Credentials Required
Before running the workflow, ensure you have the following credentials configured:

- **Shopify Access Token** – For posting products and fetching collections.  
- **Gemini API Key** – For AI-powered product generation.  
- **Airtable API Key** – For storing and tracking workflow data.  
- **Google Drive OAuth** – To access image files.  

---

## 👤 Ideal For
This automation workflow is designed for:

- Shopify store owners managing hundreds of digital products  
- Ecommerce teams automating product listings  
- Marketing teams needing scalable, AI-driven product content workflows  

---

## 💬 Bonus Tip
The workflow is **fully modular** and customizable. You can extend it to:  

- Automatically assign prices or discounts  
- Multi-language product description generation  
- Social media promotion of new products  
- Email campaign integration  

All extensions can be implemented within the **same n8n flow**, making it a complete digital product automation solution.

## 🔗 Nodes Used

Airtable, HTTP Request, Google Drive, Shopify, Basic LLM Chain, Auto-fixing Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
