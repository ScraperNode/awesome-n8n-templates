# 🎬 WordPress auto-blogging pro - content automation machine for SEO topics

> ⚡ **5,231 views** · 🎬 [Content Creation & Video](../)

## Description

The best content automation in the market! This advanced workflow not only creates and publishes **SEO-optimized blog posts** to your **WordPress website** but also **backs up all content and images** to a designated folder in your Google Drive. In addition, It generates **a unique image for each chapter and a featured image for the overall article**, and it automatically collects internal website links—seamlessly inserting them throughout each chapter and the entire article. This integrated approach enhances on-page SEO, improves navigation, and streamlines your content creation process, saving you time while ensuring your work is securely stored.

![Screenshot 20250216 at 8.40.00 PM.png](fileId:944)
![Screenshot 20250217 at 12.48.42 AM.png](fileId:945)


## How it works

1. Triggers upon adding a new row to a Google Sheets.
2. Generates a full blog post by writing content based on customizable parameters such as topic, target audience, length, style, and seed keyword.
3. Generates and adds images for each chapter as well as a featured image for the article.
4. Gathers internal website links and strategically embeds them within each chapter and throughout the article, boosting SEO and enhancing user navigation.
5. Publishes the blog post directly to your WordPress website.
6. Saves all content (blog post and images) to Google Drive, organizing them in a folder named after the blog post title.


## Unique features

1. **Full Automation:** The workflow is designed to be 100% automated. Once imported and configured, it can run without manual intervention.
2. **Simple Activation:** It can be easily triggered through the Google Spreadsheets interface. You simply add a new row to a Google Sheet.
3. **Customization Options:** Offers a wide array of customization options, including topic, category, target audience, word count, number of chapters, length of introduction and conclusion, and writing style. It also allows for the inclusion of calls-to-action (CTAs) and company/product introductions.
4. **Automatic Content Saving:** After writing a blog post, all content and images are automatically saved to Google Drive, preventing data loss. The folder is even named after the title of the blog post.
5. **SEO-Optimized Content:** It's designed to create content optimized for SEO using seed keywords.
6. **AI Model Flexibility:** It’s super easy to switch between different AI models through the Open Router node.
7. **Rate Limit Handling:** Includes "Wait" nodes to avoid rate limits.
8. **Internal Link Limit:** Limits the number of internal links to 20 by default.


## Set up steps

1. **Install the workflow template:** Import the JSON file into your n8n instance.
2. **Connect the workflow to your accounts**: This includes linking your WordPress website, Google Drive, and AI models (such as OpenAI GPT-4o).
3. **Configure the Google Sheet**: Ensure your Google Sheet is set up to trigger the workflow upon adding a new row and that the input data is correctly formatted.
4. **Customize the workflow**: Adjust parameters like topic, target audience, and writing style to match your specific content needs. Optimize prompts for best results.
5. **Test the workflow**: Use low-cost AI models and image settings initially to ensure everything runs smoothly.
6. **Tailor Further as Needed:** Modify workflow elements to align perfectly with your needs and content strategy.

## 🔗 Nodes Used

Edit Image, HTTP Request, Google Drive, Wordpress, Google Docs, Markdown

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
