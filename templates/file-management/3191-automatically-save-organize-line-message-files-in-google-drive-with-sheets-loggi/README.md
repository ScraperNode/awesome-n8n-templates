# 📁 Automatically save & organize LINE message files in Google Drive with Sheets logging

> ⚡ **4,759 views** · 📁 [File Management](../)

## Description

## Overview
This workflow automatically saves files received via LINE Messaging API into Google Drive and logs the file details into a Google Sheet. It checks the file type against allowed types, organizes files into date-based folders and (optionally) file type–specific subfolders, and sends a reply message back to the LINE user with the file URL or an error message if the file type is not permitted.

## Who is this for?
**Developers & IT Administrators:** Looking to integrate LINE with Google Drive and Sheets for automated file management.
**Businesses & Marketing Teams:** That want to automatically archive media files and documents received from users via LINE.
**Anyone Interested in No-Code Automation:** Users who want to leverage n8n’s capabilities without heavy coding.

## What Problem Does This Workflow Solve?
**Automated File Organization:** Files received from LINE are automatically checked for allowed file types, then stored in a structured folder hierarchy in Google Drive (by date and/or file type).
**Data Logging:** Each file upload is recorded in a Google Sheet, providing an audit trail with file names, upload dates, URLs, and types.
**Instant Feedback:** Users receive an immediate reply via LINE confirming the file upload, or an error message if the file type is not allowed.
## What This Workflow Does
**1. Receives Incoming Requests:**
* A webhook node (*"LINE Webhook Listener"*) listens for POST requests from LINE, capturing file upload events and associated metadata.

**2. Configuration Loading:**
* A Google Sheets node (*"Get Config"*) reads configuration data (e.g., parent folder ID, allowed file types, folder organization settings, and credentials) from a pre-defined sheet.

**Data Merging & Processing:**
* The *"Merge Event and Config Data"* and *"Process Event and Config Data"* nodes merge and structure the event data with configuration settings.
* A *"Determine Folder Info"* node calculates folder names based on the configuration. If Store by Date is enabled, it uses the current date (or a specified date) as the folder name. If Store by File Type is also enabled, it uses the file’s type (e.g., image) for a subfolder.

**4. Folder Search & Creation:**
* The workflow searches for an existing date folder (*"Search Date Folder"*).
* If the date folder is not found, an IF node (*"Check Existing Date Folder"*) routes to a *"Create Date Folder"* node.
* Similarly, for file type organization, the workflow uses a *"Search FileType Folder"* node (with appropriate conditions) to look for a subfolder, or creates it if not found.
* The *"Set Date Folder ID"* and *"Set Image Folder ID"* nodes capture and merge the resulting folder IDs.
* Finally, the *"Config final ParentId"* node sets the final target folder ID based on the configuration conditions:
  - **Store by Date: TRUE, Store by File Type: TRUE:** Use the file type folder (inside the date folder).
  - **Store by Date: TRUE, Store by File Type: FALSE:** Use the date folder.
  - **Store by Date: FALSE, Store by File Type: TRUE:** Use the file type folder.
  - **Store by Date: FALSE, Store by File Type: FALSE:** Use the Parent Folder ID from the configuration.

**5. File Retrieval and Validation:**
- A HTTP Request node (*"Get File Binary Content"*) fetches the file’s binary data from the LINE API.
- A Function node (*"Validate File Type"*) checks if the file’s MIME type is included in the allowed list (e.g., "audio|image|video"). If not, it throws an error that is captured for the reply.

**6. File Upload and Logging:**
- The *"Upload File to Google Drive"* node uploads the validated binary file to the final target folder.
- After a successful upload, the *"Log File Details to Google Sheet"* node logs details such as file name, upload date, Google Drive URL, and file type into a designated Google Sheet.

**7. User Feedback:**
- The *"Check Reply Enabled Flag"* node checks if the reply feature is enabled.
- Finally, the *"Send LINE Reply Message"* node sends a reply message back to the LINE user with either the file URL (if the upload was successful) or an error message (if the file type was not allowed).

## Setup Instructions
**1. Google Sheets Setup:**
* **Create a Google Sheet with two sheets:**
  - **config:** Include columns for Parent Folder Path, Parent Folder ID, Store by Date (boolean), Store by File Type (boolean), Allow File Types (e.g., “audio|image|video”), CurrentDate, Reply Enabled, and CHANNEL ACCESS TOKEN.
  - **fileList:** Create headers for File Name, Date Uploaded, Google Drive URL, and File Type.

For an example of the required format, check this Google Sheets template: [Google Sheet Template](https://docs.google.com/spreadsheets/d/1iO4ZHU7s0fe1Jn8jcScNDce7rFXQlkRBqsO8IFHbcSc/edit?usp=sharing)


**2. Google Drive Credentials:**
- Set up and authorize your Google Drive credentials in n8n.

**3. LINE Messaging API:**
* Configure your LINE Developer Console webhook to point to the n8n Webhook URL ("Line Chat Bot" node).
* Ensure you have the proper Channel Access Token stored in your Google Sheet.

**4. n8n Workflow Import:**
* Import the provided JSON file into your n8n instance.
* Verify node connections and update any credential references as needed.

**5. Test the Workflow:**
* Send a test message via LINE to confirm that files are properly validated, uploaded, logged, and that reply messages are sent.

## How to Customize This Workflow
* Allowed File Types: Adjust the *"Validate File Type"* field in your config sheet to control which file types are accepted.
* Folder Structure: Modify the logic in the "Determine Folder Info" and subsequent folder nodes to change how folders are structured (e.g., use different date formats or add additional categorization).
* Logging: Update the *"Log File Details to Google Sheet"* node if you wish to log additional file metadata.
* Reply Messages: Customize the reply text in the *"Send LINE Reply Message"* node to include more detailed information or instructions.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
