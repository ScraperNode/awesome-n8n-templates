# 🎫 Modular & customizable AI-powered email routing: text classifier for eCommerce

> ⚡ **4,671 views** · 🎫 [Ticket Management & Triage](../)

## Description

### **How It Works**
1. **Form Submission**:
   - The workflow starts with the **On form submission** node, which triggers when a user submits a contact form. The form collects the user's name, email, and message.

2. **Text Classification**:
   - The **Text Classifier** node uses an AI model (GPT-4) to classify the submitted message into one of the predefined categories:
     - **Request Quote**: For quote requests.
     - **Product info**: For general product inquiries.
     - **General problem**: For issues or problems related to products.
     - **Order**: For questions about placed orders.
     - **Other**: For any messages that don’t fit the above categories.

3. **Email Routing**:
   - Based on the classification, the workflow routes the message to the appropriate department via email:
     - **Prod. Dep.**: For product-related inquiries.
     - **Quote Dep.**: For quote requests.
     - **Gen. Dep.**: For general problems.
     - **Order Dep.**: For order-related questions.
     - **Other Dep.**: For all other inquiries.
   - Each email includes the user's name, email, message, and the classified category.

4. **Data Logging**:
   - The workflow logs the form submission and classification results into a Google Sheets document. Each department has its own sheet where the data is appended, including:
     - User’s name, email, and message.
     - Submission date and time.
     - Assigned category.
     - Email recipient details.

5. **AI Model Integration**:
   - The **OpenAI** node provides the AI model (GPT-4) used by the **Text Classifier** to classify the messages. The model is instructed to classify the text into one of the predefined categories without additional explanations.

---

### **Set Up Steps**
1. **Configure the Form Trigger**:
   - Set up the **On form submission** node to collect user inputs (name, email, and message) and trigger the workflow.

2. **Set Up the Text Classifier**:
   - Configure the **Text Classifier** node to use the OpenAI model (GPT-4) for text classification.
   - Define the categories and their descriptions (e.g., "Request Quote", "Product info", etc.).
   - Set the fallback category to "Other" for unclassifiable messages.

3. **Configure Email Sending**:
   - Set up the **Email Send** nodes for each department (Prod. Dep., Quote Dep., Gen. Dep., Order Dep., Other Dep.).
   - Configure the email subject, body, and reply-to address using the form data and classification results.
   - Ensure SMTP credentials are correctly configured for sending emails.

4. **Set Up Google Sheets Integration**:
   - Configure the **Google Sheets** nodes to append data to the appropriate sheets for each department.
   - Map the form data (name, email, message, date, category, and recipient) to the corresponding columns in the Google Sheets document.

5. **Test the Workflow**:
   - Submit a test form to ensure the workflow correctly classifies the message, sends the email to the right department, and logs the data in Google Sheets.
   - Verify that the OpenAI model is classifying messages accurately.

6. **Activate the Workflow**:
   - Once tested, activate the workflow to automate the process of handling contact form submissions.

---

### **Key Features**
- **Automated Classification**: Uses AI to classify messages into relevant categories, reducing manual effort.
- **Email Routing**: Sends emails to the appropriate department based on the classification.
- **Data Logging**: Logs all form submissions and classification results in Google Sheets for tracking and analysis.
- **Scalability**: Easily adaptable to additional categories or departments by modifying the workflow.

This workflow is ideal for eCommerce businesses or customer support teams looking to automate and streamline the handling of contact form submissions.

----
### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Send Email, Google Sheets, OpenAI Chat Model, n8n Form Trigger, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
