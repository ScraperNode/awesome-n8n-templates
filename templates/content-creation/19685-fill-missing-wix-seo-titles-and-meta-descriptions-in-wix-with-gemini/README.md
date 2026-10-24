# 🎬 Fill missing Wix SEO titles and meta descriptions in Wix with Gemini

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Wix names every page "Page Name | My Site" and leaves the meta description blank. This workflow finds pages, blog posts and products with no real SEO tags, writes both from the page's own content using Gemini, validates every suggestion, and saves the approved ones back to Wix.

## How it works
1. Calls the Wix SEO Metatags API for each configured item type and collects the current resolved SEO tags.
2. Keeps only items that are missing a custom title override and/or a meta description (optionally skipping items marked noindex) and limits the batch size across types.
3. For any Wix Stores products in the batch, fetches product descriptions, info sections, options, and price range from the Wix Stores API and appends this text to the item context.
4. Sends the batch to the Google Gemini API with a strict JSON response schema to generate a title and meta description for each item.
5. Validates the AI output for length limits, duplicates, and disallowed patterns (emoji, exclamation marks, ALL CAPS), then either stops in dry-run mode or patches each approved item individually and reports the real HTTP status of every write.
6. If nothing needs fixing, the run ends with an explanation of what it scanned and why each item was skipped, instead of returning an empty result.

## Setup
1. Create a Wix API key with permissions for View SEO Settings, Manage SEO Settings, and Read Products. In n8n add it as a Header Auth credential named Authorization, with the key pasted exactly and no Bearer prefix, and attach it to the three Wix HTTP nodes. Your Wix site ID goes in the wix-site-id header, which is already wired to the Settings node.
2. Create a Google Gemini API key and add it to the Gemini HTTP request as header auth using the x-goog-api-key header.
3. In the Settings step, paste your Wix site ID, confirm the item_types to process, and adjust batch size and title/description character limits as needed.
4. Run the workflow once with dry_run set to true to review the proposed changes in the output report, then set dry_run to false to allow writes.
5. If you update STATIC_PAGE or BLOG_POST tags, publish your site in the Wix editor to push drafted SEO changes live (store product updates publish immediately).

## Requirements
- A Wix site with at least one of Wix Blog, Wix Stores, or static pages you want to rank.

A Wix API key with View SEO Settings, Manage SEO Settings, and Read Products permissions.

A Google Gemini API key. The free tier is enough, since each run makes one Gemini request for the whole batch.

No community nodes and no paid services. Works on n8n Cloud and self-hosted.

## Customization
- Set item_types to any combination of STATIC_PAGE, BLOG_POST and STORES_PRODUCT to control what gets audited.

Adjust title_max_chars, desc_min_chars and desc_max_chars to match your own SEO standards. Defaults are 60 and 120 to 158.

Edit the numbered rules in the Create Gemini API Request node to change the tone, add a location, or write in a different language.

Change the schedule, or set skip_noindex to false if you want to prepare tags on a site that has not been published yet.

## Additional info
Two behaviours of the Wix SEO API are handled deliberately here, because both fail silently.

First, writing a tag replaces the item's entire tag set. Sending only a title and description wipes anything else that was there, including the noindex tag Wix puts on cart and thank-you pages. This workflow reads each item's existing tags and merges, so only the title and description are touched.

Second, the bulk endpoint reports success for store products and saves nothing, and publish:true on pages and blog posts writes to a revision the editor never shows you. So each item is written individually through the single-item endpoint, page and blog tags go to the site draft, and the report shows the real HTTP status per item rather than a count the API returned.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
