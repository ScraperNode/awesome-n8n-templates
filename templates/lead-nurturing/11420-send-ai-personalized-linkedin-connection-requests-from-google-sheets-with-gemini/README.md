# 💬 Send AI-personalized LinkedIn connection requests from Google Sheets with Gemini

> ⚡ **186 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# Send AI-personalized LinkedIn connection requests from Google Sheets using ConnectSafely.AI API

## Who's it for

This workflow is built for sales professionals, recruiters, founders, and growth marketers who want to scale their LinkedIn outreach without sacrificing personalization. Perfect for anyone tired of sending generic connection requests that get ignored, or manually crafting individual messages for hundreds of prospects.

If you're running ABM campaigns, building a sales pipeline, recruiting talent, or expanding your professional network, this automation handles the heavy lifting while keeping your outreach authentic and human.

## How it works

The workflow automates personalized LinkedIn connection requests by combining Google Sheets prospect tracking with AI-powered message generation through ConnectSafely.ai's API.

**The process flow:**
1. Reads pending prospects from your Google Sheet
2. Immediately marks them "IN PROGRESS" to prevent duplicate sends
3. Fetches complete LinkedIn profile data via ConnectSafely.ai API
4. Generates a personalized, authentic message using Google Gemini AI
5. Sends the connection request with your custom message
6. Updates your sheet with "DONE" status and stores the message sent

Random delays between requests mimic human behavior and maintain LinkedIn compliance.

---

Watch the complete step-by-step implementation guide:

