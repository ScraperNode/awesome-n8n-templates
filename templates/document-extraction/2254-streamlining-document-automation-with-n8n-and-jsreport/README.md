# 🔬 Streamlining document automation with n8n and JSReport

> ⚡ **3,033 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Who is this template for?

This workflow template is designed for accounting, human resources, and IT project management teams looking to automate the generation of PDF and Word documents. It can be particularly useful for:

- The accounting department: for generating invoices in PDF format, thus streamlining the invoicing process and payment tracking.
- The human resources department: for creating employment contracts in PDF, simplifying the administrative management of employees.
- IT project management teams: for producing Word documents, such as project specifications, to clearly define project requirements and objectives.

#### Example result in mail

![invoice.png](fileId:794)

This PDF and Word document generation workflow offers a practical and efficient solution for automating administrative and document-related tasks, allowing teams to focus on higher-value activities.

## How it works

This workflow currently operates with an n8n form, but you can easily replace this form with a webhook triggered by an external application such as AirTable, SharePoint, DocuWare, etc.

Once the configuration information is retrieved, we fill the API request body of JSReport. The body is defined at the time of template creation in JSReport ([Example of JSReport usage](https://youtu.be/nz1SKdOKAhM?si=aMWGMgMuYCnky28z)).

Then, in a straightforward manner, we fetch the PDF and send it via email.

Here's a brief overview of this n8n workflow template: [Link to n8n workflow template presentation](https://youtu.be/jjjXCj3flPI?si=C73gd51ZeQ_l-1Bh)


## To summarize

1. This workflow integrates with an n8n form, but it's flexible to work with various triggering methods like webhooks from other applications such as AirTable, SharePoint, or DocuWare.
2. After configuring the necessary information, it populates the API request body of JSReport, which defines the template in JSReport.
3. Once the template is populated, it retrieves the PDF and sends it via email.
4. In essence, it streamlines the process of generating PDF documents based on user input and distributing them via email.

## Instructions:

1. Create a JSReport Account: Sign up for a JSReport account to create your PDF template model.
2. Define PDF Template in JSReport: Use JSON data from your system to set up the content of your PDF template in JSReport.
3. Configure HTTP Request in n8n: Use the HTTP Request node in n8n to send a request to JSReport. Set the node's body to the JSON data defining your PDF template.
Watch the Video: [For detailed setup guidance, watch the setup video](https://youtu.be/fRoRze7CBY4).

Remember, this template was created in n8n v1.38.2.

## 🔗 Nodes Used

HTTP Request, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
