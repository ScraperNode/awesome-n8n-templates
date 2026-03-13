# 🎯 Monitor LinkedIn posts & create AI content digests with OpenAI and Airtable

> ⚡ **269 views** · 🎯 [AI Summarization & Classification](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

Automatically monitor LinkedIn posts from your community members and create AI-powered content digests for efficient social media curation.

This template is perfect for community managers, content creators, and social media teams who need to track LinkedIn activity from their network without spending hours manually checking profiles. It fetches recent posts, extracts key information, and creates digestible summaries using AI.

## Good to know

* **API costs apply** - LinkedIn API calls (~$0.01-0.05 per profile check) and OpenAI processing (~$0.001-0.01 per post)
* **Rate limiting included** - Built-in random delays prevent API throttling issues
* **Flexible scheduling** - Easy to switch from daily schedule to webhook triggers for real-time processing
* **Requires API setup** - Need RapidAPI access for LinkedIn data and OpenAI for content processing

## How it works

* **Daily profile scanning** - Automatically checks each LinkedIn profile in your Airtable for posts from yesterday
* **Smart data extraction** - Pulls post content, engagement metrics, author information, and timestamps
* **AI-powered summarization** - Creates 30-character previews of posts for quick content scanning
* **Duplicate prevention** - Checks existing records to avoid storing the same post multiple times
* **Structured storage** - Saves all processed data to Airtable with clean formatting and metadata
* **Batch processing** - Handles multiple profiles efficiently with proper error handling and delays

## How to use

* **Set up Airtable base** - Create tables for LinkedIn profiles and processed posts using the provided structure
* **Configure API credentials** - Add your RapidAPI LinkedIn access and OpenAI API key to n8n credentials
* **Import LinkedIn profiles** - Add community members' LinkedIn URLs and URNs to your profiles table
* **Test the workflow** - Run manually with a few profiles to ensure everything works correctly
* **Activate schedule** - Enable daily automation or switch to webhook triggers for real-time processing

## Requirements

* **Airtable account** - For storing profile lists and managing processed posts with proper field structure
* **RapidAPI Professional Network Data API** - Access to LinkedIn post data (requires subscription)
* **OpenAI API account** - For intelligent content summarization and preview generation
* **LinkedIn profile URNs** - Properly formatted LinkedIn profile identifiers for API calls

## Customising this workflow

* **Change monitoring frequency** - Switch from daily to hourly checks or use webhook triggers for real-time updates
* **Expand data extraction** - Add company information, hashtag analysis, or engagement trending
* **Integrate notification systems** - Add Slack, email, or Discord alerts for high-engagement posts
* **Connect content tools** - Link to Buffer, Hootsuite, or other social media management platforms for direct publishing
* **Add filtering logic** - Set up conditions to only process posts with minimum engagement thresholds
* **Scale with multiple communities** - Duplicate workflow for different LinkedIn communities or industry segments

## 🔗 Nodes Used

Airtable, HTTP Request, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
