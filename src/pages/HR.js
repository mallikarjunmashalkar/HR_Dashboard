import React from "react";
import "./Style.css";

const HR = () => {
  return (
    <div className="main-div">
      <div className="left-div">
        <div className="header-logo">
          <span className="circule">e</span>
          <span className="header-name">Encan.io</span>
        </div>

        <div className="header-card">
          <div className="header-card-align">
            <div className="header-card-align-a">
              <span>Create</span>
              <br />
              <span>New Task</span>
            </div>
            <div className="header-card-align-b">
              <button>+</button>
            </div>
          </div>
        </div>

        <div className="all-buttons">
          <div className="btn-1">
            <span>
              <i class="fa fa-grid fa-1x"></i>Dashboard
            </span>
          </div>
        
          <div className="btn-2">
            <span style={{ paddingTop: "16px" }}>
              <i class="fa-solid fa-wave-pulse"></i>Analytics
            </span>
          </div>
      
          <div className="btn-3">
            <span>
              <i class="fa fa-cloud fa-1x"></i>Task List
            </span>
            </div>
     
          <div className="btn-4">
            <span className="btn-1">Tracking</span>
          </div>
         
          <div className="btn-5">
            <span>History</span>
          </div>
        
          <div className="btn-6">
            <span>Inbox</span>
          </div>
        
          <div className="btn-7">
            <span>
              <i class="fa fa-gear fa-1x"></i>Setting
            </span>
          </div>
        </div>

        <span style={{ paddingRight: "9rem",fontWeight:"750" }}>Workspace</span>
        <div className="Bottum-cards">
          <span>Dadang.com</span>
          <span style={{ paddingLeft: "2rem", color: "green" }}>v</span>
        </div>

        <div className="image-tag-1">
          <div className="image-tag-a">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGQ8dQ-LMiMmTEyBijR0FzpQHC7tH6qTE2g&usqp=CAU"
            alt=""
          />
          </div>
          <div className="image-tag-b">
            <span>Saepul R.</span><br />
            <span>saepul@togal...</span>
          </div>
          
        </div>
      </div>

      <div className="midle-div">
        <div className="top-name">
          <span style={{ fontSize: "18px", fontWeight: "700" }}>Dashboard</span>
          <input type="date" id="birthday" name="birthday" />
          <br />
          <span style={{ color: "green", fontSize: "15px", fontWeight: "700" }}>
            Monday
          </span>
          <span>, 03 February 2020</span>
        </div>

        <div className="card-1">
          <div className="image-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Kbx_fdanNIcnTubE_WQw8PyiUbymv2vvmw&usqp=CAU"
              alt=""
            />
          </div>
          <div className="text-container">
            <span className="text-container-1">
              Hi, <span className="text-container-2">Sarpul Rohman</span>
            </span>
            <br />
            <br />
            <span className="text-container-3">
              You have <span style={{ color: "green" }}>4</span> taks to finish
              all taks today. Your <br />
              already completed <span style={{ color: "green" }}>50%</span>taks
              for today. Your <br />
              prgress is <span style={{ color: "green" }}>very good</span>
            </span>
          </div>
        </div>

        <div className="card-2">
          <div className="card-a">
            <div className="card-a-text">
              <span style={{ paddingTop: "2rem" }}>Activity</span>
            </div>
            <div className="text-week">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
          <div className="card-b">
            <div className="card-b-teaxt">
              <span>Progress</span>
            </div>
            <div className="card-bb-text">
              <span style={{ fontWeight: "750", fontSize: "18px" }}>30%</span>
              <br />
              <span style={{ fontWeight: "500", fontSize: "13px" }}>
                Last Week
              </span>
            </div>
            <div className="card-bb-icon">
              <i class="fa fa-signal fa-3x"></i>
            </div>
            <dir className="card-bb-img"></dir>
          </div>

          <div className="card-c">
            <div className="card-c-text">
              <span style={{ fontWeight: "750", fontSize: "30px" }}>20+</span>
              <br />
              <span
                style={{
                  fontWeight: "450",
                  fontSize: "15px",
                  color: "rgb(107, 105, 105)",
                }}
              >
                Project
              </span>
            </div>
            <div className="card-c-icon">
              <i class="fa fa-signal fa-3x"></i>
            </div>

            <div className="card-d">
              <div className="card-d-text">
                <span style={{ fontWeight: "750", fontSize: "30px" }}>50+</span>
                <br />
                <span
                  style={{
                    fontWeight: "450",
                    fontSize: "15px",
                    color: "rgb(107, 105, 105)",
                  }}
                >
                  Client
                </span>
                <div className="card-d-icon">
                  <i class="fa fa-signal fa-3x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-align-1">
          <div className="text-align-a">
            <span style={{ fontWeight: "750", fontSize: "19px" }}>Traking</span>
            <br />
            <span style={{ fontWeight: "450", color: "rgb(107, 105, 105" }}>
              <span style={{ color: "green" }}>20</span> hours,{" "}
              <span style={{ color: "green" }}>30</span> min on this week
            </span>
          </div>
          <div className="text-align-b">
            <span style={{ fontWeight: "750", fontSize: "19px" }}>
              Most Traked
            </span>
            <br />
            <span style={{ fontWeight: "450", color: "rgb(107, 105, 105" }}>
              <span style={{ color: "green" }}>30</span> jan -{" "}
              <span style={{ color: "green" }}>19</span> jan 2020
            </span>
          </div>
        </div>

        <div className="card-3">
          <div className="card-aa">
            <div className="text-align-3a">
              <span style={{ fontWeight: "750", fontSize: "21px" }}>
                $1,250
              </span>
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  paddingTop: "0.3rem",
                  color: "rgb(107, 105, 105)",
                }}
              >
                This week
              </span>
            </div>

            <div className="img-align-1">
              <div className="img-card-a">
                <div className="img-card-aa"></div>
              </div>
              <div className="img-card-b">
                <div className="img-card-bb"></div>
              </div>
              <div className="img-card-c">
                <div className="img-card-cc"></div>
              </div>
              <div className="img-card-d">
                <div className="img-card-dd"></div>
              </div>
              <div className="img-card-e">
                <div className="img-card-ee"></div>
              </div>
              <div className="img-card-f">
                <div className="img-card-ff"></div>
              </div>
              <div className="img-card-g">
                <div className="img-card-gg"></div>
              </div>
            </div>
            <div className="text-week-2">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span style={{ fontWeight: "700" }}>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>

          <div className="card-bb">
            <div className="card-bb-text-a">
              <span style={{ fontWeight: "650" }}>Make new homepage</span>
              <br />
              <span style={{ fontWeight: "400" }}>
                <span style={{ color: "green " }}>Dadang.com </span>Project
              </span>
            </div>
            <div className="card-bb-text-b">
              <span>
                <span style={{ fontWeight: "650" }}>4:30</span>:20
              </span>
            </div>
          </div>
        </div>
        <div className="hr-1">
          <div className="hr-1a">
            <span style={{ fontWeight: "650" }}>Redesign dashboard</span>
            <br />
            <span style={{ fontWeight: "400" }}>
              <span style={{ color: "orange" }}>Bandrek.com</span> Project
            </span>
          </div>
          <div className="hr-tym-1">
            <span>
              <span style={{ fontWeight: "650" }}>2:10</span>:30
            </span>
          </div>
        </div>
        <div className="hr-2">
          <div className="hr-2a">
            <span style={{ fontWeight: "650" }}>Make Wireframe & Sketch</span>
            <br />
            <span style={{ fontWeight: "400" }}>
              <span style={{ color: "green" }}>Dadang.com</span> Project
            </span>
          </div>
          <div className="hr-tym-2">
            <span>
              <span style={{ fontWeight: "650" }}>3:45</span>:20
            </span>
          </div>
        </div>
      </div>

      <div className="rigth-div">
        <div className="alignment">
          <div className="rigth-div-header">
            <span style={{ fontWeight: "650" }}>My Profile</span>
            <br />
            <span style={{ fontWeight: "500", fontSize: "12px" }}>
              <span style={{ color: "green" }}>75%</span> Completed your profile
            </span>
          </div>
          <div className="dot"></div>
        </div>
        <div class="item html">
          <img
            src="https://files.ontario.ca/co-smg-thumbnail-personal.png"
            alt=""
          />
          <svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
            <g>
              <title>Layer 1</title>
              <circle
                class="circle_animation"
                r="50"
                cy="81"
                cx="81"
                stroke-width="8"
                stroke="#6fdb6f"
                fill="none"
              />
            </g>
          </svg>
        </div>

        <span style={{ fontWeight: "750", fontSize: "18px" }}>
          Seapul Rohman
        </span>
        <br />
        <span style={{ fontWeight: "400", fontSize: "14px" }}>
          UI Designer at Taglas
        </span>

        <div className="right-div-card">
          <div className="right-div-card-rigth">
            <span style={{ fontWeight: "750" }}>15</span>
            <br />
            <span>Achiev..</span>
          </div>
          <div className="right-div-card-left">
            <span style={{ fontWeight: "750" }}>2</span>
            <br />
            <span>Teams</span>
          </div>
        </div>
        <div className="tesx-1">
          <span>Ongoing Task</span>
          <span style={{ color: "green" }}>View All</span>
        </div>
        <div className="emp-1">
          <div>
            <img
              src="https://files.ontario.ca/co-smg-thumbnail-personal.png"
              alt=""
            />
          </div>
          <div>
            <span style={{ fontWeight: "650" }}>Call with Jonathan Ruslan</span>
            <br />
            <span style={{ fontSize: "15px" }}>
              jan 20, 2020 - 9 AM - 11 AM
            </span>
          </div>
        </div>
        <div className="emp-2">
          <div>
            <img
              src="https://files.ontario.ca/co-smg-thumbnail-personal.png"
              alt=""
            />
          </div>
          <div>
            <span style={{ fontWeight: "650" }}>Meet with Vlad Ermakov</span>
            <br />
            <span style={{ fontSize: "14.5px" }}>
              jan 21, 2020 - 9 AM - 11 AM
            </span>
          </div>
        </div>
        <div className="emp-3">
          <div>
            <img
              src="https://files.ontario.ca/co-smg-thumbnail-personal.png"
              alt=""
            />
          </div>
          <div>
            <span style={{ fontWeight: "650" }}>Colaboration with Sam</span>
            <br />
            <span style={{ fontSize: "14.5px" }}>
              jan 20, 2020 - 1 PM - 5 AM
            </span>
          </div>
        </div>
        <div className="invitation-1">
          <span style={{ fontWeight: "700" }}>Invitation</span>
          <br />
          <span style={{ fontSize: "14px", fontWeight: "450" }}>
            You have <span style={{ color: "green" }}>6 invitations</span>on
            project
          </span>
        </div>
        <div className="final-card">
          <div className="final-card-a">
            <div></div>
            <div className="final-card-txt">
              <span style={{ fontWeight: "650" }}>Samantha William</span>
              <br />
              <span style={{ fontSize: "12px" }}>Samantha was invite you</span>
            </div>
            <div>
              <span style={{ color: "green" }}> / </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HR;
