# 🎣 Add LinkedIn post commenters to HubSpot CRM with Apify enrichment

> ⚡ **88 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Add LinkedIn Post Commenters to HubSpot CRM

## Who's it for

This workflow is built for content creators, sales professionals, founders, and marketers who post regularly on LinkedIn and want to convert engaged commenters into CRM leads automatically. Perfect for anyone who gets decent engagement on their posts but struggles to manually capture and follow up with everyone who comments.

If you're running thought leadership campaigns, generating inbound interest through content, or simply want to build relationships with people who engage with your posts, this automation captures every commenter and enriches them with full professional data before syncing to your CRM.

## How it works

The workflow automatically captures LinkedIn post commenters and adds them to HubSpot CRM with enriched professional data.

**The process flow:**
1. Submit a LinkedIn post URL via a simple form trigger
2. ConnectSafely.ai fetches all comments from the specified post
3. Splits commenters into individual records for processing
4. Loops through each commenter one at a time
5. Apify actor enriches each profile with complete LinkedIn data (email, company, title, location)
6. Email validation filters contacts - only those with valid emails proceed
7. HubSpot integration creates or updates contacts with full enriched information
8. Loop continues until all commenters are processed

---

Watch the complete step-by-step implementation guide:

[![LinkedIn Post Commenters to HubSpot CRM Tutorial](https://img.youtube.com/vi/hzYsKUDVffo/maxresdefault.jpg)](https://www.youtube.com/watch?v=hzYsKUDVffo)

---

## Setup steps

### Step 1: Install the ConnectSafely Community Node

This workflow requires the ConnectSafely community node, which is only available on self-hosted n8n instances.

1. In n8n, go to **Settings** → **Community Nodes**
2. Click **Install a community node**
3. Enter: `n8n-nodes-connectsafely-ai`
4. Click **Install**
5. Restart n8n if prompted

**Note:** Community nodes are not available on n8n Cloud. You'll need a self-hosted instance.


### Step 2: Configure ConnectSafely.ai API Credentials

#### Obtain API Key

1. Create an account at [ConnectSafely.ai](https://connectsafely.ai)
2. Connect your LinkedIn account in the dashboard
3. Navigate to **Settings** → **API Keys**
4. Generate a new API key

#### Add Credential in n8n

1. Go to **Credentials** in n8n
2. Click **Add Credential** → Search for **ConnectSafely API**
3. Paste your API key
4. Save the credential

#### Connect to the Node

1. Open the **🔍 Fetch All Comments** node
2. Select your ConnectSafely API credential


### Step 3: Configure Apify Integration

#### Get Apify API Key

1. Sign up at [Apify.com](https://apify.com)
2. Go to **Settings** → **Integrations** → **API**
3. Copy your API token

#### Add Apify Credential in n8n

1. Go to **Credentials** → **Add Credential** → **Apify API**
2. Paste your Apify API token
3. Save the credential

#### Configure the Apify Node

1. Open the **Run an Actor and get dataset** node
2. Select your Apify credential
3. The actor URL is pre-configured to use the LinkedIn enrichment actor: `https://console.apify.com/actors/UMdANQyqx3b2JVuxg`


### Step 4: Configure HubSpot Integration

#### Create HubSpot App Token

1. Go to HubSpot **Settings** → **Integrations** → **Private Apps**
2. Click **Create a private app**
3. Name it "n8n LinkedIn Commenters Sync"
4. Under **Scopes**, enable:
   - `crm.objects.contacts.read`
   - `crm.objects.contacts.write`
5. Click **Create app** and copy the access token

#### Add HubSpot Credential in n8n

1. Go to **Credentials** → **Add Credential** → **HubSpot App Token**
2. Paste your access token
3. Save the credential

#### Connect to HubSpot Node

1. Open the **Create or update a contact** node
2. Select your HubSpot App Token credential


### Step 5: Test the Workflow

1. Click **Test Workflow** to get the form URL
2. Open the form URL in your browser
3. Paste a LinkedIn post URL that has comments
4. Submit the form
5. Verify:
   - Comments are fetched correctly
   - Enrichment returns full profile data
   - Contacts with emails are created in HubSpot
   - Contacts without emails are skipped gracefully

---

## Customization

### Additional HubSpot Fields

The **Create or update a contact** node maps these fields by default:
- First Name
- Last Name
- Email
- Job Title
- Company Name
- City
- Country
- Street Address

To add more fields:
1. Open the **Create or update a contact** node
2. Click **Add Field** under Additional Fields
3. Map Apify output fields to HubSpot properties

Available Apify fields include:
- `06_Linkedin_url` - LinkedIn profile URL
- `07_Title` - Current job title
- `08_Summary` - Profile summary
- `16_Company_name` - Current company
- `17_Company_industry` - Industry

### Add Lead Source Tracking

To track that these contacts came from LinkedIn comments:
1. Open the **Create or update a contact** node
2. Add a custom field: `leadSource` = `LinkedIn Post Comment`
3. Optionally add the post URL as a note

### Filter by Comment Quality

Want to skip low-effort comments like "Great post!" or emoji-only responses?
1. Add an **IF** node after **📤 Split Comments Array**
2. Filter based on comment text length or content
3. Only process comments with meaningful engagement

### Different CRM Integration

To use a different CRM instead of HubSpot:
1. Delete the **Create or update a contact** node
2. Add your CRM node (Salesforce, Pipedrive, Zoho, etc.)
3. Map the enriched fields to your CRM's contact properties
4. Connect it to the "Check if Contact is eligible" true output

### Add Slack Notifications

Get notified when high-value commenters are captured:
1. Add a Slack node after **Create or update a contact**
2. Filter for specific job titles (VP, Director, CEO, etc.)
3. Send a message to your sales channel with commenter details

---

## Use Cases

- **Content-Led Sales**: Automatically capture decision-makers who engage with your thought leadership posts
- **Event Promotion**: Sync everyone who comments on event announcements to your follow-up list
- **Product Launches**: Build a list of interested prospects from launch announcement engagement
- **Recruiting**: Capture professionals who engage with hiring posts or company culture content
- **Community Building**: Track engaged community members across multiple posts over time

---

## Troubleshooting

### Common Issues & Solutions

**Issue**: ConnectSafely node not appearing in n8n
- **Solution**: Restart n8n after installing the community node. If still missing, verify the installation in Settings → Community Nodes.

**Issue**: "Comments not loading" or empty results
- **Solution**: Ensure the post URL is the full URL from LinkedIn (e.g., `https://www.linkedin.com/posts/username_activity-1234567890/`), not a shortened version. Also verify the post actually has comments.

**Issue**: Apify enrichment returning empty results
- **Solution**: Verify the LinkedIn URL format from the commenter profile is correct. Check your Apify actor is running properly and hasn't hit rate limits.

**Issue**: HubSpot contact not created
- **Solution**: Check that your HubSpot App Token has `crm.objects.contacts.write` scope enabled. Verify the email field is mapping correctly.

**Issue**: Duplicate contacts in HubSpot
- **Solution**: HubSpot uses email as the unique identifier. The node is configured to "Create or Update" so duplicates should be updated, not created.

**Issue**: Rate limit errors from Apify
- **Solution**: The loop processes one commenter at a time, but you can add a **Wait** node inside the loop with 2-5 second delays if needed.

**Issue**: Missing email addresses for most commenters
- **Solution**: This is normal - enrichment typically finds emails for 60-70% of profiles. Consider adding LinkedIn URL as a fallback identifier in your CRM.

---

## Costs & Considerations

| Service | Cost |
|---------|------|
| ConnectSafely.ai | Free trial available, then subscription |
| Apify Enrichment | ~$1 per 1,000 records |
| HubSpot | Free tier works, or existing subscription |
| n8n | Free (self-hosted required for community nodes) |

**Estimated cost per post with 50 commenters**: ~$0.05 for Apify enrichment

---

## Documentation & Resources

### Official Documentation
- **ConnectSafely.ai Docs**: [https://connectsafely.ai/docs](https://connectsafely.ai/docs)
- **Apify LinkedIn Actors**: [https://apify.com/store](https://apify.com/store)
- **HubSpot API**: [https://developers.hubspot.com](https://developers.hubspot.com)

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

HubSpot, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
