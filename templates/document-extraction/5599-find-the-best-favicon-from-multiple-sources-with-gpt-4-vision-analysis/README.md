# 🔬 Find the best favicon from multiple sources with GPT-4 vision analysis

> ⚡ **759 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Who's it for

This workflow is perfect for directory site creators, content managers, and developers who need to automatically find and select the highest quality favicon or logo for websites they're showcasing. Instead of manually hunting down brand assets or settling for blurry default icons, this workflow does the heavy lifting by fetching multiple options and using AI to pick the best one.

## How it works

The workflow takes a website URL and domain as input, then intelligently fetches favicon images from three different sources:

1. **Google's Favicon API** - Gets the site's actual favicon
2. **Logo.dev** - Provides high-quality brand logos  
3. **Clearbit** - Alternative logo source for business websites

Once all images are collected, the workflow uses OpenAI's vision model to analyze each icon based on:
- Image quality and resolution (minimum 256x256)
- Brand authenticity (avoiding generic framework icons)
- Visual clarity without artifacts or blur
- Professional presentation suitable for directory listings

The AI assigns quality scores from 0.0 to 1.0, and the workflow automatically returns the URL of the highest-scoring favicon.

## Requirements

- OpenAI API key (for image analysis)
- Logo.dev API key (free tier available)

## How to set up

1. **Configure API credentials:**
   - Add your OpenAI API key to n8n credentials
   - Sign up for Logo.dev and add your API token
   - The Clearbit and Google APIs require no authentication

2. **Test the workflow:**
   - Use the pinned test data (Fyxer AI example) or replace with your own
   - Ensure all HTTP nodes can successfully fetch images
   - Verify the AI analysis is working by checking the quality scores

3. **Customize input format:**
   - Modify the workflow trigger to accept your preferred input format
   - Adjust the domain extraction logic if needed for your use case

## How to customize the workflow

**For different quality criteria:**
- Edit the AI prompt in the "analyze_each_icon" node to emphasize different aspects (transparency, size, style preferences)

**For additional favicon sources:**
- Add more HTTP Request nodes pointing to other favicon/logo APIs
- Update the merge node to handle additional inputs
- Modify the final URL construction logic to handle new sources

**For batch processing:**
- Wrap this workflow in a loop to process multiple websites at once
- Add error handling for failed requests or AI analysis timeouts

The workflow is designed to be reliable and handles errors gracefully - if one favicon source fails, it continues with the available options and still provides the best result possible.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, Filter, OpenAI Chat Model, OpenAI, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
