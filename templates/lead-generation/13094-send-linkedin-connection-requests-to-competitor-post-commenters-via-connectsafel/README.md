# 🎣 Send LinkedIn connection requests to competitor post commenters via ConnectSafely.ai

> ⚡ **31 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who's it for

This workflow is built for sales professionals, recruiters, growth marketers, and founders who want to convert engaged LinkedIn audiences into warm leads. Perfect for anyone running competitive intelligence, building prospect lists from viral content, or targeting people who've already shown interest in your industry.

If you're watching competitors get massive engagement on their posts while their commenters slip away uncontacted, this automation captures those profiles and sends personalized connection requests automatically—with built-in daily limits that respect LinkedIn's guidelines.

**Ideal for:**
- SDRs and AEs building pipeline from competitor audiences
- Recruiters sourcing candidates from industry discussions
- Founders networking with engaged professionals in their space
- Marketers building communities from high-intent commenters
- Agency owners generating leads from client competitor posts

---

## How it works

The workflow extracts all commenters from any LinkedIn post, filters out competitor employees, and sends personalized connection requests with intelligent daily limits that automatically pause overnight and resume the next day.

**The process flow:**

1. Submit a form with the post URL, competitor name, and optional custom message
2. Extract all commenters from the post via ConnectSafely.ai API
3. Deduplicate profiles to avoid sending multiple requests
4. Loop through each profile sequentially
5. Check daily limit—if reached, automatically wait until midnight and resume
6. Filter out profiles that work at the competitor company
7. Send personalized connection request with `{firstName}` placeholder support
8. Log results and increment the daily counter
9. Wait 3 seconds between requests for safety
10. Generate a summary report when complete

**The magic:** When you hit your daily limit (default: 8), the workflow calculates seconds until midnight, pauses automatically, then resumes processing the next day. Submit once, let it run for days.

---

## Setup steps

### Step 1: Get Your ConnectSafely.ai API Credentials

**Obtain API Key:**

