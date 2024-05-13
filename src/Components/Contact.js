import React, { useState } from "react";
import styles from "./Stylesheets/Contact.module.css";
import call from "../Assets/bxs_phone-call.png";
import location from "../Assets/carbon_location-filled.png";
import mail from "../Assets/ic_sharp-email.png";
import discord from "../Assets/Vector (1).png";
import baseUrl from "../Constants/baseURL";
import twitter from "../Assets/Group 1000001749.png";
import insta from "../Assets/insta.png";

function Contact() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;

    setData({
      ...data,
      [name]: e.target.value,
    });
  };

  const checkValidation = () => {
    if (
      data.firstName === "" ||
      data.lastName === "" ||
      data.email === "" ||
      data.phoneNumber === "" ||
      data.message === ""
    ) {
      alert("Please Fill all the details");
      return false;
    }
    if (
      !data.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      alert("Please Enter a valid email format");
      return false;
    }
    if (!data.phoneNumber.match(/^[0-9]{10}$/)){
      alert("Please Enter A Valid Phone Number");
      return false;
    }
    
    return true;
  };

  const sendMessage = async () => {
    console.log(data);
    if (checkValidation()) {
      let current = new Date();
      let cDate =
        current.getFullYear() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        current.getDate();
      let cTime =
        current.getHours() +
        ":" +
        current.getMinutes() +
        ":" +
        current.getSeconds();
      let dateTime = cDate + " " + cTime;
      const reqData = {
        ...data,
        name: data.firstName + " " + data.lastName,
        date: `${dateTime}`,
      };
      await fetch(`${baseUrl}/user/sendMessage`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(reqData),
      })
        .then(async (res) => {
          if (res.status === 200) {
            await res.json();
          } else {
            await res.json();
            console.log(res.json());
            throw new Error("Some Error Occured");
          }
        })
        .then((data) => {
          alert("Sent Successfully");
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <div className={styles.container} id="contactUs">
      <div className={styles.left}>
        <div className={styles.contents}>
          <div className={styles.header}>
            <h1>Contact Information</h1>
            <p>Say Something To start a Live Chat</p>
          </div>
          <div className={styles.info}>
            <div className={styles.icon}>
              <img src={call} alt="" />
            </div>
            <p>+91 7516084201</p>
          </div>
          <div className={styles.info}>
            <div className={styles.icon}>
              <img src={mail} alt="" />
            </div>

            <p>someoneexample@gmail.com</p>
          </div>
          <div className={styles.info}>
            <div className={styles.icon}>
              <img src={location} alt="" />
            </div>

            <p>
              Bhaveshwar Maya, 7 Th Rajawadi Road, Rajawadi, Ghatkoper (east),
              Mumbai,Maharashtra
            </p>
          </div>
        </div>
        <div className={styles.socials}>
          <div className={styles.icon}>
            <img src={twitter} alt="" />
          </div>
          <div className={styles.icon}>
            <img src={discord} alt="" />
          </div>
          <div className={styles.icon}>
            <img src={insta} alt="" />
          </div>
        </div>
        <div id={styles.circle1}></div>
        <div id={styles.circle2}></div>
      </div>
      <div className={styles.right}>
        <div className={styles.layout}>
          <div className={styles.inputGrp}>
            <label htmlFor="">First Name</label>
            <input
              onChange={handleChange}
              name="firstName"
              value={data.firstName}
              type="text"
            />
          </div>
          <div className={styles.inputGrp}>
            <label htmlFor="">Last Name</label>
            <input
              onChange={handleChange}
              name="lastName"
              value={data.lastName}
              type="text"
            />
          </div>
        </div>
        <div className={styles.layout}>
          <div className={styles.inputGrp}>
            <label htmlFor="">Email</label>
            <input
              onChange={handleChange}
              name="email"
              value={data.email}
              type="text"
            />
          </div>
          <div className={styles.inputGrp}>
            <label htmlFor="">Phone Number</label>
            <input
              onChange={handleChange}
              name="phoneNumber"
              value={data.phoneNumber}
              type="text"
            />
          </div>
        </div>
        <div className={styles.layout}>
          <div id={styles.messageSection} className={styles.inputGrp}>
            <label htmlFor="">Message</label>
            <textarea
              onChange={handleChange}
              name="message"
              value={data.message}
              type="text"
              placeholder="Enter Your Message Here"
            />
          </div>
        </div>
        <div className={styles.layout}>
          <div></div>
          <div className={styles.inputGrp}>
            <button onClick={sendMessage}>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
