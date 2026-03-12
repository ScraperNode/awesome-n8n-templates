# 🎬 Generate and host AI images on your CDN with Gemini Imagen 3 and Upload to URL

> ⚡ **2 views** · 🎬 [Content Creation & Video](../)

## Description

# 🎨 AI Image Generation & CDN Hosting Automation with Gemini Imagen 3

Streamline your creative production with this high-performance image generation and hosting pipeline. This workflow automates the transition from raw creative prompts to hosted assets, leveraging Gemini Imagen 3 for photorealistic visual generation and an automated Upload to URL sequence to deploy images directly to your CDN.

---

## 🎯 What This Workflow Does

This template is designed to handle two high-value commercial creative tasks via a single Webhook endpoint:

### 🌍 Pipeline 1: Localized Marketing Campaigns
Perfect for global brands, this path takes a master marketing image and recreates it with embedded text accurately translated into a target language. The system preserves your original branding, fonts, and visual hierarchy while ensuring localized messaging is sharp and professional.

### 🛍️ Pipeline 2: High-Fidelity Product Mockups
Generate photorealistic e-commerce assets instantly. By providing a product type and color scheme, Imagen 3 creates studio-quality mockups with realistic textures and lighting. This is ideal for visualizing new apparel, packaging, or merchandise without a physical photoshoot.

---

## ✨ Key Features

- **Automated Base64 Processing:** Includes custom logic to decode Gemini's base64 output into n8n binary files (PNG) automatically, removing manual file handling.
- **Direct CDN Deployment:** Uses the built-in **Upload to URL** node to PUT your generated images directly to a presigned URL, making them instantly available via a public link.
- **Intelligent Prompt Engineering:** Dedicated code nodes translate simple input parameters (like `jobType` or `targetLanguage`) into detailed, optimized prompts for the highest quality AI output.
- **Scalable Webhook Architecture:** Centralizes your image generation tasks into a single API endpoint that routes traffic based on your specific business needs.

---

## 💼 Perfect For

- **Digital Agencies:** Rapidly producing localized ad variants for international clients.
- **E-commerce Store Owners:** Visualizing custom products or "on-demand" merchandise.
- **Social Media Managers:** Creating consistent, high-quality visual content for daily posts.
- **Product Designers:** Prototyping colorways and branding on various item types.

---

## 🔧 What You'll Need

### Required Integrations

- **Google AI (Gemini) API Key:** Required for access to the Imagen 3.0 model.
- **CDN/Storage Provider:** Access to a service (like AWS S3 or Google Cloud Storage) that provides presigned PUT URLs for image hosting.

---

## ⚙️ Configuration Steps

1. **API Credentials:** Set up an HTTP Header Auth credential named `Google AI Header Auth` using your key from AI Studio.
2. **Endpoint Setup:** The template is pre-configured to use the `imagen-3.0-generate-001` predict endpoint.
3. **URL Mapping:** After import, update the Upload to URL nodes and response nodes with your specific CDN domain and presigned URL logic.

---

Ready to automate your creative assets? Import this template and connect your Gemini API key to start generating and hosting professional images in seconds!

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
