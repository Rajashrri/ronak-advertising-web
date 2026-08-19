import React, { useEffect, useState } from "react";
import Heading from "../reuse/Heading";
import { getTeamMembersApi } from "../../utils/frontApi";

const LeadershipTeam = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTeamMembers = async () => {
    try {
      const response = await getTeamMembersApi();

      if (response.data?.success) {
        setTeam(response.data.data || []);
      }
    } catch (error) {
      console.error("Failed to fetch leadership team:", error);
      setTeam([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  return (
    <section className="team-section">
      <div className="custom-container">
        <Heading title="Leadership Team" titleclass="text-black text-center" />

        {loading ? (
          <div className="text-center">
            <p>Loading...</p>
          </div>
        ) : team.length === 0 ? (
          <div className="text-center">
            <p>No team members found.</p>
          </div>
        ) : (
          <div className="team-grid">
            {team.map((member) => (
              <div className="team-card" key={member._id}>
                <img src={member.image} alt={member.name} />

                {member.linkedin && member.linkedin !== "#" && (
                  <a
                    href={member.linkedin}
                    className="linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        d="M10.4102 7.50004C10.4098 8.29568 10.0933 9.05859 9.53042 9.62092C8.96753 10.1832 8.20431 10.4989 7.40866 10.4985C6.61301 10.4981 5.8501 10.1817 5.28778 9.6188C4.72545 9.0559 4.40976 8.29269 4.41016 7.49704C4.41055 6.70139 4.72701 5.93848 5.2899 5.37615C5.85279 4.81383 6.61601 4.49814 7.41166 4.49854C8.20731 4.49893 8.97021 4.81539 9.53254 5.37828C10.0949 5.94117 10.4106 6.70439 10.4102 7.50004ZM10.5002 12.72H4.50016V31.5H10.5002V12.72ZM19.9802 12.72H14.0102V31.5H19.9202V21.645C19.9202 16.155 27.0752 15.645 27.0752 21.645V31.5H33.0002V19.605C33.0002 10.35 22.4102 10.695 19.9202 15.24L19.9802 12.72Z"
                        fill="#FA0000"
                      />
                    </svg>
                  </a>
                )}

                <div className="team-overlay">
                  <div className="team-content">
                    <h3>{member.name}</h3>

                    <p>
                      {member.designation}

                      {member.experience && (
                        <span>+{member.experience} YEARS OF EXPERIENCE</span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="shape"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LeadershipTeam;
