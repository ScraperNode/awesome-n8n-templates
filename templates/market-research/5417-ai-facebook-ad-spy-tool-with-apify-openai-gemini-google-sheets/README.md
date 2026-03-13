# 📊 AI Facebook ad spy tool with Apify, OpenAI, Gemini & Google Sheets

> ⚡ **4,512 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

# AI Facebook Ad Spy Tool with Apify, OpenAI, Gemini & Google Sheets

**Categories:** Competitive Intelligence, Marketing Automation, AI Analysis

This workflow creates a comprehensive Facebook ad spy tool that scrapes competitor ads from Facebook's ad library and generates detailed analysis with rewritten versions. The system processes text, image, and video ads using different AI models, providing strategic intelligence for PPC agencies and marketers. Built to be sold as a premium service for $2,000+, this tool combines web scraping, multi-modal AI analysis, and competitor intelligence into one powerful automation.

## **Benefits**

- **Complete Competitive Intelligence** - Analyze competitor strategies across all ad formats (text, image, video)
- **Multi-Modal AI Analysis** - Uses GPT-4 Vision for images and Gemini for video content understanding
- **Automated Ad Rewriting** - Generates inspired variations of successful competitor ads
- **Quality Filtering** - Targets high-performing advertisers with significant page likes
- **Scalable Processing** - Handle hundreds of competitor ads with detailed strategic analysis
- **Premium Service Potential** - Easily sold to agencies and marketers for $2,000+ implementations

## **How It Works**

**Facebook Ad Library Scraping:**
- Connects to Facebook's public ad library through Apify's specialized scraper
- Searches for active ads using customizable keywords and targeting parameters
- Extracts comprehensive ad data including creative assets, targeting info, and engagement metrics
- Filters results to focus on high-quality advertisers with substantial page followings

**Intelligent Content Routing:**
- Automatically categorizes ads into text-only, image-based, or video content types
- Routes each ad type to specialized processing pipelines optimized for that content format
- Ensures appropriate AI models are used for each type of creative analysis
- Maintains data integrity while processing different content formats simultaneously

**Advanced Video Analysis Pipeline:**
- Downloads video ads directly from Facebook's content delivery network
- Uploads videos to Google Drive for temporary storage and processing
- Initiates Gemini AI video upload sessions for multi-modal analysis
- Uses Gemini's advanced video understanding to generate detailed content descriptions
- Processes video narrative, visual elements, messaging strategy, and target audience insights

**Image and Text Processing:**
- Analyzes image ads using GPT-4 Vision for comprehensive visual content understanding
- Processes text-only ads using GPT-4 for messaging strategy and copywriting analysis
- Identifies key persuasion techniques, target demographics, and messaging frameworks
- Generates detailed competitive intelligence reports for each ad format

**Strategic Intelligence Generation:**
- Creates comprehensive summaries analyzing competitor messaging strategies and target audiences
- Generates rewritten ad copy that captures successful elements while avoiding direct copying
- Produces recreation prompts for images and videos that can be used with AI generation tools
- Organizes all insights in structured Google Sheets database for easy analysis and reporting

## **Required Setup Configuration**

**Apify Integration:**
- Sign up for Apify account and obtain API key
- Replace `&lt;your-apify-api-key-here&gt;` in "Run Ad Library Scraper" node
- Customize Facebook Ad Library search URLs with your target keywords and regions

**AI Service Configuration:**
- **OpenAI API**: Set up for text analysis and image understanding with GPT-4 Vision
- **Gemini API**: Configure for advanced video content analysis and description
- Replace `&lt;your-gemini-api-key-here&gt;` in all Gemini-related nodes

**Google Services Setup:**
- **Google Drive**: Configure OAuth for temporary video storage during Gemini processing
- **Google Sheets**: Create results database with proper column structure for ad intelligence storage

**Facebook Ad Library Search Configuration:**
Customize the search parameters in the Apify scraper

# Google Sheets Database Structure:

Create a sheet with these columns:

