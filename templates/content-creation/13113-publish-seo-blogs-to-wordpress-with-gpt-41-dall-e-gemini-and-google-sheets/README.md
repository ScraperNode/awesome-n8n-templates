# 🎬 Publish SEO blogs to WordPress with GPT-4.1, DALL-E, Gemini, and Google Sheets

> ⚡ **161 views** · 🎬 [Content Creation & Video](../)

## Description

Automatically publish blog content to WordPress with AI-generated branded images, internal linking, and client reporting using Google Sheets, OpenAI, and Gemini

### What this workflow does

This workflow receives written blog content from your content creation automation and handles the complete WordPress publishing process. It adds internal links to your content based on target keywords, generates 3 AI-powered branded images (thumbnail + 2 content images), uploads them to WordPress, inserts them into your article, publishes the complete blog with proper categories, updates tracking sheets, and notifies clients automatically.

Perfect for agencies managing multiple client blogs who want to eliminate manual publishing tasks while maintaining brand consistency and SEO optimization.

### Key features

**Intelligent internal linking:** Automatically analyzes your target keywords and adds up to 3 natural anchor links within the content to improve site SEO and user navigation

**AI image generation:** Creates 3 professional branded images using DALL-E based on your blog topic and brand colors - one thumbnail with overlay text and two supporting content images

**Automated WordPress publishing:** Publishes blogs with proper categories, sets featured images, and handles all WordPress REST API interactions without manual intervention

**Multi-client management:** Processes different projects based on individual client settings including image preferences, brand colors, and reporting requirements

**Tracking and reporting:** Updates Google Sheets with live URLs and publish dates, sends Discord notifications to project managers, and triggers client reporting workflows

### How it works

1. **Receives content from writing automation:** Triggered by your blog content creation workflow with title, body content, focus keyword, and client details

2. **Fetches project configuration:** Loads client-specific settings from Google Sheets including website URL, WordPress API credentials, image creation preferences, and brand guidelines

3. **Adds internal links:** Retrieves target keywords and URLs from project sheets, filters valid links, and uses Gemini AI to intelligently insert 3 contextual anchor links

4. **Generates branded images (if enabled):** Uses OpenAI GPT to create detailed image prompts based on blog topic and brand colors, then generates 3 images with DALL-E (thumbnail with text overlay + 2 content images)

5. **Uploads to WordPress media library:** Processes each image through a loop, uploads to WordPress, stores metadata including URLs and alt text

6. **Inserts images into content:** Uses Gemini AI to intelligently place images at strategic positions within the article while preserving existing HTML structure and anchor links

7. **Publishes to WordPress:** Creates the blog post with proper title, content, categories, and sets the thumbnail as featured image via REST API

8. **Updates tracking sheets:** Records the live blog URL and publish date in Google Sheets for project management

9. **Sends notifications:** Triggers Discord alerts for project managers and executes the Reporting Manager workflow for client communication via email, Slack, or WhatsApp

### Setup requirements

**Tools you'll need:**
- Active n8n instance (self-hosted or n8n Cloud)
- Google Sheets with OAuth access for project management
- WordPress site with REST API enabled and proper authentication
- OpenAI API key (for DALL-E image generation)
- Google Gemini API key (for content processing)
- Discord bot (optional, for team notifications)
- Blog Content Creation workflow (Part 1 - sold separately or built independently)

**Estimated setup time:** 30-40 minutes

### Configuration steps

1. **Add credentials in n8n:**
   - Google Sheets OAuth API
   - OpenAI API (for DALL-E image generation)
   - Google Gemini API (for AI content processing)
   - Discord Bot API (for notifications)
   - WordPress credentials (API tokens)

