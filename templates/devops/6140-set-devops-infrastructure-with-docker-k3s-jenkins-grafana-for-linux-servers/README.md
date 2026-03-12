# ⚙️ Set DevOps infrastructure with Docker, K3s, Jenkins & Grafana for Linux servers

> ⚡ **3,814 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This automated n8n workflow delivers an instant DevOps toolkit by installing Docker, K3s, Jenkins, Grafana, and more on a Linux server within 10 seconds. It optimizes performance, enhances security, and provides ready-to-use templates for DevOps projects.

## Main Components
- **Configure Parameters** - Defines server details, tool versions, and credentials
- **System Preparation** - Updates the system and installs base packages
- **Install Docker** - Deploys Docker Engine and Docker Compose
- **Install Kubernetes** - Sets up K3s cluster with kubectl, Helm, and k9s
- **Install Jenkins** - Configures Jenkins CI/CD server with Docker integration
- **Install Monitoring** - Deploys Prometheus and Grafana using Helm charts
- **Create DevOps User** - Establishes a dedicated user with appropriate permissions
- **Security Configuration** - Implements firewall, VS Code, and Terraform
- **Final Configuration** - Sets up sample projects and configuration files
- **Setup Complete** - Provides a summary and access details

## Essential Prerequisites
- Linux server with SSH access
- Root-level administrative privileges

## Customization Guide
- Adjust tool versions or credentials in the Configure Parameters node
- Modify the number of nodes or security settings as needed

## Features
- 🔧 **Core DevOps Tools Installed:**
  - Docker - Container platform with Docker Compose
  - Kubernetes - K3s (lightweight) with kubectl and Helm
  - Jenkins - CI/CD automation server
  - Prometheus - Monitoring and alerting
  - Grafana - Visualization and dashboards
- ⚡ **Optimizations Made:**
  - Streamlined Commands - Combined multiple operations into single bash scripts
  - Reduced Nodes - 10 nodes vs 12 in original (more efficient)
  - Better Error Handling - Each step includes verification
  - Cloud-Ready - Includes AWS CLI, Azure CLI, and Google Cloud SDK
  - Security First - Proper firewall configuration and user permissions

## Parameters to Configure
- server_host: Your Linux server IP address
- server_user: SSH username (typically 'root')
- server_password: SSH password
- docker_version: Docker version to install
- k3s_version: K3s version to install
- username: DevOps username
- user_password: Password for the DevOps user

## How to Use
- Copy the JSON code from the artifact
- Open your n8n workspace
- Select "Import from JSON" or "+" → "From JSON"
- Paste the JSON code
- Configure parameters in the "Configure Parameters" node with your server details
- Run the workflow

## Workflow Actions
- Install: Deploys Docker, K3s, Jenkins, Prometheus, and Grafana with optimizations
- Create User: Sets up a DevOps user with necessary permissions
- Configure: Applies security settings and provides templates

## 🔗 Nodes Used

SSH

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
