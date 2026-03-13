# 🎣 Generate LinkedIn activity reports via Slack commands with GPT-4.1 and email

> ⚡ **94 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

This workflow helps Customer Success Managers and customer success professionals quickly gather intelligence on clients or prospects by analyzing their recent LinkedIn activity via a simple Slack command.

## Who's it for
CSMs, Account Managers, and Sales professionals who need fast, structured insights about a person's LinkedIn presence before a call, meeting, or outreach.

## What it does (and doesn't do)
✅ **It DOES**:
- Fetch recent LinkedIn posts from any profile
- Analyze posting frequency and cadence patterns
- Identify top themes and focus areas
- Extract recent highlights with context
- Generate a clean HTML report sent via email

❌ **It DOESN'T**:
- Access private/non-public LinkedIn content
- Provide real-time updates (it's a snapshot)
- Replace actual researches when needed

Think of it as: Your personal LinkedIn research assistant that turns a name into actionable intelligence in under a minute.

## How it works
1. **Slack command** - Type `/check-linkedin [Full Name]` in Slack
2. **Name validation** - AI verifies you provided a full name (not just "John")
3. **Profile discovery** - Finds the correct LinkedIn profile via Apify
4. **Content scraping** - Pulls their recent posts (last 20)
5. **AI analysis** - GPT-4.1 analyzes posting patterns, topics, and highlights
6. **Report generation** - Creates a formatted HTML email report
7. **Email delivery** - Sends the intelligence brief to your inbox

## Set up steps
**Setup time:** ~15 minutes

1. Create or use your existing Slack app and add a Slash Command (it can be done here https://api.slack.com/apps)
2. Configure the webhook URL in your Slack app
3. Connect credentials:
   - Slack OAuth
   - Apify API
   - OpenAI API
   - Gmail OAuth
4. Update the email recipient in "Send report via Email" node
5. Test with a known LinkedIn profile

## Requirements
- Slack workspace (with app installation permissions)
- Apify account with credits
- OpenAI API key (GPT-4.1 access)
- Gmail account
- Apify actors:
  - LinkedIn Profile Finder
  - LinkedIn Post Scraper

## Cost estimation
 ~$0.05-0.09 per profile check. You could research 11-20 people for $1.

⚠️ **Cost Disclaimer**: The costs displayed above are indicative only and may vary significantly depending on which n8n actors you select. Some actors incur monthly charges—for example, one of the two actors used in this workflow costs $35/month. So, I recommend using this actor only when there's a clear business need for it. For cost optimization, consider switching to alternative actors that can deliver similar / simpler functionality at a lower cost. If you plan to use this workflow extensively, I strongly suggest performing a budget assessment and evaluating other actor options to maximize cost efficiency.

The workflow uses GPT-4.1-mini for lightweight classification and GPT-4.1 for the heavy analysis to balance quality and cost.

## Known Limitations
Common names have limited accuracy: Very common names (e.g., "John Smith") often fail to identify the correct person accurately. An improved version could support company name in the slash command as an additional input to help narrow down results and improve first-try matching accuracy.

## 💡 Pro tips

**Check before important meetings:** Run this 15-30 minutes before a call. The email report gives you conversation starters and context about what they care about.

**Batch your research:** If you have multiple clients or prospects, queue them up. Just remember each lookup costs ~$0.05-0.09.

**Watch your Apify credits:** The LinkedIn scrapers are the main cost driver. Monitor your Apify usage if you're doing high volume.

**Don't spam the same profile:** LinkedIn may rate-limit. Space out repeat checks on the same person by at least a few hours.

**Review the "Quick Scan" section first:** The email report starts with key stats and top focus areas. Perfect for a 30-second pre-call prep.

## What to do after the workflow runs

1. **Check your email** - Report arrives in 30-90 seconds
2. **Review the report** - Latest post date, cadence, and top themes
3. **Read Recent Activity Summary** - High-level overview of their content
4. **Dive into Detailed Analysis** - Two main topics with keywords and rationale
5. **Use it strategically:**
   - Reference their recent posts in your outreach
   - Ask about topics they're clearly passionate about
   - Tailor your pitch to their demonstrated interests
   - Avoid generic "saw you on LinkedIn" messages

## Questions or Feedback?
📧 emir.belkahia@gmail.com  
💼 [linkedin.com/in/emirbelkahia](https://www.linkedin.com/in/emirbelkahia/)

## 🔗 Nodes Used

Slack, Webhook, Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
