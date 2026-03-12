# 🎬 Automated FAQ generator from WhatsApp groups using GPT-4 and Google Docs

> ⚡ **152 views** · 🎬 [Content Creation & Video](../)

## Description

## What’s up guys, I’m Luís 🙋🏻‍♂️

If you manage learning programs, communities, or customer groups on WhatsApp, this workflow will save your life. It’s your **AI-powered FAQ engine**.

This workflow captures group conversations (via Google Sheets), identifies the most common doubts and recurring questions, and automatically builds a structured FAQ document with suggested answers.

⚠️ **Important note**  
To use this workflow, you must already have all WhatsApp conversations saved into a Google Sheet.  
If you don’t have this yet, check out my other workflow that does exactly that: [Workflow to Summary Group WhatsApp](https://n8n.io/workflows/7141-workflow-to-summary-group-whatsapp/).



## ✅ What this workflow does

- Runs weekly (every Monday 6am)  
- Pulls all conversations from your Google Sheet  
- Groups messages by week into structured blocks  
- Sends blocks to an AI Agent to detect FAQs  
- AI extracts recurring questions, explains context, and suggests answers  
- Creates a new FAQ document in Google Docs based on a template  
- Keeps everything organized and accessible for the team  


## 🧩 Flow Structure

**Part 1 – Data Capture & Weekly Blocks**  
- Retrieves group messages from Google Sheets  
- Organizes them by ISO week number  
- Prepares clean message blocks for AI analysis  

**Part 2 – AI FAQ Builder**  
- AI Agent analyzes the messages  
- Extracts FAQs with suggested responses  
- Generates a new Google Doc FAQ every week  



## 🔧 Tools used

✅ Google Sheets (message log database)  
✅ OpenAI (AI analysis & FAQ generation)  
✅ Google Docs (automatic FAQ output)  
✅ Schedule Trigger (weekly automation)  


## 🌟 Why this workflow stands out

📊 Turns raw WhatsApp conversations into **weekly FAQ reports**  
🤖 AI not only detects questions, but also **suggests answers**  
🚀 Automated, scalable and perfect for communities and teams  
📝 Delivers a ready-to-use FAQ doc every week  

✅ Works on both n8n Cloud and Self-hosted  
🔐 100% secure. No hacks. No shortcuts.  

---

Want to adapt this flow for your business, education program, or internal team?  

📩 Custom requests: WhatsApp me at **+55 34 99256-9346**

---

## 🇧🇷 Português (PT-BR)

### Fala, galera! Eu sou o Luís 🙋🏻‍♂️  
Se você gerencia cursos, comunidades ou grupos de clientes no WhatsApp, esse fluxo vai salvar sua vida. É o seu **FAQ automático com IA**.

Ele pega as conversas que já estão salvas em uma planilha do Google Sheets, identifica as dúvidas mais recorrentes e gera um documento organizado com respostas sugeridas.

---

⚠️ **Atenção**  
Para usar esse fluxo, você precisa já ter todas as conversas do WhatsApp salvas em uma planilha no Google Sheets.  
Se você ainda não tem isso configurado, utilize meu outro workflow que faz exatamente esse processo: [Workflow to Summary Group WhatsApp](https://n8n.io/workflows/7141-workflow-to-summary-group-whatsapp/).

---

## ✅ O que esse fluxo faz

- Roda toda segunda-feira às 6h  
- Busca as mensagens salvas em sua planilha no Google Sheets  
- Agrupa por semana em blocos organizados  
- Envia para um Agente de IA que identifica dúvidas recorrentes  
- Gera explicações e respostas sugeridas  
- Cria automaticamente um novo documento FAQ no Google Docs  
- Mantém um histórico semanal claro e acessível  

---

## 🧩 Como o fluxo está estruturado

**Parte 1 – Captura & Blocos Semanais**  
- Puxa mensagens da planilha  
- Organiza por semana ISO  
- Prepara blocos para análise pela IA  

**Parte 2 – FAQ Builder com IA**  
- Agente de IA analisa blocos  
- Extrai dúvidas recorrentes e sugere respostas  
- Cria um documento FAQ atualizado no Google Docs  



## 🔧 Ferramentas utilizadas

✅ Google Sheets (base de mensagens)  
✅ OpenAI (análise & geração de FAQ)  
✅ Google Docs (documento automático)  
✅ Agendamento semanal (gatilho)  

---

## 🌟 Por que esse fluxo se destaca

📊 Transforma mensagens de grupo em **relatórios semanais de FAQ**  
🤖 IA identifica dúvidas e já entrega **respostas prontas**  
🚀 Escalável para qualquer comunidade ou programa educacional  
📝 Documento novo toda semana, sem esforço manual  

✅ Compatível com n8n Cloud e Self-hosted  
🔐 100% seguro. Sem gambiarras.  

---

Quer adaptar esse fluxo pro seu negócio, curso ou comunidade?  

📩 Solicitação personalizada: me chama no WhatsApp **+55 34 99256-9346**

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Docs, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
