# ⚡ 💬 Daily WhatsApp group summarizer – GPT-4o, Google Sheets & Evolution API

> ⚡ **2,304 views** · ⚡ [Personal Productivity](../)

## Description

### Hey! I’m Amanda ❤️
I made this little workflow with care for people like you who are part of busy WhatsApp groups and want a simple way to keep track of everything.

It connects to **Evolution API**, collects all the group messages throughout the day, stores them in **Google Sheets**, and uses **GPT-4o** to generate a daily summary. The summary is saved as a document in **Google Drive** — ready to read, share, or archive.

It’s perfect for teams, communities, classes, or any group that talks a lot but doesn’t want to miss important info.

---

## What it does

- Collects WhatsApp group messages using Evolution API  
- Saves the messages in Google Sheets (organized by date)  
- Creates a clean, structured summary using GPT-4o  
- Saves the summary in Google Drive as a doc  
- Can run daily at a set time (fully automated)

---

## How to set it up

1. Connect your Evolution API and provide the group ID  
2. Use this [Google Sheets template](https://docs.google.com/spreadsheets/d/1eLLLHHdkkaBjtu2qtqqwrLBbcGM49kwZq-TMky5y5Oc/edit?usp=sharing)  
3. Connect Google Sheets and Google Drive in n8n  
4. Add your OpenAI API key  
5. (Optional) Adjust the AI prompt for a custom tone or structure

---

✅ Works on both **n8n Cloud** and **Self-hosted**  
🔐 All credentials stay safe in n8n

---

## Want to customize this for your group or business?  
❤️ Buy Workflows: https://iloveflows.gumroad.com  
💬 Hire My Services: +5517991557874 (WhatsApp)

---
---
## Tradução em Português (pt-br):
### Oi! Eu sou a Amanda 💬
Se você participa de grupos movimentados no WhatsApp e quer transformar tudo isso em resumos diários organizadinhos, esse fluxo foi feito com todo carinho pra você!

Ele conecta com a **API da Evolution**, coleta as mensagens trocadas em grupos, armazena tudo no **Google Sheets**, e no fim do dia gera um **resumo completo** usando **GPT-4o**. Esse resumo é salvo como documento no seu Google Drive — pronto pra ser lido, compartilhado ou arquivado.

Ideal pra equipes, comunidades, projetos colaborativos ou até grupos de estudos 📚

---

## O que o fluxo faz

- Monitora e salva conversas do grupo no Google Sheets  
- Gera resumos diários com IA (formato estruturado e pronto pra leitura)  
- Salva o resumo como documento no seu Google Drive  
- Funciona com qualquer grupo conectado à sua conta Evolution  
- Pode ser agendado pra rodar automaticamente todo fim de dia

---

## Como configurar

1. Conecte sua API Evolution e informe o ID do grupo  
2. Use essa [planilha modelo](https://docs.google.com/spreadsheets/d/1eLLLHHdkkaBjtu2qtqqwrLBbcGM49kwZq-TMky5y5Oc/edit?usp=sharing) para armazenar as mensagens  
3. Conecte sua conta do Google (Sheets + Drive)  
4. Adicione sua chave da OpenAI  
5. Personalize o prompt do resumo (opcional)

---

✅ Compatível com n8n Cloud e Auto-hospedado  
🔐 Tudo seguro, simples e sem complicações

---

## Quer adaptar esse fluxo pro seu sistema?  
❤️ Buy Workflows: https://iloveflows.gumroad.com  
💬 Hire My Services: +5517991557874 (WhatsApp)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Schedule Trigger, Summarization Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
