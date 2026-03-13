# 🎬 Automate Instagram content discovery & repurposing w/ Apify, GPT-4o & Perplexity

> ⚡ **11,398 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow creates an **end-to-end Instagram content pipeline** that automatically discovers trending content from competitor channels, extracts valuable insights, and generates new high-quality scripts for your own content creation. The system helped scale an Instagram channel from **0 to 10,000 followers in just 15 days** through **intelligent content repurposing**.

**Benefits:**

- Complete Content Automation - Monitors competitor Instagram accounts, downloads new reels, and processes them without manual intervention
- AI-Powered Script Generation - Uses ChatGPT and Perplexity to analyze content, identify tools/technologies, and rewrite scripts with fresh angles
- Smart Duplicate Prevention - Automatically tracks processed content in a database to avoid redundant work
- Multi-Platform Intelligence - Combines Instagram scraping, AI transcription, web research, and content generation in one seamless flow
- Scalable Content Strategy - Process content from multiple niches and creators to fuel unlimited content ideas
- Revenue-Focused Approach - Specifically designed to identify monetizable tools and technologies for business-focused content

**How It Works:**

1. Instagram Content Discovery:
- Uses Apify's Instagram scraper to monitor specified creator accounts for new reels
- Automatically downloads video content and metadata from target accounts
- Filters content based on engagement metrics and relevance

2. Intelligent Processing Pipeline:

- Transcribes video content using OpenAI Whisper for accurate text extraction
- Filters content using AI to identify tools, technologies, and automation opportunities
- Cross-references against existing database to prevent duplicate processing

3. Enhanced Research & Analysis:

- Searches Perplexity AI for additional insights about discovered tools
- Generates step-by-step usage guides and implementation instructions
- Identifies unique angles and opportunities for content improvement

4. Script Generation & Optimization:

- Creates new, original scripts optimized for your specific audience
- Maintains consistent brand voice while adding fresh perspectives
- Includes strategic call-to-action elements for audience engagement

**Required Google Sheets Database Setup:**
Before running this workflow, create a Google Sheets database with these exact column headers:
Essential Columns:

id - Unique Instagram post identifier (primary key for duplicate detection)
timestamp - When the reel was posted
caption - Original reel caption text
hashtags - Hashtags used in the post
videoUrl - Direct link to download the video file
username - Account that posted the reel
scrapedTranscript - Original transcript from video (added by workflow)
newTranscript - AI-generated script for your content (added by workflow)

*Additional Tracking Columns:*

shortCode - Instagram's internal post code
url - Public Instagram post URL
commentsCount - Number of comments
firstComment - Top comment on the post
likesCount - Number of likes
videoViewCount - View count metrics
videoDuration - Length of video in seconds

Setup Instructions:

Create a new Google Sheet with these column headers in the first row
Name the sheet "Reels"
Connect your Google Sheets OAuth credentials in n8n
Update the document ID in the workflow nodes

The merge logic relies on the id column to prevent duplicate processing, so this structure is essential for the workflow to function correctly.


**Business Use Cases:**

- Content Creators - Scale content production by 10x while maintaining quality and originality
- Marketing Agencies - Offer content research and ideation as a premium service
- Course Creators - Identify trending tools and technologies for educational content

**Revenue Potential:**

This exact system can be sold as a service for $3,000-$5,000 to growing channels or agencies. The automation saves 10+ hours weekly of manual research and content planning.

- Difficulty Level: Intermediate
- Estimated Build Time: 1-2 hours
- Monthly Operating Cost: ~$30 (API usage)

**Watch the Complete Build Process**

Want to see exactly how this system was built from scratch? Nick Saraev walks through the entire development process in this comprehensive tutorial, including all the debugging, dead ends, and problem-solving that goes into building real automation systems.

[🎥 Watch: "The N8N Instagram Parasite System (10K Followers In 15 Days)"](https://www.youtube.com/watch?v=9zBtU1mwOR4)


*This 1.5-hour deep-dive shows the actual build process - not a polished demo, but real system development with all the thinking and iteration included.*

**Set Up Steps:**

1. Configure Apify Integration:

- Sign up for Apify account and obtain API key
- Replace the bearer token in the "Run Actor Synchronously" node
- Customize the username array with your target Instagram accounts

2. Set Up AI Services:

- Add OpenAI API credentials for transcription and content generation
- Configure Perplexity API for enhanced research capabilities
- Set up appropriate rate limiting for cost control
- 
3. Database Configuration:

- Create Google Sheets database with provided column structure
- Connect Google Sheets OAuth credentials
- Configure the merge logic for duplicate detection

4. Content Filtering Setup:

- Customize the AI prompts for your specific niche and requirements
- Adjust the filtering criteria for tool/technology detection
- Set up the script generation template to match your brand voice

5. Automation Schedule:

- Configure the schedule trigger for daily content monitoring
- Set optimal timing based on your content creation workflow
- Test the complete flow with a small number of accounts first

6. Advanced Customization:

- Add additional content sources beyond Instagram
- Integrate with your existing content management systems
- Scale up monitoring to dozens of competitor accounts

***More AI Automation Systems:***
For more advanced automation tutorials and business systems, check out [My YouTube Channel ](https://www.youtube.com/@nicksaraev) where I share proven automation strategies that generate real revenue.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
