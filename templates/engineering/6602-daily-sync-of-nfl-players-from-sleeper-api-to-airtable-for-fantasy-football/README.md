# ⚒️ Daily sync of NFL players from Sleeper API to Airtable for fantasy football

> ⚡ **383 views** · ⚒️ [Engineering](../)

## Description

# Sleeper NFL Players Sync 

This template uses the [Sleeper API](https://docs.sleeper.app/) to fetch the complete list of NFL players and stores them in an Airtable base. It’s built to run **daily** and ensures you have the most up-to-date player list for fantasy football workflows 

---

## What it Does

- Maintain a current player list for fantasy league automations for Sleeper app users / NFL fantasy football managers
- Pull Sleeper player IDs once daily instead of every request
- Build smarter workflows using Airtable as your structured dataset
- Create a subworkflow in n8n for even more Sleeper app workflows
---

## Setup Instructions

1. **Install n8n** (Cloud or self-hosted)
2. **Import the template JSON**
3. Create **Airtable Credentials**:
   - Generate an API key at [airtable.com/account](https://airtable.com/account)
   - Connect your base and table (you’ll be prompted to do this in n8n)
   - If you would like to customize how you store data please feel free to use what works best for you
4. Match your fields with the data you're storing:
   - `player_id` (text/number)
   - `full_name`
   - `position`
   - `team`
   - etc.

5. Activate your workflow 

Remember, you can customize how you trigger this workflow and where you store the data if you choose to do so.

---

## Notes

- Sleeper's player API returns 6,000+ entries, including inactive players, retired players, etc. You can **filter this down** as needed via position, status, or metadata.
- Airtable record limit on the free tier is 1,000 rows per base — consider upgrading or filtering further.
- Be careful of rate limits: both Sleeper and Airtable have them (but this workflow stays well within safe boundaries).
- The Airtable node can be replaced with other data storage nodes (Google Sheets, Excel, etc) if you prefer

---

## Difficulty Rating & Comment (from the author)

- 2 out of 10 if this ain't you're first rodeo, respectfully.
- If you use Sleeper for fantasy football, lets go win some games!

---

## 🔗 Nodes Used

Airtable, Function, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
