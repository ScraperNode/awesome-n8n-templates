# 📊 Generate answer engine optimization strategy with Firecrawl, Gemini, OpenAI

> ⚡ **410 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Generate AEO strategy from brand input using AI competitor analysis

This workflow automatically creates a comprehensive Answer Engine Optimization (AEO) strategy by identifying your top competitors, analyzing their positioning, and generating custom recommendations to help your brand rank in AI-powered search engines like ChatGPT, Perplexity, and Google SGE.

## Who it's for

This template is perfect for:
- **Digital marketing agencies** offering AEO services to clients
- **In-house marketers** optimizing content for AI search engines
- **Brand strategists** analyzing competitive positioning
- **Content teams** creating AI-optimized content strategies
- **SEO professionals** expanding into Answer Engine Optimization

## What it does

The workflow automates the entire AEO research and strategy process in 6 steps:

1. **Collects brand information** via a user-friendly web form (brand name, website, niche, product type, email)
2. **Identifies top 3 competitors** using Google Gemini AI based on product overlap, market position, digital presence, and geographic factors
3. **Scrapes target brand website** with Firecrawl to extract value propositions, features, and content themes
4. **Scrapes competitor websites** in parallel to gather competitive intelligence
5. **Generates comprehensive AEO strategy** using OpenAI GPT-4 with 15+ actionable recommendations
6. **Delivers formatted report via email** with executive summary, competitive analysis, and implementation roadmap

The entire process runs automatically and takes approximately 5-7 minutes to complete.

## How to set up

### Requirements

You'll need API credentials for:
- **Google Gemini API** (for competitor analysis) - [Get API key](https://ai.google.dev/)
- **OpenAI API** (for strategy generation) - [Get API key](https://platform.openai.com/api-keys)
- **Firecrawl API** (for web scraping) - [Get API key](https://firecrawl.dev/)
- **Gmail account** (for email delivery) - Use OAuth2 authentication

### Setup Steps

1. **Import the workflow** into your n8n instance
2. **Configure credentials**:
   - Add your Google Gemini API key to the "Google Gemini Chat Model" node
   - Add your OpenAI API key to the "OpenAI Chat Model" node
   - Add your Firecrawl API key as HTTP Header Auth credentials
   - Connect your Gmail account using OAuth2
3. **Activate the workflow** and copy the form webhook URL
4. **Test the workflow** by submitting a real brand through the form
5. **Check your email** for the generated AEO strategy report

### Credentials Setup Tips

- For Firecrawl: Create HTTP Header Auth credentials with header name `Authorization` and value `Bearer YOUR_API_KEY`
- For Gmail: Use OAuth2 to avoid authentication issues with 2FA
- Test each API credential individually before running the full workflow

## How it works

### Competitor Identification
The Google Gemini AI agent analyzes your brand based on 4 weighted criteria: product/service overlap (40%), market position (30%), digital presence (20%), and geographic overlap (10%). It returns structured JSON data with competitor names, URLs, overlap percentages, and detailed reasoning.

### Web Scraping
Firecrawl extracts structured data from websites using custom schemas. For each site, it captures: company name, products/services, value proposition, target audience, key features, pricing info, and content themes. This runs asynchronously with 60-second waits to allow for complete extraction.

### Strategy Generation  
OpenAI GPT-4 analyzes the combined brand and competitor data to generate a comprehensive report including: executive summary, competitive analysis, 15+ specific AEO tactics across 4 categories (content optimization, structural improvements, authority building, answer engine targeting), content priority matrix with 10 ranked topics, and a detailed implementation roadmap.

### Email Delivery
The strategy is formatted as a professional HTML email with clear sections, visual hierarchy, and actionable next steps. Recipients get an immediately implementable roadmap for improving their AEO performance.

## How to customize the workflow

### Change AI Models
- **Replace Google Gemini** with Claude, GPT-4, or other LLM in the competitor analysis node
- **Replace OpenAI** with Anthropic Claude or Google Gemini in the strategy generation node
- Both use LangChain agent nodes, making model swapping straightforward

### Modify Competitor Analysis
- **Find more competitors**: Edit the AI prompt to request 5 or 10 competitors instead of 3
- **Add filtering criteria**: Include factors like company size, funding stage, or geographic focus
- **Change ranking weights**: Adjust the 40/30/20/10 weighting in the prompt

### Enhance Data Collection
- **Add social media scraping**: Include LinkedIn, Twitter/X, or Facebook page analysis
- **Pull review data**: Integrate G2, Capterra, or Trustpilot APIs for customer sentiment
- **Include traffic data**: Add SimilarWeb or Semrush API calls for competitive metrics

### Change Output Format
- **Export to Google Docs**: Replace Gmail with Google Docs node to create shareable documents
- **Send to Slack/Discord**: Post strategy summaries to team channels for collaboration
- **Save to database**: Store results in Airtable, PostgreSQL, or MongoDB for tracking
- **Create presentations**: Generate PowerPoint slides using automation tools

### Add More Features
- **Schedule periodic analysis**: Run monthly competitive audits for specific brands
- **A/B test strategies**: Generate multiple strategies and compare results over time
- **Multi-language support**: Add translation nodes for international brands
- **Custom branding**: Modify email templates with your agency's logo and colors

### Adjust Scraping Behavior
- **Change Firecrawl schema**: Customize extracted data fields based on industry needs
- **Add timeout handling**: Implement retry logic for failed scraping attempts
- **Scrape more pages**: Extend beyond homepage to include blog, pricing, and about pages
- **Use different scrapers**: Replace Firecrawl with Apify, Browserless, or custom solutions

## Tips for best results

- **Provide clear brand information**: The more specific the product type and niche, the better the competitor identification
- **Ensure websites are accessible**: Some sites block scrapers; consider adding user agents or rotating IPs
- **Monitor API costs**: Firecrawl and OpenAI charges can add up; set usage limits
- **Review generated strategies**: AI recommendations should be reviewed and customized for your specific context
- **Iterate on prompts**: Fine-tune the AI prompts based on output quality over multiple runs

## Common use cases

- **Client onboarding** for marketing agencies - Generate initial AEO assessments
- **Content strategy planning** - Identify topics and angles competitors are missing
- **Quarterly audits** - Track competitive positioning changes over time  
- **Product launches** - Understand competitive landscape before entering market
- **Sales enablement** - Equip sales teams with competitive intelligence

---

**Note**: This workflow uses community and AI nodes that require external API access. Make sure your n8n instance can make outbound HTTP requests and has the necessary LangChain nodes installed.

## 🔗 Nodes Used

HTTP Request, Gmail, AI Agent, OpenAI Chat Model, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
