# 🤝 Route and audit Odoo draft orders with GPT‑4o and Arabic semantic scheduling

> ⚡ **132 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## What it is
Manual order entry in retail and e-commerce often results in fragmented data. Sales representatives might skip mandatory address fields or write critical delivery instructions in unstructured, regional slang inside the POS notes. 

This workflow acts as an automated QA Auditor and Logistics Dispatcher. It polls Odoo for new draft orders and uses an OpenAI LLM (gpt-4o-mini) to semantically analyze the payload. The AI intelligently distinguishes between automated website orders (which are fast-tracked) and manual POS orders. For manual orders, it audits data completeness, extracts marketing sources (Meta, TikTok), and crucially, parses Egyptian Arabic slang in the customer notes to dynamically schedule Odoo follow-up activities with calculated due dates. Finally, it routes the payload to either update the database, schedule activities, or dispatch actionable WhatsApp alerts to the specific sales rep to fix missing data.

## How it works
1. **Payload Consolidation:** A schedule trigger queries Odoo for recent, unaudited draft orders. It fetches related customer profiles and POS notes, merging them iteratively into a singular, comprehensive JSON structure.
2. **Semantic Analysis:** The AI Agent evaluates the consolidated payload against strict business logic. It flags missing mandatory fields (phone, street, city) and interprets regional Arabic text (e.g., "تأجيل ليوم التلات") to output scheduling booleans and exact dates.
3. **Conditional Matrix:** A Switch node routes the execution based on the AI's output array:
   - *Update and Alert:* Updates UTM sources in Odoo, fetches the sales rep's profile, and triggers an Evolution API WhatsApp message listing exactly what data is missing, complete with a direct URL to the Odoo record.
   - *Update Only:* Updates UTM sources. If the AI detected a future delivery date, it triggers an Odoo `mail.activity` node to schedule a follow-up task on the exact calculated deadline.
   - *Alert Only:* Dispatches the WhatsApp alert immediately if no source mapping is needed.
   - *Nothing:* Marks the order as cleanly processed.

## How to set up
1. Link your native Odoo API and OpenAI credentials.
2. Inside the "WhatsApp Alert" HTTP node, replace the placeholder URL with your live Evolution API instance, and inject your private API token in the Header parameters.
3. Modify the Odoo base URL inside the JavaScript code of the WhatsApp Alert node to ensure the dynamic links point to your actual production environment.

## How to customize
* The OpenAI System Prompt contains specific rules for Egyptian Arabic slang. Adjust the prompt arrays to match your specific region's dialect or your company's operational abbreviations.
* Reconfigure the `mail.activity` Odoo node to assign the scheduled tasks to a dedicated customer service team rather than the original sales representative.

## Need Help?
For setup assistance, advanced LLM prompting, or custom ERP optimizations, feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/khaledyasser01/).

## 🔗 Nodes Used

HTTP Request, Odoo, Schedule Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
