# 📊 Generate website sitemaps & visual trees with Firecrawl and Google Sheets

> ⚡ **1,009 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# Website sitemap generator and visual tree creator
## Who's it for
Web developers, SEO specialists, UX designers, and digital marketers who need to analyze website structure, create visual sitemaps, or audit site architecture for optimization purposes.
## What it does
This workflow automatically generates a comprehensive sitemap from any website URL and creates an organized hierarchical structure in Google Sheets. It follows the website's sitemap to discover all pages, then organizes them by navigation levels (Level 1, Level 2, etc.) with proper parent-child relationships. The output can be further processed to create visual tree diagrams and mind maps.
## How it works
The workflow follows a five-step automation process:

URL Input: Accepts website URL via chat interface
Site Crawling: Uses Firecrawl to discover all pages following the website's sitemap only
Success Validation: Checks if crawling was successful (some sites block external crawlers)
Hierarchical Organization: Processes URLs into a structured tree with proper level relationships
Google Sheets Export: Creates a formatted spreadsheet with the complete site architecture

The system respects robots.txt and follows only sitemap-declared pages to ensure ethical crawling.
## Requirements

Firecrawl API key (for website crawling and sitemap discovery)
Google Sheets access
Google Drive access (for template duplication)

## How to set up
### Step 1: Prepare your template (recommended)
It's recommended to create your own copy of the base template:

Access the base Google Sheets template
Make a copy for your personal use
Update the workflow's "Copy template" node with your template's file ID (replace the default ID: 12lV4HwgudgzPPGXKNesIEExbFg09Tuu9gyC_jSS1HjI)
This ensures you have control over the template formatting and can customize it as needed

### Step 2: Configure API credentials
Set up the following credentials in n8n:

Firecrawl API: For crawling websites and discovering sitemaps
Google Sheets OAuth2: For creating and updating spreadsheets
Google Drive OAuth2: For duplicating the template file

### Step 3: Configure Firecrawl settings (optional)
The workflow uses optimized Firecrawl settings:

ignoreSitemap: false - Respects the website's sitemap
sitemapOnly: true - Only crawls URLs listed in sitemap files
These settings ensure ethical crawling and faster processing

### Step 4: Access the workflow

The workflow uses a chat trigger interface - no manual configuration needed
Simply provide the website URL you want to analyze when prompted

## How to use the workflow
### Basic usage

Start the chat: Access the workflow via the chat interface
Provide URL: Enter the website URL you want to analyze (e.g., "https://example.com")
Wait for processing: The system will crawl, organize, and export the data
Receive your results: Get an automatic direct clickable link to your generated Google Sheets - no need to search for the file

### Error handling

Invalid URLs: If the provided URL is invalid or the website blocks crawling, you'll receive an immediate error message
Graceful failure: The workflow stops without creating unnecessary files when errors occur
Common causes: Incorrect URL format, robots.txt restrictions, or site security settings

### File organization

Automatic naming: Generated files follow the pattern "[Website URL] - n8n - Arborescence"
Google Drive storage: Files are automatically organized in your Google Drive
Instant access: Direct link provided immediately upon completion

### Advanced processing for visual diagrams
#### Step 1: Copy sitemap data
Once your Google Sheets is ready:

Copy all the hierarchical data from the generated spreadsheet
Prepare it for AI processing

#### Step 2: Generate ASCII tree structure
Use any AI model with this prompt:
Create a hierarchical tree structure from the following website sitemap data. Return ONLY the tree structure using ASCII tree formatting with ├── and └── characters. Do not include any explanations, comments, or additional text - just the pure tree structure. The tree should start with the root domain and show all pages organized by their hierarchical levels. Use proper indentation to show parent-child relationships. Here is the sitemap data: [PASTE THE SITEMAP DATA HERE] 

Requirements: 
- Use ASCII tree characters (├── └── │) 
- Show clear hierarchical relationships 
- Include all pages from the sitemap 
- Return ONLY the tree structure, no other text 
- Start with the root domain as the top level
#### Step 3: Create visual mind map

Visit the Whimsical Diagrams GPT
Request a mind map creation using your ASCII tree structure
Get a professional visual representation of your website architecture

## Results interpretation
### Google Sheets output structure
The generated spreadsheet contains:

Niv 0 to Niv 5: Hierarchical levels (0 = homepage, 1-5 = navigation depth)
URL column: Complete URLs for reference
Hyperlinked structure: Clickable links organized by hierarchy
Multi-domain support: Handles subdomains and different domain structures

### Data organization features

Automatic sorting: Pages organized by navigation depth and alphabetical order
Parent-child relationships: Clear hierarchical structure maintained
Domain separation: Main domains and subdomains processed separately
Clean formatting: URLs decoded and formatted for readability

## Workflow limitations

Sitemap dependency: Only discovers pages listed in the website's sitemap
Crawling restrictions: Some websites may block external crawlers
Level depth: Limited to 5 hierarchical levels for clarity
Rate limits: Respects Firecrawl API limitations
Template dependency: Requires access to the base template for duplication

## Use cases

SEO audits: Analyze site structure for optimization opportunities
UX research: Understand navigation patterns and user paths
Content strategy: Identify content gaps and organizational issues
Site migrations: Document existing structure before redesigns
Competitive analysis: Study competitor site architectures
Client presentations: Create visual site maps for stakeholder reviews

## 🔗 Nodes Used

Google Sheets, Google Drive, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
