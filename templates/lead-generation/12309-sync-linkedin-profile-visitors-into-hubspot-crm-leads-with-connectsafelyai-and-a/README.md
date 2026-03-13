# 🎣 Sync LinkedIn profile visitors into HubSpot CRM leads with ConnectSafely.ai and Apify

> ⚡ **65 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# Sync LinkedIn Profile Visitors to HubSpot CRM

## Who's it for

This workflow is built for sales professionals, recruiters, founders, and marketers who want to automatically capture LinkedIn profile visitors and convert them into actionable CRM leads. Perfect for anyone tired of manually checking who viewed their profile, copying data one by one, and losing warm leads because they never made it into your pipeline.

If you're running outbound sales, recruiting talent, building partnerships, or simply want to know who's checking you out on LinkedIn, this automation captures every visitor and enriches them with full professional data before syncing to your CRM.

## How it works

The workflow automatically syncs your LinkedIn profile visitors to HubSpot CRM with enriched professional data.

**The process flow:**
1. Scheduled trigger runs weekly (or manually) to fetch recent visitors
2. ConnectSafely.ai API retrieves all profile visitors from the past 7 days
3. Splits visitors into individual records for processing
4. Apify actor enriches each visitor with complete LinkedIn profile data (email, company, title, location)
5. Email validation filters contacts - only those with valid emails proceed
6. HubSpot integration creates or updates contacts with full enriched information
7. Loop continues until all visitors are processed

---

## Setup steps

### Step 1: Configure ConnectSafely.ai API Credentials

#### Obtain API Key

