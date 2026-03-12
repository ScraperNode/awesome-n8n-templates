# 📱 Syncing contacts with CentralStationCRM, Rapidmail, and Slack

> ⚡ **127 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Workflow Overview
This workflow benefits anyone who:
* wants to automate writing new contacts (with an associated 'Newsletter' tag) in CentralStationCRM to a Rapidmail list

## Tools in this workflow
* [CentralStationCRM](https://centralstationcrm.de), the simple and intuitive CRM for small teams. [Here is our API documentation](https://api.centralstationcrm.net/api-docs/index.html) if you want to modify the workflow.
* [Slack](https://slack.com/intl/de-de), brings people and information together
* [Rapidmail](https://rapidmail.de), the really good newsletter software

## Workflow Screenshot
![CSCRMtoRapidmailwithslackapproval.jpg](fileId:1847)

## Workflow Description
This workflow consists of:
* a schedule trigger (set to 5 pm/daily)
* three HTTP Requests to the CentralStationCRM API
* two if-Nodes as logic gates
* a Slack node
* a "Do nothing, end workflow" node

### The schedule trigger
The schedule trigger is set to trigger at 5 pm, every day.

The thinking here: If you added new contacts into CentralStationCRM during your workday, the workflow will collect them afterwards. You can of course set your own time.

### First HTTP Request: Get new people of the day
This node talks to the CentralStationCRM API and gets every newly created person of the day. Included are the tags, adresses, associated companies, and emails of the person.

### First if-gate: Does the person have a "Newsletter" tag?
If you tagged your person with "Newsletter" in CentralStationCRM after creating it, this if-node will see it.
-&gt; if true: go to last HTTP Request (Rapidmail list)
-&gt; if false: go to Slack node

### Slack node: ask if the person should get a "Newsletter" tag
Pretty much what the title says. The slack user sees a private message with the question "Should &lt;person&gt; be on your newsletter list" and can click "yes" or "no".

### second if-gate: Did the user click the "Yes"-button?
-&gt; if false: end workflow (do nothing node)
-&gt; if true: go to second HTTP request node

### second HTTP request: give person a "Newsletter" tag in CentralStationCRM
This node again talks to the CentralStationCRM API and creates a new tag for the person, called "Newsletter". This is so you know later that this person is also receiving your newsletter.

### last HTTP request node: write person's name and email on Rapidmail list
This node uses the Rapidmail API and the Rapidmail list ID to write a person with the "Newsletter" tag on a pre-created Rapidmail list for your newsletter.

## Customization ideas
With this workflow, you could
* change the interval the workflow triggers, i.e. to once per week. you'd have to change the JSON code in the second node to fetch all the new people per week instead of per day
* customize the slack approval message to include more information on the person than the name, i.e. the company the person works for
* take the beginning - give tag to person in CentralStationCRM, trigger workflow, check for tag, ask for approval in slack - and then do something else with the last node, i.e. write the person a mail in Gmail or write their info in a Google sheet or do a web research with ai on the person. Go experiment ab bit!

## Preconditions
For this workflow, you need:
* a CentralStationCRM account with API access
* an n8n account with API access
* a Rapidmail account with API access
* a Rapidmail recipient list

## Have fun with our workflow!

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
