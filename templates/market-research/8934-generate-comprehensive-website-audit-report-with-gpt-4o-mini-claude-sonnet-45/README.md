# 📊 Generate comprehensive website audit report with GPT-4o-mini & Claude Sonnet 4.5

> ⚡ **1,581 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# 🌐 Webpage Audit AI Agent – Automate Your Website Review

This workflow contains a **virtual digital consultant team** to professionally analyze Landing Page, generate Audit Report and sent it via Gmail.

At the center is the **Editor-in-Chief AI Agent**, who acts as the lead strategist.  
When you submit a website URL, it is scraped and then sent to to a team of specialist AI Agents (each powered by **GPT-4o-mini** for speed) then after finishing their sub-porcess deliver outcome to the final Editor (**Claude Sonnet** for premium quality) which is responsible for generating professional analysis.

The result: a **consulting-style email audit report** that combines technical accuracy with business clarity — delivered straight to your inbox.

---

## 🟢 Section 1 – Entry & Leadership

**Nodes:**

- 🌍 **Webhook node** → Entry point where the website URL, email and language is entered. 
- 📝 **Editor-in-Chief Agent** → Acts like the consulting team leader. Interprets the request and merges results.  
- 💡 **Think Tool** → Helps structure the analysis, ensuring that findings are presented in a business-friendly way.  
- 🧠 **CRO/SEO/Tech/Semantic AI Agents** → Ensures both efficiency (GPT-4o-mini for scanning large content quickly) and focus on specific task.  

✅ **Beginner view:** Think of this as submitting your website to a digital auditors. They decide what needs to be reviewed from each perspective, delegate to the right experts, and then together - as an AI Agents team - craft the final report.

---

## 📊 Section 2 – Specialist Audit AI Agents

Each specialist focuses on one critical layer of your website:

- 🔧 **Technical SEO Agent** → Analyzes code structure, page speed, mobile responsiveness, metadata, and accessibility.  
- 📝 **Content SEO Agent** → Reviews keyword strategy, text quality, readability, and semantic richness.  
- 🎯 **CRO & UX Agent** → Checks calls-to-action, user flows, conversion points, and usability.  
- 🤖 **Semantic Agent** → Checks if AI Agents aligns with semantic flows, marketing problems and risks.  
- 📈 **Analytics Agent** → Validates tracking, funnels, and key performance indicators (optional).  

✅ **Beginner view:** This is like hiring a team of experts — SEO, content, UX, and analytics — all working in parallel on your website.

---

## 📋 Section 3 – Flow of Execution

1. You submit your website URL.  
2. Then it is distributed to the team of AI Agents.  
3. Each Agent runs its analysis in parallel.  
4. Findings are sent to the **Editor-in-Chief.**
5. The Editor compiles everything into a **consulting-style newsletter report**.  
6. The final report is emailed to you automatically.  

✅ **Beginner view:** It’s like sending your site to a consulting firm, and within minutes you get a polished audit back in your inbox.

---

## 📊 Summary Table

| Section               | Key Roles                       | Models                     | Purpose                      | Beginner Benefit                          |
|-----------------------|---------------------------------|----------------------------|------------------------------|-------------------------------------------|
| 🟢 Entry & Leadership | Editor-in-Chief, Think Tool     | Anthropic Claude Sonnet 4| Organize and refine analysis | Works like a consulting team leader        |
| 📊 Specialists        | SEO, Content, CRO, Semantic, Analytics    | GPT-4o-mini                | Detailed audits of each area | Each Agent = a specialized consultant      |
| 📋 Execution Flow     | All connected                   | n8n workflow               | Collaboration and reporting  | Output = clear, professional audit email   |

---

## 🌟 Why This Workflow Rocks

- **Full digital consulting team in one workflow**  
- **Parallel execution → speed without losing depth**  
- **Strategic + tactical insights → both “what” and “how”**  
- **Cost-optimized** ($0.40–$0.80 per run) → cheaper than a single human consultant review  
- **Action-oriented output** → not just issues, but recommendations and next steps  
- **Scalable** → easily extend with more audit dimensions (security, branding, accessibility, etc.)  

---

## 👉 Example Use Case

“Analyze my e-commerce site for SEO, CRO, technical and semantic issues.”

1. **Technical SEO Agent** → Reports missing alt text, metadata, and slow mobile speed.  
2. **Content SEO Agent** → Flags weak product descriptions, suggests keyword improvements.  
3. **CRO Agent** → Finds unclear CTAs and checkout friction points. 
4. **Semantic Agent** → Finds everything to improve searching by AI Agents.
5. **Editor-in-Chief Agent** → Combines everything into a consulting-style email with prioritized fixes and estimated business impact.  

✅ Delivered directly to your inbox in under 5 minutes.

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail, Markdown, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