[![LinkedIn Connection Request Automation Tutorial](https://img.youtube.com/vi/ZCnXr3-W8xs/maxresdefault.jpg)](https://www.youtube.com/watch?v=ZCnXr3-W8xs)

---

## Setup steps

### Step 1: Prepare Your Google Sheet

Structure your Google Sheet with the following columns:

| Column Name | Description | Required |
|------------|-------------|----------|
| `First Name` | Contact's first name | Optional |
| `LinkedIn Url` | LinkedIn profile URL or username | Yes |
| `Tagline` | Contact's headline/title | Optional |
| `Status` | Processing status (PENDING/IN PROGRESS/DONE) | Yes |
| `Message` | Stores the AI-generated message sent | Yes |

**Sample Data Format:**
```
First Name: John
LinkedIn Url: https://www.linkedin.com/in/johndoe
Tagline: VP of Sales at TechCorp
Status: PENDING
Message: (left empty - will be filled by workflow)
```

**Pro Tip**: Use LinkedIn Sales Navigator export or a prospecting tool to populate your sheet with qualified leads.


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

This credential is used by both the "Fetch LinkedIn Profile" and "Send Connection Request" HTTP nodes.


### Step 3: Configure Google Sheets Integration

#### 3.1 Connect Google Sheets Account

1. Go to **Credentials** → **Add Credential** → **Google Sheets OAuth2**
2. Follow the OAuth flow to connect your Google account
3. Grant access to Google Sheets

#### 3.2 Configure "Get Pending Prospect" Node

1. Open the **Get Pending Prospect** node
2. Select your Google Sheets credential
3. Enter your **Document ID** (from the sheet URL)
4. Select the **Sheet Name**
5. Add a filter:
   - **Lookup Column**: `Status`
   - **Lookup Value**: `PENDING`
6. Enable **Return First Match Only** under Options

#### 3.3 Configure "Mark as In Progress" Node

1. Open the **Mark as In Progress** node
2. Select the same document and sheet
3. Configure column mapping:
   - **Matching Column**: `row_number`
   - **Status**: `IN PROGRESS`

#### 3.4 Configure "Mark as Complete" Node

1. Open the **Mark as Complete** node
2. Select the same document and sheet
3. Configure column mapping:
   - **Matching Column**: `row_number`
   - **Status**: `DONE`
   - **Message**: `{{ $('Generate Personalized Message').item.json.message }}`


### Step 4: Configure Google Gemini AI

#### Get Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Create or select a project
3. Generate an API key

#### Add Gemini Credential in n8n

1. Go to **Credentials** → **Add Credential** → **Google Gemini (PaLM) API**
2. Paste your API key
3. Save the credential

#### Connect to Google Gemini Node

1. Open the **Google Gemini** node
2. Select your Gemini credential


### Step 5: Customize the AI Prompt

The **Generate Personalized Message** node contains the system prompt that controls how messages are written. Customize it for your personal brand:

1. Open the **Generate Personalized Message** node
2. Find the **System Message** in Options
3. Replace the placeholder text:

```
MY CONTEXT:
[CUSTOMIZE THIS: Add your name, role, and what you're looking for in connections]
```

With your actual information, for example:

```
MY CONTEXT:
I'm Sarah, founder of a B2B SaaS startup. I'm interested in connecting with other founders, VCs, and sales leaders to exchange ideas and explore potential partnerships.
```

4. Update the sign-off instruction from `"- [YOUR NAME]"` to your actual name


### Step 6: Test the Workflow

1. Add a test prospect to your Google Sheet with `Status: PENDING`
2. Click the **Manual Trigger (for testing)** node
3. Click **Test Workflow**
4. Verify:
   - Profile data is fetched correctly
   - AI generates an appropriate message
   - Connection request is sent
   - Sheet updates to `DONE` with the message stored

---

## Customization

### Message Personalization

Edit the system prompt in the **Generate Personalized Message** node to adjust:

- **Tone**: Formal, casual, or industry-specific language
- **Length**: Modify character limits (LinkedIn allows up to 300 characters)
- **Focus**: Emphasize mutual connections, shared interests, or achievements
- **Sign-off**: Change the signature format to match your brand

### Timing Adjustments

- **Schedule Trigger**: Currently set to run every minute. Adjust the interval in the **Run Every Minute** node
- **Random Delay**: The **Random Delay (1-5 min)** node adds 1-5 minutes of random wait time. Modify the formula `{{ Math.floor(Math.random() * 4) + 1 }}` to change the range

### Rate Limiting Best Practices

- Start with 10-20 connection requests per day
- Gradually increase over 2-3 weeks
- Never exceed 100 requests per day
- Consider pausing on weekends

---

## Use Cases

- **Sales Prospecting**: Connect with decision-makers at target accounts with personalized outreach
- **Recruiting**: Reach out to passive candidates with messages that reference their specific experience
- **Founder Networking**: Build relationships with fellow entrepreneurs, investors, and advisors
- **Event Follow-up**: Send personalized connection requests to conference attendees and speakers
- **Partnership Development**: Connect with potential partners by referencing their company achievements

---

## Troubleshooting

### Common Issues & Solutions

**Issue**: AI generating messages over 300 characters
- **Solution**: Add explicit character count requirement in the system prompt; the current prompt specifies 200-250 characters

**Issue**: "Profile not found" errors from ConnectSafely.ai
- **Solution**: Ensure LinkedIn URLs are complete (include `https://www.linkedin.com/in/`)

**Issue**: Generic-sounding AI messages
- **Solution**: Enhance the system prompt with more specific context about your background and goals

**Issue**: Duplicate connection requests sent
- **Solution**: Verify "Mark as In Progress" node runs before "Fetch LinkedIn Profile"; check that `row_number` column exists in your sheet

**Issue**: Google Sheets not updating
- **Solution**: Confirm `row_number` column exists and the matching column is correctly configured

**Issue**: Bearer Auth errors
- **Solution**: Verify your ConnectSafely.ai API key is valid and has proper permissions

---

## Documentation & Resources

### Official Documentation
- **ConnectSafely.ai Docs**: [https://connectsafely.ai/docs](https://connectsafely.ai/docs)
- **API Reference**: Available in ConnectSafely.ai dashboard
- **Google Gemini API**: [https://ai.google.dev/docs](https://ai.google.dev/docs)

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

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
