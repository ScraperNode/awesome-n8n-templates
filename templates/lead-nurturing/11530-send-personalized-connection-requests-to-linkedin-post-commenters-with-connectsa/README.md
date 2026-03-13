# 💬 Send personalized connection requests to LinkedIn post commenters with ConnectSafely.ai

> ⚡ **87 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Send Connection Requests to LinkedIn Post Commenters - Automated Outreach with Personalized Messages using ConnectSafely.AI

## Who's it for

This workflow is built for content creators, founders, sales professionals, and LinkedIn thought leaders who want to convert post engagement into real connections. Perfect for anyone who creates content that attracts comments but doesn't have time to manually connect with every person who engages.

If you're publishing LinkedIn content regularly and want to build your network with warm leads (people already interested in what you're saying), this automation handles the tedious work of sending personalized connection requests while you focus on creating more content.

## How it works

The workflow automates the entire connection request process by combining intelligent filtering with personalized messaging through ConnectSafely.ai's API.

**The process flow:**
1. Displays a web form where you paste your LinkedIn post URL
2. Fetches all comments from the specified post via ConnectSafely.ai API
3. Splits commenters into individual items for sequential processing
4. Loops through each commenter one at a time
5. Checks relationship status (already connected? pending request?)
6. Filters out existing connections and pending invitations
7. Generates unique personalized messages using spin text variations
8. Sends connection request with the personalized message
9. Waits 1-2 hours between requests for rate limiting
10. Loops back to process the next commenter until complete

The smart filtering ensures you never send duplicate requests or spam existing connections.

---

## Setup steps

### Step 1: Install ConnectSafely.ai Community Node

#### Install the Package

1. Go to **Settings** → **Community Nodes** in your n8n instance
2. Search for `n8n-nodes-connectsafely.ai`
3. Click **Install**
4. **IMPORTANT**: Restart n8n completely after installation

**Alternative (Command Line):**
```bash
npm install n8n-nodes-connectsafely.ai
```

