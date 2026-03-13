# ⚡ Track job applications and prep interviews with Notion and GPT-5-mini

> ⚡ **129 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# AI job application tracker and interview prep assistant

**Categories:** AI, Productivity, Career

Transform your job search from chaos to clarity. This workflow automatically tracks every application, researches companies, and prepares you for interviews with AI-generated materials — all saved to a visual Notion pipeline.

## Benefits

- **Never lose track of applications** — Every job gets logged automatically with status tracking
- **Walk into interviews prepared** — AI generates likely questions, talking points, and company insights
- **Save 2-3 hours per application** — Research and prep that took hours now happens in seconds
- **Automated follow-up reminders** — Get notified when it's time to send that follow-up email

## How It Works

1. **Submit application** via form (paste job URL) or forward your confirmation email
2. **AI extracts job details** — company, role, requirements, salary, location
3. **Interview prep generates** — likely questions, suggested talking points, questions to ask
4. **Everything saves to Notion** — visual pipeline with follow-up dates
5. **Daily reminders** — Slack notification for applications needing follow-up

## Required Setup

### Notion Database Structure

Create a Notion database with these properties:

| Property Name | Type | Purpose |
|---------------|------|---------|
| Company | Title | Company name |
| Role | Text | Job title |
| Status | Select | Applied, Interviewing, Offer, Rejected, Ghosted |
| Applied Date | Date | When you applied |
| Salary Range | Text | Compensation info |
| Job URL | URL | Link to posting |
| Location | Text | City/Remote |
| Interview Prep | Text | AI-generated prep materials |
| Follow Up Date | Date | When to follow up |
| Requirements | Text | Key job requirements |
| Notes | Text | Your personal notes |

### Credentials Needed

- **OpenAI API** — For job extraction and interview prep generation
- **Notion** — Connected to your job tracker database
- **Gmail** (optional) — For email forwarding and confirmations
- **Slack** (optional) — For follow-up reminders

## Use Cases

- **Active job seekers** — Track 20+ applications without spreadsheet chaos
- **Career changers** — Get AI help understanding new industry requirements
- **Recent graduates** — Build interview confidence with generated prep materials
- **Passive searchers** — Keep a running list with minimal effort

## Set Up Steps

1. **Import the workflow** into your n8n instance
2. **Create Notion database** with the structure above (or duplicate template)
3. **Connect OpenAI credentials** — API key with GPT-5 access recommended
4. **Connect Notion credentials** — Select your job tracker database
5. **Configure Gmail trigger** (optional) — Set filter for forwarded job emails
6. **Set up Slack webhook** (optional) — Choose channel for reminders
7. **Test with a sample job posting** — Paste a LinkedIn or company careers page URL

### Customization Tips

- Edit the interview prep prompt to mention your background/experience
- Adjust the follow-up reminder interval (default: 7 days)
- Add additional research sources (LinkedIn, Crunchbase) for richer company data
- Connect to calendar to block interview prep time automatically

## Technical Notes

- Uses Jina AI Reader for web scraping (free tier available)
- GPT-5-mini recommended for cost efficiency
- Notion text fields limited to 2000 characters (full prep saved)
- Daily check runs at 9 AM (configurable)

**Difficulty Level:** Intermediate  
**Estimated Setup Time:** 30-45 minutes  
**Monthly Operating Cost:** ~$2-5 (based on 50 applications/month with GPT-5-mini)

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Gmail, Notion, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
