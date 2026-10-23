# 🎣 Send personalized LinkedIn invitations with OpenAI, Slack and HeyReagent

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow searches for LinkedIn profiles by keywords and location using the HeyReagent API, then sends a connection invitation with a custom note to each returned person, spacing requests to reduce rate pressure.

## How it works
1. Runs when you manually execute the workflow in n8n.
2. Sets the LinkedIn search keywords, target location, maximum number of people to return, and the connection note text.
3. Calls HeyReagent’s `search_people` endpoint to retrieve matching LinkedIn profiles.
4. Splits the returned `people` list into individual items so each person is processed separately.
5. Calls HeyReagent’s `send_invitation` endpoint for each profile URL, sending one invitation about every 4 seconds and continuing even if an API call returns an error.

## Setup
1. Create a HeyReagent account, connect your LinkedIn account, and generate a HeyReagent API key in the HeyReagent Developers section.
2. In n8n, create an HTTP Bearer Auth credential with your HeyReagent API key and select it in both HeyReagent HTTP Request steps.
3. Update the keywords, location, invitation limit, and note text in the workflow’s input step before executing.

## Requirements
- A HeyReagent account (there is a free plan) with your own LinkedIn account connected
- A HeyReagent key, saved in n8n as a Bearer Auth credential
- For a scheduled run: the Connect plan, which keeps LinkedIn connected (on the free plan it is disconnected after a while without use)

## Customization
- Change the search words, the place, the number of people (up to 10) and the note in the Who to look for node
- Call any other HeyReagent action the same way from the HTTP Request nodes: https://heyreagent.com/docs

## Additional info
Each LinkedIn account has daily limits (30 invitations a day, 20 on a free LinkedIn account). A call past a limit answers ok: false with the time it resets, and the workflow carries on. HeyReagent is not affiliated with LinkedIn. LinkedIn's User Agreement does not allow automated activity and it can restrict an account, so keep the numbers small.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
