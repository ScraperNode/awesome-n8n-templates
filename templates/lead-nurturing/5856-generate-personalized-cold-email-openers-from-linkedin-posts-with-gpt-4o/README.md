# 💬 Generate personalized cold email openers from LinkedIn posts with GPT-4o

> ⚡ **5,889 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

Turn any LinkedIn post into a personalized cold email opener that sounds like a human wrote it in seconds.

Whether you're in sales, partnerships, or outreach, this tool reads LinkedIn posts like a human, distills the core message, and gives you a smart, conversational opener to kick off the relationship the right way.

**How It Works:**

1.) Paste the post + author info into a short form.

2.) AI reads the post like a B2B sales expert would.

3.) Output = personalized opener, company name, prospect’s name, and next steps.

4.) Copy-paste into your cold email and hit send.

The opener isn’t generic fluff — it references real details, sounds natural, and shows you actually paid attention.

**Perfect For:**

SDRs and BDRs

Agency outreach

Partnership prospecting

Any cold outreach that starts with a real conversation

**Setup Steps**

*Setup time: ~2-3 mins*

1.) Add your OpenAI credentials (or use n8n’s built-in credits).

2.) Open the form and test it with the sample post.

3.) Tweak the AI prompt if you want to target a different niche or tone.

(Optional) Connect to Google Sheets, a CRM, or your email tool.

You're live.

## 🔗 Nodes Used

n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
