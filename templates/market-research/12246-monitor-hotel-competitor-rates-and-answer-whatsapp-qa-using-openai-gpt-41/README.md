# 📊 Monitor hotel competitor rates and answer WhatsApp Q&A using OpenAI GPT-4.1

> ⚡ **285 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## How It Works
***Top Branch Workflow A***

**1. The Market Intelligence:** 
- **Patrols the Market:** Runs hourly to scrape competitor rates for future days.
- **Gathers Intel:** If prices spike, it instantly checks event announcements to see if a major event is driving demand.
- **Crunches Numbers:** Calculates the exact price gap and filters out noise.

**2. The Revenue Manager:** 
- **Sets Strategy:** The AI Agent reviews the price gaps, competitor moves, and event signals.
- **Reports:** Writes a strategic Executive Summary and sends it to your WhatsApp.


***Bottom Branch Workflow B***

**3. The Consultant:** 
 - **Recall:** When you ask a question via WhatsApp, the bot retrieves the saved analysis, historical rates, and event schedule.
  - **Answer:** It acts as an on-demand analyst, conducting further analysis to give an informed answer to questions


## Setup Steps
**1. Config:** Add your hotel + competitor hotels (IDs/names) in the Config node.

**2. Monitor Window:** Set how far ahead you want to monitor (e.g., daysAhead = 30) in the Config node.

**3. Sensitivity:** Set how sensitive alerts should be (e.g., alert only if competitor moves &gt; 10%) in the Significant Competitor Change node.

**4. Connect Credentials:**

- Amadeus (to fetch hotel prices)
- WhatsApp (to send alerts)
- Postgres/SQL (to store price snapshots, history, summary)
- OpenAI (for the AI Agents)

**5. Event Source:** Update the Fetch VCC nodes to scrape your local convention center or event site.

**6. Run a test:**

Trigger Workflow A manually and confirm you receive a WhatsApp alert.

Reply to that WhatsApp message to test Workflow B (Q&A).

## Use Cases & Benefits
**For Revenue Managers:** Automate the "rate shop" routine and catch competitor moves without opening a spreadsheet.

**For Sales & Marketing Teams:** Go beyond raw data. Pairing "what changed" with "why changed" instantly.

**For Hotel Leadership:** Perfect for GMs and division leaders who need instant, decision-ready alerts via WhatsApp.

⚡ ***Zero-Touch Efficiency:*** Eliminates hours of manual searching by automating rate checks 3x daily. 
🧠 ***Contextual Intelligence:*** Tracks price AND explains why it moved by cross-referencing local events. 
🤖 ***Actionable Strategy:*** AI doesn't just report numbers; it recommends specific pricing tactics. 
📉 ***Long-Term Vision:*** Builds a permanent database of rate history, enabling the AI to answer complex trend questions over time.


![Screenshot 20260118 at 12.56.34 PM.png](fileId:4018)![Screenshot 20260118 at 12.57.01 PM.png](fileId:4019)


## 📬 Want to Customize This?
[leelin.business@gmail.com](leelin.business@gmail.com)

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, Schedule Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