**Documentation:** [https://connectsafely.ai/n8n-docs](https://connectsafely.ai/n8n-docs)


### Step 2: Configure ConnectSafely.ai API Credentials

#### Obtain API Key

1. Log into [ConnectSafely.ai Dashboard](https://connectsafely.ai/dashboard)
2. Navigate to **Settings** → **API Keys**
3. Generate a new API key
4. Copy your **Account ID** from the Accounts section

#### Add Credentials in n8n

1. Go to **Credentials** in n8n
2. Click **Add Credential** → **ConnectSafely API**
3. Paste your API key
4. Save the credential

This credential is used by all ConnectSafely nodes in the workflow.


### Step 3: Configure the Form Trigger

The workflow uses a Form Trigger to capture your LinkedIn post URL:

| Field | Configuration |
|-------|---------------|
| Form Title | 🔗 LinkedIn Post Engagement Automation |
| Form Description | Enter your LinkedIn post URL below to automatically send personalized connection requests |
| Field Label | LinkedIn Post URL |
| Placeholder | https://www.linkedin.com/posts/your-post-url... |
| Required | Yes |

**To get your form URL:**
1. Click **Test Workflow** button
2. Copy the webhook URL that appears
3. Open this URL in your browser to access the form


### Step 4: Customize Your Connection Message

Edit the spin text template in the **Generate Personalized Message** code node:

```javascript
const template = `{Thanks for|Really appreciate|Awesome to see|Loved seeing|Grateful for} {you|you taking a moment to|you recently} {liking|engaging with|reacting to|showing interest in|checking out} {my|our|the} {post|recent post|latest content piece|content|update} on {this topic|that topic|the subject}. 

{Would love to|Happy to|Let's definitely|Open to|Excited to} connect {and|so we can|to} {exchange ideas|share insights|continue the conversation|explore potential collaborations|stay connected professionally}. {Always enjoy connecting with|Always excited to meet|Love meeting|Great connecting with} {like-minded people|professionals in the space|people exploring similar topics|others in this domain}.

{Cheers|Best regards|Thanks again|Looking forward|Talk soon|Warm regards},
YourName
`;
```

**Spin Text Syntax:**
- Use `{option1|option2|option3}` for random variations
- Each request gets a unique combination
- Keep total message under 300 characters (LinkedIn limit)


### Step 5: Configure Rate Limiting

The **Wait (Rate Limiting)** node controls the delay between connection requests:

| Setting | Recommended Value | Description |
|---------|-------------------|-------------|
| Wait Time | 1-2 hours | Time between each connection request |
| Unit | Hours | Keeps your account safe from spam detection |

**Pro Tip**: Start with 2-hour delays for new accounts, reduce to 1 hour once your account is warmed up.


### Step 6: Test the Workflow

1. Click **Test Workflow** to get the form URL
2. Open the form URL in your browser
3. Paste a LinkedIn post URL with comments
4. Submit the form
5. Verify each step:
   - Comments are fetched correctly
   - Relationship check returns status
   - Messages generate with variations
   - Connection request sends successfully

**First Run Tips:**
- Start with a post that has 5-10 comments
- Test during off-hours
- Monitor closely for any errors

---

## Customization

### Message Personalization

The workflow automatically includes the commenter's name in the greeting:

```javascript
customMessage: "Hi {{ $('🔄 Loop Over Items').item.json.authorName }},\n\n{{ $json.generatedMessage }}"
```

Add more personalization by referencing the comment text:
```javascript
// Access the actual comment they left
const theirComment = $('🔄 Loop Over Items').item.json.commentText;
```

### Filter Logic

Edit the **Should Send Request?** IF node conditions:

**Current Logic (Both must be TRUE):**
- `connected` = false (not already connected)
- `invitationSent` = false (no pending request)

**Additional Filters You Can Add:**
- Filter by connection degree (2nd vs 3rd degree)
- Filter by profile completeness
- Filter by follower count

```javascript
// Example: Only connect with 2nd degree connections
$json.connectionDegree === "DISTANCE_2"
```

### Rate Limiting Adjustments

| Account Status | Recommended Delay | Daily Limit |
|----------------|-------------------|-------------|
| New Account | 2 hours | 10-12 requests |
| Warmed Up (1-2 weeks) | 1 hour | 20-24 requests |
| Established (1+ month) | 45 minutes | 30-35 requests |

---

## Use Cases

- **Content Creator Growth**: Convert every engaged follower into a connection automatically
- **Thought Leadership**: Build relationships with people who resonate with your ideas
- **Sales Prospecting**: Connect with warm leads who already showed interest in your content
- **Community Building**: Expand your network with like-minded professionals
- **Event Promotion**: Connect with commenters before launching webinars or courses
- **Recruiting**: Reach candidates who engage with your company culture posts

---

## Troubleshooting

### Common Issues & Solutions

**Issue**: ConnectSafely node not appearing after install
- **Solution**: Completely restart n8n (not just refresh). Kill the process and start again.

**Issue**: "Invalid Profile ID" error
- **Solution**: The workflow uses `publicIdentifier` (username), not the full URL. Verify the mapping is correct.

**Issue**: Connection request fails with "already connected"
- **Solution**: The relationship check should filter these out. Verify the IF node conditions are set correctly.

**Issue**: Messages appear identical
- **Solution**: Check that the spin text syntax uses `{option1|option2}` format with the pipe character, not commas.

**Issue**: Workflow stops after first person
- **Solution**: Ensure the Wait node connects back to the Loop node, and the Loop node has `Reset: FALSE` configured.

**Issue**: Form URL not appearing
- **Solution**: You must click "Test Workflow" first to generate the webhook URL.

**Issue**: Rate limiting warnings from LinkedIn
- **Solution**: Increase the wait time between requests. Start with 2-hour delays and ensure your account is warmed up.

---

## Documentation & Resources

### Official Documentation
- **ConnectSafely.ai Docs**: [https://connectsafely.ai/docs](https://connectsafely.ai/docs)
- **n8n Package Docs**: [https://connectsafely.ai/n8n-docs](https://connectsafely.ai/n8n-docs)
- **API Reference**: Available in ConnectSafely.ai dashboard

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

n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
