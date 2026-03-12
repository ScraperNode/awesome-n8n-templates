# 📊 Analyze feedback using AWS Comprehend and send it to a Mattermost channel

> ⚡ **747 views** · 📊 [Market Research & Insights](../)

## Description

This workflow analyzes the sentiments of the feedback provided by users and sends them to a Mattermost channel.

![workflow-screenshot](fileId:425)

**Typeform Trigger node:** Whenever a user submits a response to the Typeform, the Typeform Trigger node will trigger the workflow. The node returns the response that the user has submitted in the form.

**AWS Comprehend node:** This node analyses the sentiment of the response the user has provided and gives a score.

**IF node:** The IF node uses the data provided by the AWS Comprehend node and checks if the sentiment is negative. If the sentiment is negative we get the result as `true`, otherwise `false`.

**Mattermost node:** If the score is negative, the IF node returns true and the true branch of the IF node is executed. We connect the Mattermost node with the true branch of the IF node. Whenever the score of the sentiment analysis is negative, the node gets executed and a message is posted on a channel in Mattermost.

**NoOp:** This node here is optional, as the absence of this node won't make a difference to the functioning of the workflow.

This workflow can be used by Product Managers to analyze the feedback of the product. The workflow can also be used by HR to analyze employee feedback. You can even use this node for sentiment analysis of Tweets.

To perform a sentiment analysis of Tweets, replace the Typeform Trigger node with the Twitter node.

Note: You will need a Trigger node or Start node to start the workflow.

Instead of posting a message on Mattermost, you can save the results in a database or a Google Sheet, or Airtable. Replace the Mattermost node with (or add after the Mattermost node) the node of your choice to add the result to your database.

## 🔗 Nodes Used

Typeform Trigger, Mattermost, AWS Comprehend

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
