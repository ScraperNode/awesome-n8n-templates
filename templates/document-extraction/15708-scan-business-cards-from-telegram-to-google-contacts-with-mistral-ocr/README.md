# 🔬 Scan business cards from Telegram to Google Contacts with Mistral OCR

> ⚡ **74 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow **automates the process of scanning business cards** received via **Telegram** and instantly saving the extracted contact information into **Google Contacts**. It combines **OCR technology**, AI-powered data extraction, and workflow automation to eliminate manual contact entry and reduce errors. 

The workflow validates authorized users, processes business card images, extracts structured information such as names, company details, phone numbers, email addresses, and addresses, and automatically creates a new contact in Google Contacts. Finally, it sends a confirmation message back to the user via Telegram. 

---

### Key Benefits

#### 1. ✅ Fully Automated Contact Management

The workflow removes the need for manual typing of business card information by automatically converting images into structured contact data and saving them directly into Google Contacts.

#### 2. ✅ Faster Lead Collection

Users can instantly save new contacts during meetings, conferences, networking events, or sales activities simply by sending a photo of a business card to Telegram.

#### 3. ✅ AI-Powered Data Extraction

Using Mistral OCR and OpenAI models, the workflow accurately extracts and structures contact information even from complex or differently formatted business cards.

#### 4. ✅ Improved Data Accuracy

The workflow minimizes human errors typically caused by manual data entry, ensuring standardized and reliable contact information.

#### 5. ✅ Secure User Validation

Only authorized Telegram users can trigger the workflow, adding an additional layer of security and preventing unauthorized usage.

#### 6. ✅ Seamless Integration

The automation integrates multiple services:

* Telegram for image submission and notifications
* Mistral OCR for text recognition
* OpenAI for intelligent information extraction
* Google Contacts for automatic contact creation

#### 7. ✅ Real-Time Feedback

After processing the business card, the workflow sends an automatic success or error notification directly to the user on Telegram.

#### 8. ✅ Scalable and Customizable

The workflow can easily be extended with additional features such as:

* CRM integration
* Contact enrichment
* Duplicate detection
* Multi-language business card support
* Lead scoring and tagging


####  Business Value

This workflow is ideal for:

* Sales teams
* Business networking
* Event management
* Entrepreneurs
* Recruitment agencies
* CRM data collection

It significantly increases operational efficiency, accelerates lead management, and creates a smoother digital workflow for handling professional contacts.


---

### How it works

1. **Telegram trigger** – The workflow starts when a message is sent to the Telegram bot.
2. **Authorization check** – A Code node verifies if the message comes from an authorized Telegram user ID.
3. **Message validation** – The workflow checks that:
   - The message contains a photo.
   - The caption starts with `/business`.
4. **Image retrieval** – The bot fetches the highest‑quality photo from the message.
5. **OCR extraction** – The image is sent to **Mistral OCR** (via HTTP Request) to extract text from the business card.
6. **Information extraction** – The extracted text is passed to an **Information Extractor** (powered by an OpenAI chat model) which parses the card and returns structured fields:  
   `company_name`, `first_name`, `last_name`, `role`, `phone`, `email`, `website`, `street_address`, `city`, `region`, `country_code`, `postal_code`.
7. **Create Google Contact** – A Google Contacts node creates a new contact using the extracted data (addresses, company, emails, phone).
8. **Success check** – An IF node checks if the contact was created successfully (by verifying `resourceName` exists).
9. **Telegram reply** – The bot sends a confirmation message (“Contact successfully added”) or an error message to the user.

---

### Set up steps

1. **Telegram bot**  
   - Create a Telegram bot via [@BotFather](https://t.me/BotFather).  
   - Add the bot’s API token as a credential in n8n (name: `Telegram account Fastewb`).

2. **User authorization**  
   - Find your Telegram user ID (e.g., by using @userinfobot).  
   - In the **Code** node, replace `XXX` with your numeric user ID.

3. **Mistral OCR**  
   - Get an API key from Mistral AI.#
   - Create an **HTTP Bearer Auth** credential in n8n named `Mistral OCR` with that key.  
   - The node uses `https://api.mistral.ai/v1/ocr` with a base64‑encoded image.

4. **OpenAI chat model**  
   - Obtain an OpenAI API key.  
   - Create an **OpenAi API** credential in n8n (name: `OpenAi account (Eure)`).  
   - The workflow uses `gpt-5.4-mini` – ensure this model is available or change it to `gpt-4o-mini` / `gpt-3.5-turbo`.

5. **Google Contacts**  
   - Set up **Google OAuth2** credentials in n8n with access to Google Contacts API.  
   - The node will create contacts under the authenticated Google account.

6. **Activate the workflow**  
   - Save the workflow.  
   - Set the **Telegram Trigger** to `Active`.  
   - In Telegram, send a photo with the caption `/business` to the bot to test.

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Google Contacts, OpenAI Chat Model, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
