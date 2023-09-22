import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./DietCenter.css";

const DietCenter = () => {
  return (
    <>
      <div className="parent">
        <div className="topbar">
          <div>
            <ArrowBackIosNewOutlinedIcon />
          </div>
          <p className="brandName">Diet Centre</p>
        </div>

        <div className="menubar">
          <div className="viewBar">
            <button className="weekbutton">Week View</button>
            <button className="daybutton">Day View</button>
          </div>
          <div className="textfield">
            <div>
              <p className="ptag">Name</p>
              <input
                type="text"
                className="inputtag"
                style={{ width: "288px" }}
                placeholder="Name"
              />
            </div>
            <div>
              <p className="ptag">Name</p>
              <input
                type="text"
                className="inputtag"
                style={{ width: "256px" }}
                placeholder="Name"
              />
            </div>
            <div>
              <p className="ptag">Name</p>
              <input type="text" className="inputtag" placeholder="Name" />
            </div>
            <div>
              <p className="ptag">Name</p>
              <input type="text" className="inputtag" placeholder="Name" />
            </div>
            <div>
              <p className="ptag">Name</p>
              <input type="text" className="inputtag" placeholder="Name" />
            </div>
          </div>
        </div>
        <div className="secondbar">
          <div>
            <div className="" style={{ display: "flex" }}>
              <div
                className=""
                style={{ marginTop: "20px", marginLeft: "8px" }}
              >
                <p className="setcalories">Set Calories</p>
                <button className="caloriesbutton">
                  <p className="">900 Calories</p>
                  <div>
                    <ExpandMoreOutlinedIcon />
                  </div>
                </button>
              </div>
              <div className="days">
                <p className="">Sunday</p>
                <button className="">
                  <p className="">900 Cal.</p>
                </button>
              </div>
              <div className="days">
                <p className="">Sunday</p>
                <button className="">
                  <p className="">900 Cal.</p>
                </button>
              </div>
              <div className="days">
                <p className="">Sunday</p>
                <button className="">
                  <p className="">900 Cal.</p>
                </button>
              </div>
              <div className="days">
                <p className="">Sunday</p>
                <button className="">
                  <p className="">900 Cal.</p>
                </button>
              </div>
              <div className="days">
                <p className="">Sunday</p>
                <button className="">
                  <p className="">900 Cal.</p>
                </button>
              </div>
              <div className="days">
                <p className="">Sunday</p>
                <button className="">
                  <p className="">900 Cal.</p>
                </button>
              </div>
            </div>
            <div className="thirdbar">
              <p className="morningsnacks">
                Morning <br /> Snacks
              </p>
              <div className="foodcard">
                <div className="fooditem">
                  <img
                    alt="Developer"
                    src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                    className=""
                  />
                  <span className="">Spicy Chicken Nice Slice</span>
                  <p className="">900 Cal.</p>
                  <div className="notes">
                    <button className="">
                      <DescriptionOutlinedIcon sx={{ height: "15px" }} />
                    </button>
                  </div>
                </div>
                <div className="addicon">
                  <AddOutlinedIcon />
                </div>
              </div>
              <div className="foodcard">
                <div className="fooditem">
                  <img
                    alt="Developer"
                    src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                    className=""
                  />
                  <span className="">Spicy Chicken Nice Slice</span>
                  <p className="">900 Cal.</p>
                  <div className="notes">
                    <button className="">
                      <DescriptionOutlinedIcon sx={{ height: "15px" }} />
                    </button>
                  </div>
                </div>
                <div className="addicon">
                  <AddOutlinedIcon />
                </div>
              </div>
              <div className="foodcard">
                <div className="fooditem">
                  <img
                    alt="Developer"
                    src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                    className=""
                  />
                  <span className="">Spicy Chicken Nice Slice</span>
                  <p className="">900 Cal.</p>
                  <div className="notes">
                    <button className="">
                      <DescriptionOutlinedIcon sx={{ height: "15px" }} />
                    </button>
                  </div>
                </div>
                <div className="addicon">
                  <AddOutlinedIcon />
                </div>
              </div>
              <div className="foodcard">
                <div className="fooditem">
                  <img
                    alt="Developer"
                    src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                    className=""
                  />
                  <span className="">Spicy Chicken Nice Slice</span>
                  <p className="">900 Cal.</p>
                  <div className="notes">
                    <button className="">
                      <DescriptionOutlinedIcon sx={{ height: "15px" }} />
                    </button>
                  </div>
                </div>
                <div className="addicon">
                  <AddOutlinedIcon />
                </div>
              </div>
              <div className="foodcard">
                <div className="fooditem">
                  <img
                    alt="Developer"
                    src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                    className=""
                  />
                  <span className="">Spicy Chicken Nice Slice</span>
                  <p className="">900 Cal.</p>
                  <div className="notes">
                    <button className="">
                      <DescriptionOutlinedIcon sx={{ height: "15px" }} />
                    </button>
                  </div>
                </div>
                <div className="addicon">
                  <AddOutlinedIcon />
                </div>
              </div>
              <div className="foodcard">
                <div className="fooditem">
                  <img
                    alt="Developer"
                    src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                    className=""
                  />
                  <span className="">Spicy Chicken Nice Slice</span>
                  <p className="">900 Cal.</p>
                  <div className="notes">
                    <button className="">
                      <DescriptionOutlinedIcon sx={{ height: "15px" }} />
                    </button>
                  </div>
                </div>
                <div className="addicon">
                  <AddOutlinedIcon />
                </div>
              </div>
            </div>
            <hr className="underline" />
            <div className="fourthbar">
              <p className="morningsnacks">
                Morning <br /> Snacks
              </p>
              <div className="foodcard">
                <div className="fooditem">
                  <img
                    alt="Developer"
                    src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                    className=""
                  />
                  <span className="">Spicy Chicken Nice Slice</span>
                  <p className="">900 Cal.</p>
                  <div className="notes">
                    <button className="">
                      <DescriptionOutlinedIcon sx={{ height: "15px" }} />
                    </button>
                  </div>
                </div>
                <div className="addicon">
                  <AddOutlinedIcon />
                </div>
              </div>
              <div className="foodcard">
                <div className="fooditem">
                  <img
                    alt="Developer"
                    src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                    className=""
                  />
                  <span className="">Spicy Chicken Nice Slice</span>
                  <p className="">900 Cal.</p>
                  <div className="notes">
                    <button className="">
                      <DescriptionOutlinedIcon sx={{ height: "15px" }} />
                    </button>
                  </div>
                </div>
                <div className="addicon">
                  <AddOutlinedIcon />
                </div>
              </div>
              <div className="foodcard">
                <div className="fooditem">
                  <img
                    alt="Developer"
                    src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                    className=""
                  />
                  <span className="">Spicy Chicken Nice Slice</span>
                  <p className="">900 Cal.</p>
                  <div className="notes">
                    <button className="">
                      <DescriptionOutlinedIcon sx={{ height: "15px" }} />
                    </button>
                  </div>
                </div>
                <div className="addicon">
                  <AddOutlinedIcon />
                </div>
              </div>
              <div className="foodcard">
                <div className="fooditem">
                  <img
                    alt="Developer"
                    src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                    className=""
                  />
                  <span className="">Spicy Chicken Nice Slice</span>
                  <p className="">900 Cal.</p>
                  <div className="notes">
                    <button className="">
                      <DescriptionOutlinedIcon sx={{ height: "15px" }} />
                    </button>
                  </div>
                </div>
                <div className="addicon">
                  <AddOutlinedIcon />
                </div>
              </div>
              <div className="foodcard">
                <div className="fooditem">
                  <img
                    alt="Developer"
                    src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                    className=""
                  />
                  <span className="">Spicy Chicken Nice Slice</span>
                  <p className="">900 Cal.</p>
                  <div className="notes">
                    <button className="">
                      <DescriptionOutlinedIcon sx={{ height: "15px" }} />
                    </button>
                  </div>
                </div>
                <div className="addicon">
                  <AddOutlinedIcon />
                </div>
              </div>
              <div className="foodcard">
                <div className="fooditem">
                  <img
                    alt="Developer"
                    src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                    className=""
                  />
                  <span className="">Spicy Chicken Nice Slice</span>
                  <p className="">900 Cal.</p>
                  <div className="notes">
                    <button className="">
                      <DescriptionOutlinedIcon sx={{ height: "15px" }} />
                    </button>
                  </div>
                </div>
                <div className="addicon">
                  <AddOutlinedIcon />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="dislike">
                <button className="">
                  <div className="dislikeicon">
                    <LocationOnIcon sx={{ height: "15px" }} />
                  </div>
                  <p className="dislikelist">Dislike List</p>
                  <div className="dislikearrow">
                    <ExpandMoreOutlinedIcon />
                  </div>
                </button>
              </div>
              <div className="dislike">
                <button className="">
                  <div className="dislikeicon">
                    <LocationOnIcon sx={{ height: "15px" }} />
                  </div>
                  <p className="dislikelist">Dislike List</p>
                  <div className="dislikearrow">
                    <ExpandMoreOutlinedIcon />
                  </div>
                </button>
              </div>
              <div className="dislike">
                <button className="">
                  <div className="dislikeicon">
                    <LocationOnIcon sx={{ height: "15px" }} />
                  </div>
                  <p className="dislikelist">Dislike List</p>
                  <div className="dislikearrow">
                    <ExpandMoreOutlinedIcon />
                  </div>
                </button>
              </div>
              <div className="dislikefood">
                <button className="">
                  <div className="dislikefoodcard">
                    <div className="dislikeicon">
                      <LocationOnIcon sx={{ height: "15px" }} />
                    </div>
                    <p className="dislikelist">Dislike List</p>
                    <div className="dislikearrow">
                      <ExpandMoreOutlinedIcon />
                    </div>
                  </div>

                  <div className="dislikefooditem">
                    <img
                      alt="Developer"
                      src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                      className=""
                    />

                    <div>
                      <h3 className="spicy">Spicy Chicken Nice Slice</h3>
                      <p className="spicycal">900 Cal.</p>
                    </div>
                  </div>
                  <hr className="listunderline" />
                  <div className="secondimage">
                    <img
                      alt="Developer"
                      src="https://tse4.mm.bing.net/th?id=OIP.qoY_Asu5jVOU_WvsyA-1ygHaHa&pid=Api&P=0&h=180"
                      className=""
                    />

                    <div>
                      <h3 className="spicy">
                        Spicy Chicken Nice Slice
                      </h3>
                      <p className="spicycal">
                        900 Cal.
                      </p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="dislike">
                <button className="">
                  <div className="dislikeicon">
                    <LocationOnIcon sx={{ height: "15px" }} />
                  </div>
                  <p className="dislikelist">Notes</p>
                  <div className="dislikearrow">
                    <ExpandMoreOutlinedIcon />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DietCenter;
