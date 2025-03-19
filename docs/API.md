---
title: API
---



## Team Definitions

### Team Bytes

| Type |  Byte  |
| -----------| ----------- |
| Start |   |
| Stop |  |

### Team Addresses

| Name |  Address  |
| -----------| ----------- |
| Noah Brent | N  |
|Evan Skinner| E |
|Kirk Volin| K |
|Hunter Hassebroek| H |

### MQTT Sent Messages
#### Message Type 14 - (Master System Reset)
##### Broadcast message from remote user to trigger reset on all systems

|  |  Byte 1     |  
| -----------| ----------- |
|Variable Name| masterReset  | 
|Variable Type| char  | 
|Value| RST  |
|Example| RST |

#### Message Type 13 - MQTT Signal Verification
##### Message sent to HMI to display MQTT signal quality

|  |  Byte 1     | 
| -----------| ----------- |
|Variable Name| mqttSignal  | 
|Variable Type| uint8_t  | 
|Min| 0  |
|Max| 100 | 
|Example| 34 |  

#### Message Type 15 - MQTT Error State
##### Message sent to HMI to display error state in HMI

|  |  Byte 1     | Byte 2| 
| -----------| ----------- | -- |
|Variable Name| mqttError  | uint8_t |
|Variable Type| uint8_t  | Address of Error |
|Min | 0  | Z (Null letter) |
|Max | 5 | Address of Error |
|Example| 3 |  K |

Error Types:

0: Not connected to WiFi
1: Data Overflow Received
2: Unknown Address Received
3: Invalid Message Received
4: No Communication Received (in a specified time range, ex. 1 minute)



### MQTT Received Messages

#### Message Type 2, 14, 17 - System Information 
##### Sensor/Motor/HMI data to be displayed on MQTT


|  |  Byte 1     | Byte 2 | Byte 3 |
| -----------| ----------- | -- | -- |
|Variable Name| HMI_Data  | Motor_Data   | Sensor_Data  |
|Variable Type| uint8_t  |  uint8_t   | uint8_t   |
|Min| 0  |    |   |
|Max| 3 |     |   |
|Example| 2 |      |   |

HMI Data includes user's inputted control value
Motor Data includes motor switching speeds
Sensor Data includes sensor trigger speeds

#### Message Type 3, 8, 20 - Subsystem Error 
##### Error State in a Specific Subsystem, displayed over MQTT for debugging purposes

|  |  Byte 1     | Byte 2 | Byte 3 |
| -----------| ----------- | -- | -- |
|Variable Name| Error_Type  | Address Received   |   |
|Variable Type| uint8_t  |  uint8_t   | uint8_t   |
|Min| 0  |  Z (Null Letter)  |   |
|Max| 50 |  Address of Error   |   |
|Example| 12 |   E   |   |

Error type received is specified in the subsystem that sent the error message.