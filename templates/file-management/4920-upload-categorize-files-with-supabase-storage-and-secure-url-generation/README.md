# 📁 Upload & categorize files with Supabase Storage and secure URL generation

> ⚡ **2,596 views** · 📁 [File Management](../)

## Description

# Supabase Storage File Upload Workflow

*works with selfhosted Supabase*

## ℹ️ How it works
• Accepts file data (MIME type, filename, base64 content) from other workflows
• Automatically routes files to appropriate storage buckets based on file type (images, audio, video, documents)
• Uploads files to Supabase Storage using the REST API
• Generates secure signed URLs for file access with 30-day expiration
• Returns structured success/error responses for downstream processing

## 🏗️ Set up steps
• Configure Supabase API credentials in n8n 

• Create storage buckets in your Supabase project (image-files, audio-files, video-files, document-files) (or choose your own structuring system)

• Replace url paths with your own

• Test the workflow using the included form trigger

• Remove test form and integrate with your main workflows

**📚 Reference:** [Supabase Storage Documentation](https://supabase.com/docs/guides/storage)

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