1. Log into [ConnectSafely.ai Dashboard](https://connectsafely.ai/dashboard)
2. Click **API Key** in the left side menu
3. Copy your API key (you'll need this in the next step)

**Add Bearer Auth Credential in n8n:**

1. Go to **Credentials** in n8n
2. Click **Add Credential → Header Auth**
3. Set Name: `Authorization`
4. Set Value: `Bearer YOUR_API_KEY` (replace with your actual key)
5. Save the credential

---

### Step 2: Configure the Workflow

**2.1 Open the Set Config Node**

Customize your daily limit and other settings:

| Parameter | Description | Default |
| --- | --- | --- |
| dailyLimit | Maximum connection requests per day | `8` |

**Pro Tips:**
- Start with 5-8 daily requests for new accounts
- Established accounts can safely use 10-15
- Never exceed 20 per day to avoid LinkedIn restrictions

**2.2 Update HTTP Request Nodes**

Select your ConnectSafely.ai Header Auth credential in these nodes:
- **Get Comments** node
- **Get Profile** node (inside the loop)
- **Send Connection** node (inside the loop)

---

### Step 3: Test the Workflow

1. Click **Test Workflow** on the Form Trigger node
2. Fill in the form:
   - **Post URL:** Full LinkedIn post URL (e.g., `https://www.linkedin.com/posts/competitor_topic-activity-123456789`)
   - **Competitor Name:** Company name to filter out (e.g., `Competitor Inc`)
   - **Connection Message:** Optional personalized message with `{firstName}` placeholder
3. Monitor the execution:
   - Verify comments are extracted
   - Check that competitor employees are filtered
   - Confirm connection requests are sent
   - Watch the daily limit counter increment

---

### Step 4: Deploy for Production

1. **Activate the workflow** using the toggle in the top-right
2. **Access the form** via the production URL shown in the Form Trigger node
3. **Bookmark the form URL** for easy access
4. Submit the form and let the workflow run automatically

---

## Customization

### Connection Message Templates

**Sales Outreach:**
```
Hi {firstName}, noticed your comment on that [industry] post. I'm working on similar challenges at [Your Company]—would love to connect and share insights.
```

**Recruiting:**
```
Hi {firstName}, your perspective on [topic] stood out. We're building something exciting at [Company] and I'd love to connect.
```

**Founder Networking:**
```
Hey {firstName}, great take on that thread. Always looking to connect with folks thinking deeply about [industry]. Let's stay in touch!
```

**Minimal (Higher Acceptance):**
```
Hi {firstName}, enjoyed your comment. Let's connect!
```

### Adjusting Daily Limits

Open the **Set Config** node and modify:

```json
{
  "dailyLimit": 10
}
```

**Recommended limits by account age:**
- New accounts (&lt; 6 months): 5-8 per day
- Established accounts (6-12 months): 8-12 per day
- Mature accounts (&gt; 1 year): 10-15 per day

### Extending the Workflow

**Add CRM Integration:** Connect the Summary output to HubSpot, Salesforce, or Pipedrive to automatically create contacts

**Add Slack Notifications:** Insert a Slack node after Summary to get daily reports in your channel

**Chain with Follow-up:** Schedule a separate workflow to send follow-up messages to accepted connections

**Add Lead Scoring:** Insert a Code node to score leads based on headline, company size, or other criteria before sending requests

---

## Output Data Format

**Form Input:**
```json
{
  "postUrl": "https://www.linkedin.com/posts/competitor_topic-activity-123456789",
  "competitorName": "Competitor Inc",
  "connectionMessage": "Hi {firstName}, let's connect!"
}
```

**Summary Output:**
```json
{
  "totalProcessed": 45,
  "connectionsSent": 32,
  "skippedCompetitor": 8,
  "skippedOther": 5,
  "dailyLimitReached": true,
  "daysSpanned": 4
}
```

**Individual Result (per profile):**
```json
{
  "profileId": "john-doe-123",
  "name": "John Doe",
  "action": "sent",
  "timestamp": "2025-01-29T14:30:00.000Z"
}
```

---

## Use Cases

**Competitive Lead Capture:** Your competitor posts about a product launch and gets 200 comments. Those commenters are interested in your space—capture them before your competitor does.

**Event Attendee Networking:** Conference speaker posts their slides and gets engagement. Connect with attendees who couldn't make your session.

**Thought Leadership Amplification:** Industry influencer sparks a debate. Everyone commenting is a potential prospect or partner.

**Talent Sourcing:** Competitor announces layoffs and employees comment. Recruit displaced talent automatically.

**Community Building:** Popular post in your niche generates discussion. Build your network with engaged professionals.

**Partner Discovery:** Integration partner's post attracts their customers. Connect with potential mutual customers.

---

## Troubleshooting

### Common Issues & Solutions

**Issue:** "No comments found" error
- **Solution:** Verify the post URL is correct and publicly accessible. Some posts have limited visibility.

**Issue:** Daily limit reached immediately
- **Solution:** The counter persists in workflow static data. To reset, deactivate and reactivate the workflow, or wait until midnight.

**Issue:** All profiles skipped as "competitor"
- **Solution:** Check the competitor name spelling. The filter uses case-insensitive matching against the headline field.

**Issue:** Connection requests failing
- **Solution:** Verify your ConnectSafely.ai account has sufficient credits. Check API key permissions in the dashboard.

**Issue:** Workflow stops unexpectedly
- **Solution:** Check n8n execution timeout settings. For large comment lists, you may need to increase the timeout or use a self-hosted instance.

**Issue:** `{firstName}` not replaced in message
- **Solution:** Ensure you're using the exact placeholder `{firstName}` (case-sensitive). The workflow replaces this with the actual first name.

**Issue:** Rate limit errors from API
- **Solution:** The 3-second delay between requests should prevent this. If it occurs, increase the Wait node duration.

---

## Important Notes

**Daily Limit Behavior:**
- Counter resets at midnight (server timezone)
- Workflow automatically calculates wait time and resumes
- A single form submission can span multiple days
- Check execution logs to monitor progress

**Compliance Considerations:**
- This workflow uses ConnectSafely.ai's compliant API
- No browser automation or cookie hijacking
- Respects LinkedIn's rate limits by design
- Always use genuine, personalized messages

**Best Practices:**
- Target posts with 20-100 comments for best results
- Avoid viral posts with 500+ comments (diminishing returns)
- Personalize your message for higher acceptance rates
- Monitor your LinkedIn SSI score for account health

---

## Documentation & Resources

### Official Documentation

- **ConnectSafely.ai Docs:** https://connectsafely.ai/docs
- **API Reference:** Available in ConnectSafely.ai dashboard
- **n8n HTTP Request Node:** https://docs.n8n.io/nodes/n8n-nodes-base.httpRequest
- **n8n Loop Node:** https://docs.n8n.io/nodes/n8n-nodes-base.splitInBatches

### Support Channels

- **Email Support:** support@connectsafely.ai
- **Documentation:** https://connectsafely.ai/docs
- **Custom Workflows:** Contact us for custom automation development

---

## Connect With Us

Stay updated with the latest automation tips, LinkedIn strategies, and platform updates:

- **LinkedIn:** [linkedin.com/company/connectsafelyai](https://linkedin.com/company/connectsafelyai)
- **YouTube:** [youtube.com/@ConnectSafelyAI-v2x](https://youtube.com/@ConnectSafelyAI-v2x)
- **Instagram:** [instagram.com/connectsafely.ai](https://instagram.com/connectsafely.ai)
- **Facebook:** [facebook.com/connectsafelyai](https://www.facebook.com/people/ConnectSafelyAI/61582550884724/)
- **X (Twitter):** [x.com/AiConnectsafely](https://x.com/AiConnectsafely)
- **Bluesky:** [connectsafelyai.bsky.social](https://connectsafelyai.bsky.social)
- **Mastodon:** [mastodon.social/@connectsafely](https://mastodon.social/@connectsafely)

---

## Need Custom Workflows?

Looking to build sophisticated LinkedIn automation workflows tailored to your business needs?

**Contact our team** for custom automation development, strategy consulting, and enterprise solutions.

We specialize in:

- Multi-channel prospecting workflows
- AI-powered lead scoring and qualification
- CRM integration and data synchronization
- Competitor monitoring and intelligence
- Bulk outreach automation with personalization
- Custom daily limit and scheduling logic

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
