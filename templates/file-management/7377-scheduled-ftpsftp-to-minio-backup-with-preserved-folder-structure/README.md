# 📁 Scheduled FTP/SFTP to MinIO backup with preserved folder structure

> ⚡ **349 views** · 📁 [File Management](../)

## Description

# Automated FTP/SFTP to MinIO Object Backup with Scheduling

$\mapsto$ Can work with FTP/SFTP Servers like your Wordpress Website ! 

## What this workflow does ?

This workflow performs automated, periodic backups of files from a FTP or SFTP server directory to a MinIO S3 bucket running locally or on a dedicated container/VM/server. It can also work if the MinIO bucket is running on a remote cloud provider's infrastructure; you just need to change the URL and keys.

## Who's this intended for ?

Storage administrators, cloud architects, or DevOps who need a simple and scalable solution for retrieving data from a remote FTP or SFTP Server.

This can also be practical for Wordpress Devs that need to backup data from a server hosting a Wordpress Website. 

In that case, you'll just need to specify the folder that you want to backup (could be one from wordpress/uploads or even the root one)

## How it works

This workflow uses commands to list and download files from a specific directory on a FTP-SFTP Server, then send them to MinIO using their version of the S3 API.

The source directory can be a specific one or the entire server (the root directory)


## Requirements

None, just a source folder/directory on a FTP/SFTP Server and a destination bucket on MinIO. You'll also need to get MinIO running. You're using Proxmox VE ? Create a MinIO LXC Container : https://community-scripts.github.io/ProxmoxVE/scripts?id=minio

## Need a Backup from another Cloud Storage Provider ?

Need automated backup from another Cloud Storage Provider ?

$\mapsto$ Check out our templates, we've done it with AWS, Azure, and GCP, and we even have a version for FTP/SFTP servers!

$\odot$ These workflow can be integrated to bigger ones and modified to best suit your needs ! You can, for example, replace the MinIO node to another S3 Bucket from another Cloud Storage Provider (Backblaze, Wasabi, Scaleway, OVH, ...)

## 🔗 Nodes Used

FTP, S3, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
