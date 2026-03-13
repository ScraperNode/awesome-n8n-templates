# 💬 Send personalized LinkedIn DMs to profile visitors with ConnectSafely.ai and Google Sheets

> ⚡ **221 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Send Personalized DMs to LinkedIn Profile Visitors

## Who's it for

This workflow is built for sales professionals, recruiters, founders, and networkers who want to automatically reach out to people who viewed their LinkedIn profile. Perfect for anyone who knows that profile visitors are warm leads but doesn't have time to manually check who visited, craft personalized messages, and send outreach one by one.

If you're doing outbound sales, recruiting talent, building partnerships, or simply want to convert curiosity into conversations, this automation turns passive profile views into active outreach opportunities.

## How it works

The workflow automatically identifies LinkedIn profile visitors and sends them personalized messages based on their connection status.

**The process flow:**
1. Scheduled trigger runs weekly (or manually) to fetch recent profile visitors
2. ConnectSafely.ai API retrieves all visitors from the past 7 days
3. Splits visitors into individual records for processing
4. Checks Google Sheets to avoid messaging the same person twice
5. Routes based on connection degree:
   - **1st-degree connections** → Sends a personalized DM
   - **2nd/3rd-degree connections** → Sends a connection request with message
6. Logs all outreach to Google Sheets for tracking
7. Waits between messages to maintain natural activity patterns
8. Loop continues until all visitors are processed

---

## Setup steps

### Step 1: Configure ConnectSafely.ai API Credentials

#### Obtain API Key

1. Create an account at [ConnectSafely.ai](https://connectsafely.ai)
2. Connect your LinkedIn account in the dashboard
3. Navigate to **Settings** → **API Keys**
4. Generate a new API key

#### Add Bearer Auth Credential in n8n

1. Go to **Credentials** in n8n
2. Click **Add Credential** → **HTTP Bearer Auth**
3. Name it "ConnectSafely.ai API"
4. Paste your API key
5. Save the credential

This credential is used by all three HTTP Request nodes: Fetch Profile Visitors, Send DM, and Send Connection Request.


### Step 2: Configure Google Sheets Integration

#### 2.1 Create Your Tracking Sheet

Create a new Google Sheet with the following columns:

| Column Name | Description |
|-------------|-------------|
| `Name` | Visitor's full name |
| `Linkedin URL` | Visitor's profile URL |
| `Status` | Outreach status (DONE) |

#### 2.2 Connect Google Sheets Account

1. Go to **Credentials** → **Add Credential** → **Google Sheets OAuth2**
2. Follow the OAuth flow to connect your Google account
3. Grant access to Google Sheets

#### 2.3 Update All Google Sheets Nodes

There are three Google Sheets nodes that need configuration:

1. **Check if Already Contacted** - Looks up existing contacts
2. **Log DM Sent to Sheet** - Records DMs sent
3. **Log Connection Request to Sheet** - Records connection requests

For each node:
1. Open the node
2. Replace `YOUR_GOOGLE_SHEET_ID` with your actual sheet ID (from the URL)
3. Select the correct sheet name
4. Save


### Step 3: Customize Your Message Templates

The workflow includes two Code nodes with message templates that you **must customize**:

#### For Connected Users (DMs)

Open the **"Generate DM for Connected User"** node and update:

```javascript
// Sender footer - CUSTOMIZE THIS
const footer = `\n\n— Your Name`;

// Message bodies - CUSTOMIZE THESE
const messages = [
  "Noticed you recently checked out my profile... I've been working on [YOUR PRODUCT] — [BRIEF DESCRIPTION].",
  // Add more variations...
];
```

#### For New Connections (Connection Requests)

Open the **"Generate Message for New Connection"** node and update the same sections with your product/service details.

**Tips for good messages:**
- Keep under 300 characters for connection requests
- Personalize with their name (already included)
- Mention something specific about why you're reaching out
- Include a clear but soft call-to-action
- Have 3-5 variations to avoid repetitive messaging


### Step 4: Adjust the Schedule

1. Open the **Weekly Schedule Trigger** node
2. Adjust based on your profile traffic:
   - High traffic: Daily
   - Medium traffic: Every 3 days
   - Low traffic: Weekly (default)


### Step 5: Test the Workflow

1. Click **Test Workflow** on the Schedule Trigger or add a Manual Trigger
2. Verify:
   - Profile visitors are fetched correctly
   - Deduplication works (no existing contacts get messaged)
   - Connection degree routing works properly
   - Messages are personalized with visitor names
   - Google Sheets logs entries correctly

---

## Customization

### Time Range for Visitors

Edit the JSON body in the **Fetch Profile Visitors** node:

```json
{"timeRange":"past_7_days","start":0,"fetchAll":true}
```

Options:
- `past_7_days` - Last week's visitors (default)
- `past_30_days` - Last month's visitors
- `past_90_days` - Last quarter's visitors

### Message Personalization

Both Code nodes support multiple message variations. The workflow randomly selects one for each visitor, making your outreach feel more natural.

To add more variations:
1. Open the relevant Code node
2. Add new message strings to the `messages` array
3. Use placeholders like `[YOUR PRODUCT]` and replace with your actual content

### Wait Time Between Messages

The **Wait Between Messages** node adds delays between outreach. Adjust the duration to:
- Increase if you want more conservative pacing
- Decrease if you have premium LinkedIn and higher limits

Recommended: 1-5 minutes between messages

### Add More Tracking Fields

To track additional data in Google Sheets:
1. Add columns to your sheet (e.g., `Message Sent`, `Connection Degree`, `Date`)
2. Update the Google Sheets nodes to map these new fields
3. Pull data from the workflow context using expressions

### Filter by Company or Title

Want to only message visitors from specific companies or with certain titles?
1. Add an **IF** node after **Skip if Already Contacted**
2. Add conditions based on visitor data fields
3. Route non-matching visitors directly to the Wait node

---

## Use Cases

- **Sales Prospecting**: Automatically reach out to decision-makers who are researching you before a sales cycle
- **Recruiting**: Engage passive candidates who are checking out your profile after seeing job posts
- **Founder Networking**: Connect with investors, partners, and potential hires who show interest
- **Consulting/Freelance**: Convert profile visitors into discovery calls by reaching out while you're top of mind
- **Personal Branding**: Build your network by engaging everyone who takes time to view your profile

---

## Troubleshooting

### Common Issues & Solutions

**Issue**: No visitors returned from API
- **Solution**: Ensure your LinkedIn account is connected in ConnectSafely.ai dashboard. Also verify you've had recent profile views (check LinkedIn's native viewer count).

