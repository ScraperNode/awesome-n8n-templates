# 🔬 AI-powered MIS agent

> ⚡ **1,174 views** · 🔬 [Document Extraction & Analysis](../)

## Description

The AI-powered MIS Agent is an intelligent, automated system built using n8n that streamlines email-based data collection and document organization for businesses. It classifies incoming emails, extracts and processes attachments or Drive links, and routes them to the correct destination folders in Google Drive. Additionally, it provides advanced file operations like cleaning, merging, joining, and transforming data.

### Advantages
📥 Automated Email and File Management
Detects and processes emails containing attachments or Drive links, ensuring seamless classification and routing of business-critical files.

### 🧠 AI-Based Classification
Uses LLMs (like GPT-4o Mini) to classify emails into categories such as Daily Sales, Customer Info, and Address based on their content.
### 📂 Smart File Routing and Upload
Recognizes whether a file is a direct attachment or a Google Drive link, extracts the file ID if necessary, and uploads it to predefined folders.
### 📊 Powerful Data Operations
Supports operations like append, join, group by, aggregation, and standardization of data directly from spreadsheets using Python and Pandas within the workflow.

### 🔁 Scheduled and Triggered Automation
Supports scheduled runs and real-time email triggers, making it highly reliable and timely.

### 🔧 Fully Modular and Scalable
Easily expandable with more logic, new folders, or different workflows. Clean architecture and annotations make maintenance simple.

### How It Works
#### Email Trigger
The system uses a Gmail trigger to monitor incoming emails with specific labels or attachments.

#### Classification
An LLM-based text classifier identifies the purpose of the email (e.g., sales data, address list, customer details).

#### Conditional Logic
Regex-based conditions check if the email contains Google Drive links or attachments.

#### File Handling
If it's a Drive link, it extracts the file ID and copies it to the correct folder. If it's an attachment, it uploads directly.

#### Scheduled Data Management
Periodically moves or logs files from predefined folders using a schedule trigger.

#### Data Cleaning and Processing
Performs data cleaning and transformation tasks like replacing missing values, standardizing formats, and joining datasets based on criteria provided by the user.

#### Final Output
Cleaned and processed files are saved in designated folders with their public links shared back through the system.

### Set Up Steps
Configure Nodes:
Gmail Trigger: Detects relevant incoming emails.

- Text Classifier: Uses OpenAI model to categorize email content.

- Regex Conditions: Determine whether a link or attachment is present.

- Google Drive Operations: Upload or copy files to categorized folders.

- Python Nodes: Handle data manipulation using Pandas.

- Google Sheets Nodes: Extract, clean, and write structured data.

- LLM-based Chat Models: Extract and apply cleaning configurations.

### Connect Nodes:
- Seamlessly connect Gmail inputs, classification, file processing, and data logic.

- Output links or processed files are uploaded back to Drive and ready to share.

- Credentials:
 Ensure OAuth credentials for Gmail, Google 
 Drive, and OpenAI are correctly set.

 ### Ideal For
- Sales & CRM teams managing large volumes of email-based reports.

- Data teams needing structured pipelines from unstructured email inputs.

- Businesses looking to automate classification, storage, and transformation of routine data.

### Testing and Additional customization

- If you want to test this bot capability 
  before purchasing the workflow.
  ask me on my mail 
  kumar.shivam19oce@gmail.com
  I will share the chat url and the links of 
  associated google drives to see the result
  once you are satisfied then we are good to 
  go.
  I have just kept $1 for testing purposes 
  because of paid open ai .
  

 -If there is any customization needed like charts and other request like adding databases feel free to let me know i can do it accordingly.

- This is the first version i will come with more advancements based on the request and responses.


### Use it and let me know on kumar.shivam19oce@gmail.com

## 🔗 Nodes Used

Google Sheets, Postgres, Google Drive, Gmail, Google Drive Trigger, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
