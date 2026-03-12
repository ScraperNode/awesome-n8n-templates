# 🔧 🔔 Meta Ads Low Balance Alert – Auto Notification via WhatsApp or Email

> ⚡ **608 views** · 🔧 [Miscellaneous](../)

## Description

### Hello my loves! I’m Amanda...
I created this workflow with care for marketing professionals and agencies who manage multiple **Meta Ads (Facebook)** accounts and want to track **ad account balances automatically** — no more logging in every day or risking campaigns stopping unexpectedly.

With this setup, n8n will check the balance of each account using the Meta API, compare it to a defined threshold, and if the balance is too low, it will automatically send a friendly alert via **WhatsApp or email**. It also logs everything neatly into a **Google Sheet** — so you always know where things stand.

---

## ✨ What this workflow does

- 🧾 Pulls balance data from Meta Ads accounts using the Facebook Graph API  
- 📉 Compares current balance with the minimum threshold set in a Google Sheet  
- 🚨 Sends low-balance alerts via WhatsApp (Evolution API) or Gmail  
- 🧠 Customizes alerts depending on payment type: **Boleto or Credit Card**  
- 📊 Updates the Google Sheet with new balance, check date, and status  
- 📆 Can run automatically every day or manually whenever you want

---

## 🔧 What you’ll need

1. A Google Sheet with your client accounts and minimum balance thresholds  
   → Use this template: [Google Sheet Example](https://docs.google.com/spreadsheets/d/1wwjHif98Jyc8QUGZI15YI-Z68QXznIuMcK951AuUYdY/edit?usp=sharing)  
2. Access Token for Meta Ads API  
3. Evolution API (if you want to send alerts via WhatsApp)  
4. Gmail account connected to n8n (for email notifications)  
5. “Base Value” column filled out in the sheet for each account

---

## ✅ Works with:
- **n8n Cloud**  
- **n8n Self-hosted**

🔐 Secure credentials managed directly in n8n — no exposed tokens.

---

## Want to adapt this workflow to your business?
❤️ Buy Workflows: https://iloveflows.gumroad.com  
☁️ Try n8n Cloud with my partner link: [https://n8n.partnerlinks.io/amanda](https://n8n.partnerlinks.io/amanda)


---
## Translation to Portuguese:
### Olá meus amores! Eu sou a Amanda 🌟
Esse fluxo foi feito com muito cuidado para profissionais que gerenciam contas de anúncios no **Meta Ads (Facebook)** e precisam acompanhar de perto o **saldo disponível**, evitando pausas indesejadas nas campanhas.

Com ele, você automatiza todo o controle de saldo: o sistema busca os dados da conta via API do Facebook, calcula o valor restante, compara com o limite definido, **envia alertas personalizados por WhatsApp ou e-mail** e ainda atualiza tudo em uma planilha do **Google Sheets** — todos os dias, de forma segura e sem esforço.  

---

## ✨ O que esse fluxo faz

- 🔄 Busca automaticamente o saldo das contas via API do Meta Ads  
- 🧮 Verifica se o saldo está abaixo do valor base definido para cada conta  
- 🟨 Se estiver abaixo, envia alerta com mensagem personalizada para o cliente  
- 💌 Alerta pode ser enviado por **WhatsApp (via Evolution API)** ou **Email (Gmail)**  
- 📊 Atualiza a planilha do Google Sheets com o novo saldo e data da última checagem  
- 💳 Verifica se o método de pagamento da conta é **boleto, PIX ou cartão** e envia mensagens diferentes para cada caso  
- 📆 Funciona com agendamento automático diário ou execução manual  

---

## 🛠️ O que você precisa

1. Uma planilha no Google Sheets com os dados das contas (use este [modelo](https://docs.google.com/spreadsheets/d/1wwjHif98Jyc8QUGZI15YI-Z68QXznIuMcK951AuUYdY/edit?usp=sharing))  
2. Conta de anúncios no Meta configurada com token de acesso válido  
3. API do Evolution (caso queira enviar alertas por WhatsApp)  
4. Gmail conectado no n8n (para envio de emails)  
5. Base Value (valor mínimo desejado) preenchido na planilha para cada conta

---

## ✅ Compatível com:
- **n8n Cloud**  
- **n8n Auto-hospedado**

🔐 Segurança garantida com o uso de credenciais do próprio n8n.

---

## Quer adaptar esse fluxo pro seu sistema?
❤️ Buy Workflows: https://iloveflows.gumroad.com  
☁️ Use n8n Cloud com meu link parceiro: [https://n8n.partnerlinks.io/amanda](https://n8n.partnerlinks.io/amanda)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
