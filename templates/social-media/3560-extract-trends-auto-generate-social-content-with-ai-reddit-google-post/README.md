# 📱 Extract trends, auto-generate social content with AI, Reddit, Google & post

> ⚡ **20,461 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Extract Trends and Auto-Generate Social Media Content with OpenAI, Reddit, and Google Trends: Approve and Post to Instagram, TikTok, and More

---
## Description
### What Problem Does This Solve? 🛠️
This workflow automates **trend extraction** and **social media content creation** for businesses and marketers. It eliminates manual trend research and content generation by fetching trends, scoring them with AI, and posting tailored content to multiple platforms. **Target audience**: Social media managers, digital marketers, and businesses aiming to streamline content strategies.

### What Does It Do? 🌟
- Fetches trending topics from Reddit, X and Google Trends
- Scores trends for relevance using OpenAI.
- Generates content for Twitter/X, LinkedIn, Instagram and Facebook
- Posts to supported platforms 
- Stores results in Google Sheets for tracking

### Key Features 📋
- Real-time trend fetching from Reddit and Google Trends.
- AI-driven trend scoring and content generation (OpenAI).
- Automated posting to Twitter/X, LinkedIn, Instagram, and Facebook.
- Persistent storage in Google Sheets.
---

## Setup Instructions

### Prerequisites ⚙️
- **n8n Instance**: Self-hosted or cloud n8n instance.
- **API Credentials**:
  - **Reddit API**: Client ID and secret from Reddit.
  - **SerpApi (Google Trends)**: API key from SerpApi, stored in n8n credentials 
  - **OpenAI API**: API key with GPT model access.
  - **Twitter/X API**: OAuth 1.0a credentials with write permissions.
  - **LinkedIn API**: OAuth 2.0 credentials with `w_organization_social` scope.
  - **Instagram/Facebook API**: Meta Developer app with posting permissions.
  - **Google Sheets API**: Credentials from Google Cloud Console.

### Installation Steps 📦
1. **Import the Workflow**:
   - Copy the workflow JSON from the "Template Code" section below.
   - Import it into n8n via "Import from File" or "Import from URL".
2. **Configure Credentials**:
   - Add API credentials in n8n’s Credentials section for Reddit, SerpApi, OpenAI, Twitter/X, LinkedIn, Instagram/Facebook, and Google Sheets.
   - Assign credentials to respective nodes. For example:
     - In the `Fetch Google Trends` node (HTTP Request), use n8n credentials for SerpApi instead of hardcoding the API key.
     - Example: Set the API key in n8n credentials as `SerpApiKey` and reference it in the node’s query parameter: `api_key={{ $credentials.SerpApiKey }}`.
3. **Set Up Google Sheets** with the following columns (exact column names are case-sensitive)
 -Timestamp | Trend | Score | BrandVoice | AudienceMood |

4. **Customize Nodes**:
- **OpenAI Nodes** (`Trend Relevance Scoring`, `Generate Social Media Content`): Update the model (e.g., `gpt-4o`) and prompt as needed.
- **HTTP Request Nodes** (`Post to Twitter/X`, `Post to LinkedIn`, etc.): Verify URLs, authentication, and payloads.
- **Brand Voice/Audience Mood**: Adjust `Prepare Trend Scoring Input` for your desired `brand_voice` (e.g., "casual") and `audience_mood` (e.g., "curious").
5. **Test the Workflow**:
- `Fetch Reddit Trends` to `Store Selected Trends`- to score and store trends.
- `Retrieve Latest Trends` to end) to generate and post content
- Check Google Sheets for posting statuses
---

## How It Works

### High-Level Steps 🔍
- **Fetch Trends**: Pulls trends from Reddit,X and Google Trends.
- **Score Trends**: Uses OpenAI to score trends for relevance.
- **Generate Content**: Creates platform-specific social media content.
- **Post Content**: Posts to LinkedIn,  Facebook or X

*Detailed descriptions are available in the sticky notes within the workflow screenshot above.*

---

## Node Names and Actions

### Trend Extraction and Scoring
- `Daily Trigger Idea`: Triggers the workflow daily.
- `Set Default Inputs`: Sets default `brand_voice` and inputs.
- `Fetch Reddit Trends`: Fetches Reddit posts.
- `Extract Reddit Trends`: Extracts trends from Reddit.
- `Fetch Google Trends`: Fetches Google Trends via SerpApi.
- `Extract Google Trends2`: Processes Google Trends data.
- `Fetch Twitter Mentions`: Fetches Twitter mentions.
- `Translate Tweets to English`: Translates tweets.
- `Fix Tweet Translation Output`: Fixes translation format.
- `Detect Audience Mood`: Detects audience mood.
- `Fix Audience Mood Output`: Fixes mood output format.
- `Analyze News Sentiment`: Analyzes news sentiment.
- `Combine Data (Merge)`: Merges all data sources.
- `Merge Items into Single Item`: Combines data into one item.
- `Combine Trends and UGC`: Combines trends with UGC.
- `Prepare Trend Scoring Input`: Prepares data for scoring.
- `Trend Relevance Scoring`: Scores trends with OpenAI.
- `Parse Trend Scores`: Parses scoring output.
- `Store Selected Trends`: Stores trends in Google Sheets.

### Content Generation and Posting
- `Retrieve Latest Trends`: Retrieves trends from Google Sheets.
- `Parse Retrieved Trends`: Parses retrieved trends.
- `Select Top Trends`: Selects the top trend.
- `Generate Social Media Content`: Generates platform-specific content.
- `Parse Social Media Content`: Parses generated content.
- `Generate Images`: Generates images for posts (if applicable).
-`Handle Approvals/Rejection before Posting`
- `Post to Instagram`: Posts to Instagram.
- `Post to Facebook`: Posts to Facebook.
- `Post to LinkedIn`: Posts to LinkedIn.


---

## Customization Tips

- **Add Trend Sources** 📡: Include more sources (e.g., Instagram trends) by adding nodes to `Combine Data (Merge)`.
- **Change Content Tone** ✍️: Update the `Generate Social Media Content` prompt for a different tone (e.g., "humorous").
- **Adjust Schedule** ⏰: Modify `Daily Trigger Idea` to run hourly or weekly.
- **Automate TikTok/YouTube** 🎥: Add video generation (e.g., FFMPEG) to post TikTok and YouTube Shorts

---

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Facebook Graph API, Gmail, LinkedIn

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
