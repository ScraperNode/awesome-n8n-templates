# 🎬 Generate portfolio screenshots and Upwork copy with Firecrawl, ScreenshotOne, OpenAI and Google Workspace

> ⚡ **10 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# AI Portfolio Generator for Freelancers

Automatically transform any website URL into a complete portfolio entry with professional screenshots and AI-generated Upwork project descriptions.

## 🎯 Perfect For

- **Freelancers** building their Upwork/portfolio from past projects
- **Agencies** documenting client work at scale
- **Web developers** showcasing their websites professionally
- **Anyone** who needs consistent, high-quality website screenshots

## ✨ What It Does

1. **Submit a URL** via simple web form
2. **AI analyzes** the website (structure, niche, audience, services)
3. **Smart screenshots** capture hero, fullpage, individual sections, and mobile views
4. **AI writes** compelling Upwork portfolio description with title, role, and skills
5. **Auto-saves** everything to Google Drive + Sheets + sends Telegram notification

## 🔥 Key Features

- **JavaScript Rendering** — Works with React, Vue, Next.js, and any SPA (via Firecrawl)
- **Intelligent Section Detection** — AI identifies real content sections, not utility elements
- **Multiple Screenshot Types** — Hero (1920×1080), fullpage, custom sections, mobile (375×812)
- **Retina Quality** — 2x device scale factor for crisp images
- **Smart Error Handling** — Retries failed screenshots, filters invalid results
- **Rate Limit Protection** — Built-in delays to respect API limits
- **Complete Logging** — Every run logged to Google Sheets with all metadata

## 📸 Screenshots Captured

| Type | Resolution | Description |
|------|------------|-------------|
| Hero | 1920×1080 @2x | Above-the-fold view |
| Fullpage | 1920×auto @2x | Entire scrollable page |
| Sections | 1920×1080 @2x | Each detected content section |
| Mobile | 375×812 @2x | iPhone-style mobile view |

## 🤖 AI-Generated Upwork Content

- **Project Title** (max 50 chars)
- **Your Role** (e.g., "Full-Stack Developer", "Lead Designer")
- **Project Description** (goals, solution, impact — max 600 chars)
- **Skills** (5 relevant technical skills)

## 🔧 Services Used

| Service | Purpose | Free Tier |
|---------|---------|-----------|
| [Firecrawl](https://firecrawl.dev) | JavaScript rendering | ✅ 500 pages/month |
| [ScreenshotOne](https://screenshotone.com) | Screenshot API | ✅ 100 screenshots/month |
| [OpenAI](https://openai.com) | GPT-4o-mini analysis | Pay-as-you-go |
| Google Drive | Image storage | ✅ 15GB free |
| Google Sheets | Results logging | ✅ Free |
| Telegram | Notifications | ✅ Free |

## 📋 Setup Checklist

1. ✅ Import workflow
2. ✅ Add Firecrawl API key
3. ✅ Add ScreenshotOne API key  
4. ✅ Connect OpenAI credentials
5. ✅ Connect Google Drive (+ set your folder)
6. ✅ Connect Google Sheets (+ set your spreadsheet)
7. ✅ Set up Telegram bot + chat ID
8. ✅ Activate & share the form URL!

## 💡 Pro Tips

- **Test with simple sites first** before complex SPAs
- **Increase delay** in Wait node if hitting rate limits
- **Change AI model** to `gpt-4o` for better analysis quality
- **All instructions included** as Sticky Notes inside the workflow!

## 📊 Output Example

After processing `example.com`:
- 📁 5 PNG screenshots in Google Drive
- 📊 Full analysis row in Google Sheets
- 📱 Telegram message with all links and AI-generated Upwork content

---

**Built for freelancers, by a freelancer.** Stop wasting hours on manual portfolio creation — let AI do the heavy lifting! 🚀

#portfolio, #screenshots, #upwork, #freelancer, #ai, #gpt, #automation, #firecrawl, #screenshotone, #google-drive, #google-sheets, #telegram, #website-analysis, #form-trigger

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Google Drive, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
