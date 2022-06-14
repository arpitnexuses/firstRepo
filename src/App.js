import "./styles.css";
// import background from "/images/new_nexusesss.png"

export default function App() {
  return (
    <>
      <div className="App">
        <div className="section1">
          <div className="div1">
            <p className="para">
              {" "}
              Get started on the path to to cloud enablement.
            </p>
          </div>
          <div className="div2">
            <div className="input-div">
              <p className="req">Request a Demo</p>
              <br />
              <input className="firstName" placeholder="First name*"></input>
              <input className="firstName" placeholder="Last name*"></input>
              <input className="email" placeholder="Email*"></input>
              <input className="cname" placeholder="Company name*"></input>
              <input
                className="description"
                placeholder="What's your cloud challenge?*"
              ></input>

              <p className="lastpara">
                {" "}
                The contact information you provide us to contact you about our
                product and services You may unsuscribe from this communication
                any time. For information on how to unsuscribe, as well as our
                privacy practices and commitment to protecting your privacy,
                please review our
                <p className="blue-pri">Privacy Policies</p>{" "}
              </p>
              <p className="last00">
                The site is protected by reCAPTCHA and the Google Privacy
                Policies and Terms of Services apply{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
