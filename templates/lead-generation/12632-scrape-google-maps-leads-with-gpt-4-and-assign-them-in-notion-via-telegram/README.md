# 🎣 Scrape Google Maps leads with GPT-4 and assign them in Notion via Telegram

> ⚡ **45 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

Meet your automated Lead Gen Specialist. This workflow streamlines cold outreach by scraping local businesses, qualifying them with AI, and delivering them to your sales team instantly via an interactive Telegram bot.

It solves the "empty pipeline" problem by fetching fresh leads from Google Maps, checking for duplicates in your Notion CRM, and letting agents "claim" leads with a single click.

💡 **Why use this?**
* **Automated Sourcing:** Stop manual copy-pasting. It fetches verified business data (Phone, Reviews, Website) directly from Google Maps via Outscraper.
* **Smart Deduplication:** It checks your Notion database first to ensure you never accidentally pitch the same business twice.
* **AI "Icebreakers":** GPT-4 analyzes the reviews to find specific pain points (e.g., "Slow service" -&gt; "Pitch QR Menu"), giving your agents a warm opening line.
* **One-Click Assignment:** Leads are sent to a Telegram group. Agents simply click **"⚡️ Take Lead"**, and the system automatically assigns the deal to them in Notion and updates the chat.

⚙️ **How it works**
1.  **Fetch:** Takes your query (e.g., "Sushi in London") and gets data via Outscraper.
2.  **Filter:** Checks if the phone number already exists in your `Active Deals` database.
3.  **Analyze:** AI reads the reviews and writes a personalized sales argument.
4.  **Notify:** Sends a formatted card to the Telegram group.
5.  **Assign (Loop):** Listens for the button click, identifies the agent via their Telegram ID, updates the CRM, and locks the lead.

🛠 **Setup Steps**
This workflow works best with the "AI Sales Coach" Notion system.

1.  **Get the Notion System:**
    * [Click here to duplicate the Notion Template](https://n8n.notion.site/n8n-Creator-hub-7bd2cbe0fce0449198ecb23ff4a2f76f)
    * Add your team to the **"Agents Configuration"** database (map Telegram IDs to Notion Users).
2.  **Connect Databases:**
    * In the Notion nodes (`Search Duplicate`, `Create New Lead`, `Assign Lead`), select your duplicated **Active Deals** database.
    * In the `Find Agent` node, select your **Agents Configuration** database.
3.  **Configure Settings:**
    * Open the `📝 CONFIGURATION` node.
    * Add your **Outscraper API Key**.
    * Set your **Telegram Chat ID** (where leads should be posted).
    * Customize the **AI_TONE** and **MY_SERVICES** to fit your product.
4.  **Connect Accounts:**
    * Add credentials for Notion, OpenAI, Telegram, and Outscraper.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Notion, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
