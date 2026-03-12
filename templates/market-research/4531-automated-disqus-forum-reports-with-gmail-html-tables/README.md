# 📊 Automated Disqus forum reports with Gmail HTML tables

> ⚡ **137 views** · 📊 [Market Research & Insights](../)

## Description

## Who is this for?
This workflow is intended for forum organizers on disqus, forum automation learning to be able to read forum contents through clean data. In reality, we have to first see the contents of the forum and read them one by one, such as likes, comments, messages, this is very time consuming. With a workflow system like this, it will automate the process and shorten the time, meaning we only need to read clean data. This is also a form of devotion to the community at n8n and the n8n company, as well as devotion to forum organizers on disqus so that reality is no longer tiring and is able to answer existing reality problems.

## How does it work?
Easy explanation:

Manual Trigger will run the four existing disqus nodes, after that using account credentials, will take the conditions in the forum based on the data, after the data is obtained it will be selected and classified via the merge node, after that the merge node will all be neatly one, then the function node to tidy up and clean the data containing the code will make it work, and the table function node in html will work to send a message to the gmail node as a notification which contains a clean data report and is ready to be read comfortably And enjoy the workflow that suits you.

## Setup instructions
Complete what is in the node as stated in the notes column.
You need a "Credential Account" on each Disqus node, then write the name of the forum that you have created in each Disqus parameter node. If you already have an account, just connect it, and if not, create it first, you can register it by following the guide from n8n, it's very easy.
Because here it has been arranged neatly and cleanly like in the merge and function nodes. Next, you need to connect the account credentials in the gmail node. After that, don't forget to add an email address to the Gmail node for notification of the success or failure of each customer from the running of this system.
Save and run, test the workflow and activate the workflow. This workflow is ready to use.

## Requirements
As a reminder:

There must be (if not, make sure it is registered) in each "Credential Account" by following the guide on how to create it n8n the guide is very complete
Don't forget to save, and make sure the workflow is active.

## How to customize this workflow to your needs
You can directly set the merge or function variable data in these nodes, to suit your wishes, but here I have made everything completely.

## 🔗 Nodes Used

Disqus, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
