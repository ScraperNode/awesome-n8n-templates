# 📱 Send multiple emails in Gmail directly via Google Sheets

> ⚡ **53,020 views** · 📱 [Social Media & Email Marketing](../)

## Description

# Send multiple emails in Gmail directly via Google Sheets

[Video for workflow process](https://www.canva.com/design/DAF8VnLBBQA/BKog1CSHs7_goAYse3mEzQ/watch?utm_content=DAF8VnLBBQA&utm_campaign=designshare&utm_medium=link&utm_source=editor
)


In today's fast-paced digital world, businesses are constantly seeking ways to streamline their processes and enhance customer engagement. One powerful tool that facilitates these goals is n8n, an automation platform that allows users to create workflows to automate tasks and workflows.

## Benefits of the Workflow:

- **Efficiency**: By automating the process of sending emails to customers based on data from Google Sheets, this n8n workflow significantly reduces manual effort and saves time.
- **Accuracy**: The workflow ensures that emails are sent to the right recipients at the right time by filtering items based on specific conditions and the current date.
- **Personalization**: Personalized emails can be sent to customers based on the information provided in the Google Sheet, resulting in enhanced customer engagement.
- **Real-time Updates**: The workflow updates the Google Sheet with the status of the sent emails, providing real-time insights into the communication process.
- **Consistency**: Through automation, this workflow helps maintain consistency in communication with customers, ensuring a seamless experience.

## Workflow Overview:

The workflow begins with the "Google Sheets Trigger" node, which monitors a specified Google Sheet for new row additions. Upon detection of a new row, the workflow progresses to the "Filter Status (Waiting for sending)" node, where items are filtered based on specific conditions.

Subsequently, the workflow moves to the "Filter Items by Current Date" node, which filters items based on the current date. Items matching the current date are then processed further.

The filtered items are then forwarded to the "Gmail" node, where personalized emails are composed and sent to recipients based on the Google Sheet data. Finally, the workflow updates the Google Sheet using the "Google Sheets" node with the status of the sent emails and other relevant information.

## Copy this template to get started :
- [Google Sheets](https://docs.google.com/spreadsheets/d/1efCCzfeUX0AETz2wsULQN90OBCOKK-gBoDaptzcBHdE/edit?usp=sharing)

## Workflow Nodes Documentation:

1. [Schedule Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/)
2. [Filter Items by Current Date](https://docs.n8n.io/nodes/n8n-nodes-base.code.html)
3. [Gmail](https://docs.n8n.io/nodes/n8n-nodes-base.gmail.html)
4. [Google Sheets](https://docs.n8n.io/nodes/n8n-nodes-base.googleSheets.html)
5. [Filter Status (Waiting for sending)](https://docs.n8n.io/nodes/n8n-nodes-base.filter.html)
6. [Set data](https://docs.n8n.io/nodes/n8n-nodes-base.set.html)
7. [Merge feild](https://docs.n8n.io/nodes/n8n-nodes-base.merge.html)

## Conclusion:

In conclusion, this n8n workflow presents a powerful solution for automating email communication processes based on Google Sheets data. By leveraging automation, businesses can enhance their operational efficiency, accuracy, and customer engagement. The seamless integration of nodes in this workflow streamlines the communication process and ensures timely and personalized interactions with customers.

As businesses continue to prioritize efficiency and customer satisfaction, n8n workflows offer a versatile and effective means to achieve these objectives.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
