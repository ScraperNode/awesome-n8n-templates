# 🎬 Render LinkedIn carousel slides with Google Gemini and Google Drive

> ⚡ **4 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This sub-workflow is executed by a parent workflow to generate a single slide image with Google Gemini, optionally save a preview to Google Drive, upload the image to LinkedIn via the Images API, and return only the resulting image URN and metadata to the parent.

## How it works
1. Receives slide configuration from a parent workflow execution, including the image prompt, slide index, LinkedIn owner URN, and rendering options.
2. Validates that all required inputs are present and stops with a clear error if any fields are missing.
3. Calls the Google Gemini image generation API to render the slide using the provided aspect ratio and image size.
4. Extracts the generated image from the response, converts it to binary, and retries the generation up to three times if no usable image is returned or if the image exceeds LinkedIn’s size limit.
5. Optionally uploads the generated image to Google Drive to create a preview link.
6. Initializes an image upload with the LinkedIn Images API, uploads the image bytes to the returned upload URL, and returns only the LinkedIn image URN, slide index, alt text, and optional Drive preview URL to the parent.

## Setup
1. Configure Google Gemini (PaLM) API credentials and ensure the workflow can call the Gemini image generation endpoint.
2. Configure LinkedIn OAuth2 credentials with permission to initialize and upload images, and provide the correct LinkedIn-Version value via the parent workflow input.
3. (Optional) Configure Google Drive OAuth2 credentials and choose the target Drive/folder if you want preview images saved to Google Drive.
4. In the parent workflow, pass the required fields to this sub-workflow: image_prompt, author_urn, linkedin_version, image_aspect, image_size, and slide_index (and optionally alt_text).

## Requirements
- Need to have a parent workflow.

## Additional info
This is a sub workflow which means, it will need a parent workflow. This workflow is used to prevent N8N's execution timeout errors by outsourcing image rendering and generation to a sub-worflow instead of doing it all in the parent workflow.

## 🔗 Nodes Used

HTTP Request, Google Drive, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
