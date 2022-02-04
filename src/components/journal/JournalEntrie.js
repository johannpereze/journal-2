import React from "react";

export const JournalEntrie = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundImage:
            "url(https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/2400/public/media/image/2019/03/javascript.jpg)",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Un Nuevo Día</p>
        <p className="journal__entry-content">
          Culpa culpa proident sit sit. Quis amet sit deserunt est voluptate
          Lorem nulla.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
