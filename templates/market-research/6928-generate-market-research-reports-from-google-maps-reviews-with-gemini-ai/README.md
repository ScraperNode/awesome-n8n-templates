# 📊 Generate market research reports from Google Maps reviews with Gemini AI

> ⚡ **1,422 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# 🚀 Market Research Analytics System

&gt; **Transform Google Maps data into actionable business insights with AI-powered analysis**

## 📋 Overview

This n8n workflow automatically collects business data from Google Maps, analyzes customer reviews using AI, and generates comprehensive market research reports delivered straight to your inbox.

---

## 🎯 Use Cases

| **User Type** | **Example Usage** |
|---------------|-------------------|
| **🏢 Business Owners** | Analyze competition before opening new location |
| **💼 Entrepreneurs** | Research market gaps and opportunities |
| **📊 Marketing Teams** | Understand customer sentiment and preferences |
| **💰 Investors** | Evaluate market potential in target areas |
| **🔍 Consultants** | Create detailed market reports for clients |

---

## 🛠️ Customization Examples

### Different Business Types
```json
// Restaurants
{"search_query": "restaurants downtown", "analysis_focus": "restaurant"}

// Hotels
{"search_query": "hotels near airport", "analysis_focus": "hospitality"}

// Fitness Centers
{"search_query": "gyms and fitness centers", "analysis_focus": "fitness"}
```

### Multiple Cities
```json
// New York
{"search_location": "@40.7589,-73.9851,12z", "city_name": "New York City"}

// London
{"search_location": "@51.5074,-0.1278,12z", "city_name": "London"}

// Tokyo
{"search_location": "@35.6762,139.6503,12z", "city_name": "Tokyo"}
```

---

## 📊 What You'll Get

Your automated report includes:

### 🎯 **Executive Summary**
- Key market insights in 3-4 sentences
- Biggest business opportunities identified
- Immediate action recommendations

### 📈 **Market Analysis**
- Competition density and market gaps
- Price segments and quality distribution
- Geographic hotspots and trends

### 💬 **Customer Intelligence**
- Top 5 factors customers value most
- Common complaints and pain points
- Overall sentiment analysis

### 🏆 **Competitive Landscape**
- Strongest competitors identified
- Their strengths and weaknesses
- Positioning opportunities

### 💡 **Strategic Recommendations**
- Optimal business model suggestions
- Pricing and marketing strategies
- 30/90/180-day action plans

---

## ⚙️ Technical Requirements

| **Service** | **Cost** | **Purpose** |
|-------------|----------|-------------|
| **SerpAPI** | Free tier (100 searches/month) | Google Maps data extraction |
| **Google Gemini** | Free tier available | AI-powered analysis |
| **Gmail** | Free | Report delivery |
| **n8n** | Cloud or self-hosted | Workflow automation |

---

## 🚨 Important Notes

- **API Limits:** Free tiers have monthly limits - monitor usage
- **Data Accuracy:** Results depend on Google Maps data availability
- **Processing Time:** Analysis may take 2-5 minutes depending on data volume
- **Language Support:** Works with multiple languages (update `language_code`)

---

## 🔧 Troubleshooting

| **Issue** | **Solution** |
|-----------|--------------|
| No results found | Check coordinates format and search query |
| API errors | Verify API keys are correctly configured |
| Email not received | Check Gmail credentials and recipient address |
| Slow processing | Normal for large datasets (20+ businesses) |

---

## 🚀 Pro Tips

- **🎯 Be Specific:** Use targeted search queries like "vegan restaurants" vs "restaurants"
- **📅 Schedule Runs:** Set up recurring analysis to track market changes
- **🌍 Multi-Location:** Run for multiple cities to compare markets
- **📱 Mobile-First:** Reports are mobile-responsive for on-the-go reading
- **🔄 Iterate:** Refine search parameters based on initial results

---

*Ready to unlock your market insights? Configure your parameters and execute the workflow!*

## 🔗 Nodes Used

HTTP Request, Gmail, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
