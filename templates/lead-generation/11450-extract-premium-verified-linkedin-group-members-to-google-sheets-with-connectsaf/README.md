# 🎣 Extract premium & verified LinkedIn group members to Google Sheets with ConnectSafely.AI

> ⚡ **69 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# Extract LinkedIn Group Members to Google Sheets - Premium & Verified Only using ConnectSafely.AI API

## Who's it for

This workflow is built for sales professionals, community managers, recruiters, and growth marketers who want to extract high-quality leads from LinkedIn groups without the manual grind. Perfect for anyone who needs to identify decision-makers, founders, and serious professionals within large LinkedIn communities.

If you're running targeted outreach campaigns, building prospect lists, researching competitor communities, or looking to connect with verified industry leaders, this automation filters the noise and delivers only Premium and Verified members straight to your spreadsheet.

## How it works

The workflow automates LinkedIn group member extraction by combining pagination handling with intelligent filtering through ConnectSafely.ai's API.

**The process flow:**
1. Initializes pagination variables with your target group ID
2. Fetches group members in batches of 50 via ConnectSafely.ai API
3. Filters each batch for Premium OR Verified members only
4. Extracts profile data (name, headline, follower count, profile URL, etc.)
5. Checks if more pages exist and loops back automatically
6. Once complete, splits all members into individual items
7. Appends or updates records in Google Sheets (deduplicates by Profile ID)

The pagination loop handles groups of any size - whether 500 or 50,000 members.

---

## Setup steps

### Step 1: Prepare Your Google Sheet

Structure your Google Sheet with the following columns:

| Column Name | Description | Required |
|------------|-------------|----------|
| `Profile ID` | Unique LinkedIn profile identifier | Yes |
| `First Name` | Member's first name | Yes |
| `Last Name` | Member's last name | Yes |
| `Full Name` | Combined first and last name | Yes |
| `Headline` | Professional headline/tagline | Yes |
| `Public Identifier` | LinkedIn username | Yes |
| `Profile URL` | Direct link to LinkedIn profile | Yes |
| `Follower Count` | Number of followers | Yes |
| `Is Premium` | Premium subscription status | Yes |
| `Is Verified` | Verification badge status | Yes |
| `Relationship Status` | Connection degree (1st, 2nd, 3rd) | Yes |

**Pro Tip**: The workflow uses "Append or Update" operation with Profile ID as the matching column, so running it multiple times won't create duplicates.


### Step 2: Configure ConnectSafely.ai API Credentials

#### Obtain API Key

1. Log into [ConnectSafely.ai Dashboard](https://connectsafely.ai/dashboard)
2. Navigate to **Settings** → **API Keys**
3. Generate a new API key

#### Add Bearer Auth Credential in n8n

1. Go to **Credentials** in n8n
2. Click **Add Credential** → **Header Auth** or **Bearer Auth**
3. Paste your ConnectSafely.ai API key
4. Save the credential

This credential is used by the "Fetch Group Members" HTTP Request node.


### Step 3: Configure Google Sheets Integration

#### 3.1 Connect Google Sheets Account

1. Go to **Credentials** → **Add Credential** → **Google Sheets OAuth2**
2. Follow the OAuth flow to connect your Google account
3. Grant access to Google Sheets

#### 3.2 Configure "Append to Google Sheets" Node

1. Open the **Append to Google Sheets** node
2. Select your Google Sheets credential
3. Enter your **Document ID** (from the sheet URL)
4. Select the **Sheet Name**
5. Configure column mapping to match the extracted fields
6. Set **Matching Column** to `Profile ID` for deduplication


### Step 4: Set Your Target LinkedIn Group

1. Open the **Initialize Pagination** node
2. Locate the `groupId` variable in the code
3. Replace `"9357376"` with your target group ID

**Finding Your Group ID:**
- Go to your LinkedIn group
- Look at the URL: `linkedin.com/groups/XXXXXXX/`
- The numbers are your group ID

```javascript
// Change this value to your target group
groupId: "9357376",  // Replace with your group ID
```


### Step 5: Test the Workflow

1. Click the **Start Workflow** manual trigger node
2. Click **Test Workflow**
3. Verify:
   - API returns member data correctly
   - Filtering captures only Premium/Verified members
   - Pagination loops for additional pages (if applicable)
   - Google Sheets populates with extracted data

---

## Customization

### Filter Criteria

Edit the filter logic in the **Process & Filter Members** node to adjust:

- **Premium Only**: Remove the `isVerified` checks to capture only Premium subscribers
- **Verified Only**: Remove the `isPremium` checks to capture only Verified profiles
- **All Members**: Remove the filter entirely to extract everyone (modify the `return` statement)
- **Minimum Followers**: Add a follower count threshold for influencer targeting

```javascript
// Example: Filter for Premium members with 1000+ followers
const filteredMembers = members.filter(member =&gt; {
  const isPremium = member.isPremium === true;
  const hasMinFollowers = member.followerCount &gt;= 1000;
  return isPremium && hasMinFollowers;
});
```

### Batch Size

- **Default**: 50 members per API request
- **Adjust**: Modify the `count` value in Initialize Pagination node
- **Note**: 50 is the maximum allowed by the API

### Additional Fields

The API returns more fields than extracted by default. Edit the **Process & Filter Members** node to include:

- `creator` - Whether they're a LinkedIn creator
- `badges` - Full list of profile badges
- `fetchedAt` - Timestamp of extraction

---

## Use Cases

- **Sales Prospecting**: Build targeted prospect lists from industry-specific groups with verified decision-makers
- **Competitor Research**: Analyze who's active in competitor communities and their professional backgrounds
- **Influencer Identification**: Find Premium creators and verified professionals for partnership opportunities
- **Recruiting**: Source passive candidates who are active in professional development groups
- **Event Marketing**: Identify engaged professionals in niche communities for webinar and conference promotion
- **Content Strategy**: Research headlines and titles to understand what resonates in your industry

---

## Troubleshooting

### Common Issues & Solutions

**Issue**: Empty results returned
- **Solution**: Verify you're a member of the target group; API can only access groups you've joined

**Issue**: "401 Unauthorized" errors
- **Solution**: Check that your ConnectSafely.ai API key is valid and the Bearer Auth credential is properly configured

**Issue**: Pagination loop seems infinite
- **Solution**: This is expected behavior until `hasMore` returns false; large groups may take several minutes to fully process

**Issue**: Duplicate entries in Google Sheets
- **Solution**: Ensure the "Append or Update" operation is selected with `Profile ID` as the matching column

**Issue**: Missing data in certain columns
- **Solution**: Not all profiles have complete data; the workflow handles null values gracefully

**Issue**: Google Sheets not updating
- **Solution**: Verify OAuth credentials are valid and the sheet/document IDs are correctly configured

---

## Documentation & Resources

### Official Documentation
- **ConnectSafely.ai Docs**: [https://connectsafely.ai/docs](https://connectsafely.ai/docs)
- **API Reference**: Available in ConnectSafely.ai dashboard
- **n8n Google Sheets Node**: [https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/)

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
- AI-powered personalization at scale
- Lead scoring and qualification automation
- CRM integration and data synchronization
- Custom reporting and analytics pipelines

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
