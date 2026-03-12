# 💬 🤖 AI restaurant assistant for WhatsApp, Instagram & Messenger

> ⚡ **8,111 views** · 💬 [Support Chatbots](../)

## Description

#### Hi, I’m Amanda! 💌

This workflow was created with so much love, care, and attention… especially for you, who runs a restaurant, a cozy little burger place, or a delivery business full of heart. 🥰

I know how busy your days can be, so I made this sweet AI assistant to help you take care of your customers on WhatsApp, Instagram, Messenger (or Evolution API). It sends your beautiful menu, checks ZIP codes, creates payment links, and even notifies the kitchen when the order is ready. All gentle, all automatic, all with love. 💛

---

## 💡 What this workflow does

- Replies to customers via **WhatsApp API, Instagram Direct, Messenger**, and **Evolution API**  
- Checks ZIP codes to see if delivery is available using Google Maps  
- Sends your **menu as images**, because food should look as good as it tastes 🍕  
- Collects item selections and offers lovely upsells like drinks or extras  
- Creates payment links with the **Asaas API**  
- Confirms when the payment is complete and sends the order to the kitchen  
- Stores all messages and session data safely in **Supabase**  
- Uses **OpenAI GPT-4o** to talk naturally and kindly with your customers

---

## ⚙️ How to set it up (I’ll guide you with care 🧸)

1. Connect your webhook from WhatsApp, Instagram, Messenger, or Evolution API  
2. Create a Supabase table called `n8n_workflow_followup`  
   - You can use this ready-made template here:  
     👉 [Supabase Sheet Template](https://drive.google.com/file/d/1KUGb0ujyfwy1yUroxZTqpUp9c5-FTXf6/view?usp=sharing)  
3. Add your API keys (OpenAI, Supabase, Google Maps, and Asaas) securely in n8n  
4. Customize the AI prompt with your brand’s voice and sweet style 💫  
5. Set your delivery radius (default is 10km, but you can change it!)  
6. Upload your menu images (from Google Drive, your website, or any link)  
7. That’s it! Your assistant is now ready to serve with kindness and automation 💕

---

## 🍯 Works with:

✅ **n8n Cloud** and **Self-Hosted n8n**  
🔐 All API credentials are safely stored using n8n’s secure credential manager

---

## Want something customized just for you?
### Chat with me, I’d love to help 💻💛 [Chat via WhatsApp](https://wa.me/5517991557874) (+55 17 99155-7874)
.
.
.
### Tradução em Português:
#### Oi, eu sou a Amanda! 💌
Esse workflow foi feito com muito carinho, dedicação e cuidado... pensando especialmente em você, que tem um restaurante, lanchonete ou delivery cheio de amor pelo que faz. 🥰

Eu sei como o dia a dia pode ser corrido, e foi por isso que eu criei esse atendente com IA: pra te ajudar a responder clientes no WhatsApp, Instagram, Messenger (ou Evolution API), enviar cardápio com imagens lindas, calcular entregas, gerar links de pagamento e até avisar a cozinha. Tudo com jeitinho, sem complicação, e com muito coração. 💛

---

## 💡 O que esse fluxo faz

- Atende clientes pelo **WhatsApp API, Instagram Direct, Messenger** e **Evolution API**  
- Valida CEP e calcula se o cliente está dentro da área de entrega (usando Google Maps)  
- Envia **cardápio com imagens**, porque comer começa pelos olhos 🍕  
- Coleta os pedidos e também oferece bebidas e adicionais  
- Gera link de pagamento automaticamente com a **API do Asaas**  
- Confirma o pagamento e avisa a cozinha quando estiver tudo certo  
- Armazena mensagens, horários e histórico no **Supabase**  
- Usa o **GPT-4o da OpenAI** pra conversar de forma educada e natural com seus clientes

---

## ⚙️ Como configurar (com meu passo a passo cheio de cuidado 🧸)

1. Conecte seu webhook do WhatsApp, Instagram, Messenger ou Evolution API  
2. Crie uma tabela no Supabase chamada `n8n_workflow_followup`  
   - Você pode usar esse modelo aqui:  
     👉 [Planilha modelo Supabase](https://drive.google.com/file/d/1KUGb0ujyfwy1yUroxZTqpUp9c5-FTXf6/view?usp=sharing)  
3. Adicione suas chaves de API do OpenAI, Google Maps, Supabase e Asaas no gerenciador do n8n  
4. Personalize o prompt da IA com o nome do seu restaurante, estilo de fala e sua magia 💫  
5. Defina a distância máxima de entrega (padrão: 10km)  
6. Coloque seus próprios links de imagens do cardápio (pode ser do Drive, site ou CDN)  
7. Prontinho! Agora o seu restaurante tem um atendente inteligente, gentil e muito eficiente 💕

---

## 🍯 Funciona com:

✅ **n8n Cloud** e **n8n auto-hospedado**  
🔐 E suas credenciais ficam guardadinhas com segurança no próprio n8n, tá bom?

---

## Quer algo feito especialmente pra você?
### Fala comigo com todo carinho 💻💛 [Falar no WhatsApp](https://wa.me/5517991557874) (+55 17 99155-7874)

## 🔗 Nodes Used

Function, HTTP Request, Webhook, Google Drive, Google Drive Trigger, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
