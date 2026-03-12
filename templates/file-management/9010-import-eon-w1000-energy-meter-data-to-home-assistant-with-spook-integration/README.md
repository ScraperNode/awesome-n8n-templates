# 📁 Import E.ON W1000 energy meter data to Home Assistant with Spook integration

> ⚡ **329 views** · 📁 [File Management](../)

## Description

### UPDATES:
* 2025-12-03 fix JS code in `calculate hourly sum` node

## E.ON W1000 → n8n → Home Assistant (Spook) “Integration”

This workflow processes emails from the E.ON portal containing 15-minute `+A` `-A` (import/export) data and daily `1.8.0`  `2.8.0` meter readings.  
It extracts the required columns from the attached XLSX file, groups the 15-minute values by hour, then:

* updates the Spook/Recorder statistics under the IDs `sensor.grid_energy_import` and `sensor.grid_energy_export`, and  
* sets the current meter readings for the entities `input_number.grid_import_meter` and `input_number.grid_export_meter`.

&gt; **You may need to modify the workflow if there are changes in how E.ON sends scheduled exports. If the exported data format changes, please report it on [Github](https://github.com/Netesfiu/EON-W1000-n8n)!**

## Requirements

* n8n (cloud or self-hosted)
  * HACS addon available here: [Rbillon59/home-assistant-addons](https://github.com/Rbillon59/home-assistant-addons)
  * [Official n8n Docker Compose template](https://docs.n8n.io/hosting/installation/server-setups/docker-compose/#6-create-docker-compose-file)
  * Simplified n8n Docker Compose template available on [Github](https://github.com/Netesfiu/EON-W1000-n8n/blob/main/n8n-docker-compose.yaml)
* (For Gmail) Gmail API authentication (OAuth2) **read-only** email access to the account receiving the messages  
  * Setup guide available [here](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service/)
* (For IMAP) IMAP provider credentials
* Home Assistant access via **Long-Lived Access Token** or API key  
  * Setup guide available [here](https://docs.n8n.io/integrations/builtin/credentials/homeassistant/)
* Spook integration  
  * Documentation and installation guide available [here](https://spook.boo)

## E.ON Portal Setup

1. Create a scheduled export on the E.ON portal with the following parameters:  
   * Under the *Remote Meter Reading* menu, click on the `+ new scheduled export setting` button.  
     * `Specify POD identifier(s)`: choose one of the PODs you want to query.  
     * `Specify meter variables`: select the following:
       * `+A Active Power Consumption`
       * `-A Active Power Feed-In`
       * `DP_1-1:1.8.0*0 Active Power Consumption Daily Reading`
       * `DP_1-1:2.8.0*0 Active Power Feed-In Daily Reading`
     * `Export sending frequency`: daily  
     * `Days of historical data to include`: recommended 7 days to backfill missed data.  
     * `Email subject`: by default, use `[EON-W1000]`. If processing multiple PODs with the workflow, give each a unique identifier.

## Home Assistant Preparation

1. Create the following `input_number` entities in `configuration.yaml` or via Helpers:

[![Helpers](https://my.home-assistant.io/badges/helpers.svg)](https://my.home-assistant.io/redirect/helpers/)

```yaml
input_number:
  grid_import_meter:
    name: grid_import_meter
    mode: box
    initial: 0
    min: 0
    max: 9999999999
    step: 0.001
    unit_of_measurement: kWh
  grid_export_meter:
    name: grid_export_meter
    mode: box
    initial: 0
    min: 0
    max: 9999999999
    step: 0.001
    unit_of_measurement: kWh
```
&gt; If you name the entities differently, make sure to reflect these changes in the workflow.

2. Create the following `template_sensor` entities in `configuration.yaml` or via Helpers:

[![Segéd entitások](https://my.home-assistant.io/badges/helpers.svg)](https://my.home-assistant.io/redirect/helpers/)
```yaml
input_number:
  grid_import_meter:
    name: grid_import_meter
    mode: box
    initial: 0
    min: 0
    max: 9999999999
    step: 0.001
    unit_of_measurement: kWh
  grid_export_meter:
    name: grid_export_meter
    mode: box
    initial: 0
    min: 0
    max: 9999999999
    step: 0.001
    unit_of_measurement: kWh
```
&gt;If you name the entities differently, make sure to reflect these changes in the workflow.

2. create the following `template_sensor` entities in config.yaml or via Helpers:

  [![Segéd entitások](https://my.home-assistant.io/badges/helpers.svg)](https://my.home-assistant.io/redirect/helpers/)

```yaml
template:
  - sensor:
      - name: "grid_energy_import"
        state: "{{ states('input_number.grid_import_meter') | float(0) }}"
        unit_of_measurement: "kWh"
        device_class: energy
        state_class: total_increasing
      - name: "grid_energy_export"
        state: "{{ states('input_number.grid_export_meter') | float(0) }}"
        unit_of_measurement: "kWh"
        device_class: energy
        state_class: total_increasing
```
&gt; If you name the entities differently, make sure to reflect these changes in the workflow.

## n8n import and authentication

1. **importing the workflow**

   * In n8n → *Workflows* → *Import from File/Clipboard* → paste the JSON.
   * Select the downloaded JSON and paste it into a new workflow using Ctrl+V.
2. **Set up n8n Credentials**
   The credentials must be configured in the Home Assistant and Gmail nodes. The setup process is described in the **Requirements** section.

## 🔗 Nodes Used

Email Trigger (IMAP), Rename Keys, Gmail, Home Assistant, Gmail Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
