import React from "react";
import MarketSearchbar from "../MarketSearchbar/MarketSearchbar";
import StyledDepartmentSectionCard from "./DepartmentSectionCard/DepartmentSectionCard.styled";

const GridDepartmentOverview = ({
  id,
  className,
  headerTitle,
  department,
  departmentData,
}) => {
  // Turn this section into State
  let sections = Object.keys(departmentData);
  //
  return (
    <section id={id} className={`${className} grid-department-overview`}>
      <header className="overview-header">
        {/* <h2>{headerTitle}</h2> */}
        {/* <MarketSearchbar
          id={department}
          name={`${department}Search`}
          placeholder={`Search ${department}`}
        /> */}
      </header>
      <section className="department-sections">
        {sections.map((section, index) => {
          let sectionLink = section.split(/(?=[A-Z])/).join(" ");
          let sectionDestination = section.toLowerCase();
          return (
            <StyledDepartmentSectionCard
              key={index}
              destination={`${department}/${sectionDestination}`}
              products={departmentData[section].products}
              linkMessage={`See All ${sectionLink}`}
              banner={departmentData[section].banner}
            />
          );
        })}
      </section>
      <footer className="overview-footer">
        {/* Something will go here. TBD. Possibly "Trending Deals" or "Recent Browsing History" */}
      </footer>
    </section>
  );
};

export default GridDepartmentOverview;
