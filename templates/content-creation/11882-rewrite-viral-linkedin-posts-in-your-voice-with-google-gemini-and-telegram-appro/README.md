# 🎬 Rewrite viral LinkedIn posts in your voice with Google Gemini and Telegram approval

> ⚡ **458 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# Rewrite viral LinkedIn posts in your voice with AI and Telegram approval using Google Gemini

## Who's it for

This workflow is designed for LinkedIn creators, personal brand builders, thought leaders, and content marketers who want to consistently create engaging content without starting from scratch. Perfect for professionals who admire viral posts from others but want to adapt those ideas to their own unique voice and style.

If you're struggling to maintain a consistent posting schedule, looking for content inspiration, or want to repurpose trending ideas while keeping your authentic voice, this automation handles the creative heavy lifting while giving you full control over what gets published.

## How it works

The workflow transforms viral LinkedIn posts into personalized content that matches your writing style, complete with AI-generated images, all controlled through Telegram.

**The process flow:**
1. Send any LinkedIn post URL to your Telegram bot
2. Security check validates your Telegram user ID
3. ConnectSafely.ai scrapes the original post content and engagement metrics
4. Your custom persona profile is loaded (tone, phrases, formatting preferences)
5. Google Gemini AI rewrites the post to match YOUR voice
6. Gemini generates a professional, on-brand image for the post
7. Preview is sent to Telegram for your review
8. Approve or reject with a simple reply
9. On approval, the post goes live on LinkedIn automatically

---

## Setup steps

### Step 1: Create a Telegram Bot

1. Open Telegram and search for **@BotFather**
2. Send `/newbot` and follow the prompts to create your bot
3. Save the **API token** provided by BotFather
4. Get your Telegram User ID by messaging **@userinfobot**

### Step 2: Configure Telegram Credentials in n8n

1. Go to **Credentials** → **Add Credential** → **Telegram API**
2. Paste your bot token from BotFather
3. Save the credential
4. Update all Telegram nodes to use this credential

### Step 3: Set Up Security Check

1. Open the **🔒 Security Check** node
2. Replace `YOUR_TELEGRAM_USER_ID` with your actual Telegram user ID
3. This ensures only YOU can trigger the workflow

### Step 4: Configure ConnectSafely.ai API

