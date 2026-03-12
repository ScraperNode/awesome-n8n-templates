# 🎬 Automate content generator for WordPress with DeepSeek R1

> ⚡ **46,712 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow is designed to generate SEO-friendly content with DeepSeek R1 (or V3), publish it on WordPress, and update a Google Sheets document with the details of the created post. Below is a detailed analysis of what each node in the workflow does:

---
### **How It Works**
1. **Triggering the Workflow**:
   - The workflow starts with a **Manual Trigger** node, which is activated when the user clicks "Test workflow" in the n8n interface.

2. **Fetching Data**:
   - The **Get Ideas** node retrieves data from a Google Sheets document. It reads a specific sheet and filters the data based on the "ID POST" column, returning the first matching row.

3. **Setting the Prompt**:
   - The **Set your prompt** node extracts the `PROMPT` field from the Google Sheets data and assigns it to a variable for use in subsequent steps.

4. **Generating Content**:
   - The **Generate article** node uses an AI model (DeepSeek) to create an SEO-friendly article based on the prompt. The article includes an introduction, 2-3 chapters, and a conclusion, formatted in HTML.
   - The **Generate title** node uses the same AI model to generate a concise, SEO-optimized title for the article.

5. **Publishing on WordPress**:
   - The **Create post on WordPress** node creates a new draft post on WordPress using the generated title and article content.

6. **Generating and Uploading an Image**:
   - The **Generate Image** node creates a photorealistic image based on the article title using an AI model (OpenAI).
   - The **Upload image** node uploads the generated image to WordPress as a media file.
   - The **Set Image** node assigns the uploaded image as the featured image for the WordPress post.

7. **Updating Google Sheets**:
   - The **Update Sheet** node updates the original Google Sheets document with the post details, including the title, post ID, creation date, and row number.

---

### **Set Up Steps**
1. **Configure Google Sheets Integration**:
   - Set up the **Google Sheets** node to connect to your Google account and specify the document ID and sheet name to read from and update.

2. **Set Up AI Models**:
   - Configure the **OpenAI** nodes (for generating the article, title, and image) with the appropriate API credentials and model settings (e.g., `deepseek-reasoner` for text generation).

3. **Configure WordPress Integration**:
   - Set up the **WordPress** node with your WordPress site's API credentials to allow creating posts and uploading media.

4. **Define the Prompt and Content Structure**:
   - In the **Set your prompt** node, ensure the `prompt` variable is correctly mapped to the data from Google Sheets.
   - In the **Generate article** and **Generate title** nodes, define the instructions for the AI model to generate the desired content.

5. **Set Up Image Generation**:
   - Configure the **Generate Image** node with the appropriate prompt and image settings (e.g., size, quality, style).

6. **Configure HTTP Requests for Media Upload**:
   - Set up the **Upload image** and **Set Image** nodes to use the WordPress REST API for uploading and assigning the featured image.

7. **Map Data for Google Sheets Update**:
   - In the **Update Sheet** node, map the relevant fields (e.g., title, post ID, date) to the appropriate columns in the Google Sheets document.

8. **Test and Activate the Workflow**:
   - Run the workflow manually to ensure all steps execute correctly.
   - Once verified, activate the workflow for automated execution.

---

### **Overall purpose of the workflow**
This workflow automates the creation of SEO-friendly content for a WordPress blog. Starting from a prompt extracted from a Google Sheets document, it generates an article, a title, and an image, publishes the post on WordPress, and updates the Google Sheets document with the details of the created post. This process is useful for blog managers who want to automate content creation and publishing.

----
### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Wordpress, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
