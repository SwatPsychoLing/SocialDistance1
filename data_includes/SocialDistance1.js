//var shuffleSequence = seq("i1","i2","setcounter","sep",sepWith("sep", seq("p1","p2","exp4","ep3","p4","exp5","i3", rshuffle("filler",rshuffle("AFEWC","AFEWIC","FEWCIC","FEWC","NEARLYALLC","NEARLYALLIC","NOTALLIC","NOTALLC")))));
var shuffleSequence = seq("i1","i2","i3","setcounter","sep",sepWith("sep", seq("p1", "exp4","p2","exp5","i4",rshuffle("inanimate","plural",rshuffle("near","far","nonspecific")))));
var completionMessage = "Congratulations! You're done with this part of the experiment. Copy and paste this link into your browser to move on to the first survey: https://swarthmore.az1.qualtrics.com/jfe/form/SV_9pBq1ePlb0rTeWV";
var showProgressBar = true;
var equalGroupSizes = false;



var defaults = [
        
        "Separator", {
            transfer: "keypress",
            normalMessage: "Press any key to continue on to the next item.",
            ignoreFailure: true
        },
    	"DashedSentence", {
            mode: "self-paced reading",
            display: "dashed",
            wordPauseTime: 0,
            hideProgressBar: true

        },
        "Question", {
            q: "On a scale of 1 to 7, how well did the second sentence follow from the first?",
            as: ["1", "2", "3", "4", "5", "6", "7"],
            autoFirstChar: true,
            showNumbers: false,
            presentAsScale: true,
            hideProgressBar: true,  
            presentHorizontally: true,
            randomOrder: false,
            leftComment: "(Not naturally at all)", rightComment: "(Very naturally)",
            hasCorrect: 0,
        },
        "AcceptabilityJudgment", {
            as: ["1", "2", "3", "4", "5", "6", "7"], 
            presentAsScale: true, 
            instructions: "Use number keys or click boxes to answer.",
            leftComment: "(Not naturally at all)", rightComment: "(Very naturally)"
        },
        "Message", {
            hideProgressBar: true,
            transfer: "keypress"
        },
        "Form", {
            hideProgressBar: true,
            continueOnReturn: true,
            saveReactionTime: true
        }
        ];

