# 📱 Find engagement opportunities from Skool communities using Apify & GPT-4.1

> ⚡ **926 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who's it for

This workflow is for **community builders, marketers, consultants, coaches, and thought leaders** who want to grow their presence in **Skool communities** through strategic, value-driven engagement. It's especially useful for professionals who want to:

- Build authority in their niche by providing helpful insights
- Scale their community engagement without spending hours manually browsing posts
- Identify high-value conversation opportunities that align with their expertise
- Maintain authentic, helpful presence across multiple Skool communities

## What problem is this workflow solving

Many professionals struggle to consistently engage meaningfully in online communities due to:
- **Time constraints**: Manually browsing multiple communities daily is time-consuming
- **Missed opportunities**: Important discussions happen when you're not online
- **Inconsistent engagement**: Sporadic participation reduces visibility and relationship building
- **Generic responses**: Quick replies often lack the depth needed to showcase expertise

This workflow solves these problems by automatically monitoring your target Skool communities, using AI to identify posts where your expertise could add genuine value, generating thoughtful contextual comment suggestions, and organizing opportunities for efficient manual review and engagement.

## How it works

### Scheduled Community Monitoring
Runs daily at 7 PM to scan your configured Skool communities for new posts and discussions from the last 24 hours.

### Intelligent Configuration Management
- Pulls settings from Airtable including target communities, your domain expertise, and preferred tools
- Possibility to add several configurations
- Filters for active configurations only
- Processes multiple community URLs efficiently

### Comprehensive Data Extraction
Uses Apify Skool Scraper to collect:
- Post content and metadata
- Comments over 50 characters (quality filter)
- Direct links for easy access

### AI-Powered Opportunity Analysis
Leverages OpenAI GPT-4.1 to:
- Analyze each post for engagement opportunities based on your expertise
- Identify specific trigger sentences that indicate a need you can address
- Generate contextual, helpful comment suggestions
- Maintain authentic tone without being promotional

### Smart Filtering and Organization
- Only surfaces genuine opportunities where you can add value
- Stores results in Airtable with detailed reasoning
- Provides suggested comments ready for review and posting
- Tracks engagement history to avoid duplicate responses

### Quality Control and Review
All opportunities are saved to Airtable where you can:
- Review AI reasoning and suggested responses
- Edit comments before posting
- Track which opportunities you've acted on
- Monitor success patterns over time

## How to set up

### Required credentials
- **OpenAI API key** - For GPT-4.1 powered opportunity analysis
- **Airtable Personal Access Token** - For configuration and results storage
- **Apify API token** - For Skool community scraping

### Airtable base setup

Create an Airtable base with two tables:

**Config Table** (`config`):
- `Name` (Single line text): Your configuration name
- `Skool URLs` (Long text): Comma-separated list of Skool community URLs
- `cookies` (Long text): Your Skool session cookies for authenticated access
- `Domain of Activity` (Single line text): Your area of expertise (e.g., "AI automation", "Digital marketing")
- `Tools Used` (Single line text): Your preferred tools to recommend (e.g., "n8n", "Zapier")
- `active` (Checkbox): Whether this configuration is currently active

**Results Table** (`Table 1`):
- `title` (Single line text): Post title/author
- `url` (URL): Direct link to the post
- `reason` (Long text): AI's reasoning for the opportunity
- `trigger` (Long text): Specific sentence that triggered the opportunity
- `suggested answer` (Long text): AI-generated comment suggestion
- `config` (Link to another record): Reference to the config used
- `date` (Date): When the opportunity was found
- `Select` (Single select): Status tracking (not commented/commented)

### Skool cookies setup
To access private Skool communities, you'll need to:
1. **Install Cookie Editor**: Go to Chrome Web Store and install the "Cookie Editor" extension
2. **Login to Skool**: Navigate to any Skool community you want to monitor and log in
3. **Open Cookie Editor**: Click the Cookie Editor extension icon in your browser toolbar
4. **Export cookies**: 
   - Click "Export" button in the extension
   - Copy the exported text
5. **Add to Airtable**: Paste the cookie string into the `cookies` field in your Airtable config

### Trigger configuration
- Ensure the Schedule Trigger is set to your preferred monitoring time
- Default is 7 PM daily, but adjust based on your target communities' peak activity

## Requirements

- **Self-hosted n8n or n8n Cloud account**
- **Active Skool community memberships** - You must be a legitimate member of communities you want to monitor
- **OpenAI API credits** 
- **Apify subscription** - For reliable Skool data scraping (free tier available)
- **Airtable account** - Free tier sufficient for most use cases

## How to customize the workflow

### Modify AI analysis criteria
Edit the `EvaluateOpportunities And Generate Comments` node to:
- Adjust the opportunity detection sensitivity
- Modify the comment tone and style
- Add industry-specific keywords or phrases

### Change monitoring frequency
Update the Schedule Trigger to:
- Multiple times per day for highly active communities
- Weekly for slower-moving professional groups
- Custom intervals based on community activity patterns

### Customize data collection
Modify the Apify scraper settings to:
- Adjust the time window (currently 24 hours)
- Change comment length filters (currently &gt;50 characters)
- Include/exclude media content
- Modify the number of comments per post

### Add additional filters
Insert filter nodes to:
- Skip posts from specific users
- Focus on posts with minimum engagement levels
- Exclude certain post types or keywords
- Prioritize posts from influential community members

### Enhance output options
Add nodes after `Record Results` to:
- Send Slack/Discord notifications for high-priority opportunities
- Create calendar events for engagement tasks
- Export daily summaries to Google Sheets
- Integrate with CRM systems for lead tracking

## Example outputs

### Opportunity analysis result
```json
{
  "opportunity": true,
  "reason": "The user is struggling with manual social media management tasks that could be automated using n8n workflows.",
  "trigger_sentence": "I'm spending 3+ hours daily just scheduling posts and responding to comments across all my social accounts.",
  "suggested_comment": "That sounds exhausting! Have you considered setting up automation workflows? Tools like n8n can handle the scheduling and even help with response suggestions, potentially saving you 80% of that time. The initial setup takes a day but pays dividends long-term."
}
Airtable record example

Title: "Sarah Johnson - Social Media Burnout"
URL: https://www.skool.com/community/post/123456
Reason: "User expressing pain point with manual social media management - perfect fit for automation solutions"
Trigger: "I'm spending 3+ hours daily just scheduling posts..."
Suggested Answer: "That sounds exhausting! Have you considered setting up automation workflows?..."
Config: [Your Config Name]
Date: 2024-12-09 19:00:00
Status: "not commented"
```

## Best practices

### Authentic engagement
- Always review and personalize AI suggestions before posting
- Focus on being genuinely helpful rather than promotional
- Share experiences and ask follow-up questions
- Engage in subsequent conversation when people respond

### Community guidelines
- Respect each community's rules and culture
- Avoid over-promotion of your tools or services
- Build relationships before introducing solutions
- Contribute value consistently, not just when selling

### Optimization tips
- Monitor which types of opportunities convert best
- A/B test different comment styles and approaches
- Track engagement metrics on your actual comments
- Adjust AI prompts based on community feedback

## 🔗 Nodes Used

Airtable, HTTP Request, Schedule Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
