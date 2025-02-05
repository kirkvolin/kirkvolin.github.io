---
title: Component Selection
---


# Major Component Selection

## Power Regulator

| Solution 1  | Pros                                                                                        | Cons                                      |
|:-----------:|:-------------------------------------------------------------------------------------------:|:-----------------------------------------:|
|LM2576HVS-3.3| 3.3V Fixed Output                                                                           |   Most Expensive                          |
|![LM2576HVS-3.3](https://github.com/kirkvolin/kirkvolin.github.io/blob/main/assets/Component%20Selection/LM2575HVS-3.3.png?raw=true)             | Large footprint makes hand soldering easier                                                 |   Unfamiliar Manufacturer                 |
|[Digikey](https://www.digikey.com/en/products/detail/umw/LM2576HVS-3-3/16705917)             | Requires minimal external components                                                        |   Somewhat confusing component datasheet    |
|             | High current output allows more components to operate from this regulator if needed.        |                                           |

| Solution 2 | Pros                                                                                          |Cons                                      |
|:----------:|:---------------------------------------------------------------------------------------------:|:----------------------------------------:|
|LM2574M-3.3 | 3.3V Fixed Output | Not a lot of extra current available for expanding the system|
|![LM2574M-3.3](https://github.com/kirkvolin/kirkvolin.github.io/blob/main/assets/Component%20Selection/LM2674M-3.3.png?raw=true)| Pins have good spacing for hand soldering | Smallest component that could likely be hand soldered|
|[Digikey](https://www.digikey.com/en/products/detail/texas-instruments/LM2674M-3-3-NOPB/287129)|Small footprint can be good for board design|  |
|         | Cheapest option               | |
|        |  Easy to follow datasheet

|Solution 3 | Pros                                                                                          |Cons                                      |
|:----------:|:--------------------------------------------------------------------------------------------:|:----------------------------------------:|
|LM2676S-3.3 | Clear datasheet  | Single sided pins are close together, making hand soldering more difficult |
|![LM2676S-3.3](https://github.com/kirkvolin/kirkvolin.github.io/blob/main/assets/Component%20Selection/LM2676S-3.3.png?raw=true)| Large footprint make it easy to handle | More expensive than another option |
|[Digikey](https://www.digikey.com/en/products/detail/texas-instruments/LM2676S-3-3-NOPB/363809) |Plenty of excess amperage available if needed| Larger footprint takes up more space on PCB|

## ESP 32 Table

| ESP Info                                      | Answer | Help                                                                                                      |
| --------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------- |
| Model                                         | ESP32-S3-WROOM-1-N4      | Include the entire part number (leave off any letters at the end that specify the package type)           |
| Product Page URL                              | [Product Page](https://www.espressif.com/en/products/socs/esp32-s3)      | Found on Espressif.com                                                                                    |
| ESP32-S3-WROOM-1-N4 Datasheet URL             | [Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3-wroom-1_wroom-1u_datasheet_en.pdf)      | Do not paste links directly into the table.  Use a [link](#)                                              |
| ESP32 S3 Technical Reference Manual URL       | [Reference Manual](https://www.espressif.com/sites/default/files/documentation/esp32-s3_technical_reference_manual_en.pdf)      | Has details on I/O multiplexing, USB, and others                                                          |
| Vendor link                                   | ![Digikey](https://www.digikey.com/en/products/detail/espressif-systems/ESP32-S3-WROOM-1-N4/16162639)      | Digikey, Jameco, etc.  Do not paste links directly into the table.  Use a [link](#)                       |
| Code Examples                                 | [Code Examples](https://github.com/espressif/esp-idf/tree/master/examples)      | url(s) for libraries on github or other sites related to the microcontroller and your planned peripherals |
| External Resources URL(s)                     | [External Resources](https://esp32io.com/tutorials/esp32-code-structure)      | Search on Google and YouTube for other resources for each specific microcontroller.                       |
| Unit cost                                     | $2.95      | Find on Digikey, Jameco, MPJA, or octopart                                                                |
| Absolute Maximum Current for entire IC        | 500mA      | Find in the microcontroller datasheet                                                                     |
| Supply Voltage Range                          | 3.0-3.6V      | Min / Nominal / Max / Absolute Max, as found in datasheet                                                                                          |
| Maximum GPIO current <br> (per pin)           | 40mA      | as found in datasheet                                                                                     |
| Supports External Interrupts?                 | Yes      | as found in datasheet                                                                                     |
| Required Programming Hardware, Cost, URL      | None needed, ESP32-S3 is programmable through USB OTG      | as found in datasheet                                                                                     |

| Module         | # Available | Needed | Associated Pins (or * for any) |
| -------------- | ----------- | ------ | ------------------------------ |
| UART           | 3           | 2      |GPIO43 ~ GPIO44, GPIO17 ~ GPIO18|
| external SPI\* | 4           | 0      | N/A                            |
| I2C            | 2           | 0      | N/A                            |
| GPIO           | 45          | 5      | ?                              |
| ADC            | ?           | ?      | ?                              |
| LED PWM        | ?           | ?      | ?                              |
| Motor PWM      | ?           | ?      | ?                              |
| USB Programmer | 1           | 1      | GPIO19 ~ GPIO20                |
