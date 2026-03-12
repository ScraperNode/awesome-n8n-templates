# 🔬 Automate student admission process with Excel, validation & email notifications

> ⚡ **615 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This automated n8n workflow processes student applications on a scheduled basis, validates data, updates databases, and sends welcome communications to students and guardians.

**Main Components**
* **Trigger at Every Day 7 am** - Scheduled trigger that runs the workflow daily
* **Read Student Data** - Reads pending applications from Excel/database
* **Validate Application Data** - Checks data completeness and format
* **Process Application Data** - Processes validated applications
* **Update Student Database** - Updates records in the student database
* **Prepare Welcome Email** - Creates personalized welcome messages
* **Send Email** - Sends welcome emails to students/guardians
* **Success Response** - Confirms successful processing
* **Error Response** - Handles any processing errors

**Essential Prerequisites**
* Excel file with student applications (student_applications.xlsx)
* Database access for student records
* SMTP server credentials for sending emails
* File storage access for reading application data

**Required Excel File Structure (student_applications.xlsx):**
* Application ID | First Name | Last Name | Email | Phone
* Program Interest | Grade Level | School | Guardian Name | Guardian Phone
* Application Date | Status | Notes

**Expected Input Data Format:**
```json
{
  "firstName": "John",
  "lastName": "Doe", 
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "program": "Computer Science",
  "gradeLevel": "10th Grade",
  "school": "City High School",
  "guardianName": "Jane Doe",
  "guardianPhone": "+1234567891"
}
```

**Key Features**
* **⏰ Scheduled Processing:** Runs daily at 7 AM automatically
* **📊 Data Validation:** Ensures application completeness
* **💾 Database Updates:** Maintains student records
* **📧 Auto Emails:** Sends welcome messages
* **❌ Error Handling:** Manages processing failures

**Quick Setup**
1. Import workflow JSON into n8n
2. Configure schedule trigger (default: 7 AM daily)
3. Set Excel file path in "Read Student Data" node
4. Configure database connection in "Update Student Database" node  
5. Add SMTP settings in "Send Email" node
6. Test with sample data
7. Activate workflow

**Parameters to Configure**
* `excel_file_path`: Path to student applications file
* `database_connection`: Student database credentials
* `smtp_host`: Email server address
* `smtp_user`: Email username
* `smtp_password`: Email password
* `admin_email`: Administrator notification email

## 🔗 Nodes Used

Send Email, Microsoft Excel 365, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
