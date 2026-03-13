# 📁 Organize & analyze creative assets with ScrapeGraphAI and Google Sheets dashboard

> ⚡ **520 views** · 📁 [File Management](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Creative Asset Manager with ScrapeGraphAI Analysis and Brand Compliance

## 🎯 Target Audience
- Creative directors and design managers
- Marketing teams managing brand assets
- Digital asset management (DAM) administrators
- Brand managers ensuring compliance
- Content creators and designers
- Marketing operations teams
- Creative agencies managing client assets
- Brand compliance officers

## 🚀 Problem Statement
Managing creative assets manually is inefficient and error-prone, often leading to inconsistent branding, poor organization, and compliance issues. This template solves the challenge of automatically analyzing, organizing, and ensuring brand compliance for creative assets using AI-powered analysis and automated workflows.

## 🔧 How it Works

This workflow automatically processes uploaded creative assets using ScrapeGraphAI for intelligent analysis, generates comprehensive tags, checks brand compliance, organizes files systematically, and maintains a centralized dashboard for creative teams.

### Key Components

1. **Asset Upload Trigger** - Webhook endpoint that activates when new creative assets are uploaded
2. **ScrapeGraphAI Asset Analyzer** - Uses AI to extract detailed information from visual assets
3. **Tag Generator** - Creates comprehensive, searchable tags based on asset analysis
4. **Brand Compliance Checker** - Evaluates assets against brand guidelines and standards
5. **Asset Organizer** - Creates organized folder structures and standardized naming
6. **Creative Team Dashboard** - Updates Google Sheets with organized asset information

## 📊 Google Sheets Column Specifications

The template creates the following columns in your Google Sheets:

| Column | Data Type | Description | Example |
|--------|-----------|-------------|---------|
| **asset_id** | String | Unique asset identifier | "asset_1703123456789_abc123def" |
| **name** | String | Standardized filename | "image-social-media-2024-01-15T10-30-00.jpg" |
| **path** | String | Storage location path | "/creative-assets/2024/01/image/social-media" |
| **asset_type** | String | Type of creative asset | "image" |
| **dimensions** | String | Asset dimensions | "1920x1080" |
| **file_format** | String | File format | "jpg" |
| **primary_colors** | Array | Extracted color palette | ["#FF6B35", "#004E89"] |
| **content_description** | String | AI-generated content description | "Modern office workspace with laptop" |
| **text_content** | String | Any text visible in asset | "Welcome to our workspace" |
| **style_elements** | Array | Detected style characteristics | ["modern", "minimalist"] |
| **generated_tags** | Array | Comprehensive tag list | ["high-resolution", "brand-logo", "social-media"] |
| **usage_context** | String | Suggested usage context | "social-media" |
| **brand_elements** | Array | Detected brand elements | ["logo", "typography"] |
| **compliance_score** | Number | Brand compliance score (0-100) | 85 |
| **compliance_status** | String | Approval status | "approved-with-warnings" |
| **compliance_issues** | Array | List of compliance problems | ["Non-brand colors detected"] |
| **upload_date** | DateTime | Asset upload timestamp | "2024-01-15T10:30:00Z" |
| **searchable_keywords** | String | Search-optimized keywords | "image social-media modern brand-logo" |

## 🛠️ Setup Instructions

**Estimated setup time: 25-30 minutes**

### Prerequisites
- n8n instance with community nodes enabled
- ScrapeGraphAI API account and credentials
- Google Sheets account with API access
- File upload system or DAM integration
- Brand guidelines document (for compliance configuration)

### Step-by-Step Configuration

#### 1. Install Community Nodes
```bash
# Install required community nodes
npm install n8n-nodes-scrapegraphai
```

#### 2. Configure ScrapeGraphAI Credentials
- Navigate to Credentials in your n8n instance
- Add new ScrapeGraphAI API credentials
- Enter your API key from ScrapeGraphAI dashboard
- Test the connection to ensure it's working

#### 3. Set up Google Sheets Connection
- Add Google Sheets OAuth2 credentials
- Grant necessary permissions for spreadsheet access
- Create a new spreadsheet for creative asset management
- Configure the sheet name (default: "Creative Assets Dashboard")

#### 4. Configure Webhook Trigger
- Set up the webhook endpoint for asset uploads
- Configure the webhook URL in your file upload system
- Ensure `asset_url` parameter is passed in webhook payload
- Test webhook connectivity

#### 5. Customize Brand Guidelines
- Update the Brand Compliance Checker node with your brand colors
- Configure approved file formats and size limits
- Set required brand elements and fonts
- Define resolution standards and quality requirements

#### 6. Configure Asset Organization
- Customize folder structure preferences
- Set up naming conventions for different asset types
- Configure metadata extraction preferences
- Set up search optimization parameters

#### 7. Test and Validate
- Upload a test asset to trigger the workflow
- Verify all analysis steps complete successfully
- Check Google Sheets for proper data formatting
- Validate brand compliance scoring

## 🔄 Workflow Customization Options

### Modify Analysis Parameters
- Adjust ScrapeGraphAI prompts for specific asset types
- Customize tag generation algorithms
- Modify color analysis sensitivity
- Add industry-specific analysis criteria

### Extend Brand Compliance
- Add more sophisticated brand guideline checks
- Implement automated correction suggestions
- Include legal compliance verification
- Add accessibility compliance checks

### Customize Organization Structure
- Modify folder hierarchy based on team preferences
- Implement custom naming conventions
- Add version control and asset history
- Configure backup and archiving rules

### Output Customization
- Add integration with DAM systems
- Implement asset approval workflows
- Create automated reporting and analytics
- Add team collaboration features

## 📈 Use Cases

- **Brand Asset Management**: Automatically organize and tag brand assets
- **Compliance Monitoring**: Ensure all assets meet brand guidelines
- **Creative Team Collaboration**: Centralized asset management and sharing
- **Marketing Campaign Management**: Organize assets by campaign and context
- **Asset Discovery**: AI-powered search and recommendation system
- **Quality Control**: Automated quality and compliance checks

## 🚨 Important Notes

- Respect ScrapeGraphAI API rate limits and terms of service
- Implement appropriate delays between requests to avoid rate limiting
- Regularly review and update brand guidelines in the compliance checker
- Monitor API usage to manage costs effectively
- Keep your credentials secure and rotate them regularly
- Consider data privacy and copyright compliance for creative assets
- Ensure proper backup and version control for important assets

## 🔧 Troubleshooting

**Common Issues:**
- ScrapeGraphAI connection errors: Verify API key and account status
- Webhook trigger failures: Check webhook URL and payload format
- Google Sheets permission errors: Check OAuth2 scope and permissions
- Asset analysis errors: Review the ScrapeGraphAI prompt configuration
- Brand compliance false positives: Adjust guideline parameters
- File organization issues: Check folder permissions and naming conventions

**Support Resources:**
- ScrapeGraphAI documentation and API reference
- n8n community forums for workflow assistance
- Google Sheets API documentation for advanced configurations
- Digital asset management best practices
- Brand compliance and governance guidelines

## 🔗 Nodes Used

Google Sheets, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
