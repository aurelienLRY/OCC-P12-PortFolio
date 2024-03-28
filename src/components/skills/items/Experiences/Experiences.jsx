import { Timeline, ConfigProvider } from "antd";
import {  UserOutlined } from '@ant-design/icons';

import { Dem, DroneLent, ExploitantDrone, Gerant } from "./Experience-item";
import "./experiences.scss"; 



function Experiences() {
  return (
    <div className="item-experience item">
        <ConfigProvider 
         theme={{
            components: {
              Timeline: {
                tailColor: "white",
                tailWidth: "0.3em",  
                itemPaddingBottom: "1.7em",
                dotBg: "#b37f44", 
              },
            },
            token: {
                colorText: "white",
                fontFamily: "Poppins",
                fontSize: "1em",
                margin: "10",
                controlHeightLG: "6.5em",
              },
          }}
        >  

      <Timeline
      className="timeline"
      mode="left"
        items={[

          {
            color: "#b37f44",
            label: "2020 -2022",
            children: <Gerant />,
          },
          {
            color: "#b37f44",
            label: "2016 -2020",
            children: <ExploitantDrone />,
          },
          {
            color: "#b37f44",
            label: "2016 -2020",
            children: <DroneLent />,
          },
          {
            color: "#b37f44",
            label: "2016 -2020",
            children: <Dem />,
          },

        ]}
      />
        </ConfigProvider>
    </div>
  );
}

export default Experiences;
