# 📱 Automate LinkedIn Profile Following with Google Sheets and ConnectSafely

> ⚡ **83 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# Follow LinkedIn profiles from Google Sheets via ConnectSafely

## Who's it for

This workflow is designed for sales professionals, recruiters, marketers, and business development teams who need to scale their LinkedIn networking efforts. Perfect for anyone managing lead generation campaigns, building industry connections, or conducting competitor research at scale.


## How it works

The workflow automates LinkedIn profile following by reading a list of target profiles from Google Sheets, processing each profile through ConnectSafely.ai's platform-compliant automation, and tracking completion status back to your spreadsheet. The automation maintains LinkedIn's compliance standards while eliminating manual clicking.

---

Watch the complete step-by-step implementation guide:

[![LinkedIn Follow Automation Tutorial](https://img.youtube.com/vi/b4G47AJX418/maxresdefault.jpg)](https://www.youtube.com/watch?v=b4G47AJX418)

---


## Setup steps

### Step 1: Install ConnectSafely.ai n8n Package

Install the official ConnectSafely.ai community node:

```bash
Package name: n8n-nodes-connectsafely.ai
```

**Installation Methods:**

**Option A: Via n8n Interface**
1. Navigate to **Settings** → **Community Nodes**
2. Search for `n8n-nodes-connectsafely.ai`
3. Click **Install**

**Option B: Via npm**
```bash
npm install n8n-nodes-connectsafely.ai
```

**Important**: A complete n8n restart is required after installation for the nodes to appear.


### Step 2: Prepare Your Google Sheet

Structure your Google Sheet with the following columns:

| Column Name | Description | Required |
|------------|-------------|----------|
| `LinkedIn Url` | LinkedIn profile URL or ID | Yes |
| `First Name` | Contact's first name | Optional |
| `Tagline` | Contact's headline/title | Optional |
| `Status` | Processing status (pending/done) | Yes |
| `row_number` | Auto-generated row identifier | Yes |

**Sample Data Format:**
```
LinkedIn Url: https://www.linkedin.com/in/username
Status: pending
```

### Step 3: Configure Google Sheets Integration

1. Add **Google Sheets** node (Get Rows operation)
2. Authenticate with Google OAuth:
   - Client ID
   - Client Secret
   - OAuth Token
3. Select your document and sheet
4. Configure to pull all rows with pending status


### Step 4: Configure ConnectSafely.ai Credentials

#### Obtain API Credentials

1. Log into [ConnectSafely.ai Dashboard](https://connectsafely.ai/dashboard)
2. Navigate to **Settings** → **API Keys**
3. Generate a new API key
4. Copy your **Account ID** from the **Accounts** section

#### Configure n8n Node

1. Add **ConnectSafely LinkedIn** node
2. Select **Follow a User** operation
3. Add credentials:
   - **API Key**: Paste your ConnectSafely API key
   - **Account ID**: Your LinkedIn account ID from dashboard
4. Map **Profile ID** field:
   - Use expression: `{{ $json['LinkedIn Url'] }}`
   - This dynamically pulls the profile URL from each row


### Step 5: Configure Status Tracking

Add a second **Google Sheets** node for status updates:

1. Select **Update Row** operation
2. Choose the same Google Sheet
3. Configure column mapping:
   - **Matching Column**: `row_number`
   - **Update Field**: `Status` → `done`
4. Map row_number expression: `{{ $('Get row(s) in sheet').item.json.row_number }}`

This ensures accurate tracking of processed profiles and enables workflow resumption.

---

### Customization

-   Add delay nodes for large batches (500+ profiles)
-   Implement error handling for failed attempts
-   Extend to CRM integration or connection requests
-   Add analytics tracking for follow-back monitoring

## Use Cases

- **Lead Generation**: Follow prospects and potential customers at scale
- **Network Building**: Expand your LinkedIn network with relevant industry professionals
- **Competitor Analysis**: Track and follow key players in your market
- **Influencer Outreach**: Connect with thought leaders and content creators
- **Event Networking**: Follow attendees and speakers from conferences and webinars

---

## Troubleshooting

### Common Issues & Solutions

**Issue**: ConnectSafely node not appearing after installation
- **Solution**: Ensure complete n8n restart (not just workflow refresh)

**Issue**: Authentication errors with ConnectSafely API
- **Solution**: Verify API key has proper permissions in dashboard

**Issue**: Profile ID format errors
- **Solution**: Ensure you're passing LinkedIn profile IDs or full URLs, not partial paths

**Issue**: Google Sheets not updating status
- **Solution**: Confirm `row_number` column exists and mapping is correct

**Issue**: Workflow stops mid-execution
- **Solution**: Check Google Sheets has `Status` column with "pending" values; verify rate limits

---

## Advanced Configuration

### Scaling Considerations

- **Batch Processing**: Add delay nodes between executions for large lists (500+ profiles)
- **Error Handling**: Implement error workflows for failed follow attempts
- **Retry Logic**: Configure automatic retries for temporary failures
- **Logging**: Add nodes to track execution metrics and performance

### Integration Extensions

This workflow can be extended to include:

- **CRM Integration**: Update contact records with follow status
- **Connection Requests**: Modify to send personalized connection requests
- **Engagement Tracking**: Monitor who follows back
- **Multi-Platform**: Expand to other social networks
- **Analytics Dashboard**: Feed data to BI tools for reporting

---

## Documentation & Resources

### Official Documentation
- **ConnectSafely.ai Docs**: [https://connectsafely.ai/docs](https://connectsafely.ai/docs)
- **n8n Package Details**: [https://connectsafely.ai/n8n-docs](https://connectsafely.ai/n8n-docs)
- **API Reference**: Available in ConnectSafely dashboard

### Support Channels
- **Email Support**: [support@connectsafely.ai](mailto:support@connectsafely.ai)
- **Documentation**: [https://connectsafely.ai/docs](https://connectsafely.ai/docs)
- **Custom Workflows**: [Contact us for custom automation](https://connectsafely.ai/contact)

---

## Connect With Us

Stay updated with the latest automation tips, LinkedIn strategies, and platform updates:

- **LinkedIn**: [linkedin.com/company/connectsafelyai](https://www.linkedin.com/company/connectsafelyai)
- **YouTube**: [youtube.com/@ConnectSafelyAI-v2x](https://www.youtube.com/@ConnectSafelyAI-v2x)
- **Instagram**: [instagram.com/connectsafely.ai](https://www.instagram.com/connectsafely.ai/)
- **Facebook**: [facebook.com/connectsafelyai](https://www.facebook.com/profile.php?id=61582550884724)
- **X (Twitter)**: [x.com/AiConnectsafely](https://x.com/AiConnectsafely)
- **Bluesky**: [connectsafelyai.bsky.social](https://bsky.app/profile/connectsafelyai.bsky.social)
- **Mastodon**: [mastodon.social/@connectsafely](https://mastodon.social/@connectsafely)

---

## Need Custom Workflows?

Looking to build sophisticated LinkedIn automation workflows tailored to your business needs?

**[Contact our team](https://connectsafely.ai/contact)** for custom automation development, strategy consulting, and enterprise solutions.

We specialize in:
- Multi-channel engagement workflows
- Lead scoring and qualification automation
- CRM integration and data synchronization
- Custom reporting and analytics pipelines
- Team collaboration and approval workflows

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