1. Sign up at [ConnectSafely.ai](https://connectsafely.ai)
2. Navigate to **Settings** → **API Keys** in your dashboard
3. Generate a new API key
4. In n8n, go to **Credentials** → **Add Credential** → **ConnectSafely API**
5. Paste your API key and save
6. Connect this credential to the **🔍 Scrape LinkedIn Post** node

### Step 5: Configure Google Gemini API

1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Create or select a project
3. Generate an API key
4. In n8n, go to **Credentials** → **Add Credential** → **Google Gemini (PaLM) API**
5. Paste your API key and save
6. Connect this credential to both:
   - **Google Gemini Chat Model** node
   - **Generate an image** node

### Step 6: Connect Your LinkedIn Account

1. In n8n, go to **Credentials** → **Add Credential** → **LinkedIn OAuth2 API**
2. Follow the OAuth flow to connect your LinkedIn account
3. Connect this credential to the **Create LinkedIn Post** node
4. Update the `person` parameter with your LinkedIn Person ID (URN)

### Step 7: Customize Your Persona

1. Open the **👤 Load Your Persona** node
2. Edit the `PERSONA` object to match YOUR writing style:
   - Update `name` with your name
   - Modify `expertiseAreas` with your topics
   - Adjust `commonPhrases` with phrases you actually use
   - Set `preferredEmojis` to your favorites
   - Customize `styleNotes` to capture your unique voice

### Step 8: Activate the Workflow

1. Save your workflow
2. Toggle the workflow to **Active**
3. Your Telegram bot is now ready to receive LinkedIn URLs

---

## Customization

### Persona Customization

The **👤 Load Your Persona** node is where you define your unique voice. Key areas to customize:

| Field | Description | Example |
|-------|-------------|---------|
| `tone` | Overall communication style | "Professional yet approachable, data-driven" |
| `voice` | Perspective and personality | "First-person, authentic, vulnerable" |
| `formatting` | Structure preferences | "Short paragraphs, emoji bullets, line breaks" |
| `hooks` | Opening style | "Start with contrarian takes or personal stories" |
| `expertiseAreas` | Your niche topics | ["SaaS growth", "Leadership", "Remote work"] |
| `commonPhrases` | Signature expressions | ["Here's the truth:", "I learned this the hard way:"] |

### Image Generation

The **📝 Create Image Prompt** node generates the image prompt. Modify the style parameters to match your brand:

- **Current style**: Modern, clean, corporate, vector art
- **Customize**: Change to photography, illustrations, or abstract visuals

### Post Length

In the persona configuration, adjust `postLength`:
- `"short"` - Quick insights (under 500 characters)
- `"medium"` - Standard posts (500-1500 characters)
- `"long"` - Deep dives (1500-3000 characters)

### AI Model Selection

The workflow uses `gemini-2.5-pro` for text. You can switch to other models in the **Google Gemini Chat Model** node based on your needs.

---

## Requirements

| Requirement | Details |
|-------------|---------|
| **n8n Version** | 1.0+ recommended |
| **Telegram Bot** | Created via @BotFather |
| **ConnectSafely.ai Account** | API key required |
| **Google AI Studio Account** | Gemini API key required |
| **LinkedIn Account** | OAuth2 connected in n8n |
| **Community Node** | `n8n-nodes-connectsafely-ai` (self-hosted only) |

⚠️ **Note**: This workflow uses the ConnectSafely community node, which requires a self-hosted n8n instance.

---

## Use cases

- **Content Repurposing**: Transform competitor or industry leader posts into your own perspective
- **Consistent Posting**: Maintain a regular posting schedule without content creation burnout
- **Style Consistency**: Ensure every post matches your established personal brand
- **Trend Riding**: Quickly create content around viral topics while they're still relevant
- **A/B Testing**: Test different approaches by approving or rejecting variations

---

## Troubleshooting

### Common Issues & Solutions

**Issue**: Bot not responding to messages
- **Solution**: Verify the Telegram webhook is active; check the Telegram Trigger node is properly configured

**Issue**: "Profile not found" from ConnectSafely.ai
- **Solution**: Ensure the LinkedIn URL is complete and public. Some posts on private profiles can't be scraped

**Issue**: Image generation fails
- **Solution**: Verify your Gemini API key has access to image generation models. Check quota limits in Google AI Studio

**Issue**: LinkedIn post fails to publish
- **Solution**: Confirm your LinkedIn OAuth2 credentials are valid and haven't expired. Re-authorize if needed

**Issue**: AI generates posts that don't match your style
- **Solution**: Be more specific in your persona configuration. Add more example phrases and detailed style notes

**Issue**: Security check blocks your messages
- **Solution**: Double-check your Telegram User ID is correctly entered (must be a number, not username)

---

## Documentation & Resources

### Official Documentation
- **ConnectSafely.ai Docs**: [https://connectsafely.ai/docs](https://connectsafely.ai/docs)
- **Google Gemini API**: [https://ai.google.dev/docs](https://ai.google.dev/docs)
- **Telegram Bot API**: [https://core.telegram.org/bots/api](https://core.telegram.org/bots/api)
- **LinkedIn API**: [https://docs.microsoft.com/linkedin/](https://docs.microsoft.com/linkedin/)

### Support
- **ConnectSafely Support**: [support@connectsafely.ai](mailto:support@connectsafely.ai)
- **n8n Community**: [https://community.n8n.io](https://community.n8n.io)

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

Telegram, Telegram Trigger, LinkedIn, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
