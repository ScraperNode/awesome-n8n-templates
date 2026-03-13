# 🎣 LinkedIn lead generation with GPT-4o, Apify scraping, and automated outreach

> ⚡ **2,645 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# 🚀 LinkedIn Lead-Gen Flywheel – Apify → GPT-4o → Google Sheets → Phantombuster

### What this workflow does
1. **Collect audience specs** – simple web-form asks for your ideal company profile.
2. **Generate a laser-targeted Apollo search URL** with GPT-4o (no manual filtering).
3. **Scrape the matching leads** via an Apify actor (returns clean JSON).
4. **Craft hyper-personalized icebreakers** for each lead using GPT-4o (ultra-short, human-sounding).
5. **Log everything to Google Sheets** – name, LinkedIn URL, company site, summary, and the icebreaker.
6. **(Optional) Auto-launch Phantombuster** to fire off those connection requests at scale.

### Why it matters
- **Zero grunt work:** audience research, scraping, copy-writing, and outreach all run hands-free.  
- **Punchy personalization:** micro-icebreakers outperform canned intros, boosting accept rates.  
- **Scales with you:** flip a switch to go from 10 to 1 000+ connections/day.

### Node rundown
| Step | Node | Key Inputs | Key Outputs |
|------|------|-----------|-------------|
| 1 | **Form Trigger** | Audience description | `description_of_company` |
| 2 | **OpenAI (GPT-4o)** | Audience text | `SearchUrl` |
| 3 | **HTTP Request – Apify** | `SearchUrl`, `APIFY_TOKEN` | Lead JSON |
| 4 | **OpenAI (GPT-4o)** | Lead JSON | `Icebreaker` |
| 5 | **Google Sheets** | Lead + Icebreaker | Row append/update |
| 6 | **Aggregate** | Sheet rows | Batched output |
| 7 | **HTTP Request – Phantombuster** | `PHANTOM_KEY`, `AGENT_ID` | Launch status |

### Prerequisites
- **OpenAI API key** (GPT-4o access recommended)  
- **Apify API token** with access to actor id  
- **Google Service Account creds** shared with your target sheet  
- **Phantombuster API key** and Agent ID for your LinkedIn connector  
- Active **Apollo account** to open the generated search URL (only required for debugging)

### Setup (5-minute sprint)
1. Import the workflow into n8n.  
2. Add the required credentials in *Credentials* → **OpenAI**, **Apify**, **Google Sheets**, **Phantombuster**.  
3. Paste your Phantombuster **Agent ID** into the HTTP Request node URL.  
4. Publish the Form Trigger URL—this is where you (or your SDRs) describe the target audience.  
5. Hit **Execute Workflow** once to verify data flows end-to-end.

### Customization tips
- **Titles & keywords:** tweak the prompt in the first GPT-4o node to lock in different roles or industries.  
- **Icebreaker style:** adjust the second GPT-4o prompt to match your brand voice.  
- **Data columns:** map extra fields from Apify into Google Sheets as needed.  
- **Skip outreach:** disable the Phantombuster node if you only want the leads + icebreakers.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
