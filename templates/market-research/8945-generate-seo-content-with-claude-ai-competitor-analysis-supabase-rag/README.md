# 📊 Generate SEO content with Claude AI, competitor analysis & Supabase RAG

> ⚡ **512 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# SEO Content Generation Workflow - n8n Template Instructions

## Who's it for

This workflow is designed for SEO professionals, content marketers, digital agencies, and businesses who need to generate optimized meta tags, H1 headings, and content briefs at scale. Perfect for teams managing multiple clients or large keyword lists who want to automate competitor analysis and SEO content creation while maintaining quality and personalization.

## How it works

The workflow automates the entire SEO content creation process by analyzing your target keywords against top competitors, then generating optimized meta elements and comprehensive content briefs. It uses AI-powered analysis combined with real competitor data to create SEO-friendly content that's tailored to your specific business context.

The system processes keywords in batches, performs Google searches, scrapes competitor content, analyzes heading structures, and generates personalized SEO content using your company's database information for maximum relevance.

## Requirements

### Required Services and Credentials

- **Google Sheets API**: For reading configuration and updating results
- **Anthropic API**: For AI content generation (Claude Sonnet 4)
- **OpenAI API**: For embeddings and vector search
- **Apify API**: For Google search results
- **Firecrawl API**: For competitor website scraping
- **Supabase**: For vector database (optional but recommended)

### Template Spreadsheet

Copy this template spreadsheet and configure it with your information:
**[Template Link](https://docs.google.com/spreadsheets/d/1cRlqsueCTgfMjO7AzwBsAOzTCPBrGpHSzRg05fLDnWc)**

## How to set up

### Step 1: Copy and Configure Template

1. Make a copy of the template spreadsheet
2. Fill in the **Client Information** sheet:
   - **Client name**: Your company or client's name
   - **Client information**: Brief business description
   - **URL**: Website address
   - **Supabase database**: Database name (prevents AI hallucination)
   - **Tone of voice**: Content style preferences
   - **Restrictive instructions**: Topics or approaches to avoid

3. Complete the **SEO** sheet with your target pages:
   - **Page**: Page you're optimizing (e.g., "Homepage", "Product Page")
   - **Keyword**: Main search term to target
   - **Awareness level**: User familiarity with your business
   - **Page type**: Category (homepage, blog, product page, etc.)

### Step 2: Import Workflow

1. Import the n8n workflow JSON file
2. Configure all required API credentials in n8n:
   - Google Sheets OAuth2
   - Anthropic API key
   - OpenAI API key
   - Apify API key
   - Firecrawl API key
   - Supabase credentials (if using vector database)

### Step 3: Test Configuration

1. Activate the workflow
2. Send your Google Sheets URL to the chat trigger
3. Verify that all sheets are readable and credentials work
4. Test with a single keyword row first

## Workflow Process Overview

### Phase 0: Setup and Configuration
- Copy template spreadsheet
- Configure client information and SEO parameters
- Set up API credentials in n8n

### Phase 1: Data Input and Processing
- Chat trigger receives Google Sheets URL
- System reads client configuration and SEO data
- Filters valid keywords and empty H1 fields
- Initiates batch processing

### Phase 2: Competitor Research and Analysis
- Searches Google for top 10 results per keyword
- Scrapes first 5 competitor websites
- Extracts heading structures (H1-H6)
- Analyzes competitor meta tags and content organization

### Phase 3: Meta Tags and H1 Generation
- AI analyzes keyword context and competitor data
- Accesses client database for personalization
- Generates optimized meta title (65 chars max)
- Creates compelling meta description (165 chars max)
- Produces user-focused H1 (70 chars max)

### Phase 4: Content Brief Creation
- Analyzes search intent percentages
- Develops content strategy based on competitor analysis
- Creates detailed MECE page structure
- Suggests rich media elements
- Provides writing recommendations and detail level scoring

### Phase 5: Data Integration and Updates
- Combines all generated content into unified structure
- Updates Google Sheets with new SEO elements
- Preserves existing data while adding new content
- Continues batch processing for remaining keywords

## How to customize the workflow

### Adjusting AI Models
- Replace Anthropic Claude with other LLM providers
- Modify system prompts for different content styles
- Adjust character limits for meta elements

### Modifying Competitor Analysis
- Change number of competitors analyzed (currently 5)
- Adjust scraping parameters in Firecrawl nodes
- Modify heading extraction logic in JavaScript nodes

### Customizing Output Format
- Update Google Sheets column mapping in Code node
- Modify structured output parser schema
- Change batch processing size in Split in Batches node

### Adding Quality Controls
- Insert validation nodes between phases
- Add error handling and retry logic
- Implement content quality scoring

### Extending Functionality
- Add keyword research capabilities
- Include image optimization suggestions
- Integrate social media content generation
- Connect to CMS platforms for direct publishing

## Best Practices

- Test with small batches before processing large keyword lists
- Monitor API usage and costs across all services
- Regularly update system prompts based on output quality
- Maintain clean data in your Google Sheets template
- Use descriptive node names for easier workflow maintenance

## Troubleshooting

- **API Errors**: Check credential configuration and usage limits
- **Scraping Failures**: Firecrawl nodes have error handling enabled
- **Empty Results**: Verify keyword formatting and competitor availability
- **Sheet Updates**: Ensure proper column mapping in final Code node
- **Processing Stops**: Check batch processing limits and timeout settings

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, AI Agent, Embeddings OpenAI, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
