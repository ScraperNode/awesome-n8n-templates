# 🎬 Discovering and analyzing conferences for networking with ScrapeGraphAI

> ⚡ **420 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# AI Conference Intelligence & Networking Optimizer with ScrapeGraphAI

&gt; **⚠️ IMPORTANT: This template requires a self-hosted n8n instance with ScrapeGraphAI integration. It cannot be used with n8n Cloud due to web scraping capabilities.**

![Conference Intelligence Workflow](https://via.placeholder.com/800x400/4A90E2/FFFFFF?text=Conference+Intelligence+Workflow+Preview)

This workflow automatically discovers industry conferences and provides AI-powered networking intelligence to maximize your event ROI.

## How it works

This workflow automatically discovers industry conferences and provides AI-powered networking intelligence to maximize your event ROI.

## Key Steps

1. **Scheduled Discovery** - Runs weekly to find new industry conferences from Eventbrite and other sources.
2. **AI-Powered Scraping** - Uses ScrapeGraphAI to extract comprehensive conference information including speakers, agenda, and networking opportunities.
3. **Speaker Intelligence** - Analyzes speakers to identify high-priority networking targets based on their role, company, and expertise.
4. **Agenda Analysis** - Extracts and maps the complete conference schedule to optimize your time and networking strategy.
5. **Networking Strategy** - Generates AI-powered recommendations for maximizing networking ROI with prioritized contact lists and approach strategies.

## Set up steps

**Setup time: 10-15 minutes**

1. **Configure ScrapeGraphAI credentials** - Add your ScrapeGraphAI API key for web scraping capabilities.
2. **Customize conference sources** - Update the Eventbrite URL to target specific industries or locations.
3. **Adjust monitoring frequency** - Modify the weekly trigger to match your conference discovery needs.
4. **Review networking priorities** - The system automatically prioritizes speakers, but you can customize the criteria.

## Technical Configuration

### Prerequisites
- Self-hosted n8n instance (version 1.0+)
- ScrapeGraphAI API credentials
- Eventbrite API access (optional, for enhanced data)

### API Configuration
```bash
# ScrapeGraphAI Setup
1. Sign up at https://scrapegraph.ai
2. Generate API key from dashboard
3. Add credentials in n8n: Settings &gt; Credentials &gt; Add Credential &gt; ScrapeGraphAI
```

### Customization Examples

**Modify Conference Sources:**
```javascript
// In Eventbrite Scraper node, update the URL:
const targetUrl = "https://www.eventbrite.com/d/united-states/technology/";
const industryFilter = "?q=artificial+intelligence";
```

**Adjust Networking Priorities:**
```javascript
// In Speaker Intelligence node, modify scoring weights:
const priorityWeights = {
  executive_level: 0.4,
  company_size: 0.3,
  industry_relevance: 0.2,
  speaking_topic: 0.1
};
```

**Customize Output Format:**
```javascript
// In Networking Strategy node, modify output structure:
const outputFormat = {
  high_priority: speakers.filter(s =&gt; s.score &gt; 8),
  medium_priority: speakers.filter(s =&gt; s.score &gt; 6 && s.score &lt;= 8),
  networking_plan: generateApproachStrategy(speakers)
};
```

## Data Storage & Output Formats

### Storage Options
- **Local JSON files** - Default storage for conference data
- **Google Drive** - For sharing reports with team
- **Database** - PostgreSQL/MySQL for enterprise deployments
- **Cloud Storage** - AWS S3, Google Cloud Storage

### Output Formats
- **JSON** - Raw data for API integration
- **CSV** - For spreadsheet analysis
- **PDF Reports** - Executive summaries
- **Markdown** - Documentation and sharing

### Sample Output Structure
```json
{
  "conference_data": {
    "event_name": "AI Summit 2024",
    "date": "2024-06-15",
    "location": "San Francisco, CA",
    "speakers": [
      {
        "name": "Dr. Sarah Chen",
        "title": "CTO, TechCorp",
        "company": "TechCorp Inc",
        "networking_score": 9.2,
        "priority": "high",
        "approach_strategy": "Connect via LinkedIn, mention shared AI interests"
      }
    ],
    "networking_plan": {
      "high_priority_targets": 5,
      "recommended_approach": "Focus on AI ethics panel speakers",
      "schedule_optimization": "Attend morning keynotes, network during breaks"
    }
  }
}
```

## Key Features

- **Automated Conference Discovery** - Finds relevant industry events from multiple sources
- **Speaker Intelligence Analysis** - Identifies high-value networking targets with contact priority scoring
- **Strategic Agenda Mapping** - Optimizes your conference schedule for maximum networking impact
- **AI-Powered Recommendations** - Provides personalized networking strategies and approach methods
- **Priority Contact Lists** - Ranks speakers by business value and networking potential

## Troubleshooting

### Common Issues
1. **ScrapeGraphAI Rate Limits** - Implement delays between requests
2. **Website Structure Changes** - Update scraping prompts in ScrapeGraphAI nodes
3. **API Authentication** - Verify credentials and permissions

### Performance Optimization
- Adjust trigger frequency based on conference season
- Implement caching for repeated data
- Use batch processing for large conference lists

## Support & Customization

For advanced customization or enterprise deployments, consider:
- Custom speaker scoring algorithms
- Integration with CRM systems (Salesforce, HubSpot)
- Advanced analytics and reporting dashboards
- Multi-language support for international conferences

## 🔗 Nodes Used

Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
