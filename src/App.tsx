import "./App.css"
import {createRef, FormEvent} from "react";
import {User} from "./types.ts";

function App() {
    const usernameInput = createRef<HTMLInputElement>();
    const emailInput = createRef<HTMLInputElement>();

    function signup(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const userData: User = {
            username: usernameInput.current?.value ?? "",
            email: emailInput.current?.value ?? ""
        }

        if (usernameInput.current?.value) {
            usernameInput.current.value = ""
        }
        if (emailInput.current?.value) {
            emailInput.current.value = ""
        }

        fetch("/api/users", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).then(async (e) => {
            if (e.status == 400) {
                const result = await e.json();
                if (result.code == "23505") {
                    const duplicateName = result.constraint.split("_")[1];
                    alert(duplicateName + " already exists loser")
                }
                console.log(result);
            }
            else if (e.status == 201) {
                alert("it went through congrats")
            }
        })
        console.log(userData)
    }

    return <div id="container">
        <div className="titleContainer">
            <h1 className={"title"}>Project</h1>
            <h1 className={"title amethyst"}>Amethyst</h1>
        </div>
        <div className="right circle"></div>
        <div className="left circle"></div>
        <h2 id="motto">changing the world, one world at a time.</h2>
        <button onClick={() => {
            window.open("https://forms.gle/gZ436mHMd3y9d4M98", "_blank")
        }}>Sign up for the alpha test</button>
        <form onSubmit={signup}>
            <input type="text" name="username" placeholder={"username here nerd"} ref={usernameInput}/>
            <input type="email" name="email" placeholder="email here nerd" ref={emailInput}/>
            <input type="submit" value="submit"/>
        </form>
    </div>
}

export default App
