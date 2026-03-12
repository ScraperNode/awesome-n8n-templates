# 🎬 Convert news headlines to audio newsletters with Claude, GPT-4o & OpenAI TTS

> ⚡ **283 views** · 🎬 [Content Creation & Video](../)

## Description

# Generate daily audio newsletters from news headlines with AI

## Who's it for

Perfect for **content creators, podcasters, news enthusiasts, and busy professionals** who want to create automated audio news content or stay informed through personalized audio briefings. Ideal for social media managers, newsletter creators, and anyone building audio-first content experiences.

## How it works

This workflow creates a fully automated news-to-audio pipeline:

1. **Schedule trigger** fetches the latest news headlines from NewsAPI daily
2. **AI processing** rewrites each article into newsletter-style content using Claude
3. **Content aggregation** combines all processed articles into a cohesive newsletter
4. **Script generation** transforms the newsletter into a 2-minute audio-ready script
5. **Text-to-speech** converts the script into high-quality audio using OpenAI's voice models
6. **Email delivery** sends the audio newsletter as an attachment to subscribers

The workflow runs automatically on your chosen schedule, delivering fresh audio content without any manual intervention.

## How to set up

### Requirements

- **NewsAPI account** with API key (free tier available)
- **OpenRouter API access** for Claude model
- **OpenAI API account** for text-to-speech functionality
- **Gmail account** with OAuth2 access for email delivery
- **Basic understanding** of audio file handling (optional)

### Step-by-step setup
**1. Set Your Schedule trigger**
- Configure the Schedule Trigger for your preferred timing (daily at 7 AM recommended)
- Consider your audience timezone and optimal delivery times
- Set up monitoring to ensure consistent execution

**2. Configure News Source**
- Sign up for NewsAPI at newsapi.org (free tier includes 100 requests/day)
- Replace `YOUR_NEWSAPI_KEY` with your actual API key in the HTTP Request node
- Customize the news query parameters (country, category, sources) to match your audience interests
- Test the API endpoint to ensure it returns expected data

**3. Extract Individual Articles(Split Out)**
- Takes the articles array from NewsAPI response
- Creates separate items for each news article
- Enables individual processing of each story
- Prepares data for AI content generation

**4. Set Up AI Model Credentials**
- Create an OpenRouter account for Claude access
- Add your OpenRouter API credentials in n8n
- Alternatively, replace with OpenAI GPT-4 if you prefer (update the model node accordingly)
- Configure rate limits and usage monitoring

**5. Combine Newsletter Content" (Aggregate)**
- Collects output from all processed articles
- Renames field to news for easy reference
- Prepares combined content for script generation
- Ensures no articles are lost in processing

**6. Audio Script Generation**
 - GPT-4 creates 2-minute audio-ready script from newsletter content.
 - Creates script with "Max" presenter persona
###### Script features:
   - 2-minute target duration
   - Audio-friendly text (no special characters)
   - Natural speaking flow and transitions
   - Engaging introduction and conclusion

**7. Configure OpenAI Text-to-Speech**
- Add your OpenAI API credentials in n8n
- Choose your preferred voice model (options: alloy, echo, fable, onyx, nova, shimmer)
- Set audio quality preferences (standard vs HD)
- Test voice output with sample text

**8. Customize Email Delivery**
- Add your Gmail OAuth2 credentials
- Replace `YOUR_EMAIL@example.com` with your actual recipient email
- Update the sender name and business information in email template
- Configure attachment settings for audio files

**9. Test the Complete Pipeline**
- Run a manual execution to test all components
- Verify news data is properly fetched and processed
- Check audio quality and duration
- Confirm email delivery with audio attachment

## How to customize the workflow

### Advanced News Filtering
- **Custom sources**: Replace NewsAPI with RSS feeds from specific publications
- **Topic filtering**: Add keyword filtering to focus on specific industries or topics
- **Multi-country support**: Fetch news from multiple regions and merge content
- **Sentiment analysis**: Filter out negative news or categorize by sentiment
- **Trending topics**: Integrate with social media APIs to include trending discussions

### AI Content Enhancement
- **Voice persona**: Customize the AI prompt to create different presenter personalities (professional, casual, expert)
- **Length control**: Adjust script length for different formats (1-minute updates, 5-minute deep dives)
- **Multi-language support**: Generate newsletters in different languages based on subscriber preferences
- **Fact-checking**: Add verification steps to ensure accuracy of AI-generated content
- **Source attribution**: Include proper citations and links to original articles

