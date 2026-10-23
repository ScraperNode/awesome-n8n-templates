# 🎬 Generate LinkedIn and Twitter posts from Telegram voice replies with GPT-5 and Google Sheets

> ⚡ **21 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## [Created by Gurey AI](https://gurey-ai.vercel.app/contact)

# Generate LinkedIn & Twitter Posts from Telegram Voice Replies with GPT-5

staying consistent with personal brand content is hard when you're running everything yourself. you know what you want to say — but turning raw thoughts into polished posts takes hours.

this workflow handles the writing. every day at 4 PM it sends you a question via Telegram based on your topic list. answer by voice or text. GPT-5 converts your raw answer into two drafts — a short punchy post and a longer detailed one — both saved to Google Sheets with status "Review." your only job: add your personal touch and publish.

---

## what this does

daily at 4 PM the workflow picks 4 random topics from your list, generates one question per topic using GPT-5, and delivers them one-by-one to your Telegram. you reply by voice note or text. voice replies are transcribed via OpenAI Whisper. GPT-5 then writes a short post (1–5 sentences) and a long post (6–10 lines) from your answer. a one-time voice interview builds your profile — who you are, your audience, your topics — stored in Google Sheets to power all future prompts. marking any post "Regenerate" triggers an automatic rewrite.

---

## who is it for

solopreneurs and creators who want to publish consistently on LinkedIn or Twitter without spending hours writing

---

Abdullahi Osman — AI Automation Engineer | [Gurey AI](https://gurey-ai.vercel.app/) — reach me at gureyai2006@gmail.com

---

## what's inside

* **Schedule Trigger** — fires daily at 4 PM, kicks off the question loop
* **Google Sheets (read/write)** — stores your profile, topic list, and generated posts
* **Topic picker** — selects 4 random topics from your list each day
* **Generate Questions** — GPT-5 writes one tailored question per topic
* **Telegram (send + trigger)** — delivers questions, receives voice/text replies
* **Voice Download + Whisper** — fetches voice files from Telegram and transcribes them
* **Short Post + Long Post agents** — GPT-5 writes two drafts from your answer
* **Save / Update nodes** — appends new posts or rewrites existing ones in Google Sheets
* **Context Collection (one-time)** — 3-question voice interview; GPT-5 mini structures your profile

---

## APIs used

* **Telegram Bot API** — question delivery + reply capture (free)
* **OpenAI Whisper** — voice transcription ($0.006/min)
* **OpenAI GPT-5 + GPT-5 mini** — questions, posts, context processing (token-based)
* **Google Sheets API** — profile storage and review queue (free)

---

## estimated cost per run

Whisper ~$0.006/min of audio — GPT-5 token costs vary — check [OpenAI pricing](https://openai.com/pricing)

---

## [Created by Gurey AI](https://gurey-ai.vercel.app/contact)
### other workflows i've built
- [**Full Email inbox managing system**](https://n8n.io/workflows/9157-ai-powered-email-triage-and-auto-response-system-with-openai-agents-and-gmail/)
- [**Client Onboarding Form**](https://n8n.io/workflows/8977-client-onboarding-with-form/)
- [**Rag AI Agent**](https://n8n.io/workflows/9050-build-a-document-qa-system-with-google-drive-pinecone-and-openai-rag/)
*more workflows coming soon — [follow along](https://gurey-ai.vercel.app/n8n-resources)*

---

### Need Help?
Email me with your questions [my email](mailto:gureyai2006@gmail.com) or ask in the [Forum](https://community.n8n.io/)!
Happy Hacking!

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
