# 🎬 Generate Interior Moodboards with Claude/Gemini Agents, Hugging Face Image Generation, and PDF Export

> ⚡ **233 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 🎨 Template Overview

This comprehensive n8n workflow automates the complete process of generating professional interior design moodboards from concept to client delivery. Users submit a design brief through a form, and the system automatically generates 12 AI-powered images, compiles them into a beautifully formatted two-page PDF moodboard, and emails the final deliverable.

![Screenshot 20251120 091956.png](fileId:3404)

**Key Features:**
- Form-based design brief submission
- AI-powered image prompt generation (12 detailed prompts per project)
- Automated image generation via Hugging Face API
- Nextcloud cloud storage with public URL sharing
- Professional two-page HTML/PDF moodboard creation
- Automated email delivery with PDF attachment

**Technologies Used:** Claude Sonnet 4 (OpenRouter), Google Gemini 2.5 Pro, Hugging Face FLUX.1-schnell, Nextcloud, Gotenberg PDF Service, Gmail

---

## ⚙️ Self-Hosted Requirements

This template requires the following self-hosted or third-party services:

- **Nextcloud Instance** - For cloud file storage and public URL generation
- **Gotenberg PDF Service** - For HTML to PDF conversion (can be self-hosted via Docker)
- **OpenRouter API Access** - For Claude Sonnet 4 AI agent
- **Google Gemini API Access** - For secondary AI processing
- **Hugging Face API Access** - For FLUX.1-schnell image generation
- **Gmail Account** - For email delivery (or any SMTP service)

---

## 📋 Setup Instructions

### Step 1: Configure API Credentials