### Audio Production Features
- **Voice variety**: Rotate between different OpenAI voices for engaging content
- **Background music**: Add intro/outro music using audio editing APIs
- **Speed control**: Adjust playback speed based on content type
- **Chapter markers**: Add timestamps for different news segments
- **Quality optimization**: Implement audio normalization and enhancement

### Distribution Enhancements
- **Multi-channel delivery**: Send to Slack, Discord, or team communication platforms
- **Podcast publishing**: Automatically upload to podcast platforms via RSS
- **Social media**: Post audio clips to Twitter, LinkedIn, or Instagram
- **Website integration**: Embed audio player on your website automatically
- **Mobile app push**: Send notifications to mobile apps with audio links

### Subscriber Management
- **Mailchimp integration**: Build and manage subscriber lists automatically
- **Preference tracking**: Allow subscribers to choose news categories or frequency
- **Analytics tracking**: Monitor open rates, listening duration, and engagement
- **A/B testing**: Test different voice styles, content lengths, or delivery times
- **Segmentation**: Send different newsletters to different subscriber segments

### Content Workflow Customization
- **Editorial review**: Add approval steps before content distribution
- **Content calendar**: Integrate with planning tools for scheduled content themes
- **Collaborative editing**: Include team review processes for content quality
- **Version control**: Maintain archives of previous newsletters for reference
- **Performance metrics**: Track which content types perform best

## Webhook Integration Examples

### Website Integration
```javascript
// Add this to your website for manual newsletter requests
fetch('/webhook/trigger-newsletter', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    subscriber_email: 'user@example.com',
    topics: ['technology', 'business'],
    urgency: 'normal'
  })
});
```

### Slack Command Integration
- Create slash commands to trigger newsletter generation on demand
- Allow team members to request specific topic newsletters
- Integrate with Slack workflows for automated team briefings

### Mobile App Integration
- Use webhooks to trigger newsletters from mobile app interactions
- Create push notification systems for breaking news alerts
- Build in-app audio players for seamless listening experience

## Troubleshooting

### Common Issues and Solutions

**NewsAPI quota exceeded:**
- Monitor your daily API usage in NewsAPI dashboard
- Implement caching to reduce redundant requests
- Consider upgrading to paid plan for higher limits
- Add fallback RSS feeds when API limits are reached

**AI model rate limiting:**
- Implement exponential backoff for API requests
- Monitor token usage across Claude and OpenAI services
- Add queue systems for high-volume processing
- Consider switching to different models during peak times

**Audio generation failures:**
- Check OpenAI text-to-speech quotas and billing
- Validate text input for special characters that might cause issues
- Implement retry logic for failed audio generation
- Add fallback to text-only newsletters when audio fails

**Email delivery problems:**
- Verify Gmail API quotas and sending limits
- Check audio file size limits (Gmail has 25MB attachment limit)
- Implement compression for large audio files
- Consider cloud storage links instead of direct attachments

**Content quality issues:**
- Fine-tune AI prompts for more consistent output
- Add content validation steps to check for accuracy
- Implement editorial guidelines in AI instructions
- Create feedback loops to improve content over time

### Performance Optimization

**Workflow efficiency:**
- Process news articles in parallel where possible
- Implement smart caching for repeated content
- Optimize API calls to reduce latency
- Monitor execution times and identify bottlenecks

**Cost management:**
- Track API costs across all services (NewsAPI, OpenRouter, OpenAI)
- Implement budget alerts and automatic shutoffs
- Optimize content length to reduce text-to-speech costs
- Consider batch processing during off-peak hours

**Scalability preparation:**
- Design for multiple subscriber support
- Plan for increased news volume during major events
- Prepare backup systems for service outages
- Document processes for team handoffs

### Security and Compliance

**API key protection:**
- Never expose API keys in workflow exports
- Use n8n's credential management exclusively
- Implement key rotation policies
- Monitor for unauthorized API usage

**Content compliance:**
- Review AI-generated content for accuracy and bias
- Implement content filtering for inappropriate material
- Ensure proper attribution to original news sources
- Maintain editorial standards and fact-checking processes

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
