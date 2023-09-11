var data = {
"http://robbiebyrd.com/homepage":
`# My Blog
---- 

## [911realtime.org](https://911realtime.org) data transfer
###### Created September 11, 2023 at 1:15 PM CT, Updated September 11, 2023 at 1:22 PM CT

As I have for the last 2 years, I wake up early on September 11 to monitor the traffic to [911realtime.org](https://911realtime.org), which as you might imagine, spikes significantly. I like to keep track of it each year, and thought I'd share this year's traffic statistics.

1:08 pm: 2TB out today, avg. 1 GBps transfer rate. 

As always, I want to give a huge thank you to [Hivelocity](http://hivelocity.net/) for their continued support and contributions to keeping history alive.

If you'd like to get involved, please visit my project [Keeping History[(keepinghistory.org).

## Creating a thermostat test rig
###### Created August 24, 2023 at 9:20 AM CT

![6B97D3C2-6801-4FC9-BFB9-15832E3BCCAC.heic](img/blog/thermostat/6B97D3C2-6801-4FC9-BFB9-15832E3BCCAC.png)

I recently found myself needing to test a Z-Wave thermostat, but I didn't have a HVAC system to test it with. It seemed like overkill to buy an HVAC Control Board and modifying it, and the test rigs made for HVAC students were prohibitively expensive (and more than I neded in terms of functionality). So, I decided to build my own and share with the world how I did it.

### Parts List:

- A thermostat.
- Thermostat Wire: 8-wire, 18-gauge wire(18/8) is what we're looking for. In the event you want to test a thermostat with Auxiliary or Emergency heating modes, you'll want to find 10-wire wiring, or run an additional 2 wires separately. When constantly connecting and disconnecting your test rig, you'll find that solid copper wire will break and just be a pain to work with. If you can, find a stranded variety. It's probably cheaper to get this from your local hardware store.
- Mounting board: you'll want something to put this on. I chose an old Ikea desk tabletop, but really anything that you can screw through will do. Plywood and MDF are also good options, and you can often find scrap in the cutting section of your local hardware or lumber supply store. You can also use this to house other smart-home tech for testing, too!

![img/blog/thermostat/12C74539-AAC4-46CD-B8F1-45C9FFFEC469.jpg](img/blog/thermostat/12C74539-AAC4-46CD-B8F1-45C9FFFEC469.png)

- Power drill: the thicker the board you choose, the more powerful the drill you'll need.
- A screwdriver: both the flat kind and the starry kind.
- Hole-saw or wood-boring kit: the particular size of hole saw that you need depends on the LED lights you select (see below), as well as the size of hole you'll need to run any wires behind the board (if you choose to do so). I erred on the side of caution, and picked up [this set](https://www.lowes.com/pd/Spyder-Stinger-14-Piece-Assorted-Woodboring-Spade-Drill-Bit-Set/1001148466) from Lowes.
- LED Lights: to simulate the HVAC's functions, you'll want display LEDs to show when the system is cooling, heating or the fan is on. The LED lights need to accept 24V AC. I chose [these LED lights](https://www.amazon.com/dp/B081FCFLVT?ref=ppx_yo2ov_dt_b_product_details&th=1), 22mm (7/8 in) hole diameter size, but any size will do. Just make sure you have a hole saw of the same size.
- 2 terminal blocks: You will need 2 terminal blocks: one for the load, and one for the neutral wire. Make sure each terminal block has at least 6 circuits, though 8 to 10 is optimal for testing multiple types of HVAC systems. I chose [this barrier-type set](https://www.amazon.com/Terminal-Block-10-Position-Set/dp/B09QHT8FPK/ref=sr_1_2?content-id=amzn1.sym.ea945d40-8e84-42be-ad5c-249b9bca6a40%3Aamzn1.sym.ea945d40-8e84-42be-ad5c-249b9bca6a40&crid=1IAFJWHUBD1OE&keywords=Terminal+Blocks&pd_rd_r=db98cc20-812c-4559-8c68-eedcf79c6248&pd_rd_w=8YR1Y&pd_rd_wg=wuayD&pf_rd_p=ea945d40-8e84-42be-ad5c-249b9bca6a40&pf_rd_r=FS043PDT23CT0HCZY4MY&pid=ljG8PU7&qid=1689814612&refinements=p_n_feature_thirteen_browse-bin%3A18945667011&s=industrial&sprefix=terminal%2Bstri%2Caps%2C117&sr=1-2), but there are many types of terminal blocks.
- 1 terminal barrier strip jumper: this will probably be included with your terminal block.

![Terminal Barrier Block with Terminal Barrier Strip Jumpers](img/blog/thermostat/Untitled.png)

Terminal Barrier Block with Terminal Barrier Strip Jumpers

- LED Light Wire: we'll need wiring to connect the LEDs to the power, coming from the thermostat's terminal block (the Load side) and the neutral terminal block (the Return side). Choose the wire gauge that best works with your LED lights. It's important to get two colors of wire to distinguish the *Load* and *Return* (or neutral) sides of the circuit. Black and white wire (for *Load*/*Return*) is preferred, but red and black will also work. This may be cheaper at your local hardware store than online.

![06862E3B-CEC1-440A-A524-BA78053CCC01.heic](img/blog/thermostat/06862E3B-CEC1-440A-A524-BA78053CCC01.png)

- A power supply: HVAC controls run on 24V AC. We're only powering LED lights, so a low-wattage transformer will be just fine, though any should work. Generally two types of these exist: bare transformers (usually labeled as door bell transformers) and plug-in power supplies. Door bell transformers are generally hard to wire up, so I would recommend a [plug-in type like this one](https://www.amazon.com/Transformer-Thermostat-Competible-Versions-Honeywell/dp/B07DJ7RHS5/ref=sr_1_6?keywords=24v+ac+transformer+plug+in&qid=1689816282&sprefix=24v+AC+transformer%2Caps%2C105&sr=8-6).
- Fork wire connectors: you will need at a handful of fork wire connectors in assorted sizes. I prefer crimp-style connectors, though heat-shrink connectors are just fine. Be sure you have connector sizes that match the sizes of the screws on both the terminal blocks and the LED lights.

![48085BE9-A535-45D1-93C3-48CEEC57FC9C.heic](img/blog/thermostat/48085BE9-A535-45D1-93C3-48CEEC57FC9C.png)

- Stick-on Velcro
- Wire stripper/cutter

![DD8FD4FB-4F3F-4715-B150-92423972B24C.heic](img/blog/thermostat/DD8FD4FB-4F3F-4715-B150-92423972B24C.png)

- Needle-nose or Electrician's Pliers
- Heat gun (or a bad-ass hair dryer): if you choose shrink-wrap Fork wire connectors

### Prepare the board

Take your board, and mark the spaces where you want to drill. You're free to eyeball it (as I did), but I promise you'll appreciate yourself more later if you take the time now to get this right.

In my example, we'll have 5 lights:

- Green: The system is receiving power.
- White: The fan is running.
- Blue: The Cooling mode is active.
- Red: The Heating mode is active.
- Orange: The Emergency Heat mode is active.

Using the hole size of your LEDs, mark a space for each of the LED lights you'll install. Make sure you have enough room between each light for the bezel of the light to fit.

![Example board layout](img/blog/thermostat/Untitled%201.png)

Example board layout

You can also add another hole to route the wires from the thermostat to the back of the board. In my case, I chose not to do this, and instead mounted my thermostat wires and connector block on the front of the board for easier access.

Now that you've measured and assured yourself this is the right thing to do, drill!

### Wiring up the thermostat

Using the instructions included with your thermostat, wire up the thermostat's connection block, using some thermostat wire (be sure to leave some extra wire hanging, just in case). Once the wires are connected, mount the thermostat connector block to the board. If you drilled a hole for your thermostat wires, run them through.

- Mount the thermostat connector block to the board, either using a screw (the thermostat probably included mounting hardware) or with handy-dandy Velcro.
- Typically, the wiring looks like this, but please check the thermostat's installation instructions:
- Y: Yellow Wire
- G: Green Wire
- C (Common): Blue Wire
- W: White Wire
- R: Red Wire
- E: Brown Wire

![Common Thermostat wiring setup](img/blog/thermostat/09A8EF9F-3961-49C9-9EE0-C7C8CF56D3A5_1_102_o.jpeg)

Common Thermostat wiring setup

### Wiring up the Terminal Blocks

![B6F1E37F-7AD2-49D5-9BD7-5A51CFEC9FDE_1_102_o.jpeg](img/blog/thermostat/B6F1E37F-7AD2-49D5-9BD7-5A51CFEC9FDE_1_102_o.jpeg)

We will have two terminal blocks: the Load block will carry current from the power supply to the thermostat; and the Return block, which will accept current from the LEDs, thereby completing the circuit.

If you chose to run your wires through the back of your board, you'll want to install your terminal blocks on the back.

- Securely fasten both terminal blocks to the board (or chance it with the Velcro, your call).
- Roughly measure the length of your thermostat wire, and ensure you'll have plenty to get to one of the terminal blocks. Cut it to length.
- Strip each wire in the cable using your cable stripper (or teeth), and apply a fork wire connector. Make sure the fork wire connector you choose is the right size for the terminal block.
- Once the fork wire connectors are attached, attach each one to a circuit on the terminal block.

### Install the Power Supply

Now we need to power this thing.

- Connect a fork wire connector to each of the power supply's leads:
- Attach one lead to the same circuit on the terminal block as the BLUE wire.
- Attach the other lead to any port on the Return terminal block.
- Install a black terminal jumper strip on the Return terminal block. This will ensure that all of the LEDs are wired into the circuit.

### Installing the LEDs

![57129385-C418-4295-A088-9BC0FE287938_1_102_o.jpeg](img/blog/thermostat/57129385-C418-4295-A088-9BC0FE287938_1_102_o.jpeg)

Now that you have the holes drilled, the thermostat wired up, the power supply installed and the terminal blocks installed, it's time for the big finish.

Each LED has two terminals; since this is AC, we don't care which one is which.

If you have black and white wire, it is preferred to use white here (white is the wire color for neutral, or Return). If you have red and black wire, use black here.

![221C2FC9-9FED-41C8-A6AF-B3BAB2EFDFAF_1_201_a.heic](img/blog/thermostat/221C2FC9-9FED-41C8-A6AF-B3BAB2EFDFAF_1_201_a.png)

For each LED light:

- Using the LED Light Wire, cut a lengths that will run from the terminal block to the LED light.
- Place a fork connector the size for the terminal block on one end.
- Place a fork connector the size of the LED light's terminal on the other.
- Insert and secure the LED into the appropriate hole.
- Connect one terminal of the LED light, using the wire from above, to any open circuit on the Return terminal block.

### Wiring the LEDs to the Thermostat

So far, it's all been pretty easy; this is where the fun stuff starts.

The standard wiring setup for a thermostat looks like this:

![Untitled](img/blog/thermostat/Untitled%202.png)

We want to match our LEDs to specific functions; Green (System Power), White (Fan), Blue (Cooling), Red (Heating) and Orange (Emergency Heat).

If using black and white wire, use black here (black is the wire color for Load). If you have red and black wire, use red here instead.

For each LED light:

- Using the LED Light Wire, cut a lengths that will run from the terminal block to the LED light.
- Place a fork connector the size for the terminal block on one end.
- Place a fork connector the size of the LED light's terminal on the other.
- Insert and secure the LED into the appropriate hole.
    
![79F76374-22CA-4DB3-A6F6-9B1C5F6650DB_1_102_o.jpeg](img/blog/thermostat/79F76374-22CA-4DB3-A6F6-9B1C5F6650DB_1_102_o.jpeg)
    

Now, using the guide below, connect the appropriate LED wire fork connector to the appropriate circuit on the Load terminal block.

![Untitled](img/blog/thermostat/Untitled%203.png)

For me, it was:

- Yellow Wire: Blue LED (Cooling)
- Green Wire: White LED (Fan)
- Blue Wire: Green LED (System Power)
- White Wire: Red LED (Heating)
- Brown Wire: Orange LED (Emergency Heat)

If your thermostat doesn’t work, you may need to place a jumper between the Red and Blue wires.

### Test

Now that you have everything connected, you should be able to see your lights work in response to the thermostat's commands.

- Attach your thermostat to its mounting plate.
- Plug in the power supply.
- Adjust the thermostat's settings and watch the lights shine.

----

## KeepingHistory.org website is live!
###### Created October 10, 2022 at 11:20 AM CT
The website for my project [Keeping History](https://keepinghistory.org) is now live! 

See our projects on Github:
- [HistoryCommons.org](https://github.com/Keeping-History/historycommons) - Reviving the now defunct HistoryCommons.org website.
- [Savery Engine](https://github.com/Keeping-History/savery) - A tool to rapidly annotate and enhance multimedia from an easy-to-use interface.
- [Stirling Engine](https://github.com/Keeping-History/stirling) - Tool for media conversion and compression, data analysis, metadata enhancement, stream packaging and archival; extensible through plugins.
- [ECU](https://github.com/Keeping-History/ecu) - The orchestration engine for running multiple Stirling Engine jobs.

----

## Introducing KeepingHistory.org
###### Created July 11, 2022 at 10:39 PM CT, Updated October 10, 2022 at 11:15 AM CT
When I first started my project [The 9/11 Realtime Experience](https://911realtime.org), I had no idea what I was getting myself into. I had almost none of the required expertise and skills to undertake the immense work of collecting, cataloging, indexing, scraping and converting nearly 2 terabytes of video and audio data. 

Over time, I had to learn these skills through trial and error. What I learned was that there is a huge barrier to using multimedia to tell stories. It’s even harder to catalog, collect and store all that immense data. It’s damned near impossible to add any kind of real context to this media without a team of humans watching, tagging and clicking.

Today, I’d like to introduce my follow-up project to The 9/11 Realtime Experience: KeepingHistory.org. It’s coming soon.

The project’s goal is to make it easy for educators and archivists to upload, convert, analyze and serve from a simple, web-based interface. Initially, we will be targeting our application to a select number of researchers, educators and media archivists. Our eventual goal is to provide an open-source product  that can be launched in just a few clicks on a cloud platform (our first alpha product will be docker-based).

To that end, we’ll be releasing phases of the project over the coming months, in various stages of development. Our first project, the Stirling Engine, provides media conversion and compression, data analysis, metadata enhancement, stream packaging and archival, and is extensible through plugins.

The [Stirling Engine](https://github.com/Keeping-History/stirling-engine) is meant to be a lightweight, efficient way to process incoming media files. The engine's main responsibilities are to:

- Receive a JSON file with job options
- Normalize uploaded media
- Extract data from the media
- Re-encode the media using modern, stream-ready standards
- Analyze extracted data for additional data enhancements
- Package media and metadata in a standard, open format
- Enable plugins to read source media or the output of other plugins for independent processing

Currently, we’re using a tuned version of ffmpeg and a lot of fancy work in the background to optimize our video conversion and extraction. We provide a set of default encoder options for standard settings (4K, HD, SD, etc.), but you’re free to provide your own. In fact, using our JSON job schema, you can pass most parameters directly to ffmpeg—or any post-processing application.

Some of the experiments we’ve been running in house include plugins using machine learning for object detection, speaker recognition and facial identification. These plugins store the output of their processing, and can even improve their models and re-process data to improve accuracy.

The next phase of our product will be the annotator, the [Savery Engine](https://github.com/Keeping-History/savery). And, after that, we’ll roll out our SDK for building interactive multimedia applications.

We also plan to provide consulting services for institutions that may want to implement the technology through a separate entity.

----`,
"http://robbiebyrd.com/links":
`#  Links
- [The 9/11 Realtime Experience: 911realtime.org](https://911realtime.org) (also see our [Kickstarter](https://www.kickstarter.com/projects/911realtime/the-9-11-realtime-experience))
- My friends at [Hivelocity](https://www.hivelocity.net) for graciously hosting the 911realtime.org and our nearly 2 TBs of assets.
- [Pantheon Systems](https://pantheon.io) where I work as an engineer.
- [My LinkedIn](https://www.linkedin.com/in/atxrobbieb/)
- [My Twitter](https://twitter.com/robbie_byrd)
- [Space Hippo](https://spacehippo.com) is my side-hustle for developing education and research tools
- [KeepingHistory.org](https://KeepingHistory.org) is a new project to take the tools developed by Space Hippo's team and my work on [911realtime.org](https://911realtime.org) into a tool to archive, annotate and explore multimedia for education and posterity.
`,
"http://www.aol.com":
`# AOL
![Dialing](https://c.tenor.com/AZ1HKdM9qKoAAAAC/aol-internet.gif)
`,
"system://about":
`# About RobbieByrd.com
====================

This is my website, and I like it a lot.

Based on **[Platinum](https://github.com/robbiebyrd/platinum)** by **[Me!!!](https://github.com/robbiebyrd)**.

Based on **[New Dawn](https://github.com/npjg/classic.css)** by **[Nathanael Gentry](https://github.com/npjg)**.

Based on **[Scrollbars of the Classic Mac OS](https://github.com/ticky/classic-scrollbars)** by 
**[Jessica Stokes (@ticky)](https://github.com/ticky)**.

Includes **[After Dark in CSS](https://github.com/bryanbraun/after-dark-css)** by 
**[Bryan Braun](https://www.bryanbraun.com)**.

* * *

**New Dawn** and **Platinum** License

MIT License  
Copyright (c) 2019 Nathanael Gentry

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Apple maintains the copyright on the background patterns, icons and interface components. Some UI elements are from
Netscape Navigator, and are the intellectual property of Yahoo and/or Microsoft (I think, I'm not really sure).`
}

var favorites = {
}