2. **Set up Project Central Sheet:**
   Create a master Google Sheet with these columns:
   - Client ID
   - Website URL
   - Blog API (WordPress auth token)
   - GMB Name (business name)
   - Image Creation (Yes/No)
   - Image Instructions (specific image guidelines)
   - Color and Font (brand colors in hex format)
   - Discord Channel ID
   - Project Manager Discord ID
   - On Page Sheet (URL to client's tracking sheet)
   - Project Information Sheet (URL to internal linking keywords sheet)
   - Categories (WordPress category IDs)
   
   Update the sheet URL in the "Fetch Project Configuration" node

3. **Create client-specific sheets:**
   For each client, maintain two sheets:
   
   **Sheet 1: TGT Keywords (for internal linking)**
   - Keywords column: Target keywords to link
   - Target Pages column: Full URLs to link to
   
   **Sheet 2: Content Requirement & Posting (for tracking)**
   - row_number: Unique identifier
   - Focus Keyword: Target SEO keyword
   - Content Topic: Blog title
   - Publish URLs: Live blog URL (auto-filled)
   - Published Date: Publish date (auto-filled)

4. **Configure WordPress authentication:**
   - Enable REST API on your WordPress site
   - Generate API authentication tokens
   - Update authorization values in these nodes:
     - "Upload to WordPress Media"
     - "Publish Blog with Featured Image"
     - "Set Thumbnail as Featured Image"
     - "Publish Blog without Images"

5. **Connect to Blog Creation workflow:**
   - Ensure your Blog Content Creation workflow (Part 1) triggers this workflow
   - The trigger should pass these workflow inputs:
     - Client ID
     - Blog S.NO. (row number)
     - Blog Title
     - Content (HTML formatted)
     - OnPage SEO (tracking sheet URL)
     - Focus Keyword

6. **Set up Reporting Manager (optional):**
   - Create or connect your client reporting workflow
   - Update the workflow ID in "Trigger Client Reporting Workflow" node
   - This sends automated reports to clients via email, Slack, or WhatsApp

7. **Test the workflow:**
   - Run your Blog Creation workflow manually with test data
   - Verify images generate correctly with brand colors
   - Check WordPress post publishes with featured image
   - Confirm tracking sheet updates
   - Test Discord notification delivery

### Use cases

**Marketing agencies:** Manage blog publishing for 10+ clients with different brand guidelines and WordPress sites from a single automation

**Content teams:** Eliminate 2-3 hours of manual work per blog by automating image creation, internal linking, and WordPress publishing

**SEO specialists:** Ensure consistent internal linking and proper category assignment across all published content

**Freelance writers:** Offer end-to-end blog services including branded image creation and WordPress publishing without manual intervention

**SaaS companies:** Maintain consistent blog publishing schedule across multiple product blogs with automated tracking and reporting

### Customization options

**Modify image generation:**
- Edit the "Generate Image Prompts with AI" node to change image style, dimensions, or prompt instructions
- Change DALL-E model or image size in "Generate Image with DALL-E" node

**Adjust internal linking:**
- Modify the "Add Internal Links to Content" agent prompt to change linking strategy (more/fewer links, different placement rules)

**Change notification channels:**
- Replace Discord with Slack, email, or webhook notifications
- Add multiple notification channels in parallel

**WordPress customization:**
- Add custom fields, tags, or metadata to published posts
- Integrate with WordPress plugins via REST API extensions

### Troubleshooting

**Images not generating:** Check OpenAI API key validity and account credits. Verify image prompt node receives content properly.

**WordPress publish fails:** Confirm REST API is enabled, authentication tokens are correct, and site URL is properly formatted with trailing slash.

**Internal links not appearing:** Ensure "TGT Keywords" sheet has valid URLs starting with "http" and filter node is working correctly.

**Tracking sheet not updating:** Verify Google Sheets OAuth connection and that row_number matches between sheets.

**Discord notification fails:** Check Discord bot permissions and channel ID accuracy.

### Resources

- [n8n documentation](https://docs.n8n.io)
- [WordPress REST API guide](https://developer.wordpress.org/rest-api/)
- [OpenAI DALL-E API](https://platform.openai.com/docs/guides/images)
- [Google Gemini API](https://ai.google.dev/docs)
- [Google Sheets API](https://developers.google.com/sheets/api)

### Important notes

- This workflow is specifically for blog publishing. To use it correctly, you must first have a Blog Content Creation workflow that generates the blog title, content, and required metadata.
- I have already shared a Blog Writing Automation workflow, which you can use directly for content creation before running this publishing workflow.
- Make sure the content creation workflow runs before this publishing workflow, as this setup depends on the generated output.

### Support

Need help or custom development?

📧 Email: [info@isawow.com  ](info@isawow.com  )
🌐 Website: [https://isawow.com/](https://isawow.com/)

---

## 🔗 Nodes Used

Google Sheets, HTTP Request, Discord, Execute Sub-workflow, Execute Workflow Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
