# 📁 Track MPESA and Airtel mobile payments in a fundraising WhatsApp group

> ⚡ **72 views** · 📁 [File Management](../)

## Description

## Try It Out!
### This n8n templates assists with keeping track of mobile payments within a fundraising WhatsApp group.

Use cases: We fundraise alot using whatsapp groups in East Africa, especially in Kenya ! Keeping track of each payment and the tallying requires alot of manual effort and brings unnecessary tension in cases of Errors of Commision or Ommision.

Works with MPESA and AIRTEL MONEY, for now.


### How it works
* Connect you twillio account / mobile number to the webhook.
* Send whatsapp message or web chat.
* We use simple regex to classify the text of the message. 
* A switch node routes payment messages based on the *payment service provider*. The message may be a request for the current total or an instruction to end the campaign and clear the payment logs.
* A Gemini node will handle deviations from payments topic
* Clearing may be necessary in case of mistakes since we provide no edit function. It may also be necessary to avoid mixing payments of a previous fundraising campaign with the current one.
* Payment information is extracted from the message accoding to the SMS format of the service provider. This is then saved to a data table.
* After each payment, or a request for summary, all payments related to the sender/groupid are fetched and taken to the next node for summarization.
* A merge node is used to bring in the message metadata (from, to, ) to assist in whatsapp reply via twillio

### How to use
* As the treasurer / payee keep SMS receipts of all incoming mobile payments.
* Each SMS receipt will contain the amount and the senders details, among other info.
* Send each one by one via whatsapp to the phone number above or web chat.

### Requirements
* Twillio account - for whatsapp
* Accessible webhook url
* This example uses a data table `payment_table` but an SQL node is recommended for production use


### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

## 🔗 Nodes Used

Function, Twilio, Webhook, Chat Trigger, Google Gemini, Chat

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
