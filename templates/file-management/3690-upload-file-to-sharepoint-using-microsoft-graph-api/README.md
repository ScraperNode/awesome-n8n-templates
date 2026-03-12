# 📁 Upload File to SharePoint Using Microsoft Graph API

> ⚡ **4,075 views** · 📁 [File Management](../)

## Description

This n8n workflow template allows you to upload a photo to a SharePoint folder using the Microsoft Graph API. The workflow includes steps for authentication, retrieving a photo for testing purposes, setting the destination folder and file name, and uploading the photo.

## Who is this for?

This workflow is ideal for users who need to automate the process of uploading images to SharePoint. It is particularly useful for developers, IT administrators, and anyone managing digital assets within a SharePoint environment.

## What problem is this workflow solving? / Use Case

This workflow addresses the need to automate the uploading of photos to a specific SharePoint folder. By using the Microsoft Graph API, it ensures secure and efficient file management, reducing manual effort and potential errors.

## What this workflow does

1. **Trigger the Workflow**: The workflow starts when the user clicks the 'Test workflow' button.
2. **Set Configuration**: Sensitive data such as `TENANT_ID`, `CLIENT_ID`, and `CLIENT_SECRET` are set.
3. **Authentication**: Obtains an access token from Microsoft Graph API using the provided credentials.
4. **Get Photo**: Retrieves a sample photo from a URL for testing purposes.
5. **Set Destination**: Sets the target folder and file name for the photo upload.
6. **Upload Photo**: Uploads the photo to the specified SharePoint folder using the Microsoft Graph API.

## Setup

### Prerequisites

1. **Create an Application User**: Follow [this guide](https://learn.microsoft.com/en-us/power-platform/admin/manage-application-users) to create an application user.
2. **Set Permissions**: Ensure the following permissions are set:
   - `Sites.ReadWrite.All`: For SharePoint site access.
   - `Files.ReadWrite.All`: For file upload operations.

### Authentication

For successful authentication, provide the following:
- `TENANT_ID`
- `CLIENT_ID`
- `CLIENT_SECRET`

**Note**: For demonstration purposes, these values are stored in a 'Set' node. In a production environment, ensure the safety of such data using credentials, secure vaults, or other safe methods.

### Set Destination

The destination is defined by two parameters:
- `TARGET_FOLDER`: The folder path in SharePoint where the photo will be uploaded.
- `FILE_NAME`: The name of the file to be uploaded.

**Example**:
- Desired file location: `https://contoso.sharepoint.com/uploads/pictures from n8n/example.jpg`
- Set the following:
  - `TARGET_FOLDER` = `/uploads/pictures from n8n`
  - `FILE_NAME` = `example.jpg`

## How to Customize This Workflow to Your Needs

1. **Update Sensitive Data**: Replace the placeholder values for `TENANT_ID`, `CLIENT_ID`, and `CLIENT_SECRET` with your actual credentials.
2. **Change Destination**: Modify the `TARGET_FOLDER` and `FILE_NAME` parameters to match your desired upload location and file name.
3. **Test with Different Photos**: Update the URL in the 'Get Photo' node to test with different images.

## Sticky Notes

### Workflow Overview

This sticky note explains the overall purpose and dependencies of the workflow.

### Authentication Details

This sticky note provides details on the authentication process and the importance of securing sensitive data.

### Set Destination Details

This sticky note explains how to set the destination folder and file name for the photo upload.

By following these guidelines, you can easily customize and use this workflow to automate photo uploads to SharePoint using the Microsoft Graph API.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
