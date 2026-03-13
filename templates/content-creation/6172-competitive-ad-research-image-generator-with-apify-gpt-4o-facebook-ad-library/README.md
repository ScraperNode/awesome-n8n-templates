# 🎬 Competitive ad research & image generator with Apify, GPT-4o & Facebook Ad Library

> ⚡ **2,673 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# AI Ad Scraper & Image Generator with Facebook Ad Library

**Categories:** PPC Automation, Creative Generation, Competitive Intelligence

This workflow creates an end-to-end ad library scraper and AI image spinner system that automatically discovers competitor ads, analyzes their design elements, and generates multiple unique variations ready for your own campaigns. Built to eliminate 60-70% of manual creative work for PPC agencies, this system transforms competitor research into actionable ad variants in minutes.

## **Benefits**

- **Automated Competitor Research** - Scrapes Facebook Ad Library for active competitor campaigns automatically
- **AI-Powered Creative Analysis** - Uses OpenAI vision to comprehensively analyze ad design elements and copy
- **Intelligent Image Generation** - Creates 3+ unique variations per source ad while maintaining effective layouts
- **Complete Asset Organization** - Automatically organizes source ads and generated variations in structured Google Drive folders
- **Campaign-Ready Output** - Generates Google Sheets database with direct links to all assets for immediate campaign deployment
- **Massive Time Savings** - Replaces hours of manual creative work with automated competitive intelligence and generation

## **How It Works**

**Facebook Ad Library Scraping:**
- Connects to Facebook's Ad Library through Apify scraper integration
- Searches active ads based on keywords, industries, or competitor targeting
- Filters for image-based ads and removes video-only content for processing

**Intelligent Asset Organization:**
- Creates unique Google Drive folder structure for each scraped ad campaign
- Separates source competitor ads from AI-generated variations
- Maintains organized asset library for easy campaign management and iteration

**AI-Powered Creative Analysis:**
- Uses OpenAI's vision model to comprehensively describe each competitor ad
- Identifies design elements, color schemes, layout patterns, and messaging approaches
- Generates detailed creative briefs for intelligent variation generation

**Smart Image Variation System:**
- Creates 3 unique style variations per source ad using advanced AI prompting
- Maintains effective layout structures while changing colors, fonts, and styling
- Customizes messaging and branding to match your business requirements

**Campaign Database Integration:**
- Logs all source ads and generated variations in organized Google Sheets
- Provides direct links to all assets for immediate campaign deployment
- Tracks performance data and creative iterations for ongoing optimization

## **Required Setup Configuration**

**Google Drive Structure:**
The workflow automatically creates this folder organization:

PPC Thievery (Parent Folder)
├── [Ad Archive ID] (Per Campaign)
│   ├── 1. Source Assets (Original competitor ads)
│   └── 2. Spun Assets (AI-generated variations)

**Google Sheets Database Columns:**
- `timestamp` - Unique record identifier
- `ad_archive_id` - Facebook's internal ad identifier
- `page_id` - Advertiser's Facebook page ID
- `original_image_url` - Direct link to source competitor ad
- `page_name` - Advertiser's business name
- `ad_body` - Original ad copy text
- `date_scraped` - When the ad was discovered
- `spun_prompts` - AI-generated variation instructions
- `asset_folder` - Link to campaign's Google Drive folder
- `source_folder` - Link to original ads folder
- `spun_folder` - Link to generated variations folder
- `direct_spun_image_link` - Direct link to generated ad image

**Set Variables Configuration:**
Update these values in the "Set Variables" node:
- `googleDriveFolderId` - Your parent Google Drive folder ID
- `changeRequest` - Your brand-specific variation instructions
- `spreadsheetId` - Your Google Sheets database ID

**Apify API Setup:**
1. Create Apify account and obtain API key
2. Replace `&lt;your-apify-api-key-here&gt;` with actual credentials
3. Customize search terms in the JSON body for your target competitors
4. Adjust scraping count (default: 20 ads per run)

## **Business Use Cases**

- **PPC Agencies** - Automate competitive research and creative generation for client campaigns
- **E-commerce Brands** - Monitor competitor advertising strategies and generate response campaigns
- **Marketing Teams** - Scale creative production with AI-powered competitive intelligence
- **Freelance Marketers** - Offer advanced competitive analysis and creative services to clients
- **SaaS Companies** - Track competitor messaging and generate differentiated ad variations
- **Agency Teams** - Replace manual creative research with automated competitive intelligence systems