1. **OpenRouter (Claude Sonnet 4)**
   - Sign up at [openrouter.ai](https://openrouter.ai)
   - Generate an API key
   - Add credentials to the "OpenRouter Chat Model" node

2. **Google Gemini API**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create an API key
   - Add credentials to the "Google Gemini Chat Model1" node

3. **Hugging Face API**
   - Register at [huggingface.co](https://huggingface.co)
   - Generate an access token from Settings → Access Tokens
   - Add credentials to the "Image Generator" node using HTTP Header Auth
   - Header name: `Authorization`, Value: `Bearer YOUR_TOKEN`

4. **Nextcloud**
   - Set up a Nextcloud instance or use a hosted provider
   - Generate an app password from Settings → Security
   - Configure credentials in all Nextcloud nodes:
     - "Create a folder"
     - "Upload Image"
     - "Share a file"

5. **Gotenberg PDF Service**
   - Self-host using Docker: `docker run --rm -p 3000:3000 gotenberg/gotenberg:8`
   - Or use a hosted instance
   - Update the URL in the "PDF creator" node
   - Configure HTTP Basic Auth credentials if required

6. **Gmail**
   - Enable 2-Factor Authentication on your Google account
   - Generate an App Password from Google Account settings
   - Add OAuth2 credentials to the "Send PDF" node

### Step 2: Customize Workflow Settings

1. **Email Extractor Node**
   - Review the `stripPlus` variable (default: `true`)
   - This removes "+tag" portions from email addresses for folder naming

2. **Nextcloud Folder Structure**
   - Default path: `/moodboard/{username}/`
   - Modify in "Create a folder" node if needed

3. **Image Generator Settings**
   - Model: FLUX.1-schnell (fast generation, good quality)
   - Adjust model in "Image Generator" node if needed
   - Alternative models: FLUX.1-dev, Stable Diffusion XL

4. **PDF Generation Settings**
   - Default timeout: 360 seconds
   - Page size: A4 (210mm × 297mm)
   - Adjust in "PDF creator" node headers if needed

### Step 3: Test the Workflow

1. **Activate the Form**
   - Open the "Moodboard Form" node
   - Copy the webhook URL
   - Access the form in your browser

2. **Submit a Test Request**
   - Fill in the form fields:
     - **Title**: Short, descriptive name (e.g., "Modern Minimalist Bedroom")
     - **Description**: Detailed design brief with colors, materials, mood, lighting
     - **Email**: Your test email address
   - Submit and monitor workflow execution

3. **Verify Each Stage**
   - Check Nextcloud folder creation
   - Monitor image generation progress (12 images)
   - Review HTML moodboard generation
   - Confirm PDF creation
   - Check email delivery

### Step 4: Configure Form Embedding (Optional)

Embed the form on your website:

```html
&lt;iframe 
  src="YOUR_N8N_FORM_WEBHOOK_URL" 
  width="100%" 
  height="800" 
  frameborder="0"&gt;
&lt;/iframe&gt;
```

---

## 🔄 Workflow Structure

### **1. Form Input & Data Extraction**
- **Moodboard Form** - Collects project title, description, and user email
- **Email Extractor** - Extracts username from email for folder organization

### **2. Storage Setup**
- **Create a Folder** - Creates personalized Nextcloud directory using email username

### **3. AI Concept Generation**
- **Conceptualization Agent** (Claude Sonnet 4) - Analyzes design brief and generates 12 detailed image prompts (300-500 words each)
  - Images 1-11: Individual design elements (furniture, materials, details, styling)
  - Image 12: Comprehensive 3D rendered view integrating all elements

### **4. Image Processing Loop**
- **Concept Splitter** - Separates 12 prompts into individual items
- **Loop Over Items** - Processes each prompt sequentially:
  - **Image Generator** - Sends prompt to Hugging Face FLUX.1-schnell API
  - **Upload Image** - Stores generated image in Nextcloud folder
  - **Share a File** - Creates public shareable URL
  - **Set Image Title and URL** - Formats data for aggregation

### **5. URL Collection**
- **URL Aggregate** - Combines all 12 public image URLs
- **Clean URLs** - Extracts and formats URLs into a structured list

### **6. Moodboard Compilation**
- **Moodboard Generator Agent** (Google Gemini 2.5 Pro) - Creates professional two-page HTML document:
  - **Page 1**: Visual moodboard with all 12 images (Image #12 prominently featured 2-3x larger)
  - **Page 2**: Administrative summary with design overview, color palette, materials, and project details

### **7. PDF Generation & Delivery**
- **Binary Converter** - Transforms HTML to base64-encoded binary format
- **PDF Creator** - Converts HTML to print-ready PDF via Gotenberg service
- **Send PDF** - Emails final moodboard PDF to user

---

## 🎯 Node Descriptions

### **Moodboard Form**
Collects moodboard generation requests for any design topic. Users input a title, detailed description (colors, materials, patterns, textures, lighting), and email address for delivery.

### **Email Extractor**
Extracts the username portion from email addresses, optionally stripping "+tags" for clean folder naming and user identification.

### **Create a Folder**
Creates a dedicated Nextcloud folder using the extracted email username, organizing moodboard outputs by user.

### **Conceptualization Agent**
AI agent that analyzes design briefs to generate 12 detailed image prompts (300-500 words each). Performs conceptual analysis of styles, colors, materials, and spatial requirements, outputting structured JSON.

### **Concept Splitter**
Splits the 12 generated image prompts into individual items for parallel processing through the image generation pipeline.

### **Loop Over Items**
Processes each prompt sequentially, generating images, uploading to Nextcloud, and creating public URLs.

### **Image Generator**
Sends detailed prompts to Hugging Face FLUX.1-schnell API for AI-powered image generation, transforming written design concepts into high-quality visuals.

### **Upload Image**
Uploads each generated moodboard image to the user's Nextcloud folder with appropriate naming conventions.

### **Share a File**
Creates publicly shareable Nextcloud links for each uploaded image, enabling external viewing without authentication.

### **Set Image Title and URL**
Formats image metadata (title and URL) for downstream aggregation.

### **URL Aggregate**
Combines all 12 image URLs into a single consolidated output for moodboard compilation.

### **Clean URLs**
Extracts and formats URLs from the aggregated data into a clean, structured list with count.

### **Moodboard Generator Agent**
Transforms design concepts into professional two-page HTML moodboards. Analyzes project details and 12 image URLs, selecting appropriate visual styles. Creates artistic Page 1 with Image #12 as hero element, and comprehensive Page 2 with design documentation.

### **Binary Converter**
Prepares HTML for PDF conversion by transforming it into binary format with proper encoding and filename ("index.html") for Gotenberg compatibility.

### **PDF Creator**
Converts HTML moodboard into print-ready PDF with proper A4 dimensions, page breaks, and high-quality image resolution.

### **Send PDF**
Emails the finalized PDF moodboard to the user's submitted email address with project details and PDF attachment.

---

## 🎨 Customization Options

### Design Styles
The Moodboard Generator Agent automatically selects from 10 layout styles:
1. Modern Sectional Grid
2. Material Board Collage
3. Editorial Magazine
4. Clean Minimalist
5. Split-Screen Dramatic
6. Asymmetric Feature
7. Centered Showcase
8. Modular Block System
9. Organic Flow
10. Layered Depth

### Image Generation Models
Replace FLUX.1-schnell with alternatives in the "Image Generator" node:
- `black-forest-labs/FLUX.1-dev` - Higher quality, slower
- `stabilityai/stable-diffusion-xl-base-1.0` - Classic SD XL

### Email Templates
Customize the email message in the "Send PDF" node to include:
- Brand messaging
- Next steps
- Support contact information
- Pricing information

---

## 🐛 Troubleshooting

### Images Not Generating
- Verify Hugging Face API token is valid
- Check API rate limits and quotas
- Increase timeout in "Image Generator" node (default: unlimited)

### PDF Generation Fails
- Ensure Gotenberg service is accessible
- Verify HTML output contains all 12 image URLs
- Check timeout settings (default: 360s)
- Review Gotenberg logs for specific errors

### Nextcloud Upload Errors
- Confirm folder creation succeeded
- Verify Nextcloud credentials and permissions
- Check available storage space
- Ensure WebDAV is enabled

### Email Not Received
- Verify Gmail OAuth2 credentials
- Check spam/junk folders
- Confirm email address is valid
- Review Gmail API quotas

---

## 📊 Performance Notes

- **Average execution time**: 5-8 minutes (depends on image generation)
- **Image generation**: ~20-30 seconds per image (12 images = 4-6 minutes)
- **PDF generation**: ~30-60 seconds
- **Total data processed**: ~15-25 MB per workflow execution

---

## 🔐 Security Considerations

- Store all API keys in n8n credentials (never hardcode)
- Use environment variables for sensitive configuration
- Implement rate limiting on the form webhook
- Consider adding CAPTCHA to prevent abuse
- Regularly rotate API keys and passwords
- Use HTTPS for all external communications

---

## 📝 License & Attribution

This template is provided as-is for the n8n community. Feel free to modify and adapt to your needs.

**AI Models Used:**
- Claude Sonnet 4 (Anthropic via OpenRouter)
- Google Gemini 2.5 Pro (Google)
- FLUX.1-schnell (Black Forest Labs via Hugging Face)

---

## 🤝 Support & Contributions

For questions or improvements, please reach out through the n8n community forum or submit issues/PRs to enhance this template.

**Created by:** Jameson Kanakulya  
**Template Version:** 1.0  
**Last Updated:** November 2025

## 🔗 Nodes Used

HTTP Request, Nextcloud, Gmail, AI Agent, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
