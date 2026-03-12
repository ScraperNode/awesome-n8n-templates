# ⚒️ Automate inventory replenishment and purchase orders with Mistral AI and ERP

> ⚡ **52 views** · ⚒️ [Engineering](../)

## Description

This AI-powered workflow monitors warehouse stock levels and sales velocity in real-time, uses machine learning to forecast demand, automatically generates optimized purchase orders with intelligent quantity recommendations, sends them directly to suppliers via email, and logs all transactions in your ERP system for complete audit trails.

### How it works

1. **Monitor inventory** - Schedule trigger runs every 6 hours to check stock levels
2. **Fetch data** - Queries ERP database for items below reorder point and 90-day sales history
3. **Analyze trends** - Calculates sales velocity, trends, and stockout risk for each product
4. **AI forecasting** - Mistral AI analyzes data, forecasts 60-day demand, and generates optimized purchase orders
5. **Smart approval** - Auto-approves orders under $50K or with critical items; flags high-value orders for review
6. **ERP integration** - Creates POs in database and updates pending inventory counts
7. **Supplier communication** - Sends formatted emails to suppliers with complete order details
8. **Audit trail** - Logs all transactions for compliance and notifies team via Slack

### Setup steps

1. **Import workflow** and configure PostgreSQL credentials for your ERP database
2. **Add Mistral AI credentials** - Get API key from Mistral Cloud dashboard
3. **Configure email** - Set up SMTP credentials for supplier communication
4. **Setup Slack** - Add OAuth2 credentials and configure channel for notifications
5. **Create tool workflows** - Build supporting workflows for `get_supplier_catalog` and `check_budget_availability`
6. **Customize thresholds** - Adjust auto-approval limits and safety stock percentages in relevant nodes
7. **Test workflow** - Run manually with sample data to verify all integrations
8. **Activate** - Enable schedule trigger for automated 6-hour checks

### Key features

- **Mistral AI forecasting** - Advanced demand prediction with trend analysis
- **Smart auto-approval** - Orders under $50K or critical items approved automatically
- **Multi-supplier support** - Groups orders and emails each supplier separately
- **Full audit trail** - Complete transaction logging for compliance
- **Real-time notifications** - Instant Slack alerts with order summaries
- **ERP integration** - Seamless database updates for inventory and purchase orders

### Customization Options

Modify AI Agent prompt to adjust safety stock percentage (default 20%) or change forecasting horizon from 60 to 30/90 days. Increase schedule frequency to hourly for high-velocity businesses or daily for slower-moving inventory. Add third tool `get_seasonal_trends` to incorporate historical seasonal patterns into demand forecasts. Implement multi-level approval requiring CFO sign-off for orders exceeding $100K. Replace email with direct API integration to supplier portals like EDI or supplier-specific APIs. Add SMS notifications using Twilio for CRITICAL stockouts requiring immediate attention. Connect to warehouse management system (WMS) via API for real-time stock level syncing. Implement economic order quantity (EOQ) calculator tool for cost optimization. Add predictive analytics for lead time variability based on historical supplier performance. Create dashboard widget in ERP showing AI forecast accuracy over time for continuous improvement.

**Explore More Supply Chain & Inventory Automation:**  
[Contact us](https://www.oneclickitsolution.com/contact-us/) to design AI-powered demand planning, warehouse optimization, and supplier management workflows tailored to your operations.

## 🔗 Nodes Used

Send Email, Postgres, Slack, Schedule Trigger, AI Agent, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
