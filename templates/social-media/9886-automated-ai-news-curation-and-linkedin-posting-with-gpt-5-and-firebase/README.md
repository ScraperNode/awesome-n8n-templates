# 📱 Automated AI news curation and LinkedIn posting with GPT-5 and Firebase

> ⚡ **835 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

What this workflow does

Automatically:
	1.	fetches fresh news,
	2.	filters out aggregators/PR wires and duplicates,
	3.	writes a human-sounding LinkedIn post with GPT,
	4.	downloads the article image to verify it’s usable,
	5.	publishes to LinkedIn (with or without media),
	6.	and logs the posted titles in Firestore to avoid re-posting.

Runs on a daily schedule (cron) and supports two post variants:
	•	Case 1: article has a description → richer post
	•	Case 2: no description → short, still human and casual

⸻

How it works (high level flow)
	•	Schedule Trigger (0 10,12,19,21 * * *): runs at 10:00, 12:00, 19:00, 21:00 (server timezone).
	•	Firestore (Get Previous News Titles): loads previously posted titles (document asma/x20) to de-dupe.
	•	HTTP Request (API NEWS): calls newsapi.org with query “AI Startup” for example, last 24–48h window, searchIn=title, sorted by publishedAt.
	•	Code: Select Articles:
	•	excludes Biztoc and common aggregators/PR wires (Techmeme, TheFly, PRNewswire, GlobeNewswire, MarketWatch press-releases, Medium, Substack, Yahoo consent, etc.),
	•	requires valid URL + image,
	•	groups by topic (normalized title + domain) and picks the best representative,
	•	sorts by recency and returns up to 10 unique articles.
	•	IF (URL & De-dupe checks): ensures link present and not already posted (compares against Firestore titles).
	•	IF (Description Checker): branches on presence of description.
	•	LLM Agents (2 prompts): generate a casual, human LinkedIn post in English (no emojis/links/markdown, 2–3 hashtags).
	•	Post setup: cleans the text, passes the image URL forward.
	•	HTTP Request (Image Downloader): retrieves the image as a file to confirm the link works.
	•	LinkedIn Publisher:
	•	If image OK → posts with media.
	•	Otherwise → posts text-only.
	•	Time Checkers + Firestore Upserts: after a successful publish, writes the article’s title to Firestore (asma/x20 fields title10, title12, title19, title21) so it won’t be posted again at other times.

⸻

Credentials & prerequisites
	•	NewsAPI.org: API key (free tier works to start; mind rate limits).
	•	LinkedIn OAuth2: connected account with permission to create posts on your profile (uses “Person” target in the node).
	•	Google Firebase (Firestore): Service Account with read/write to the asma collection. The workflow uses document ID x20.

⸻

Setup (5 minutes)
	1.	Import the workflow and open it in n8n.
	2.	In API NEWS, set your NewsAPI key in the query param apiKey.
	3.	In Get Previous News Titles and Firebase Article Saver [1–8], attach your Google Service Account and confirm projectId, collection=asma.
	4.	In LinkedIn Publisher [1–4], attach your LinkedIn OAuth credential and ensure the Person is your profile URN.
	5.	(Optional) Adjust the cron in Hourly trigger (server timezone).
	6.	(Optional) Change the search query (q=AI startup), language, or time window in API NEWS.
	7.	Enable the workflow.

⸻

Customization tips
	•	Search scope: edit q, language, from/to in API NEWS to cover your niche.
	•	Aggregator policy: tweak the aggregatorDomains set in the Select Articles code node.
	•	Post voice: modify the LLM prompt (keeps the “human, slightly messy” tone).
	•	Hashtags: the prompt ends with 2–3 simple tags (#AI #Startups #Innovation) — change as you like.
	•	Posting times: change the cron or the downstream time-checker logic to map specific titles → time slots.
	•	No-image fallback: text-only path is already handled; replace with a placeholder image if you prefer always-with-media.

⸻

Notes & constraints
	•	Timezone: Schedule Trigger uses the n8n server timezone; adjust if your LinkedIn audience is elsewhere.
	•	De-dupe: this template stores last posted titles in one Firestore doc (asma/x20) under title10, title12, title19, title21. You can change the schema or keep a rolling history.
	•	Filtering: items missing URL or image are skipped by design. Yahoo consent pages are also skipped.
	•	LLM costs: posts are short; usage is modest, but keep an eye on your OpenAI billing.
	•	NewsAPI limits: free plans throttle requests; consider caching or widening the time window if you hit limits.

⸻

Troubleshooting
	•	Nothing posts: check NewsAPI quota/response, then see the URL checker and Description Checker branches.
	•	Image errors: some sites block hotlinking; the image download step will fall back to text-only posting.
	•	Duplicates appeared: verify Firestore upserts executed after posting and that your comparison uses the right fields.
	•	Wrong hours: confirm your n8n instance timezone and the cron expression.

⸻

Why this template

You get a robust “news → LinkedIn” autoposter that feels authentically human (no corporate vibes), avoids low-quality aggregators, prevents duplicates, and gracefully handles media — all with clean, modular nodes that are easy to tweak.

## 🔗 Nodes Used

HTTP Request, LinkedIn, Google Cloud Firestore, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
