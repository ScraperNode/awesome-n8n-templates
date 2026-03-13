# 📊 Generate AI-powered news summaries with Gnews.io and GPT-4.1 to Slack

> ⚡ **390 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## This workflow automates news aggregation and summarization by fetching relevant articles from Gnews.io and using AI to create concise, professional summaries delivered via Slack

### **What Makes This Different:**
- **Real-Time News Aggregation** - Fetches current news articles from Gnews.io API based on user-specified topics
- **AI-Powered Summarization** - Uses GPT-4.1 to intelligently select and summarize the most relevant articles
- **Professional Formatting** - Generates clean, readable summaries with proper dates and article links
- **Form-Based Input** - Simple web form interface for topic specification
- **Automated Delivery** - Sends summarized news directly to Slack for immediate consumption
- **Intelligent Filtering** - AI selects the top 15 most relevant articles from search results

### **Key Benefits of Automated News Summarization:**
- **Time Efficiency** - Transforms hours of news reading into minutes of focused summaries
- **Comprehensive Coverage** - AI ensures all important financial and business developments are captured
- **Professional Quality** - Generates publication-ready summaries with proper formatting
- **Real-Time Updates** - Always delivers the latest news on any topic
- **Centralized Access** - All news summaries delivered to one Slack channel
- **Customizable Topics** - Search for news on any subject matter

---

## Who's it for

This template is designed for **business professionals, financial analysts, content creators, journalists, and anyone who needs to stay updated on specific topics** without spending hours reading through multiple news sources. It's perfect for professionals who want to stay informed about industry developments, market trends, or any specific subject matter while maintaining productivity.

## How it works / What it does

This workflow creates an **automated news summarization system** that transforms topic searches into professional news summaries. The system:

1. **Receives topic input** through a simple web form interface
2. **Fetches news articles** from Gnews.io API based on the specified topic
3. **Maps article data** to prepare for AI processing
4. **Uses AI to select** the 15 most relevant articles related to financial advancements, tools, research, and applications
5. **Generates professional summaries** with clear, readable language and proper formatting
6. **Includes article links** and current date for complete context
7. **Delivers summaries** via Slack notification for immediate review

**Key Innovation: Intelligent News Curation** - Unlike basic news aggregators, this system uses AI to intelligently filter and summarize only the most relevant articles, saving time while ensuring comprehensive coverage of important developments.

## How to set up

### 1. Configure Form Trigger
- Set up n8n form trigger with "topic" field (required)
- Configure form title as "News Search"
- Test form submission functionality
- Ensure proper data flow to subsequent nodes

