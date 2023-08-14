import axios from "axios";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";

function DashboardProperty({ agents }) {
  const handleDelete = async (id) => {
    const res = await axios.delete(
      `http://localhost:5000/api/delete-agent/${id}`
    );
    console.log(res.data);
  };
  return (
    <div className="w-[100%] p-5 ">
      <div className="header flex justify-start">
        <Box label="Active Agents" total="46" num="20" bg="bg-[green]" />
        <Box label="Disabled Agent" total="46" num="20" bg="bg-[red]" />
        <Box label="Total Agent" total="46" bg="bg-[purple]" />
        <Box label="Statistic" total="1.8%" bg="bg-[#1b22d3]" />
      </div>
      <div class="relative agent-list-con">
        <p class="dashbord-title">List of Agents</p>

        {agents &&
          agents.map((agent, index) => {
            return (
              <div class="dashbord-agent" key={index}>
                <div class="agent-box-container">
                  <div class="dashbord-agent-box">
                    <div class="image-con w-[7%]">
                      <div className="w-[50px] h-[50px] rounded-[50%]">
                        <img
                          src={agent.image}
                          alt=""
                          className="w-[50px] h-[50%] rounded-full cover"
                        />
                      </div>
                    </div>

                    <div class="name-con w-[13%] truncate">
                      <p class="name">{agent.name}</p>
                    </div>

                    <div class="icons-container w-[20%] flex justify-center gap-2">
                      <span>
                        <a href={agent.twitter}>
                          <i class="fa-brands fa-twitter">
                            <BiLogoTwitter size={20} />
                          </i>
                        </a>
                      </span>
                      <span>
                        <a href={agent.facebook}>
                          <i class="fa-brands fa-facebook-f">
                            <BiLogoFacebook size={20} />
                          </i>
                        </a>
                      </span>
                      <span>
                        <a href={agent.linkedin}>
                          <i class="fa-brands fa-linkedin-in">
                            <BiLogoLinkedin size={20} />
                          </i>
                        </a>
                      </span>
                      <span>
                        <a href={agent.instagram}>
                          <i class="fa-brands fa-instagram">
                            <BiLogoInstagram size={25} />
                          </i>
                        </a>
                      </span>
                    </div>
                    {/* <p class="dashbord-desc w-[40%]">
                      {agent.application.length < 100
                        ? agent.application
                        : `${agent.application.slice(0, 97)}...`}
                    </p> */}
                    <div className="w-[20%]">
                      <button
                        type="submit"
                        className="bg-[green] text-white py-2 px-3 rounded-md mx-2"
                      >
                        Approve
                      </button>
                      <button
                        type="submit"
                        className="bg-[red] text-white py-2 px-3 rounded-md mx-2"
                        onClick={() => handleDelete(agent._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

function Box(props) {
  return (
    <div
      className={`w-[200px] h-[120px] ${props.bg}
      }] rounded-md p-2 font-[500] text-[14px] flex flex-col mr-10 hover:scale-105 duration-500 transition-all`}
    >
      <p className="text-white font-bold uppercase">{props.label}</p>
      <div className="w-[100%] flex justify-center mt-3">
        <p className="total text-[25px] font-[900] text-white">{props.num}</p>
        {props.num && (
          <p className="num text-[18px] mt-2 font-[900] text-white">
            / {props.total}
          </p>
        )}
        {!props.num && (
          <p className="num text-[25px]  font-[900] text-white">
            {props.total}
          </p>
        )}
      </div>
      <p className="text-white text-[12px] text-center mt-2">All time record</p>
    </div>
  );
}

export default DashboardProperty;
