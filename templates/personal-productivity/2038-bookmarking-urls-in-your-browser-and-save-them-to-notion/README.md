# ⚡ Bookmarking urls in your browser and save them to Notion

> ⚡ **2,229 views** · ⚡ [Personal Productivity](../)

## Description

Remember when you were doing some large research and wanted to quickly bookmark a page and save it, only to find premium options? Worry not; n8n got you covered.

You can now create a simple bookmarking app straight to your browser using simple scrips on your browser called bookmarklets.

A bookmarklet is a bookmark stored in a web browser that contains JavaScript commands that add new features to the browser.  

To create one, we need to add a short script to the bookmark tab of our browser like below
A simple hack is to open a new tab and click on the star that appears on the right side

![image.png](fileId:723)

Now that we have our bookmark, it's time for the fun part.

Right-click on the bookmark we just created and select the edit option. This will allow you to set the name you want for your bookmark and the destination URL. The URL used here will be the script that shall "capture" the page we want to bookmark.

The code below has been used and tested to work for this example

```Javascript

javascript:(() =&gt; {
  var currentUrl = window.location.href;
  var webhookUrl = 'https://$yourN8nInstanceUrl/webhook/1rxsxc04b027-39d2-491a-a9c6-194289fe400c';

  var xhr = new XMLHttpRequest();

  xhr.open('POST', webhookUrl, true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  var data = JSON.stringify({ url: currentUrl });

  xhr.send(data);
})();
```
Your Bookmark should look like something like this 

![image.png](fileId:724)


Now that we have this setup, we are now going to n8n to receive the data sent by this script.

Create a new webhook node that receives the POST request as in the workflow and replace $yourN8nInstanceUrl with your actual n8n instance.

This workflow can then be configured to send this data to a notion database. Make sure the notion database has all the required permissions before executing the workflow. Otherwise the URLs will not be saved

## 🔗 Nodes Used

Webhook, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
