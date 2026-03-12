# 🎬 Generate & edit images with OpenAI GPT-Image-1 and share via Telegram

> ⚡ **2,175 views** · 🎬 [Content Creation & Video](../)

## Description

# AI Image Generator & Editor with GPT-4 Vision - Complete Workflow

## Template Description

**Transform text prompts into stunning images or edit existing visuals using OpenAI's latest GPT-4 Vision model through an intuitive web form interface.**

This comprehensive n8n automation provides three powerful image generation modes:

### 🎨 **Text-to-Image Generation**
Simply enter a descriptive prompt and generate high-quality images from scratch using OpenAI's `gpt-image-1` model. Perfect for creating original artwork, concepts, or visual content.

### 🖼️ **Image-to-Image Editing** 
Upload an existing image file and transform it based on your text prompt. The AI analyzes your input image and applies modifications while maintaining the original structure and context.

### 🔗 **URL-Based Image Editing**
Provide a direct URL to any online image and edit it with AI. Great for quick modifications of web images or collaborative workflows.

## Key Features

### **Smart Input Processing**
- **Flexible Form Interface**: User-friendly web form with authentication
- **Multiple Input Methods**: File upload, URL input, or text-only generation
- **Quality Control**: Selectable quality levels (low, medium, high)
- **Format Support**: Accepts PNG, JPG, and JPEG formats

### **Advanced AI Integration**
- **Latest GPT-4 Vision Model**: Uses `gpt-image-1` for superior results
- **Intelligent Switching**: Automatically detects input type and routes accordingly
- **Context-Aware Editing**: Maintains image coherence during modifications
- **Customizable Parameters**: Control size (1024x1024), quality, and generation settings

### **Dual Storage Options**
- **Google Drive Integration**: Automatic upload with public sharing permissions
- **ImgBB Hosting**: Alternative cloud storage for instant public URLs
- **File Management**: Organized storage with timestamp-based naming

### **Instant Telegram Delivery**
- **Real-time Notifications**: Results sent directly to your Telegram chat
- **Rich Media Messages**: Includes generated image with prompt details
- **Quick Access Links**: Direct links to view and download results
- **Markdown Formatting**: Clean, professional message presentation

## Technical Workflow

1. **Form Submission** → User submits prompt and optional image
2. **Smart Routing** → System detects input type (text/file/URL)
3. **AI Processing** → OpenAI generates or edits image based on mode
4. **Binary Conversion** → Converts base64 response to downloadable file
5. **Cloud Upload** → Stores in Google Drive or ImgBB with public access
6. **Telegram Delivery** → Sends result with viewing links and metadata

## Perfect For

- **Content Creators**: Generate unique visuals for social media and marketing
- **Designers**: Quick concept development and image variations
- **Developers**: Automated image processing for applications
- **Teams**: Collaborative image editing and sharing workflows
- **Personal Use**: Transform ideas into visual content effortlessly

## Setup Requirements

- **OpenAI API Key**: Access to GPT-4 Vision model
- **Google Drive API** (optional): For Google Drive storage
- **ImgBB API Key** (optional): For alternative image hosting
- **Telegram Bot**: For result delivery
- **Basic Auth Credentials**: For form security

## What You Get

✅ Complete image generation and editing pipeline  
✅ Secure web form with authentication  
✅ Dual cloud storage options  
✅ Instant Telegram notifications  
✅ Professional result formatting  
✅ Flexible input methods  
✅ Quality control settings  
✅ Automated file management  

**Start creating AI-powered images in minutes with this production-ready template!**

---

**Tags**: #AI #ImageGeneration #OpenAI #GPT4 #ImageEditing #Telegram #GoogleDrive #Automation #ComputerVision #ContentCreation

## 🔗 Nodes Used

HTTP Request, Telegram, Google Drive, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
