import { getData } from "country-list";
import { useRef, useState } from "react";
import Pagetitle from "../../Components/Pagetitle/Pagetitle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const AccessRequestFormPage = () => {
  const [startDate, setStartDate] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (e) => {
    setIsOpen(!isOpen);
    setStartDate(e);
  };
  const handleDateField = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  const countries = getData();
  const fileInputRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file);
  };
  return (
    <div>
      <Pagetitle>Get Started</Pagetitle>
      <div className="hero bg-[#101729] text-white  min-h-screen">
        <div className="hero-content px-2 xl:pt-20 pb-20 lg:pt-20 pt-20">
          <form className="fieldset grid lg:grid-cols-2 gap-4">
            <div className="lg:col-span-2 grid lg:grid-cols-2 gap-4">
              {/* 
              ----------------------Email--------------------
              
              */}
              <div className="lg:col-span-2">
                <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
                  Email <span className="text-rose-600">*</span>
                </label>
                <input
                  type="email"
                  className="input xl:input-xl lg:input-lg md:input-md input-sm w-full focus:bg-[#102E32]  bg-gray-800 text-white"
                  placeholder="Email Address"
                />
              </div>
              {/* 
              --------------------Phone Number--------------------
              
              */}
              <div className="lg:col-span-2">
                <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
                  Phone/Mobile <span className="text-rose-600">*</span>
                </label>
                <input
                  type="number"
                  className="input xl:input-xl lg:input-lg md:input-md input-sm w-full  bg-gray-800 focus:bg-[#102E32] text-white mobile-number-field"
                  placeholder="Mobile Number"
                />
              </div>
              {/* 
              ----------------------First Name--------------------
              
              */}
              <div>
                <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
                  First Name <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  className="input xl:input-xl lg:input-lg md:input-md input-sm w-full focus:bg-[#102E32] bg-gray-800 text-white"
                  placeholder="First Name"
                />
              </div>
              {/* 
              ----------------------Last Name--------------------
              
              */}
              <div>
                <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
                  Last Name <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  className="input xl:input-xl lg:input-lg md:input-md input-sm w-full focus:bg-[#102E32] bg-gray-800 text-white"
                  placeholder="Last Name"
                />
              </div>
              {/* 
              ------------------Date Of Birth-------------------
              
              */}
              <div className="lg:col-span-2">
                <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
                  Date Of Birth <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  className="input xl:input-xl lg:input-lg md:input-md input-sm w-full  bg-gray-800 focus:bg-[#102E32] text-white"
                  value={
                    startDate ? moment(startDate).format("DD-MM-YYYY") : ""
                  }
                  readOnly
                  onClick={handleDateField}
                />
                {isOpen && (
                  <DatePicker
                    selected={startDate}
                    onChange={handleChange}
                    inline
                  />
                )}
              </div>
              {/* 
              ---------------Identification Number----------------
              
              */}
              <div className="lg:col-span-2">
                <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
                  Identification Number
                  <span className="text-rose-600">*</span>
                </label>
                <input
                  type="number"
                  className="input xl:input-xl lg:input-lg md:input-md input-sm w-full  bg-gray-800 focus:bg-[#102E32] text-white"
                  placeholder="Enter Your Identification Number"
                />
              </div>
              {/* 
              ---------------Upload File----------------
              
              */}
              <div className="lg:col-span-2">
                <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
                  Upload You Identification Document
                  <span className="text-rose-600">*</span>
                </label>
                <button
                  onClick={handleClick}
                  className="btn bg-blue-700 border-blue-700 hover:bg-red-700 hover:border-red-700 shadow-none mt-4  text-white"
                >
                  Upload File
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </div>
            </div>

            <div className="lg:col-span-2">
              <h1 className="lg:text-2xl md:text-2xl sm:text-xl text-lg my-2">
                Address
              </h1>
              {/* 
              ---------------Street Address----------------
              
              */}
              <div className="grid lg:grid-cols-2 gap-4">
                <div>
                  <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
                    Street Address
                    <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="input xl:input-xl lg:input-lg md:input-md input-sm w-full  bg-gray-800 focus:bg-[#102E32] text-white"
                    placeholder="Street Address"
                  />
                </div>
                {/* 
              -------------------------City-----------------------
              
              */}
                <div>
                  <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
                    City
                    <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="input xl:input-xl lg:input-lg md:input-md input-sm w-full  bg-gray-800 focus:bg-[#102E32] text-white"
                    placeholder="City"
                  />
                </div>
                {/* 
              -------------------------State-----------------------
              
              */}
                <div>
                  <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
                    State
                    <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="input xl:input-xl lg:input-lg md:input-md input-sm w-full  bg-gray-800 focus:bg-[#102E32] text-white"
                    placeholder="State"
                  />
                </div>
                {/* 
              --------------------Zip Code-----------------------
              
              */}
                <div>
                  <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
                    Zip Code
                    <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="input xl:input-xl lg:input-lg md:input-md input-sm w-full  bg-gray-800 focus:bg-[#102E32] text-white"
                    placeholder="Zip Code"
                  />
                </div>
                {/* 
              -------------------------Country--------------------
              
              */}
                <div className="lg:col-span-2">
                  <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
                    Country
                    <span className="text-rose-600">*</span>
                  </label>
                  <select
                    id="country"
                    className="select xl:select-xl lg:select-lg md:select-md select-sm w-full  bg-gray-800 focus:bg-[#102E32] text-white"
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* 
              ----------------------Are You-----------------------
              
              */}
                <div className="lg:col-span-2">
                  <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
                    Are You
                    <span className="text-rose-600">*</span>
                  </label>
                  <select
                    id="country"
                    className="select xl:select-xl lg:select-lg md:select-md select-sm w-full  bg-gray-800 focus:bg-[#102E32] text-white"
                  >
                    <option value="">- Select -</option>
                    <option>Artists</option>
                    <option>Labels</option>
                    <option>Manager</option>
                    <option>Sub-Distributor</option>
                  </select>
                </div>
                {/* 
              ----------------Your Artist Name-----------------
              
              */}
                <div className="lg:col-span-2">
                  <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
                    YOUR NAME (ARTIST, BAND, LABEL){" "}
                    <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="input xl:input-xl lg:input-lg md:input-md input-sm w-full focus:bg-[#102E32] bg-gray-800 text-white"
                    placeholder=" "
                  />
                </div>
                {/* 
              ----------------MAIN MUSIC GENRE-----------------
              
              */}
                <div className="lg:col-span-2">
                  <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
                    MAIN MUSIC GENRE
                    <span className="text-rose-600">*</span>
                  </label>
                  <select
                    id="country"
                    className="select xl:select-xl lg:select-lg md:select-md select-sm w-full  bg-gray-800 focus:bg-[#102E32] text-white"
                  >
                    <option value="">- Select -</option>
                    <option>Asia</option>
                    <option>Assam</option>
                    <option>Bollywood</option>
                    <option>Bangali</option>
                    <option>Folk</option>
                    <option>Pop</option>
                    <option>Hip-hop</option>
                    <option>Electronic-Dance-Music</option>
                    <option value="Rock">Rock</option>
                    <option value="R&amp;B">R&amp;B</option>
                    <option value="R&amp;B">Latin</option>
                    <option value="R&amp;B">Country</option>
                    <option value="R&amp;B">Classical</option>
                    <option value="R&amp;B">Metal</option>
                    <option value="Summary">Summary</option>
                  </select>
                </div>
                {/* 
              ----------------CURRENT DISTRIBUTOR-----------------
              
              */}
                <div className="lg:col-span-2">
                  <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
                    CURRENT DISTRIBUTOR
                  </label>
                  <select
                    id="country"
                    className="select xl:select-xl lg:select-lg md:select-md select-sm w-full  bg-gray-800 focus:bg-[#102E32] text-white"
                  >
                    <option value="">-- Select --</option>
                    <option value="Believe Music">Believe Music</option>
                    <option value="Symphonic Distribution">
                      Symphonic Distribution
                    </option>
                    <option value="The Orchard">The Orchard</option>
                    <option value="CDbaby">CDbaby</option>
                    <option value="DistroKid">DistroKid</option>
                    <option value="Ditto Music">Ditto Music</option>
                    <option value="Horus Music">Horus Music</option>
                    <option value="OneRPM">OneRPM</option>
                    <option value="RouteNote">RouteNote</option>
                    <option value="TuneCore">TuneCore</option>
                    <option value="Amuse">Amuse</option>
                    <option value="AWAL">AWAL</option>
                    <option value="Sonosuite">Sonosuite</option>
                    <option value="FUGA">FUGA</option>
                    <option value="INgrooves">INgrooves</option>
                    <option value="ANS Music (BD,USA)">
                      ANS Music (BD,USA)
                    </option>
                    <option value="Streamo Digital (BD)">
                      Streamo Digital (BD)
                    </option>
                    <option value="Gaan Baksho Music">Gaan Baksho Music</option>
                    <option value="I have not worked with any distributor till now">
                      I have not worked with any distributor till now
                    </option>
                  </select>
                </div>
              </div>
            </div>
            {/* 
              ----------------CheckBox-----------------
              
              */}
            <div className="lg:col-span-2 space-y-5">
              <p className="text-lg poppins-regular">
                If you are currently working with a distributor and would like
                to understand why you would not continue working with them at
                this time, please select an option below:
              </p>
              <div className="mt-4 space-y-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="checkbox bg-white checked:bg-green-500 accent-white"
                  />
                  <span className="text-lg poppins-regular cursor-pointer">
                    Payment Issue
                  </span>
                </label>

                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="checkbox bg-white checked:bg-green-500 accent-white"
                  />
                  <span className="text-lg poppins-regular cursor-pointer">
                    Support Issue
                  </span>
                </label>

                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="checkbox bg-white checked:bg-green-500 accent-white"
                  />
                  <span className="text-lg poppins-regular cursor-pointer">
                    Communication Issue
                  </span>
                </label>

                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="checkbox bg-white checked:bg-green-500 accent-white"
                  />
                  <span className="text-lg poppins-regular cursor-pointer">
                    If you are not working with anyone distributor, check this
                    box.
                  </span>
                </label>
              </div>
              {/* 
              ----------------Album Released-----------------
              
              */}
              <div>
                <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
                  NUMBER OF TRACK RELEASED (ALL ALBUMS, EP, SINGLES)
                </label>
                <select
                  id="country"
                  className="select xl:select-xl lg:select-lg md:select-md select-sm w-full  bg-gray-800 focus:bg-[#102E32] text-white"
                >
                  <option value="">- Select -</option>
                  <option>0-5</option>
                  <option>6-50</option>
                  <option>51-100</option>
                  <option>100+</option>
                </select>
              </div>
              {/* 
              ----------------monthly listener-----------------
              
              */}
              <div>
                <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
                  TOTAL MONTHLY LISTENERS ON KEY STREAMING PLATFORMS
                  <span className="text-rose-600">*</span>
                </label>
                <select
                  id="country"
                  className="select xl:select-xl lg:select-lg md:select-md select-sm w-full  bg-gray-800 focus:bg-[#102E32] text-white"
                >
                  <option value="">- Select -</option>
                  <option>0-1k</option>
                  <option>1-10k</option>
                  <option>10-100k</option>
                  <option>100k+</option>
                </select>
              </div>
            </div>
            {/* 
              --------Bank Account Information-------------
              
              */}
            <div className="lg:col-span-2">
              <h1 className="lg:text-2xl md:text-2xl sm:text-xl text-lg my-2">
                Bank Account Information's
              </h1>
              <div>
                <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
                  Payout via <span className="text-rose-600">*</span>
                </label>
                <select
                  id="country"
                  className="select xl:select-xl lg:select-lg md:select-md select-sm w-full  bg-gray-800 focus:bg-[#102E32] text-white"
                >
                  <option value="">- Select -</option>
                  <option>Bank</option>
                  <option>Payoneer</option>
                </select>
              </div>

              {/* 
              ----------------URL Fields-----------------
              
              */}
              <div>
                <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
                  Facebook
                  <span className="text-rose-600">*</span>
                </label>
                <input
                  type="url"
                  className="input xl:input-xl lg:input-lg md:input-md input-sm w-full  bg-gray-800 focus:bg-[#102E32] text-white"
                  placeholder="Facebook URL"
                />
              </div>
              <div>
                <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
                  YouTube Channel ID
                  <span className="text-rose-600">*</span>
                </label>
                <input
                  type="url"
                  className="input xl:input-xl lg:input-lg md:input-md input-sm w-full  bg-gray-800 focus:bg-[#102E32] text-white"
                  placeholder=" "
                />
              </div>
              <div>
                <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
                  Spotify URL
                  <span className="text-rose-600">*</span>
                </label>
                <input
                  type="url"
                  className="input xl:input-xl lg:input-lg md:input-md input-sm w-full  bg-gray-800 focus:bg-[#102E32] text-white"
                  placeholder=" "
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="checkbox bg-white checked:bg-green-500 accent-white"
                />
                <span className="text-lg poppins-regular cursor-pointer">
                  I have read and agree to the{" "}
                  <span className="text-green-400"> Terms and Conditions </span>
                  and <span className="text-green-400"> Privacy Policy</span>
                </span>
              </label>

              <button className="btn lg:col-span-2 bg-blue-700 border-blue-700 hover:bg-green-700 hover:border-green-700 shadow-none mt-4  text-white">
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccessRequestFormPage;