ad_archive_id - Unique Facebook ad identifier
page_id - Advertiser's Facebook page ID
page_name - Advertiser's business name
page_url - Link to advertiser's Facebook page
type - Ad format (text, image, or video)
date_added - When ad was analyzed
summary - Detailed competitive intelligence analysis
rewritten_ad_copy - AI-generated inspired version
image_prompt - Description for recreating image ads
video_prompt - Description for recreating video ads

# Business Use Cases

- PPC Agencies - Offer comprehensive competitor analysis services to clients for strategic advantage
- Marketing Teams - Research competitor strategies and messaging before launching new campaigns
- E-commerce Businesses - Analyze successful ads in your industry for creative inspiration
- SaaS Companies - Study how competitors position their products and target audiences
- Course Creators - Research educational content marketing approaches and messaging strategies
- Affiliate Marketers - Identify successful promotional strategies and high-converting ad formats

Difficulty Level: Advanced
Estimated Build Time: 3-4 hours
Monthly Operating Cost: ~$200 (Apify + OpenAI + Gemini + Google Workspace APIs)

# Watch My Complete Build Process
Want to see exactly how I built this entire Facebook ad spy system from scratch? I walk through the complete development process live, including API integrations, multi-modal AI setup, error handling, and the exact business strategy for selling this as a premium service.
🎥 Watch My Live Build: "[Build A Facebook Ads Spy Tool With N8N (Sell for $2k+)](https://www.youtube.com/watch?v=0PJNiDuihBg&t=251s)"
This comprehensive tutorial shows the real development process - including complex API orchestration, multi-modal AI integration, and proven strategies for monetizing competitive intelligence systems.

# Set Up Steps

# Apify Scraper Configuration:

- Set up Apify account and configure Facebook Ad Library scraper
- Customize search parameters for your target industries and regions
- Configure result limits and filtering parameters for quality control
- Test scraper with sample searches to verify data quality

# Multi-Modal AI Setup:

- Configure OpenAI API credentials for text and image analysis
- Set up Gemini API access for advanced video content understanding
- Configure appropriate rate limits and error handling for API stability
- Test AI analysis with sample ads to optimize prompt quality

# Google Services Integration:

- Set up Google Drive OAuth for temporary video storage during processing
- Create Google Sheets database with proper column structure for intelligence storage
- Configure sharing permissions and access controls for team collaboration
- Test complete data flow from scraping to final intelligence reports

# Quality Control and Filtering:

- Configure page likes threshold in "Filter For Likes" node (recommend 1,000+ for quality)
- Adjust content routing logic in Switch node based on your analysis needs
- Set up error handling and retry logic for reliable large-scale processing
- Test complete workflow with various ad types to ensure proper routing

# Advanced Customization:

- Customize AI prompts for your specific industry analysis needs
- Configure additional filtering criteria beyond page likes
- Set up automated scheduling for regular competitor monitoring
- Add custom fields to database for tracking specific competitive metrics

# Advanced Features

Scale the system with additional capabilities:

- Industry-Specific Analysis - Customize prompts and filters for different verticals
- Trend Tracking - Monitor messaging changes over time for strategic insights
- Performance Correlation - Cross-reference ad engagement with business outcomes
- Alert Systems - Notify when competitors launch new campaign types
- Custom Reporting - Generate client-ready intelligence reports automatically
- Integration Extensions - Connect to CRM and marketing platforms for strategic workflow

# Important Considerations

- API Rate Limits - Built-in delays and error handling prevent service interruptions
- Content Rights - System generates inspired variations, not direct copies, for legal compliance
- Data Storage - Organize intelligence database for easy client reporting and analysis
- Scalability - Batch processing handles hundreds of ads efficiently without blocking
- Quality Assurance - Filtering logic ensures analysis focuses on successful, high-quality advertisers

# Why This System Works

The competitive advantage lies in comprehensive multi-modal analysis:

- Complete format coverage - analyzes text, image, and video ads with appropriate AI models
- Strategic depth - goes beyond basic scraping to provide actionable intelligence
- Automation scale - processes competitor research that would take weeks manually
- Premium positioning - advanced AI analysis justifies higher service pricing
- Immediate value - clients receive actionable insights within hours of setup
- 
Check Out My Channel
For more advanced automation systems that generate real business results and premium service opportunities, explore my YouTube channel where I share proven strategies for building profitable automation businesses.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
