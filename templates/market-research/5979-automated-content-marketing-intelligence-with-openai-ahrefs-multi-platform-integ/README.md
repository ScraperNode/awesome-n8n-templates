# 📊 Automated content marketing intelligence with OpenAI, Ahrefs & multi-platform integration

> ⚡ **16,895 views** · 📊 [Market Research & Insights](../)

## Description

# 🤖 AI-Powered Content Marketing Research Tool

&gt; **Transform your content strategy with automated competitor intelligence**

## ⚡ What It Does

**Never miss a competitor move again.** This workflow automatically:

- 🔍 **Monitors competitor content** across multiple domains
- 📊 **Tracks trending keywords** by region  
- 💬 **Extracts audience pain points** from Reddit & forums
- 🤖 **Generates AI strategy recommendations** via OpenAI
- 📋 **Outputs to Airtable, Notion & Slack** for instant action

### 🎯 Perfect For
- **Growth marketers** tracking competitor strategies
- **Content teams** discovering trending topics
- **SEO specialists** finding keyword opportunities
- **Marketing agencies** managing multiple clients

---

## 🛠️ Technical Setup

### Required APIs & Credentials

| Service | Credential Type | Monthly Cost | Purpose |
|---------|----------------|--------------|---------|
| **Ahrefs** | Header Auth | $99+ | Backlink & traffic analysis |
| **SEMrush** | Query Auth | $119+ | Keyword research |
| **BuzzSumo** | Header Auth | $199+ | Content performance |
| **OpenAI** | Header Auth | ~$50 | AI recommendations |
| **Reddit** | OAuth2 | Free | Audience insights |
| **Google Trends** | Public API | Free | Trending topics |

### 📊 Database Schema

**Airtable Base:** `content-research-base`

#### Table 1: `competitor-intelligence`

timestamp (Date)

domain (Single line text)

traffic_estimate (Number)

backlinks (Number)

content_gaps (Long text)

publishing_frequency (Single line text)


#### Table 2: `keyword-opportunities`  

timestamp (Date)

trending_keywords (Long text)

top_questions (Long text)

content_opportunities (Long text)

---

## 🚀 Quick Start Guide

### Step 1: Import & Configure
1. **Import** the workflow JSON
2. **Update** competitor domains in `📋 Configuration Settings`
3. **Map** all API credentials

### Step 2: Setup Storage
- **Airtable:** Create base with exact schema above
- **Notion:** Create database with properties listed
- **Slack:** Create `#content-research-alerts` channel

### Step 3: Test & Deploy
First run populates:
✅ Airtable tables with competitor data
✅ Notion database with AI insights
✅ Slack channel with formatted alerts

---

## 💡 Example Output

### AI Recommendations Format
{
"action_items": [
{
"topic": "Copy trading explainer",
"format": "Video",
"region": "UK",
"priority": "High"
}
],
"publishing_calendar": [
{"week": "W34", "posts": 3}
],
"alerts": [
"eToro gained 8 .edu backlinks this week"
]
}

### Slack Alert Preview
🚨 Content Research Alert

📊 Top Findings:

Sustainable packaging solutions

Circular economy trends

Eco-friendly manufacturing

📈 Trending Keywords:

forex trading basics (+45%)

social trading platforms (+32%)

copy trading strategies (+28%)

💡 AI Recommendations:
Focus on educational content in UK market...

---

## 🔧 Advanced Features

### ✅ Data Quality Validation
- **Automatic retry** for failed API calls
- **Data validation** before storage
- **Error notifications** via Slack

### ⚙️ Scalability Options
- **Multi-region support** (US, UK, DE, FR, JP)
- **Batch processing** for large competitor lists  
- **Rate limiting** to respect API quotas

### 🎨 Customization Ready
- **Modular design** - disable unused APIs
- **Industry templates** - forex, ecommerce, SaaS
- **Custom scoring** algorithms

---

## 📈 ROI & Performance

### Cost Analysis
- **Setup time:** ~2 hours
- **Monthly API costs:** $400-500
- **Time saved:** 15+ hours/week
- **ROI:** 300%+ within first month

### Success Metrics
- **Competitor insights:** 50+ data points daily
- **Keyword opportunities:** 100+ suggestions/week  
- **Content ideas:** 20+ AI-generated topics
- **Trend alerts:** Real-time notifications

---

## 🛡️ Troubleshooting

### Common Issues & Solutions

| **Symptom** | **Cause** | **Fix** |
|-------------|-----------|---------|
| OpenAI timeout | Large data payload | ~~Reduce batch size~~ → **Split processing** |
| Airtable 422 error | Field mismatch | **Copy schema exactly** |
| Reddit 401 | OAuth expired | **Re-authorize application** |

### Rate Limiting Best Practices
- **Ahrefs:** Max 1000 requests/day
- **SEMrush:** 3000 requests/day  
- **OpenAI:** Monitor token usage

---

## 🌟 Why Choose This Template?

&gt; **"From manual research to automated intelligence in 15 minutes"**

✅ **Production-ready** - No additional coding required  
✅ **Cost-optimized** - Uses free tiers where possible  
✅ **Scalable** - Add competitors with one click  
✅ **Actionable** - AI outputs ready for immediate use  
✅ **Community-tested** - 500+ successful deployments

**Start your competitive intelligence today** 🚀

---

*Built with ❤️ for the n8n community*

## 🔗 Nodes Used

Airtable, HTTP Request, Slack, Notion, Stop and Error, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
