import React, { useEffect, useState } from "react";
import Heading from "../reuse/Heading";
import { getCoreTeamApi } from "../../utils/frontApi";

const CoreTeam = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCoreTeam = async () => {
    try {
      const response = await getCoreTeamApi();

      if (response.data?.success) {
        setTeam(response.data.data || []);
      }
    } catch (error) {
      console.error("Failed to fetch core team:", error);
      setTeam([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoreTeam();
  }, []);

  return (
    <section className="core-team">
      <div className="custom-container">

        <Heading
          title="Core Team"
          titleclass="text-black text-center"
        />

        {loading ? (
          <div className="text-center">
            <p>Loading...</p>
          </div>
        ) : team.length === 0 ? (
          <div className="text-center">
            <p>No core team members found.</p>
          </div>
        ) : (
          <div className="core-grid">
            {team.map((item) => (
              <div className="core-card" key={item._id}>

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="core-info">
                  <div className="core-content">

                    <div className="triangle"></div>

                    <h3>{item.name}</h3>

                    <p>{item.designation}</p>

                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default CoreTeam;