var items = [
         ["setcounter", "__SetCounter__", {  }],
         ["sep", "Separator", { }],
         
         ["i2", "Form", {
             html: { include: "intro1.html" }
         } ],
         
         ["i3", "Form", {
             html: { include: "intro2.html" },
         } ],
         
         ["i1", "Form", {
             html: { include: "bjorkmanSplashPageTurk.html" },
         } ],
         //
         // Practice items
         //

         ["p1", "Question", {q: "\"I am helping my parents move to Vermont. Everything is already packed into the moving truck. Now I am driving it to their new house.\"<br /><br /> On a scale of 1 to 7:  How naturally does \"their\" refer to \"my parents\"?",
               hasCorrect: 0,
               timeOut: 4500
          }], 
         
         ["p2", "Question", {q: "\"I dropped a hammer off of my roof. I had this one for many years. Now I will have to replace them.\"<br /><br /> On a scale of 1-7, how naturally does \"them\" refer to \"a hammer\"?",
               hasCorrect: 0}],
         
         
         ["exp4", "Form", {
             html: { include: "exp4.html" },
         } ],
         
         ["exp5", "Form", {
             html: { include: "exp5.html" },
         } ],  
         
         ["i4", "Form", {
             html: { include: "endofprac.html" },
         } ],   

//
//Critical items 
[["near",1],"Question",{q:"\"I want to set up an appointment with the mechanic to get my tires rotated  The one I always go to has been a family friend for many years. Their lift better be adjustable because my car's wheel base is unusually wide.\"<br /><br /> On a scale of 1 to 7: How naturally does \"their\" refer to \"the mechanic\"?"}],
[["far",1],"Question",{q:"\"I want to set up an appointment with the mechanic to get my tires rotated  The one I intend to go to supposedly specializes in tires. Their lift better be adjustable because my car's wheel base is unusually wide.\"<br /><br /> On a scale of 1 to 7: How naturally does \"their\" refer to \"the mechanic\"?"}],
[["nonspecific",1],"Question",{q:"\"I want to set up an appointment with the mechanic to get my tires rotated  I'm trying to find one that specializes in tires. Their lift better be adjustable because my car's wheel base is unusually wide.\"<br /><br /> On a scale of 1 to 7: How naturally does \"their\" refer to \"the mechanic\"?"}],
[["near",2],"Question",{q:"\"When I got to lecture today, I saw a cell phone on the lectern. The professor from the previous class must have left it behind. I've taken many amazing classes with that person. I hope their phone doesn't get stolen.\"<br /><br /> On a scale of 1 to 7: How naturally does \"their\" refer to \"the professor\"?"}],
[["far",2],"Question",{q:"\"When I got to lecture today, I saw a cell phone on the lectern. The professor from the previous class must have left it behind. I've never taken any classes with that person. I hope their phone doesn't get stolen.\"<br /><br /> On a scale of 1 to 7: How naturally does \"their\" refer to \"the professor\"?"}],
[["nonspecific",2],"Question",{q:"\"When I got to lecture today, I saw a cell phone on the lectern. The professor from the previous class must have left it behind. I have no idea who that person is. I hope their phone doesn't get stolen.\"<br /><br /> On a scale of 1 to 7: How naturally does \"their\" refer to \"the professor\"?"}],
[["near",3],"Question",{q:"\"I am going to a piano concerto this weekend. The pianist is my teacher and has taught me everything I know. I'm looking forward to their performance.\"<br /><br /> On a scale of 1 to 7: How naturally does \"their\" refer to \"the pianist\"?"}],
[["far",3],"Question",{q:"\"I am going to a piano concerto this weekend. I've heard the pianist is very talented. I'm looking forward to their performance.\"<br /><br /> On a scale of 1 to 7: How naturally does \"their\" refer to \"the pianist\"?"}],
[["nonspecific",3],"Question",{q:"\"I am going to a piano concerto this weekend. I am not sure who the pianist will be, but the series has been very good. I'm looking forward to their performance.\"<br /><br /> On a scale of 1 to 7: How naturally does \"their\" refer to \"the pianist\"?"}],
[["near",4],"Question",{q:"\"I have to argue in court tomorrow, and the judge's view of privacy will be the deciding factor. I have argued in front of this one many times and we have a mutual respect. I worry that their view on this case will differ from mine.\"<br /><br /> On a scale of 1 to 7: How naturally does \"their\" refer to \"the judge\"?"}],
[["far",4],"Question",{q:"\"I have to argue in court tomorrow, and the judge's view of privacy will be the deciding factor. I have never heard of the one that has been assigned to my case. I worry that their view on this case will differ from mine.\"<br /><br /> On a scale of 1 to 7: How naturally does \"their\" refer to \"the judge\"?"}],
[["nonspecific",4],"Question",{q:"\"I have to argue in court tomorrow, and the judge's view of privacy will be the deciding factor. I do not know which one will hear my case. I worry that their view on this case will differ from mine.\"<br /><br /> On a scale of 1 to 7: How naturally does \"their\" refer to \"the judge\"?"}],
[["near",5],"Question",{q:"\"I am going to arrange the magician for my son's birthday party. The person I hope to book is my cousin, who has been doing magic for years. I hope my son likes them because I want his day to be special.\"<br /><br /> On a scale of 1 to 7: How naturally does \"them\" refer to \"the magician\"?"}],
[["far",5],"Question",{q:"\"I am going to arrange the magician for my son's birthday party. The person I hope to book was suggested by my cousin, who has been doing magic for years. I hope my son likes them because I want his day to be special.\"<br /><br /> On a scale of 1 to 7: How naturally does \"them\" refer to \"the magician\"?"}],
[["nonspecific",5],"Question",{q:"\"I am going to arrange the magician for my son's birthday party. I plan to get the name of a person from my cousin, who has been doing magic for years.  I hope my son likes them because I want his day to be special.\"<br /><br /> On a scale of 1 to 7: How naturally does \"them\" refer to \"the magician\"?"}],
[["near",6],"Question",{q:"\"I have to see the dentist soon. I've been going to the same one for twenty years and have always been happy. I need them to fix my chipped tooth.\"<br /><br /> On a scale of 1 to 7: How naturally does \"them\" refer to \"the dentist\"?"}],
[["far",6],"Question",{q:"\"I have to see the dentist soon. My friend recommended one who is allegedly quite good. I need them to fix my chipped tooth.\"<br /><br /> On a scale of 1 to 7: How naturally does \"them\" refer to \"the dentist\"?"}],
[["nonspecific",6],"Question",{q:"\"I have to see the dentist soon. I haven't gone since I was little so I will need a new one. I need them to fix my chipped tooth.\"<br /><br /> On a scale of 1 to 7: How naturally does \"them\" refer to \"the dentist\"?"}],
[["near",7],"Question",{q:"\"It's my responsibility to find the photographer for my daughter's bridal shower. I'm going with the one that I used for all of my kids’ graduation parties. I’ll have to schedule them very soon.\"<br /><br /> On a scale of 1 to 7: How naturally does \"them\" refer to \"the photographer\"?"}],
[["far",7],"Question",{q:"\"It's my responsibility to find the photographer for my daughter's bridal shower. I'm going with the one I saw advertised in the newspaper yesterday. I’ll have to schedule them very soon.\"<br /><br /> On a scale of 1 to 7: How naturally does \"them\" refer to \"the photographer\"?"}],
[["nonspecific",7],"Question",{q:"\"It's my responsibility to find the photographer for my daughter's bridal shower. I’ve never hired one before. I’ll have to schedule them very soon.\"<br /><br /> On a scale of 1 to 7: How naturally does \"them\" refer to \"the photographer\"?"}],
[["near",8],"Question",{q:"\"I need to talk to an accountant about our billing procedures. I have been using a really good one for many years. I will give them the new form to review.\"<br /><br /> On a scale of 1 to 7: How naturally does \"them\" refer to \"an accountant\"?"}],
[["far",8],"Question",{q:"\"I need to talk to an accountant about our billing procedures. I am meeting one for the first time today. I will give them the new form to review.\"<br /><br /> On a scale of 1 to 7: How naturally does \"them\" refer to \"an accountant\"?"}],
[["nonspecific",8],"Question",{q:"\"I need to talk to an accountant about our billing procedures. I will look for one later today. I will give them the new form to review.\"<br /><br /> On a scale of 1 to 7: How naturally does \"them\" refer to \"an accountant\"?"}],
[["near",9],"Question",{q:"\"It's time to go to the hair stylist. I have been going to my current one since I was little. My hair is really long so they will have a lot of work to do.\"<br /><br /> On a scale of 1 to 7: How naturally does \"they\" refer to \"the hair stylist\"?"}],
[["far",9],"Question",{q:"\"It's time to go to the hair stylist. I just moved to town, but I heard about one from a coworker. My hair is really long so they will have a lot of work to do.\"<br /><br /> On a scale of 1 to 7: How naturally does \"they\" refer to \"the hair stylist\"?"}],
[["nonspecific",9],"Question",{q:"\"It's time to go to the hair stylist. I just moved to town, so I need a new one. My hair is really long so they will have a lot of work to do.\"<br /><br /> On a scale of 1 to 7: How naturally does \"they\" refer to \"the hair stylist\"?"}],
[["near",10],"Question",{q:"\"In our new office space, the receptionist will be relocated. The one that works for our firm is super friendly but is used to having privacy. They will be the very first face clients see upon entering the new space.\"<br /><br /> On a scale of 1 to 7: How naturally does \"they\" refer to \"the receptionist\"?"}],
[["far",10],"Question",{q:"\"In our new office space, the receptionist will be relocated. I hope the one my firm just hired turns out to be friendly and not overly private. They will be the very first face clients see upon entering the new space.\"<br /><br /> On a scale of 1 to 7: How naturally does \"they\" refer to \"the receptionist\"?"}],
[["nonspecific",10],"Question",{q:"\"In our new office space, the receptionist will be relocated. I hope the one we end up hiring turns out to be friendly and not overly private.  They will be the very first face clients see upon entering the new space.\"<br /><br /> On a scale of 1 to 7: How naturally does \"they\" refer to \"the receptionist\"?"}],
[["near",11],"Question",{q:"\"I’ve been feeling sick lately, and I need to make an appointment with the doctor. The one I go to is really good and always makes time for me. I hope that they can give me a diagnosis quickly.\"<br /><br /> On a scale of 1 to 7: How naturally does \"they\" refer to \"the doctor\"?"}],
[["far",11],"Question",{q:"\"I’ve been feeling sick lately, and I need to make an appointment with the doctor. This will be my first time going to the new one. I hope that they can give me a diagnosis quickly.\"<br /><br /> On a scale of 1 to 7: How naturally does \"they\" refer to \"the doctor\"?"}],
[["nonspecific",11],"Question",{q:"\"I’ve been feeling sick lately, and I need to make an appointment with the doctor. I’m still looking for a good one. I hope that they can give me a diagnosis quickly.\"<br /><br /> On a scale of 1 to 7: How naturally does \"they\" refer to \"the doctor\"?"}],
[["near",12],"Question",{q:"\"My sink has broken again, so I need to call the plumber. The one I've been using comes quickly and always cuts me a deal. I hope they can fix it once and for all.\"<br /><br /> On a scale of 1 to 7: How naturally does \"they\" refer to \"the plumber\"?"}],
[["far",12],"Question",{q:"\"My sink has broken again, so I need to call the plumber. My old one hasn't done his job well, so my neighbor recommended a different one. I hope they can fix it once and for all.\"<br /><br /> On a scale of 1 to 7: How naturally does \"they\" refer to \"the plumber\"?"}],
[["nonspecific",12],"Question",{q:"\"My sink has broken again, so I need to call the plumber. My old one hasn't done his job well, so I need to find a new one. I hope they can fix it once and for all.\"<br /><br /> On a scale of 1 to 7: How naturally does \"they\" refer to \"the plumber\"?"}],
[["plural",101],"Question",{q:"\"The hockey players won a game last night. The crowd was in rare form. I heard they played spectacularly despite key injuries.\"<br /><br /> On a scale of 1 to 7: How naturally does \"they\" refer to \"the hockey players\"?"}],
[["plural",102],"Question",{q:"\"As editor, I should speak to the reporters tonight. I am on a tight deadline. I need them to submit the articles for tomorrow's paper early enough to finish on time.\"<br /><br /> On a scale of 1 to 7: How naturally does \"them\" refer to \"the reporters\"?"}],
[["plural",103],"Question",{q:"\"I started a restaurant, and hired some very talented cooks. These ones were trained in Lyon. Their skill with knives is unmatched.\"<br /><br /> On a scale of 1 to 7: How naturally does \"their\" refer to \"some very talented cooks\"?"}],
[["plural",104],"Question",{q:"\"I will prepare a meal for my coworkers. Some are picky eaters, so I need to be careful what I cook. I hope they like the food.\"<br /><br /> On a scale of 1 to 7: How naturally does \"they\" refer to \"my coworkers\"?"}],
[["plural",105],"Question",{q:"\"I was stopped by some construction workers during my commute this morning. I had to take a detour. They were putting new asphalt on the weathered road.\"<br /><br /> On a scale of 1 to 7: How naturally does \"they\" refer to \"some construction workers\"?"}],
[["plural",106],"Question",{q:"\"The taxi drivers in front of me were speeding. Fortunately there was no accident. I saw one of them get pulled over.\"<br /><br /> On a scale of 1 to 7: How naturally does \"them\" refer to \"the taxi drivers\"?"}],
[["plural",107],"Question",{q:"\"My ship's crew members are sleeping below deck. There is stormy weather ahead. I will need them to take down the sails.\"<br /><br /> On a scale of 1 to 7: How naturally does \"them\" refer to \"my ship's crew members\"?"}],
[["plural",108],"Question",{q:"\"The office building caught fire. The firefighters will show up momentarily. Everyone has evacuated the building. I hope they stop the fire quickly.\"<br /><br /> On a scale of 1 to 7: How naturally does \"they\" refer to \"the firefighters\"?"}],
[["plural",109],"Question",{q:"\"The artists are preparing brand new works to be shown at the gallery These will likely be some of the best created. Their paintings will hang on the second floor.\"<br /><br /> On a scale of 1 to 7: How naturally does \"their\" refer to \"the artists\"?"}],
[["plural",110],"Question",{q:"\"The guards are protecting the gate. These ones have worked for here for years. Their job is to ensure only people with proper authentication pass by.\"<br /><br /> On a scale of 1 to 7: How naturally does \"their\" refer to \"the guards\"?"}],
[["plural",111],"Question",{q:"\"The customers are standing in line to pay for groceries. The credit card machine is broken. I will have to wait in line with the rest of them.\"<br /><br /> On a scale of 1 to 7: How naturally does \"them\" refer to \"the customers\"?"}],
[["plural",112],"Question",{q:"\"I am preparing a class for my students. I wrote a syllabus. I put the textbooks on their desks.\"<br /><br /> On a scale of 1 to 7: How naturally does \"their\" refer to \"my students\"?"}],
[["inanimate",113],"Question",{q:"\"I brought a chair into my office. This one was carved by my dad, who is a woodsmith. Their legs are engraved with intricate designs.\"<br /><br /> On a scale of 1 to 7: How naturally does \"their\" refer to \"a chair\"?"}],
[["inanimate",114],"Question",{q:"\"I wrote a poem for my english class. This one is a sonnet, which is a form I've always had trouble with. They took a very long time to write.\"<br /><br /> On a scale of 1 to 7: How naturally does \"they\" refer to \"a poem\"?"}],
[["inanimate",115],"Question",{q:"\"I am starting a fire in my fireplace. Because this one is very large, I will need a lot of wood. I will place the wood in them.\"<br /><br /> On a scale of 1 to 7: How naturally does \"them\" refer to \"my fireplace\"?"}],
[["inanimate",116],"Question",{q:"\"My daughter was playing a game on her ipad all day. She has homework that is due tomorrow. I told her to turn them off.\"<br /><br /> On a scale of 1 to 7: How naturally does \"them\" refer to \"a game\"?"}],
[["inanimate",117],"Question",{q:"\"A pen was left on the comforter. It ended up leaking. I will need to wash their cover.\"<br /><br /> On a scale of 1 to 7: How naturally does \"their\" refer to \"the comforter\"?"}],
[["inanimate",118],"Question",{q:"\"I bought a new couch last night. I found this one at a low price. They are in the living room.\"<br /><br /> On a scale of 1 to 7: How naturally does \"they\" refer to \"a new couch\"?"}],
[["inanimate",119],"Question",{q:"\"I am planting the new tree I bought in my backyard. This one will probably live hundreds of years. They will grow very tall.\"<br /><br /> On a scale of 1 to 7: How naturally does \"they\" refer to \"a new tree\"?"}],
[["inanimate",120],"Question",{q:"\"I was reading a book about World War II. This one was not very interesting. I put them back on the shelf.\"<br /><br /> On a scale of 1 to 7: How naturally does \"them\" refer to \"a book\"?"}],
[["inanimate",121],"Question",{q:"\"I dropped my watch. I've had this one since I was little. Their hands snapped off.\"<br /><br /> On a scale of 1 to 7: How naturally does \"their\" refer to \"my watch\"?"}],
[["inanimate",122],"Question",{q:"\"I want to change the channel but I can't find the remote. This is not the first time this has happened. They must have fallen between the cushions.\"<br /><br /> On a scale of 1 to 7: How naturally does \"they\" refer to \"the remote\"?"}],
[["inanimate",123],"Question",{q:"\"I was playing pool with my friend, and I sank the eight ball. I was not familiar with the rules. I should not have sunk them before the other balls.\"<br /><br /> On a scale of 1 to 7: How naturally does \"them\" refer to \"the eight ball\"?"}],
[["inanimate",124],"Question",{q:"\"I need to replace the zipper on my jacket. My grandfather gave me this one. I cut my finger on their teeth.\"<br /><br /> On a scale of 1 to 7: How naturally does \"their\" refer to \"the jacket\"?"}],
];