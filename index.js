const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"],
});

client.on("ready", () => {
  console.log(`You're logged in as ${client.user.tag} !`);
});

client.on("messageCreate", (message) => {
  const msg = message.content;

  switch (msg) {
    case "hi":
    case "HI":
    case "Hi":
      message.reply("Hi...Happy To See You");
      break;

    case "hello":
    case "HELLO":
    case "Hello":
      message.reply("Hello...Nice To Meet You");
      break;

    case "How are You?" || "How are you?":
    case "how are you?":
    case "How Are You" || "How are you":
    case "how are you":
    case "HOW ARE YOU":
    case "HOW ARE YOU?":
      message.reply("Well..Going On");
      message.reply("How are you..?");
      break;

    case "Good Morning" || "good morning" || "GOOD MORNING":
    case "Good morning" || "Gm" || "gm" || "GM":
      message.reply("Good Morning");
      break;

    case "Good Night" || "good night" || "GOOD NIGHT":
    case "Good night" || "Gn" || "gn" || "GN":
      message.reply("Good Night");
      break;

    case "MOKO KARANNE" || "Moko Karanne" || "moko karanne":
    case "Moko karanne" || "Mk" || "mk" || "MK":
    case "what are you doing" || "WHAT ARE YOU DOING" || "What are you doing":
    case "what are you doing?" ||
      "WHAT ARE YOU DOING?" ||
      "What are you doing?":
      message.reply("Serching and Repairing My Database... ");
      message.reply("What are you doing...?");
      break;

    case "Bye" || "BYE" || "bye":
    case "See you" || "see you" || "see you again" || "See You Again":
      message.reply("See you later..!");
      break;

    case "happy" || "Happy" || "HAPPY":
    case "feel happy" || "Feel happy" || "Feel Happy":
      message.reply("If you Happy That's my Pleasure");
      break;

    case "sad" || "Sad" || "SAD":
    case "feel sad" || "Feel Sad" || "Feel sad":
      message.reply("https://www.youtube.com/watch?v=FkZ8tucHCto");
      message.reply("Listen to this for Relax Your Mind");
      break;

    case "bad" || "Bad" || "BAD":
    case "feel bad" || "Feel Bad" || "Feel Bad":
      message.reply("https://www.youtube.com/watch?v=FOsmW2DlBxU");
      message.reply("This will relax your mind");
      break;

    case "angry" || "Angry" || "ANGRY":
    case "feel angry" || "Feel Angry" || "Feel angry":
      message.reply("https://www.youtube.com/watch?v=BsW7Nr4H1tE");
      message.reply("Listen to this and Relax Your Mind");
      break;
    case "dev" || "Dev" || "Developer":
    case "developer" || "owner":
    case "develop" || "own":
      message.reply(
        "I am a creation of Sithika Dangampala {ncoderlk && @FTDXC}"
      );
      message.reply("https://github.com/ncoderlk");
      message.reply("https://ncoderlk.github.io/sithika");
      break;
    case "github" || "profie" || "git":
      message.reply("https://github.com/ncoderlk");
      message.reply("https://ncoderlk.github.io/sithika");
      break;
  }
});

client.login(process.env.TOKEN);
