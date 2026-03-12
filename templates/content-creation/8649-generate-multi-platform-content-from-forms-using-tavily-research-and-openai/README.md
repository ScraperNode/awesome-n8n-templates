# 🎬 Generate multi-platform content from forms using Tavily Research and OpenAI

> ⚡ **250 views** · 🎬 [Content Creation & Video](../)

## Description

## This workflow automates multi-platform content creation by transforming form submissions into tailored blog posts, LinkedIn posts, and Facebook posts using AI and web research

### **What Makes This Different:**
- **Multi-Platform Content Generation** - Creates optimized content for blog, LinkedIn, and Facebook simultaneously
- **AI-Powered Content Adaptation** - Uses OpenAI to tailor content for each platform's unique audience and format
- **Web Research Integration** - Leverages Tavily API to gather relevant, up-to-date information on any topic
- **Form-Based Input** - Simple form interface for content subject and target audience specification
- **Automated Workflow** - End-to-end automation from form submission to content delivery
- **Slack Integration** - Delivers all generated content via Slack notification for easy review and sharing

### **Key Benefits of Automated Content Creation:**
- **Time Efficiency** - Generates three different content pieces in one workflow execution
- **Platform Optimization** - Each content piece is specifically crafted for its intended platform
- **Research-Backed Content** - Incorporates current web information for accurate, relevant content
- **Consistent Brand Voice** - AI ensures consistent tone and messaging across all platforms
- **Scalable Content Production** - Handles multiple content requests without manual intervention
- **Centralized Delivery** - All content delivered to one location for easy management

---

## Who's it for

This template is designed for **content marketers, social media managers, small business owners, marketing agencies, and content creators** who need to produce consistent, high-quality content across multiple platforms. It's perfect for businesses that want to streamline their content creation process, maintain a consistent brand voice, and leverage AI to create platform-specific content that resonates with their target audience.

## How it works / What it does

This workflow creates an **automated content creation system** that transforms form submissions into multi-platform content. The system:

1. **Receives form submissions** with content subject and target audience through n8n form trigger
2. **Extracts search parameters** from form data to prepare for web research
3. **Searches the web** using Tavily API to gather relevant, current information on the topic
4. **Processes search results** by splitting and aggregating content for AI processing
5. **Generates platform-specific content** using OpenAI agents for LinkedIn, Facebook, and blog formats
6. **Aggregates all content** into a single output with all three platform versions
7. **Sends Slack notification** with all generated content for review and distribution

**Key Innovation: Multi-Platform AI Content Generation** - Unlike traditional content tools that create one piece of content, this system automatically generates three different versions optimized for each platform's unique audience, format requirements, and engagement patterns, all based on current web research and AI-powered adaptation.

## How to set up

### 1. Configure Form Trigger
- Set up n8n form trigger with "Content Subject" and "Target Audience" fields
- Configure form settings and validation rules
- Test form submission functionality
- Ensure proper data flow to subsequent nodes

### 2. Configure OpenAI API
- Set up OpenAI API credentials in n8n
- Ensure proper API access and quota limits
- Configure the OpenAI Chat Model node for content generation
- Test AI model connectivity and response quality

