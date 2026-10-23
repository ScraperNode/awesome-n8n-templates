# 👥 Generate tailored CV and Cover Letter from job links

> ⚡ **292 views** · 👥 [HR & Recruitment](../)

## Description

How it works
-
- This Workflow automatically creates a new CV and Cover Letter based on the job description and your Current CV.

How to set it up
-
-  Create API keys for Google sheet [Link](https://console.cloud.google.com/apis), Google Docs [Link](https://console.cloud.google.com/apis) and OpenRouter [link](https://openrouter.ai/workspaces/default/keys/)
-- If you do not know how to create and add an API key, then simply search on Google, and you will find a solution.

- Create a new Google Sheet in your Google Drive with the name "Job IDs" and also add 3 columns with names "JobLink, CoverLetter, and CV." 
- Then create a 2 Google Docs in your Google Drive with the names Cover Letter and CV.
- Linked them with the respective node in the workflow
- Add this code into Google sheet "APP Script" -&gt; "function callN8n(e) {
  var range = e.range;
  if (range.getColumn() == 1) { 
    // This is the combined URL from your terminal + n8n path
    var url = "https://pronounce-surround-curtsy.ngrok-free.dev/webhook/3d23f43d-9d38-45ba-9ad1-b696a2b97905";
    
    var options = {
      "method": "post",
      "headers": {
        "ngrok-skip-browser-warning": "true"
      },
      "payload": JSON.stringify({
        "JobLink": e.value,
        "row": range.getRow()
      }),
      "contentType": "application/json"
    };
    
    UrlFetchApp.fetch(url, options);
  }
}"

Contact Detail
-
- dhaval.variya07@gmail.com
- [Linkedin](https://www.linkedin.com/in/dhaval-variya-b917861aa/)
- [YouTube](http://www.youtube.com/@AI-with-DhavalVariya)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Docs, AI Agent, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
