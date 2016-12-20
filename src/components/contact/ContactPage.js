import React from 'react';

const ContactPage = () => {

  return (
    <div>
      <div className="breadcrumbs">
        <div className="container">
          <ol className="breadcrumb breadcrumb--ys pull-left">
            <li className="home-link"><a href="index.html" className="icon icon-home"/></li>
            <li className="active">Contact</li>
          </ol>
        </div>
      </div>
      <div id="pageContent">
        <div className="content-bottom"/>
        <section className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12"><h2 className="text-uppercase title-bottom">CONTACTs</h2>
              <ul className="list-icon">
                <li><span className="icon icon-home"/><strong>Address :</strong>{/* react-text: 984 */} 7563 St. Vicent
                  Place, Glasgow{/* /react-text */}</li>
                <li><span className="icon icon-call"/><strong>Phone:</strong>{/* react-text: 988 */} +777 2345
                  7885{/* /react-text */}</li>
                <li><span className="fa fa-fax"/><strong>Fax:</strong>{/* react-text: 992 */} +777 2345
                  7886{/* /react-text */}</li>
                <li><span className="icon icon-schedule"/><strong>Hours:</strong>{/* react-text: 996 */} 7 Days a week
                  from 10:00 am to 6:00 pm{/* /react-text */}</li>
                <li><span
                  className="icon icon-mail"/><strong>E-mail:</strong>{/* react-text: 1000 */} {/* /react-text */}<a
                  className="color" href="mailto:info@mydomain.com">info@mydomain.com</a></li>
              </ul>
              <div className="divider divider--sm"/>
              <div className="social-links social-links--large">
                <ul>
                  <li><a className="icon fa fa-facebook" href="http://www.facebook.com/"/></li>
                  <li><a className="icon fa fa-twitter" href="http://www.twitter.com/"/></li>
                  <li><a className="icon fa fa-google-plus" href="http://www.google.com/"/></li>
                  <li><a className="icon fa fa-instagram" href="https://instagram.com/"/></li>
                  <li><a className="icon fa fa-youtube-square" href="https://www.youtube.com/"/></li>
                </ul>
              </div>
            </div>
            <div className="col-md-9  col-sm-12">
              <div className="divider divider--lg visible-xs"/>
              <h2 className="text-uppercase title-bottom">GET IN TOUCH WITH US</h2>
              <form action="#" className="contact-form">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group"><label
                      htmlFor="inputName">{/* react-text: 1023 */}Name {/* /react-text */}<sup>*</sup></label><input
                      type="text" className="form-control" id="inputName"/></div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group"><label
                      htmlFor="inputEmail">{/* react-text: 1029 */}Email {/* /react-text */}<sup>*</sup></label><input
                      type="email" className="form-control" id="inputEmail"/></div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group"><label htmlFor="inputPhone">Phone </label><input type="text"
                                                                                                 className="form-control"
                                                                                                 id="inputPhone"/></div>
                  </div>
                </div>
                <div className="form-group"><label
                  htmlFor="textareaMessage">{/* react-text: 1038 */}Message {/* /react-text */}<sup>*</sup></label><textarea
                  className="form-control" rows={12} id="textareaMessage" defaultValue={""}/></div>
                <div className="pull-right note">* Required Fields</div>
                <button className="btn btn--ys btn--xl btn-top" type="submit">Send message</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>

  );
};

export default ContactPage;
