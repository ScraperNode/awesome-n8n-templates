# 🔬 Generate bulk Google Slides certificates 📜 as PDFs and email them with Gmail

> ⚡ **88 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow automates the **bulk generation and delivery of personalized certificates** using Google Sheets, Google Slides, Google Drive, and Gmail. 

---

### Key Advantages

#### 1. ✅ Full Automation

The workflow fully automates the certificate generation and distribution process, from reading participant data to delivering the final PDF certificates via email, eliminating repetitive manual tasks.

#### 2. ✅ Bulk Certificate Generation

By reading data directly from **Google Sheets**, the workflow can generate and send personalized certificates for many recipients in bulk, making it ideal for courses, events, webinars, or training programs.

#### 3. ✅ Dynamic Personalization

Each certificate is automatically customized using placeholders in a **Google Slides template**, allowing the workflow to dynamically insert details such as the recipient’s name, certificate ID, or date.

#### 4. ✅ Automated PDF Export

After personalization, the workflow automatically converts the generated Google Slides document into a **PDF file**, ensuring a professional and standardized certificate format.

#### 5. ✅ Seamless Email Delivery

Certificates are automatically sent to recipients via **Gmail**, with the generated PDF attached, ensuring fast and reliable delivery without manual intervention.

#### 6. ✅ Process Tracking and Control

The workflow updates the corresponding row in **Google Sheets** after sending the certificate, marking it as processed. This prevents duplicate sends and provides clear visibility into which certificates have already been delivered.

#### 7. ✅ Automatic File Cleanup

Temporary Google Slides files created during the generation process are automatically deleted after use, keeping **Google Drive clean and organized**.

#### 8. ✅ Rate-Limit Safe Processing

A built-in **wait step** helps control the processing speed, reducing the risk of hitting Google API limits and ensuring stable execution when handling large batches of certificates.

#### 9. ✅ Easily Customizable

The workflow is modular and can be easily adapted to generate other types of documents such as **invoices, reports, badges, diplomas, or event confirmations** by simply modifying the Google Slides template and sheet structure.

---

### How it works

This workflow automates the process of generating personalized certificates in bulk from a Google Slides template and emailing them to recipients.

1.  **Trigger & Data Source:** The workflow is started manually ("Test workflow"). It first reads data from a Google Sheet (named "Certifications") that contains the recipient list, including their name, email, and a unique ID number ("N."). It filters this sheet to only process rows where the "Sent" column is empty.

2.  **Batch Processing:** The data is passed to a "Split In Batches" node, which processes the recipients one at a time to ensure each certificate is handled individually and to prevent API rate limits.

3.  **Certificate Generation (Per Recipient):**
    - **Copy Template:** For each person, the workflow creates a unique copy of a master Google Slides presentation (the certificate template). The copy is named using the recipient's ID (e.g., `Certificate_1`).
    - **Personalize Slides:** It then sends a request to the Google Slides API to replace placeholder text within the copied presentation. It replaces `[Name]`, `[Date]`, and `[N]` with the recipient's actual data.
    - **Export to PDF:** The personalized Google Slides file is exported as a PDF.
    - **Save PDF:** The generated PDF is saved to a specified folder ("n8n") in Google Drive. The filename includes the recipient's ID (e.g., `certificate_1.pdf`).

4.  **Notification & Cleanup:**
    - **Send Email:** A Gmail node sends a congratulatory email to the recipient's address. The previously generated PDF is automatically attached to this email.
    - **Mark as Processed:** The workflow updates the original Google Sheet, placing an "x" in the "Sent" column for the processed row to prevent duplicate processing in the future.
    - **Delete Temp File:** Finally, the unique copy of the Google Slides presentation (the intermediate file) is deleted from Google Drive, leaving only the final PDF.

5.  **Loop & Pacing:** After processing one recipient, the workflow waits for 10 seconds before moving to the next person in the list. This "Wait" node acts as a throttle to avoid overwhelming the Google APIs.
---


### Set up steps

To make this workflow work for you, you need to configure the following elements:

1.  **Prepare the Google Sheets Source:**
    - Create a Google Sheet with the following columns: `N.`, `First Name`, `Last Name`, `Email`, `Sent`.
    - Populate the sheet with your recipient data. Leave the `Sent` column blank for new entries.
    - **In the workflow:** Update the `documentId` in the **Read File** and **Mark as Processed** nodes to point to your specific Google Sheet.

2.  **Prepare the Google Slides Template:**
    - Create a Google Slides presentation to serve as your certificate template.
    - In the slides, insert the placeholder texts **exactly** as they appear in the workflow: `[Name]`, `[Date]`, and `[N]`. These are the strings that will be replaced.
    - **In the workflow:** Find the **Copy Slides Template** node and replace the `xxx` in the URL with the file ID of your Google Slides template. (The template ID is the long string in the middle of the presentation's URL).

3.  **Configure Google Drive Folders:**
    - Decide where in Google Drive you want the final PDFs to be saved.
    - **In the workflow:** In the **Save PDF to Drive** node, update the `folderId` property to the ID of your target folder.

4.  **Authenticate Google Services:**
    - The workflow uses three separate Google credentials (Drive, Slides, Sheets, Gmail). You must connect each node to your own Google account by creating or selecting the appropriate OAuth2 credentials within n8n for:
        - `googleDriveOAuth2Api`
        - `googleSlidesOAuth2Api`
        - `googleSheetsOAuth2Api`
        - `gmailOAuth2`

5.  **Verify Gmail Content:**
    - Review the HTML email body in the **Send a message** node. You can modify the text, colors, and the LinkedIn link as needed. Ensure the attachment is set to use the binary data from the **Export to PDF** node.

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
