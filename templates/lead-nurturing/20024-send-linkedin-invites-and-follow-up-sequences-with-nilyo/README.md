# 💬 Send LinkedIn invites and follow-up sequences with Nilyo

> ⚡ **3 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily to invite people from a LinkedIn search and then send an opening message plus follow-ups using the Nilyo API, stopping sequences when someone replies and spacing messages over time.

## How it works
1. Runs on a daily schedule (or manually for testing) and loads configuration like the LinkedIn search source, invitation caps, message templates, delays, and dry-run mode.
2. Uses Nilyo to list already-sent LinkedIn invitations, then calls the selected LinkedIn search (URL, saved search, or JSON parameters) to fetch people results.
3. Filters out duplicates, first-degree/self connections, and profiles with pending invitations, caps the list to the daily limit, and optionally sends invitations one at a time with a configurable pause.
4. Interprets invitation responses from Nilyo to skip uninvitable profiles and stop the day’s run when LinkedIn rate limits or quota errors occur.
5. Uses Nilyo to list your recent LinkedIn connections and keeps only those accepted within the configured sequence window.
6. For each recent connection, uses Nilyo to find and read the LinkedIn conversation, stops the sequence if the contact has replied, otherwise selects the next message (opening or follow-up) based on what you already sent and the required days-between-messages delay.
7. If not in dry-run mode, sends the selected message via Nilyo either into the existing chat or by starting a new conversation, then continues to the next person.

## Setup
1. Install and enable the verified community node `n8n-nodes-nilyo` (and allow verified community nodes on n8n Cloud if needed).
2. Create a Nilyo API credential in n8n using your Nilyo personal token and ensure your Nilyo account is connected to LinkedIn.
3. Edit the Settings node to choose the source (search URL, saved search ID, or JSON parameters), set daily invitation limits and pauses, and customize the invitation note, opening message, follow-ups, and spacing.
4. Keep `dry_run` enabled and run the workflow manually to review the shortlisted invites and planned messages, then disable `dry_run` before activating the daily schedule.

## 🔗 Nodes Used

Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
