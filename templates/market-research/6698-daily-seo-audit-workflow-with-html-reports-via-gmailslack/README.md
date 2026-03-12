# 📊 Daily SEO audit workflow with HTML reports via Gmail/Slack

> ⚡ **887 views** · 📊 [Market Research & Insights](../)

## Description

## Elevate Your Website’s Ranking: Automated Daily SEO Audits

Boost your online visibility and stay ahead of the curve with this **Automated SEO Audit Workflow Template**. This solution streamlines the crucial task of monitoring your website’s health, proactively identifying issues, and ensuring peak performance without the manual grind. It’s your personal, tireless SEO assistant, designed to save you time and provide actionable insights for driving organic traffic and enhancing your search engine optimization (SEO).

---

### Benefits & Target Audience

- **Proactive Issue Detection**  
  Catch SEO errors and performance bottlenecks as they emerge before they impact your rankings.  
- **Time & Resource Savings**  
  Automate daily checks so your team can focus on strategy, not manual audits.  
- **Comprehensive Insights**  
  Receive on-page, technical, performance, accessibility, and security checks in a single, styled HTML report.

**Ideal for:**  
Website owners, bloggers, digital marketing agencies, SEO specialists, web developers, and e-commerce businesses are committed to maintaining a strong online presence and improving organic search performance.

---

### Detailed Workflow

1. **Daily Trigger**  
   A Schedule Trigger node fires the audit at your chosen time each day.  
2. **Configuration**  
   Use the Set Variables node to define the target URL, the recipient, and the sender's email addresses.  
3. **Content Fetch**  
   An HTTP Request node retrieves your site’s raw HTML.  
4. **On-Page Analysis**  
   The HTML node parses critical elements (titles, meta descriptions, H1/H2 headings, image alt tags).  
5. **Audit Logic**  
   A Code node runs your custom SEO audit script covering on-page, technical, performance (Core Web Vitals), accessibility, and basic security checks—to generate actionable findings.  
6. **Report Delivery**  
   A Gmail node formats those findings into a clean HTML report and emails it to your specified recipients.

---

### Required APIs & Customization

- **APIs Needed:**  
  - Gmail (or Slack) credentials for report delivery.  

- **Easy Customization:**  
  - **Target URLs & Recipients:** Update in “Configure Target & Recipients.”  
  - **Audit Frequency:** Adjust the Schedule Trigger (e.g., hourly, weekly).   
  - **Report Branding:** Customize the HTML/CSS in the Gmail/Slack node.  
  - **Delivery Channels:** Swap Gmail for Slack, Teams, or your preferred notification service.

---

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
