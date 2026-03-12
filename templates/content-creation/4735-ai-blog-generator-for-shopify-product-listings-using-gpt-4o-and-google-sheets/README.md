# 🎬 AI blog generator for Shopify product listings:  Using GPT-4o and Google Sheets

> ⚡ **10,197 views** · 🎬 [Content Creation & Video](../)

## Description

## 🧠 AI Blog Generator for Shopify Products using GPT-4o

The **AI Blog Generator** is an advanced automation workflow powered by **n8n**, integrating **GPT-4o** and **Google Sheets** to generate SEO-rich blog articles for Shopify products. It automates the entire process — from pulling product data, analyzing images for nutritional information, to producing structured HTML content ready for publishing — with zero manual writing.

---

### 💡 Key Advantages

- **🔗 Shopify Product Sync**  
  Automatically pulls product data (title, description, images, etc.) via Shopify API.

- **🤖 AI-Powered Nutrition Extraction**  
  Uses **GPT-4o** to intelligently analyze product images and extract nutritional information.

- **✍️ SEO Blog Generation**  
  GPT-4o generates blog titles, meta descriptions, and complete articles using both product metadata and extracted nutritional info.

- **🗂️ Structured Content Output**  
  Produces well-formatted HTML with headers, bullet points, and nutrition tables for seamless Shopify blog integration.

- **📄 Google Sheets Integration**  
  Tracks blog creation, manages retries, and prevents duplicate publishing using a centralized Google Sheet.

- **📤 Shopify Blog API Integration**  
  Publishes the generated blog to Shopify using a two-step blog + article API call.

---

### ⚙️ How It Works

1. **Manual Trigger**  
   Initiate the process using a test trigger or a scheduler.

2. **Fetch Products from Shopify**  
   Retrieves all product details including descriptions and images.

3. **Extract Product Images**  
   Splits and processes each image individually.

4. **OCR + Nutrition AI**  
   GPT-4o reads nutrition facts from product images. Skips items without valid info.

5. **Check Existing Logs**  
   References a Google Sheet to avoid duplicates and determine retry status.

6. **AI Blog Generation**  
   Creates a blog with headings, bullet points, intro, and a nutrition table.

7. **Shopify Blog + Article Posting**  
   Uses the Shopify API to publish the blog and its content.

8. **Update Google Sheet**  
   Logs the blog URL, HTML content, errors, and status for future reference.

---

### 🛠️ Setup Steps

- **Shopify Node**: Connects to your Shopify store and fetches product data.  
- **Split Out Node**: Divides product images for individual OCR processing.  
- **OpenAI Node**: Uses GPT-4o to extract nutrition data from images.  
- **If Node**: Filters for entries with valid nutrition information.  
- **Edit Fields Node**: Formats the product data for AI processing.  
- **AI Agent Node**: Generates SEO blog content.  
- **Google Sheets Nodes**: Reads and updates blog creation status.  
- **HTTP Request Nodes**: Posts the blog and article via Shopify’s API.

---

### 🔐 Credentials Required

- **Shopify Access Token** – For retrieving product data and posting blogs  
- **OpenAI API Key** – For GPT-4o-based AI generation and image processing  
- **Google Sheets OAuth** – For accessing the log sheet

---

### 👤 Ideal For

- Ecommerce teams looking to automate content for hundreds of products  
- Shopify store owners aiming to boost organic traffic through blogging  
- Marketing teams building scalable, AI-driven content workflows

---

### 💬 Bonus Tip

The workflow is modular. You can easily extend it with internal linking, language translation, or even social media sharing — all within the same **n8n** flow.

## 🔗 Nodes Used

Shopify, AI Agent, OpenAI Chat Model, Simple Memory, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
