# 🎣 Typeform to KlickTipp integration - quiz

> ⚡ **644 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![Typeform WF.png](fileId:1065)

**Community Node Disclaimer**: This workflow uses KlickTipp community nodes.

**How It Works:**  

Typeform Quiz Integration: This workflow streamlines the process of handling quiz answers submitted via Typeform. It ensures the data is correctly formatted and seamlessly integrates with KlickTipp.  
Data Transformation: Input data is validated and transformed to meet KlickTipp’s API requirements, including formatting phone numbers and converting dates.

**Key Features**

**Typeform Trigger:**  
- Captures new quiz submissions from Typeform, including user details and quiz responses.

**Data Processing and Transformation:**  
- Formats phone numbers to numeric-only format with international prefixes.  
- Converts dates (e.g., birthdays) to UNIX timestamps.  
- Maps multiple-choice quiz answers to string values for API compatibility.  
- Scales numeric quiz responses for tailored use cases.  

**Subscriber Management in KlickTipp:**  
- Adds participants as subscribers to a designated KlickTipp list, with custom field mappings for:  
  - Personal details (e.g., name, email, phone number, birthday).  
  - Quiz responses (e.g., intended usage of KlickTipp, company location, and team size).
 - Tags contacts for segmentation: Adds fixed and dynamic tags to contacts.  

**Error Handling:**  
- Handles empty or malformed data gracefully, ensuring clean submissions to KlickTipp.  

**Setup Instructions**  

**Install and Configure Nodes:**  
- Set up the Typeform and KlickTipp nodes in your n8n instance.  
- Authenticate your Typeform and KlickTipp accounts.  

**Prepare Custom Fields in KlickTipp:**  
- Create custom fields to store quiz answers and personal details, such as:  

 | **Field Name**                                     | **Field Type**   |
|----------------------------------------------------|------------------|
| Typeform \| URL Linkedin                           | URL              |
| Typeform \| Question 1 KlickTipp benefits          | Text             |
| Typeform \| Question 2 KlickTipp headquarter       | Text             |
| Typeform \| Question 3 Members CHT                 | Decimal Number   |

After creating fields, allow 10-15 minutes for them to sync. If fields don’t appear, reconnect your KlickTipp credentials.  

**Field Mapping and Adjustments:**  
Verify and customize field assignments in the workflow to align with your specific form and subscriber list setup.  

**Workflow Logic**  

1. **Trigger via Typeform Submission**:  
   The workflow initiates upon receiving a new quiz submission.  
2. **Transform Data for KlickTipp**:  
   Converts and validates data from Typeform to match KlickTipp’s API requirements.  
3. **Add to KlickTipp Subscriber List**:  
   Submits the cleaned data to KlickTipp, including all relevant quiz answers.  

4. **Get all tags from KlickTipp and create a list:** Fetches all existing Tags and turns them into an array

5. **Define tags to dynamically set for contacts:** Definiton of variables that are received from the form submission and should be converted into tags

6. **Merge tags of both lists:** Checks whether the list of existing tags in KlickTipp contains the tags which should be dynamically set based on the form submission

7. **Tag creation and tagging contacts:** Creates new tags if it previously did not exist and then tags the contact


**Benefits**  

**Efficient lead generation:** Contacts from forms are automatically imported into KlickTipp and can be used immediately, saving time and increasing the conversion rate.  
**Automated processes:** Experts can start workflows directly, such as welcome emails or course admissions, reducing administrative effort.  
**Error-free data management:** The template ensures precise data mapping, avoids manual corrections and reinforces a professional appearance.  

**Testing and Deployment**  

Test the workflow by filling the form on Typeform and verifying data updates in KlickTipp.  

**Notes**  

**Customization:** Update field mappings within the KlickTipp nodes to align with your account setup. This ensures accurate data syncing.  

**Resources:**  
- [Typeform KlickTipp Knowledge Base help article](https://www.klicktipp.com/de/support/wissensdatenbank/typeform-integration-n8n/)
- [Use KlickTipp Community Node in n8n](https://www.klicktipp.com/support/knowledge-base/install-klicktipp-node-n8n/)
- [Automate Workflows: KlickTipp Integration in n8n](https://www.klicktipp.com/support/knowledge-base/klicktipp-integration-n8n/)

## 🔗 Nodes Used

Typeform Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
