# ⚙️ Monitor Kubernetes services & pods with Prometheus and send alerts to Slack

> ⚡ **890 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

#### 🧩 Short Summary

Proactively alert to service endpoint changes and pod/container issues (Pending, Not Ready, Restart spikes) using Prometheus metrics, formatted and sent to Slack.

#### 🗂️ Category

DevOps / Monitoring & Observability

#### 🏷️ Tags

kubernetes, prometheus, slack, alerting, sre, ops, kube-state-metrics

#### ✅ Prerequisites

- Prometheus scraping kube-state-metrics v2.x.
- Slack App or Incoming Webhook (channel access).
- n8n instance with outbound access to Prometheus & Slack.


#### 🔑 Required Credentials in n8n

Slack: Bot OAuth (chat:write) or Incoming Webhook URL.

(Optional) Prometheus Basic Auth (if your Prometheus needs it).

#### 🧠 What This Template Does

- Detects pods stuck in Pending (scheduling problems like taints/affinity/capacity).
- Detects containers Not Ready (readiness probe failures).
- Detects container restart spikes over a sliding window (default 5 minutes).
- Detects service discovery changes (endpoint count diffs current vs previous snapshot).
- Sends clean, emoji-enhanced Slack alerts with pod/namespace/service context.
- Outputs a 5-minute summary block to reduce noise.

#### 📣 Slack Message Style (examples)

![image.png](fileId:2165)

![image.png](fileId:2164)

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
