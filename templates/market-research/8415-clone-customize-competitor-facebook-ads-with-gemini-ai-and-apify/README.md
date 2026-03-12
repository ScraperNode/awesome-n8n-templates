# 📊 Clone & customize competitor Facebook ads with Gemini AI and Apify

> ⚡ **1,040 views** · 📊 [Market Research & Insights](../)

## Description

# Nano Banana Ad Cloning System

This n8n template demonstrates how to automatically clone and adapt competitor Facebook ads for your own product using AI. Simply provide a Facebook Ad Library URL and your product image, and the workflow scrapes competitor ads, analyzes their design and messaging, then generates new versions featuring your product while maintaining the original ad's style and effectiveness.

## Use cases
* Adapt successful competitor ad creatives for your own products
* Test proven ad formats without starting from scratch
* Quickly produce multiple ad variations based on high-performing competitors
* Scale ad creative production by leveraging competitor insights
* A/B test different visual approaches inspired by market leaders

## Good to know
* The workflow processes up to 20 ads from the provided Facebook Ad Library URL
* Gemini's image generation may occasionally flag content as prohibited (workflow handles this automatically)
* Generated ads maintain the original style while swapping product branding and packaging
* All competitor reference ads and generated clones are automatically saved to Google Drive
* Image generation takes approximately 10-30 seconds per ad

## How it works
1. **Form Submission**: User submits a Facebook Ad Library URL and uploads their product image
2. **Product Processing**: The product image is converted to base64 for AI processing
3. **Ad Scraping**: Apify's Facebook Ad Library Scraper extracts up to 20 ads from the provided URL
4. **Iteration Setup**: The workflow processes each scraped ad individually
5. **Image Download**: Each competitor ad image is downloaded and converted to base64
6. **Reference Storage**: Original competitor ads are uploaded to Google Drive for reference
7. **Prompt Generation**: Gemini 2.5 Pro analyzes both images and creates detailed instructions for cloning the ad while replacing competitor branding with your product
8. **Ad Generation**: Gemini 2.5 Flash Image Preview generates the new ad image based on the instructions
9. **Content Filter**: Checks if generation was blocked for prohibited content
10. **Upload & Loop**: Successfully generated ads are uploaded to Google Drive, then the workflow moves to the next ad

## How to use
1. Click the form trigger URL to access the submission form
2. Enter a Facebook Ad Library URL (e.g., from a competitor's page showing active ads)
3. Upload your product image with clear branding and packaging
4. Submit the form and wait for processing to complete
5. Find your cloned ads and reference images organized in Google Drive folders
6. Review generated ads and select the best performers for your campaigns

## Requirements
* **Apify** account for Facebook Ad Library scraping
* **Google Gemini API** account for ad analysis and image generation
* **Google Drive** account for storing reference ads and generated clones
* Valid Facebook Ad Library URL with accessible ads

## Customizing this workflow
* Adjust the **number of ads scraped** in the scrape_ads node (currently set to 20 per source)
* Modify the **prompt instructions** in build_prompt node to emphasize different aspects (e.g., color schemes, layouts, text placement)
* Change the **Google Drive folders** in upload_ad_reference and upload_image nodes to organize by campaign or product line
* Add **text overlay generation** to include custom headlines or CTAs on generated images
* Implement **quality scoring** to automatically filter and rank generated ad variations
* Add **Slack/email notifications** when ad generation completes or fails
* Include **metadata extraction** to capture ad copy and targeting insights from scraped adsRetryClaude does not have the ability to run the code it generates yet.

## 🔗 Nodes Used

HTTP Request, Google Drive, n8n Form Trigger, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
