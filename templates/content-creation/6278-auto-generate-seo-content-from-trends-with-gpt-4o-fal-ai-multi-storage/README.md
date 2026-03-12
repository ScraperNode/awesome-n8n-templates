# 🎬 Auto-generate SEO content from trends with GPT-4o, FAL AI & multi-storage

> ⚡ **411 views** · 🎬 [Content Creation & Video](../)

## Description

## Who's it for  
Content creators, SEO specialists, and marketing teams who want to automatically generate SEO-optimized content based on trending topics—complete with AI-generated images, optional videos, and ready-to-publish HTML.

## How it works / What it does  
1. **Webhook** receives a request with use case and video preferences.  
2. **Get Trends XLSX** downloads a spreadsheet (created by the Social Media Trends workflow) from SharePoint.  
3. **Select Topic from Trends** randomly picks one trending topic from the spreadsheet.  
4. **AI Agent** (GPT-4o) generates bilingual newsletter content about the selected trend.  
5. **Get Newsletter Template** fetches your HTML template; **Build Newsletter** injects the AI content.  
6. Optional creative assets:  
   • **Pollinations AI** → generates a 1080 × 1350 image.  
   • **FAL AI** → creates video from the image + Lyria2 audio → merged via FFmpeg.  
7. **Gmail Approval** sends the draft for review; continues only on approval.  
8. **Upload** all files (HTML + JPG + video URL) to your chosen storage provider.

## How to set up  
1. Import the template into n8n (cloud or self-hosted).  
2. Create credentials: OpenAI, Microsoft 365 (SharePoint), Gmail, and FAL AI.  
3. Upload your HTML newsletter template to SharePoint (see yellow sticky note for required placeholders).  
4. Ensure you have a trends spreadsheet (from the Social Media Trends workflow) in your SharePoint folder.  
5. Update **Configuration Settings** with your `ENV_*` variables.  
6. Activate the workflow and POST to the webhook: `{ "text": "usecase: blog post, include_video: true" }`.

## Requirements  
- n8n 1.33 +  
- OpenAI account 
- Microsoft 365 tenant (SharePoint)  
- Gmail account  
- FAL AI API Key (for video generation)  
- A trends spreadsheet (from the Social Media Trends workflow)

## How to customize  
- Change storage provider: replace SharePoint upload nodes with Google Drive, Dropbox, or S3.  
- Modify topic selection: edit **Select Topic from Trends** for different selection logic.  
- Adjust content tone: tweak the prompt in **Prepare Newsletter Data**.  
- Skip video generation: set `include_video: false` in the webhook request.

## 🔗 Nodes Used

HTTP Request, Spreadsheet File, Webhook, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
