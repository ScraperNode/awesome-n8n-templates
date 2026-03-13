# ✨ Auto-generate social posts from GitHub README/CHANGELOG updates with GPT-4o and OAuth

> ⚡ **548 views** · ✨ [AI & LLMs](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Generate social posts from GitHub pushes to Twitter and LinkedIn
On each GitHub *push*, this workflow checks if the commit set includes **README.md** and **CHANGELOG.md**, fetches both files, lets an **LLM** generate a Twitter and LinkedIn post, then publishes to **Twitter** and **LinkedIn (Person)**.
## Apps & Nodes
* **Trigger:** Webhook
* **Logic:** IF, Merge, Aggregate
* **GitHub:** Get Repository File (×2)
* **Files:** Extract from File (text) (×2)
* **AI:** OpenAI Chat Model → LLM Chain (+ Structured Output Parser)
* **Publish:** Twitter, LinkedIn (Person)
## Prerequisites
* **GitHub:** OAuth2 or PAT with repo read.
* **OpenAI:** API key.
* **Twitter:** OAuth2 app with *Read and Write*; scopes `tweet.read tweet.write users.read offline.access`.
* **LinkedIn (Person):** OAuth2 credentials; **required scope:** `w_member_social`, `openid`.
## Setup
1. **GitHub Webhook:** Repo → *Settings → Webhooks*

   * Payload URL: `https://&lt;your-n8n-domain&gt;/webhook/github/push`
   * Content type: `application/json` • Event: *Push* • Secret (optional) • Branches as needed.
2. **Credentials:** Connect GitHub, OpenAI, Twitter, and LinkedIn (Person).
## How it Works
1. **Webhook** receives GitHub push payload.
2. **IF** checks that `README` and `CHANGELOG` appear in *added/modified*.
3. **GitHub (Get Repository File)** pulls `README.md` and `CHANGELOG.md`.
4. **Extract from File (text)** converts both binaries to text.
5. **Merge & Aggregate** combines into one item with both contents.
6. **LLM (OpenAI + Parser)** returns a JSON with `twitter` and `linkedin`.
7. **Twitter** posts the tweet.
8. **LinkedIn (Person)** posts the LinkedIn text.

## 🔗 Nodes Used

GitHub, Webhook, X (Formerly Twitter), LinkedIn, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
