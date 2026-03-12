# 🔬 📦 AI-powered damage reporting tool for logistics with Gmail, Telegram and GPT

> ⚡ **406 views** · 🔬 [Document Extraction & Analysis](../)

## Description

*Tags: Logistics, Supply Chain, Warehouse Operations, Paperless processes, Quality Management*

### Context

Hi! I’m [Samir](https://samirsaci.com) — Supply Chain Engineer, Data Scientist based in Paris, and founder of [LogiGreen](https://logi-green.com).

&gt; Let us use n8n to help small companies digitalise their logistics and supply chain!

This workflow helps warehouse operators generate a complete damage report without needing to write anything manually.

[![Workflow Overview](https://www.samirsaci.com/content/images/size/w1000/2025/11/image-44.png)](https://youtu.be/3Xdo1pzd8rw)

In warehouse operations, damaged pallets must be reported quickly and consistently. 
 
You can automate the entire process using **AI to analyse photos of the damages**.

📬 For business inquiries, you can find me on [LinkedIn](https://www.linkedin.com/in/samir-saci)

### Example of damage report

The process starts with instructions sent with the operator: 

[![Telegram Instructions](https://www.samirsaci.com/content/images/2025/11/image-28.png)](https://youtu.be/3Xdo1pzd8rw)

A photo of the damaged pallets is shared with the bot:

![Damaged Pallet](https://www.samirsaci.com/content/images/2025/11/image-30.png)

A complete report is generated and sent by email:

[![Email Screenshot](https://www.samirsaci.com/content/images/2025/11/image-27.png)](https://youtu.be/3Xdo1pzd8rw)

### 🎥 Tutorial

A complete tutorial (with explanations of every node) is available on YouTube:

[![Tutorial + Demo](https://www.samirsaci.com/content/images/2025/11/temp-14.png)](https://youtu.be/3Xdo1pzd8rw)

### Who is this template for?

This template is ideal for companies with limited IT ressources:

- **Warehouse operators** who need a fast reporting tool  
- **Quality teams** who want consistent and structured reports  
- **3PLs and logistics providers** looking to digitalise damage claims  
- **Manufacturers and retailers** with high inbound pallet volumes  
- **Anyone using Telegram** on the warehouse floor for quick interactions

### What does this workflow do?

This workflow acts as an **AI-powered damaged goods reporting assistant** using Telegram, OpenAI Vision and Gmail.

1. A operator sends a picture of the damaged pallet via **Telegram**.  
2. The workflow downloads the image and sends it to **GPT-4o** for damage analysis.  
3. The bot replies and asks for a **photo of the pallet barcode**.  
4. The barcode picture is processed by **GPT-4o Mini** to extract the pallet number.  
5. The workflow combines both results (damage analysis + pallet ID).  
6. It generates an **HTML email report** with: damage summary, observed issues, severity level and recommended actions   
7. The report is automatically sent via **Gmail** to the configured recipient.  
8. The operator receives a confirmation message in Telegram.

The processes does not require any data input form the operator, only to take pictures!


### Next Steps

Before running the workflow, follow the sticky notes and configure:

- Connect your **Telegram Bot API**  
- Add your **OpenAI API Key** in the AI nodes  
- Connect your **Gmail** credentials  
- Update the **recipient email** in the “Send Report by Email” node  

*Submitted: 20 November 2025*  
*Template designed with n8n version 1.116.2*

## 🔗 Nodes Used

Telegram, Telegram Trigger, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
