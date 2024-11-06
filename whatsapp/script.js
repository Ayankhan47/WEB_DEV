const users = [
    {
      username: " Adolfe Hitler",
      profilePhoto: "https://images.unsplash.com/photo-1723464840524-d5674220263f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      messages: [
        { text: "Hey there!", type: "sent" },
      { text: "How are you doing?", type: "sent" },
      { text: "I'm good, just a bit busy with work.", type: "received" },
      { text: "Same here! What are you working on?", type: "sent" },
      { text: "A new project with some tight deadlines.", type: "received" },
      { text: "Sounds tough! Hang in there.", type: "sent" },
      { text: "Thanks! Let's meet up this weekend.", type: "received" },
      { text: "Sure! Coffee at 5 PM?", type: "sent" },
      { text: "Works for me!", type: "received" },
      { text: "Great! See you soon.", type: "sent" },
      { text: "See you then!", type: "received" },
      { text: "Hi all!", type: "sent" },
      { text: "Hey Alex!", type: "received" },
      { text: "Anyone up for a quick game later?", type: "sent" },
      { text: "I'm in!", type: "received" },
      { text: "Same here, let's do it.", type: "received" },
      { text: "Cool! 8 PM works?", type: "sent" },
      { text: "Perfect!", type: "received" },
      { text: "Can I invite some friends too?", type: "received" },
      { text: "Of course! The more, the merrier.", type: "sent" },
      { text: "Alright, see you at 8 PM.", type: "received" },
      ]
    },
    {
      username: "Charls leclerc",
      profilePhoto: "https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      messages: [
        { text: "Good morning!", type: "sent" },
      { text: "Good morning! How's everything going?", type: "received" },
      { text: "Not bad. Just trying to wrap up the project.", type: "sent" },
      { text: "Oh, same here!", type: "received" },
      { text: "By the way, do you need help with anything?", type: "sent" },
      { text: "Yes! Can you review my part of the report?", type: "received" },
      { text: "Sure thing, send it over.", type: "sent" },
      { text: "Sent! Let me know what you think.", type: "received" },
      { text: "Got it. I'll review and get back to you.", type: "sent" },
      { text: "Thanks a lot! You're a lifesaver.", type: "received" },
      { text: "Hi all!", type: "sent" },
      { text: "Hey Alex!", type: "received" },
      { text: "Anyone up for a quick game later?", type: "sent" },
      { text: "I'm in!", type: "received" },
      { text: "Same here, let's do it.", type: "received" },
      { text: "Cool! 8 PM works?", type: "sent" },
      { text: "Perfect!", type: "received" },
      { text: "Can I invite some friends too?", type: "received" },
      { text: "Of course! The more, the merrier.", type: "sent" },
      ]
    },
    {
      username: "Ken block",
      profilePhoto: "https://images.unsplash.com/photo-1515214458264-64dfd428339d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      messages: [
        { text: "Hi all!", type: "sent" },
      { text: "Hey Alex!", type: "received" },
      { text: "Anyone up for a quick game later?", type: "sent" },
      { text: "I'm in!", type: "received" },
      { text: "Same here, let's do it.", type: "received" },
      { text: "Cool! 8 PM works?", type: "sent" },
      { text: "Perfect!", type: "received" },
      { text: "Can I invite some friends too?", type: "received" },
      { text: "Of course! The more, the merrier.", type: "sent" },
      { text: "Alright, see you at 8 PM.", type: "received" },
      { text: "See you all!", type: "sent" },
      { text: "Hi all!", type: "sent" },
      { text: "Hey Alex!", type: "received" },
      { text: "Anyone up for a quick game later?", type: "sent" },
      { text: "Same here, let's do it.", type: "received" },
      { text: "Cool! 8 PM works?", type: "sent" },
      { text: "Perfect!", type: "received" },
      { text: "Can I invite some friends too?", type: "received" },
      { text: "Of course! The more, the merrier.", type: "sent" },
      { text: "Alright, see you at 8 PM.", type: "received" },
      { text: "See you all!", type: "sent" },
      { text: "I'm in!", type: "received" }
      ]
    },
    {
      username: "Kie Havertz",
      profilePhoto: "https://images.unsplash.com/photo-1698510047345-ff32de8a3b74?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      messages: [
        { text: "Hey, long time no see!", type: "sent" },
        { text: "Emily! How have you been?", type: "received" },
        { text: "Pretty good. Just busy with life.", type: "sent" },
        { text: "I get that. Same here.", type: "received" },
        { text: "We should catch up soon.", type: "sent" },
        { text: "Absolutely! When are you free?", type: "received" },
        { text: "How about Friday evening?", type: "sent" },
        { text: "Perfect. Dinner at our usual spot?", type: "received" },
        { text: "Sounds great!", type: "sent" },
        { text: "Looking forward to it.", type: "received" },
        { text: "Hi all!", type: "sent" },
      { text: "Hey Alex!", type: "received" },
      { text: "I'm in!", type: "received" },
      { text: "Same here, let's do it.", type: "received" },
      { text: "Cool! 8 PM works?", type: "sent" },
      { text: "Perfect!", type: "received" },
      { text: "Can I invite some friends too?", type: "received" },
      { text: "Of course! The more, the merrier.", type: "sent" },
      { text: "Alright, see you at 8 PM.", type: "received" },
      { text: "See you all!", type: "sent" },
      { text: "Anyone up for a quick game later?", type: "sent" }
      ]
    },
    {
      username: "michael jordan",
      profilePhoto: "https://images.unsplash.com/photo-1513138327801-4a7d216d39d9?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      messages: [
        { text: "What's up, everyone?", type: "sent" },
      { text: "Hey Michael!", type: "received" },
      { text: "Working on anything exciting?", type: "sent" },
      { text: "Just a new side project.", type: "received" },
      { text: "Nice! Need any help?", type: "sent" },
      { text: "Actually, yes. Can I run some ideas by you?", type: "received" },
      { text: "Sure thing, let's set up a call.", type: "sent" },
      { text: "How about 4 PM today?", type: "received" },
      { text: "Great! Talk to you then.", type: "received" },
      { text: "Hi all!", type: "sent" },
      { text: "Hey Alex!", type: "received" },
      { text: "Anyone up for a quick game later?", type: "sent" },
      { text: "I'm in!", type: "received" },
      { text: "Same here, let's do it.", type: "received" },
      { text: "Cool! 8 PM works?", type: "sent" },
      { text: "Perfect!", type: "received" },
      { text: "Can I invite some friends too?", type: "received" },
      { text: "Of course! The more, the merrier.", type: "sent" },
      { text: "Alright, see you at 8 PM.", type: "received" },
      { text: "See you all!", type: "sent" },
      { text: "Works for me!", type: "sent" }
    ]
  },
  {
      username: "lisa white",
      profilePhoto: "https://images.unsplash.com/photo-1726159825405-b003c6242079?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      messages: [
        { text: "Good afternoon!", type: "sent" },
      { text: "Afternoon! How's everything?", type: "received" },
      { text: "Busy, as usual.", type: "sent" },
      { text: "I know the feeling.", type: "received" },
      { text: "Are you free this weekend?", type: "sent" },
      { text: "Yes! What do you have in mind?", type: "received" },
      { text: "Maybe a movie?", type: "sent" },
      { text: "I'm in!", type: "received" },
      { text: "I'll book the tickets.", type: "sent" },
      { text: "Awesome. Thanks!", type: "received" },
      { text: "Hey Alex!", type: "received" },
      { text: "Anyone up for a quick game later?", type: "sent" },
      { text: "I'm in!", type: "received" },
      { text: "Same here, let's do it.", type: "received" },
      { text: "Cool! 8 PM works?", type: "sent" },
      { text: "Perfect!", type: "received" },
      { text: "Can I invite some friends too?", type: "received" },
      { text: "Of course! The more, the merrier.", type: "sent" },
      { text: "Alright, see you at 8 PM.", type: "received" },
      { text: "See you all!", type: "sent" },
      { text: "Hi all!", type: "sent" }
      ]
    },
    {
      username: "chris evans",
      profilePhoto: "https://images.unsplash.com/photo-1503342083860-88762657bae7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      messages: [
        { text: "Hello team!", type: "sent" },
        { text: "I found a bug in the code.", type: "sent" },
        { text: "Oh no! What kind?", type: "received" },
        { text: "A small logic issue, I'll fix it.", type: "sent" },
        { text: "Thanks for catching it!", type: "received" },
        { text: "No worries. I'll push the changes soon.", type: "sent" },
        { text: "Great! Let us know when it's done.", type: "received" },
        { text: "Will do. Almost finished.", type: "sent" },
        { text: "You're the best, Chris!", type: "received" },
        { text: "Hi all!", type: "sent" },
        { text: "Hey Alex!", type: "received" },
        { text: "Anyone up for a quick game later?", type: "sent" },
        { text: "I'm in!", type: "received" },
        { text: "Same here, let's do it.", type: "received" },
        { text: "Cool! 8 PM works?", type: "sent" },
        { text: "Perfect!", type: "received" },
      { text: "Can I invite some friends too?", type: "received" },
      { text: "Of course! The more, the merrier.", type: "sent" },
      { text: "Alright, see you at 8 PM.", type: "received" },
      { text: "See you all!", type: "sent" },
      { text: "Hi Chris!", type: "received" }
      ]
    },
    {
      username: "vin diesel",
      profilePhoto: "https://images.unsplash.com/photo-1723464840524-d5674220263f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      messages: [
        { text: "Hi all!", type: "sent" },
      { text: "Hey Alex!", type: "received" },
      { text: "Anyone up for a quick game later?", type: "sent" },
      { text: "I'm in!", type: "received" },
      { text: "Same here, let's do it.", type: "received" },
      { text: "Cool! 8 PM works?", type: "sent" },
      { text: "Perfect!", type: "received" },
      { text: "Can I invite some friends too?", type: "received" },
      { text: "Of course! The more, the merrier.", type: "sent" },
      { text: "Alright, see you at 8 PM.", type: "received" },
      { text: "See you all!", type: "sent" },
      { text: "Hi all!", type: "sent" },
      { text: "Hey Alex!", type: "received" },
      { text: "Anyone up for a quick game later?", type: "sent" },
      { text: "I'm in!", type: "received" },
      { text: "Same here, let's do it.", type: "received" },
      { text: "Cool! 8 PM works?", type: "sent" },
      { text: "Perfect!", type: "received" },
      { text: "See you all!", type: "sent" },
      { text: "Can I invite some friends too?", type: "received" },
      { text: "Of course! The more, the merrier.", type: "sent" },
      { text: "Alright, see you at 8 PM.", type: "received" }
      ]
    },
    {
      username: "paul walker",
      profilePhoto: "https://images.unsplash.com/photo-1513138327801-4a7d216d39d9?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      messages: [
        { text: "Hey there!", type: "sent" },
        { text: "How are you doing?", type: "sent" },
        { text: "I'm good, just a bit busy with work.", type: "received" },
        { text: "Same here! What are you working on?", type: "sent" },
        { text: "A new project with some tight deadlines.", type: "received" },
        { text: "Sounds tough! Hang in there.", type: "sent" },
        { text: "Thanks! Let's meet up this weekend.", type: "received" },
        { text: "Sure! Coffee at 5 PM?", type: "sent" },
        { text: "Works for me!", type: "received" },
        { text: "Great! See you soon.", type: "sent" },
        { text: "See you then!", type: "received" },
        { text: "Hey there!", type: "sent" },
        { text: "How are you doing?", type: "sent" },
        { text: "I'm good, just a bit busy with work.", type: "received" },
        { text: "Same here! What are you working on?", type: "sent" },
        { text: "A new project with some tight deadlines.", type: "received" },
        { text: "Sounds tough! Hang in there.", type: "sent" },
        { text: "Thanks! Let's meet up this weekend.", type: "received" },
        { text: "Sure! Coffee at 5 PM?", type: "sent" },
        { text: "Works for me!", type: "received" },
        { text: "Great! See you soon.", type: "sent" },
        { text: "See you then!", type: "received" }
      ]
    }
  ];
  clutter = "";
  users.forEach(function(elem,idx){
    clutter += `<div class="chat">
            <div id=${idx} class="overlay"></div>
            <img src="${elem.profilePhoto}" alt="" />
            <div class="user">
              <h2 class="username">${elem.username}</h2>
              <p class="last-chat">
                ${elem.messages[elem.messages.length-1].text}
              </p>
            </div>
          </div>`
  })
  var chatSpace = document.querySelector("#chat-space");
  var chatScreen = document.querySelector("#chat-screen");
  var dp = document.querySelector(".head-chat .left .img");
  var chattingSpace = document.querySelector("#chatting-space")
  var username = document.querySelector(".head-chat .left .username h3")
  var card = document.querySelector("#card")
  var close = document.querySelector(".head-chat .left i")
  chatSpace.innerHTML = clutter;

  chatSpace.addEventListener("click" ,function(elem){
    var targetObject = users[elem.target.id];
    var clutter2 = ""
    card.style.overflow = "hidden"
    card.scrollTo({
      top:0
    })

    chatScreen.style.display = "block"
    dp.style.backgroundImage = `url(${targetObject.profilePhoto})`;
    username.innerHTML = targetObject.username;
    
    var targetMassage = targetObject.messages
    targetMassage.forEach(function(value){
      clutter2 += `<div class="massage ${value.type}"><h4>${value.text}</h4></div>`
    })
    chattingSpace.innerHTML=clutter2
  })
  close.addEventListener("click", function(){
    chatScreen.style.display = "none"
    card.style.overflow = "auto"
  })