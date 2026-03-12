# 🔒 IP geolocation & HTTP port scanning with Google Sheets

> ⚡ **513 views** · 🔒 [SecOps & Security Automation](../)

## Description

# Automate IP geolocation and HTTP port scanning with Google Sheets trigger

This n8n template automatically enriches IP addresses with geolocation data and performs HTTP port scanning when new IPs are added to a Google Sheets document. Perfect for network monitoring, security research, or maintaining an IP intelligence database.

## Who's it for

Network administrators, security researchers, and IT professionals who need to:
- Track IP geolocation information automatically
- Monitor HTTP service availability across multiple ports
- Maintain centralized IP intelligence in spreadsheets
- Automate repetitive network reconnaissance tasks

## How it works

The workflow triggers whenever a new row containing an IP address is added to your Google Sheet. It then:

1. **Fetches geolocation data** using the ip-api.com service to get country, city, coordinates, ISP, and organization information
2. **Updates the spreadsheet** with the geolocation details
3. **Scans common HTTP ports** (80, 443, 8080, 8000, 3000) to check service availability
4. **Records port status** back to the same spreadsheet row, showing which services are accessible

The workflow handles both successful connections and various error conditions, providing a comprehensive view of each IP's network profile.

## Requirements

- **Google Sheets API access** - for reading triggers and updating data
- **Google Sheets document** with at least an "IP" column header

## How to set up

1. **Create a Google Sheet** with columns: IP, Country, City, Lat, Lon, ISP, Org, Port_80, Port_443, Port_8000, Port_8080, Port_3000
2. **Configure Google Sheets credentials** in both the trigger and update nodes
3. **Update the document ID** in the Google Sheets Trigger and both Update nodes to point to your spreadsheet
4. **Test the workflow** by adding an IP address to your sheet and verifying the automation runs

## How to customize the workflow

- **Modify port list**: Edit the "Edit Fields" node to scan different ports by changing the ports array
- **Add more geolocation fields**: The ip-api.com response includes additional fields like timezone, zip code, and AS number
- **Change trigger frequency**: Adjust the polling interval in the Google Sheets Trigger for faster or slower monitoring
- **Add notifications**: Insert Slack, email, or webhook nodes to alert when specific conditions are detected
- **Filter results**: Add IF nodes to process only certain IP ranges or geolocation criteria

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
