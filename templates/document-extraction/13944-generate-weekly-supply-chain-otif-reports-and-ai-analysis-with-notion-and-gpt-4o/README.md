# 🔬 Generate weekly supply chain OTIF reports and AI analysis with Notion and GPT-4o

> ⚡ **352 views** · 🔬 [Document Extraction & Analysis](../)

## Description

*Tags: Logistics, Supply Chain, OTIF, KPI Tracking, Performance Management, AI Analysis, Notion*

### Context

Hi! I'm [Samir](https://samirsaci.com/about), Supply Chain Engineer, Data Scientist based in Paris, and founder of [LogiGreen](https://logi-green.com).

&gt; Let's use AI with n8n to automate supply chain performance tracking!

Tracking **On-Time In-Full (OTIF)** delivery performance is critical for retail logistics, but manually compiling data, computing KPIs, and writing analysis reports is time-consuming and error-prone.

[![Workflow Overview](https://www.samirsaci.com/content/images/size/w1000/2026/03/image-10.png)](https://youtu.be/tOT8XhQ7eB8)

This workflow automates the entire process: collecting shipment data, aggregating weekly KPIs, generating AI powered performance analyses, and pushing everything into a Notion dashboard.

[![Notion Dashboard](https://www.samirsaci.com/content/images/size/w1000/2026/03/image-5.png)](https://youtu.be/tOT8XhQ7eB8)

For business inquiries, you can find me on [LinkedIn](https://www.linkedin.com/in/samir-saci)

### Demo of the workflow

The workflow collects shipment records from your TMS and WMS, then aggregates them by week.

[![n8n Data Table](https://www.samirsaci.com/content/images/size/w1000/2026/03/image-6.png)](https://youtu.be/tOT8XhQ7eB8)

An AI Agent analyses each week's performance and generates summary cards in Notion.

[![AI Generated Analysis](https://www.samirsaci.com/content/images/size/w1000/2026/03/image-7.png)](https://youtu.be/tOT8XhQ7eB8)

Weekly OTIF data is automatically pushed to a Notion database for tracking and visualisation.

[![Weekly OTIF Data](https://www.samirsaci.com/content/images/size/w1000/2026/03/image-8.png)](https://youtu.be/tOT8XhQ7eB8)

### Who is this template for?

This template is ideal for logistics and supply chain teams looking to automate KPI reporting:

- **Supply chain managers** tracking delivery performance across carriers and warehouses
- **Logistics analysts** who need automated weekly OTIF scorecards
- **Operations teams** looking to leverage AI for performance insights

### Tutorial

A complete tutorial (with explanations of every node) is available on YouTube:

[![Tutorial + Demo](https://www.samirsaci.com/content/images/2026/03/temp.png)](https://youtu.be/tOT8XhQ7eB8)

### What does this workflow do?

This automation uses Notion databases and OpenAI AI Agents to build a complete OTIF scorecard:

1. The workflow is triggered manually (or on a schedule).
2. Shipment data is collected from your TMS and WMS systems.
3. Records are **aggregated by week**, computing On-Time rate, In-Full rate, and OTIF rate.
4. An **AI Agent** analyses each week's performance and identifies trends, issues, and recommendations.
5. Weekly KPI rows are pushed to the **Daily OTIF Summary** database in Notion.
6. Per-week **AI analysis cards** are created in the **AI Generated Analysis** database.
7. A second **AI Agent** generates a **global performance summary** across all weeks.
8. The global summary card is updated in Notion with the overall analysis.

### Next Steps

Before running the workflow, follow the sticky notes and configure:

- Connect your **Notion API credentials** and update the database IDs in all Notion nodes
- Add your **OpenAI API Key** to the AI Agent nodes
- Update the **"Collect Shipments from TMS & WMS"** node with your actual data source (API, Google Sheets, or database)
- Adjust the AI prompts to match your specific KPI thresholds and business context
- Set up the **Notion template** with the two required databases: "Daily OTIF Summary" and "AI Generated Analysis"
- Duplicate the **[Notion template](https://seed-steed-3b7.notion.site/OTIF-Scorecard-for-Retail-Logistics-31b81c23345c81f480b4cde0cf488060?pvs=74)** to your workspace before connecting the workflow
- (Optional) Change the trigger from manual to a **scheduled cron** for automated weekly reporting

*Submitted: 8 March 2026*
*Template designed with n8n version 2.10.12*

## 🔗 Nodes Used

Notion, Schedule Trigger, AI Agent, OpenAI Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
