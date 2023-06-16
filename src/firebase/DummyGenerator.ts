import {PostData} from "../interfaces.ts";
import FirebaseService from "./FirebaseService.ts";

export function insertDummyData(){
  const discussion: PostData[] = [
    {
      username: "Gamer123",
      content: "I think Xbox is superior because of its powerful hardware and extensive backward compatibility.",
      date: new Date("2023-06-15T09:12")
    },
    {
      username: "PlaystationFan",
      content: "But PlayStation has a better lineup of exclusive games that you can't find anywhere else!",
      date: new Date("2023-06-15T09:25")
    },
    {
      username: "Gamer123",
      content: "That's true, PlayStation does have some great exclusives. But Xbox Game Pass offers a huge library of games for a low monthly fee!",
      date: new Date("2023-06-15T10:03")
    },
    {
      username: "PlaystationFan",
      content: "PlayStation Plus also provides free monthly games and exclusive discounts, which adds value to the console.",
      date: new Date("2023-06-15T10:18")
    },
    {
      username: "Gamer123",
      content: "I can't deny the value of PlayStation Plus, but Xbox Live Gold offers similar benefits and an excellent online gaming experience.",
      date: new Date("2023-06-15T10:42")
    },
    {
      username: "PlaystationFan",
      content: "Fair point, but I find the PlayStation controller more comfortable and intuitive for gaming.",
      date: new Date("2023-06-15T11:09")
    },
    {
      username: "Gamer123",
      content: "That's subjective, but I do appreciate the Xbox controller's ergonomic design and customizable features.",
      date: new Date("2023-06-15T11:32")
    },
    {
      username: "PlaystationFan",
      content: "Agreed, personal preference plays a big role in choosing a console. Both Xbox and PlayStation have their strengths.",
      date: new Date("2023-06-15T12:07")
    },
    {
      username: "Gamer123",
      content: "Absolutely! It ultimately comes down to the games and features that matter most to each individual gamer.",
      date: new Date("2023-06-15T12:26")
    },
    {
      username: "PlaystationFan",
      content: "Well said. At the end of the day, we're all gamers who enjoy playing great games, regardless of the platform!",
      date: new Date("2023-06-15T12:51")
    }
  ]

  FirebaseService.sendPosts(discussion)
}



