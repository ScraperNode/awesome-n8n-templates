# ⚡ Send an SMS to a number whenever you go out

> ⚡ **1,583 views** · ⚡ [Personal Productivity](../)

## Description

This workflow allows you to send an SMS to a number whenever you go out. 

![workflow-screenshot](fileId:366)

Pushcut is an app for iOS that lets you create smart notifications to kick off shortcuts, URLs, and online automation. 

You can have multiple actions for a notification. You can use the IF node to check which action was selected and build the workflow accordingly. 

**Pushcut Trigger node:** This node triggers the workflow when an action is selected by the user. 

**Twilio node:** The Twilio node sends an SMS with the input given by the user. 

Based on your use-case, you might want to do something else, for example, send a Tweet, dim or turn off your Philips Hue lights, add activity to Strava or play music on Spotify. Replace the Twilio node with these nodes to customize the workflow as per your needs.

## 🔗 Nodes Used

Start, Twilio, Pushcut Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
