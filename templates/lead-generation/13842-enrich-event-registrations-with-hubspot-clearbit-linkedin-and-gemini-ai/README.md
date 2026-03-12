# 🎣 Enrich event registrations with HubSpot, Clearbit, LinkedIn and Gemini AI

> ⚡ **5 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# **Event Registration + Auto-Enrichment Intelligence**

**Who is this for?**  
Event organizers, conference planners, and marketing teams fighting registration drop-off who want **4-field forms** with LinkedIn-level attendee intelligence.

***

**What problem is this workflow solving?**  
Multi-page forms kill conversions:  
- 80-90% drop-off on page 2  
- No attendee insights post-reg  
- Manual enrichment wastes hours  
- Abandoned carts = lost revenue  

This captures **4 fields** but enriches **15+ data points** automatically.

***

**What this workflow does**  

**3 Webhook Intelligence Suite**:  
- **POST /event-registration**: 4-field form → enrichment → HubSpot  
- **POST /reg-beacon**: Abandoned cart tracking pixel  
- **POST /validate-promo**: AJAX promo code validation  

**Requires 2 sub-workflows**:  
1) [**Abandoned Cart Recovery**](https://www.linkedin.com/in/milobravo/) 
2) [**Participant Re-engager**](https://tally.so/r/EkKGgB)  



**Enrichment Waterfall**:  
Clearbit → LinkedIn (Proxycurl) → Google+AI → Full profile  

**Outputs**:  
- HubSpot contacts with company/role/title  
- Data Tables: enriched_profiles / reg_analytics  
- Slack alerts + email confirmations  

***

**Setup (12 minutes)**  

- **Data Tables**: enriched_profiles, reg_analytics, promo_codes  
- **HubSpot**: API key + custom properties  
- **APIs**: Clearbit, Proxycurl, SerpAPI, Gemini  
- **Host**: reg-page/index.html (update webhook URLs)  
- **SMTP/Slack**: Notifications  

Fully configurable, no code changes needed.

***

**How to customize to your needs**  

- **Forms**: Swap HTML for Typeform/Webflow  
- **Enrichment**: Add Apollo/Hunter for emails  
- **CRM**: HubSpot → Salesforce → Airtable  
- **Promos**: Tiered discounts / early-bird  
- **Companion**: Abandoned Cart + Re-engager templates  

***

**ROI**:  

- **3x registration completion** (4 fields vs 12+)  
- **65% enriched profiles** (company/role/title)  
- **20% revenue recovery** (abandoned carts)  

***

**Need help customizing?**:  
Contact me for consulting and support: [LinkedIn](https://www.linkedin.com/in/milobravo/) / [Message](https://tally.so/r/EkKGgB)  

***

**Keywords**: event registration, attendee enrichment, abandoned cart recovery, conference automation, HubSpot

## 🔗 Nodes Used

Send Email, HTTP Request, Slack, Webhook, HubSpot, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
