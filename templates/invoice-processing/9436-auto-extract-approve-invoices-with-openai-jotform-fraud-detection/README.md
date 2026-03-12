# 🧾 Auto-extract & approve invoices with OpenAI, Jotform - fraud detection

> ⚡ **234 views** · 🧾 [Invoice Processing](../)

## Description

Transform accounts payable from a manual bottleneck into an intelligent, automated system that reads invoices, detects fraud, and processes payments automatically—saving 20+ hours per week while preventing costly fraudulent payments.

## 🎯 What This Workflow Does

Automates the complete invoice-to-payment cycle with advanced AI:

1. **📧 Check Invoices from Jotform** - Monitor Jotform for Invoice Submission
2. **🤖 AI-Powered OCR** - Extracts ALL data from PDFs and images (vendor, amounts, line items, dates, tax)
3. **🚨 Fraud Detection Engine** - Analyzes 15+ fraud patterns: duplicates, anomalies, suspicious vendors, document quality
4. **🚦 Intelligent Routing** - Auto-routes based on AI risk assessment:
   - **Critical Fraud (Risk 80-100)**: Block → Slack alert → CFO investigation
   - **Manager Review (&gt;$5K or Medium Risk)**: Approval workflow with full analysis
   - **Auto-Approve (&lt;$5K + Low Risk)**: Instant → QuickBooks → Vendor notification
5. **📊 Complete Audit Trail** - Every decision logged to Google Sheets with AI reasoning

## ✨ Key Features

### Advanced AI Capabilities
- **Vision-Based OCR**: Reads any invoice format—PDF, scanned images, smartphone photos
- **99% Extraction Accuracy**: Vendor details, line items, amounts, dates, tax calculations, payment terms
- **Multi-Dimensional Fraud Detection**:
  - Duplicate invoice identification (same number, similar amounts)
  - Amount anomalies (round numbers, threshold gaming, unusually high)
  - Vendor verification (new vendors, mismatched domains, missing tax IDs)
  - Document quality scoring (OCR confidence, missing fields, calculation errors)
  - Timing anomalies (future dates, expired invoices, weekend submissions)
  - Pattern-based detection (frequent small amounts, vague descriptions, no PO references)

### Intelligent Processing
- **Risk-Based Scoring**: 0-100 risk score with detailed reasoning
- **Vendor Trust Ratings**: Build vendor reputation over time
- **Category Classification**: Auto-categorizes (software, consulting, office supplies, utilities, etc.)
- **Amount Thresholds**: Configurable auto-approve limits
- **Human-in-the-Loop**: Critical decisions escalated appropriately
- **Fast-Track Low Risk**: Process safe invoices in under 60 seconds

### Security & Compliance
- **Fraud Prevention**: Catch fraudulent invoices before payment
- **Duplicate Detection**: Prevent double payments automatically
- **Complete Audit Trail**: Every decision logged with timestamp and reasoning
- **Role-Based Approvals**: Route to correct approver based on amount and risk
- **Document Verification**: Quality checks on every invoice

## 💼 Perfect For

- **Finance Teams**: Processing 50-500 invoices per week
- **CFOs**: Need fraud prevention and spending visibility
- **Controllers**: Want automated AP with audit compliance
- **Growing Companies**: Scaling without adding AP headcount
- **Multi-Location Businesses**: Centralized invoice processing across offices
- **Fraud-Conscious Organizations**: Healthcare, legal, financial services, government contractors

## 💰 ROI & Business Impact

### Time Savings
- **90% reduction** in manual data entry time
- **20-25 hours saved per week** on invoice processing
- **Same-day turnaround** on all legitimate invoices
- **Zero data entry errors** with AI extraction
- **No more lost invoices** - complete tracking

### Fraud Prevention
- **100% duplicate detection** before payment
- **Catch suspicious patterns** automatically
- **Prevent invoice splitting** (gaming approval thresholds)
- **Identify fake vendors** before payment
- **Average savings: $50K-$200K annually** in prevented fraud losses

### Process Improvements
- **24-hour vendor response times** (vs 7-10 days manual)
- **95%+ payment accuracy** with AI validation
- **Better cash flow management** via due date tracking
- **Vendor satisfaction** from transparent, fast processing
- **Audit-ready** with complete decision trail

## 🔧 Required Integrations

### Core Services
- **Jotform** - Invoice Submissions
*Create your form for free on [Jotform using this link](https://www.jotform.com/?partner=mediajade)*
- **OpenAI API** - GPT-4o-mini for OCR & fraud detection (~$0.03/invoice)
- **Google Sheets** - Invoice database and analytics (free)
- **Accounting System** - QuickBooks, Xero, NetSuite, or Sage (via API)

### Optional Add-Ons
- **Slack** - Real-time fraud alerts and approval requests
- **Bill.com** - Payment processing automation
- **Linear/Asana** - Task creation for manual reviews
- **Expensify/Ramp** - Expense management integration

## 🚀 Quick Setup Guide

### Step 1: Import Template
1. Copy JSON from artifact
2. In n8n: **Workflows** → **Import from File** → Paste JSON
3. Template imports with all nodes and sticky notes

### Step 2: Configure Email Monitoring
1. Connect Gmail or Outlook account
2. Update filter: invoices@yourcompany.com (or your AP email)
3. Test: Send yourself a sample invoice

### Step 3: Add OpenAI API
1. Get API key: https://platform.openai.com/api-keys
2. Add to both AI nodes (OCR + Fraud Detection)
3. Cost: ~$0.03 per invoice processed

### Step 4: Connect Accounting System
1. Get API credentials from QuickBooks/Xero/NetSuite
2. Configure HTTP Request node with your endpoint
3. Map invoice fields to your GL codes

### Step 5: Setup Approval Workflows
1. Update email addresses (finance-manager@yourcompany.com)
2. Configure Slack webhook (optional)
3. Set approval thresholds ($5K default, customize as needed)

### Step 6: Create Google Sheet Database
Create spreadsheet with columns:

## 🔗 Nodes Used

Google Sheets, Slack, Jotform Trigger, Gmail, QuickBooks Online, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
