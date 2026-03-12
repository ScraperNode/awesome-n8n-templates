# 🎬 Automate SEO-Optimized WordPress posts with AI & Google Sheets

> ⚡ **56,231 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow automates the process of creating a **complete SEO-optimized blog post**, including generating content, titles, images, and meta tags, and publishing it on WordPress. It leverages **AI models** (like DeepSeek and OpenRouter) for content generation and SEO optimization, and integrates with **Google Sheets**, **WordPress**, and **OpenAI** for image generation. 

This is a powerful tool for automating the creation and optimization of blog posts, saving time and ensuring high-quality, SEO-friendly content. It integrates multiple tools and AI models to deliver a seamless content creation experience.

Below is a breakdown of the workflow:

---

#### **1. How It Works**
The workflow is designed to streamline the creation of SEO-friendly blog posts. Here's how it works:

1. **Trigger**: The workflow starts with a **Manual Trigger** node, which initiates the process when the user clicks "Test workflow."
2. **Fetch Context**: The **Google Sheets** node retrieves the blog post context (e.g., topic, keywords) from a predefined Google Sheet.
3. **Generate Content**:
   - The **Generate Article** node uses an AI model (DeepSeek) to create an SEO-friendly blog post based on the fetched context.
   - The **Generate Title** node creates a compelling, keyword-rich title for the blog post.
4. **Publish to WordPress**:
   - The **Add Draft to WP** node creates a draft post in WordPress with the generated content and title.
5. **Generate and Upload Image**:
   - The **Generate Image** node uses OpenAI to create a realistic, blog-appropriate image.
   - The **Upload Image** node uploads the image to WordPress media.
   - The **Set Image** node associates the uploaded image as the featured image for the blog post.
6. **SEO Optimization**:
   - The **SEO Expert** node analyzes the blog post and generates optimized meta titles and descriptions using an AI model (OpenRouter).
   - The **Set Metatag** node updates the WordPress post with the generated meta tags.
7. **Update Google Sheets**:
   - The **Update Sheet** and **Finish Work** nodes update the Google Sheet with the post's details, including the URL, title, and metadata.

---

#### **2. Set Up Steps**
To set up and use this workflow in n8n, follow these steps:

1. **Google Sheets Setup**:
   - Create a Google Sheet with columns for **ID POST**, **PROMPT**, **TITLE**, **URL**, **METATITLE**, and **METADESCRIPTION**.
   - Link the Google Sheet to the **Get Context** node by providing the **Document ID** and **Sheet Name**.

2. **WordPress Integration**:
   - Set up WordPress credentials in n8n for the **Add Draft to WP**, **Upload Image**, and **Set Image** nodes.
   - Ensure the WordPress site is accessible via its REST API.

3. **AI Model Configuration**:
   - Configure the **DeepSeek** and **OpenRouter** credentials in n8n for the **Generate Article**, **Generate Title**, and **SEO Expert** nodes.
   - Ensure the AI models are correctly set up to generate content and meta tags.

4. **Image Generation**:
   - Set up OpenAI credentials for the **Generate Image** node to create blog post images.

5. **Meta Tag Optimization**:
   - The **SEO Expert** node uses OpenRouter to generate meta titles and descriptions. Ensure the node is configured to analyze the blog post content and produce SEO-friendly tags.

6. **Workflow Execution**:
   - Click the **"Test workflow"** button to trigger the workflow.
   - The workflow will:
     - Fetch the blog post context from Google Sheets.
     - Generate the article, title, and image.
     - Publish the draft to WordPress.
     - Upload and set the featured image.
     - Generate and apply meta tags.
     - Update the Google Sheet with the post details.

7. **Optional Customization**:
   - Modify the workflow to include additional SEO optimizations, such as internal linking, keyword density analysis, or social media sharing.


---


### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Wordpress, Basic LLM Chain, Structured Output Parser, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
