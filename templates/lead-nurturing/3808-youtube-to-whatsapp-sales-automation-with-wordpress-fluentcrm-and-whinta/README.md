# 💬 YouTube to WhatsApp sales automation with WordPress, FluentCRM and Whinta

> ⚡ **1,036 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# 🚀 **WhatsApp Automation Template**  
## Designed & Developed by Infridet Solutions Private Limited  

---

# **🔧 Objective:**  
Automate your lead nurturing and sales process from YouTube/Instagram → Landing Page → CRM → Email → WhatsApp → Sales → Deal Closure using tools like:  

- 🌐 **WordPress** (Landing Page + Fluent Forms)  
- 🧾 **Google Sheets** (Backup Log)  
- 📩 **FluentCRM** (Lead Tagging + Email Sequences)  
- 💬 **Whinta.com** (WhatsApp Messaging API)  
- ⚙️ **N8N** (Workflow Automation Engine)  

---

# **🧩 System Flow Overview:**

1. **Lead Source**: YouTube or Instagram CTA  
2. **Landing Page**: Built on WordPress with a story-driven design  
3. **Form Capture**: Fluent Forms with dynamic input fields  
4. **Data Sync**:
   - Backup to Google Sheets  
   - Push lead to FluentCRM and tag as `New Lead`  
5. **Email Sequence**:
   - Warm-up emails (1 to 5)  
   - Introduce offer or service  
6. **WhatsApp Outreach**:
   - Send personalized message via Whinta  
   - Triggered 1 hour after form fill or last email  
7. **Sales Follow-Up**:
   - Sales team handles replies manually  
   - CRM tag updated to `Customer` upon closing  

---

# **📁 Folder Structure (Optional Git/Zip File):**
```
📦 WhatsApp-Automation-Infridet/
│
├── whatsapp-automation-n8n.json      # N8N Flowchart Import File
├── email-templates.docx              # Warm-up Email Scripts
├── whinta-api-integration.pdf        # API Documentation
├── crm-tagging-notes.txt             # CRM Tag Setup Details
└── readme.md                         # This Instruction File
```

---

# **🛠️ Required Integrations & Setup**

### ✅ **Fluent Forms (WordPress)**  
- Embed form with Name, Email, Phone  
- Enable webhook to N8N: `/lead-capture`  

### ✅ **Google Sheets**  
- Use `n8n-nodes-base.googleSheets` node  
- Capture name, email, phone, source, timestamp  

### ✅ **FluentCRM**  
- REST API enabled  
- Push contact and assign tag `New Lead`  
- Setup Email Automation via tag trigger  

### ✅ **SMTP Email (Optional)**  
- Use Gmail SMTP or Brevo  
- Trigger email on form submission  

### ✅ **Whinta.com (WhatsApp API)**  
- Send POST request  
- Payload includes `phone`, `message`, `sender_id`  
- Customize message with personalization  

---

# **💬 Sample WhatsApp Message:**
```plaintext
Hey {{name}}, Gyan here from Account Craft 👋  
I saw your form submission – would you like help in starting your YouTube journey this week?  
Let me know. I'm just one text away. ✅  
```

---

# **📧 Sample Email (Warmup Day 1):**
&gt; **Subject**: Welcome to Account Craft 🚀  
&gt; **Body**:  
&gt; Hi {{name}},  
&gt;  
&gt; I’m Gyan from Account Craft. Thanks for joining us!  
&gt; Here’s what’s coming next: exclusive videos, personalized tips, and real support to get your YouTube channel earning.  
&gt;  
&gt; Let’s go!  
&gt; – Gyan

---

# **🔁 CRM Tag Updates:**
| Action            | Tag Assigned     |
|-------------------|------------------|
| On form fill      | `New Lead`       |
| After WhatsApp    | `Engaged`        |
| After sale closed | `Customer`       |

---

# **📌 Final Output:**
Once completed, the system will:
- Log all leads into a database  
- Automatically send emails and WhatsApp messages  
- Notify your sales team  
- Update lead status without manual entry  

---

&gt; *Automation Template Designed & Deployed by*  
&gt; **Infridet Solutions Private Limited**  
&gt; _Smart Integrations. Seamless Business._  
&gt; 🌐 www.infridetsolutions.com | 📞 +91-8853354829

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
