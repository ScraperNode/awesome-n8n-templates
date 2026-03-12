# 📊 WooCommerce 🛒 Product Review Sentiment Analysis and AI Report 🤖 for Improvement

> ⚡ **103 views** · 📊 [Market Research & Insights](../)

## Description

This workflow automates the **end-to-end analysis of WooCommerce product reviews**, transforming raw customer feedback into **actionable product and customer-care insights**, and delivering them in a structured, visual, and shareable format.

This workflow analyzes product review sentiment from WooCommerce using AI. It starts by retrieving reviews for a specified product via the WooCommerce. 

Each review then undergoes sentiment analysis using LangChain's Sentiment Analysis. The workflow aggregates sentiment data, creates a pie chart visualization via QuickChart, and compiles a comprehensive report using an AI Agent. 

The report includes executive summaries, quantitative data, qualitative analysis, product diagnostics, and operational recommendations. Finally, the **AI-generated report** is converted to HTML and emailed to a designated recipient for review by customer and product teams.

---

### Key Advantages

#### 1. ✅  Full Automation of Review Analysis

Eliminates manual work by automating data collection, sentiment analysis, reporting, visualization, and delivery in a single workflow.

#### 2. ✅ Scalable and Reliable

Batch processing ensures the workflow can handle **dozens or hundreds of reviews** without performance issues.

#### 3. ✅ Action-Oriented Insights (Not Just Sentiment)

Instead of stopping at sentiment scores, the workflow produces:

* Root-cause hypotheses
* Concrete improvement actions
* Prioritized recommendations (P0 / P1 / P2)
* Measurable KPIs

#### 4. ✅ Combines Quantitative and Qualitative Analysis

Merges hard metrics (averages, distributions, outliers) with qualitative insights (themes, risks, opportunities), giving a **360° view of customer feedback**.

#### 5. ✅ Visual + Narrative Output

Stakeholders receive both:

* **Visual sentiment charts** for quick understanding
* **Structured written reports** for strategic decision-making

#### 6. ✅ Ready for Product & Customer Care Teams

The output format is tailored for non-technical teams:

* Clear language
* Masked personal data (GDPR-friendly)
* Immediate usability in meetings, emails, or documentation

#### 7. ✅ Easily Extensible

The workflow can be extended to:

* Run on a schedule
* Analyze multiple products
* Store results in a database or CRM
* Trigger alerts for negative sentiment spikes


#### Ideal Use Cases

* Continuous monitoring of product sentiment
* Supporting product roadmap decisions
* Identifying customer pain points early
* Improving customer support response strategies
* Reporting customer voice to stakeholders automatically


---

### How it works

1. **Manual Trigger & Configuration**
   The workflow starts manually and sets the target **WooCommerce product ID** and **store URL**.

2. **Data Retrieval from WooCommerce**

   * Fetches **all reviews** for the selected product via the WooCommerce REST API.
   * Retrieves **product details** (name, description, categories) to enrich the analysis context.

3. **Batch Processing of Reviews**
   Reviews are processed in batches to ensure scalability and reliability, even with a large number of reviews.

4. **AI-Powered Sentiment Analysis**

   * Each review is analyzed using an OpenAI-based sentiment analysis model.
   * For every review, the workflow extracts:

     * Sentiment category (Positive / Negative / Neutral)
     * Strength (intensity)
     * Confidence (reliability of the classification)

5. **Data Normalization & Aggregation**

   * Review text is cleaned and structured.
   * Sentiment data is aggregated to compute overall distributions and metrics.

6. **Visual Sentiment Distribution**

   * A pie chart is dynamically generated via QuickChart to visually represent sentiment distribution.

7. **Advanced AI Insight Generation**
   A specialized AI agent (“Product Insights Analyst”) transforms the raw and aggregated data into a **professional, structured report**, including:

   * Executive summary
   * Quantitative statistics
   * Qualitative themes
   * Product diagnosis
   * Operational recommendations
   * Product backlog ideas
   * Next steps

8. **HTML Conversion & Delivery**

   * The report is converted into clean HTML.
   * The final output is automatically sent via **email** to stakeholders (e.g. product or customer care teams).

---

### Set up steps
1. **Configure credentials**:
   - Set up WooCommerce API credentials in the HTTP Request node.
   - Add OpenAI API credentials for both sentiment analysis and reporting.
   - Configure Gmail OAuth2 credentials for sending the final email report.

2. **Set parameters**:
   - In the "Product ID" node, replace `PRODUCT_ID` and `YOUR_WEBSITE` with actual product ID and WooCommerce site URL.
   - Update the recipient email address in the "Send a message" node.

3. **Optional adjustments**:
   - Modify the pie chart design in the "QuichChart" node if needed.
   - Adjust the report structure or language in the "Product Insights Analyst" system prompt.

4. **Run the workflow**:
   - Click "Execute workflow" on the manual trigger to start the process.
   - Monitor execution in n8n to ensure all nodes process correctly.

Once configured, the workflow will automatically analyze product reviews, generate insights, and deliver a formatted report via email.

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, WooCommerce, Gmail, AI Agent, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
