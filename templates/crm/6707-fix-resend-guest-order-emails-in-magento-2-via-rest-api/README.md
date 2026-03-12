# 🤝 Fix & resend guest order emails in Magento 2 via REST API

> ⚡ **85 views** · 🤝 [CRM & Sales Operations](../)

## Description

### This powerful n8n automation workflow is built for Magento 2 store owners and support teams who need to quickly correct guest customer email addresses and automatically resend order confirmation emails — all without logging into the Magento Admin Panel.

#### 🧩 What This Workflow Does:
- 🔄 Automates Magento 2 Admin Token Generation for secure REST API access.
- ✏️ Edits the email address on guest orders by updating both customer_email and billing_address.email fields using the Magento 2 Order API.
- 📧 Triggers the Magento 2 order confirmation email using the official /V1/orders/:id/emails endpoint.
- 🧠 Can be triggered manually or automatically from a form, CRM, failed email webhook, or helpdesk system.
- 📝 Logs actions and results to keep track of which emails were updated and which confirmations were resent.

#### ✅ Why Use This n8n Workflow?
- No more manual edits via Admin Panel.
- Ideal for support teams fixing typos like @gamil.com or @yahho.com.
- Seamless experience for customers who never received their order confirmation.
- Easily extendable — connect to your existing n8n ecosystem (forms, Slack, HelpDesk, Airtable, etc.)

#### 💼 Use Cases
- 🔧 A customer checks out as a guest and provides the wrong email — this automation fixes it in seconds.
- 📦 Support team gets a ticket: “I didn’t receive my confirmation email” — plug in the new address and let the workflow handle the rest.
- 🤖 Ecommerce operators who want to automate email recovery and cleanup workflows with precision and audit logs.

#### 🔑 Credentials Used
- HTTP Request – For calling Magento 2 REST API endpoints.
- Magento 2 Admin API Token – Acquired via /V1/integration/admin/token using admin username/password.

#### 🏷️ Tags
#n8n #Magento2 #AdobeCommerce #RESTAPI #Automation #Ecommerce #EmailFix #GuestCheckout #OrderMan

#### 📂 Category
Ecommerce Automation / Magento 2 / Developer Tools / Support Ops

#### 💬 Need Help?
💡 Having trouble setting it up or want to customize this workflow further?
Feel free to reach out — I’m happy to help with setup, customization, or Magento 2 API integration issues.

Contact: Author

#### 👤 Author
**Kanaka Kishore Kandregula**
Certified Magento 2 Developer | N8N Engineer
https://gravatar.com/kmyprojects
https://www.linkedin.com/in/kanakakishore

Thank you

## 🔗 Nodes Used

HTTP Request, MySQL, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
