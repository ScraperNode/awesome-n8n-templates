# 📊 Comprehensive SEO strategy with O3 Director & GPT-4 specialist team

> ⚡ **1,170 views** · 📊 [Market Research & Insights](../)

## Description

# Comprehensive SEO Strategy with O3 Director & GPT-4 Specialist Team

1. **Trigger**

   * `When chat message received` → User submits an SEO request (e.g., *“Help me rank for project management software”*).
   * The message goes straight to the **SEO Director Agent**.

2. **SEO Director Agent (O3)**

   * Acts like the **head of SEO strategy**.
   * Uses the **Think node** to plan and decide which specialists to call.
   * Delegates tasks to relevant agents.

3. **Specialist Agents (GPT-4.1-mini)**

   * Each agent has its **own OpenAI model** connection for lightweight cost-efficient execution.
   * Tasks include:

     * **Keyword Research Specialist** → Keyword discovery, clustering, competitor analysis.
     * **SEO Content Writer** → Generates optimized blog posts, landing pages, etc.
     * **Technical SEO Specialist** → Site audit, schema markup, crawling fixes.
     * **Link Building Strategist** → Backlink strategies, outreach campaign ideas.
     * **Local SEO Specialist** → Local citations, GMB optimization, geo-content.
     * **Analytics Specialist** → Reports, performance insights, ranking metrics.

4. **Feedback Loop**

   * Each agent sends results back to the **SEO Director**.
   * Director compiles insights into a **comprehensive SEO campaign plan**.

---

## ✅ Why This Setup Works Well

* **O3 Model for Director** → Handles reasoning-heavy orchestration (strategy, delegation).
* **GPT-4.1-mini for Specialists** → Cheap, fast, task-specific execution.
* **Parallel Execution** → All specialists can run at the same time.
* **Scalable & Modular** → You can add/remove agents depending on campaign needs.
* **Sticky Notes** → Already document the workflow (great for onboarding & sharing).

---

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Chat Trigger, Think Tool, AI Agent Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
