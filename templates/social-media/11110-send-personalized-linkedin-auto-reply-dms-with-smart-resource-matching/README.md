# 📱 Send personalized LinkedIn auto-reply DMs with smart resource matching

> ⚡ **56 views** · 📱 [Social Media & Email Marketing](../)

## Description

This automated n8n workflow enables intelligent auto-replies to LinkedIn comments by sending personalized direct messages (DMs) with relevant resources. When users comment on your posts, the workflow monitors engagement, filters valid interactions, analyzes comment content using keyword matching, and delivers tailored responses via LinkedIn messaging. It ensures duplicate prevention, tracks all message deliveries, and maintains logs for monitoring and compliance.

## Fundamental Aspects

1. **Monitor posts**: Every 5 minutes, the workflow fetches your 10 most recent LinkedIn posts
2. **Collect comments**: Retrieves all comments from each post (up to 20 per post)
3. **Filter engagement**: Removes your own comments and tracks previously contacted users
4. **Smart matching**: Analyzes comment text using keyword matching to determine the most relevant resource (eBook, webinar, template, tool, or checklist)
5. **Personalize message**: Creates a custom DM with the commenter's name and selected resource
6. **Send and track**: Delivers the message via LinkedIn and logs the interaction

## Setup steps

1. **Connect LinkedIn**: Add your LinkedIn OAuth2 credentials to these nodes:
   - Fetch Recent Posts
   - Fetch Post Comments
   - Send DM via LinkedIn

2. **Update resource URLs**: Open the "Match Resource to Comment" node and replace all `https://yourwebsite.com/...` URLs with your actual resource links

3. **Customize message** (optional): Edit the "Build Personalized Message" node to adjust the DM template and tone

4. **Test first**: Click "Execute Workflow" to test before activating. Check the execution log to verify it works correctly

5. **Activate**: Once tested, toggle the workflow to "Active" to run automatically every 5 minutes

## Technical Dependencies

- **LinkedIn API**: For fetching recent posts, retrieving comments, and sending direct messages through OAuth2 authentication.
- **n8n Platform**: For workflow orchestration, scheduled execution, conditional logic, data merging, and static data persistence.
- **JavaScript Runtime**: For custom code execution in analysis, message generation, deduplication logic, and success logging nodes.
- **Workflow Static Data**: For persistent storage of processed comment tracking across workflow executions without external databases.

## Customization Possibilities

- **Adjust Monitoring Frequency**: Change the Schedule Trigger interval from 5 minutes to hourly, daily, or based on your posting frequency to optimize resource usage.
- **Expand Resource Categories**: Add new resource types like case studies, white papers, free trials, or consultation bookings with corresponding keywords and URLs.
- **Enhance Keyword Matching**: Implement weighted scoring, multi-word phrase matching, or semantic similarity analysis for more accurate resource selection.
- **Add Sentiment Analysis**: Filter comments by sentiment to prioritize enthusiastic or question-asking commenters for resource delivery.
- **Multi-Language Support**: Detect comment language and send localized resources and message templates for global audiences.
- **A/B Test Messages**: Create multiple message variations and randomly assign them to track which messaging performs best.
- **Integration with CRM**: Add nodes to log commenter information in your CRM (HubSpot, Salesforce) for lead tracking and follow-up.
- **Advanced Analytics**: Connect to Google Sheets or databases to track delivery rates, response times, and resource click-through rates over time.
- **Rate Limit Protection**: Add conditional logic to pause workflow if daily message limits are reached to prevent LinkedIn restrictions.
- **Post-Specific Resources**: Map different resources to specific posts based on post topic or hashtags for more contextual recommendations.

**Explore More LinkedIn & Social Automation:**  
[Contact us](https://www.oneclickitsolution.com/contact-us/) to design AI-powered lead nurturing, content engagement, and multi-platform reply workflows tailored to your growth strategy.

## 🔗 Nodes Used

LinkedIn, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
