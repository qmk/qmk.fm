# About the Proton C

<img src="/proton-c.jpg" alt="Proton C" width=600/>

The Proton C is an Arm STM32F303xC based drop-in replacement for the Pro Micro. It uses the same chip as the Planck rev6 boards, and Skullydazed's Arm Clueboards.

* Through-hole mounted USB-C Port
* 32-bit 72MHz Cortex-M4 processor (STM32F303CCT6)
* I2C, SPI, PWM, DMA, DAC, USART, I2S
* 23x 3.3V I/O Ports
* 1x 5V output for WS2812 LED chains
* 256kB flash
* 40kB RAM
* AST1109MLTRQ speaker footprint
* Reset button

Rev 2 made the following changes:

* Speaker pads on both sides of the PCB
* You can now connect one side of the speaker to GND to gain an additional I/O pin
* Both sides use a clear solder mask
* The gold-dipping was done before the solder mask, so the traces are now gold

You can find the Proton C for purchase at:

* [Clueboard](https://clueboard.co/parts/qmk-proton-c) (US-West)
* [Keebio](https://keeb.io/products/qmk-proton-c) (US-East)
* [NovelKeys](https://novelkeys.xyz/products/qmk-proton-c) (US-East)
* [SpaceCat](https://spacecat.design/products/proton-c-by-qmk) (US-East)
* [1upkeyboards](https://www.1upkeyboards.com/shop/controllers/qmk-proton-c/) (US-East)
* [Oh, Keycaps!](https://ohkeycaps.com/products/proton-c) (US-Midwest)
* [Mykeyboard](https://mykeyboard.eu/catalogue/qmk-proton-c-rev-2_1246/) (EU)
* [Daily Clack](https://dailyclack.com/products/qmk-proton-c) (AUS)

## Comparison

If you want to know why you should choose the Proton C for your next product, here is a comparison of the chips:

&nbsp;     |ATmega32U4        |AT90USB1286         |STM32F303xC                   |
-----------|------------------|--------------------|------------------------------|
Speed      |16MHz             |16MHz               |72MHz                         |
Voltage    |5V                |5V                  |3.3V with some 5V capable pins|
Flash size |32kB (28kB usable)|128kB (120kB usable)|256kB (248kB usable)          |
EEPROM size|1kB               |4kB                 |4kB (emulated in flash)       |
Memory     |2.5kB             |8kB                 |48kB                          |
Timers     |4 total           |4 total             |10 total                      |
Digital IO |25 pins           |46 pins             |37 pins                       |

The STM32F303 has 9 times the usable storage space that the ATmega32U4 has. You could enable a bunch of features and still have plenty of room  left. For instance, the Planck EZ, which has audio and RGB matrix fully enabled (no sub-features disabled), and has the Link Time Optimization option turned off uses 45kB of firmware, leaving 200kB+ free, still. Plenty of room for most anything you want to do.

## Pinout

<img src="/proton-c-pinout.jpg" alt="Proton C pinout" width=600/>

## Warnings

Some of the PCBs compatible with Pro Micro have VCC (3.3V) and RAW (5V) pins connected (shorted) on the pcb. Using the Proton C will short 5V power from USB and regulated 3.3V which is connected directly to the MCU. Shorting those pins may damage the MCU on the Proton C.

So far, it appears that this is only an issue on the Gherkin PCBs, but other PCBs may be affected in this way.

In this case, you may want to not hook up the RAW pin at all.