1. Log into [ConnectSafely.ai Dashboard](https://connectsafely.ai/dashboard)
2. Navigate to **Settings** → **API Keys**
3. Generate a new API key

#### Add Bearer Auth Credential in n8n

1. Go to **Credentials** in n8n
2. Click **Add Credential** → **Header Auth** or **HTTP Bearer Auth**
3. Name it "ConnectSafely.ai API"
4. Paste your ConnectSafely.ai API key
5. Save the credential

This credential is used by the "Fetch Profile Visitors" HTTP Request node.


### Step 2: Configure Apify Integration

#### Get Apify API Key

1. Sign up at [Apify.com](https://apify.com)
2. Go to **Settings** → **Integrations** → **API**
3. Copy your API token

#### Find the LinkedIn Enrichment Actor

1. Go to [Apify Store](https://apify.com/store)
2. Search for "LinkedIn Profile Scraper" or use actor ID: `UMdANQyqx3b2JVuxg`
3. Copy the actor URL

#### Add Apify Credential in n8n

1. Go to **Credentials** → **Add Credential** → **Apify API**
2. Paste your Apify API token
3. Save the credential

#### Configure the Apify Node

1. Open the **Enrich LinkedIn Profile** node
2. Select your Apify credential
3. Update the Actor ID URL with your chosen LinkedIn scraper actor


### Step 3: Configure HubSpot Integration

#### Create HubSpot App Token

1. Go to HubSpot **Settings** → **Integrations** → **Private Apps**
2. Click **Create a private app**
3. Name it "n8n LinkedIn Sync"
4. Under **Scopes**, enable:
   - `crm.objects.contacts.read`
   - `crm.objects.contacts.write`
5. Click **Create app** and copy the access token

#### Add HubSpot Credential in n8n

1. Go to **Credentials** → **Add Credential** → **HubSpot App Token**
2. Paste your access token
3. Save the credential

#### Connect to HubSpot Node

1. Open the **Create HubSpot Contact** node
2. Select your HubSpot App Token credential


### Step 4: Configure the Schedule

1. Open the **Run Weekly** node
2. Adjust the schedule based on your needs:
   - Default: Every week
   - High traffic profiles: Every day
   - Low traffic: Every 2 weeks

### Step 5: Test the Workflow

1. Click the **Test Manually** node
2. Click **Test Workflow**
3. Verify:
   - Profile visitors are fetched correctly
   - Enrichment returns full profile data
   - Contacts with emails are created in HubSpot
   - Contacts without emails are skipped gracefully

---

## Customization

### Time Range Adjustment

Edit the JSON body in the **Fetch Profile Visitors** node to change the lookback period:

```json
{"timeRange":"past_7_days","start":0,"fetchAll":true}
```

Options:
- `past_7_days` - Last week's visitors (default)
- `past_30_days` - Last month's visitors
- `past_90_days` - Last quarter's visitors

### Additional HubSpot Fields

The **Create HubSpot Contact** node maps these fields by default:
- First Name
- Last Name
- Email
- Job Title
- Company Name
- City
- Country
- Street Address
- LinkedIn URL
- Lead Status (set to "NEW")

To add more fields:
1. Open the **Create HubSpot Contact** node
2. Click **Add Field** under Additional Fields
3. Map Apify output fields to HubSpot properties

### Different CRM Integration

To use a different CRM instead of HubSpot:
1. Delete the **Create HubSpot Contact** node
2. Add your CRM node (Salesforce, Pipedrive, Zoho, etc.)
3. Map the enriched fields to your CRM's contact properties
4. Connect it to the "Has Valid Email" true output

### Add Slack Notifications

Want to get notified when high-value visitors are captured?
1. Add a Slack node after **Create HubSpot Contact**
2. Filter for specific job titles or companies
3. Send a message to your sales channel

---

## Use Cases

- **Sales Prospecting**: Automatically capture decision-makers who are researching you before outreach
- **Recruiting**: Build a passive candidate pipeline from people checking out your profile
- **Founder Networking**: Know when investors, partners, or potential hires are interested
- **Account-Based Marketing**: Track when target account contacts view your profile
- **Event Follow-up**: Capture visitors who checked you out after conferences or webinars

---

## Troubleshooting

### Common Issues & Solutions

**Issue**: No visitors returned from API
- **Solution**: Ensure your LinkedIn account is connected in ConnectSafely.ai dashboard and has had recent profile views

**Issue**: Apify enrichment returning empty results
- **Solution**: Verify the LinkedIn URL format is correct (should be full URL like `https://www.linkedin.com/in/username`). Check your Apify actor is running properly.

**Issue**: "Profile not found" errors
- **Solution**: Some LinkedIn profiles may be private or have restricted visibility. These will be skipped automatically.

**Issue**: HubSpot contact not created
- **Solution**: Check that your HubSpot App Token has `crm.objects.contacts.write` scope enabled

**Issue**: Duplicate contacts in HubSpot
- **Solution**: HubSpot uses email as the unique identifier. The node is configured to "Create or Update" so duplicates should be updated, not created. Verify the email field is mapping correctly.

**Issue**: Rate limit errors from Apify
- **Solution**: Add a Wait node after the loop with 2-5 second delays between enrichment calls

**Issue**: Missing email addresses for most visitors
- **Solution**: This is normal - enrichment typically finds emails for 60-70% of profiles. Consider adding LinkedIn URL as a fallback identifier in your CRM.

---

## Costs & Considerations

| Service | Cost |
|---------|------|
| ConnectSafely.ai | Free trial available, then subscription |
| Apify Enrichment | ~$1 per 1,000 records |
| HubSpot | Free tier works, or existing subscription |
| n8n | Free (self-hosted) or cloud pricing |

**Estimated monthly cost for 200 visitors/month**: ~$0.20 for Apify enrichment

---

## Documentation & Resources

### Official Documentation
- **ConnectSafely.ai Docs**: [https://connectsafely.ai/docs](https://connectsafely.ai/docs)
- **Apify LinkedIn Actors**: [https://apify.com/store](https://apify.com/store)
- **HubSpot API**: [https://developers.hubspot.com](https://developers.hubspot.com)

### Support Channels
- **Email Support**: [support@connectsafely.ai](mailto:support@connectsafely.ai)
- **Documentation**: [https://connectsafely.ai/docs](https://connectsafely.ai/docs)

---

## Connect With Us

Stay updated with the latest automation tips and LinkedIn strategies:

- **LinkedIn**: [linkedin.com/company/connectsafelyai](https://www.linkedin.com/company/connectsafelyai)
- **YouTube**: [youtube.com/@ConnectSafelyAI-v2x](https://www.youtube.com/@ConnectSafelyAI-v2x)
- **Instagram**: [instagram.com/connectsafely.ai](https://www.instagram.com/connectsafely.ai/)
- **X (Twitter)**: [x.com/AiConnectsafely](https://x.com/AiConnectsafely)

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

HTTP Request, HubSpot, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
