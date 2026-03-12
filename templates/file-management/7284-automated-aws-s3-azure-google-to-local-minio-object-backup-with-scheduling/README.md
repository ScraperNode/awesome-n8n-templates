# 📁 Automated AWS S3 / Azure / Google to local MinIO object backup with scheduling

> ⚡ **716 views** · 📁 [File Management](../)

## Description

# Automated AWS S3 / Azure / Google to local MinIO Object Backup with Scheduling

## What this workflow does ?

This workflow performs automated, periodic backups of objects from an AWS S3 bucket, an Azure Container or a Google Storage Space to a MinIO S3 bucket running locally or on a dedicated container/VM/server. It can also work if the MinIO bucket is running on a remote cloud provider's infrastructure; you just need to change the URL and keys.

## Who's this intended for ?

Storage administrators, cloud architects, or DevOps who need a simple and scalable solution for retrieving data from AWS, Azure or GCP.

## How it works

This workflow uses the official AWS S3 API to list and download objects from a specific bucket, or the Azure BLOB one, then send them to MinIO using their version of the S3 API.  


## Requirements

None, just a source Bucket on your Cloud Storage Provider and a destination one on MinIO. You'll also need to get MinIO running. 

You're using Proxmox VE ? Create a MinIO LXC Container : https://community-scripts.github.io/ProxmoxVE/scripts?id=minio

## Need a Backup from another Cloud Storage Provider ?

Need automated backup from another Cloud Storage Provider ?

$\mapsto$ Check out our templates, we've done it with AWS, Azure, and GCP, and we even have a version for FTP/SFTP servers!

For a dedicated source Cloud Storage Provider, please contact us !

$\odot$ These workflow can be integrated to bigger ones and modified to best suit your needs ! You can, for example, replace the MinIO node to another S3 Bucket from another Cloud Storage Provider (Backblaze, Wasabi, Scaleway, OVH, ...)

## 🔗 Nodes Used

AWS S3, S3, Google Cloud Storage, Schedule Trigger, Azure Storage

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
