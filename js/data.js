var data = {
"http://robbiebyrd.com/homepage":
`
#blog
---- 
##Introducing KeepingHistory.org
######Created July 11, 2022 at 10:39 PM
When I first started my project [ The 9/11 Realtime Experience ], I had no idea what I was getting myself into. I had almost none of the required expertise and skills to undertake the immense work of collecting, cataloging, indexing, scraping and converting nearly 2 terabytes of video and audio data. 
Over time, I had to learn these skills through trial and error. What I learned was that there is a huge barrier to using multimedia to tell stories. It’s even harder to catalog, collect and store all that immense data. It’s damned near impossible to add any kind of real context to this media without a team of humans watching, tagging and clicking.
Today, I’d like to introduce my follow-up project to The 9/11 Realtime Experience: KeepingHistory.org. It’s coming soon.
The project’s goal is to make it easy for educators and archivists to upload, convert, analyze and serve from a simple, web-based interface. Initially, we will be targeting our application to a select number of researchers, educators and media archivists. Our eventual goal is to provide an open-source product  that can be launched in just a few clicks on a cloud platform (our first alpha product will be docker-based).
To that end, we’ll be releasing phases of the project over the coming months, in various stages of development. Our first project, the Stirling Engine, provides media conversion and compression, data analysis, metadata enhancement, stream packaging and archival, and is extensible through plugins.
The Stirling Engine is meant to be a lightweight, efficient way to process incoming media files. The engine's main responsibilities are to:
- Receive a JSON file with job options
- Normalize uploaded media
- Extract data from the media
- Re-encode the media using modern, stream-ready standards
- Analyze extracted data for additional data enhancements
- Package media and metadata in a standard, open format
- Enable plugins to read source media or the output of other plugins for independent processing
Currently, we’re using a tuned version of ffmpeg and a lot of fancy work in the background to optimize our video conversion and extraction. We provide a set of default encoder options for standard settings (4K, HD, SD, etc.), but you’re free to provide your own. In fact, using our JSON job schema, you can pass most parameters directly to ffmpeg—or any post-processing application.
Some of the experiments we’ve been running in house include plugins using machine learning for object detection, speaker recognition and facial identification. These plugins store the output of their processing, and can even improve their models and re-process data to improve accuracy.
The next phase of our product will be the annotator, the Minto Engine. And, after that, we’ll roll out our SDK for building interactive multimedia applications.
We also plan to provide consulting services for institutions that may want to implement the technology through a separate entity.
----
`,
"http://robbiebyrd.com/archive":
`# Archive
this is my archive yo`,
"http://www.aol.com":
`# AOL
# beeep beeep boop boooooopppppp`,
}