### 2. Configure Gnews.io API
- **Get your API key**: Sign up at [gnews.io](https://gnews.io) and obtain your API key from the dashboard
- **Add API key to workflow**: In the "Get GNews articles" HTTP Request node, replace `"ADD YOUR API HERE"` with your actual Gnews.io API key
- **Example configuration**:
  ```json
  {
    "q": "{{ $json.topic }}",
    "lang": "en",
    "apikey": "your-actual-api-key-here"
  }
  ```
- **Configure search parameters**: Ensure language is set to "en" for English articles
- **Test API connectivity**: Run a test execution to verify news articles are returned correctly

### 3. Configure OpenAI API
- Set up OpenAI API credentials in n8n
- Ensure proper API access and quota limits
- Configure the GPT-4.1 Model node for AI summarization
- Test AI model connectivity and response quality

### 4. Configure Slack Integration
- Set up Slack API credentials in n8n
- Configure Slack channel ID for news delivery
- Set up proper message formatting for news summaries
- Test Slack notification delivery

### 5. Test the Complete Workflow
- Submit test form with sample topic (e.g., "artificial intelligence")
- Verify Gnews.io returns relevant articles
- Check that AI generates appropriate news summaries
- Confirm Slack notification contains formatted news summary

## Requirements

- **n8n instance** with form trigger and HTTP request capabilities
- **OpenAI API** access for AI-powered news summarization
- **Gnews.io API** credentials for news article fetching
- **Slack workspace** with API access for news delivery
- **Active internet connection** for real-time API interactions

## How to customize the workflow

### Modify News Search Parameters
- Adjust the number of articles to summarize (currently set to 15)
- Add more search depth options or date ranges
- Implement language filtering for different regions
- Add news source filtering or preferences

### Enhance AI Capabilities
- Customize AI prompts for specific industries or niches
- Add support for multiple languages
- Implement different summary styles (brief, detailed, bullet points)
- Add content quality scoring and relevance filtering

### Expand News Sources
- Integrate with additional news APIs (NewsAPI, Bing News, etc.)
- Add support for RSS feed integration
- Implement trending topic detection
- Add competitor news monitoring

### Improve News Delivery
- Add email notifications alongside Slack
- Implement news scheduling capabilities
- Add news approval workflows
- Implement news performance tracking

### Business Features
- Add news analytics and engagement metrics
- Implement A/B testing for different summary formats
- Add news calendar integration
- Implement team collaboration features for news sharing

## Key Features

- **Real-time news aggregation** - Fetches current news articles from Gnews.io API
- **AI-powered summarization** - Uses GPT-4.1 to intelligently select and summarize relevant articles
- **Professional formatting** - Generates clean, readable summaries with proper dates and links
- **Form-based input** - Simple interface for topic specification
- **Automated workflow** - End-to-end automation from topic input to news delivery
- **Intelligent filtering** - AI selects the most relevant articles from search results
- **Slack integration** - Centralized delivery of news summaries
- **Scalable news processing** - Handles multiple topic searches efficiently

## Technical Architecture Highlights

### AI-Powered News Summarization
- **OpenAI GPT-4.1 integration** - Advanced language model for intelligent news summarization
- **Content filtering** - AI selects the 15 most relevant articles from search results
- **Professional formatting** - Generates clean, readable summaries with proper structure
- **Quality consistency** - Maintains professional tone and formatting standards

### News API Integration
- **Gnews.io API** - Comprehensive news search with article extraction
- **Real-time data** - Access to current, relevant news articles
- **Content mapping** - Efficiently processes article data for AI analysis
- **Search optimization** - Efficient query construction for better news results

### Form-Based Input System
- **n8n form trigger** - Simple, user-friendly input interface for topic specification
- **Data validation** - Ensures required topic field is properly filled
- **Parameter extraction** - Converts form data to search parameters
- **Error handling** - Graceful handling of incomplete or invalid inputs

### News Delivery System
- **Slack integration** - Professional news summary delivery
- **Formatted output** - Clean, readable summaries with dates and article links
- **Centralized access** - All news summaries delivered to one location
- **Real-time delivery** - Immediate notification of news summaries

## Use Cases

- **Financial analysts** needing to stay updated on market developments and industry news
- **Business professionals** requiring daily news summaries on specific topics
- **Content creators** needing current information for articles and social media posts
- **Journalists** requiring comprehensive news coverage on specific subjects
- **Research teams** needing to track developments in their field of expertise
- **Investment professionals** requiring real-time updates on market trends
- **Academic researchers** needing to stay informed about industry developments
- **Corporate communications** teams requiring news monitoring for crisis management

## Business Value

- **Time Efficiency** - Reduces news reading time from hours to minutes
- **Cost Savings** - Eliminates need for manual news monitoring and summarization
- **Comprehensive Coverage** - AI ensures all important developments are captured
- **Scalability** - Handles unlimited topic searches without additional resources
- **Quality Assurance** - AI ensures professional-quality summaries every time
- **Real-Time Updates** - Always delivers the latest news on any topic
- **Research Integration** - Incorporates current information for relevant, timely insights

This template revolutionizes news consumption by combining AI-powered summarization with real-time news aggregation, creating an automated system that delivers professional-quality news summaries on any topic from a simple form submission.

## 🔗 Nodes Used

HTTP Request, Slack, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
