# 📊 Compare product prices on Amazon and Jumia with Decodo, OpenAI and Telegram

> ⚡ **81 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## What Problem Does It Solve?
- We’ve all been there: you want to check if a product is cheaper on Amazon or Jumia, but opening a dozen tabs is a pain.
- Building a bot to do this usually fails because big e-commerce sites love to block scrapers with CAPTCHAs.
- This workflow fixes that headache by:
  - Taking a product name from a chat message.
  - Using **Decodo** to handle the hard part—searching Google and scraping the product pages without getting blocked.
  - Using AI to read the messy HTML and pull out just the price and product name.
  - Sending a clean "Best Price" summary back to the user instantly.

## How to Configure It
### Telegram Setup
- Create a bot with BotFather and paste your token into the Telegram node.
- Make sure your webhook is set up so the bot actually "hears" the messages.

### Decodo 
- This is the engine that makes the workflow reliable.
- You'll need to add your **Decodo API key** in the credentials.
- We used Decodo here specifically because it handles the proxies and browser fingerprinting for you—so your Amazon requests actually go through instead of failing.

### AI Setup
- Plug in your OpenAI API key (or swap the node for Claude/Gemini if you prefer).
- The system prompt is already set up to ignore ads and find the real price, but feel free to tweak the tone.

## How It Works
1. **Trigger:** You text the bot a product name (e.g., "Sony XM5").
2. **Search:** The workflow asks **Decodo** to Google that specific term on sites like Amazon.eg.
3. **Scrape:** It grabs the URLs and passes them back to Decodo to fetch the page content safely.
4. **Extract:** The AI reads through the text, finds the lowest price, and ignores the clutter.
5. **Reply:** The bot texts you back with the best deal found.

## Customization Ideas
- **Go wider:** Edit the search query to check other stores like Noon or Carrefour.
- **Track trends:** Connect a Google Sheet to log what people are searching for—great for market research.

If you need any help [Get In Touch](https://www.linkedin.com/in/abdallaelshikh0/)

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
