
> Open this page at [https://peterheldens.github.io/data-logger/](https://peterheldens.github.io/data-logger/)

## Micro:bit Data Logger

This repository can be used to log data from your micro:bit to:
- the **device console** in MakeCode on the **the web**
- the **device console** in the MakeCode App on **Windows 10**
- the **DataStreamer add-in** in **Microsoft Excel** using Microsoft 365

[!NOTE]
The micro:bit can be connected to only one (1) stream at a time.

## Edit this project ![Build status badge](https://github.com/peterheldens/data-logger/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/peterheldens/data-logger** and click import

## Data logging to MakeCode App (Windows10)

### Prerequisites
The MakeCode Windows 10 App enables direct read of serial data from your micro:bit for data logging and other experimental projects. To log data from the micro:bit to the Windows 10 MakeCode App just:
- Download and launch the MakeCode App for Windows 10 
- Connect the micro:bit to your computer using a USB cable
- Program the micro:bit with some data logging
- Verify the LED at the back of the micro:bit is blinking. This indicated data is transferring

## Data logging to MakeCode (Web)
To enable direct read of serial data from your micro:bit for data logging and other experimental projects [WebUSB](https://wicg.github.io/webusb/) is required. WebUSB is an emerging web standard that allows to access micro:bit from web pages. It allows for a one-click download without installing any additional app or software! **It also allows to receive data from the micro:bit.**

### Supported browsers
The following modern web browsers are supported:
- Chrome 79+ browser for Android, Chrome OS, Linux, macOS and Windows 10.
- Microsoft Edge 79+ browser for Android, Chrome OS, Linux, macOS and Windows 10.

### Prerequisites
- Make sure that your micro:bit is running version 0249 or above of the firmware. Upgrading is as easy as dragging a file and it takes a few seconds to get it done. [Check out the instructions to check and upgrade your micro:bit](https://makecode.microbit.org/device/usb/webusb/troubleshoot)
- Pair your micro:bit [Follow these steps to pair your micro:bit using webusb](https://makecode.microbit.org/device/usb/webusb)

## Data logging to Data Streamer (Microsoft Excel)

### What is Data Streamer?
Data Streamer empowers student inventors with a simple way to move data from the physical world in-and-out of Excel’s powerful digital canvas.  With a micro:bit, (built-in) sensors and Excel, Data Streamer introduces inventors to the worlds of data science, and the internet of things (IoT).


### Data Steamer - How it Works
Data Streamer is a two-way data transfer for Excel that streams live data from a microcontroller, - i.e. your micro:bit - into Excel, and sends data from Excel back to the microcontroller.

To get data from a sensor into an Excel workbook, connect the sensor to a microcontroller that is connected to a Windows 10 PC.  Excel’s Data Streamer add-in also needs to be enabled, and a workbook needs to be opened.  

For more info, see [What is Data Streamer](https://support.microsoft.com/en-us/office/what-is-data-streamer-1d52ffce-261c-4d7b-8017-89e8ee2b806f)

### Settings Excel Datastreamer

This image shows the micro:bit settings for the Excel Datastreamer.

![Datastreamer config micro:bit](https://github.com/peterheldens/data-logger/raw/master/.github/makecode/excel-datastreamer-settings-for-microbit.png)


## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/peterheldens/data-logger/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
