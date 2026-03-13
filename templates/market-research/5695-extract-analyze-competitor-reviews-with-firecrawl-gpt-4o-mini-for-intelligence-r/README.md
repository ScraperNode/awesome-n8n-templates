# 📊 Extract & analyze competitor reviews with Firecrawl & GPT-4o mini for intelligence reports

> ⚡ **117 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# 🥇 Competitor Review-Based Report (Firecrawl + GPT) for n8n

### The most **automated**, **innovative**, and **actionable** competitor review workflow.

---
### Who is this workflow for?

This workflow is designed for professionals, companies, and agencies that want to automate competitive analysis based on public reviews and opinions found on the Internet. It is especially useful for:

- **Restaurants and local businesses** seeking to identify the strengths and weaknesses of their direct competitors.
- **Marketing departments and analysts** interested in monitoring the reputation of rival brands or services.
- **Consultants and agencies** offering competitive intelligence or benchmarking services to their clients.
- **Entrepreneurs and product managers** looking for inspiration and opportunities for improvement through real user feedback.
- **Market researchers** who need to collect and analyze large volumes of opinions in an automated and structured way.
- **Automation enthusiasts and curious users** interested in exploring advanced workflow solutions.

The workflow is accessible to both users without advanced technical experience and to developers who wish to customize and adapt it for new industries or specific needs.

---

## 🚀 What does this workflow do?

- **Automates competitor benchmarking and review analysis.**
- Searches, extracts, and summarizes user opinions from the web about any business or topic you choose.
- Uses **Firecrawl API** for advanced web scraping and **GPT-4o mini** (OpenAI) for AI-powered summarization and actionable reporting.
- Delivers a final competitive intelligence report to your email, Webhook, or any connected service, in your preferred language.

---

## 🔥Why is it unique?

- **Zero manual work:** Just set the target (e.g., “opinions restaurant Karlos Arguiñano”) and let the workflow do all the crawling, cleaning, extracting, summarizing, and reporting.
- **Multi-source:** Scrapes multiple sources automatically for comprehensive coverage.
- **Highly configurable:** Choose any business or search topic, any language, and your desired delivery method.
- **Minimal token usage:** Efficiently parses and converts HTML to markdown for light, fast, and cheap AI calls.
- **Error-proof:** Includes robust error handling and anti-duplication logic.
- **User-friendly:** Includes clear onboarding, API guides, multi-language support, and customizable notification emails.

---

## 💸 API Cost Info

- **Firecrawl API:** Free up to generous limits. Each scan consumes only **0.01%** of your free API usage.
- **OpenAI GPT-4o Mini:** Just **$0.02 per scan** (est.), making it the most affordable way to get world-class AI competitor analysis.

---

## 🧩 How it works (Simplified steps)

1. **Input**: Start via webhook or manual trigger. Enter your objective (e.g., “opinions restaurant [name]”).
2. **Scraping**: Firecrawl extracts URLs with user reviews & opinions about your target.
3. **Content Extraction**: Visits each URL, cleans the HTML (removes scripts, head, images, and classes), and converts to markdown.
4. **AI Analysis**: GPT-4o scans for negative/neutral reviews and user suggestions, then merges all insights.
5. **Competitive Report**: AI generates a structured report, highlighting weaknesses, opportunities, and recommendations—delivered to your email or webhook.
6. **Multi-language**: Configure language output to fit your team.

---

## ⚙️ Requirements

- Firecrawl API (Free account: [https://www.firecrawl.dev/app](https://www.firecrawl.dev/app))
- OpenAI API Key (for GPT-4o mini, free tier available for new users)
- Email account for informs.

---

## 💡 Example use cases

- **Restaurants**: Benchmark yourself against local or global competitors
- **E-commerce**: See what real users dislike (and love) about rival shops
- **SaaS & Agencies**: Automate competitive intelligence for clients
- **Market research**: Validate product ideas or market fit through real reviews

---
&gt; ℹ️ **User Note**
&gt;
&gt; This workflow clearly informs users how to obtain all required APIs and includes a detailed README explaining how the code works, making it easy to understand and modify if needed.

---
## 🙏 Welcome & Thanks

Thank you for supporting this workflow and its creator! Your feedback enables new features and helps bring advanced AI automations to the whole n8n community.

**Questions, support or customization?**
[oriolrotllant3@gmail.com](mailto:oriolrotllant3@gmail.com)

---

**Enjoy one of the most innovative workflows in n8n. Save hours of research and get ahead of your competition—automatically!**

---

### Inform example (1 inform):
(imgbb URL)

[Inform 1 png](https://ibb.co/V0SpCw38)  
[Inform 2 png](https://ibb.co/Y4SDnk69)  
[Inform 3 png](https://ibb.co/zhhvGG4R)

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail, Stop and Error, Markdown, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
