# 🎬 Place products on AI generated backgrounds with Google Imagen, Ideogram & Placid

> ⚡ **417 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow transforms **product images into professional marketing visuals** by combining **AI background generation**, **intelligent copywriting**, and **automated design templating**. Upload a product photo, describe your desired scene, and get publication-ready assets for Meta ads, email campaigns, social media, and more.

The system uses **fal.ai's advanced AI models** (Google Imagen 4, Ideogram v3, Time-of-Day relighting) to create stunning product scenes while **Placid** handles professional text overlay and final composition.

![Walkthrough](https://img.youtube.com/vi/pPQ1ZrUSsBg/maxresdefault.jpg)

[Watch a quick video walkthrough of the workflow](https://youtu.be/pPQ1ZrUSsBg)

## Benefits of this Workflow

* **🎯 Product-Focused**: Preserves product details while completely transforming backgrounds
* **🤖 Multi-AI Pipeline**: Combines 4 different AI models for optimal results:
 * Google Imagen 4 for style reference generation
 * Ideogram v3 for precise background replacement
 * Time-of-Day AI for realistic lighting adjustment
 * GPT-4 for intelligent copywriting
* **📱 Multi-Platform Ready**: Creates assets for Meta ads, email headers, social posts, newsletters
* **✍️ Smart Copywriting**: Analyzes your website to generate compelling headlines and bullet points
* **🎨 Template Control**: Uses Placid for professional text placement and branding
* **⚡ Form-Based Interface**: Simple web form input - no technical knowledge required
* **☁️ Cloud Storage**: Automatically saves final assets to Google Drive

## How It Works

1. **Input Collection**: Web form captures product image, scene description, website URL, and lighting preference
2. **AI Content Generation**: 
  * Background prompt agent creates detailed scene descriptions
  * Copywriting agent analyzes your website and generates marketing copy
3. **Multi-Stage Image Processing**:
  * Creates style reference image with Google Imagen 4
  * Replaces background while preserving product with Ideogram v3
  * Enhances lighting realism with Time-of-Day AI
4. **Professional Composition**: Placid overlays marketing copy using customizable templates
5. **Delivery**: Final marketing asset saved to Google Drive, ready for immediate use

## Setup Requirements

1. **API Credentials**:
  * **fal.ai account** (for AI image generation models)
  * **OpenAI API** (for copywriting intelligence)
  * **Placid account** (for template-based composition)
  * **Google Drive** (for asset storage)

2. **Placid Template**:
  * Create custom template matching your brand
  * Configure layer names: `subtitle`, `bullet1`, `bullet2`, `bullet3`, `image`

3. **Form Customization**:
  * Adjust form fields for your specific use cases
  * Modify AI prompts for your industry/brand voice

**Perfect for**: E-commerce brands, marketing agencies, content creators, small businesses wanting professional product visuals without expensive photography.

Follow on [LinkedIn](https://www.linkedin.com/in/danielsetzermann/) or on [my website](https://https://www.danielsetzermann.com/) if you want to keep updated on new workflows.

## 🔗 Nodes Used

HTTP Request, Google Drive, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
