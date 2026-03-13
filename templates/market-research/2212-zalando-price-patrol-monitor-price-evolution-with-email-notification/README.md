# 📊 Zalando price patrol: Monitor price evolution with email notification

> ⚡ **4,162 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**🎉 Do you want to master AI automation, so you can save time and build cool stuff?** 

I’ve created a welcoming Skool community for non-technical yet resourceful learners.

**👉🏻 [Join the AI Atelier](https://www.skool.com/the-ai-atelier-3311/about) 👈🏻**

---

Monitor Zalando product pricing and get notified if a Zalando product price falls under a limit you have defined.

This n8n workflow lets you follow the evolution of the price of products you select. For each product, you define a minimal price.

The workflow automatically scrapes the price for you on a daily basis. If the price falls under your minimal price settings, you receive a notification.

This workflow is very easy to use. From a simple form, just paste the URL of the Zalando product you want to monitor and fill in the minimal price.

## Features
- Monitor Zalando Product price: follow the price evolution of your favorite Zalando products.
- Email notification: set a minimal price, if the product price falls below this limit, you get notified by email.
- Visual price evolution: get a graphical overview of the product pricing evolutions.
- Automated Daily check-up: this workflow automatically checks the price of your selected Zalando products on a daily basis.

## Set up
- Copy this workflow to your n8n interface.
- Create a new Google Spreadsheet, [copy this template](https://docs.google.com/spreadsheets/d/1sM66Rk10ZOhQKbawVB-xZ2WYhBeSr6wnJqvX6Aspbkg/edit?usp=sharing)
- Setup your workflow with your Google credential, your email, and your copy of the Spreadsheet.
- Activate the Workflow and start pasting Zalando product URLs.

I hope you will enjoy this workflow that is probably one of the simplest ways to monitor the pricing evolution of your favorite Zalando products.

Feel free to contact me should you have any questions or suggestions.

**Created by the [n8n.inja](https://www.n8n.ninja/)**
[✨ follow on X](https://twitter.com/n8n_ninja)
[📺 follow on YT](https://www.youtube.com/@n8ninja)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