## **Revenue Potential**

This system revolutionizes PPC agency economics:
- **60-70% reduction** in manual creative work and competitive research time
- **3-5x faster** campaign launch times with ready-to-use creative assets
- **$2,000-$5,000 service value** for comprehensive competitive intelligence and creative generation
- **Scalable competitive advantage** through automated monitoring of competitor campaigns
- **Premium positioning** offering AI-powered creative intelligence that competitors can't match manually

**Difficulty Level:** Advanced  
**Estimated Build Time:** 2-3 hours  
**Monthly Operating Cost:** ~$100 (Apify + OpenAI + Google APIs)

## **Watch My Complete Live Build**

Want to see me build this entire system from scratch? I walk through every component live - including the ad library integration, AI analysis setup, image generation pipeline, and all the debugging that goes into creating a production-ready competitive intelligence system.

🎥 **See My Live Build Process:** "[Ad Library Scraper & AI Image Spinner System (N8N Build)](https://www.youtube.com/watch?v=GNmlnt52aSM&ab_channel=NickSaraev)"

This comprehensive tutorial shows the real development process - including advanced AI prompting for image generation, competitive analysis strategies, and the organizational systems that make this scalable for agency use.

## **Set Up Steps**

**Initial Database Setup:**
- Run the initialization flow once to create your Google Drive folder and Sheets database
- Copy the generated folder ID and spreadsheet ID into the "Set Variables" node
- Configure your brand-specific change request template for consistent output

**Apify Integration:**
- Set up Apify account with Facebook Ad Library scraper access
- Configure API credentials and test with small ad batches
- Customize search parameters for your target competitors and industries

**AI Service Configuration:**
- Connect OpenAI API for vision analysis and image generation
- Set up appropriate rate limiting to control processing costs
- Test the complete AI pipeline with sample competitor ads

**Google Services Setup:**
- Configure Google Drive API credentials for automated folder creation
- Set up Google Sheets integration for campaign database management
- Test the complete asset organization and tracking workflow

**Campaign Customization:**
- Define your brand guidelines and messaging requirements in the change request
- Set up variation templates for different campaign types and industries
- Configure batch processing limits based on your API usage requirements

**Production Optimization:**
- Remove the limit node for full-scale competitive monitoring
- Set up automated scheduling for regular competitive intelligence gathering
- Monitor and optimize AI prompts based on generated creative quality

## **Advanced Optimizations**

Scale the system with:
- **Multi-Platform Scraping:** Extend to LinkedIn, Twitter, and Google Ads for comprehensive competitive intelligence
- **Performance Tracking:** Integrate with ad platforms to track performance of generated variations
- **Style Guide Automation:** Create industry-specific variation templates for consistent brand application
- **A/B Testing Integration:** Automatically test generated variations against source ads for performance optimization
- **CRM Integration:** Connect competitive intelligence data with sales and marketing systems

## **Important Considerations**

- **API Rate Limits:** Built-in delays prevent service overload and ensure reliable operation
- **Creative Quality:** System generates multiple variations to account for AI generation variability
- **Legal Compliance:** Use generated variations as inspiration while respecting intellectual property rights
- **Cost Management:** Monitor OpenAI image generation costs and adjust batch sizes accordingly
- **Competitive Ethics:** Focus on learning from successful patterns rather than direct copying

## **Why This System Works**

The competitive advantage lies in speed and scale:
- **Minutes vs. Hours:** Generate campaign-ready creative variations in minutes instead of hours of manual work
- **Systematic Analysis:** AI vision provides consistent, comprehensive analysis that humans might miss
- **Organized Intelligence:** Structured asset management enables rapid campaign deployment and iteration
- **Scalable Monitoring:** Automated competitive research that scales beyond manual capacity
- **Quality Variations:** Multiple AI-generated options ensure high-quality creative output

## **Check Out My Channel**

For more advanced automation systems and proven agency-building strategies that generate real revenue, explore [my YouTube channel](https://www.youtube.com/@nicksaraev) where I share the exact methodologies used to scale automation agencies to $72K+ monthly revenue.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Filter, Convert to File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