### 3. Configure Tavily API
- **Get your API key**: Sign up at [tavily.com](https://tavily.com) and obtain your API key from the dashboard
- **Add API key to workflow**: In the "Search Web" HTTP Request node, replace `"ADD YOU API KEY HERE"` with your actual Tavily API key
- **Example configuration**:
  ```json
  {
    "api_key": "your-actual-api-key-here",
    "query": "{{ $json.query.replace(/\"/g, '\\\"') }}",
    "search_depth": "basic",
    "include_answer": true,
    "topic": "news",
    "include_raw_content": true,
    "max_results": 3
  }
  ```
- **Configure search parameters**: Ensure max_results is set to 3 and search_depth to "basic" for optimal performance
- **Test API connectivity**: Run a test execution to verify search results are returned correctly

### 4. Configure Slack Integration
- Set up Slack API credentials in n8n
- Configure Slack channel ID for content delivery
- Set up proper message formatting for content display
- Test Slack notification delivery

### 5. Test the Complete Workflow
- Submit test form with sample content subject and target audience
- Verify web search returns relevant results
- Check that AI generates appropriate content for all three platforms
- Confirm Slack notification contains all generated content

## Requirements

- **n8n instance** with form trigger and HTTP request capabilities
- **OpenAI API** access for AI-powered content generation
- **Tavily API** credentials for web search functionality
- **Slack workspace** with API access for content delivery
- **Active internet connection** for real-time API interactions

## How to customize the workflow

### Modify Content Generation Parameters
- Adjust the number of web search results (currently set to 3)
- Add more search depth options (basic, advanced, comprehensive)
- Implement content length controls for different platforms
- Add content tone and style preferences

### Enhance AI Capabilities
- Customize AI prompts for specific industries or niches
- Add support for multiple languages
- Implement brand voice consistency across all platforms
- Add content quality scoring and optimization

### Expand Content Sources
- Integrate with additional research APIs (Google Search, Bing, etc.)
- Add support for internal knowledge base integration
- Implement trending topic detection
- Add competitor content analysis

### Improve Content Delivery
- Add email notifications alongside Slack
- Implement content scheduling capabilities
- Add content approval workflows
- Implement content performance tracking

### Business Features
- Add content analytics and performance metrics
- Implement A/B testing for different content versions
- Add content calendar integration
- Implement team collaboration features

## Key Features

- **Multi-platform content generation** - Creates optimized content for blog, LinkedIn, and Facebook
- **AI-powered content adaptation** - Tailors content for each platform's unique requirements
- **Web research integration** - Incorporates current, relevant information from web searches
- **Form-based input** - Simple interface for content subject and target audience specification
- **Automated workflow** - End-to-end automation from form submission to content delivery
- **Platform-specific optimization** - Each content piece follows platform best practices
- **Slack integration** - Centralized delivery of all generated content
- **Scalable content production** - Handles multiple content requests efficiently

## Technical Architecture Highlights

### AI-Powered Content Generation
- **OpenAI integration** - Advanced language model for content creation
- **Platform-specific prompts** - Tailored AI instructions for each social platform
- **Content optimization** - AI ensures platform-appropriate formatting and tone
- **Quality consistency** - Maintains brand voice across all generated content

### Web Research Integration
- **Tavily API** - Comprehensive web search with content extraction
- **Real-time data** - Access to current, relevant information
- **Content aggregation** - Combines multiple sources for comprehensive coverage
- **Search optimization** - Efficient query construction for better results

### Form-Based Input System
- **n8n form trigger** - Simple, user-friendly input interface
- **Data validation** - Ensures required fields are properly filled
- **Parameter extraction** - Converts form data to search and generation parameters
- **Error handling** - Graceful handling of incomplete or invalid inputs

### Multi-Platform Output
- **LinkedIn optimization** - Professional tone with industry-specific formatting
- **Facebook adaptation** - Engaging, shareable content with appropriate length
- **Blog formatting** - Comprehensive, SEO-friendly long-form content
- **Unified delivery** - All content delivered through single Slack notification

## Use Cases

- **Content marketing agencies** needing efficient multi-platform content creation
- **Small businesses** requiring consistent social media presence across platforms
- **Marketing teams** looking to streamline content production workflows
- **Solo entrepreneurs** needing professional content without hiring writers
- **E-commerce brands** requiring product-focused content for multiple channels
- **Professional services** needing thought leadership content across platforms
- **Event organizers** requiring promotional content for different social channels
- **Educational institutions** needing content for student engagement and recruitment

## Business Value

- **Time Efficiency** - Reduces content creation time from hours to minutes
- **Cost Savings** - Eliminates need for multiple content creators or agencies
- **Consistency** - Maintains brand voice and messaging across all platforms
- **Scalability** - Handles unlimited content requests without additional resources
- **Quality Assurance** - AI ensures professional-quality content every time
- **Multi-Platform Reach** - Maximizes content distribution across key social channels
- **Research Integration** - Incorporates current information for relevant, timely content

This template revolutionizes content creation by combining AI-powered writing with real-time web research, creating an automated system that produces high-quality, platform-optimized content for blog, LinkedIn, and Facebook from a simple form submission.

## 🔗 Nodes Used

HTTP Request, Slack, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
