# 🎬 Generate AI images from text prompts with Gemini 2.0, Google Sheets & Drive

> ⚡ **5,383 views** · 🎬 [Content Creation & Video](../)

## Description

![Screenshot 20250818 at 1.56.53 PM.png](fileId:2134)

**This n8n template demonstrates how to automate the creation of high-quality visual content using AI. The workflow takes simple titles from a Google Sheets spreadsheet, generates detailed artistic prompts using AI, creates photorealistic images, and manages the entire process from data input to final delivery.**

**Use cases are many**: Perfect for digital marketers, content creators, social media managers, e-commerce businesses, advertising agencies, and anyone needing consistent, high-quality visual content for marketing campaigns, social media posts, or brand materials!

### Good to know

- The Gemini 2.0 Flash Exp image generation model used in this workflow may have geo-restrictions. 
- The workflow processes one image at a time to ensure quality and avoid rate limiting.
- Each generated image maintains high consistency with the source prompt and shows minimal AI artifacts.

### How it works

1. **Automated Trigger**: A schedule trigger runs every minute to check for new entries in your Google Sheets spreadsheet.

2. **Data Retrieval**: The workflow fetches rows from your Google Sheets document, specifically looking for entries with "pending" status.

3. **AI Prompt Generation**: Using Google Gemini, the workflow takes simple titles and transforms them into detailed, artistic prompts for image generation. The AI considers:
   - Specific visual elements, styles, and compositions
   - Natural poses, interactions, and environmental context
   - Lighting conditions and mood settings
   - Brand consistency and visual appeal
   - Proper aspect ratios for different platforms

4. **Text Processing**: A code node ensures proper JSON formatting by escaping newlines and maintaining clean text structure.

5. **Image Generation**: Gemini's advanced image generation model creates photorealistic images based on the detailed prompts, ensuring high-quality, consistent results.

6. **File Management**: Generated images are automatically uploaded to a designated folder in Google Drive with organized naming conventions.

7. **Public Sharing**: Images are made publicly accessible with read permissions, enabling easy sharing and embedding.

8. **Database Update**: The workflow completes by updating the Google Sheets with the generated image URL and changing the status from "pending" to "posted", creating a complete audit trail.

### How to use

1. **Setup**: Ensure you have the required Google Sheets document with columns for ID, prompt, status, and imageUrl.

2. **Configuration**: Update the Google Sheets document ID and folder IDs in the respective nodes to match your setup.

3. **Activation**: The workflow is currently inactive - activate it in n8n to start processing.

4. **Data Input**: Simply add new rows to your Google Sheets with titles and set status to "pending" - the workflow will automatically process them.

5. **Monitoring**: Check the Google Sheets for updated status and image URLs to track progress.

### Requirements

- **Google Gemini API** account for LLM and image generation capabilities
- **Google Drive** for file storage and management
- **Google Sheets** for data input and tracking
- **n8n instance** with proper credentials configured

### Customizing this workflow

**Content Variations**: Try different visual styles, seasonal themes, or trending designs by modifying the AI prompt in the LangChain agent.

**Output Formats**: Adjust the aspect ratio or image specifications for different platforms (Instagram, Pinterest, TikTok, Facebook ads, etc.).

**Integration Options**: Replace the schedule trigger with webhooks for real-time processing, or add notification nodes for status updates.

**Batch Processing**: Modify the limit node to process multiple items simultaneously, though be mindful of API rate limits.

**Quality Control**: Add additional validation nodes to ensure generated images meet quality standards before uploading.

**Analytics**: Integrate with analytics platforms to track image performance and engagement metrics.

This workflow provides a complete solution for automated visual content creation, perfect for businesses and creators looking to scale their visual content production while maintaining high quality and consistency across all marketing materials.

## 🔗 Nodes Used

Google Sheets, Google Drive, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