**Issue**: Duplicate messages being sent
- **Solution**: Verify the Google Sheets lookup is working correctly. Check that the `Linkedin URL` column matches exactly what the API returns. Make sure all three Google Sheets nodes point to the same sheet.

**Issue**: Messages not sending
- **Solution**: Check your ConnectSafely.ai API key is valid. Verify the HTTP Request nodes have the Bearer Auth credential attached. Check the API response for error messages.

**Issue**: Wrong message type sent (DM vs Connection Request)
- **Solution**: The routing is based on `connectionDegree` field. Verify this field is being returned correctly from the API. Check the **Check if 1st Degree Connection** node conditions.

**Issue**: Profile ID extraction failing
- **Solution**: The **Extract Profile ID from URL** Code node parses the LinkedIn URL. Check that visitors have valid `navigationUrl` values.

**Issue**: Google Sheets not updating
- **Solution**: Verify your Google Sheets credential has write access. Check that the sheet ID is correct and the sheet name matches.

**Issue**: Rate limit errors
- **Solution**: Increase the wait time in the **Wait Between Messages** node. Consider reducing the frequency of the schedule trigger.

---

## Rate Limiting Best Practices

LinkedIn monitors automated activity. To stay safe:

- **Start slow**: Begin with 10-15 messages per day
- **Gradually increase**: Add 5 more per week up to 50/day max
- **Use random delays**: The workflow includes built-in waits
- **Pause if warned**: If LinkedIn shows any warnings, stop for 24-48 hours
- **Keep messages personal**: Avoid spammy, salesy language
- **Don't run 24/7**: Schedule during business hours

---

## Costs & Considerations

| Service | Cost |
|---------|------|
| ConnectSafely.ai | Free trial available, then subscription |
| Google Sheets | Free |
| n8n | Free (self-hosted) or cloud pricing |

**No per-message costs** - ConnectSafely.ai subscription includes API access for messaging.

---

## Documentation & Resources

### Official Documentation
- **ConnectSafely.ai Docs**: [https://connectsafely.ai/docs](https://connectsafely.ai/docs)
- **ConnectSafely.ai API Reference**: Available in dashboard
- **Google Sheets API**: [https://developers.google.com/sheets](https://developers.google.com/sheets)

### Support Channels
- **Email Support**: [support@connectsafely.ai](mailto:support@connectsafely.ai)
- **Documentation**: [https://connectsafely.ai/docs](https://connectsafely.ai/docs)
- **Custom Workflows**: [Contact us for custom automation](https://connectsafely.ai/contact)

---

## Connect With Us

Stay updated with the latest automation tips and LinkedIn strategies:

- **LinkedIn**: [linkedin.com/company/connectsafelyai](https://www.linkedin.com/company/connectsafelyai)
- **YouTube**: [youtube.com/@ConnectSafelyAI-v2x](https://www.youtube.com/@ConnectSafelyAI-v2x)
- **Instagram**: [instagram.com/connectsafely.ai](https://www.instagram.com/connectsafely.ai/)
- **Facebook**: [facebook.com/connectsafelyai](https://www.facebook.com/people/ConnectSafelyAI/61582550884724/)
- **X (Twitter)**: [x.com/AiConnectsafely](https://x.com/AiConnectsafely)
- **Bluesky**: [connectsafelyai.bsky.social](https://bsky.app/profile/connectsafelyai.bsky.social)
- **Mastodon**: [mastodon.social/@connectsafely](https://mastodon.social/@connectsafely)

---

## Need Custom Workflows?

Looking to build sophisticated LinkedIn automation workflows tailored to your business needs?

**[Contact our team](https://connectsafely.ai/contact)** for custom automation development, strategy consulting, and enterprise solutions.

We specialize in:
- Multi-channel engagement workflows
- AI-powered personalization at scale
- Lead scoring and qualification automation
- CRM integration and data synchronization
- Custom reporting and analytics pipelines

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
