# 🎬 Generate SEO blog posts from a keyword list and publish to Webflow    

> ⚡ **1,240 views** · 🎬 [Content Creation & Video](../)

## Description

### Who's it for
Content marketers and SEO specialists who need to generate multiple SEO-optimized articles targeting keyword variations. Ideal for affiliate sites, niche blogs, or service-based businesses creating location/product-specific landing pages.

### How it works
This workflow automates bulk content creation from keyword list to Webflow draft:

1. **Loads keywords** from Google Sheets with structured format (main keyword + slug)
2. **AI generates articles** - Creates 600+ word content following SEO best practices
3. **Creates custom images** - Calls a sub-workflow using Gemini 2.5 Flash to generate relevant featured images
4. **Quality validation** - Ensures minimum word count; expands content if needed
5. **HTML conversion** - Transforms markdown to Webflow-ready HTML
6. **Result tracking** - Logs success/errors to separate Google Sheets



The workflow includes automatic content expansion, error handling, and uses a separate sub-workflow as a tool for AI image generation.

**Important**: The subworkflow should be created as an individual one. Then, in the Agent Tool node, you need to select it as the tool. DON'T try to run it inside the same workflow.

### Requirements
- OpenAI API key (for content generation)
- OpenRouter API key or similar (for Gemini image generation via sub-workflow) 
- Google Sheets with three tabs: `keywords`, `content_created`, `webflow_error_logs`
- Webflow site with CMS collection configured
- Google Drive folder for image storage
- **Companion workflow**: "AI image generation for automatic content creation" (imported separately and called as a tool)

### How to set up

**1. Import both workflows separately:**
- Main workflow: "Bulk SEO content generation and Webflow draft creation with AI images"
- Sub-workflow: "AI image generation for automatic content creation"

**2. Configure your Google Sheet** with the recommended structure  
Required sheets:
- `keywords`: id, main keyword, head terms, modifiers, slug, status
- `content_created`: id, slug, meta description, content, generatedAt, updated on
- `webflow_error_logs`: keyword, error, timestamp, status

**3. Add API credentials:**
- OpenAI API  
- OpenRouter API with Gemini access or similar (for image generation)
- Webflow OAuth2 API (see Webflow setup instructions in sticky note)
- Google Sheets  
- Google Drive  

**4. Update workflow configuration:**
- Google Sheets: Update document IDs in all Google Sheets nodes
- Webflow: Set your Site ID and Collection ID in Create/Update Post nodes
- Google Drive: Set folder ID in the image generation sub-workflow
- AI Image Tool: Verify the "AI Image Generation Tool1" node points to your imported sub-workflow

**5. Test with a single keyword:**
 

**6. Schedule for production:**
- Enable the Schedule Trigger (currently set to monthly)
 

### How to customize

**Content customization:**
- Adjust article length in AI Agent prompt (currently 600-800 words)
- Modify article structure/sections in the system prompt
- Change content tone by editing the AI Agent system message
- Add/remove content sections in the prompt template

**Image customization:**
- Change AI model in sub-workflow (currently Gemini 2.5 Flash)
- Modify image style/prompt in the AI Image Generation Tool parameters
- Update Google Drive destination folder

**Webflow customization:**
- Add custom CMS fields by updating Create/Update Post nodes
- Modify field mappings to match your Webflow collection structure
- Change draft behavior or add auto-publish logic

**Workflow behavior:**
- Adjust batch size in Loop Over Items node
- Modify quality threshold (currently 600 words minimum)
- Change error handling/retry logic
- Update scheduling frequency in Schedule Trigger

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Webflow, Markdown, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
