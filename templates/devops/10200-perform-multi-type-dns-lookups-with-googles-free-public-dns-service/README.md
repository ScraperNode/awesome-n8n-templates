# ⚙️ Perform Multi-type DNS Lookups with Google's Free Public DNS Service

> ⚡ **3,176 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# This n8n template makes it easy to perform DNS lookups directly within your n8n workflow using dns.google, without any API credentials.

## Use Cases

* **Track changes:** Schedule execution and log DNS answers to track changes to records over time.

* **Monitoring and alerts:** Schedule execution for DNS monitoring to detect misconfiguration and to trigger immediate alerts.

* **Prerequisite checks:** Use in more extensive workflows to ensure DNS resolves correctly before running a website crawl or other sensitive tasks.

## Good to Know
* Requires **no API credentials**. You do not need to sign up for any third party service for DNS resolution.

* Can easily be modified to use with a **webhook** instead of the default **Forms** node for external triggering.

* By default performs lookup for: 
A
CNAME
AAAA
MX
TXT
NS

## How It Works

1. The workflow checks the input for a specified DNS type. If none is found, it uses all types in a predefined list.

2. It splits the data into separate items for each DNS type.

3. It loops through all items and executes DNS resolution via the highly reliable _dns.google_ service.

4. It aggregates all results into a single, easy-to-use output structure.

## How to Use

1. Import the template and execute the workflow to enter the domain you want to look up in the Form interface.

2. Connect the final output node to your specific use case (logging, alerting, subsequent workflow steps, etc.).

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
