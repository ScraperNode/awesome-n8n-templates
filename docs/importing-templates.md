# Importing Templates into n8n

## Method 1: Import from File

1. Download the `.json` template file from this repository
2. Open your n8n instance
3. Click **Add workflow** (or press `Ctrl/Cmd + N`)
4. Click the **...** menu in the top right
5. Select **Import from File**
6. Choose the downloaded `.json` file

## Method 2: Import from URL

1. Copy the raw GitHub URL of the template file
2. In n8n, click **Add workflow** > **...** > **Import from URL**
3. Paste the URL and click **Import**

To get the raw URL: click the template file on GitHub, then click the **Raw** button.

## Method 3: Copy/Paste

1. Open the template `.json` file on GitHub
2. Click **Raw** to see the plain JSON
3. Select all and copy (`Ctrl/Cmd + A`, then `Ctrl/Cmd + C`)
4. In n8n, create a new workflow
5. Press `Ctrl/Cmd + V` to paste the workflow

## After Importing

Most templates require you to set up credentials:

- Click on any node with a warning icon
- Configure the required credentials (API keys, OAuth connections, etc.)
- See our [Credential Setup Guide](credential-setup.md) for common services

## Troubleshooting

- **"Unknown node type" error**: The template uses a community node. Install it from **Settings > Community Nodes**.
- **Version mismatch**: Some templates require a specific n8n version. Update n8n if you encounter errors.
- **Missing credentials**: Check each node and connect your own credentials.
