# 🔬 Auto-send FireFlies meeting summaries via email using Gemini 2.5 Pro

> ⚡ **152 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow automatically processes [Fireflies.ai](https://app.fireflies.ai/login?referralCode=01K0V2Z1QHY76ZGY9450251C99) **meeting recap emails**, extracts the meeting transcript, generates a structured summary email, and sends it to a designated recipient.


---

### **Key Advantages**

* #### **1.  ✅ Full Automation of Meeting Summaries**

	The workflow eliminates all manual steps from receiving the Fireflies email to sending a polished summary. This ensures:

	* No delays
	* No forgotten recaps
	* No repetitive manual tasks

* #### **2. ✅ Accurate Extraction of Meeting Information**

	Using AI-based information extraction and custom parsing, the workflow reliably identifies:

	* The correct meeting link
	* The Fireflies meeting ID
	* Relevant transcript data

	This avoids human error and ensures consistency.

* #### **3. ✅ High-Quality, AI-Generated Email Summaries**

	The Gemini-powered summary generator:

	* Produces well-structured, readable emails
	* Includes decisions, action items, and discussion points
	* Automatically crafts a professional subject line
	* Uses real content (no placeholders)

This results in clear, usable communication for recipients.

* #### **4. ✅ Robust Error-Free Data Handling**

	The workflow integrates custom JavaScript steps to:

	* Parse URLs safely
	* Convert AI responses into valid JSON
	* Ensure correct formatting before email delivery

This guarantees the message is always properly structured.

* #### **5. ✅ Professional Formatting**

	By converting Markdown to HTML, the summary:

	* Is visually clear
	* Displays well on all email clients
	* Enhances readability for recipients

* #### **6. ✅ Easily Scalable and Adaptable**

	The workflow can be expanded to:
	* Send summaries to multiple recipients
	* Add storage (e.g., Google Drive)
	* Trigger based on additional conditions
	* Integrate with CRMs or project management tools

---


### **How It Works**

1. **Trigger**  
   The workflow starts with a Gmail Trigger that checks for new emails with the subject `"Your meeting recap"` from `fred@fireflies.ai` every hour.

2. **Email Processing**  
   When a matching email is found, the workflow retrieves the full email content and extracts the meeting recap URL using an **Information Extractor** node powered by OpenAI GPT-4.1-mini.

3. **Meeting ID Extraction**  
   A **Code Node** extracts the meeting ID from the Fireflies URL (between `::` and `?`) for use in the next step.

4. **Transcript Fetching**  
   The meeting ID is sent to the **Fireflies Node**, which retrieves the full transcript and summary data (short summary, short overview, and full overview).

5. **AI-Powered Email Generation**  
   The meeting summary data is passed to a **Google Gemini** node, which generates a complete meeting summary email with a subject line and body in JSON format.

6. **Data Formatting**  
   The raw JSON output is parsed in a **Code Node**, and the email body is converted from Markdown to HTML using the **Markdown Node**.

7. **Email Delivery**  
   Finally, the email is sent via Gmail with the AI-generated subject and HTML body.

---

### **Set Up Steps**

1. **Configure Credentials**  
   - Set up Gmail OAuth2 credentials for email triggering and sending.  
   - Add Fireflies.ai API credentials for fetching transcripts.  
   - Configure OpenAI and Google Gemini API keys for AI processing.

2. **Adjust Email Filters**  
   Update the Gmail Trigger filters (`subject` and `sender`) if Fireflies.ai uses a different sender or subject format.

3. **Customize Output Email**  
   Modify the recipient email in the **Send email** node to the desired address.

4. **Optional: Modify AI Prompts**  
   Adjust the system prompts in the **Information Extractor** and **Email Agent** nodes to change extraction behavior or email tone.

5. **Activate Workflow**  
   Ensure the workflow is set to **Active** in n8n, and test it by sending a sample Fireflies recap email to your connected Gmail account.

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Gmail, Markdown, Gmail Trigger, OpenAI Chat Model, Information Extractor, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
