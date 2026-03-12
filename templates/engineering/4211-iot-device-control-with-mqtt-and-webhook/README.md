# ⚒️ IOT device control with MQTT and webhook

> ⚡ **2,461 views** · ⚒️ [Engineering](../)

## Description

. 

# IOT device control with MQTT and webhook


This workflow is for users wanting a practical example of how to control IOT systems using the MQTT protocol in an an n8n environment.

The template provides typical n8n MQTT and Webhook node implementation and configuration settings necessary to set IOT device inputs and outputs.

## How it works

A webpage with IOT control 'on and 'off' buttons is presented to the user. When a button is selected on the webpage the value is sent via a webhook to trigger the active workflow. The workflow set node then prepares the received value into a message payload. It then passes the message to the MQTT node for publishing the topic with the payload to a cloud based MQTT broker. A remote ESP32 micro-controller subscribes to the broker and reads the payload contained in the topic. The ESP32 will then toggle the GPIO pin depending on the topic payload value.


## The IOT control webpage

The webpage is a simple HTML page containing the  clickable 'on' and 'off' buttons. It also has the get webhook URL that sends the selected value to the n8n workflow in this case running locally.

 The URL webhook format is http://localhost:5678/webhook/pin-control?value=action

The webpage code

[IOT-control.html](https://drive.google.com/file/d/139Upql7RrXWgi6xljLPGbT0MbRP6nEkx/view?usp=sharing)

## IOT device 

The IOT device is an [ESP32](https://drive.google.com/file/d/1Wt7UPJ32BTm45JvkMW61rN6o7X6ZVGxX/view?usp=sharing) micro-controller running on a remote network. To keep it simple GPIO2 is selected as the control output.  In this case when the received value is "on" GPIO2 goes high a led will turn on in the ESP32. It will go off when the received value is "off".

The program for the ESP32 IOT control is 'main.py' . You will require a micropython interpreter to be uploaded to the ESP32 for the program to run automatically. The code can be easily edited and modified to accommodate any further attached IOT devices.

The ESP32 main.py code

[main.py](https://drive.google.com/file/d/1xlSvmKp6FJI3rtzxzLwolwFQpLHd2LTv/view?usp=sharing)


## How to customise this workflow to your needs

ESP32

* You will need a working ESP32 installed with a micro-python interpreter.
* The code main.py is provided.
* The main.py program can loaded and edited with a python IDE. I used Thonny for this example.
* Use a free MQTT broker to get started. I used "broker.emqx.io" in the code.

IOT Control Webpage

* The webpage contains HTML and can be easily edit to enhance functionality. The embedded webhook is configured for n8n production mode. http://localhost:5678/webhook/pin-control?value=action
* If you want to run the page in test mode you will use the following URL. 
* http://localhost:5678/webhook-test/pin-control?value=action


n8n workflow.

* The workflow is a good demonstration of how to control IOT devices using n8n.
* Following these steps will give a good insight for microcontroller automation.

## 🔗 Nodes Used

Webhook, MQTT

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
