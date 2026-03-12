# 📊 Detect keyword cannibalization with GPT-4o and Google Search Console

> ⚡ **493 views** · 📊 [Market Research & Insights](../)

## Description

**AI-Powered Keyword Cannibalization Detection Workflow**

**Overview**

This is an advanced n8n automation workflow designed to detect and analyze keyword cannibalization issues across multiple client websites using Google Search Console data and artificial intelligence. The system provides real-time monitoring and comprehensive reporting to help SEO professionals identify and resolve internal competition between pages ranking for the same keywords.

**Core Components**

**1. Automated Monitoring System**
- **Real-time trigger:** Monitors Google Sheets for keyword changes every minute
- **Multi-client support:** Handles up to 4 different client websites simultaneously
- **Intelligent routing:** Automatically directs each client's data through dedicated processing paths

**2. Data Collection & Processing**

- **GSC Integration:** Fetches 30 days of search performance data from Google Search Console API
- **Comprehensive metrics:** Collects keyword rankings, page URLs, positions, clicks, impressions, and CTR 
- **Data transformation:** Groups raw API responses by keywords for structured analysis
- **Cross-referencing:** Matches target keywords from Google Sheets with actual GSC performance data

**3. AI Analysis Engine**

- **GPT-4o powered:** Uses advanced AI to analyze keyword competition patterns
- **Risk categorization:** Automatically classifies cannibalization risk as:

 	- **High Risk:** 5+ pages competing for the same keyword
	- **Moderate Risk:** 3+ pages ranking in top 10 positions
	- **Low Risk:** 2 pages with one clearly dominating
	- **No Risk:** Single page ranking for the keyword
- **Intelligent reasoning:** Provides detailed explanations for each risk assessment

**4. Comprehensive Reporting**
- **Automated output:** Saves analysis results back to Google Sheets
- **Detailed insights:** Includes risk levels, reasoning, observations, and actionable remediation steps
- **Performance tracking:** Complete keyword performance metrics for client reporting
- **Status tracking:** Identifies which keywords are ranking vs. missing from search results

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Sheets Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
