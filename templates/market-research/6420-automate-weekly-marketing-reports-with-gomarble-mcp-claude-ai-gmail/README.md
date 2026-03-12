# 📊 Automate weekly marketing reports with GoMarble MCP, Claude AI & Gmail

> ⚡ **1,220 views** · 📊 [Market Research & Insights](../)

## Description

# Automated Marketing Analytics Report with AI Agent

## How it works

Transform your marketing data into actionable insights with this intelligent automation workflow. The system combines scheduled triggers with AI-powered analysis to deliver comprehensive marketing reports directly to your inbox.

**Key Features:**
- Scheduled automated reporting (daily, weekly, or monthly)
- AI-powered data analysis using advanced language models
- Multi-platform marketing data integration via GoMarble MCP
- Intelligent report generation with actionable recommendations
- Direct email delivery of formatted reports

## Set up steps

**Prerequisites:**
- GoMarble MCP account and API access
- Gmail account for report delivery
- n8n instance (cloud or self-hosted)

**Configuration Time:** ~15-20 minutes

**Step-by-step setup:**

1. **Connect GoMarble MCP to n8n**
   - Follow the integration guide: [GoMarble n8n Setup](https://www.gomarble.ai/docs/connect-to-n8n)
   - Configure your marketing platform credentials (Google Ads, Facebook Ads, Analytics)

2. **Configure the Schedule Trigger**
   - Set your preferred reporting frequency
   - Choose optimal timing for data availability

3. **Customize the Report Prompt**
   - Define specific metrics and KPIs to track
   - Set analysis parameters and report format preferences

4. **Set up AI Agent Configuration**
   - Choose between Anthropic Claude or OpenAI models
   - Configure the GoMarble MCP tools for your marketing platforms

5. **Configure Gmail Integration**
   - Set recipient email addresses
   - Customize email template and subject line

**Advanced Configuration:**
- Add conditional logic for performance thresholds
- Include custom data visualization requests
- Set up alert triggers for significant metric changes

## What you'll get

- **Automated Intelligence:** Regular marketing performance analysis without manual effort
- **Cross-Platform Insights:** Unified view of Google Ads, Facebook Ads, and Analytics data
- **AI-Powered Recommendations:** Strategic insights and optimization suggestions
- **Professional Reports:** Well-formatted, executive-ready marketing summaries
- **Scalable Solution:** Easy to extend with additional marketing platforms or custom metrics

Perfect for marketing teams, agencies, and business owners who want to stay on top of their marketing performance with minimal manual work.

## 🔗 Nodes Used

Gmail, Schedule Trigger, AI Agent, Basic LLM Chain, Anthropic Chat Model, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
