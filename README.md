
> Open this page at [https://peterheldens.github.io/data-logger/](https://peterheldens.github.io/data-logger/)

## Micro:bit Data Logger

This repository can be used to **log data** from the **micro:bit** to the:
1. **Makecode Device Console** in a **Web browser**
2. **Makecode Device Console** in the **Windows 10 App**
3. **DataStreamer add-in** in **Microsoft Excel** using Microsoft 365


> [!IMPORTANT]
> The micro:bit can be connected to exactly one target system at a time. So if the micro:bit is connected to MakeCode on the web, it can't be connected to Excel or the Windows 10 App. So to switch data logging from one target to the other, first *disconnect* the active connection first.

> [!NOTE]
> There is a separate MakeCode Extension available for Data Streamer. This extension is not (yet) used in this repository. For more info, see [pxt-hacking-stem](https://makecode.microbit.org/pkg/microsoft/pxt-hacking-stem). 

#### Data logger capabilities in MakeCode Device Console
- real-time data logging
- real-time visual graphics
- recording of data
- export of data to CSV & Excel for offline data analysis

## Edit this project ![Build status badge](https://github.com/peterheldens/data-logger/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/peterheldens/data-logger** and click import

## Data logging to MakeCode Windows 10 App

### Prerequisites
The MakeCode Windows 10 App enables direct read of serial data from your micro:bit for data logging and other experimental projects. To log data from the micro:bit to the Windows 10 MakeCode App just:
- Download and launch the MakeCode App for Windows 10 
- Connect the micro:bit to your computer using a USB cable
- Program the micro:bit with some data logging
- Verify the LED at the back of the micro:bit is blinking. This indicated data is transferring

## Data logging to MakeCode on the web
To enable direct read of serial data from your micro:bit for data logging and other experimental projects [WebUSB](https://wicg.github.io/webusb/) is required. WebUSB is an emerging web standard that allows to access micro:bit from web pages. It allows for a one-click download without installing any additional app or software! **It also allows to receive data from the micro:bit.**

### Supported browsers
The following modern web browsers are supported:
- Chrome 79+ browser for Android, Chrome OS, Linux, macOS and Windows 10.
- Microsoft Edge 79+ browser for Android, Chrome OS, Linux, macOS and Windows 10.

### Prerequisites
- Make sure that your micro:bit is running version 0249 or above of the firmware. Upgrading is as easy as dragging a file and it takes a few seconds to get it done. [Check out the instructions to check and upgrade your micro:bit](https://makecode.microbit.org/device/usb/webusb/troubleshoot)
- Pair your micro:bit [Follow these steps to pair your micro:bit using webusb](https://makecode.microbit.org/device/usb/webusb)

## Data logging to Excel Data Streamer

### What is Data Streamer?
Data Streamer empowers student inventors with a simple way to move data from the physical world in-and-out of Excel's powerful digital canvas.  With a micro:bit, (built-in) sensors and Excel, Data Streamer introduces inventors to the worlds of data science, and the internet of things (IoT).


### How it Works
Data Streamer is a two-way data transfer for Excel that streams live data from the micro:bit into Excel, and sends data from Excel back to the micro:bit.


### Enable Data Streamer
 To enable the data streamer and start streaming real-time data in Excel [Follow these steps](https://support.microsoft.com/en-us/office/what-is-data-streamer-1d52ffce-261c-4d7b-8017-89e8ee2b806f)

If you want to connect live data with the Data Streamer add-in for Excel, but you don't see the Data Streamer tab in the Excel ribbon, you first need to enable the Data Streamer add-in.

1. Go to **File > Options > Add-Ins**.

2. Make sure **COM Add-ins** is selected in the **Manage** box and click **Go**.

3. In the COM add-Ins dialog box, make sure to select the box next to Microsoft Data Streamer for Excel add-in, then click **OK**.

[!NOTE]
Data Streamer is available for free to all Microsoft 365 subscribers. If you are a Microsoft 365 subscriber, make sure you have the latest version of Office. If you don't see an entry for the Data Streamer add-in in the COM Add-Ins dialog box, it's because either your version of Office or Excel doesn't include it, or your organization's system administrator has made it unavailable. 

### Configure Data Streamer for micro:bit 

To configure the setting in Data Streamer for the micro:bit:

#### User Interface options:

Contains settings related to the user interface, like adjusting when dialogs appear and streamlining the connection process.

- **Always show Device Connected dialog** – Sets whether or not you would like to see the Device Connected confirmation dialog, which includes guidance on how to start seeing your data. The default is checked.
- **Always show Recording Saved dialog** – Sets whether or not you would like to see the Recording Saved confirmation, which includes receiving guidance how to replay that data. The default is checked.
- **Automatically stream data on device connect or file import** – Do you want to visualize your data faster? Checking this will automatically Start Data from your device, or Play Data from your file after selecting it. The default is unchecked.

#### Configure COM Port

The COM Port tab contains settings related more generally to serial connections. 
To communicate Data Streamer with your micro:bit these following settings should be modified:
- Connect your micro:bit to the computer using a USB cable
- Modify these settings:
    - COM Port: depends on your setting
    - Data bits: 8
    - Parity: None
    - Baud Rate: 115200
    - Handshake: None

    This image shows the micro:bit settings for the Excel Data Streamer.
    
    ![Data Streamer config micro:bit](https://github.com/peterheldens/data-logger/raw/master/.github/makecode/excel-datastreamer-settings-for-microbit.png)

### Start streaming real-time data with the Data Streamer add-in
 Now it's time to start streaming it into Excel. Select the **Start Data** button on the Data Streamer tab. The data will stream into the Data In worksheet. More info on capturing data, sending data In and Out, and recording data is described  in [this article](https://support.microsoft.com/en-us/office/start-streaming-real-time-data-with-the-data-streamer-add-in-b6fac0bb-a495-423b-99eb-60c1f1e338d4).

## Usage
The MakeCode script provided in this repository is designed to log data to one of the options above: 
- Press **Button A** to swith to **MakeCode** (this is the default)
- Press **Button B** to swith to **Excel Data Streamer**

```blocks
// Press A to stream to makecode
input.onButtonPressed(Button.A, function () {
    log_to_data_streamer = false
    basic.pause(100)
    basic.clearScreen()
    basic.showString("M")
})
// Press B to stream to excel datastreamer
input.onButtonPressed(Button.B, function () {
    log_to_data_streamer = true
    basic.pause(100)
    basic.clearScreen()
    basic.showString("E")
})
```
## Design considerations
The MakeCode **Device Console** can show multiple graphs. Each graph can list *values names* by writing a key pair of **name** & **value**:
```blocks
    radio.onReceivedValue(function (name, value) {
        serial.writeValue(name, value)
    }
```
This results in <<TODO insert picture here>>

The Exel Data Streamer uses **predefined column names**. Writing key pairs of **name** & **value** would result in: 
 <<TODO insert picture here>>. 

To fill proper values into the Excel Data Streamer cells, we we use a sequence of multiple `writenumber(value)` actions.
These are all seperated by `writestring(",")`. 
To end of the sequence (i.e.: the end of a row in Excel) should be marked with a `writeline`. This is implemented as `writestring(" "):

``` blocks
        radio.onReceivedValue(function (name, value) {
        serial.writeNumber(value)
        serial.writeString(",")
        serial.writeNumber(value)
        serial.writeString(",")
        serial.writeNumber(value)
        serial.writeString(" ")
    }
```


## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/peterheldens/data-logger/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
