import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledLink } from "./DepartmentSectionCard.styled";

// TODO - add details page routing to products

const DepartmentSectionCard = ({
  className,
  destination,
  products,
  linkMessage,
  banner
}) => {
  let navigate = useNavigate();
  const routeToProductDetails = (productId) => {
    return () => navigate(`${destination}/${productId}`);
  };
  return (
    <article className={`${className} department-section-card`}>
      <header className="section-card-header">
        {/* Link to ALL department products */}
        <StyledLink to={`${destination}`}>{linkMessage}</StyledLink>
      </header>
      <section className="product-grid">
        {/* MiniProductOverview cards in 2x2 grid layout. */}
        {products.map((product) => {
          return (
            <div
              className="product-grid-link"
              key={product.Id}
              onClick={routeToProductDetails(product.Id)}
            >
              <figure>
                <img src={product.ImageUrl} alt="Product Graphic" />
              </figure>
              <h6>{product.Title}</h6>
              {/* <hr/> */}
            </div>
          );
        })}
      </section>
      <footer className="product-grid-footer">
        {/* TODO - Insert card Title and Navigation Link (ex. Sunday Services) */}
        <h3>{banner}</h3>
      </footer>
    </article>
  );
};

export default DepartmentSectionCard;
