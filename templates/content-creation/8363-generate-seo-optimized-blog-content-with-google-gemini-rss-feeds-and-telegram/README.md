# 🎬 Generate SEO-optimized blog content with Google Gemini, RSS feeds and Telegram

> ⚡ **682 views** · 🎬 [Content Creation & Video](../)

## Description

### Workflow Objective

This n8n workflow automates the entire content creation process by monitoring specified RSS feeds for new articles. It then leverages Google Gemini AI to generate comprehensive, SEO-optimized blog posts inspired by these articles, creates unique cover images, and distributes the final content as a JSON file to stakeholders via Telegram. The primary goal is to automate the end-to-end content pipeline, saving significant time and ensuring a consistent output of high-quality content.

### Step-by-Step Breakdown

1.  **Monitor News Sources (RSS Triggers):**
    *   The workflow is triggered periodically (e.g., hourly, weekly) by multiple RSS Feed nodes that monitor sources like "Search Engine Journal" and "Tech Crunch" for new publications.

2.  **Prevent Duplicate Content (Deduplication):**
    *   For each new article fetched from the RSS feeds, the workflow checks an AWS DynamoDB database to see if the article's URL has been processed before.
    *   If the link already exists in the database, the process for that item is halted, and a debug notification is sent to Telegram via the "Telegram Debugger" node. This prevents the generation of duplicate content.

3.  **AI-Powered Content Generation (Gemini Content Generation):**
    *   If the article is new, its link is passed to a Google Gemini node.
    *   Using a highly detailed and structured prompt, Gemini generates a complete blog post in a specific JSON format. This output includes a title, meta description, SEO-friendly slug, a descriptive prompt for generating a cover image, and the full markdown body of the article (including an introduction, subheadings, conclusion, FAQ section, etc.).

4.  **Data Cleaning and Parsing (JSON Parser):**
    *   The raw text response from the AI is processed by a "Code" node. This custom script cleans the output—removing markdown code blocks, fixing potential syntax errors—and reliably parses it into a valid JSON object, ensuring the data is clean for subsequent steps.

5.  **Image Generation and Cloud Storage:**
    *   The `image_generation_prompt` from the parsed JSON is sent to another Google Gemini node configured for image generation, creating a 1200x630 cover image for the blog post.
    *   The newly created image is renamed using the `slug`.
    *   Finally, the image is uploaded to a cloud storage service like Cloudflare R2. If the upload fails, an error message is sent to Telegram.

6.  **Final Data Assembly and Distribution:**
    *   The generated text content is merged with the URL of the uploaded image to create the final, complete blog post data object.
    *   This entire data structure is converted into a JSON file, named using the format `[slug].json`.
    *   In the final step, this JSON file is sent as a document to designated recipients User via the Telegram nodes.

### Technologies and Services Used

*   **Trigger:** RSS Feed Reader
*   **Artificial Intelligence:** Google Gemini (for both text and image generation)
*   **Database:** AWS DynamoDB (for content deduplication)
*   **Cloud Storage:** Cloudflare R2 (S3-compatible)
*   **Notification & Distribution:** Telegram
*   **Data Processing:** n8n's native nodes (Merge, If, Set, Code)

## 🔗 Nodes Used

Telegram, S3, AWS DynamoDB, RSS Feed Trigger, Convert to File, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
