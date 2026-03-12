# ⚡ Send a message to Telegram on a new item saved to Reader

> ⚡ **3,306 views** · ⚡ [Personal Productivity](../)

## Description

## What is it

![workflow-screenshot](fileId:599)

This workflow aims to build a simple bot that will send a message to a telegram channel every time there is a new saved item to the Reader.

This workflow can be easily modify to support other way of sending the notification, thanks to existing n8n nodes.

Warning: **This is only for folks who already have access to the Reader, it won't work if you don't**

Also, this workflow use a file to store the last update time in order to not sync everything everytime.

## Setup

The config node :
* It contains the telegram channel id
* It also contains the file used as storage

To get the header auth, you have to :
1. Go to the reader
2. Open the devtools, Option + ⌘ + J (on macOS), or Shift + CTRL + J (on Windows/Linux)
3. Go to network and find a `profile_details/` request, click on it
4. Go to Request Headers
5. Copy the value for "Cookie"
6. In n8n, set the name of the Header auth account to `Cookie` and the value with the one you copied before

## 🔗 Nodes Used

Cron, Function, Function Item, HTTP Request, Read Binary File, Start

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
