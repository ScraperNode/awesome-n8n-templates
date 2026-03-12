# 🎬 Technology news workflow explanation with key services

> ⚡ **498 views** · 🎬 [Content Creation & Video](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# Auto-Publish Technology News to WordPress with GPT-4o Content Enhancement

This comprehensive automated workflow fetches the latest technology news every 3 hours, leverages OpenAI's GPT-4o to analyze and transform news articles into engaging blog posts, and publishes them directly to your WordPress website. The system includes robust error handling with email notifications to ensure smooth operation, making it perfect for keeping your blog updated with fresh, AI-enhanced content without manual intervention.

### What This Workflow Does

The workflow demonstrates several key automation concepts:
- Schedule recurring automated tasks with precise timing control
- Fetch data from external APIs (News API) with proper authentication
- Process content in batches for efficient handling
- Use AI for intelligent content transformation and enhancement
- Format and structure data for publishing platforms
- Publish to content management systems automatically
- Implement comprehensive error handling and notifications

### Prerequisites & Requirements

Before setting up this workflow, ensure you have:

#### Required API Credentials
- **News API Key**: Sign up at [newsapi.org](https://newsapi.org) for free access to news articles
- **OpenAI API Key**: Create an account at [platform.openai.com](https://platform.openai.com) and generate an API key with GPT-4o access
- **WordPress API Access**: Your WordPress site must have REST API enabled (default in modern WordPress)
- **SMTP Email Account**: For error notifications (Gmail, Outlook, or custom SMTP)

#### WordPress Setup
- WordPress 4.7+ with REST API enabled
- Application password or JWT authentication configured
- Appropriate user permissions for post creation

#### n8n Configuration
- n8n instance (cloud or self-hosted)
- Proper credential storage for all external services

### Step-by-Step Setup Instructions

#### Step 1: Configure News API Credentials
1. Navigate to n8n Credentials section
2. Create new "News API" credential
3. Enter your API key from newsapi.org
4. Test the connection to ensure it's working

#### Step 2: Set Up OpenAI Integration
1. Add OpenAI credentials in n8n
2. Enter your API key from OpenAI platform
3. Ensure you have access to GPT-4o model
4. Configure rate limiting if needed

#### Step 3: WordPress Connection
1. Create WordPress API credentials
2. Use either application password or JWT token
3. Test connection with a sample API call
4. Verify post creation permissions

#### Step 4: Email Notifications Setup
1. Configure SMTP credentials for error handling
2. Set recipient email addresses
3. Customize error message templates
4. Test email delivery

#### Step 5: Import and Configure Workflow
1. Import the JSON workflow into your n8n instance
2. Update the "News API Batch Processor" node settings
3. Modify the schedule trigger frequency if needed (default: every 3 hours)
4. Customize the AI prompt in the OpenAI node for your brand voice
5. Adjust WordPress post settings (categories, tags, status)

### Customization Options

#### Content Filtering
- Modify news categories (technology, business, science, etc.)
- Adjust country selection for regional news
- Change article count per batch (default: 10)

#### AI Content Enhancement
- Customize the system prompt for different writing styles
- Adjust creativity level (temperature parameter)
- Modify output length and format requirements
- Add specific instructions for your brand voice

#### Publishing Settings
- Configure post status (draft, publish, private)
- Set default categories and tags
- Add custom fields or metadata
- Schedule publishing times

#### Error Handling
- Customize error notification recipients
- Modify retry logic for failed requests
- Add additional error handling branches
- Configure logging levels

### Workflow Architecture

The workflow consists of 8 strategically connected nodes:

1. **Schedule Trigger**: Initiates the workflow every 3 hours
2. **HTTP Request - News API**: Fetches latest technology headlines
3. **News API Batch Processor**: Splits articles for individual processing
4. **OpenAI - Analyze News**: Transforms articles into engaging blog posts
5. **Set Blog Post**: Formats data for WordPress publication
6. **WordPress - Create Post**: Publishes content to your website
7. **Error Handler**: Catches and processes any workflow failures
8. **Send Error Email**: Notifies administrators of issues

### Expected Output

Each processed article generates:
- SEO-optimized blog post title
- Well-structured HTML content with headings and paragraphs
- Engaging introduction and conclusion
- Source attribution and links
- Automatic publishing to WordPress
- Metadata including publish date and source URL

### Monitoring & Maintenance

#### Performance Monitoring
- Check execution logs regularly
- Monitor API rate limits and usage
- Review generated content quality
- Track WordPress post metrics

#### Regular Updates
- Update API keys when they expire
- Adjust content filters based on performance
- Refine AI prompts for better output
- Monitor and update error handling rules

### Troubleshooting Common Issues

#### API Rate Limits
- Reduce batch size if hitting News API limits
- Implement delays between OpenAI requests
- Monitor usage dashboards

#### Content Quality
- Refine system prompts for better AI output
- Add content validation steps
- Implement human review queues for sensitive topics

#### WordPress Publishing
- Verify user permissions and authentication
- Check for plugin conflicts
- Ensure proper REST API configuration

This template provides a solid foundation for automated content creation and can be extended with additional features like social media posting, content scheduling, or advanced analytics integration.

## 🔗 Nodes Used

Send Email, HTTP Request, Wordpress, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
