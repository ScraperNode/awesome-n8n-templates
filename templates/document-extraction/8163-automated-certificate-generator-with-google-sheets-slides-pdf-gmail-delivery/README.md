# 🔬 Automated certificate generator with Google Sheets, Slides, PDF & Gmail delivery

> ⚡ **768 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### Automated Certificate Generator with Google Sheets, Slides, and Gmail Delivery 🎓

This workflow is designed for **educators, trainers, and event organizers** who want to automatically generate and send digital certificates.

It takes participant data from **Google Sheets**, personalizes a **Google Slides certificate template**, converts it into **PDF**, saves it in **Google Drive**, and emails it directly to participants using **Gmail**.

---

#### ✅ Setup Instructions

1. **Prepare Google Sheets**
   - Create a sheet with these required columns:  
     - **Name** → Participant’s full name  
     - **Email** → Recipient email address  
     - **Score** (optional) → For filtering or record keeping  
   - Add at least one row of test data.

2. **Create Google Slides Template**
   - Design your certificate (branding, colors, etc.).  
   - Add a placeholder `[NAME]` where the participant’s name should appear.  

3. **Set up Google Drive**
   - Create a folder to store generated PDF certificates.  
   - Copy the folder URL for use in the workflow.  

4. **Connect Google Services in n8n**
   - Add credentials for **Google Sheets, Google Slides, Google Drive, and Gmail**.  
   - Replace placeholders (`Sheet ID`, `Slides template ID`, `Destination folder ID`) in the workflow.  

5. **Customize Gmail Delivery**
   - Update the subject and body of the Gmail node.  
   - The certificate PDF will be automatically attached to each email.  

---

#### 🎨 Customization Options
- **Certificate Design**: Modify your Slides template (logos, colors, extra fields).  
- **Dynamic Fields**: Add placeholders like `[COURSE]` or `[DATE]` and map them from your sheet.  
- **Email Body**: Personalize with variables such as `{{$json["Name"]}}`.  
- **File Naming**: Adjust file naming in the "Copy File" and "Download File" nodes.  

---

This template streamlines certificate distribution, making it ideal for **schools, universities, training programs, and webinars**.

## 🔗 Nodes Used

Google Drive, Gmail, Google Slides, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
