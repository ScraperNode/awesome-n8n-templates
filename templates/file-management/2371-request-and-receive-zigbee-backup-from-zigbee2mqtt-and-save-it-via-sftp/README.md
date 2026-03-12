# 📁 Request and receive Zigbee backup from zigbee2mqtt and save it via SFTP

> ⚡ **1,940 views** · 📁 [File Management](../)

## Description

A single workflow with 2 flows/paths that combine to handle the backup sequence for Zigbee device configuration from HomeAssistant / zigbee2mqtt.  This provides a way to automate a periodic capture of Zigbee coordinators and device pairings to speed the recovery process when/if the HomeAssistant instance needs to be rebuilt.  Setting up similar automation without n8n (e.g. shell scripts and system timers) is consiterably more challenging.  n8n makes it easy and this template should remove any other excuse not to do it.

## Flow 1
* Triggered by Cron/Timer
  * set whatever interval for backups
  * sends mqtt message to request zigbee2mqtt backup (via separate message)

## Flow 2
* Triggered by zigbee2mqtt backup message
* Extracts zip file from the message and stores somewhere, with a date-stamp in the filename, via sftp

## Setup
* Create a MQTT connection named **"MQTT Account"** with the appropriate protocol (mqtt), host, port (1883), username, and password
* Create an sftp connection named **"SFTP Zigbee Backups"** with the appropriate host, port (22), username, and password or key.

## Reference
* [This article](https://home-assistant-guide.com/changelog/zigbee2mqtt/zigbee2mqtt-1-26-0/you-can-now-back-up-your-complete-zigbee2mqtt-configuration/) describes the mqtt parts.

## 🔗 Nodes Used

FTP, MQTT Trigger, MQTT, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
