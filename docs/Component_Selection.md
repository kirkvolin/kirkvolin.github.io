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

|Solution 4 | Pros                                                                                          |Cons                                      |
|:----------:|:--------------------------------------------------------------------------------------------:|:----------------------------------------:|
|LM2595S-3.3 | Clear datasheet  | Single sided pins are close together, potentially making hand soldering more difficult |
|![LM2676S-3.3](image)| Large footprint make it easy to handle | More expensive than another option |
|[Digikey](https://www.digikey.com/en/products/detail/texas-instruments/LM2595S-3-3-NOPB/363698) |Exceeds amperage requirement peak of 500mA for ESP32, but not as excessively as other options available| Larger footprint takes up more space on PCB|

For a power regulator, the LM2676S-3.3 seems to be the optimal solution. It offers a good combination of price, usability, and versatility.
Because of it's lower minimum input voltage of 4.5V, it enables the use of USB as a source of power compared to the LM2675M and LM2676S which wouldn't be able to accomplish this due to their minimum requirements of 6.5V and 8V respectively. The regulator's size of the TO263CA standard will also be much easier to manipulate and place for surface mount hand soldering.

## Power Input

|Solution 1 | Pros                                                                                          |Cons                                      |
|:----------:|:--------------------------------------------------------------------------------------------:|:----------------------------------------:|
|Barrel jack |Consistent power | Need access to power outlets| 
|![Barrel Plug](image)| Easy to implement | Separate cable required|
|[Digikey](https://www.digikey.com/en/products/detail/tensility-international-corp/54-00165/10459297)|||

|Solution 2 | Pros                                                                                          |Cons                                      |
|:----------:|:--------------------------------------------------------------------------------------------:|:----------------------------------------:|
|USB |Consistent power | Need access to power outlet or PC|
|![Barrel Plug](image)| Relatively easy to implement | Separate cable required|
|[Digikey](https://www.digikey.com/en/products/detail/amphenol-cs-fci/10118193-0001LF/2785388)|USB B/C are extremely common| Soldering can be tricky, esp. USB C |
||Can provide both power and data||

|Solution 2 | Pros                                                                                          |Cons                                      |
|:----------:|:--------------------------------------------------------------------------------------------:|:----------------------------------------:|
|Onboard Battery |Portability | Need backup batteries/charger|
|![Battery](image)| Relatively easy to implement | Would increase board size significantly or require separate board for power|
|[Digikey](https://www.digikey.com/en/products/detail/sparkfun-electronics/PRT-12895/5271298)|| Much more expensive to implement |
||||

For powering this subsystem, I feel that versatility is important. Because USB is already required to program the ESP32 chip, I will design the circuit board so that it can be powered from either the USB connector or a separate 5.5x2.5mm barrel jack which is a common standard that my teammates and I already have cables for through the Robotics 1 and 2 courses through the Robotics 1 and 2 courses.

## ESP 32 Table

| ESP Info                                      | Answer |
| --------------------------------------------- | ------ |
| Model                                         | ESP32-S3-WROOM-1-N4      |
| Product Page URL                              | [Product Page](https://www.espressif.com/en/products/socs/esp32-s3)|
| ESP32-S3-WROOM-1-N4 Datasheet URL             | [Datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-s3-wroom-1_wroom-1u_datasheet_en.pdf)|
| Reference Manual| [Reference Manual](https://www.espressif.com/sites/default/files/documentation/esp32-s3_technical_reference_manual_en.pdf)      |
| Vendor link                                   | ![Digikey](https://www.digikey.com/en/products/detail/espressif-systems/ESP32-S3-WROOM-1-N4/16162639)      |
| Code Examples                                 | [Code Examples](https://github.com/espressif/esp-idf/tree/master/examples)      |
| External Resources URL(s)                     | [External Resources](https://esp32io.com/tutorials/esp32-code-structure)      |
| Unit cost                                     | $2.95      |
| Absolute Maximum Current for entire IC        | 500mA      |
| Supply Voltage Range                          | 3.0-3.6V      |
| Maximum GPIO current (per pin)           | 40mA      |
| Supports External Interrupts?                 | Yes      |
| Required Programming Hardware, Cost, URL      | None needed, ESP32-S3 is programmable through USB OTG|

| Module         | # Available | Needed | Associated Pins (or * for any) |
| -------------- | ----------- | ------ | ------------------------------ |
| UART           | 3           | 2      |GPIO43 ~ GPIO44, GPIO17 ~ GPIO18|
| External SPI   | 4           | 0      | N/A                            |
| I2C            | 2           | 0      | N/A                            |
| GPIO           | 45          | 5      | GPIO35-40                      |
| ADC            | 2           | 0      | N/A                            |
| LED PWM        | 5           | 5      | GPIO 17, 18, 8, 19, 20         |
| Motor PWM      | 0           | 0      | N/A                            |
| USB Programmer | 1           | 1      | GPIO19 ~ GPIO20                |

## General Components

All surface mount components such as resistors, capacitors, etc. are planned to use 1206 standard for ease of handling and soldering.