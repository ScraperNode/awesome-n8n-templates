# 🔧 🔐 Generate PIX payment QR codes for any Brazilian bank key

> ⚡ **710 views** · 🔧 [Miscellaneous](../)

## Description

### 🔐 PIX QR Code Generator for Any Bank and Key – Powered by n8n

Easily generate PIX QR Codes with this ready-to-use n8n workflow, supporting **any valid PIX key** (CPF, CNPJ, phone, email, or random key) and following the official **BACEN** standard — the Central Bank of Brazil's regulation.

Whether you want to automate payments in chatbots, CRM systems, e-commerce checkouts, or custom apps, this solution provides fast, secure, and fully compliant QR Code generation.

---

### 💡 What is PIX?

PIX is a **real-time payment system** developed by the **Central Bank of Brazil (BACEN)**.  
It allows instant transfers between banks, available 24/7, without fees for individuals.  
Businesses widely use PIX for quick, easy, and reliable payments — making QR Codes an essential tool for sales, subscriptions, and customer service.

---

### ⚙️ What this Workflow Does

- Creates a **fully compliant PIX payment code** with automatic checksum (CRC)  
- Generates a **dynamic QR Code** that customers can scan with any banking app  
- Returns:
  - The full **PIX EMV payment code** (ready for integration)  
  - A **public URL** linking to the QR Code image  
  - Clean payment metadata for frontend or messaging bots

All generated dynamically from the user's input: key, amount, receiver name, city, and payment description.

---

### 🧠 How it Works

1. The user provides basic payment information: key, amount, name, city, and description.  
2. The workflow assembles a PIX payload following BACEN's EMV QR standards.  
3. It automatically generates and attaches the CRC (checksum) for validation.  
4. A QR Code is created based on the complete PIX code.  
5. The output returns both the **PIX code** and a **QR Code image URL**, ready to use anywhere.

Each component works seamlessly to deliver a ready-to-scan QR Code for instant payments.

---

### 🛠️ How to Set Up

1. **Deploy the workflow** on your n8n Cloud or self-hosted instance.  
2. **Configure the input variables** manually or through an API/Webhook:
   - `pixKey`: Your PIX key (CPF, CNPJ, email, phone, or random)  
   - `receiverName`: Name of the individual or company receiving the payment  
   - `city`: City name associated with the receiver  
   - `amount`: Payment value (in BRL, ex: 79.90)  
   - `description`: Short description for the transaction (optional)  
3. **Trigger the workflow**:
   - Manually (for testing)  
   - Via webhook/API (ideal for integrations with chatbots, e-commerce, CRM)  
4. **Customize the flow** (optional):
   - Set default values if user inputs are missing  
   - Adjust QR Code size or styling (inside the QR Code generator node)  
   - Connect to database/storage if you want to save issued PIX transactions

---

### 🎯 Who is This For?

- E-commerce stores needing instant payment links  
- Chatbots or WhatsApp bots offering product sales or bookings  
- CRM systems wanting to automate billing processes  
- Subscription platforms requiring fast payment confirmation  
- Any business wanting to **accept payments faster and smarter**

---

### ✅ Requirements

- Active **n8n Cloud** or **self-hosted** instance  
- A valid PIX key (CPF, CNPJ, email, phone, or random key)  
- Basic payment information: amount, city, receiver name, description  
- No external paid APIs needed — fully open and server-side

---

### 🛒 Ready to Automate Your Payments?

❤️ Buy ready-to-use workflows at: [https://iloveflows.com](https://iloveflows.com)  
☁️ Try n8n Cloud with my partner link: [https://n8n.partnerlinks.io/amanda](https://n8n.partnerlinks.io/amanda)

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
