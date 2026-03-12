# ⚒️ Remote IOT sensor monitoring via MQTT and InfluxDB

> ⚡ **2,119 views** · ⚒️ [Engineering](../)

## Description

. 

# Read and store IOT sensor data with the MQTT Trigger and InfluxDB

tonyduffy@protonmail.com


This workflow is for users wanting a practical example of how to obtain data from remote IOT systems using the MQTT protocol in an n8n environment.

The template provides typical n8n node implementation and configuration settings necessary to read and store IOT data.

The workflow reads the temperature and humidity data from a remote IOT system in this case a DHT22 sensor connected to a ESP32 micro controller. The data is parsed into the correct JSON format and then ingested in an InfluxDB data bucket. From there the stored temperature and humidity values can be displayed in real time.

The workflow can be easily modified to read any MQTT driven device data.

## Remote IOT Sensor Setup

The ESP32 controller with the DHT22 sensor are running on a Wokwi simulator.  The simulator uses micro python to publish a MQTT "wokwi-weather" topic with the temperature and humidity payloads to an online Mosquitto MQTT broker. The n8n MQTT trigger node subscribes to the topic on the broker and reads the payload values when any changes are published. The code node then prepares the payload for JSON format. The HTTP request node ingests the data in a InfluxDB bucket 

## How to customise this workflow to your needs

Wokwi IOT ESP32 simulator

* You will need to setup a free account at Wokwi.com
* Once created search for a project "Micro-Python MQTT Weather Logger (ESP32)"
* Then when the MQTT weather logger project is open change lines 28 and 29 to the following
    * 28 MQTT_CLIENT_ID = ""
    * 29 MQTT_BROKER    = "test.mosquitto.org"
* You then can start the simulation by clicking on the green arrow and it will connect the mosquitto broker and the "wokwi-weather" topic will be published.
* By clicking on the DHT22 sensor the temperature and humidity bar will appear and you can change the values to send updated payload values to the broker.

InfluxDB

 You will require access to functioning InfluxDB database to utilise this workflow

Note : You will have to provide the following for the HTTP request node to connect to InfluxDB.

* The URL and port of the desired InfluxDB (In this case the InfluxDB is running locally on port 8086 ie. http://localhost:8086.)
* InfluxDB bucket for the data. ( In this case the created bucket name is "wokwi-data")
* The Organization ID of the InfluxDB. This can be obtained for the InfluxDB admin page
* A generated API token to read and write to the InfluxDB bucket. Created from the InfluxDB admin

n8n workflow.

 * The MQTT trigger node is configured to subscribe to the "wokwi-weather" topic on the test Mosquitto MQTT broker. It reads the temperature and humidity data sent by ESP32.
 * The code node uses Javascript to move the temperature and humidity payloads to JSON format. This is flexible and can easily modified.
 * The HTTP request node posts the JSON payloads to the InfluxDB bucket.


 When the above is configured the workflow should function correctly.

Thanks to the many who have downloaded this template. Let me know on what you would like to build.  Contact me at tonyduffy@protonmail.com

## 🔗 Nodes Used

HTTP Request, MQTT Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
