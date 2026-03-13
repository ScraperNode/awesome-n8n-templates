# 🎣 Jotform to KlickTipp integration - webinar registration

> ⚡ **828 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.

## Description

![Jotform WF.png](fileId:1064)

**Community Node Disclaimer**: This workflow uses KlickTipp community nodes.

**How It Works:**  

Jotform Webinar Registry Integration: This workflow streamlines the process of handling webinar registrations submitted via JotForm. It ensures the data is correctly formatted and seamlessly integrates with KlickTipp.  
Data Transformation: Input data is validated and transformed to meet KlickTipp’s API requirements, including formatting phone numbers, converting dates, and validating URLs.  

**Key Features**  

**JotForm Trigger:**  
- Captures new form submissions, including participant details and webinar preferences.  

**Data Processing:**  
- Standardizes and validates input fields  
- Converts phone numbers to numeric-only format with international prefixes.  
- Transforms dates into UNIX timestamps.  
- Validates LinkedIn URLs and applies fallback URLs if validation fails.  
- Scales numerical fields, such as work experience, for specific use cases.  

**Subscriber Management in KlickTipp:**  
- Adds or updates participants as subscribers in KlickTipp.  
- Includes custom field mappings, such as:  
	- Personal information (name, email, phone number).  
	- Webinar details (chosen webinar, start date/time).  
	- Preferences (reminder intervals, questions for presenters).
- Tags contacts for segmentation: Adds fixed and dynamic tags to contacts.
  

**Error Handling:**  
- Validates critical fields like phone numbers, URLs, and dates to prevent incorrect data submissions.  

**Setup Instructions**  

**Install and Configure Nodes:**  
- Set up the JotForm and KlickTipp nodes in your n8n instance.  
- Authenticate your JotForm and KlickTipp accounts.  

**Custom Field Preparation in KlickTipp:**  
Create the necessary custom fields to match the data structure:  

| **Field Name**                          | **Field Type**   |
|-----------------------------------------|------------------|
| Jotform \| URL Linkedin                 | URL              |
| Jotform \| Workexperience in Years      | Decimal Number   |
| Jotform \| Webinar start timestamp      | Date & Time      |
| Jotform \| Questions/Notes              | Text             |
| Jotform \| Webinar                      | Text             |
| Jotform \| Reminder                     | Text             |


After creating fields, allow 10-15 minutes for them to sync. If fields don’t appear, reconnect your KlickTipp credentials.  

**Field Mapping and Adjustments:**  
Verify and customize field assignments in the workflow to align with your specific form and subscriber list setup.  

**Workflow Logic**  

1. **Trigger via JotForm Submission:** A new form submission from JotForm initiates the workflow  
2. **Data Transformation:** Processes raw form data to ensure compatibility with KlickTipp’s API.  
3. **Add to KlickTipp Subscriber List:** Adds participants to the designated KlickTipp list, including webinar-specific details.  
4. **Get all tags from KlickTipp and create a list:**
Fetches all existing Tags and turns them into an array

5. **Define tags to dynamically set for contacts:** Definiton of variables that are received from the form submission and should be converted into tags

6. **Merge tags of both lists:** Checks whether the list of existing tags in KlickTipp contains the tags which should be dynamically set based on the form submission

7. **Tag creation and tagging contacts:** Creates new tags if it previously did not exist and then tags the contact



**Benefits**  

**Efficient lead generation:** Contacts from forms are automatically imported into KlickTipp and can be used immediately, saving time and increasing the conversion rate.  
**Automated processes:** Experts can start workflows directly, such as welcome emails or course admissions, reducing administrative effort.  
**Error-free data management:** The template ensures precise data mapping, avoids manual corrections and reinforces a professional appearance.  

**Testing and Deployment:**  

Test the workflow by filling the form on Jotform and verifying data updates in KlickTipp.  

**Notes:**  

**Customization:** Update field mappings within the KlickTipp nodes to align with your account setup. This ensures accurate data syncing.  

**Resources:**  
- [Jotform KlickTipp Knowledge Base help article](https://www.klicktipp.com/de/support/wissensdatenbank/daten-jotform-uebertragen/)
- [Use KlickTipp Community Node in n8n](https://www.klicktipp.com/support/knowledge-base/install-klicktipp-node-n8n/)
- [Automate Workflows: KlickTipp Integration in n8n](https://www.klicktipp.com/support/knowledge-base/klicktipp-integration-n8n/)

## 🔗 Nodes Used

Jotform Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
