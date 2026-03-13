# 🎬 Generate and publish AI short videos using Gemini, Sora-2, Apify, and Google Sheets

> ⚡ **150 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

**1. Overview**

This workflow automates the process of collecting viral content ideas, generating videos using AI services, and publishing posts to social media platforms.

It uses scheduled triggers and external APIs to run the entire content pipeline with minimal manual input. Google Sheets is used as the central data layer to store ideas, track processing status, and prevent duplicate content.

The workflow is designed to support continuous content production by connecting idea discovery, content generation, and publishing into a single automated system.

**2. What Can This Workflow Do?**
This workflow can be used for:
- Automatically collecting viral content ideas on a scheduled basis
- Generating videos from text-based ideas without manual recording or editing
- Publishing video content to social media platforms using a single workflow
- Managing content status and processing history through Google Sheets
- Running automated content pipelines for multiple niches or channels

The workflow is suitable for users who want to reduce manual work while maintaining a structured and repeatable content production process.

**3. Required API Keys & Credentials**

The following credentials must be configured before running the workflow:

- Apify API Token: Used to scrape and collect viral content data
- Google OAuth2: Required for Google Sheets API access
- Gemini API Key: Used by the AI Agent for content analysis and generation
- Video Generation API Key: (Kie.ai, GeminiGen.ai, fal.ai...) Required to generate AI videos
- Blotato API Key: Used to automatically publish content to multiple social media platforms

⚠️ All API keys and credentials must be properly set up in n8n Credentials before executing the workflow.

**4. High-Level Architecture**

The system is divided into two main workflows:

1. Get Content Viral: Collects and stores viral content ideas automatically

2. Create Video and Auto Post
- Transforms ideas into AI-generated videos and publishes them automatically
- Google Sheets as the Central Database
Google Sheets serves as the central data layer to:
- Act as the main content database
- Prevent duplicate content processing
- Track content status throughout the entire pipeline

**5. Workflow 1 – Get Content Viral
Purpose**

This workflow is responsible for automatically discovering and collecting viral content ideas, then storing them in Google Sheets for further processing.

It acts as the idea intake layer of the entire AI Content Factory.
Workflow Steps

1. Scheduled content execution
The workflow is triggered automatically based on a predefined schedule (e.g. daily or multiple times per day). This allows the system to continuously collect fresh viral content ideas without manual intervention.

2. Run Apify Actor & Get Dataset

- Executes an Apify Actor to scrape viral content data from selected sources
- Retrieves a dataset containing raw content ideas, links, and metadata
- This step is responsible for data collection and crawling.

3. Normalize scraped content data

- Cleans and normalizes the scraped data
- Removes unnecessary fields
- Formats the content into a standardized structure suitable for storage
This ensures consistency and data quality.

4. Save to Google Sheets (Viral Content)

- Appends the processed content ideas into a dedicated Google Sheet
- Each row represents a single viral content idea

Google Sheets serves as the central idea repository for downstream workflows.

Output:
- After the workflow completes, you will have:
- A continuously updated list of viral content ideas
- Structured data ready for video generation
- A centralized idea database accessible by other workflows

**6. Workflow 2 – Create Video and Auto Post
Purpose**

This workflow is responsible for transforming viral content ideas into AI-generated videos and automatically publishing them to social media platforms.

It acts as the production and distribution layer of the AI Content Factory.

Workflow Steps
1. Scheduled video generation
The workflow runs automatically based on a predefined schedule. This allows you to control how many videos are generated and published per day.

2. Get Viral Content (Google Sheets)
- Retrieves a single unprocessed content idea from Google Sheets
- Ensures that each idea is used only once
- This step prevents duplicate content generation.

3. Analyze Content
- Analyzes the selected content idea
- Extracts key context, topic, and intent
- This prepares structured input for the AI Agent.

4. AI Agent (Gemini + Structured Output Parser)
- The AI Agent generates:
- Video title
- Video description
- Video generation prompt

A structured output parser is used to ensure consistent and predictable results for downstream steps.

5. Format AI output for video generation
- Cleans and formats the AI-generated output
- Prepares the final payload for the video generation API
- This step ensures compatibility with the video generation service.

6. Create Video (Video Generation API)
- Sends the prepared prompt to the video generation API
- Starts the AI video rendering process
- The video is generated asynchronously.

7. Wait → Get Video → Switch

- Wait: Pauses the workflow while the video is rendering
- Get Video: Checks the current rendering status
- Switch:
  If Processing: wait and retry
  If Completed: continue to publishing
  If Failed: handle errors or retry

8. Create Post (Blotato)
- Publishes the generated video to selected social media platforms
- Uses:
  Title
  Description
  Generated video
Blotato handles multi-platform posting automatically.

9. Update Google Sheets
- Updates the corresponding row in Google Sheets with:
 Processing status
 Published post URL
 Timestamp
This provides full visibility and tracking across the pipeline.

Output
- After the workflow completes, you will have:
- An AI-generated video
- Automatically published content across social platforms
- Updated tracking data in Google Sheets

**8. Notes, Limitations & Best Practices**

Notes
The overall content quality depends heavily on:
-   The quality of scraped viral ideas
-   The AI prompts used for analysis and video generation
-   The capabilities of the selected video generation API

This workflow is designed for automation, not manual fine-tuning.
Google Sheets is used as a lightweight database and works best for small to medium-scale content pipelines.

Limitations

API rate limits and quotas may restrict:
-   The number of videos generated per day
-   The frequency of scraping and posting 

Video generation APIs may:
-   Fail occasionally due to rendering issues
-   Produce inconsistent results depending on prompt complexity

Social media platforms may impose:
-   Posting limits
-   Content moderation restrictions

Best Practices

Start with a low posting frequency and gradually scale up

Regularly review and refine:
-  AI prompts
-  Video formats

Use Google Sheets status fields to:
-   Monitor failures
-   Prevent duplicate processing


Add error handling and retry logic for:
-   Video generation
-   Posting steps

Periodically clean and optimize your Google Sheets data to maintain performance

[Watch the tutorial video on YouTube.](https://youtu.be/6q-SL5S1PBc?si=SWjWOiAp_z1pTW9F).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
