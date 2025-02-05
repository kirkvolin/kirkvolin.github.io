---
title: Component Selection
---


# Major Component Selection

## Power Regulator

| Solution 1  | Pros                                                                                        | Cons                                      |
|:-----------:|:-------------------------------------------------------------------------------------------:|:-----------------------------------------:|
|LM2576HVS-3.3| 3.3V Fixed Output                                                                           |   Most Expensive                          |
|![LM2576HVS-3.3](insert image link)             | Large footprint makes hand soldering easier                                                 |   Unfamiliar Manufacturer                 |
|[Digikey](https://www.digikey.com/en/products/detail/umw/LM2576HVS-3-3/16705917)             | Requires minimal external components                                                        |   Somewhat confusing component datasheet    |
|             | High current output allows more components to operate from this regulator if needed.        |                                           |

| Solution 2 | Pros                                                                                          |Cons                                      |
|:----------:|:---------------------------------------------------------------------------------------------:|:----------------------------------------:|
|LM2574M-3.3 | 3.3V Fixed Output | Not a lot of extra current available for expanding the system|
|![LM2574M-3.3](insert image link)| Pins have good spacing for hand soldering | Smallest component that could likely be hand soldered|
|[Digikey](https://www.digikey.com/en/products/detail/texas-instruments/LM2674M-3-3-NOPB/287129)|Small footprint can be good for board design|  |
|         | Cheapest option               | |
|        |  Easy to follow datasheet

|Solution 3 | Pros                                                                                          |Cons                                      |
|:----------:|:--------------------------------------------------------------------------------------------:|:----------------------------------------:|
|LM2676S-3.3 | Clear datasheet  | Single sided pins are close together, making hand soldering more difficult |
|![LM2676S-3.3](insert image link)| Large footprint make it easy to handle | More expensive than another option |
|[Digikey](https://www.digikey.com/en/products/detail/texas-instruments/LM2676S-3-3-NOPB/363809) |Plenty of excess amperage available if needed| Larger footprint takes up more space on PCB|

## ESP 32 Table

| ESP Info                                      | Answer | Help                                                                                                      |
| --------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------- |
| Model                                         | ?      | Include the entire part number (leave off any letters at the end that specify the package type)           |
| Product Page URL                              | ?      | Found on Espressif.com                                                                                    |
| ESP32-S3-WROOM-1-N4 Datasheet URL             | ?      | Do not paste links directly into the table.  Use a [link](#)                                              |
| ESP32 S3 Datasheet URL                        | ?      | Has more detail on functions                                                                              |
| ESP32 S3 Technical Reference Manual URL       | ?      | Has details on I/O multiplexing, USB, and others                                                          |
| Vendor link                                   | ?      | Digikey, Jameco, etc.  Do not paste links directly into the table.  Use a [link](#)                       |
| Code Examples                                 | ?      | url(s) for libraries on github or other sites related to the microcontroller and your planned peripherals |
| External Resources URL(s)                     | ?      | Search on Google and YouTube for other resources for each specific microcontroller.                       |
| Unit cost                                     | ?      | Find on Digikey, Jameco, MPJA, or octopart                                                                |
| Absolute Maximum Current for entire IC        | ?      | Find in the microcontroller datasheet                                                                     |
| Supply Voltage Range                          | ?      | Min / Nominal / Max / Absolute Max, as found in datasheet                                                 |
| Absolute Maximum current <br> (for entire IC) | ?      | as found in datasheet                                                                                     |
| Maximum GPIO current <br> (per pin)           | ?      | as found in datasheet                                                                                     |
| Supports External Interrupts?                 | ?      | as found in datasheet                                                                                     |
| Required Programming Hardware, Cost, URL      | ?      | as found in datasheet                                                                                     |

| Module         | # Available | Needed | Associated Pins (or * for any) |
| -------------- | ----------- | ------ | ------------------------------ |
| UART           | ?           | ?      | ?                              |
| external SPI\* | ?           | ?      | ?                              |
| I2C            | ?           | ?      | ?                              |
| GPIO           | ?           | ?      | ?                              |
| ADC            | ?           | ?      | ?                              |
| LED PWM        | ?           | ?      | ?                              |
| Motor PWM      | ?           | ?      | ?                              |
| USB Programmer | ?           | 1      | ?                              |
| ...            |
