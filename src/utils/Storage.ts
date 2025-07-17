import { Dream } from "../models/Dream.js";
import { dreams as placeHolderDreams } from "../models/Dream.js";
import { User } from "../models/User.js";

export function getDreams() : Dream[] {
    const dreams = localStorage.getItem("dreams");
    return dreams ? JSON.parse(dreams) : placeHolderDreams;
};

export function saveDreams(dreams: Dream[]) {
    localStorage.setItem("dreams", JSON.stringify(dreams));
};

export function getUserName(): string {
    const user = localStorage.getItem("currentUser");
    if(user) {
        let parsedUser: User = JSON.parse(user);
        return parsedUser.username;
    }
    else {
        return "NAME";
    }
}