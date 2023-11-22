function getData() {

    var dtData = {
        "name": "Which device is right for you?",
        "nodes": {
            "1": {
                "is_root": "1",
                "page_title": "Start",
                "content": "<p>Tell us about the wildlife you&#39;re trying to monitor.</p>",
                "question": "What animals do you want to record?",
                "project_node_id": "1",
                "display_order": "1",
                "buttons": {
                    "0": {
                        "project_node_id": "1",
                        "button_text": "Bats",
                        "hover_text": "Bats that echolocate at ultrasonic frequencies",
                        "button_link": "3",
                        "rank": "1"
                    },
                    "1": {
                        "project_node_id": "1",
                        "button_text": "Birds, frogs or other audible animals",
                        "hover_text": "Anything audible; from owls to koalas, howler monkey to cicada, if you can hear it, we can record it!",
                        "button_link": "2",
                        "rank": "2"
                    },
                    "2": {
                        "project_node_id": "1",
                        "button_text": "Both bats and other audible animals",
                        "hover_text": "You can record it all, ultrasonic and acoustic. It doesn't have to be in the same deployment, but you want a recorder that covers all the bases.",
                        "button_link": "4",
                        "rank": "3"
                    }
                }
            },
            "2": {
                "is_root": "0",
                "page_title": "Birds, frogs or other audible animals",
                "content": "<p>So you&#39;ll need an acoustic (audible sound) recorder. Let&#39;s help you narrow this down.</p>",
                "question": "Do you need to record for more than 320 hours in a deployment?",
                "project_node_id": "2",
                "display_order": "2",
                "buttons": {
                    "0": {
                        "project_node_id": "2",
                        "button_text": "Yes",
                        "hover_text": "More than 320 hours (that's more than 13 days at 24hrs/day)",
                        "button_link": "5",
                        "rank": "1"
                    },
                    "1": {
                        "project_node_id": "2",
                        "button_text": "No",
                        "hover_text": "Less than 320 hours",
                        "button_link": "6",
                        "rank": "2"
                    }
                }
            },
            "3": {
                "is_root": "0",
                "page_title": "Bats",
                "content": "<p>So you&#39;ll need a bat detector (one with an ultrasonic microphone). Let&#39;s narrow this down...</p>",
                "question": "How do you want to monitor the bats?",
                "project_node_id": "3",
                "display_order": "3",
                "buttons": {
                    "0": {
                        "project_node_id": "3",
                        "button_text": "Actively",
                        "hover_text": "You want a live output to know what's flying around.",
                        "button_link": "13",
                        "rank": "1"
                    },
                    "1": {
                        "project_node_id": "3",
                        "button_text": "Moving Transect",
                        "hover_text": "You and the detector are going to be moving; walking, driving, cycling or even sailing.",
                        "button_link": "14",
                        "rank": "2"
                    },
                    "2": {
                        "project_node_id": "3",
                        "button_text": "Passively",
                        "hover_text": "You want to leave the detector out in the field and collect it later.",
                        "button_link": "15",
                        "rank": "3"
                    }
                }
            },
            "4": {
                "is_root": "0",
                "page_title": "Both bats and other audible animals",
                "content": "<p>So you&#39;ll need a recorder that can do it all! No problem, let&#39;s help you narrow this down.</p>",
                "question": "Do you need to record both at the same time?",
                "project_node_id": "4",
                "display_order": "4",
                "buttons": {
                    "0": {
                        "project_node_id": "4",
                        "button_text": "Yes, simultaneously",
                        "hover_text": "Record bat files from the ultrasonic microphone at the same time as recording acoustic files from the acoustic microphone",
                        "button_link": "27",
                        "rank": "1"
                    },
                    "1": {
                        "project_node_id": "4",
                        "button_text": "No, at different times",
                        "hover_text": "You'll set up the detector to record ultrasonic (bats) some times and acoustic (audible) at other times.",
                        "button_link": "28",
                        "rank": "2"
                    }
                }
            },
            "5": {
                "is_root": "0",
                "page_title": "Acoustic (more than 320 hrs)",
                "content": "<p>Alright, you need a longer deployment, let&#39;s look at the recording you want to do.</p>",
                "question": "How many acoustic channels do you need?",
                "project_node_id": "5",
                "display_order": "5",
                "buttons": {
                    "0": {
                        "project_node_id": "5",
                        "button_text": "1 Channel (Mono)",
                        "hover_text": "Mono recording is recording one file from one microphone (channel)",
                        "button_link": "10",
                        "rank": "1"
                    },
                    "1": {
                        "project_node_id": "5",
                        "button_text": "2 Channels (Stereo)",
                        "hover_text": "Stereo is recording one file from two microphones. The recording will have multiple ‘channels’",
                        "button_link": "8",
                        "rank": "2"
                    },
                    "2": {
                        "project_node_id": "5",
                        "button_text": "3 Channels (1 Mono & 1 Stereo)",
                        "hover_text": "This gives you 2 recordings, one with 2 channels and one with a single channel. This may be useful if you want to mount one microphone a distance from the recorder",
                        "button_link": "9",
                        "rank": "3"
                    }
                }
            },
            "6": {
                "is_root": "0",
                "page_title": "Acoustic (recording for less than 320hrs)",
                "content": "<p>Alright, you need a shorter deployment, let&#39;s look at the recording you want to do.</p>",
                "question": "How many acoustic channels do you need?",
                "project_node_id": "6",
                "display_order": "6",
                "buttons": {
                    "0": {
                        "project_node_id": "6",
                        "button_text": "One (Mono)",
                        "hover_text": "Mono recording is recording one file from one microphone (channel)",
                        "button_link": "11",
                        "rank": "1"
                    },
                    "1": {
                        "project_node_id": "6",
                        "button_text": "Two (Stereo)",
                        "hover_text": "Stereo is recording one file from two microphones. The recording will have multiple ‘channels’",
                        "button_link": "12",
                        "rank": "2"
                    },
                    "2": {
                        "project_node_id": "6",
                        "button_text": "Three (1 Stereo and 1 Mono)",
                        "hover_text": "This gives you 2 recordings, one with 2 channels and one with a single channel. This may be useful if you want to mount one microphone a distance from the recorder",
                        "button_link": "9",
                        "rank": "3"
                    }
                }
            },
            "8": {
                "is_root": "0",
                "page_title": "Ranger + 2 low-profile acoustic microphones",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the <strong>Ranger</strong>, with <strong>two low-profile acoustic microphones</strong>.&nbsp;</p><p>View the features, specifications and pricing here.</p>",
                "question": "",
                "project_node_id": "8",
                "display_order": "8",
                "buttons": {}
            },
            "9": {
                "is_root": "0",
                "page_title": "Ranger + 2 low-profile acoustic mics + 1 omnidirectional acoustic microphone",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the <strong>Ranger</strong>, with <strong>two low-profile acoustic microphones</strong> and <strong>one omnidirectional acoustic microphone</strong>.&nbsp;</p><p>View the features, specifications and pricing here.</p>",
                "question": "",
                "project_node_id": "9",
                "display_order": "9",
                "buttons": {}
            },
            "10": {
                "is_root": "0",
                "page_title": "Ranger + 1 low-profile acoustic microphone",
                "content": "<p>The best recorder for your survey needs is the <strong>Ranger</strong>, with <strong>one low-profile acoustic microphone</strong>.&nbsp;</p><p>View the features, specifications and pricing here.</p>",
                "question": "",
                "project_node_id": "10",
                "display_order": "10",
                "buttons": {}
            },
            "11": {
                "is_root": "0",
                "page_title": "Chorus with low-profile acoustic microphone",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the <strong>Chorus</strong>, with <strong>one low-profile acoustic microphone</strong>.&nbsp;</p><p>View the features, specifications and pricing here.</p>",
                "question": "",
                "project_node_id": "11",
                "display_order": "11",
                "buttons": {}
            },
            "12": {
                "is_root": "0",
                "page_title": "Chorus with two low-profile acoustic microphones",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the <strong>Chorus</strong>, with two low-profile acoustic microphones.&nbsp;</p><p>View the features, specifications and pricing here.</p>",
                "question": "",
                "project_node_id": "12",
                "display_order": "12",
                "buttons": {}
            },
            "13": {
                "is_root": "0",
                "page_title": "Actively",
                "content": "<p>Alright, you want to monitor the bats in real-time, what sort of live output do you prefer?</p>",
                "question": "Do you want to see and hear the calls?",
                "project_node_id": "13",
                "display_order": "13",
                "buttons": {
                    "0": {
                        "project_node_id": "13",
                        "button_text": "Only hear",
                        "hover_text": "Just hear the bats live",
                        "button_link": "16",
                        "rank": "1"
                    },
                    "1": {
                        "project_node_id": "13",
                        "button_text": "Hear and see the calls",
                        "hover_text": "You want to see the spectrograms and listen in real time",
                        "button_link": "17",
                        "rank": "2"
                    }
                }
            },
            "14": {
                "is_root": "0",
                "page_title": "Moving Transect",
                "content": "<p>Alright, you&#39;re on the move is a visual output important?</p>",
                "question": "Do you need to see the calls in real time?",
                "project_node_id": "14",
                "display_order": "14",
                "buttons": {
                    "0": {
                        "project_node_id": "14",
                        "button_text": "Yes",
                        "hover_text": "You want to see the spectrograms while your moving",
                        "button_link": "46",
                        "rank": "1"
                    },
                    "1": {
                        "project_node_id": "14",
                        "button_text": "No",
                        "hover_text": "Seeing the calls isn't important, as long as you are recording them with a transect (and even hearing them through earphones if you like)",
                        "button_link": "20",
                        "rank": "2"
                    }
                }
            },
            "15": {
                "is_root": "0",
                "page_title": "Passively",
                "content": "<p>Passive surveys are the most common way to monitor bats. How long do you anticipate deploying the detector in the field?</p>",
                "question": "Do you need to record for more than 50 nights?",
                "project_node_id": "15",
                "display_order": "15",
                "buttons": {
                    "0": {
                        "project_node_id": "15",
                        "button_text": "No, it will be a shorter deployment",
                        "hover_text": "Less than 50 nights",
                        "button_link": "25",
                        "rank": "1"
                    },
                    "1": {
                        "project_node_id": "15",
                        "button_text": "Yes",
                        "hover_text": "More than 50 nights",
                        "button_link": "26",
                        "rank": "2"
                    }
                }
            },
            "16": {
                "is_root": "0",
                "page_title": "Anabat Scout",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the <strong>Anabat Scout</strong>.&nbsp;</p><p>View the features, specifications and pricing here.</p><p><br></p><p><br></p>",
                "question": "",
                "project_node_id": "16",
                "display_order": "16",
                "buttons": {}
            },
            "17": {
                "is_root": "0",
                "page_title": "You'll need a Walkabout, which has some microphone accessories",
                "content": "<p>An <strong>Anabat Walkabout</strong> detector has live audio and shows you the bat calls in real time. It includes a built-in omnidirectional microphone which is suitable for most purposes, but do you have any specific requirements for your active bat detector?</p>",
                "question": "Are you doing any of the following?",
                "project_node_id": "17",
                "display_order": "17",
                "buttons": {
                    "0": {
                        "project_node_id": "17",
                        "button_text": "Recording reference calls",
                        "hover_text": "When you capture a bat and record its call when upon released or in a flight chamber",
                        "button_link": "18",
                        "rank": "1"
                    },
                    "1": {
                        "project_node_id": "17",
                        "button_text": "Recording bats over 150kHz",
                        "hover_text": "You plan to record ultra-high frequency bats",
                        "button_link": "18",
                        "rank": "2"
                    },
                    "2": {
                        "project_node_id": "17",
                        "button_text": "Doing driving transects",
                        "hover_text": "You're planning on driving a vehicle while actively monitoring",
                        "button_link": "46",
                        "rank": "3"
                    },
                    "3": {
                        "project_node_id": "17",
                        "button_text": "Pinpointing a roost entrance",
                        "hover_text": "You want to focus your detection in a specific area, such as a roost entrance",
                        "button_link": "18",
                        "rank": "4"
                    },
                    "4": {
                        "project_node_id": "17",
                        "button_text": "None of the these, just basic active monitoring",
                        "hover_text": "Keep it simple, you just want to record bats actively",
                        "button_link": "19",
                        "rank": "5"
                    }
                }
            },
            "18": {
                "is_root": "0",
                "page_title": "Anabat Walkabout + Directional microphone and adapter",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the <strong>Anabat Walkabout</strong> with the <strong>directional microphone and adapter</strong>.&nbsp;</p><p>View the features, specifications and pricing here.</p><p id=\"isPasted\"><br></p><p><br></p>",
                "question": "",
                "project_node_id": "18",
                "display_order": "18",
                "buttons": {}
            },
            "19": {
                "is_root": "0",
                "page_title": "Anabat Walkabout",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the <strong>Anabat Walkabout</strong> which has a built-in omnidirectional microphone.</p><p>View the features, specifications and pricing here.</p><p id=\"isPasted\"><br></p>",
                "question": "",
                "project_node_id": "19",
                "display_order": "19",
                "buttons": {}
            },
            "20": {
                "is_root": "0",
                "page_title": "No visual output needed",
                "content": "<p>So we can point you to the best detector for your moving transect survey, can you let us know if you have any specific requirements?</p>",
                "question": "Are you doing any of the following?",
                "project_node_id": "20",
                "display_order": "20",
                "buttons": {
                    "0": {
                        "project_node_id": "20",
                        "button_text": "Doing driving transects",
                        "hover_text": "You're planning on driving a vehicle for this moving transect",
                        "button_link": "23",
                        "rank": "1"
                    },
                    "1": {
                        "project_node_id": "20",
                        "button_text": "Recording bats over 130kHz",
                        "hover_text": "You plan to record high-frequency bats - echolocating above 130kHz",
                        "button_link": "21",
                        "rank": "2"
                    },
                    "2": {
                        "project_node_id": "20",
                        "button_text": "Pinpointing a roost entrance",
                        "hover_text": "You want to focus your detection in a specific area, such as a roost entrance",
                        "button_link": "23",
                        "rank": "3"
                    },
                    "3": {
                        "project_node_id": "20",
                        "button_text": "None of the these, just a basic moving transect",
                        "hover_text": "Keep it simple, you're just doing a plain-old transect",
                        "button_link": "22",
                        "rank": "4"
                    }
                }
            },
            "21": {
                "is_root": "0",
                "page_title": "You'll need a Ranger, which has several ultrasonic microphone options",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the <strong>Ranger</strong>. To choose the appropriate microphone/s, answer below.</p><p>View the features, specifications and pricing for the Ranger here.</p>",
                "question": "Which of the following are you doing?",
                "project_node_id": "21",
                "display_order": "21",
                "buttons": {
                    "0": {
                        "project_node_id": "21",
                        "button_text": "Recording bats less than 150kHz",
                        "hover_text": "The bats are high frequency, but not THAT high",
                        "button_link": "24",
                        "rank": "1"
                    },
                    "1": {
                        "project_node_id": "21",
                        "button_text": "Recording bats over 150kHz",
                        "hover_text": "The bats are ultra-high frequency",
                        "button_link": "23",
                        "rank": "2"
                    }
                }
            },
            "22": {
                "is_root": "0",
                "page_title": "Chorus with a low-profile ultrasonic microphone",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the <strong>Chorus</strong> with a <strong>low-profile ultrasonic microphone</strong>.&nbsp;</p><p>View the features, specifications and pricing here.</p>",
                "question": "",
                "project_node_id": "22",
                "display_order": "22",
                "buttons": {}
            },
            "23": {
                "is_root": "0",
                "page_title": "Ranger with a directional ultrasonic microphone",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the <strong>Ranger</strong> with a <strong>directional ultrasonic microphone</strong>.&nbsp;</p><p>View the features, specifications and pricing here.</p>",
                "question": "",
                "project_node_id": "23",
                "display_order": "23",
                "buttons": {}
            },
            "24": {
                "is_root": "0",
                "page_title": "Ranger with an omnidirectional ultrasonic microphone",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the <strong>Ranger</strong> with an <strong>omnidirectional ultrasonic microphone</strong>.&nbsp;</p><p>View the features, specifications and pricing here.</p>",
                "question": "",
                "project_node_id": "24",
                "display_order": "24",
                "buttons": {}
            },
            "25": {
                "is_root": "0",
                "page_title": "No, it will be a shorter deployment",
                "content": "<p>So we can point you to the best detector for your passive survey, can you let us know if you have any specific requirements?</p>",
                "question": "Are you doing any of the following?",
                "project_node_id": "25",
                "display_order": "25",
                "buttons": {
                    "0": {
                        "project_node_id": "25",
                        "button_text": "Pinpointing a roost entrance",
                        "hover_text": "You want to focus your detection in a specific area, such as a roost entrance; or away from noisy elements like wind turbines",
                        "button_link": "23",
                        "rank": "1"
                    },
                    "1": {
                        "project_node_id": "25",
                        "button_text": "Recording bats over 130kHz, but under 150kHz",
                        "hover_text": "The bats are high frequency, but not THAT high",
                        "button_link": "24",
                        "rank": "2"
                    },
                    "2": {
                        "project_node_id": "25",
                        "button_text": "Recording bats over 150kHz",
                        "hover_text": "The bats are ultra-high frequency",
                        "button_link": "23",
                        "rank": "3"
                    },
                    "3": {
                        "project_node_id": "25",
                        "button_text": "You want to mount the microphone on an extension cable",
                        "hover_text": "Extension cables can be useful to improve recording quality and open a broader range of mounting options",
                        "button_link": "21",
                        "rank": "4"
                    },
                    "4": {
                        "project_node_id": "25",
                        "button_text": "None of these, just a basic passive survey",
                        "hover_text": "Keep it simple",
                        "button_link": "22",
                        "rank": "5"
                    }
                }
            },
            "26": {
                "is_root": "0",
                "page_title": "You'll need a Ranger, which has a range of microphone options.",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the <strong>Ranger</strong>. To choose the appropriate microphone/s, answer below.</p><p>View the features, specifications and pricing for the Ranger here.</p>",
                "question": "Are you doing any of the following?",
                "project_node_id": "26",
                "display_order": "26",
                "buttons": {
                    "0": {
                        "project_node_id": "26",
                        "button_text": "Pinpointing a roost entrance",
                        "hover_text": "You want to focus your detection in a specific area, such as a roost entrance; or away from noisy elements like wind turbines",
                        "button_link": "23",
                        "rank": "1"
                    },
                    "1": {
                        "project_node_id": "26",
                        "button_text": "Recording bats over 150kHz",
                        "hover_text": "The bats are ultra-high frequency",
                        "button_link": "23",
                        "rank": "2"
                    },
                    "2": {
                        "project_node_id": "26",
                        "button_text": "Neither of these, just a long-duration passive survey.",
                        "hover_text": "Keep it simple",
                        "button_link": "24",
                        "rank": "3"
                    }
                }
            },
            "27": {
                "is_root": "0",
                "page_title": "You'll need a Ranger, which has a range of microphone options.",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the <strong>Ranger</strong>. To choose the appropriate microphone/s, answer below.</p><p>View the features, specifications and pricing for the Ranger here.</p>",
                "question": "For the acoustic recording (birds, frogs or other audible animals) do you need to record in stereo or mono?",
                "project_node_id": "27",
                "display_order": "27",
                "buttons": {
                    "0": {
                        "project_node_id": "27",
                        "button_text": "Stereo",
                        "hover_text": "Stereo is recording one file from two microphones. The recording will have multiple ‘channels’",
                        "button_link": "29",
                        "rank": "1"
                    },
                    "1": {
                        "project_node_id": "27",
                        "button_text": "Mono",
                        "hover_text": "Mono recording is recording one file from one microphone (channel)",
                        "button_link": "30",
                        "rank": "2"
                    }
                }
            },
            "28": {
                "is_root": "0",
                "page_title": "Record bats and other animals at different times",
                "content": "<p>So we can make sure we&#39;re covering all the bases, tell us about your acoustic (audible) recording needs.</p>",
                "question": "For the acoustic recording (birds, frogs or other audible animals) do you need to record in stereo or mono?",
                "project_node_id": "28",
                "display_order": "28",
                "buttons": {
                    "0": {
                        "project_node_id": "28",
                        "button_text": "Stereo",
                        "hover_text": "Stereo is recording one file from two microphones. The recording will have multiple ‘channels’",
                        "button_link": "35",
                        "rank": "1"
                    },
                    "1": {
                        "project_node_id": "28",
                        "button_text": "Mono",
                        "hover_text": "Mono recording is recording one file from one microphone (channel)",
                        "button_link": "36",
                        "rank": "2"
                    }
                }
            },
            "29": {
                "is_root": "0",
                "page_title": "Ultrasonic + Stereo acoustic",
                "content": "<p>Got it, stereo acoustic recording is the way to go. Can you tell us some more about your bat survey needs?</p>",
                "question": "For your bat recording, are you planning on doing any of the following?",
                "project_node_id": "29",
                "display_order": "29",
                "buttons": {
                    "0": {
                        "project_node_id": "29",
                        "button_text": "Pinpointing a roost entrance",
                        "hover_text": "You want to focus your detection in a specific area, such as a roost entrance; or away from noisy elements like wind turbines",
                        "button_link": "31",
                        "rank": "1"
                    },
                    "1": {
                        "project_node_id": "29",
                        "button_text": "Recording bats above 150kHz",
                        "hover_text": "The bats are ultra-high frequency",
                        "button_link": "31",
                        "rank": "2"
                    },
                    "2": {
                        "project_node_id": "29",
                        "button_text": "None of these",
                        "hover_text": "I'll be keeping it simple",
                        "button_link": "32",
                        "rank": "3"
                    }
                }
            },
            "30": {
                "is_root": "0",
                "page_title": "Ultrasonic + Mono Acoustic",
                "content": "<p>Got it, keep it simple with mono acoustic recording. Can you tell us some more about your bat survey needs?</p>",
                "question": "For your bat recording, are you planning on doing any of the following?",
                "project_node_id": "30",
                "display_order": "30",
                "buttons": {
                    "0": {
                        "project_node_id": "30",
                        "button_text": "Pinpointing a roost entrance",
                        "hover_text": "You want to focus your detection in a specific area, such as a roost entrance; or away from noisy elements like wind turbines",
                        "button_link": "33",
                        "rank": "1"
                    },
                    "1": {
                        "project_node_id": "30",
                        "button_text": "Recording bats over 150kHz",
                        "hover_text": "The bats are ultra-high frequency",
                        "button_link": "33",
                        "rank": "2"
                    },
                    "2": {
                        "project_node_id": "30",
                        "button_text": "Neither of these",
                        "hover_text": "Keep it simple",
                        "button_link": "34",
                        "rank": "3"
                    }
                }
            },
            "31": {
                "is_root": "0",
                "page_title": "Ranger + 2 low-profile acoustic mics + 1 directional ultrasonic microphone",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the <strong>Ranger</strong>, with <strong>two low-profile acoustic microphones</strong> and <strong>one directional ultrasonic microphone</strong>.&nbsp;</p><p>View the features, specifications and pricing here.</p>",
                "question": "",
                "project_node_id": "31",
                "display_order": "31",
                "buttons": {}
            },
            "32": {
                "is_root": "0",
                "page_title": "Ranger + 2 low-profile acoustic microphone + 1 omnidirectional ultrasonic microphone",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the <strong>Ranger</strong>, with t<strong>wo low-profile acoustic microphones </strong>and <strong>o</strong><strong>ne omnidirectional ultrasonic microphone</strong>.&nbsp;</p><p>View the features, specifications and pricing here.</p>",
                "question": "",
                "project_node_id": "32",
                "display_order": "32",
                "buttons": {}
            },
            "33": {
                "is_root": "0",
                "page_title": "Ranger + 1 low-profile acoustic microphone + 1 directional ultrasonic microphone",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the Ranger, with one low-profile acoustic microphone and one directional ultrasonic microphone.&nbsp;</p><p>View the features, specifications and pricing here.</p>",
                "question": "",
                "project_node_id": "33",
                "display_order": "33",
                "buttons": {}
            },
            "34": {
                "is_root": "0",
                "page_title": "Ranger + 1 low-profile acoustic microphone + 1 omnidirectional ultrasonic microphone",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the <strong>Ranger</strong>, with <strong>one low-profile acoustic microphone</strong> and <strong>one omnidirectional ultrasonic microphone</strong>.&nbsp;</p><p>View the features, specifications and pricing here.</p>",
                "question": "",
                "project_node_id": "34",
                "display_order": "34",
                "buttons": {}
            },
            "35": {
                "is_root": "0",
                "page_title": "Ultrasonic + Stereo Acoustic",
                "content": "<p>Got it, stereo acoustic recording is the way to go. Can you tell us about any more specific survey needs?</p>",
                "question": "Are you doing any of the following?",
                "project_node_id": "35",
                "display_order": "35",
                "buttons": {
                    "0": {
                        "project_node_id": "35",
                        "button_text": "Recording for more than 50 nights in a single bat survey",
                        "hover_text": "I'll need longer deployments for my bat surveys",
                        "button_link": "37",
                        "rank": "1"
                    },
                    "1": {
                        "project_node_id": "35",
                        "button_text": "Recording for more than 350 hours in a single acoustic/audible survey",
                        "hover_text": "I'll need longer deployments for my acoustic (audible) surveys",
                        "button_link": "37",
                        "rank": "2"
                    },
                    "2": {
                        "project_node_id": "35",
                        "button_text": "Doing driving transects",
                        "hover_text": "You're planning on driving a vehicle for the bat survey",
                        "button_link": "38",
                        "rank": "3"
                    },
                    "3": {
                        "project_node_id": "35",
                        "button_text": "Recording bats over 130kHz",
                        "hover_text": "The bats you're planning to record will be high-frequency",
                        "button_link": "37",
                        "rank": "4"
                    },
                    "4": {
                        "project_node_id": "35",
                        "button_text": "Pinpointing a roost entrance",
                        "hover_text": "You want to focus your detection in a specific area, such as a roost entrance; or away from noisy elements like wind turbines",
                        "button_link": "38",
                        "rank": "5"
                    },
                    "5": {
                        "project_node_id": "35",
                        "button_text": "Mounting the ultrasonic (bat) microphone on an extension cable",
                        "hover_text": "Extension cables can be useful to improve recording quality and open a broader range of mounting options",
                        "button_link": "37",
                        "rank": "6"
                    },
                    "6": {
                        "project_node_id": "35",
                        "button_text": "None of these",
                        "hover_text": "I'll be keeping it simple",
                        "button_link": "44",
                        "rank": "7"
                    }
                }
            },
            "36": {
                "is_root": "0",
                "page_title": "Ultrasonic + Mono Acoustic",
                "content": "<p>Got it, keep it simple with mono acoustic recording. Can you tell us about any more specific survey needs?</p>",
                "question": "Are you doing any of the following?",
                "project_node_id": "36",
                "display_order": "36",
                "buttons": {
                    "0": {
                        "project_node_id": "36",
                        "button_text": "Recording for more than 50 nights in a single bat survey",
                        "hover_text": "I'll need longer deployments for my bat surveys",
                        "button_link": "41",
                        "rank": "1"
                    },
                    "1": {
                        "project_node_id": "36",
                        "button_text": "Recording for more than 350 hours in a single acoustic/audible survey",
                        "hover_text": "I'll need longer deployments for my acoustic (audible) surveys",
                        "button_link": "41",
                        "rank": "2"
                    },
                    "2": {
                        "project_node_id": "36",
                        "button_text": "Doing driving transects",
                        "hover_text": "You're planning on driving a vehicle for the bat survey",
                        "button_link": "42",
                        "rank": "3"
                    },
                    "3": {
                        "project_node_id": "36",
                        "button_text": "Recording bats over 130kHz",
                        "hover_text": "The bats you're planning to record will be high-frequency",
                        "button_link": "41",
                        "rank": "4"
                    },
                    "4": {
                        "project_node_id": "36",
                        "button_text": "Pinpointing a roost entrance",
                        "hover_text": "You want to focus your detection in a specific area, such as a roost entrance; or away from noisy elements like wind turbines",
                        "button_link": "42",
                        "rank": "5"
                    },
                    "5": {
                        "project_node_id": "36",
                        "button_text": "Mounting the ultrasonic (bat) microphone on an extension cable",
                        "hover_text": "Extension cables can be useful to improve recording quality and open a broader range of mounting options",
                        "button_link": "41",
                        "rank": "6"
                    },
                    "6": {
                        "project_node_id": "36",
                        "button_text": "None of these",
                        "hover_text": "I'll be keeping it simple",
                        "button_link": "45",
                        "rank": "7"
                    }
                }
            },
            "37": {
                "is_root": "0",
                "page_title": "You'll need a Ranger, which has a range of microphone options",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the <strong>Ranger</strong>. To choose the appropriate microphone/s, answer below.</p><p>View the features, specifications and pricing for the Ranger here.</p>",
                "question": "Are you recording bats over 150kHz?",
                "project_node_id": "37",
                "display_order": "37",
                "buttons": {
                    "0": {
                        "project_node_id": "37",
                        "button_text": "Yes",
                        "hover_text": "They are ultra-high frequency",
                        "button_link": "38",
                        "rank": "1"
                    },
                    "1": {
                        "project_node_id": "37",
                        "button_text": "No, all the bats I record are lower frequency",
                        "hover_text": "They echolocate high, but not THAT high",
                        "button_link": "40",
                        "rank": "2"
                    }
                }
            },
            "38": {
                "is_root": "0",
                "page_title": "Ranger + 2 low-profile acoustic microphones + 1 directional ultrasonic microphone",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the <strong>Ranger</strong>, with <strong>two low-profile acoustic microphones</strong> and <strong>one directional ultrasonic microphone</strong>.&nbsp;</p><p>View the features, specifications and pricing here.</p>",
                "question": "",
                "project_node_id": "38",
                "display_order": "38",
                "buttons": {}
            },
            "40": {
                "is_root": "0",
                "page_title": "Ranger + 2 low-profile acoustic microphones + 1 omnidirectional ultrasonic microphone",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the <strong>Ranger</strong>, with <strong>two low-profile acoustic microphones</strong> and <strong>one omnidirectional ultrasonic microphone</strong>.&nbsp;</p><p>View the features, specifications and pricing here.</p>",
                "question": "",
                "project_node_id": "40",
                "display_order": "40",
                "buttons": {}
            },
            "41": {
                "is_root": "0",
                "page_title": "You'll need a Ranger, which has a ranger of microphone options",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the <strong>Ranger</strong>. To choose the appropriate microphone/s, answer below.</p><p>View the features, specifications and pricing for the Ranger here.</p>",
                "question": "Are you recording bats over 150kHz?",
                "project_node_id": "41",
                "display_order": "41",
                "buttons": {
                    "0": {
                        "project_node_id": "41",
                        "button_text": "Yes",
                        "hover_text": "They are ultra-high frequency",
                        "button_link": "42",
                        "rank": "1"
                    },
                    "1": {
                        "project_node_id": "41",
                        "button_text": "No",
                        "hover_text": "They echolocate high, but not THAT high",
                        "button_link": "43",
                        "rank": "2"
                    }
                }
            },
            "42": {
                "is_root": "0",
                "page_title": "Ranger + 1 low-profile acoustic microphone + 1 directional ultrasonic microphone",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the <strong>Ranger</strong>, with <strong>one low-profile acoustic microphone</strong> and <strong>one directional ultrasonic microphone</strong>.&nbsp;</p><p>View the features, specifications and pricing here.</p>",
                "question": "",
                "project_node_id": "42",
                "display_order": "42",
                "buttons": {}
            },
            "43": {
                "is_root": "0",
                "page_title": "Ranger + 1 low-profile acoustic microphone + 1 omnidirectional ultrasonic microphone",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the <strong>Ranger</strong>, with <strong>one low-profile acoustic microphone</strong> and <strong>one omnidirectional ultrasonic microphone</strong>.&nbsp;</p><p>View the features, specifications and pricing here.</p>",
                "question": "",
                "project_node_id": "43",
                "display_order": "43",
                "buttons": {}
            },
            "44": {
                "is_root": "0",
                "page_title": "Chorus + 2 low-profile acoustic microphones + 1 low-profile ultrasonic microphone",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the <strong>Chorus</strong>, with <strong>two low-profile acoustic microphones</strong> and <strong>one low-profile ultrasonic microphone</strong>.&nbsp;</p><p>View the features, specifications and pricing here.</p>",
                "question": "",
                "project_node_id": "44",
                "display_order": "44",
                "buttons": {}
            },
            "45": {
                "is_root": "0",
                "page_title": "Chorus + 1 low-profile acoustic microphone + 1 low-profile ultrasonic microphone",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the <strong>Chorus</strong>, with <strong>one low-profile acoustic microphone</strong> and <strong>one low-profile ultrasonic microphone</strong>.&nbsp;</p><p>View the features, specifications and pricing here.</p>",
                "question": "",
                "project_node_id": "45",
                "display_order": "45",
                "buttons": {}
            },
            "46": {
                "is_root": "0",
                "page_title": "Anabat Walkabout + Directional microphone and adapter",
                "content": "<p id=\"isPasted\">The best recorder for your survey needs is the <strong>Anabat Walkabout</strong> with the <strong>directional microphone and adapter</strong> and an <strong>extension cable</strong> so you can mount the microphone outside the vehicle.</p><p>View the features, specifications and pricing here.</p><p id=\"isPasted\"><br></p>",
                "question": "",
                "project_node_id": "46",
                "display_order": "46",
                "buttons": {}
            }
        }
    }

    return dtData;
}