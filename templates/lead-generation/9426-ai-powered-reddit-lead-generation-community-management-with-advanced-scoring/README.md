# 🎣 AI-powered Reddit lead generation & community management with advanced scoring

> ⚡ **129 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.

## Description

Build authentic Reddit presence and generate qualified leads through AI-powered community engagement that provides genuine value without spam or promotion.

🎯 What This Workflow Does:
This intelligent n8n workflow monitors 9 targeted subreddits every 4 hours, uses AI to analyze posts for relevance and lead potential, generates authentic helpful responses that add value to discussions, posts comments automatically, and captures high-quality leads (70%+ potential score) directly into your CRM—all while maintaining full Reddit compliance and looking completely human.

✨ Key Features:

6 Daily Checks: Monitors subreddits every 4 hours for fresh content
9 Subreddit Coverage: Customizable list of target communities
AI Post Analysis: Determines relevance, intent, and lead potential
Intelligent Engagement: Only comments when you can add genuine value
Authentic Responses: AI-generated comments that sound human, not promotional
Lead Scoring: 0-1.0 scale identifies high-potential prospects (0.7+ captured)
Automatic CRM Integration: High-quality leads flow directly to Supabase
Rate Limit Protection: 60-second delays ensure Reddit API compliance
Native Reddit Integration: Official n8n Reddit node with OAuth2
Beginner-Friendly: 14+ detailed sticky notes explaining every component

🎯 Target Subreddits (Customizable):
Insurance & Claims:

r/Insurance - General insurance questions
r/ClaimAdvice - Claim filing help
r/AutoInsurance - Auto coverage discussions
r/FloodInsurance - Flood damage queries
r/PropertyInsurance - Property coverage

Property & Home:

r/homeowners - Property issues and claims
r/RoofingContractors - Roof damage discussions

Financial & Legal:

r/PersonalFinance - Insurance decisions
r/legaladvice - Legal aspects of claims

🤖 AI Analysis Components:
Post Evaluation:

Relevance score (0-100%)
User intent detection
Damage type identification (hail, water, fire, wind)
Urgency level (low/medium/high)
Lead potential score (0-1.0)
Recommended services
Engagement opportunity assessment

Decision Criteria:

Should engage? (boolean)
Can we add value? (quality check)
Is this promotional? (avoid spam)
Lead worth capturing? (70%+ threshold)

Typical Engagement Rate: 5-10% of analyzed posts (67-135 comments/day)
🔧 Technical Stack:

Trigger: Schedule (every 4 hours, 6x daily)
Reddit API: Native n8n node with OAuth2
AI Analysis: Supabase Edge Functions
Response Generation: AI-powered contextual replies
Lead Capture: Supabase CRM integration
Rate Limiting: Wait node (60-second delays)

## 🔗 Nodes Used

HTTP Request, Webhook, Reddit, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
