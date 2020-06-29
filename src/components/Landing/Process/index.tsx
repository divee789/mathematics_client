import React from "react";

import image1 from "../../../assets/images/image3.png";
import image2 from "../../../assets/images/Image2.png";
import image3 from "../../../assets/images/Image1.png";
import check from "../../../assets/images/check.png";

import "./index.scss";
const Process = () => (
  <>
    <section className="first_process">
      <div>
        <p>Effortless Validation for</p>
        <h1>Efficient And Informative UI</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          consequuntur cum perspiciatis nihil explicabo similique obcaecati
          necessitatibus sed eum ratione doloribus, doloremque minus aliquam
          tempora pariatur voluptate exercitationem eos accusamus.
        </p>
        <h3>Access to learning</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          adipisci dolores porro accusamus veniam praesentium, assumenda cumque
          quaerat. Officia quo nam incidunt expedita doloremque repellendus
          voluptatum cumque corrupti accusamus nihil?
        </p>
        <h3>Access to learning</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          adipisci dolores porro accusamus veniam praesentium, assumenda cumque
          quaerat. Officia quo nam incidunt expedita doloremque repellendus
          voluptatum cumque corrupti accusamus nihil?
        </p>
        <h3>Access to learning</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          adipisci dolores porro accusamus veniam praesentium, assumenda cumque
          quaerat. Officia quo nam incidunt expedita doloremque repellendus
          voluptatum cumque corrupti accusamus nihil?
        </p>
      </div>
      <div>
        <img src={image1} alt="education is power" />
      </div>
    </section>

    <section className="second_process">
      <div className="first_item">
        <img src={image3} alt="education is power" />
      </div>
      <div className="second_item">
        <p>Easier Decision making for</p>
        <h1>Decision Algorithms</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          adipisci dolores porro accusamus veniam praesentium, assumenda cumque
          quaerat. Officia quo nam incidunt expedita doloremque repellendus
          voluptatum cumque corrupti accusamus nihil?
        </p>
        <div className="checks">
          <div>
            <img src={check} />
            <p>Never worry about overpaying for your energy again. </p>
          </div>
          <div>
            <img src={check} />
            <p>Never worry about overpaying for your energy again. </p>
          </div>
          <div>
            <img src={check} />
            <p>Never worry about overpaying for your energy again. </p>
          </div>
        </div>
      </div>
    </section>
    <section className="first_process">
      <div>
        <p>Effortless Validation for</p>
        <h1>Efficient And Informative UI</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          consequuntur cum perspiciatis nihil explicabo similique obcaecati
          necessitatibus sed eum ratione doloribus
        </p>
        <h3>Access to learning</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          adipisci dolores porro accusamus veniam praesentium, assumenda cumque
          quaerat. Officia quo nam incidunt expedita doloremque repellendus
          voluptatum cumque corrupti accusamus nihil?
        </p>
        <h3>Access to learning</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          adipisci dolores porro accusamus veniam praesentium, assumenda cumque
          quaerat. Officia quo nam incidunt expedita doloremque repellendus
          voluptatum cumque corrupti accusamus nihil?
        </p>
        <h3>Access to learning</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          adipisci dolores porro accusamus veniam praesentium, assumenda cumque
          quaerat. Officia quo nam incidunt expedita doloremque repellendus
          voluptatum cumque corrupti accusamus nihil?
        </p>
      </div>
      <div>
        <img src={image2} alt="education is power" />
      </div>
    </section>
  </>
);

export default Process;
