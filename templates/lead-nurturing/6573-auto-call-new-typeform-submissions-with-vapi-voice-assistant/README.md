# 💬 Auto-call new Typeform submissions with Vapi voice assistant

> ⚡ **584 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

This n8n automation connects your **[Typeform](https://typeform.cello.so/e2pbXQKsijA)** forms with **[Vapi AI](https://vapi.ai/?aff=onenode)**, allowing you to **immediately call new form respondents** with a personalized message from a Vapi AI assistant, as soon as a form submission is received.

## 🧾 Requirements

### Typeform
- A [**Typeform**](https://typeform.cello.so/e2pbXQKsijA) account
- Typeform **personal access token** and **credentials** enabled in n8n
- A **Typeform form** published that includes a phone number field

### Vapi
- A [**Vapi**](https://vapi.ai/?aff=onenode) account with credit
- A connected **phone number** to make calls
- An **assistant** created and ready to make calls
- Your **Vapi API key**

### 🔗 Useful Links
- [n8n Typeform Credentials Setup](https://docs.n8n.io/integrations/builtin/credentials/typeform/)
- [Vapi Docs](https://docs.vapi.ai/)

---

## 🔄 Workflow Breakdown

### 1. **Trigger: Typeform Submission**
- Triggered when a new response is submitted to your Typeform.
- The form must include a phone number field.

### 2. **Wait 2 Minutes**
- Adds a short delay before proceeding.
- Useful to ensure form data is fully synced or to give time for related automations.

### 3. **Set Vapi Fields (Manual Step)**
- Set the required fields for the Vapi API call:
  - `phone number id` - connected in Vapi
  - `assistant id` - the assistant enabled in the call
  - `Vapi API key` - your secure API key

### 4. **Start Outbound Vapi Call**
- Sends a **POST** request to `https://api.vapi.ai/call`
- Payload includes:
  - Respondent’s phone number (from Typeform)
  - Vapi assistant id
  - Vapi phone number id to initiate the call

---

## ✏️ Template Customization Guidance

### How to Adapt for Your Specific Needs

- **Personalize the Call Content:**  
  Include additional fields in your Typeform (e.g., first name, interest, location). In n8n, map these form fields into the payload sent to Vapi. Update your Vapi assistant’s prompt/script to reference these variables for a highly personalized experience.

- **Conditional Call Logic:**  
  Use n8n's logic nodes (e.g., IF, Switch) to, for example:  
    - Only trigger calls if a respondent checks a checkbox (e.g., consent or interest).
    - Use a different Vapi assistant or phone number based on responses (e.g., language preference or location).

- **Advanced Routing:**  
  Configure the workflow to choose different assistants, phone numbers, or call scripts based on the respondent’s answers. Store assistant IDs or numbers as environment variables or reference them from a lookup table for dynamic selection.

---

## 📞 Examples: Using Form Data to Personalize Calls

- **Greeting by Name:**  
  If your Typeform collects `first_name`, map it into the Vapi payload. Your assistant script can begin, "Hi {{first_name}}, thanks for your interest in XYZ!"

- **Custom Message Based on Product Interest:**  
  Add a `product_interest` field in Typeform. Pass its value to Vapi and have the assistant mention the product, e.g., “I see you’re interested in our Premium Plan…”

- **Reference Appointment Times or Locations:**  
  Collect `appointment_time` and/or `city` fields, and tailor the call to reconfirm booking details using these inputs.

---

## 🛠️ Troubleshooting & Tips

- **Call Not Triggering:**  
  Ensure your Typeform webhook connection and credentials are correctly set up in n8n. Check that your workflow is active and the trigger node is configured for the correct form.

- **Invalid Phone Number Format:**  
  Vapi requires numbers in full international format (e.g., `+11234567890`). Use n8n expressions to clean or verify the incoming number if needed.

- **Missing Data in the Call:**  
  Confirm that additional fields (e.g., `first_name`) exist in the Typeform response and that your mapping in n8n matches the exact field names.

- **Failed API Call:**  
  Double-check your Vapi phone number id, assistant id, and API key. Use n8n’s execution logs to inspect the payload sent to Vapi for debugging.

- **Duplicate Calls:**  
  If your Typeform allows multiple submissions, add logic in n8n to check for and avoid duplicate calls, for example by maintaining a record of called numbers.

---

## 🙋‍♂️ Need Help?

Feel free to contact us at [**1 Node**](https://1node.ai)
Get instant access to a library of [**free resources**](https://1node.ai/resources) we created.

## 🔗 Nodes Used

HTTP Request, Typeform Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
