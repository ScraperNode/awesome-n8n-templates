# 🎬 Product concept to 3D showcase with Claude AI & DALL-E packaging design

> ⚡ **306 views** · 🎬 [Content Creation & Video](../)

## Description

This is an advanced n8n workflow for transforming product concepts into 3D showcase videos with AI packaging design and auto-rotation rendering.

## **Workflow Features:**

### **🎯 Core Capabilities:**
1. **AI Product Concept Generation** - Uses Claude Sonnet 4 to analyze product prompts and generate comprehensive 3D specifications
2. **Automated Packaging Design** - DALL-E 3 generates professional packaging visuals
3. **Texture Map Generation** - Creates PBR-ready texture maps for realistic materials
4. **3D Scene Script Generation** - Produces complete Blender Python scripts with:
   - Product geometry based on shape
   - Professional 3-point lighting (key, fill, rim)
   - 360° rotation animation (8 seconds)
   - Camera setup and render settings

5. **Preview Rendering** - Generates photorealistic 3D preview images
6. **Video Processing** - Handles encoding and upload to video hosting services
7. **Database Storage** - Saves all showcase data for tracking
8. **Status Monitoring** - Checks render progress with automatic retry logic

### **📋 Required Setup:**

**API Credentials needed:**
- Anthropic API (for Claude AI)
- OpenAI API (for DALL-E image generation)
- Replicate API (optional for additional rendering)
- Video hosting service (Cloudflare Stream or similar)
- PostgreSQL database

### **🔧 How to Use:**

1. **Import the JSON** - Copy the artifact content and import directly into n8n
2. **Configure Credentials** - Add your API keys in n8n credentials manager
3. **Activate Workflow** - Enable the webhook trigger
4. **Send Request** to webhook endpoint:

```json
POST /product-showcase
{
  "productPrompt": "A premium organic energy drink in a sleek aluminum can with nature-inspired graphics"
}
```

### **📤 Output Includes:**
- Product specifications (dimensions, materials, colors)
- Packaging design image URL
- Texture map URLs
- Downloadable Blender script
- 3D preview render
- Video showcase URL
- Rendering metadata

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook, OpenAI, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
