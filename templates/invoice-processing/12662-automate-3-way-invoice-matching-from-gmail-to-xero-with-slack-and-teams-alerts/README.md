# 🧾 Automate 3-way invoice matching from Gmail to Xero with Slack and Teams alerts

> ⚡ **10 views** · 🧾 [Invoice Processing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Intelligent Financial Invoice Hub: AI Parsing, 3-Way Matching & Multi-Channel Alerting

## 🎯 Description
This is an enterprise-grade solution designed for complex finance departments. It automates the entire accounts payable lifecycle by combining secure document handling, intelligent vendor mapping, 3-way reconciliation, and a sophisticated multi-channel notification engine.



### ✨ What This Workflow Does
1. **Multi-Channel Ingestion** - Consolidates invoices arriving via Gmail, legacy IMAP servers, and direct vendor portal webhooks into a single processing stream.
2. **Advanced Security Layer** - Automatically retrieves rotating encryption keys from a secure database and uses the **HTML to PDF (Unlock)** node to decrypt protected vendor statements.
3. **Fuzzy Vendor Identification** - Uses intelligent string analysis to identify vendors despite name variations (e.g., "Amazon" vs. "AWS"), ensuring data consistency.
4. **Automated 3-Way Matching** - Fetches the associated Purchase Order (PO) and Delivery Receipt, then uses the **HTML to PDF (Merge)** engine to create a verified "Audit Bundle" for compliance.
5. **AI-Driven Data Extraction** - Parses line-item details, converts international currencies using live exchange rates, and detects early payment discounts to optimize cash flow.
6. **Enterprise Notification Engine** - 
    * **Slack**: Instant escalation for high-value outliers (e.g., &gt;$10k) or urgent invoices.
    * **Microsoft Teams**: Direct alerts to Department Heads when items impact their specific budgets.
    * **Gmail**: Delivers a daily processing success digest to the Finance Lead.

### 💡 Key Features
* **3-Way Reconciliation:** Prevents fraud and overpayment by validating quantities and prices across three distinct documents before ERP synchronization.
* **Encrypted Document Handling:** Seamlessly manages password-protected PDFs without manual intervention.
* **Currency Intelligence:** Automatically handles international vendor payments with real-time conversion and tax mapping.
* **Budget Allocation:** Smartly assigns costs to specific department codes and project tags in your accounting software.

### 🔧 Technical Highlights
* **Binary Buffer Management:** High-performance handling of multiple large PDF streams during the merge process.
* **Fuzzy Matching Logic:** Robust vendor recognition that handles typos and naming variations.
* **Hybrid Trigger Support:** Reliable execution via polling (Email) and real-time events (Webhooks).
* **Modular Architecture:** Easy to adapt for Xero, QuickBooks, or custom SQL databases.

### 📦 What You'll Need
1. **HTML to PDF Node** - Essential for the **Unlock** and **Merge** operations.
2. **Google Sheets** - To serve as the Vendor Vault (decryption keys) and Master Audit Log.
3. **ERP Credentials** - Access to Xero, QuickBooks, or Sage for bill creation.
4. **Communication Tools** - Slack, Microsoft Teams, and a Gmail account.

### 🚀 Benefits
* ✅ **Zero Manual Data Entry** - Complete "Email-to-ERP" automation saves hours of administrative work.
* ✅ **Eliminate Overpayments** - 3-way matching ensures you only pay for exactly what was ordered and received.
* ✅ **Real-Time Financial Visibility** - Department heads are notified the moment their budget is impacted.
* ✅ **Audit Readiness** - Automatically maintains a complete digital paper trail for every single invoice.

### 🎨 Customization Options
* **Thresholds:** Adjust the "High Value" IF-node to match your internal approval policies.
* **Channels:** Easily swap Slack for Discord or Teams for SMS alerts (via Twilio).
* **Currency:** Add or remove currency pairs in the Intelligence Engine code node.

---
**Tags:** #finance #accounting #xero #3-way-match #pdf-automation #slack #enterprise #security

**Category:** Finance & Accounting

**Difficulty:** Advanced

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Google Drive, Xero, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
