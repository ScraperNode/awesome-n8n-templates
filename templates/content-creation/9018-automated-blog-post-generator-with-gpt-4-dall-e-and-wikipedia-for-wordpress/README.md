# 🎬 Automated blog post generator with GPT-4, DALL-E, and Wikipedia for WordPress

> ⚡ **1,367 views** · 🎬 [Content Creation & Video](../)

## Description

# WordPress AI Content Creator

## Overview
Transform a few keywords into professionally written, SEO-optimized WordPress blog posts with custom featured images. This workflow leverages AI to research topics, structure content, write engaging articles, and publish them directly to your WordPress site as drafts ready for review.

## What This Workflow Does

### Core Features
- **Keyword-to-Article Generation**: Converts simple keywords into comprehensive, well-structured articles
- **Intelligent Content Planning**: Uses AI to create logical chapter structures and content flow
- **Wikipedia Integration**: Researches factual information to ensure content accuracy and depth
- **Multi-Chapter Writing**: Generates coherent, contextually-aware content across multiple sections
- **Custom Image Creation**: Generates relevant featured images using DALL-E based on article content
- **SEO Optimization**: Creates titles, subtitles, and content optimized for search engines
- **WordPress Integration**: Automatically publishes articles as drafts with proper formatting and featured images

### Business Value
- **Content Scale**: Produce high-quality blog posts in minutes instead of hours
- **Research Efficiency**: Automatically incorporates factual information from reliable sources
- **Consistency**: Maintains professional tone and structure across all generated content
- **SEO Benefits**: Creates search-engine friendly content with proper HTML formatting
- **Cost Savings**: Reduces need for external content creation services

## Prerequisites

### Required Accounts & Credentials
1. **WordPress Site** with REST API enabled
2. **OpenAI API** access (GPT-4 and DALL-E models)
3. **WordPress Application Password** or JWT authentication
4. **Public-facing n8n instance** for form access (or n8n Cloud)

### Technical Requirements
- WordPress REST API v2 enabled (standard on most WordPress sites)
- WordPress user account with publishing permissions
- n8n instance with LangChain nodes package installed

## Setup Instructions

### Step 1: WordPress Configuration
1. **Enable REST API** (usually enabled by default):
   - Check that `yoursite.com/wp-json/wp/v2/` returns JSON data
   - If not, contact hosting provider or install REST API plugin

2. **Create Application Password**:
   - In WordPress Admin: Users &gt; Profile
   - Scroll to "Application Passwords"
   - Add new password with name "n8n Integration"
   - Copy the generated password (save securely)

3. **Get WordPress Site URL**:
   - Note your full WordPress site URL (e.g., `https://yourdomain.com`)

