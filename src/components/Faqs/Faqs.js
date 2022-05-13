import React from "react";
import "./Faqs.css";

const Faqs = () => {
  let i;
  const accordion = document.getElementsByClassName("accordion");

  for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      this.classList.toggle("activeAccor");
    });
  }
  return (
    <div>
      <div className="faqs--container">
        <h1 className="faqs--heading">Faqs</h1>
        <div className="faqs--content">
          <div className="accordion">
            <h1 className="label">
              Velit venenatis pretium mattis consectetur massa pretium mattis ?
            </h1>
            <div className="panel">
              <p>
                Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut
                senectus nisl adipiscing posuere et a. Tincidunt consectetur
                sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur
                hendrerit massa felis, et. Cursus tortor ut fames sapien a
                vulputate amet malesuada.
              </p>
            </div>
          </div>

          <div className="accordion">
            <h1 className="label">
              Velit venenatis pretium mattis consectetur massa pretium mattis ?
            </h1>
            <div className="panel">
              <p>
                piscing posuere et a. Tincidunt consectetur sapien pellentesque
                vitae, nulla vitae sed feugiat. Consectetur hendrerit massa
                felis, et. Cursus tortor ut fames sapien a vulputate amet
                malesuada.
              </p>
            </div>
          </div>
          <div className="accordion">
            <h1 className="label">
              Velit venenatis pretium mattis consectetur massa pretium mattis ?
            </h1>
            <div className="panel">
              <p>
                piscing posuere et a. Tincidunt consectetur sapien pellentesque
                vitae, nulla vitae sed feugiat. Consectetur hendrerit massa
                felis, et. Cursus tortor ut fames sapien a vulputate amet
                malesuada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
