import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="about">
  <div className="row">
    <div className="three columns">
      <img className="profile-pic" src="images/profilepic.jpg" alt="" />
    </div>
    <div className="nine columns main-col">
      <h2>About Me</h2>
      <p>{resumeData.aboutme}
      </p>
      <div className="row">
        <div className="columns contact-details">
          <h2>Contact Details</h2>
          <p className="address">
            <span>{resumeData.name}</span><br />
            {/* 
            <span>1600 Amphitheatre Parkway<br />
              Mountain View, CA 94043 US
            </span><br />
            <span>(123)456-7890</span><br /> 
            */}
            <span>{resumeData.email}</span>
          </p>
        </div>
        {/* <div className="columns download">
          <p>
            <a href={resumeData.resumelink} className="button"><i className="fa fa-download" />Download Resume</a>
          </p>
        </div> */}
      </div> {/* end row */}
    </div> {/* end .main-col */}
  </div>
</section>

      </React.Fragment>
    );
  }
}