### Step 2: OpenAI Configuration
1. **Obtain OpenAI API Key**:
   - Visit [OpenAI Platform](https://platform.openai.com/)
   - Create API key with access to:
     - GPT-4 models (for content generation)
     - DALL-E (for image creation)

2. **Add OpenAI Credentials in n8n**:
   - Navigate to Settings &gt; Credentials
   - Add "OpenAI API" credential
   - Enter your API key

### Step 3: WordPress Credentials in n8n
1. **Add WordPress API Credentials**:
   - In n8n: Settings &gt; Credentials &gt; "WordPress API"
   - **URL**: Your WordPress site URL
   - **Username**: Your WordPress username
   - **Password**: Application password from Step 1

### Step 4: Update Workflow Settings
1. **Configure Settings Node**:
   - Open the "Settings" node
   - Replace `wordpress_url` value with your actual WordPress URL
   - Keep other settings as default or customize as needed

2. **Update Credential References**:
   - Ensure all WordPress nodes reference your WordPress credentials
   - Verify OpenAI nodes use your OpenAI credentials

### Step 5: Deploy Form (Production Use)
1. **Activate Workflow**:
   - Toggle workflow to "Active" status
   - Note the webhook URL from Form Trigger node

2. **Test Form Access**:
   - Copy the form URL
   - Test form submission with sample data
   - Verify workflow execution completes successfully

## Configuration Details

### Form Customization
The form accepts three key inputs:
- **Keywords**: Comma-separated topics for article generation
- **Number of Chapters**: 1-10 chapters for content structure
- **Max Word Count**: Total article length control

You can modify form fields by editing the "Form" trigger node:
- Add additional input fields (category, author, publish date)
- Change field types (dropdown, checkboxes, file upload)
- Modify validation rules and requirements

### AI Content Parameters

#### Article Structure Generation
The "Create post title and structure" node uses these parameters:
- **Model**: GPT-4-1106-preview for enhanced reasoning
- **Max Tokens**: 2048 for comprehensive structure planning
- **JSON Output**: Structured data for subsequent processing

#### Chapter Writing
The "Create chapters text" node configuration:
- **Model**: GPT-4-0125-preview for consistent writing quality
- **Context Awareness**: Each chapter knows about preceding/following content
- **Word Count Distribution**: Automatically calculates per-chapter length
- **Coherence Checking**: Ensures smooth transitions between sections

### Image Generation Settings
DALL-E parameters in "Generate featured image":
- **Size**: 1792x1024 (optimized for WordPress featured images)
- **Style**: Natural (photographic look)
- **Quality**: HD (higher quality output)
- **Prompt Enhancement**: Adds photography keywords for better results

## Usage Instructions

### Basic Workflow
1. **Access the Form**:
   - Navigate to the form URL provided by the Form Trigger
   - Enter your desired keywords (e.g., "artificial intelligence, machine learning, automation")
   - Select number of chapters (3-5 recommended for most topics)
   - Set word count (1000-2000 words typical)

2. **Submit and Wait**:
   - Click submit to trigger the workflow
   - Processing takes 2-5 minutes depending on article length
   - Monitor n8n execution log for progress

3. **Review Generated Content**:
   - Check WordPress admin for new draft post
   - Review article structure and content quality
   - Verify featured image is properly attached
   - Edit as needed before publishing

### Advanced Usage

#### Custom Prompts
Modify AI prompts to change:
- **Writing Style**: Formal, casual, technical, conversational
- **Target Audience**: Beginners, experts, general public
- **Content Focus**: How-to guides, opinion pieces, news analysis
- **SEO Strategy**: Keyword density, meta descriptions, heading structure

#### Bulk Content Creation
For multiple articles:
1. Create separate form submissions for each topic
2. Schedule workflow executions with different keywords
3. Use CSV upload to process multiple keyword sets
4. Implement queue system for high-volume processing

## Expected Outputs

### Article Structure
Generated articles include:
- **SEO-Optimized Title**: Compelling, keyword-rich headline
- **Descriptive Subtitle**: Supporting context for the main title
- **Introduction**: ~60 words introducing the topic
- **Chapter Sections**: Logical flow with HTML formatting
- **Conclusions**: ~60 words summarizing key points
- **Featured Image**: Custom DALL-E generated visual

### Content Quality Features
- **Factual Accuracy**: Wikipedia integration ensures reliable information
- **Proper HTML Formatting**: Bold, italic, and list elements for readability
- **Logical Flow**: Chapters build upon each other coherently
- **SEO Elements**: Optimized for search engine visibility
- **Professional Tone**: Consistent, engaging writing style

### WordPress Integration
- **Draft Status**: Articles saved as drafts for review
- **Featured Image**: Automatically uploaded and assigned
- **Proper Formatting**: HTML preserved in WordPress editor
- **Metadata**: Title and content properly structured

## Troubleshooting

### Common Issues

#### "No Article Structure Generated"
**Cause**: AI couldn't create valid structure from keywords
**Solutions**:
- Use more specific, descriptive keywords
- Reduce number of chapters requested
- Check OpenAI API quotas and usage
- Verify keywords are in English (default language)

#### "Chapter Content Missing"
**Cause**: Individual chapter generation failed
**Solutions**:
- Increase max tokens in chapter generation node
- Simplify chapter prompts
- Check for API rate limiting
- Verify internet connectivity for Wikipedia tool

#### "WordPress Publication Failed"
**Cause**: Authentication or permission issues
**Solutions**:
- Verify WordPress credentials are correct
- Check WordPress user has publishing permissions
- Ensure WordPress REST API is accessible
- Test WordPress URL accessibility

#### "Featured Image Not Attached"
**Cause**: Image generation or upload failure
**Solutions**:
- Check DALL-E API access and quotas
- Verify image upload permissions in WordPress
- Review image file size and format compatibility
- Test manual image upload to WordPress

### Performance Optimization

#### Large Articles (2000+ words)
- Increase timeout values in HTTP request nodes
- Consider splitting very long articles into multiple posts
- Implement progress tracking for user feedback
- Add retry mechanisms for failed API calls

#### High-Volume Usage
- Implement queue system for multiple simultaneous requests
- Add rate limiting to respect OpenAI API limits
- Consider batch processing for efficiency
- Monitor and optimize token usage

## Customization Examples

### Different Content Types

#### Product Reviews
Modify prompts to include:
- Pros and cons sections
- Feature comparisons
- Rating systems
- Purchase recommendations

#### Technical Tutorials
Adjust structure for:
- Step-by-step instructions
- Code examples
- Prerequisites sections
- Troubleshooting guides

#### News Articles
Configure for:
- Who, what, when, where, why structure
- Quote integration
- Fact checking emphasis
- Timeline organization

### Alternative Platforms

#### Replace WordPress with Other CMS
- **Ghost**: Use Ghost API for publishing
- **Webflow**: Integrate with Webflow CMS
- **Strapi**: Connect to headless CMS
- **Medium**: Publish to Medium platform

#### Different AI Models
- **Claude**: Replace OpenAI with Anthropic's Claude
- **Gemini**: Use Google's Gemini for content generation
- **Local Models**: Integrate with self-hosted AI models
- **Multiple Models**: Use different models for different tasks

### Enhanced Features

#### SEO Optimization
Add nodes for:
- **Meta Description Generation**: AI-created descriptions
- **Tag Suggestions**: Relevant WordPress tags
- **Internal Linking**: Suggest related content links
- **Schema Markup**: Add structured data

#### Content Enhancement
Include additional processing:
- **Plagiarism Checking**: Verify content originality
- **Readability Analysis**: Assess content accessibility
- **Fact Verification**: Multiple source confirmation
- **Image Optimization**: Compress and optimize images

## Security Considerations

### API Security
- Store all credentials securely in n8n credential system
- Use environment variables for sensitive configuration
- Regularly rotate API keys and passwords
- Monitor API usage for unusual activity

### Content Moderation
- Review generated content before publishing
- Implement content filtering for inappropriate material
- Consider legal implications of auto-generated content
- Maintain editorial oversight and fact-checking

### WordPress Security
- Use application passwords instead of main account password
- Limit WordPress user permissions to minimum required
- Keep WordPress and plugins updated
- Monitor for unauthorized access attempts

## Legal and Ethical Considerations

### Content Ownership
- Understand OpenAI's terms regarding generated content
- Consider copyright implications for Wikipedia-sourced information
- Implement proper attribution where required
- Review content licensing requirements

### Disclosure Requirements
- Consider disclosing AI-generated content to readers
- Follow platform-specific guidelines for automated content
- Ensure compliance with advertising and content standards
- Respect intellectual property rights

## Support and Maintenance

### Regular Maintenance
- Monitor OpenAI API usage and costs
- Update AI prompts based on output quality
- Review and update Wikipedia search strategies
- Optimize workflow performance based on usage patterns

### Quality Assurance
- Regularly review generated content quality
- Implement feedback loops for improvement
- Test workflow with diverse keyword sets
- Monitor WordPress site performance impact

### Updates and Improvements
- Stay updated with OpenAI model improvements
- Monitor n8n platform updates for new features
- Engage with community for workflow enhancements
- Document custom modifications for future reference

## Cost Optimization

### OpenAI Usage
- Monitor token consumption patterns
- Optimize prompts for efficiency
- Consider using different models for different tasks
- Implement usage limits and budgets

### Alternative Approaches
- Use local AI models for cost reduction
- Implement caching for repeated topics
- Batch similar requests for efficiency
- Consider hybrid human-AI content creation

## License and Attribution

This workflow template is provided under MIT license. Attribution to original creator appreciated when sharing or modifying. Generated content is subject to OpenAI's usage policies and terms of service.

## 🔗 Nodes Used

HTTP Request, Wordpress, Wikipedia, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
