# 🎬 E-commerce bestseller video generator (Algolia + Google VEO 3)

> ⚡ **225 views** · 🎬 [Content Creation & Video](../)

## Description

# E-commerce Weekly Bestseller Video Generator (Algolia + Google VEO 3)

This workflow automatically identifies your weekly bestselling product from your Algolia-powered e-commerce store and generates a cinematic product video using Google VEO 3.0 AI, helping marketing teams create engaging video content without manual editing or expensive production tools.

## Who's it for

E-commerce stores using Algolia for search. Ideal for marketing teams who want to automate video content creation for top-performing products and maximize conversion potential with engaging visual content.

## What it does (and doesn't do)

✅ It DOES:
- Identify your weekly bestseller automatically via Algolia custom ranking
- Validate product images before video generation
- Generate 6-second cinematic product videos using Google VEO 3.0
- Store videos in Supabase for easy frontend integration
- Update Algolia records with video URLs automatically
- Send email alerts if products lack images

❌ It DOESN'T:
- Generate videos for all products at once
- Edit or customize videos after generation
- Create multi-product compilation videos
- Replace manual video editing for complex productions
- Work without Google Cloud Storage (VEO 3.0 requirement)

Think of it as: An automated video production assistant that doubles down on your bestsellers with engaging content, not a full video editing suite.

## How it works

1. **Weekly trigger** - Runs every Monday at 9:00 PM (or manually for testing)
2. **Bestseller fetch** - Queries Algolia index with empty search to get top-ranked product
3. **Video check** - Skips products that already have videos
4. **Image validation** - Ensures product has a valid, accessible image URL
5. **Video generation** - Converts image to base64 and sends to Google VEO 3.0 with cinematic prompt
6. **Polling loop** - Waits and checks generation status until video is ready
7. **Storage transfer** - Downloads MP4 from Google Cloud Storage and uploads to Supabase
8. **Index update** - Marks product as having video and adds public URL to Algolia

## Set up steps

Setup time: ~20 minutes

1. Connect your Algolia credentials (Search API key + Application ID)
2. Replace placeholders:
   - `ALGOLIA_APP_ID` with your Algolia Application ID
   - `YOUR_INDEX_NAME` with your product index name
   - `PROJECT-ID-GOOGLE-CLOUD` with your Google Cloud Project ID
   - `GOOGLE_STORAGE_BUCKET_NAME` with your GCS bucket name
   - `YOUR_SUPABASE_PROJECT` with your Supabase project ID
   - `YOUR_BUCKET_NAME` with your Supabase bucket name
   - `admin@example.com` with your email address
3. Configure Algolia custom ranking (inStock + popularity recommended)
4. Ensure your products have `hasVideo`, `images[]`, `name`, `description` attributes
5. Set up Google Vertex AI with VEO 3.0 API access
6. Create Google Cloud Storage bucket for VEO 3.0 outputs
7. Create Supabase storage bucket for final video hosting

## Requirements

- Algolia account with product index (free tier works)
- Algolia index with products containing image URLs
- Google Vertex AI account with VEO 3.0 API access
- Google Cloud Storage bucket (mandatory for VEO 3.0)
- Supabase account with storage bucket (free tier works)
- Gmail account for error notifications
- Products with attributes: `hasVideo`, `images[]`, `name`, `description`, `objectID`

## Why both Google Cloud Storage AND Supabase?

VEO 3.0 can only output videos as base64 strings or MP4 files in Google Cloud Storage. Base64 strings are too large for n8n to process (even with code nodes), making Google Cloud Storage mandatory. The workflow then downloads the MP4 and uploads it to Supabase because:
- Supabase is where your other product assets already live
- Supabase offers generous free tier and simpler pricing
- Easier to serve videos to your frontend from a single storage provider

Think of Google Cloud Storage as a temporary staging area required by VEO 3.0's limitations, and Supabase as your actual production storage.

## Cost breakdown

For a typical 6-second product video:

- Google VEO 3.0 generation: ~$0.15-0.30 per video
- Google Cloud Storage: ~$0.002 (temporary staging)
- Supabase storage: Free tier covers hundreds of videos

💰 **Bottom line**: About $0.15-0.30 per video. Running weekly for a year = $8-16 in video generation costs.

## 💡 Pro tips

**Customize the video prompt**: The default prompt creates a cinematic studio dolly shot. Edit the `jsonBody` in "Generate video with Google VEO 3" to match your brand style (fast-paced, minimalist, lifestyle, etc.).

**Adjust bestseller logic**: Modify the Algolia query to add filters like `category:electronics` or `brand:Nike` to focus on specific product segments.

**Use manual execution during setup**: Don't wait until Monday! Run the workflow manually to catch configuration issues like broken image URLs or missing credentials immediately.

**Monitor your email alerts**: If you frequently get "no image" or "broken image" alerts, audit your product data quality in Algolia. Missing images = lost video opportunities.

**Start with test products**: Before going live, manually trigger the workflow on a product you know has good images. Verify the video appears correctly in your Supabase bucket and Algolia record.

**Check your GCS bucket occasionally**: Videos accumulate in Google Cloud Storage after each run. Set up a lifecycle policy to auto-delete files older than 7 days to avoid unnecessary storage costs.

**Adjust the schedule**: If Monday 9PM doesn't work for your team's workflow, change the trigger to run on a different day or time that aligns with your content calendar.

## How it identifies the bestseller

This workflow leverages Algolia's custom ranking feature. When you send an empty search query to Algolia, the first result returned follows your custom ranking criteria. This is an Algolia best practice that ensures your most relevant products appear first even without search terms.

In the example configuration, custom ranking uses:
- `inStock` attribute - Prioritizes available products
- `popularity` attribute - A computed metric based on sales volume, views, and other signals

**You'll need to configure your own custom ranking** in your Algolia index settings to match your business criteria. The workflow assumes your index is already configured to return your bestselling product first when queried with no search terms.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
