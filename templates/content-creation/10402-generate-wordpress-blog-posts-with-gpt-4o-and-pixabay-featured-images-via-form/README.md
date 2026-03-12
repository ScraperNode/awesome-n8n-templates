# 🎬 Generate WordPress blog posts with GPT-4O and Pixabay featured images via form

> ⚡ **468 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow automates the creation of a draft article for a blog
## Use Cases 
* Rapidly generate blog content from simple prompts. 
* Ensure content consistency and speed up time-to-publish. 
* Automatically source and attach relevant featured images. 
* Save your digital marketing team significant time. (Personalized touch based on your experience)

## Prerequisites/Requirements
* An **OpenAI** API Key (for GPT-4O).
* A **Pixabay** API Key (for image sourcing).
* A **WordPress** site URL and API credentials (username/password or application password).

## Customization Options
* Adjust the AI prompt in the **AI Content Generation** node to change the content tone and style.
* Modify the search query in the **Pixabay Query HTTP** node to influence the featured image selection.
* Change the reviewer email address in the final **Send Review Notification** node.

## 🔗 Nodes Used

HTTP Request, Wordpress, n8n Form Trigger, OpenAI, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
