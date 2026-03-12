# 🔬 Merge multiple Excel files into a single multi-sheet file with summary page

> ⚡ **983 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Overview

This workflow automates the process of merging multiple `.xlsx` files from a designated folder into a single, well-organized Excel workbook. Each input file is converted into its own sheet within the output file. Additionally, a summary sheet is generated at the beginning, providing a convenient overview of all merged files, including their original names and the number of records in each.

This is particularly useful for consolidating reports, combining data from different sources, or archiving multiple spreadsheets into one manageable file.

## How It Works

The workflow follows these key steps:

1.  **Trigger**: The process begins when you manually execute the workflow.
2.  **Read Files**: It reads all files ending with the `.xlsx` extension from the `/n8n_files/` directory (ensure your volume is mapped correctly).
3.  **Process Each File**: The workflow iterates through each file one by one. For each file, it extracts the data from the first sheet.
4.  **Collect and Clean Data**: A custom code node gathers the data from all files. It cleans the data by removing any completely empty rows and prepares it for the final Excel generation. The original filename is used to name the new sheet.
5.  **Generate Multi-Sheet Excel**: The core logic resides in a code node that uses the `xlsx` library. It creates a new Excel workbook in memory, adds a sheet for each processed file, and populates it with the corresponding data. It also creates a "Summary" sheet that lists all the source files and their record counts.
6.  **Save the Result**: The final workbook is saved as a new `.xlsx` file in the `/n8n_files/output/` directory with a timestamped filename (e.g., `合并文件_20250908T123000.xlsx`).

## Setup & Prerequisites

To use this workflow, you need to configure your n8n instance to allow and use the external `xlsx` npm module.

1.  **Place Your Files**: Put all the Excel files you want to merge into the folder that is mapped to `/n8n_files/` in your n8n container.
2.  **Enable External Module**:
      * Set the following environment variable for your n8n service in your `docker-compose.yml` file:
        ```yaml
        environment:
          - NODE_FUNCTION_ALLOW_EXTERNAL=xlsx
        ```
3.  **Install the Module**: You must build a custom Docker image for n8n that includes the `xlsx` library.
      * In the same directory as your `docker-compose.yml`, create a file named `Dockerfile`.
      * Add the following content to the `Dockerfile`:
        ```dockerfile
        FROM n8nio/n8n:latest
        USER root
        RUN npm install xlsx
        USER node
        ```
      * In your `docker-compose.yml`, replace the `image: n8nio/n8n...` line with `build: .` for the n8n service.
      * Rebuild and restart your n8n container using `docker-compose up --build -d`.

## Nodes Used

  * **Manual Trigger**: To start the workflow.
  * **Read Write File**: To read source files and save the final output file.
  * **Split In Batches**: To process files one by one.
  * **Extract From File**: To read the data from each `.xlsx` file.
  * **Code**: For custom JavaScript logic to process data and generate the final multi-sheet Excel file using the `xlsx` library.

## 🔗 Nodes Used

Read/Write Files from Disk, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
