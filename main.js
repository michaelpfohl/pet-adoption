"use strict";

const pets = [
    {
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Trouble",
      color: "Poop-Colored",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg"
    },
    {
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "http://www.theouthousers.com/images/jck//ThanosCopter/news/grumpasaur.jpg"
    },
    {
      name: "Sassy",
      color: "Poop-Colored",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600"
    },
    {
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      name: "Smokey",
      color: "Poop-Colored",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://i.ytimg.com/vi/C3wbURcp6CI/maxresdefault.jpg"
    },
    {
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg"
    },
    {
      name: "Salem",
      color: "Poop-Colored",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://media.boingboing.net/wp-content/uploads/2016/04/Top-Image-1.jpg"
    },
    {
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=1100&format=jpeg&auto=webp"
    },
    {
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg"
    },
    {
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://usercontent1.hubstatic.com/14644822_f1024.jpg"
    },
    {
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"
    },
    {
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg"
    },
    {
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://thumbs-prod.si-cdn.com/d4e3zqOM5KUq8m0m-AFVxuqa5ZM=/800x600/filters:no_upscale():focal(554x699:555x700)/https://public-media.si-cdn.com/filer/a4/04/a404c799-7118-459a-8de4-89e4a44b124f/img_1317.jpg"
    },
    {
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_weight_other/1800x1200_cat_weight_other.jpg?resize=600px:*"
    },
    {
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://dp4g669tqdae4.cloudfront.net/content/uploads/2018/08/06063200/photo2-courtesy-jenna-rocket.jpg"
    }
  ];

  const printToDom = (divID, textToPrint) => {
      const selectedDiv = document.getElementById(divID);
      selectedDiv.innerHTML = textToPrint;
  }

  const buildPetCards = () => {
      let domString = ""
      for (let i = 0; i < pets.length; i++){
          domString+=`<div class="pet--card">`
          domString+=` <h1 class="pet--name">${pets[i].name}</h1>`
          domString+=` <img class="pet--photo" src="${pets[i].imageUrl}" alt="${pets[i].name}">`
          domString+=` <h2 class="pet--color">${pets[i].color}</h2>`
          domString+=` <p class="pet--skill">${pets[i].specialSkill}</p>`
          domString+=` <h2 class="pet--type ${pets[i].type}">${pets[i].type}</h2>`
          domString+=`</div>`
      }
      printToDom("pet--container", domString);
  }

  const buildDogCards = () => {
    let domString = ""
    for (let i = 0; i < pets.length; i++){
        if (pets[i].type === "dog"){
            domString+=`<div class="pet--card">`
            domString+=` <h1 class="pet--name">${pets[i].name}</h1>`
            domString+=` <img class="pet--photo" src="${pets[i].imageUrl}" alt="${pets[i].name}">`
            domString+=` <h2 class="pet--color">${pets[i].color}</h2>`
            domString+=` <p class="pet--skill">${pets[i].specialSkill}</p>`
            domString+=` <h2 class="pet--type ${pets[i].type}">${pets[i].type}</h2>`
            domString+=`</div>`
        }
    }
    printToDom("pet--container", domString);
}

  const buildCatCards = () => {
    let domString = ""
    for (let i = 0; i < pets.length; i++){
        if (pets[i].type === "cat"){
            domString+=`<div class="pet--card">`
            domString+=` <h1 class="pet--name">${pets[i].name}</h1>`
            domString+=` <img class="pet--photo" src="${pets[i].imageUrl}" alt="${pets[i].name}">`
            domString+=` <h2 class="pet--color">${pets[i].color}</h2>`
            domString+=` <p class="pet--skill">${pets[i].specialSkill}</p>`
            domString+=` <h2 class="pet--type ${pets[i].type}">${pets[i].type}</h2>`
            domString+=`</div>`
        }
    }
    printToDom("pet--container", domString);
}

  const buildDinoCards = () => {
    let domString = ""
    for (let i = 0; i < pets.length; i++){
        if (pets[i].type === "dino"){
            domString+=`<div class="pet--card">`
            domString+=` <h1 class="pet--name">${pets[i].name}</h1>`
            domString+=` <img class="pet--photo" src="${pets[i].imageUrl}" alt="${pets[i].name}">`
            domString+=` <h2 class="pet--color">${pets[i].color}</h2>`
            domString+=` <p class="pet--skill">${pets[i].specialSkill}</p>`
            domString+=` <h2 class="pet--type ${pets[i].type}">${pets[i].type}</h2>`
            domString+=`</div>`
        }
    }
    printToDom("pet--container", domString);
}

buildPetCards();
document.getElementById("button--dog").addEventListener("click", buildDogCards);
document.getElementById("button--cat").addEventListener("click", buildCatCards);
document.getElementById("button--dino").addEventListener("click", buildDinoCards);
document.getElementById("button--all").addEventListener("click", buildPetCards);